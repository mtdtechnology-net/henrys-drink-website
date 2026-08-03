"use client";

import { useState } from "react";
import Image from "next/image";

const COCKTAILS = [
  {
    id: 1,
    name: "Henry's Sour",
    tagline: "A MODERN CLASSIC WITH CHARACTER.",
    description:
      "The richness of Henry's aperitif meets the warmth of Irish whiskey, creating a perfectly balanced cocktail with depth, freshness, and a lingering finish.",
    image: "/henryssour.svg",
  },
  {
    id: 2,
    name: "Berry orgasm",
    tagline: "SMOOTH, INDULGENT, AND UNAPOLOGETICALLY DECADENT.",
    description:
      "Creamy textures and delicate cacao notes create a cocktail that feels more like a dessert experience than a drink.",
    image: "/berryorgasm.svg",
  },
  {
    id: 3,
    name: "Boulevard des coeurs",
    tagline: "ELEGANT, UNEXPECTED, UNFORGETTABLE",
    description:
      "A refined combination of almond, white pepper, and citrus that balances softness with subtle spice, creating a sophisticated and layered profile.",
    image: "/boulevarddescoeurs.svg",
  },
  {
    id: 4,
    name: "Crimson Amour",
    tagline: "BOLD PASSION IN A GLASS.",
    description:
      "A deeper, richer cocktail where botanicals, vermouth, and maple notes meet the signature Henry's character, creating a smooth and seductive experience.",
    image: "/crimsonamour.svg",
  },
  {
    id: 5,
    name: "Apero Chic",
    tagline: "EFFORTLESSLY ELEGANT.",
    description:
      "Light, sparkling, and celebratory. A cocktail designed for aperitif moments, combining floral notes with the refinement of champagne.",
    image: "/aperochic.svg",
  },
  {
    id: 6,
    name: "Twilight Fizz",
    tagline: "WHERE THE EVENING BEGINS.",
    description:
      "Fresh, vibrant, and playful. A lively mix of botanicals and delicate sweetness that captures the transition from day to night.",
    image: "/twilightfizz.svg",
  },
  {
    id: 7,
    name: "Ruby Woo",
    tagline: "CONFIDENT, EXPRESSIVE, AND FULL OF ENERGY.",
    description:
      "Built around fruit-forward notes and a refreshing finish, this cocktail brings a vibrant personality to every occasion.",
    image: "/rubywoo.svg",
  },
  {
    id: 8,
    name: "Velvet Kiss",
    tagline: "SOFT, FLORAL, AND REFINED.",
    description:
      "A delicate balance of elderflower and champagne creates a light and elegant cocktail perfect for slower moments and meaningful conversations.",
    image: "/velvetkiss.svg",
  },
  {
    id: 9,
    name: "Henry's Divine",
    tagline: "A CELEBRATION OF BRIGHTNESS AND JOY.",
    description:
      "Tropical fruit notes, champagne, and the signature aperitif come together in a cocktail designed to feel vibrant, fresh, and uplifting.",
    image: "/henrysdivine.svg",
  },
  {
    id: 10,
    name: "One Night in Monaco",
    tagline: "MADE FOR UNFORGETTABLE EVENINGS.",
    description:
      "Playful, energetic, and slightly exotic, this cocktail combines fruit-forward flavors with a smooth finish inspired by nights that never quite end.",
    image: "/onenightinmonaco.svg",
  },
  {
    id: 11,
    name: "Soirée Mystique",
    tagline: "THE MOST INTRIGUING GUEST AT THE TABLE.",
    description:
      "A surprising blend of strawberry, banana, and champagne that delivers a cocktail experience that is both playful and sophisticated.",
    image: "/soiréemystique.svg",
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
      <div className="w-full flex justify-between items-center z-10 text-[11px] md:text-xs 2xl:text-base tracking-[0.2em] uppercase font-futura font-medium opacity-85 px-12 md:px-24 2xl:px-36 pt-8 md:pt-12 lg:mb-20 2xl:mb-26">
        <span>SIGNATURE COCKTAILS</span>
        <span>
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="relative w-full h-[48%] md:h-[52%] flex items-center justify-center my-auto translate-y-3 md:translate-y-5">
        <button
          onClick={() => setCurrentIndex(prevIndex)}
          className="absolute left-0 translate-x-[-55%] w-48 md:w-64 lg:w-80 h-full opacity-35 hover:opacity-70 transition-all cursor-pointer flex items-center justify-center z-20 pointer-events-auto scale-75 md:scale-80 lg:scale-85"
          aria-label="Previous Cocktail"
        >
          <div className="relative w-full h-full">
            <Image
              src={prevCocktail.image}
              alt={prevCocktail.name}
              fill
              unoptimized
              sizes="(max-width: 768px) 30vw, 20vw"
              className="object-contain image-rendering-crisp-sharp transform-gpu backface-hidden"
            />
          </div>
        </button>

        <div className="relative w-80 md:w-lg lg:w-2xl 2xl:w-4xl h-full z-10 flex items-center justify-center scale-110 lg:scale-125 2xl:scale-140 -translate-y-5 md:-translate-y-9 transition-all duration-300">
          <Image
            src={currentCocktail.image}
            alt={currentCocktail.name}
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 50vw"
            className="object-contain image-rendering-crisp-sharp transform-gpu backface-hidden"
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
              unoptimized
              sizes="(max-width: 768px) 30vw, 20vw"
              className="object-contain image-rendering-crisp-sharp transform-gpu backface-hidden"
            />
          </div>
        </button>
      </div>

      <div className="w-full flex flex-col gap-4 2xl:gap-8 z-10 px-6 md:px-16 lg:px-28 2xl:px-40 mb-6 md:mb-10 lg:mt-10 2xl:mb-14">
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
