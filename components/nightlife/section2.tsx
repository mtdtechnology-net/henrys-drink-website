import React from "react";
import Image from "next/image";

export default function Section2() {
  return (
    <section className="h-screen w-full snap-start grid grid-cols-1 md:grid-cols-2 bg-black text-[#F4EFE6] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-black via-black/70 to-transparent z-20 pointer-events-none" />

      <div className="relative w-full h-full">
        <Image
          src="/bartender.svg"
          alt="Bartender"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="w-full h-full bg-black flex flex-col justify-center items-start p-8 md:p-12 lg:p-16 2xl:p-24">
        <div className="w-full max-w-xl 2xl:max-w-3xl flex flex-col gap-6 lg:gap-8 2xl:gap-10">
          <h2 className="font-futura text-3xl sm:text-4xl lg:text-[52px] 2xl:text-[68px] font-medium leading-none uppercase text-[#F4EFE6]">
            A DIFFERENT RHYTHM
          </h2>

          <p className="font-futura text-lg sm:text-xl lg:text-[24px] 2xl:text-[32px] font-medium leading-snug text-[#F4EFE6]">
            as the day slows down, the Henry's experience takes on a new energy.
          </p>

          <p className="font-futura text-base sm:text-lg lg:text-[23px] 2xl:text-[28px] font-medium leading-relaxed lowercase text-[#F4EFE6]">
            The same appreciation for taste, craftsmanship, and connection moves
            into a more social setting, where cocktails replace wine glasses,
            conversations become longer, and every evening unfolds in its own
            way.
          </p>
        </div>
      </div>
    </section>
  );
}