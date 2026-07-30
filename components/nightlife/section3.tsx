"use client";

import { useState } from "react";
import Image from "next/image";

const COCKTAILS = [
  {
    id: 1,
    name: "Boulevard des coeurs",
    tagline: "ELEGANT, UNEXPECTED, UNFORGETTABLE",
    description:
      "A refined combination of almond, white pepper, and citrus that balances softness with subtle spice, creating a sophisticated and layered profile.",
    image: "/currcocktail.svg",
  },
  {
    id: 2,
    name: "Smokey Midnight",
    tagline: "BOLD, RICH, MEMORABLE",
    description:
      "A deep blend of smoked mezcal, dark cherry bitters, and a touch of agave nectar.",
    image: "/currcocktail.svg",
  },
  {
    id: 3,
    name: "Citrus Illusion",
    tagline: "FRESH, VIBRANT, CITRUS",
    description:
      "Crisp gin paired with yuzu, fresh basil, and sparkling elderflower tonic.",
    image: "/currcocktail.svg",
  },
];

export default function Section3() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = COCKTAILS.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const currentCocktail = COCKTAILS[currentIndex];
  const prevCocktail = COCKTAILS[prevIndex];
  const nextCocktail = COCKTAILS[nextIndex];

  return (
    <section className="h-screen w-full snap-start bg-black text-[#F3EDE6] relative flex flex-col justify-between p-6 md:p-8 2xl:p-16 overflow-hidden">
      <div className="w-full flex justify-between items-center z-10 text-[11px] md:text-xs 2xl:text-base tracking-[0.2em] uppercase font-futura font-medium opacity-85 px-12 md:px-24 2xl:px-36 pt-8 md:pt-12">
        <span>SIGNATURE COCKTAILS</span>
        <span>
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="relative w-full h-[48%] md:h-[52%] flex items-center justify-center my-auto translate-y-3 md:translate-y-5">
        <button
          onClick={() => setCurrentIndex(prevIndex)}
          className="absolute left-0 -translate-x-[55%] w-48 md:w-64 lg:w-80 h-full opacity-35 hover:opacity-70 transition-all cursor-pointer flex items-center justify-center z-20 pointer-events-auto scale-75 md:scale-80 lg:scale-85"
          aria-label="Previous Cocktail"
        >
          <div className="relative w-full h-full">
            <Image
              src={prevCocktail.image}
              alt={prevCocktail.name}
              fill
              className="object-contain"
            />
          </div>
        </button>

        <div className="relative w-80 md:w-lg lg:w-2xl 2xl:w-4xl h-full z-10 flex items-center justify-center scale-110 lg:scale-125 2xl:scale-140 translate-y-2 md:translate-y-4 transition-all duration-300">
          <Image
            src={currentCocktail.image}
            alt={currentCocktail.name}
            fill
            priority
            className="object-contain"
          />
        </div>

        <button
          onClick={() => setCurrentIndex(nextIndex)}
          className="absolute right-0 translate-x-[55%] w-48 md:w-64 lg:w-80 h-full opacity-35 hover:opacity-70 transition-all cursor-pointer flex items-center justify-center z-20 pointer-events-auto scale-75 md:scale-80 lg:scale-85"
          aria-label="Next Cocktail"
        >
          <div className="relative w-full h-full">
            <Image
              src={nextCocktail.image}
              alt={nextCocktail.name}
              fill
              className="object-contain"
            />
          </div>
        </button>
      </div>

      <div className="w-full flex flex-col gap-4 2xl:gap-8 z-10 px-6 md:px-16 lg:px-28 2xl:px-40 mb-6 md:mb-10 2xl:mb-14 translate-y-[90px]">
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            padding: "10px 0px",
          }}
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6"
        >
          <div style={{ padding: "5px 0px" }} className="flex flex-col gap-3">
            <p className="font-futura font-medium text-[10px] md:text-xs 2xl:text-sm uppercase tracking-[0.3em] opacity-85">
              {currentCocktail.tagline}
            </p>

            <h3 className="font-pinyon text-[clamp(27px,2.6vw,52px)] opacity-98 leading-none text-[#F3EDE6]">
              {currentCocktail.name}
            </h3>
          </div>

          <p className="font-futura text-[clamp(13px,1.1vw,22px)] font-medium max-w-sm md:max-w-md 2xl:max-w-xl text-[#F3EDE6] leading-relaxed">
            {currentCocktail.description}
          </p>
        </div>

        <div className="w-full flex gap-2 pt-3 md:pt-4">
          {COCKTAILS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-0.5 2xl:h-1 flex-1 transition-colors duration-300 cursor-pointer ${
                index === currentIndex ? "bg-[#F3EDE6]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
