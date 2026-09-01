"use client";

import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import { processMockPaymentAction } from "@/app/actions/order";

export default function MockCheckoutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);  
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const mockItemCount = 1;
  const mockTotal = 305.0; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);

    const result = await processMockPaymentAction({
      userEmail: email,
      itemCount: mockItemCount,
      total: mockTotal,
      locale: locale
    });

    setIsProcessing(false);

    if (result.success) {
      alert("Paiement réussi ! E-mail de confirmation envoyé.");
      router.push("/"); // Redirect home or to a success page
    } else {
      alert("Erreur lors du traitement du paiement.");
    }
  };

  return (
    <main className="min-h-screen bg-[#F4F4F6] flex items-center justify-center p-4 text-[#1A1A1A]">
      <div className="w-full max-w-[440px] bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        {/* Mock Stripe Header */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-gray-400">
              Paiement Sécurisé
            </span>
            <h1 className="text-xl font-bold text-gray-800">Henry’s Drink</h1>
          </div>
          <span className="text-2xl font-extrabold text-[#325175]">
            {mockTotal.toFixed(2)} €
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">
              Adresse e-mail pour la confirmation
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
              className="w-full h-11 px-3.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#325175] text-sm"
            />
          </div>

          {/* Fake Credit Card Form to look like Stripe */}
          <div className="space-y-3 opacity-60 pointer-events-none select-none">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">
                Informations de carte (Factice)
              </label>
              <input
                type="text"
                disabled
                value="4242 •••• •••• 4242"
                className="w-full h-11 px-3.5 rounded-lg border border-gray-300 bg-gray-50 text-sm font-mono"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                disabled
                value="12 / 28"
                className="h-11 px-3.5 rounded-lg border border-gray-300 bg-gray-50 text-sm font-mono"
              />
              <input
                type="text"
                disabled
                value="123"
                className="h-11 px-3.5 rounded-lg border border-gray-300 bg-gray-50 text-sm font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="w-full h-12 mt-4 bg-[#325175] hover:bg-[#253d5a] text-white font-semibold rounded-lg transition-colors text-sm disabled:opacity-50"
          >
            {isProcessing ? "Traitement en cours..." : `Payer ${mockTotal.toFixed(2)} €`}
          </button>
        </form>
      </div>
    </main>
  );
}