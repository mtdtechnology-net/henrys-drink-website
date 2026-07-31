"use client";

import React, { useState } from "react";

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 290.00;
  const shipping = 15.00;
  const subtotal = pricePerUnit * quantity;
  const total = subtotal + shipping;

  return (
    <div className="w-full min-h-screen bg-[#FFFBF7] pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 md:px-16 font-['Comfortaa'] text-[#442F0E]">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="font-['Pinyon_Script'] text-[48px] sm:text-[64px] md:text-[82px] leading-none text-center text-[#442F0E] mb-10 sm:mb-16 md:mb-20">
          Votre Panier
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          <div className="w-full lg:max-w-[765px] lg:flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 gap-6 sm:gap-4 border-b border-[#442F0E]/10 sm:border-b-0">
              <div className="flex justify-between items-start sm:block">
                <div>
                  <h2 className="text-[18px] sm:text-[21.27px] font-bold text-[#442F0E] leading-tight">
                    The Signature Aperitif
                  </h2>
                  <p className="text-[15px] sm:text-[18.13px] leading-none opacity-60 text-[#442F0E] mt-1">
                    Bordeaux
                  </p>
                </div>

                <button 
                  className="sm:hidden text-[#442F0E]/40 hover:text-[#442F0E] transition-colors p-1"
                  aria-label="Remove item"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-full border border-[#442F0E] flex items-center justify-center hover:bg-[#442F0E]/5 transition-colors text-base font-medium select-none leading-none"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span className="text-[18px] font-semibold w-5 text-center select-none">
                    {quantity}
                  </span>

                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-8 h-8 rounded-full border border-[#442F0E] flex items-center justify-center hover:bg-[#442F0E]/5 transition-colors text-base font-medium select-none leading-none"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-[18px] sm:text-[20px] font-semibold text-[#442F0E] leading-tight">
                    {subtotal.toFixed(2).replace(".", ",")} €
                  </p>
                  <p className="text-[12px] sm:text-[14px] leading-none opacity-50 text-[#442F0E] mt-1">
                    {pricePerUnit.toFixed(2).replace(".", ",")} € / unité
                  </p>
                </div>

                <button 
                  className="hidden sm:block text-[#442F0E]/40 hover:text-[#442F0E] transition-colors ml-2"
                  aria-label="Remove item"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[351px] space-y-6">
            <h2 className="font-['Pinyon_Script'] text-[36px] sm:text-[42px] leading-tight text-center text-[#442F0E] mb-4 sm:mb-6">
              Résumé
            </h2>

            <div className="space-y-4 text-[#442F0E]">
              <div className="flex justify-between items-center text-[15px] sm:text-[16px] pb-4 border-b border-[#442F0E]/10">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2).replace(".", ",")} €</span>
              </div>

              <div className="flex justify-between items-center text-[15px] sm:text-[16px] pb-4 border-b border-[#442F0E]/10">
                <span>Livraison</span>
                <span>{shipping.toFixed(2).replace(".", ",")} €</span>
              </div>

              <div className="pt-2 flex justify-between items-center text-[18px] sm:text-[20px] font-bold text-[#325175]">
                <span>Total</span>
                <span>{total.toFixed(2).replace(".", ",")} €</span>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button className="w-full h-[56px] sm:h-[60px] bg-[#325175] text-white rounded-[160px] font-semibold text-[16px] sm:text-[18px] hover:bg-[#253d5a] transition-colors border border-[#325175]">
                Passer la commande
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#442F0E]/60 pt-1">
                <svg className="w-3.5 h-3.5 text-[#442F0E]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Paiement sécurisé par Henry&apos;s Luxury</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}