import React from "react";
import Image from "next/image";

export default function Section3() {
  return (
    <section className="h-screen w-full snap-start bg-black text-[#F3EDE6] relative flex flex-col justify-between p-6 md:p-8 2xl:p-16 overflow-hidden">

      <div className="w-full flex justify-between items-center z-10 text-[11px] md:text-xs 2xl:text-base tracking-[0.2em] uppercase font-futura font-medium opacity-85">
        <span>SIGNATURE COCKTAILS</span>
        <span>03 / 11</span>
      </div>

      <div className="relative w-full h-[50%] md:h-[55%] flex items-center justify-center my-auto">
        <div className="absolute -left-20 md:-left-12.5 w-36 h-56 2xl:w-56 2xl:h-80 opacity-40 pointer-events-none flex items-center">
          <Image
            src="/prevcocktail.svg"
            alt="Previous Cocktail"
            fill
            className="object-contain object-right"
          />
        </div>

        <div className="relative w-72 md:w-125 lg:w-162.5 2xl:w-237.5 h-full z-10 flex items-center justify-center scale-100 lg:scale-110 2xl:scale-125">
          <Image
            src="/currcocktail.svg"
            alt="Signature Cocktail"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="absolute -right-20 md:-right-40 w-48 h-80 2xl:w-72 2xl:h-112.5 opacity-40 pointer-events-none flex items-center">
          <Image
            src="/nextcocktail.svg"
            alt="Next Cocktail"
            fill
            className="object-contain object-left"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 2xl:gap-8 z-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
          <div>
            <p className="font-futura font-medium text-[10px] md:text-xs 2xl:text-sm uppercase tracking-[0.3em] opacity-85 mb-1">
              ELEGANT, UNEXPECTED, UNFORGETTABLE
            </p>

            <h3 className="font-pinyon text-[clamp(32px,3vw,60px)] opacity-98 leading-none text-[#F3EDE6]">
              Boulevard des coeurs
            </h3>
          </div>

          <p className="font-futura text-[clamp(13px,1.1vw,22px)] font-medium max-w-sm md:max-w-md 2xl:max-w-xl text-[#F3EDE6] leading-relaxed">
            A refined combination of almond, white pepper, and citrus that
            balances softness with subtle spice, creating a sophisticated and
            layered profile.
          </p>
        </div>

        <div className="w-full flex gap-2 pt-3 md:pt-4 ">
          {[...Array(11)].map((_, index) => (
            <div
              key={index}
              className={`h-0.5 2xl:h-1 flex-1 ${
                index === 3 ? "bg-[#F3EDE6]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}