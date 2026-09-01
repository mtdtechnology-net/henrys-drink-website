"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type AddToCartButtonProps = {
  productId: number;
  locale: string;
};

export function AddToCartButton({
  productId,
  locale,
}: AddToCartButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          productId,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to add product to cart");
      }

      router.push(`/${locale}/cart`);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("The product could not be added to your cart.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={isLoading}
      className="flex h-[65px] w-[190px] cursor-pointer items-center justify-center rounded-[160px] bg-[#325175] font-comfortaa text-[22px] font-medium leading-none text-white shadow-sm transition-colors hover:bg-[#233a54] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isLoading ? "Adding..." : "Add to cart"}
    </button>
  );
}