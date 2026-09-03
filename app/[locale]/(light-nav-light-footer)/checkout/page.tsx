"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "motion/react";

type CartItem = {
  productId: number;
  quantity: number;
  name: string;
  origin?: string;
  price?: number;
  pricePerUnit?: number;
};

export default function CheckoutPage() {
  const params = useParams<{ locale: string }>();
  const locale = params.locale ?? "en";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    addressComplement: "",
    postalCode: "",
    city: "",
    country: "France",
    email: "",
    phone: "",
  });

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loadingCart, setLoadingCart] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const formatter = new Intl.NumberFormat(
    locale === "fr" ? "fr-FR" : locale === "pt" ? "pt-PT" : "en-IE",
    {
      style: "currency",
      currency: "EUR",
    },
  );

  function getUnitPrice(item: CartItem) {
    const price = Number(item.price ?? item.pricePerUnit ?? 0);
    return Number.isFinite(price) ? price : 0;
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + getUnitPrice(item) * item.quantity,
    0,
  );

  const shipping = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  useEffect(() => {
    async function loadCart() {
      try {
        const response = await fetch(
          `/api/cart/details?locale=${encodeURIComponent(locale)}`,
          { cache: "no-store" },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? "Could not load cart.");
        }

        const itemMap = new Map<number, CartItem>();

for (const item of data.items ?? []) {
  const currentItem = itemMap.get(item.productId);

  itemMap.set(item.productId, {
    ...item,
    price: Number(item.price ?? item.pricePerUnit ?? 0),
    quantity: (currentItem?.quantity ?? 0) + item.quantity,
  });
}

setCartItems(
  Array.from(itemMap.values()).filter((item) => item.quantity > 0),
);
      } catch (error) {
        setCheckoutError(
          error instanceof Error ? error.message : "Could not load cart.",
        );
      } finally {
        setLoadingCart(false);
      }
    }

    loadCart();
  }, [locale]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function confirmOrder() {
    if (submitting) return;

    if (cartItems.length === 0) {
      setCheckoutError("Your cart is empty.");
      return;
    }

    const requiredFields = [
      formData.firstName,
      formData.lastName,
      formData.address,
      formData.postalCode,
      formData.city,
      formData.email,
    ];

    if (requiredFields.some((value) => !value.trim())) {
      setCheckoutError("Please complete all required delivery details.");
      return;
    }

    setCheckoutError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Could not create order.");
      }

      if (!data.paymentUrl) {
        throw new Error("Could not start checkout with the payment provider.");
      }

      window.location.assign(data.paymentUrl);
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : "Could not create order.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#FFFBF7] px-4 pb-16 pt-28 font-['Comfortaa'] text-[#325175] sm:px-8 sm:pb-24 sm:pt-36 md:px-16 md:pt-40">
      <div className="mx-auto max-w-[1280px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-center font-['Pinyon_Script'] text-[48px] leading-none text-[#442F0E] sm:mb-8 sm:text-[64px] md:mb-10 md:text-[82px]"
        >
          Complete Your Order
        </motion.h1>

        {checkoutError && (
          <p className="mb-6 rounded-2xl border border-[#95000D]/30 bg-[#95000D]/10 px-5 py-4 text-center text-sm text-[#95000D]">
            {checkoutError}
          </p>
        )}

        <div className="mb-10 flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full rounded-[22px] border border-[#325175]/30 bg-white/55 px-6 py-8 shadow-[0_12px_40px_rgba(50,81,117,0.05)] sm:px-10 sm:py-10 lg:flex-1"
          >
            <h2 className="mb-8 text-[18px] font-bold uppercase tracking-[0.12em] text-[#325175]">
              Shipping Address
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field
                  label="First Name"
                  name="firstName"
                  placeholder="Jean"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Last Name"
                  name="lastName"
                  placeholder="Dupont"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <Field
                label="Address"
                name="address"
                placeholder="15 Avenue des Champs-Élysées"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <Field
                label="Address Details"
                name="addressComplement"
                placeholder="Apartment, floor (optional)"
                value={formData.addressComplement}
                onChange={handleChange}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field
                  label="Postal Code"
                  name="postalCode"
                  placeholder="75008"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="City"
                  name="city"
                  placeholder="Paris"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <Field
                label="Country"
                name="country"
                placeholder="France"
                value={formData.country}
                onChange={handleChange}
                required
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field
                  label="Email"
                  name="email"
                  placeholder="jean.dupont@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
                <Field
                  label="Phone"
                  name="phone"
                  placeholder="+33 6 00 00 00 00"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full rounded-[22px] bg-white/35 px-6 py-7 sm:px-8 lg:w-[351px]"
          >
            <h2 className="mb-6 text-left font-['Pinyon_Script'] text-[42px] leading-tight text-[#325175]">
              Summary
            </h2>

            {loadingCart ? (
              <p className="text-sm text-[#325175]/60">Loading cart…</p>
            ) : cartItems.length === 0 ? (
              <p className="text-sm text-[#325175]/60">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4 border-b border-[#325175]/10 pb-4">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="text-[16px] font-bold text-[#325175]">
                          {item.name}
                        </p>
                        <p className="text-[13px] text-[#325175]/60">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-[16px] font-semibold text-[#325175]">
                        {formatter.format(
                          getUnitPrice(item) * item.quantity,
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-2 text-[#325175]">
                  <div className="flex items-center justify-between text-[15px] sm:text-[16px]">
                    <span>Subtotal</span>
                    <span>{formatter.format(subtotal)}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#325175]/10 pb-4 text-[15px] sm:text-[16px]">
                    <span>Shipping</span>
                    <span>{formatter.format(shipping)}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-[18px] font-bold text-[#325175] sm:text-[20px]">
                    <span>Total</span>
                    <span>{formatter.format(total)}</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full space-y-3 pt-2"
        >
          <motion.button
            type="button"
            onClick={confirmOrder}
            disabled={loadingCart || cartItems.length === 0 || submitting}
            whileHover={{ scale: submitting ? 1 : 1.02 }}
            whileTap={{ scale: submitting ? 1 : 0.97 }}
            className="h-[60px] w-full cursor-pointer rounded-[160px] border border-[#325175] bg-[#325175] text-[18px] font-semibold text-white transition-colors hover:bg-[#253d5a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Creating order…" : "Confirm Order"}
          </motion.button>

          <div className="flex items-center justify-center gap-1.5 pt-1 text-[12px] text-[#325175]/60">
            <span>Secure checkout powered by Henry&apos;s Luxury</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-[14px] font-medium text-[#325175]/80">
        {label}
        {required && <span className="ml-0.5 text-[#95000D]">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#325175]/20 bg-[#FFFBF7] px-4 py-3 text-[16px] text-[#325175] outline-none transition-colors placeholder:text-[#325175]/35 focus:border-[#325175] focus:ring-2 focus:ring-[#325175]/10"
      />
    </div>
  );
}