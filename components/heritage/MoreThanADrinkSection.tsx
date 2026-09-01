"use client";

import Image from "next/image";
import { motion } from "motion/react";

const SLOW_EASE = [0.05, 0.7, 0.1, 1] as const;

export function MoreThanADrinkSection() {
  return (
    <section
      className="relative flex min-h-screen min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black"
      aria-labelledby="moments-title"
    >
      <div
        className="absolute inset-0 z-[1] flex h-full w-full max-[768px]:flex-col"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 3.2, delay: 0.2, ease: "easeOut" }}
          className="relative h-full min-h-0 w-1/2 flex-none overflow-hidden max-[768px]:h-1/2 max-[768px]:w-full"
        >
          <Image
            src="/girl.svg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="!bottom-0 !left-0 !right-auto !top-0 !h-full !w-[220%] !max-w-none object-cover object-left"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 3.2, delay: 0.4, ease: "easeOut" }}
          className="relative h-full min-w-0 max-w-[50%] basis-1/2 overflow-hidden max-[768px]:h-1/2 max-[768px]:w-full max-[768px]:max-w-full"
        >
          <Image
            src="/wine-in-hand.svg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="!absolute !inset-0 !block !h-full !w-full !max-w-none !object-cover !object-center"
          />
        </motion.div>
      </div>

      <div className="relative z-[2] box-border flex h-full w-full items-center justify-center px-8 py-16">
        <div className="flex w-full max-w-[1000px] flex-col items-center text-center">
          <motion.h2
            id="moments-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.2, delay: 0.2, ease: SLOW_EASE }}
            className="mb-10 mt-0 whitespace-nowrap text-center font-['Perandory',Georgia,serif] text-[clamp(2.5rem,6.5vw,101px)] font-normal leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.4)] max-[768px]:mb-6 max-[768px]:whitespace-normal"
          >
            MORE THAN A DRINK
          </motion.h2>

          <div className="flex flex-col gap-[1.8rem] text-center font-['Comfortaa',sans-serif] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] max-[768px]:gap-[1.2rem] max-[768px]:[&_br]:hidden">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.2, delay: 0.8, ease: SLOW_EASE }}
              className="m-0 text-[clamp(1.1rem,1.8vw,24px)] font-semibold leading-[1.35]"
            >
              Henry&apos;s is not only about what is inside the bottle.
              <br />
              It is about the moments created around it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.4, delay: 1.4, ease: SLOW_EASE }}
              className="m-0 text-[clamp(0.95rem,1.3vw,18px)] font-normal leading-[1.4] opacity-95"
            >
              Long conversations, shared meals, celebrations, and the people who
              <br />
              make those moments memorable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.6, delay: 2.0, ease: SLOW_EASE }}
              className="m-0 text-[clamp(0.9rem,1.1vw,16px)] font-normal leading-[1.4] opacity-90"
            >
              French Vermouth becomes the reason people gather.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreThanADrinkSection;