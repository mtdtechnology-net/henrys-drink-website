import React from "react";

export default function Section1() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden snap-start">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-90"
        >
          <source src="/nightlifebg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/5 z-10" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-7xl mx-auto pt-14 mt-20 md:pt-16 2xl:pt-24">
        <h1 className="font-pinyon text-[100px] lg:text-[134px] 2xl:scale-125 min-[1920px]:scale-150 whitespace-nowrap leading-none text-white text-center transform origin-center transition-transform">
          When the night comes alive
        </h1>

        <p className="font-futura text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-medium leading-tight uppercase text-white text-center max-w-4xl pt-4 lg:mt-8">
          Cocktails, atmosphere, and moments <br className="hidden sm:inline" />
          worth remembering.
        </p>

        <button className="mt-28 lg:mt-36 2xl:mt-48 px-8 py-4 2xl:px-12 2xl:py-5 rounded-full bg-[#FFFCF9] font-futura text-lg md:text-[22px] 2xl:text-[26px] font-medium leading-none text-[#442F0E] hover:bg-opacity-90 transition cursor-pointer flex items-center justify-center">
          Discover the experience
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
}