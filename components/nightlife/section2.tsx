"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface SectionProps {
  data?: Record<string, any>;
}

export default function Section2({ data }: SectionProps) {
  const title = data?.RhythmTitle || "A DIFFERENT RHYTHM";
  const paragraph1 =
    data?.RhythmParagraph1 ||
    "as the day slows down, the Henry's experience takes on a new energy.";
  const paragraph2 =
    data?.RhythmParagraph2 ||
    "The same appreciation for taste, craftsmanship, and connection moves into a more social setting, where cocktails replace wine glasses, conversations become longer, and every evening unfolds in its own way.";

  return (
    <section className="h-screen w-full snap-start grid grid-cols-1 md:grid-cols-2 bg-black text-[#F4EFE6] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-black/60 via-black/25 to-transparent sm:from-black/70 sm:via-black/30 z-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0.2, filter: "brightness(0.1)" }}
        whileInView={{ opacity: 1, filter: "brightness(1)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
        className="relative w-full h-[45vh] md:h-full min-h-0 bg-black overflow-hidden"
      >
        <Image
          src="/bartender.svg"
          alt="Bartender"
          fill
          priority
          className="object-cover object-[center_35%] md:object-center sm:brightness-100"
        />
      </motion.div>

      <div className="w-full h-[55vh] md:h-full bg-black flex flex-col justify-center items-start p-6 md:p-12 lg:p-16 2xl:p-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="w-full max-w-xl 2xl:max-w-3xl flex flex-col gap-4 sm:gap-6 lg:gap-8 2xl:gap-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="font-futura text-3xl sm:text-4xl lg:text-[52px] 2xl:text-[68px] font-medium leading-none uppercase text-[#F4EFE6]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="font-futura text-base sm:text-xl lg:text-[24px] 2xl:text-[32px] font-medium leading-snug text-[#F4EFE6]"
          >
            {paragraph1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
            className="font-futura text-sm sm:text-lg lg:text-[23px] 2xl:text-[28px] font-medium leading-relaxed lowercase text-[#F4EFE6]"
          >
            {paragraph2}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}