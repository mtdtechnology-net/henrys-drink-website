"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { getOrderConfirmPage, OrderConfirmPageData } from "@/lib/strapi";

type ConfirmResult = {
  isPaid: boolean;
  reference: string | null;
  email: string | null;
  total: number;
};

export default function SuccessPage() {
  const params = useParams<{ locale: string }>();
  const searchParams = useSearchParams();
  const locale = params?.locale ?? "en";
  const sessionId = searchParams.get("session_id");

  const [result, setResult] = useState<ConfirmResult | null>(null);
  const [error, setError] = useState("");
  const [cms, setCms] = useState<OrderConfirmPageData | null>(null);

  useEffect(() => {
    getOrderConfirmPage(locale).then(setCms).catch(console.error);
  }, [locale]);

  useEffect(() => {
    if (!sessionId) {
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const response = await fetch(
          `/api/stripe/order-confirm?session_id=${encodeURIComponent(
            sessionId
          )}`,
          { cache: "no-store" }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? "Could not confirm payment.");
        }

        if (!cancelled) {
          setResult(data);
        }
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error ? e.message : "Could not verify payment."
          );
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  const isPaid = result?.isPaid ?? false;

  return (
    <main className="w-full min-h-screen bg-[#FFFBF7] flex items-center justify-center px-6 py-24 font-comfortaa text-[#442F0E]">
      <div className="w-full max-w-2xl text-center">
        {error ? (
          <>
            <h1 className="font-['Pinyon_Script'] text-[clamp(52px,9vw,100px)] leading-[1.1] text-[#442F0E] mb-6">
              {cms?.VerificationErrorTitle || "Verification Error"}
            </h1>
            <p className="text-[clamp(15px,1.8vw,20px)] leading-[160%] opacity-80 mb-12">
              {error}
            </p>
          </>
        ) : sessionId && result === null ? (
          <>
            <h1 className="font-['Pinyon_Script'] text-[clamp(52px,9vw,100px)] leading-[1.1] text-[#442F0E] mb-6">
              {cms?.VerifyingTitle || "Verifying…"}
            </h1>
            <p className="text-[clamp(15px,1.8vw,20px)] leading-[160%] opacity-80 mb-12">
              {cms?.VerifyingDescription || "Confirming your payment."}
            </p>
          </>
        ) : isPaid ? (
          <>
            <h1 className="font-['Pinyon_Script'] text-[clamp(52px,9vw,100px)] leading-[1.1] text-[#442F0E] mb-6">
              {cms?.OrderConfirmedTitle || "Order Confirmed"}
            </h1>

            <p className="text-[clamp(15px,1.8vw,20px)] leading-[160%] opacity-80 mb-12">
              {cms?.OrderConfirmedDescription || "Your payment was successful."}
              {result?.reference
                ? ` ${cms?.OrderReferenceText || "Your order reference is"} ${result.reference}.`
                : ""}{" "}
              {cms?.EmailSentText || "A confirmation email has been sent to"}{" "}
              <strong className="text-[#325175]">
                {result?.email ?? "you"}
              </strong>
              .
            </p>
          </>
        ) : (
          <>
            <h1 className="font-['Pinyon_Script'] text-[clamp(52px,9vw,100px)] leading-[1.1] text-[#442F0E] mb-6">
              {cms?.NoPaymentTitle || "No payment found"}
            </h1>

            <p className="text-[clamp(15px,1.8vw,20px)] leading-[160%] opacity-80 mb-12">
              {cms?.NoPaymentDescription ||
                "We could not confirm any payment for this link."}
            </p>
          </>
        )}

        <div className="mx-auto mb-10 h-px w-24 bg-[#442F0E]/20" />

        <Link
          href={`/${locale}/product`}
          className="inline-flex items-center justify-center bg-[#325175] text-[#F3EDE6] font-semibold text-[17px] px-10 py-4 rounded-full hover:bg-[#233a54] transition-colors shadow-sm"
        >
          {cms?.ReturnToShopButton || "Return to Shop"}
        </Link>
      </div>
    </main>
  );
}