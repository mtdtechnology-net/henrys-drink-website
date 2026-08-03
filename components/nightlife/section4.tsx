"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Section4() {
  return (
    <section className="h-screen w-full snap-start bg-black text-[#F3EDE6] relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />

      <div className="absolute inset-0 bg-black/10 md:bg-black/25 z-10 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden flex items-end"
      >
        <div className="relative w-full h-[65%] md:h-full">
          <Image
            src="/bgsection4.svg"
            alt="Bar atmosphere"
            fill
            priority
            className="object-cover object-center brightness-120 md:object-center"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full z-10 overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-110"
          >
            <source src="/cocktailprep.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>

      <div className="md:hidden absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] z-20 pointer-events-none flex items-center justify-center overflow-visible">
        <Image
          src="/Rectanglesct4.svg"
          alt="Blur shadow overlay"
          fill
          className="object-cover scale-125"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 w-full flex flex-col items-center text-center px-6 max-w-6xl 2xl:max-w-full mx-auto gap-5 lg:gap-8 2xl:gap-10 translate-y-12 md:-translate-y-1"
      >
        <div className="w-full overflow-visible flex justify-center mb-2 md:mb-6 2xl:mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-pinyon text-[clamp(75px,10.5vw,155px)] 2xl:text-[190px] min-[1920px]:text-[210px] leading-none text-white text-center px-8 w-full"
          >
            made to be shared
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-futura text-lg sm:text-2xl lg:text-[27px] 2xl:text-[36px] font-medium leading-snug text-white text-center"
        >
          The best moments happen when people come together.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-3 sm:gap-6 2xl:gap-8 font-comfortaa text-xs sm:text-lg lg:text-[19px] 2xl:text-[22px] font-medium leading-relaxed text-white text-center max-w-2xl md:max-w-3xl 2xl:max-w-4xl mt-1 md:mt-2"
        >
          <p>
            It's about connection. About sharing stories, creating memories, and{" "}
            <br className="hidden md:inline" />
            enjoying the company of others in an atmosphere that feels{" "}
            <br className="hidden md:inline" />
            effortless and genuine.
          </p>
          <p>
            Henry's was created for these moments. The ones that don't need a{" "}
            <br className="hidden md:inline" />
            special occasion, yet somehow become unforgettable.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}