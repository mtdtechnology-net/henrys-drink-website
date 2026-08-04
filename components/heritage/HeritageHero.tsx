"use client";

import { motion } from "motion/react";

const SLOW_EASE = [0.05, 0.7, 0.1, 1] as const;

export function HeritageHero() {
  const words = ["WHERE", "THE", "STORY", "BEGINS"];

  return (
    <section
    className="relative grid h-auto min-h-0 place-items-start justify-items-center overflow-hidden bg-[#FFFCF9] text-center after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[2] after:h-[clamp(120px,18vh,200px)] after:bg-[linear-gradient(to_bottom,rgba(255,252,249,0)_0%,rgba(255,252,249,0.45)_38%,rgba(255,252,249,0.88)_72%,#fffcf9_100%)] after:content-['']"
    aria-labelledby="heritage-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1.02 }}
        transition={{ duration: 4.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(255,252,249,0.16),rgba(255,252,249,0.34)),url('/house-light.svg')] bg-cover bg-center bg-no-repeat"
      />

      <div className="relative z-[3] mx-auto flex min-h-screen min-h-[100svh] w-full max-w-[1800px] flex-col items-center px-[clamp(20px,5vw,80px)] pb-[clamp(5rem,9vh,8rem)] pt-[clamp(10rem,18vh,15rem)] max-[768px]:px-5 max-[768px]:pb-16 max-[768px]:pt-[clamp(8rem,17vh,11rem)]">
        <h1
          id="heritage-title"
          className="m-0 flex flex-wrap justify-center gap-[0.3em] text-center font-['Perandory',Georgia,serif] text-[clamp(42px,7.78vw,112px)] font-normal leading-[1] tracking-[0] text-[#325175] [font-stretch:semi-condensed] max-[768px]:max-w-full max-[768px]:text-[clamp(42px,10vw,72px)] max-[768px]:leading-[0.95]"
        >
          {words.map((word, index) => (
            <span key={word} className="inline-block overflow-hidden pb-1">
              <motion.span
                initial={{ opacity: 0, y: "110%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2.0,
                  delay: 0.3 + index * 0.25,
                  ease: SLOW_EASE,
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, delay: 2.2, ease: SLOW_EASE }}
          className="mb-0 mt-[clamp(18px,2vh,28px)] w-[clamp(300px,38.13vw,650px)] max-w-full text-center font-['Comfortaa',sans-serif] text-[clamp(16px,1.53vw,26px)] font-medium leading-[1.25] text-[#442F0E] max-[768px]:w-full max-[768px]:max-w-[550px] max-[768px]:text-[clamp(16px,4vw,18px)]"
        >
          From the vineyards of Bordeaux to generations of tradition,
          Henry&apos;s is rooted in heritage, craftsmanship, and the art of
          taking time.
        </motion.p>
      </div>
    </section>
  );
}