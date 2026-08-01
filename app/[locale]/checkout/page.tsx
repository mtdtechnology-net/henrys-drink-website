"use client";

import React, { useState } from "react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "Jean",
    lastName: "Dupont",
    address: "15 Avenue des Champs-Élysées",
    addressComplement: "Apartment, floor (optional)",
    postalCode: "75008",
    city: "Paris",
    country: "France",
    email: "jean.dupont@example.com",
    phone: "+33 6 00 00 00 00",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFBF7] pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 md:px-16 font-['Comfortaa'] text-[#325175]">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="font-['Pinyon_Script'] text-[48px] sm:text-[64px] md:text-[82px] leading-none text-center text-[#442F0E] mb-6 sm:mb-8 md:mb-10">
          Complete Your Order
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-10">
          
          <div className="w-full lg:flex-1 bg-white/40 border border-[#325175]/30 rounded-[24px] p-6 sm:p-10">
            <h2 className="text-[#325175] font-bold text-[18px] tracking-[0.12em] uppercase mb-8">
              Shipping Address
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 focus:outline-none focus:border-[#325175] focus:text-[#325175] transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 focus:outline-none focus:border-[#325175] focus:text-[#325175] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                  Address*
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 focus:outline-none focus:border-[#325175] focus:text-[#325175] transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                  Address Details
                </label>
                <input
                  type="text"
                  name="addressComplement"
                  value={formData.addressComplement}
                  onChange={handleChange}
                  placeholder="Apartment, floor (optional)"
                  className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 placeholder:text-[#325175]/30 focus:outline-none focus:border-[#325175] focus:text-[#325175] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    Postal Code*
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 focus:outline-none focus:border-[#325175] focus:text-[#325175] transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 focus:outline-none focus:border-[#325175] focus:text-[#325175] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                  Country*
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 appearance-none focus:outline-none focus:border-[#325175] focus:text-[#325175] transition-colors cursor-pointer"
                  >
                    <option value="France">France</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Luxembourg">Luxembourg</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-[#325175]/60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 focus:outline-none focus:border-[#325175] focus:text-[#325175] transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 focus:outline-none focus:border-[#325175] focus:text-[#325175] transition-colors"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-[351px] space-y-6 pt-2 lg:pt-6">
            <h2 className="font-['Pinyon_Script'] text-[36px] sm:text-[42px] leading-tight text-left text-[#325175] mb-4 sm:mb-6">
              Summary
            </h2>

            <div className="flex justify-between items-start pb-4 border-b border-[#325175]/10">
              <div>
                <p className="text-[16px] font-bold text-[#325175]">The Signature Apéritif</p>
                <p className="text-[13px] text-[#325175]/60">Bordeaux · Quantity: 1</p>
              </div>
              <p className="text-[16px] font-semibold text-[#325175]">290.00 €</p>
            </div>

            <div className="space-y-4 text-[#325175]">
              <div className="flex justify-between items-center text-[15px] sm:text-[16px] pb-4 border-b border-[#325175]/10">
                <span className="text-[#325175]">Subtotal</span>
                <span className="text-[#325175]">290.00 €</span>
              </div>

              <div className="flex justify-between items-center text-[15px] sm:text-[16px] pb-4 border-b border-[#325175]/10">
                <span className="text-[#325175]">Shipping</span>
                <span className="text-[#325175]">15.00 €</span>
              </div>

              <div className="pt-2 flex justify-between items-center text-[18px] sm:text-[20px] font-bold text-[#325175]">
                <span>Total</span>
                <span>305.00 €</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full space-y-3 pt-2">
          <button className="w-full h-[60px] bg-[#325175] text-white rounded-[160px] font-semibold text-[18px] hover:bg-[#253d5a] transition-colors border border-[#325175]">
            Confirm Order
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#325175]/60 pt-1">
            <svg className="w-3.5 h-3.5 text-[#325175]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Secure checkout powered by Henry&apos;s Luxury</span>
          </div>
        </div>
      </div>
    </div>
  );
}