"use client";

import React from "react";
import { motion, Variants } from "motion/react";

interface SectionProps {
  data?: Record<string, any>;
}

export default function Section1({ data }: SectionProps) {
  const rawTitle = data?.NightTitle || "When the night comes alive";
  const rawDescription =
    data?.NightDescription ||
    "COCKTAILS, ATMOSPHERE, AND MOMENTS WORTH REMEMBERING.";

  const words: string[] = rawDescription.split(" ");
  const midIndex = Math.ceil(words.length / 2);
  const line1 = words.slice(0, midIndex);
  const line2 = words.slice(midIndex);

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 1.2 + i * 0.22,
        ease: "easeOut",
      },
    }),
  };

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
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-7xl mx-auto pt-14 mt-8 lg:mt-20 md:pt-16 2xl:pt-24 max-h-[800px]:mt-2 max-h-[800px]:pt-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="font-pinyon text-6xl sm:text-7xl lg:text-[134px] lg:[@media(max-height:800px)]:text-[85px] lg:[@media(min-width:1024px)_and_(max-width:1025px)]:text-[95px] 2xl:scale-125 min-[1920px]:scale-150 whitespace-normal lg:whitespace-nowrap leading-tight lg:leading-none text-white text-center transform origin-center"
        >
          {rawTitle}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          className="font-futura text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-medium leading-tight uppercase text-white text-center max-w-4xl pt-4 lg:mt-8 max-h-[800px]:text-sm max-h-[800px]:pt-2 max-h-[800px]:mt-2"
        >
          {line1.map((word: string, i: number) => (
            <motion.span
              key={`l1-${i}`}
              custom={i}
              variants={wordVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}

          <br className="hidden sm:inline" />

          {line2.map((word: string, i: number) => (
            <motion.span
              key={`l2-${i}`}
              custom={line1.length + i}
              variants={wordVariants}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <div className="invisible mt-20 lg:mt-36 2xl:mt-48 max-h-[800px]:mt-8 px-8 py-4 2xl:px-12 2xl:py-5 font-futura text-lg md:text-[22px] 2xl:text-[26px]">
          Discover the experience
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20 pointer-events-none" />
    </section>
  );
}