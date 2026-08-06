import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

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

function xml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
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

async function prestaPost(
  resource: string,
  singular: string,
  body: string
): Promise<number> {
  const response = await fetch(
    `${API_URL}/${resource}?output_format=JSON`,
    {
      method: "POST",
      headers: authHeaders({
        "Content-Type": "application/xml",
        Accept: "application/json",
      }),
      body,
      cache: "no-store",
    }
  );

  const text = await response.text();

  if (!response.ok) {
    throw new Error(
      `PrestaShop POST ${resource} failed: ${response.status} ${text}`
    );
  }

  try {
    const data = JSON.parse(text);

    const id = Number(
      data?.[singular]?.id ??
        data?.prestashop?.[singular]?.id ??
        data?.[`${singular}s`]?.[0]?.id ??
        data?.prestashop?.[`${singular}s`]?.[0]?.id
    );

    if (id) {
      return id;
    }
  } catch {}

  const match =
    text.match(/<id[^>]*><!\[CDATA\[(\d+)\]\]><\/id>/) ??
    text.match(/<id[^>]*>(\d+)<\/id>/);

  if (match) {
    return Number(match[1]);
  }

  const location = response.headers.get("location");
  const locationId = location?.match(
    new RegExp(`/${resource}/(\\d+)(?:[/?]|$)`)
  )?.[1];

  if (locationId) {
    return Number(locationId);
  }

  console.error(`Unexpected PrestaShop POST ${resource} response:`, {
    status: response.status,
    location,
    text,
  });

  throw new Error(`Could not read created ${singular} ID`);
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

    const currencyId =
      (await getFirstId("currencies", "filter[iso_code]=EUR")) ?? 1;

    const countryCode =
      country === "Portugal"
        ? "PT"
        : country === "France"
          ? "FR"
          : "FR";

    const countryId = await getFirstId(
      "countries",
      `filter[iso_code]=${countryCode}`
    );

    if (!countryId) {
      throw new Error(`Country ${countryCode} was not found in PrestaShop.`);
    }

    const carrierId = await getFirstId(
      "carriers",
      "filter[active]=1&filter[deleted]=0"
    );

    if (!carrierId) {
      throw new Error(
        "No active carrier was found in PrestaShop. Configure a carrier first."
      );
    }

    let customerId = await getFirstId(
      "customers",
      `filter[email]=${encodeURIComponent(email)}`
    );

    if (!customerId) {
      const password =
        crypto.randomBytes(18).toString("base64url") + "Aa1!";

      customerId = await prestaPost(
        "customers",
        "customer",
        `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <customer>
    <id_lang>${languageId}</id_lang>
    <passwd>${xml(password)}</passwd>
    <lastname>${xml(lastName)}</lastname>
    <firstname>${xml(firstName)}</firstname>
    <email>${xml(email)}</email>
    <active>1</active>
    <is_guest>1</is_guest>
    <id_shop>1</id_shop>
    <id_shop_group>1</id_shop_group>
    <id_default_group>3</id_default_group>
<associations>
  <groups>
    <group>
      <id>3</id>
    </group>
  </groups>
</associations>
  </customer>
</prestashop>`
      );
    }

    const addressId = await prestaPost(
      "addresses",
      "address",
      `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <address>
    <id_customer>${customerId}</id_customer>
    <id_country>${countryId}</id_country>
    <alias>Checkout</alias>
    <lastname>${xml(lastName)}</lastname>
    <firstname>${xml(firstName)}</firstname>
    <address1>${xml(address)}</address1>
    <address2>${xml(addressComplement)}</address2>
    <postcode>${xml(postalCode)}</postcode>
    <city>${xml(city)}</city>
    <phone>${xml(phone)}</phone>
    <active>1</active>
  </address>
</prestashop>`
    );

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

    const cartRows = products
      .map(
        (product) => `
      <cart_row>
        <id_product>${product.id}</id_product>
        <id_product_attribute>0</id_product_attribute>
        <id_address_delivery>${addressId}</id_address_delivery>
        <quantity>${product.quantity}</quantity>
      </cart_row>`
      )
      .join("");

    const prestaCartId = await prestaPost(
      "carts",
      "cart",
      `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <cart>
    <id_address_delivery>${addressId}</id_address_delivery>
    <id_address_invoice>${addressId}</id_address_invoice>
    <id_currency>${currencyId}</id_currency>
    <id_customer>${customerId}</id_customer>
    <id_lang>${languageId}</id_lang>
    <id_carrier>${carrierId}</id_carrier>
    <id_shop>1</id_shop>
    <associations>
      <cart_rows>
        ${cartRows}
      </cart_rows>
    </associations>
  </cart>
</prestashop>`
    );

    const reference = `HEN${crypto
      .randomBytes(5)
      .toString("hex")
      .slice(0, 7)
      .toUpperCase()}`;

    const orderId = await prestaPost(
      "orders",
      "order",
      `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <order>
    <id_address_delivery>${addressId}</id_address_delivery>
    <id_address_invoice>${addressId}</id_address_invoice>
    <id_cart>${prestaCartId}</id_cart>
    <id_currency>${currencyId}</id_currency>
    <id_lang>${languageId}</id_lang>
    <id_customer>${customerId}</id_customer>
    <id_carrier>${carrierId}</id_carrier>
    <id_shop>1</id_shop>
    <reference>${reference}</reference>

    <module>ps_cashondelivery</module>
    <payment>Cash on delivery (COD)</payment>
    <total_paid>${total.toFixed(6)}</total_paid>
    <total_paid_tax_incl>${total.toFixed(6)}</total_paid_tax_incl>
    <total_paid_tax_excl>${total.toFixed(6)}</total_paid_tax_excl>
    <total_paid_real>0.000000</total_paid_real>

    <total_products>${subtotal.toFixed(6)}</total_products>
    <total_products_wt>${subtotal.toFixed(6)}</total_products_wt>

    <total_shipping>${shipping.toFixed(6)}</total_shipping>
    <total_shipping_tax_incl>${shipping.toFixed(6)}</total_shipping_tax_incl>
    <total_shipping_tax_excl>${shipping.toFixed(6)}</total_shipping_tax_excl>

    <total_discounts>0.000000</total_discounts>
    <total_discounts_tax_incl>0.000000</total_discounts_tax_incl>
    <total_discounts_tax_excl>0.000000</total_discounts_tax_excl>

    <total_wrapping>0.000000</total_wrapping>
    <total_wrapping_tax_incl>0.000000</total_wrapping_tax_incl>
    <total_wrapping_tax_excl>0.000000</total_wrapping_tax_excl>

    <conversion_rate>1.000000</conversion_rate>
  </order>
</prestashop>`
    );

    for (const product of products) {
      const lineTotal = product.price * product.quantity;

      await prestaPost(
        "order_details",
        "order_detail",
        `<?xml version="1.0" encoding="UTF-8"?>
<prestashop>
  <order_detail>
    <id_order>${orderId}</id_order>
    <id_warehouse>0</id_warehouse>
    <id_shop>1</id_shop>

    <product_id>${product.id}</product_id>
    <product_attribute_id>0</product_attribute_id>
    <product_name>${xml(product.name)}</product_name>
    <product_quantity>${product.quantity}</product_quantity>

    <product_price>${product.price.toFixed(6)}</product_price>
    <unit_price_tax_incl>${product.price.toFixed(6)}</unit_price_tax_incl>
    <unit_price_tax_excl>${product.price.toFixed(6)}</unit_price_tax_excl>

    <total_price_tax_incl>${lineTotal.toFixed(6)}</total_price_tax_incl>
    <total_price_tax_excl>${lineTotal.toFixed(6)}</total_price_tax_excl>

    <original_product_price>${product.price.toFixed(6)}</original_product_price>
  </order_detail>
</prestashop>`
      );
    }

    const response = NextResponse.json({
      ok: true,
      orderId,
      reference,
      subtotal,
      shipping,
      total,
    });

    response.cookies.set("henrys_cart", JSON.stringify({ items: [] }), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error("Checkout error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not create the order.",
      },
      { status: 500 }
    );
  }
}