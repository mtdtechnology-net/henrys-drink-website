"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface SectionProps {
  data?: Record<string, any>;
}

const COCKTAIL_IMAGES = [
  "/henryssour.svg",
  "/berryorgasm.svg",
  "/boulevarddescoeurs.svg",
  "/crimsonamour.svg",
  "/aperochic.svg",
  "/twilightfizz.svg",
  "/rubywoo.svg",
  "/velvetkiss.svg",
  "/henrysdivine.svg",
  "/onenightinmonaco.svg",
  "/soiréemystique.svg",
];

const FALLBACK_COCKTAILS = [
  { id: 1, name: "Henry's Sour", tagline: "A MODERN CLASSIC WITH CHARACTER.", description: "The richness of Henry's aperitif meets the warmth of Irish whiskey..." },
  { id: 2, name: "Berry orgasm", tagline: "SMOOTH, INDULGENT, AND UNAPOLOGETICALLY DECADENT.", description: "Creamy textures and delicate cacao notes create a cocktail..." },
  { id: 3, name: "Boulevard des coeurs", tagline: "ELEGANT, UNEXPECTED, UNFORGETTABLE", description: "A refined combination of almond, white pepper, and citrus..." },
  { id: 4, name: "Crimson Amour", tagline: "BOLD PASSION IN A GLASS.", description: "A deeper, richer cocktail where botanicals, vermouth, and maple..." },
  { id: 5, name: "Apero Chic", tagline: "EFFORTLESSLY ELEGANT.", description: "Light, sparkling, and celebratory. A cocktail designed for aperitif..." },
  { id: 6, name: "Twilight Fizz", tagline: "WHERE THE EVENING BEGINS.", description: "Fresh, vibrant, and playful. A lively mix of botanicals..." },
  { id: 7, name: "Ruby Woo", tagline: "CONFIDENT, EXPRESSIVE, AND FULL OF ENERGY.", description: "Built around fruit-forward notes and a refreshing finish..." },
  { id: 8, name: "Velvet Kiss", tagline: "SOFT, FLORAL, AND REFINED.", description: "A delicate balance of elderflower and champagne..." },
  { id: 9, name: "Henry's Divine", tagline: "A CELEBRATION OF BRIGHTNESS AND JOY.", description: "Tropical fruit notes, champagne, and the signature aperitif..." },
  { id: 10, name: "One Night in Monaco", tagline: "MADE FOR UNFORGETTABLE EVENINGS.", description: "Playful, energetic, and slightly exotic..." },
  { id: 11, name: "Soirée Mystique", tagline: "THE MOST INTRIGUING GUEST AT THE TABLE.", description: "A surprising blend of strawberry, banana, and champagne..." },
];

export default function Section3({ data }: SectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const cornerTitle = data?.CocktailCornerTitle || "SIGNATURE COCKTAILS";

  // Generăm dinamice cele 11 cocktailuri mapând datele din Strapi
  const cocktails = Array.from({ length: 11 }).map((_, index) => {
    const i = index + 1;
    const fallback = FALLBACK_COCKTAILS[index];

    return {
      id: i,
      name: data?.[`CocktailName${i}`] || fallback.name,
      tagline: data?.[`CocktailTagline${i}`] || fallback.tagline,
      description: data?.[`CocktailDescription${i}`] || fallback.description,
      image: COCKTAIL_IMAGES[index],
    };
  });

  const total = cocktails.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const currentCocktail = cocktails[currentIndex];
  const prevCocktail = cocktails[prevIndex];
  const nextCocktail = cocktails[nextIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchPosition === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 50) {
      setCurrentIndex(nextIndex);
      setTouchPosition(null);
    } else if (diff < -50) {
      setCurrentIndex(prevIndex);
      setTouchPosition(null);
    }
  };

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="h-screen w-full snap-start bg-black text-[#F3EDE6] relative flex flex-col justify-between p-6 md:p-8 2xl:p-16 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-between items-center z-10 text-[11px] md:text-xs 2xl:text-base tracking-[0.2em] uppercase font-futura font-medium opacity-85 px-12 md:px-24 2xl:px-36 pt-8 md:pt-12"
      >
        <span>{cornerTitle}</span>
        <span>
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </motion.div>

      <div className="relative w-full h-[48%] md:h-[52%] flex items-center justify-center my-auto translate-y-3 md:translate-y-5">
        <button
          onClick={() => setCurrentIndex(prevIndex)}
          className="absolute left-0 translate-x-[-55%] w-48 md:w-64 lg:w-80 h-full opacity-35 hover:opacity-70 transition-opacity duration-300 cursor-pointer flex items-center justify-center z-20 pointer-events-auto scale-75 md:scale-80 lg:scale-85"
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

        <div className="relative w-80 md:w-lg lg:w-2xl 2xl:w-4xl h-full z-10 flex items-center justify-center scale-110 lg:scale-125 2xl:scale-140 -translate-y-5 md:-translate-y-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCocktail.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={currentCocktail.image}
                alt={currentCocktail.name}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 50vw"
                className="object-contain image-rendering-crisp-sharp transform-gpu backface-hidden"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => setCurrentIndex(nextIndex)}
          className="absolute right-0 translate-x-[55%] w-48 md:w-64 lg:w-80 h-full opacity-35 hover:opacity-70 transition-opacity duration-300 cursor-pointer flex items-center justify-center z-20 pointer-events-auto scale-75 md:scale-80 lg:scale-85"
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

      <div className="w-full flex flex-col gap-4 2xl:gap-8 z-10 px-6 md:px-16 lg:px-28 2xl:px-40 mb-6 md:mb-10 2xl:mb-14 -translate-y-8 md:translate-y-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCocktail.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
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
          </motion.div>
        </AnimatePresence>

        <div className="w-full flex gap-2 pt-3 md:pt-4">
          {cocktails.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scaleY: 1.5 }}
              className={`h-0.5 2xl:h-1 flex-1 transition-colors duration-300 cursor-pointer ${
                index === currentIndex ? "bg-[#F3EDE6]" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 w-full h-18 sm:h-14 bg-gradient-to-t from-black via-black/90 to-transparent z-30 pointer-events-none" />
    </section>
  );
}