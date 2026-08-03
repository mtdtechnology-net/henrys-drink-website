"use client";

import React from "react";
import { motion } from "motion/react";

export default function Section5() {
  return (
    <section className="h-screen w-full snap-start bg-black text-white relative flex items-start sm:items-center justify-center overflow-hidden pt-12 sm:pt-0">
      <div className="absolute top-0 left-0 w-full h-[48%] sm:h-34 bg-gradient-to-b from-black via-black/90 to-transparent z-20 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 bg-no-repeat bg-[length:380%_auto] bg-[position:4%__100px] sm:bg-cover sm:bg-center"
        style={{ backgroundImage: "url('/bgsection5.svg')" }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 w-full max-w-6xl 2xl:max-w-7xl flex flex-col items-center text-center px-6 gap-4 sm:gap-6 2xl:gap-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-perandory text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[100px] 2xl:text-[6.5vw] leading-[1] md:leading-none font-normal text-white uppercase md:whitespace-nowrap tracking-normal"
        >
          MEET THE <br className="sm:hidden" />
          MAN BEHIND <br className="sm:hidden" />
          THE STORY
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-comfortaa text-[18px] sm:text-xl md:text-[25px] 2xl:text-[33px] font-medium leading-snug text-white text-center mt-3 sm:mt-7 max-w-[240px] sm:max-w-2xl 2xl:max-w-4xl"
        >
          Long before Henry's became cocktails, events, and celebrations, it was a family tradition
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="font-comfortaa text-[15px] sm:text-[22px] 2xl:mt-6 w-52 sm:w-72.75 h-13 sm:h-16.25 bg-[#325175] text-white mt-4 sm:mt-5 font-medium leading-none text-center rounded-[160px] flex items-center justify-center cursor-pointer"
        >
          Discover the Legacy
        </motion.button>
      </motion.div>
    </section>
  );
}