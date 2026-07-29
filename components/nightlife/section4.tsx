import React from "react";
import Image from "next/image";

export default function Section4() {
  return (
    <section className="h-screen w-full snap-start bg-black text-[#F3EDE6] relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-black/70 to-transparent z-20 pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />

      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bgsection4.svg"
            alt="Bar atmosphere"
            fill
            priority
            className="object-cover brightness-120"
            style={{ objectPosition: "center 90%" }}
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

        <div className="absolute inset-0 bg-black/30 z-15 pointer-events-none" />
      </div>

      <div className="relative z-30 w-full flex flex-col items-center text-center px-6 max-w-6xl 2xl:max-w-full mx-auto gap-6 lg:gap-8 2xl:gap-10 -translate-y-4 md:-translate-y-8">
        <div className="w-full overflow-visible flex justify-center mb-4 md:mb-6 2xl:mb-8">
          <h2 className="font-pinyon text-[clamp(85px,10.5vw,155px)] 2xl:text-[190px] min-[1920px]:text-[210px] leading-none text-white text-center px-8 w-full">
            made to be shared
          </h2>
        </div>

        <p className="font-futura text-xl sm:text-2xl lg:text-[27px] 2xl:text-[36px] font-medium leading-snug text-white text-center">
          The best moments happen when people come together.
        </p>

        <div className="flex flex-col gap-6 2xl:gap-8 font-comfortaa text-base sm:text-lg lg:text-[19px] 2xl:text-[22px] font-medium leading-relaxed text-white text-center max-w-2xl md:max-w-3xl 2xl:max-w-4xl mt-1 md:mt-2">
          <p>
            It's about connection. About sharing stories, creating memories, and<br className="hidden md:inline" />
            enjoying the company of others in an atmosphere that feels<br className="hidden md:inline" />
            effortless and genuine.
          </p>
          <p>
            Henry's was created for these moments. The ones that don't need a<br className="hidden md:inline" />
            special occasion, yet somehow become unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}