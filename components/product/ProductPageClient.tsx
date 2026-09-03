"use client";

import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

interface ProductPageClientProps {
  addToCartButton: React.ReactNode;
}

export function ProductPageClient({ addToCartButton }: ProductPageClientProps) {
  return (
    <section className="relative w-full min-h-screen bg-[#FBF9F5] flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 sm:px-10 xl:px-23 pt-24 lg:pt-35 pb-24 overflow-x-hidden gap-8 lg:gap-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-0 top-46 lg:top-70 w-full sm:w-[80%] lg:w-[55%] h-[60%] lg:h-[75%] z-0 pointer-events-none opacity-80"
      >
        <Image
          src="/productbg.svg"
          alt="Illustration Background"
          fill
          priority
          className="object-contain object-top-left"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "var(--start-x)", y: "var(--start-y)" }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="[--start-x:0px] [--start-y:-20px] lg:[--start-x:-40px] lg:[--start-y:0px] order-1 lg:order-1 relative z-10 flex flex-col justify-between min-h-auto lg:min-h-131.5 w-full lg:w-102.75 max-w-102.75 shrink-0 items-center text-center lg:items-start lg:text-left"
      >
        <div className="flex flex-col gap-4 lg:gap-11.5 items-center lg:items-start">
          <div>
            <h1 className="font-perandory text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[64px] leading-[1.05] lg:leading-[1.02] uppercase text-[#325175] tracking-wide whitespace-nowrap">
              THE SIGNATURE APERITIF
            </h1>

            <div className="font-comfortaa text-[13px] sm:text-[15px] lg:text-[22px] text-[#0F0F0F] font-medium leading-relaxed mt-2 lg:mt-5 flex flex-col gap-1 lg:gap-3">
              <p className="font-semibold text-[#0F0F0F]">Bordeaux, France</p>
              <p>Wine • Walnut • Elderflower</p>
            </div>
          </div>

          <div className="font-perandory text-[56px] sm:text-[72px] lg:text-[100px] xl:text-[108px] text-[#325175] leading-none my-1 lg:my-0">
            50 €
          </div>
        </div>

        <div className="mb-8 hidden lg:block">
          {addToCartButton}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="order-2 lg:order-2 relative z-20 w-full max-w-[240px] sm:max-w-84.25 h-auto lg:h-244.25 shrink-0 flex justify-center pt-0 lg:pt-3"
      >
        <Image
          src="/henrybottle.svg"
          alt="Henry's Signature Aperitif Bottle"
          width={674}
          height={1954}
          priority
          unoptimized
          className="w-full max-w-84.25 h-auto max-h-[420px] lg:max-h-244.25 object-contain drop-shadow-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="order-3 lg:hidden z-20 -mt-2 mb-2"
      >
        {addToCartButton}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "var(--start-x)", y: "var(--start-y)" }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
        className="[--start-x:0px] [--start-y:30px] lg:[--start-x:40px] lg:[--start-y:0px] order-4 lg:order-3 font-comfortaa relative z-10 flex flex-col justify-start gap-6 lg:gap-15 w-full lg:w-[435px] max-w-[435px] shrink-0 items-start text-left lg:items-start lg:text-left"
      >
        <div className="space-y-2 lg:space-y-3 w-full">
          <h3 className="font-bold text-[16px] lg:text-[18px] text-[#325175] leading-[22px] lg:leading-[25px] text-center lg:text-left">
            About This Aperitif
          </h3>
          <div className="text-[#0F0F0F] text-[13px] lg:text-[16px] font-medium leading-[20px] lg:leading-[25px] space-y-3 lg:space-y-5 text-left">
            <p>
              Inspired by a family recipe passed down through generations, Henry's
              combines Bordeaux wine, walnut, elderflower, and carefully selected
              spirits to create a refined and distinctive aperitif.
            </p>
            <p>
              Balanced, elegant, and versatile, it can be enjoyed on its own or as
              the foundation of our signature cocktails.
            </p>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-3 w-full">
          <h3 className="font-bold text-[16px] lg:text-[18px] text-[#325175] leading-[22px] lg:leading-[25px] text-center lg:text-left">
            Tasting Notes
          </h3>
          <div className="space-y-3 lg:space-y-5 text-[#0F0F0F] text-[13px] lg:text-[16px] font-medium leading-[20px] lg:leading-[25px] text-left">
            <div>
              <p className="text-[#325175] font-bold">Nose</p>
              <p>Floral • Fruity • Delicate</p>
            </div>

            <div>
              <p className="text-[#325175] font-bold">Palate</p>
              <p>Rich Wine • Walnut • Soft Sweetness</p>
            </div>

            <div>
              <p className="text-[#325175] font-bold">Finish</p>
              <p>Smooth • Elegant • Long</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 lg:space-y-3 w-full">
          <h3 className="font-bold text-[16px] lg:text-[18px] text-[#325175] leading-[22px] lg:leading-[25px] text-center lg:text-left">
            Details
          </h3>

          <div className="space-y-3 lg:space-y-5 text-[#0F0F0F] text-[13px] lg:text-[16px] font-medium leading-[20px] lg:leading-[25px] text-left">
            <div>
              <p className="text-[#325175] font-bold">Origin</p>
              <p>Bordeaux, France</p>
            </div>

            <div>
              <p className="text-[#325175] font-bold">Style</p>
              <p>Wine Aperitif</p>
            </div>

            <div>
              <p className="text-[#325175] font-bold">Serving Temperature</p>
              <p>6–8°C</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}