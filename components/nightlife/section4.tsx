import React from "react";
import Image from "next/image";

export default function Section4() {
  return (
    <section className="h-screen w-full snap-start bg-black text-[#F3EDE6] relative flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b z-20 pointer-events-none" />

        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bgsection4.svg"
            alt="Bar atmosphere"
            fill
            priority
            className="object-cover object-center brightness-150"
          />
        </div>

        <div className="absolute top-0 left-0 w-full md:w-1/2 h-full z-10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-110"
          >
            <source src="/cocktailprep.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none" />
      </div>

      <div className="relative z-30 w-full flex flex-col items-center text-center px-4 max-w-5xl 2xl:max-w-7xl mx-auto gap-6 lg:gap-8 2xl:gap-12 overflow-visible">
        <div className="w-full overflow-visible flex justify-center">
          <h2 className="font-pinyon text-[clamp(95px,12vw,170px)] 2xl:text-[200px] min-[1920px]:text-[230px] whitespace-nowrap leading-none text-white text-center px-8 pr-16 2xl:pr-24">
            made to be shared
          </h2>
        </div>

        <p className="font-futura text-lg sm:text-xl lg:text-[27px] 2xl:text-[36px] font-medium leading-snug text-white text-center">
          The best moments happen when people come together.
        </p>

        <div className="flex flex-col gap-4 2xl:gap-6 font-comfortaa text-sm sm:text-base lg:text-[18px] 2xl:text-[22px] font-medium leading-relaxed text-white text-center max-w-2xl 2xl:max-w-4xl">
          <p>
            It's about connection. About sharing stories, creating memories,
            and enjoying the company of others in an atmosphere that feels
            effortless and genuine.
          </p>
          <p>
            Henry's was created for these moments. The ones that don't need a
            special occasion, yet somehow become unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}