"use client";

import React from "react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-[#FFFCF9] flex flex-col items-center justify-center px-6 pt-28 sm:pt-36 md:pt-40 pb-20">
      <motion.h1 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-['Pinyon_Script'] text-[clamp(40px,6vw,85px)] leading-[110%] text-[#442F0E] text-center w-full mb-4"
      >
        Join the Henry&apos;s experience
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="font-['Comfortaa'] text-[clamp(16px,1.8vw,22px)] leading-[160%] text-[#442F0E] opacity-80 text-center w-full max-w-[840px] mb-12"
      >
        Whether you&apos;re interested in Henry&apos;s, planning an event, or looking to place an order, we&apos;d love to hear from you.
      </motion.p>

      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="w-full max-w-[840px] flex flex-col items-center gap-12 font-['Comfortaa']"
      >
        <div className="w-full max-w-[640px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#442F0E] font-medium">
              First name <span className="text-[#95000D] ml-0.5">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: Jean"
              required
              className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#442F0E] font-medium">
              Last name <span className="text-[#95000D] ml-0.5">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: Dupont"
              required
              className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
            />
          </div>
        </div>

        <div className="w-full max-w-[640px] flex flex-col gap-2">
          <label className="text-[14px] text-[#442F0E] font-medium">
            E-mail <span className="text-[#95000D] ml-0.5">*</span>
          </label>
          <input
            type="email"
            placeholder="jean.dupont@email.com"
            required
            className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
          />
        </div>

        <div className="w-full max-w-[640px] flex flex-col gap-2">
          <label className="text-[14px] text-[#442F0E] font-medium">Phone</label>
          <input
            type="tel"
            placeholder="+33 6 00 00 00 00"
            className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
          />
        </div>

        <div className="w-full max-w-[640px] flex flex-col gap-2">
          <label className="text-[14px] text-[#442F0E] font-medium">Company Name</label>
          <input
            type="text"
            placeholder="Optional"
            className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="w-full max-w-[640px] flex flex-col gap-4 mt-4"
        >
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 appearance-none w-4 h-4 rounded-xs border border-[#442F0E] checked:bg-[#325175] checked:border-[#325175] shrink-0 cursor-pointer transition-colors"
            />
            <span className="text-[14px] leading-[140%] text-[#442F0E]">
              Yes, subscribe me to your newsletter.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              className="mt-1 appearance-none w-4 h-4 rounded-xs border border-[#442F0E] checked:bg-[#325175] checked:border-[#325175] shrink-0 cursor-pointer transition-colors"
            />
            <span className="text-[14px] leading-[140%] text-[#442F0E]">
              By this, I affirm that I am over 18 years old and agree to the general terms and conditions of the website. <span className="text-[#95000D] ml-0.5">*</span>
            </span>
          </label>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          className="flex justify-center mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            type="submit"
            className="bg-[#325175] text-[#F3EDE6] font-semibold text-[18px] whitespace-nowrap px-10 py-4 min-w-[260px] rounded-full hover:bg-[#233a54] transition-colors cursor-pointer flex items-center justify-center shadow-sm"
          >
            Send my message
          </motion.button>
        </motion.div>
      </motion.form>
    </section>
  );
}