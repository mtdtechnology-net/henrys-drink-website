"use client";

import { Pinyon_Script } from "next/font/google";
import Link from "next/link";
import { motion } from "motion/react";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

const SLOW_EASE = [0.05, 0.7, 0.1, 1] as const;

export function NightSection() {
  return (
    <section
      className="relative flex min-h-screen min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black px-8 py-16 max-[768px]:px-5 max-[768px]:py-12"
      aria-labelledby="night-title"
    >
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <motion.video
          initial={{ opacity: 0, scale: 1.12 }}
          whileInView={{ opacity: 1, scale: 1.08 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 3.2, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-center blur-[20px] brightness-[0.7]"
          src="/video-heritage.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 z-10 bg-black/35" />
      </div>

      <div className="relative z-20 flex w-full max-w-full flex-col items-center text-center">
        <motion.h2
          id="night-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.2, delay: 0.2, ease: SLOW_EASE }}
          className={`${pinyonScript.className} m-0 text-center text-[clamp(4rem,15vw,232px)] font-normal leading-none text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.4)]`}
        >
          Enter the night
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.4, delay: 0.9, ease: SLOW_EASE }}
          className="my-14 text-center font-['Futura','Trebuchet_MS',sans-serif] text-[clamp(14px,1.8vw,25px)] font-medium uppercase leading-none text-white max-[768px]:mb-10 max-[768px]:mt-4 max-[768px]:tracking-[0.05em]"
        >
          COCKTAILS. ATMOSPHERE. MUSIC. CONNECTION.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.6, delay: 1.6, ease: SLOW_EASE }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href="/nightlife"
            className="inline-flex h-[63px] min-w-[356px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#b50012] px-7 font-['Futura','Trebuchet_MS',sans-serif] text-[20px] font-medium leading-none text-white no-underline shadow-[0_8px_24px_rgba(149,0,13,0.4)] transition-[transform,background-color] duration-200 hover:bg-[#95000d] max-[480px]:h-[56px] max-[480px]:min-w-0 max-[480px]:w-full max-[480px]:px-5 max-[480px]:text-[15px]"
          >
            Discover the experience by night
          </a>
        </motion.div>
      </div>
    </section>
  );
}