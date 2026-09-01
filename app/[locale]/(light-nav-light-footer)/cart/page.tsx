"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
interface CartItem {
  id: number;
  name: string;
  origin: string;
  pricePerUnit: number;
  quantity: number;
}

export function useCartEngine() {
  const params = useParams<{ locale: string }>();
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const shipping = 15;

  useEffect(() => {
    const loadCart = async () => {
      try {
        const response = await fetch(
          `/api/cart/details?locale=${params.locale}`,
          {
            credentials: "include",
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error("Unable to load the cart");
        }

        const cart = await response.json();
        setItems(cart.items);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, [params.locale]);

  const updateQuantity = async (id: number, quantity: number) => {
    if (quantity < 1) {
      return;
    }

    const response = await fetch("/api/cart", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        productId: id,
        quantity,
      }),
    });

    if (!response.ok) {
      throw new Error("Unable to update the quantity");
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );
  };

  const removeItem = async (id: number) => {
    const response = await fetch(`/api/cart?productId=${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Unable to remove the product");
    }

    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id),
    );
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.pricePerUnit * item.quantity,
    0,
  );

  const total = items.length > 0 ? subtotal + shipping : 0;

  return {
    items,
    shipping,
    subtotal,
    total,
    isLoading,
    updateQuantity,
    removeItem,
  };
}

export default function CartPage() {
  const router = useRouter();
  const params = useParams<{ locale: string }>();

  const {
    items,
    shipping,
    subtotal,
    total,
    isLoading,
    updateQuantity,
    removeItem,
  } = useCartEngine();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen bg-[#FFFBF7] pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 md:px-16 font-['Comfortaa'] text-[#442F0E]"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-['Pinyon_Script'] text-[48px] sm:text-[64px] md:text-[82px] leading-none text-center text-[#442F0E] mb-10 sm:mb-16 md:mb-20"
        >
          Votre Panier
        </motion.h1>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          <div className="w-full lg:max-w-[765px] lg:flex-1 space-y-8">
            <AnimatePresence>
              {items.map((item) => {
                const itemSubtotal = item.pricePerUnit * item.quantity;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 gap-6 sm:gap-4 border-b border-[#442F0E]/10 sm:border-b-0 w-full overflow-hidden"
                  >
                    <div className="flex justify-between items-start sm:block">
                      <div>
                        <motion.h2
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="text-[18px] sm:text-[21.27px] font-bold text-[#442F0E] leading-tight"
                        >
                          {item.name}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="text-[15px] sm:text-[18.13px] leading-none opacity-60 text-[#442F0E] mt-1"
                        >
                          {item.origin}
                        </motion.p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="sm:hidden text-[#442F0E]/40 hover:text-[#442F0E] transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center gap-3 justify-start sm:justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
disabled={item.quantity <= 1}
                        className="w-8 h-8 rounded-full border border-[#442F0E] flex items-center justify-center hover:bg-[#442F0E]/5 transition-colors text-base font-medium select-none leading-none cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        −
                      </motion.button>

                      <motion.span
                        key={item.quantity}
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="text-[18px] font-semibold w-5 text-center select-none"
                      >
                        {item.quantity}
                      </motion.span>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-[#442F0E] flex items-center justify-center hover:bg-[#442F0E]/5 transition-colors text-base font-medium select-none leading-none cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </motion.button>
                    </div>

                    <div className="text-left sm:text-right">
                      <motion.p
                        key={itemSubtotal}
                        initial={{ opacity: 0.5, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-[18px] sm:text-[20px] font-semibold text-[#442F0E] leading-tight"
                      >
                        {itemSubtotal.toFixed(2).replace(".", ",")} €
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-[12px] sm:text-[14px] leading-none opacity-50 text-[#442F0E] mt-1"
                      >
                        {item.pricePerUnit.toFixed(2).replace(".", ",")} € /
                        unité
                      </motion.p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeItem(item.id)}
                      className="hidden sm:block text-[#442F0E]/40 hover:text-[#442F0E] transition-colors cursor-pointer"
                      aria-label="Remove item"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </motion.button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-[351px] space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-['Pinyon_Script'] text-[36px] sm:text-[42px] leading-tight text-center text-[#442F0E] mb-4 sm:mb-6"
            >
              Résumé
            </motion.h2>

            <div className="space-y-4 text-[#442F0E]">
              <div className="flex justify-between items-center text-[15px] sm:text-[16px] pb-4 border-b border-[#442F0E]/10">
                <span>Sous-total</span>
                <motion.span
                  key={subtotal}
                  initial={{ opacity: 0.5, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {subtotal.toFixed(2).replace(".", ",")} €
                </motion.span>
              </div>

              <div className="flex justify-between items-center text-[15px] sm:text-[16px] pb-4 border-b border-[#442F0E]/10">
                <span>Livraison</span>
                <span>{shipping.toFixed(2).replace(".", ",")} €</span>
              </div>

              <div className="pt-2 flex justify-between items-center text-[18px] sm:text-[20px] font-bold text-[#325175]">
                <span>Total</span>
                <motion.span
                  key={total}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  {total.toFixed(2).replace(".", ",")} €
                </motion.span>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <motion.button
                type="button"
                onClick={() => router.push(`/${params.locale}/checkout`)}
                disabled={items.length === 0 || isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full h-[56px] sm:h-[60px] bg-[#325175] text-white rounded-[160px] font-semibold text-[16px] sm:text-[18px] hover:bg-[#253d5a] transition-colors border border-[#325175] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
                Passer la commande
              </motion.button>

              <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#442F0E]/60 pt-1">
                <svg
                  className="w-3.5 h-3.5 text-[#442F0E]/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#325175"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span style={{ color: "#325175" }}>
                  Paiement sécurisé par Henry&apos;s Luxury
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
