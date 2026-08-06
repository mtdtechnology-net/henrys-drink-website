import { NextRequest, NextResponse } from "next/server";

type CartItem = {
  productId: number;
  quantity: number;
};

type Cart = {
  items: CartItem[];
};

const CART_COOKIE = "henrys_cart";

function readCart(request: NextRequest): Cart {
  const value = request.cookies.get(CART_COOKIE)?.value;

  if (!value) {
    return { items: [] };
  }

  try {
    const cart = JSON.parse(decodeURIComponent(value)) as Cart;

    return {
      items: Array.isArray(cart.items) ? cart.items : [],
    };
  } catch {
    return { items: [] };
  }
}

function createResponse(cart: Cart) {
  const response = NextResponse.json(cart);

  response.cookies.set(CART_COOKIE, encodeURIComponent(JSON.stringify(cart)), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}

export async function GET(request: NextRequest) {
  return NextResponse.json(readCart(request));
}

export async function POST(request: NextRequest) {
  const { productId } = (await request.json()) as {
    productId?: number;
  };

  if (!Number.isInteger(productId) || Number(productId) <= 0) {
    return NextResponse.json(
      { error: "Invalid product ID" },
      { status: 400 },
    );
  }

  const cart = readCart(request);
  const existingItem = cart.items.find(
    (item) => item.productId === Number(productId),
  );

  if (existingItem) {
    existingItem.quantity = 1;
  } else {
    cart.items.push({
      productId: Number(productId),
      quantity: 1,
    });
  }

  return createResponse(cart);
}

export async function PATCH(request: NextRequest) {
  const { productId, quantity } = (await request.json()) as {
    productId?: number;
    quantity?: number;
  };

  if (
    !Number.isInteger(productId) ||
    !Number.isInteger(quantity) ||
    Number(productId) <= 0
  ) {
    return NextResponse.json(
      { error: "Invalid cart update" },
      { status: 400 },
    );
  }

  const cart = readCart(request);

  if (Number(quantity) <= 0) {
    cart.items = cart.items.filter(
      (item) => item.productId !== Number(productId),
    );

    return createResponse(cart);
  }

  const existingItem = cart.items.find(
    (item) => item.productId === Number(productId),
  );

  if (!existingItem) {
    return NextResponse.json(
      { error: "Product is not in the cart" },
      { status: 404 },
    );
  }

  existingItem.quantity = Number(quantity);

  return createResponse(cart);
}

export async function DELETE(request: NextRequest) {
  const productId = request.nextUrl.searchParams.get("productId");
  const cart = readCart(request);

  if (productId) {
    cart.items = cart.items.filter(
      (item) => item.productId !== Number(productId),
    );

    return createResponse(cart);
  }

  return createResponse({ items: [] });
}