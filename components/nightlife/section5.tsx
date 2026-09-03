"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface SectionProps {
  data?: Record<string, any>;
}

export default function Section5({ data }: SectionProps) {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const title = data?.MeetTheManTitle || "MEET THE MAN BEHIND THE STORY";
  const description =
    data?.MeetTheManDescription ||
    "Long before Henry's became cocktails, events, and celebrations, it was a family tradition.";
  const buttonText = data?.MeetTheManButton || "Discover the Legacy";

  return (
    <section className="h-screen w-full snap-start bg-black text-white relative flex items-start sm:items-center justify-center overflow-hidden pt-12 sm:pt-0">
      <div className="absolute top-0 left-0 w-full h-[48%] sm:h-34 bg-gradient-to-b from-black via-black/90 to-transparent z-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 bg-no-repeat bg-[length:380%_auto] bg-[position:4%__100px] sm:bg-cover sm:bg-center"
        style={{ backgroundImage: "url('/bgsection5.svg')" }}
      />

      <div className="relative z-30 w-full max-w-6xl 2xl:max-w-7xl flex flex-col items-center text-center px-6 gap-4 sm:gap-6 2xl:gap-10 pt-16 sm:pt-0">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          className="-mt-4 sm:mt-0 font-perandory text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[100px] 2xl:text-[6.5vw] leading-[1] md:leading-none font-normal text-white uppercase tracking-normal"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          className="font-comfortaa text-[16px] sm:text-xl md:text-[25px] 2xl:text-[33px] font-medium leading-relaxed sm:leading-snug text-white text-center mt-6 sm:mt-7 max-w-[340px] sm:max-w-2xl 2xl:max-w-4xl"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 sm:mt-0"
        >
          <Link
            href={`/${locale}/heritage`}
            className="font-comfortaa text-[15px] sm:text-[22px] 2xl:mt-6 w-52 sm:w-72.75 h-13 sm:h-16.25 bg-[#325175] text-white mt-2 sm:mt-5 font-medium leading-none text-center rounded-[160px] flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300 hover:bg-[#3a5d87] hover:shadow-[0_0_25px_rgba(50,81,117,0.5)] active:opacity-100 select-none no-underline"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}