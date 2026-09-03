import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";

const API_URL = process.env.PRESTASHOP_API_URL!;
const API_KEY = process.env.PRESTASHOP_API_KEY!;

type CartItem = {
  productId: number;
  quantity: number;
};

function authHeaders(extra: Record<string, string> = {}) {
  return {
    Authorization: `Basic ${Buffer.from(`${API_KEY}:`).toString("base64")}`,
    ...extra,
  };
}

async function prestaGet(path: string) {
  const response = await fetch(`${API_URL}/${path}`, {
    headers: authHeaders({
      Accept: "application/json",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `PrestaShop GET ${path} failed: ${response.status} ${await response.text()}`
    );
  }

  return response.json();
}

async function getFirstId(resource: string, query: string) {
  const data = await prestaGet(
    `${resource}?${query}&display=[id]&output_format=JSON`
  );

  const rows = data?.[resource];

  if (!Array.isArray(rows) || !rows.length) {
    return null;
  }

  return Number(rows[0].id);
}

function localizedValue(
  values: Array<{ id: number; value: string }> | string,
  languageId: number
) {
  if (typeof values === "string") {
    return values;
  }

  return (
    values?.find((value) => Number(value.id) === languageId)?.value ??
    values?.[0]?.value ??
    ""
  );
}

export async function POST(request: NextRequest) {
  try {
    if (!API_URL || !API_KEY) {
      return NextResponse.json(
        { error: "PrestaShop API is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      firstName,
      lastName,
      address,
      addressComplement,
      postalCode,
      city,
      country,
      email,
      phone,
      locale = "en",
    } = body;

    if (
      !firstName ||
      !lastName ||
      !address ||
      !postalCode ||
      !city ||
      !email
    ) {
      return NextResponse.json(
        { error: "Please complete all required checkout fields." },
        { status: 400 }
      );
    }

    const cartCookie = request.cookies.get("henrys_cart")?.value;

    if (!cartCookie) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    let cartItems: CartItem[] = [];

    try {
      const parsed = JSON.parse(decodeURIComponent(cartCookie));
      cartItems = Array.isArray(parsed?.items) ? parsed.items : [];
    } catch {
      return NextResponse.json(
        { error: "Invalid cart." },
        { status: 400 }
      );
    }

    if (!cartItems.length) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const languageId =
      (await getFirstId(
        "languages",
        `filter[iso_code]=${encodeURIComponent(locale)}`
      )) ?? 1;

    const products = await Promise.all(
      cartItems.map(async (item) => {
        const data = await prestaGet(
          `products/${item.productId}?output_format=JSON`
        );

        const product = data.product;

        return {
          id: Number(product.id),
          name: localizedValue(product.name, languageId),
          quantity: Math.max(1, Number(item.quantity)),
          price: Number(product.price),
        };
      })
    );

    const subtotal = products.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const shipping = 15;
    const total = subtotal + shipping;

    const reference = `HEN${crypto
      .randomBytes(5)
      .toString("hex")
      .slice(0, 7)
      .toUpperCase()}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: products.map((product) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity,
      })),
      metadata: {
        reference,
        locale,
        firstName,
        lastName,
        email,
        phone: phone ?? "",
        address,
        addressComplement: addressComplement ?? "",
        postalCode,
        city,
        country,
        items: JSON.stringify(
          cartItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          }))
        ),
      },
      customer_email: email,
      client_reference_id: reference,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/checkout`,
    });

    return NextResponse.json({
      ok: true,
      paymentUrl: session.url,
      orderReference: reference,
      reference,
      subtotal,
      shipping,
      total,
    });
  } catch (error) {
    console.error("Checkout error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not start checkout.",
      },
      { status: 500 }
    );
  }
}
