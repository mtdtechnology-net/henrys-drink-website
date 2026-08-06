import { NextRequest, NextResponse } from "next/server";

type CartItem = {
  productId: number;
  quantity: number;
};

type Cart = {
  items: CartItem[];
};

const languageIds: Record<string, number> = {
  en: 1,
  fr: 2,
  pt: 3,
};

function getTranslation(value: unknown, languageId: number) {
  if (typeof value === "string") {
    return value;
  }

  if (!Array.isArray(value)) {
    return "";
  }

  return (
    value.find((translation) => Number(translation.id) === languageId)?.value ??
    value[0]?.value ??
    ""
  );
}

export async function GET(request: NextRequest) {
  const rawCart = request.cookies.get("henrys_cart")?.value;

  if (!rawCart) {
    return NextResponse.json({ items: [] });
  }

  let cart: Cart;

  try {
    cart = JSON.parse(decodeURIComponent(rawCart));
  } catch {
    return NextResponse.json({ items: [] });
  }

  const locale = request.nextUrl.searchParams.get("locale") ?? "en";
  const languageId = languageIds[locale] ?? 1;

  const apiUrl = process.env.PRESTASHOP_API_URL;
  const apiKey = process.env.PRESTASHOP_API_KEY;

  if (!apiUrl || !apiKey) {
    return NextResponse.json(
      { error: "PrestaShop API is not configured" },
      { status: 500 },
    );
  }

  const items = await Promise.all(
    cart.items.map(async ({ productId, quantity }) => {
      const response = await fetch(
        `${apiUrl}/products/${productId}?output_format=JSON`,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
          },
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error(`Could not load PrestaShop product ${productId}`);
      }

      const { product } = await response.json();

      return {
        id: productId,
        name: getTranslation(product.name, languageId),
        origin: "Bordeaux",
        pricePerUnit: Number(product.price),
        quantity,
      };
    }),
  );

  return NextResponse.json({ items });
}