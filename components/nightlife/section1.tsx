"use client";

import React from "react";
import { motion } from "motion/react";

export default function Section1() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden snap-start">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[65%_center] md:object-center brightness-90"
        >
          <source src="/nightlifebg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/5 z-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-7xl mx-auto pt-14 mt-8 lg:mt-20 md:pt-16 2xl:pt-24"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-pinyon text-6xl sm:text-7xl lg:text-[134px] 2xl:scale-125 min-[1920px]:scale-150 whitespace-normal lg:whitespace-nowrap leading-tight lg:leading-none text-white text-center transform origin-center"
        >
          When the night comes alive
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-futura text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-medium leading-tight uppercase text-white text-center max-w-4xl pt-4 lg:mt-8"
        >
          Cocktails, atmosphere, and moments <br className="hidden sm:inline" />
          worth remembering.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="mt-20 lg:mt-36 2xl:mt-48 px-8 py-4 2xl:px-12 2xl:py-5 rounded-full bg-[#FFFCF9] font-futura text-lg md:text-[22px] 2xl:text-[26px] font-medium leading-none text-[#442F0E] cursor-pointer flex items-center justify-center"
        >
          Discover the experience
        </motion.button>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20 pointer-events-none" />
    </section>
  );
}