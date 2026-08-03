"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

export default function CheckoutPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFBF7] pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 md:px-16 font-['Comfortaa'] text-[#325175]">
      <div className="max-w-[1280px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-['Pinyon_Script'] text-[48px] sm:text-[64px] md:text-[82px] leading-none text-center text-[#442F0E] mb-6 sm:mb-8 md:mb-10"
        >
          Complete Your Order
        </motion.h1>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:flex-1 bg-white/40 border border-[#325175]/30 rounded-[24px] pt-4 sm:pt-5 lg:pt-6 px-6 sm:px-10 pb-6 sm:pb-10"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#325175] font-bold text-[18px] tracking-[0.12em] uppercase mb-8"
            >
              Shipping Address
            </motion.h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    First Name<span className="text-[#95000D] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jean"
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175] placeholder:text-[#325175]/40 focus:outline-none focus:border-[#325175] transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    Last Name<span className="text-[#95000D] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Dupont"
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175] placeholder:text-[#325175]/40 focus:outline-none focus:border-[#325175] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                  Address<span className="text-[#95000D] ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="15 Avenue des Champs-Élysées"
                  className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175] placeholder:text-[#325175]/40 focus:outline-none focus:border-[#325175] transition-colors"
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
                  className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175] placeholder:text-[#325175]/40 focus:outline-none focus:border-[#325175] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    Postal Code<span className="text-[#95000D] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="75008"
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175] placeholder:text-[#325175]/40 focus:outline-none focus:border-[#325175] transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    City<span className="text-[#95000D] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Paris"
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175] placeholder:text-[#325175]/40 focus:outline-none focus:border-[#325175] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                  Country<span className="text-[#95000D] ml-0.5">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    readOnly
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175]/40 focus:outline-none cursor-default select-none"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-[#325175]/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex flex-col">
                  <label className="text-[14px] text-[#325175]/80 font-medium mb-1">
                    Email<span className="text-[#95000D] ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@example.com"
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175] placeholder:text-[#325175]/40 focus:outline-none focus:border-[#325175] transition-colors"
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
                    placeholder="+33 6 00 00 00 00"
                    className="w-full bg-transparent border-b border-[#325175]/20 pb-2 text-[16px] text-[#325175] placeholder:text-[#325175]/40 focus:outline-none focus:border-[#325175] transition-colors"
                  />
                </div>
              </div>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-[351px] space-y-6 pt-2 lg:pt-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Pinyon_Script'] text-[36px] sm:text-[42px] leading-tight text-left text-[#325175] mb-4 sm:mb-6"
            >
              Summary
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-between items-start pb-4 border-b border-[#325175]/10"
            >
              <div>
                <p className="text-[16px] font-bold text-[#325175]">The Signature Apéritif</p>
                <p className="text-[13px] text-[#325175]/60">Bordeaux · Quantity: 1</p>
              </div>
              <p className="text-[16px] font-semibold text-[#325175]">290.00 €</p>
            </motion.div>

            <div className="space-y-2 text-[#325175]">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-between items-center text-[15px] sm:text-[16px]"
              >
                <span className="text-[#325175]">Subtotal</span>
                <span className="text-[#325175]">290.00 €</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex justify-between items-center text-[15px] sm:text-[16px] pb-4 border-b border-[#325175]/10"
              >
                <span className="text-[#325175]">Shipping</span>
                <span className="text-[#325175]">15.00 €</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-2 flex justify-between items-center text-[18px] sm:text-[20px] font-bold text-[#325175]"
              >
                <span>Total</span>
                <span>305.00 €</span>
              </motion.div>
            </div>
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="w-full h-[60px] bg-[#325175] text-white rounded-[160px] font-semibold text-[18px] hover:bg-[#253d5a] transition-colors border border-[#325175] cursor-pointer"
          >
            Confirm Order
          </motion.button>

          <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#325175]/60 pt-1">
            <svg className="w-3.5 h-3.5 text-[#325175]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Secure checkout powered by Henry&apos;s Luxury</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}