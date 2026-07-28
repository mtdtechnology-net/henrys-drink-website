import React from "react";
import Image from "next/image";

export default function Section5() {
  return (
    <section className="h-screen w-full snap-start bg-black text-white relative flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black to-transparent z-20 pointer-events-none" />

      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/bgsection5.svg"
          alt="Meet the man behind the story background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-30 w-full max-w-6xl 2xl:max-w-7xl flex flex-col items-center text-center px-4 gap-6 2xl:gap-10">
        <h2 className="font-perandory text-4xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[100px] 2xl:text-[6.5vw] -mt-19 leading-none font-normal text-white uppercase whitespace-nowrap tracking-normal">
          MEET THE MAN BEHIND THE STORY
        </h2>

        <p className="font-comfortaa text-lg sm:text-xl md:text-[24px] 2xl:text-[32px] font-medium leading-tight text-white text-center max-w-2xl 2xl:max-w-4xl">
          Long before Henry's became cocktails, events, and celebrations, it
          was a family tradition.
        </p>

        <button className="mt-4 2xl:mt-6 bg-[#325175] text-white font-comfortaa text-base md:text-[20px] 2xl:text-[24px] font-medium rounded-full px-9 py-3.5 2xl:px-12 2xl:py-5 hover:bg-[#28415E] transition-colors duration-300 cursor-pointer">
          Discover the Legacy
        </button>
      </div>
    </section>
  );
}