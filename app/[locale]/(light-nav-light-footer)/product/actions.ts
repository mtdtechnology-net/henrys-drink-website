"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type CartItem = {
  productId: number;
  quantity: number;
};

type Cart = {
  items: CartItem[];
};

export async function addToCartAction(formData: FormData) {
  const productId = Number(formData.get("productId"));
  const locale = String(formData.get("locale") || "en");

  if (!Number.isInteger(productId) || productId <= 0) {
    throw new Error("Invalid product ID");
  }

  const cookieStore = await cookies();
  const currentCookie = cookieStore.get("henrys_cart")?.value;

  let cart: Cart = { items: [] };

  if (currentCookie) {
    try {
      cart = JSON.parse(currentCookie) as Cart;
    } catch {
      cart = { items: [] };
    }
  }

  const existingItem = cart.items.find(
    (item) => item.productId === productId,
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({
      productId,
      quantity: 1,
    });
  }

  cookieStore.set("henrys_cart", JSON.stringify(cart), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(`/${locale}/cart`);
}