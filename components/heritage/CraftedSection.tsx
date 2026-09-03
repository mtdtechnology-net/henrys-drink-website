"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const SLOW_EASE = [0.05, 0.7, 0.1, 1] as const;

interface CraftedSectionProps {
  data?: {
    craftedSection?: {
      CraftedTitle?: string;
      CraftedParagraph1?: string;
      CraftedParagraph2?: string;
      CraftedParagraph3?: string;
      CraftedParagraph4?: string;
    };
  };
}

export function CraftedSection({ data }: CraftedSectionProps) {
  const randomDelays = useMemo(
    () => [0.3, 1.4, 0.8, 2.1, 1.1, 1.9, 2.5],
    []
  );

  const sectionData = data?.craftedSection;

  const titleText = sectionData?.CraftedTitle || "CRAFTED WITH PATIENCE";
  const p1 = sectionData?.CraftedParagraph1 || "Every bottle begins long before it reaches the glass.";
  const p2 = sectionData?.CraftedParagraph2 || "From vineyard to cellar, each step follows the same philosophy: quality takes time.";
  const p3 = sectionData?.CraftedParagraph3 || "The grapes are carefully cultivated and harvested before being transformed through a process that balances tradition, expertise, and patience.";
  const finalText = sectionData?.CraftedParagraph4 || "Nothing is rushed.";
  const finalWords = finalText.split(" ");

  return (
    <section className="relative z-[10] isolate box-border flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-[#fffcf9] px-6 py-20">
      <div 
        className="pointer-events-none absolute inset-0 z-[1] mx-auto h-full w-full max-w-[1600px] mix-blend-multiply" 
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 5, delay: randomDelays[0], ease: "easeInOut" }}
          className="absolute -left-[5%] -top-[20%] h-[115%] w-[85%]"
        >
          <Image src="/Group-4.svg" alt="" fill priority className="object-contain object-left-top" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 5, delay: randomDelays[1], ease: "easeInOut" }}
          className="absolute left-[20%] -top-[30%] h-[60%] w-[55%]"
        >
          <Image src="/Group-3.svg" alt="" fill priority className="object-contain object-top" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 5, delay: randomDelays[2], ease: "easeInOut" }}
          className="absolute -right-[8%] -top-[5%] h-[70%] w-[55%]"
        >
          <Image src="/Group-2.svg" alt="" fill priority className="object-contain object-right-top" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 5, delay: randomDelays[3], ease: "easeInOut" }}
          className="absolute right-[0%] top-[26%] h-[68%] w-[36%]"
        >
          <Image src="/Group.svg" alt="" fill priority className="object-contain object-right" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 5, delay: randomDelays[4], ease: "easeInOut" }}
          className="absolute left-[0%] top-[27%] h-[65%] w-[45%]"
        >
          <Image src="/Group-7.svg" alt="" fill priority className="object-contain object-left" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 5, delay: randomDelays[5], ease: "easeInOut" }}
          className="absolute -bottom-[8%] -left-[2%] h-[75%] w-[70%]"
        >
          <Image src="/Group-5.svg" alt="" fill priority className="object-contain object-left-bottom" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 5, delay: randomDelays[6], ease: "easeInOut" }}
          className="absolute -bottom-[2%] left-[10%] h-[75%] w-[95%]"
        >
          <Image src="/Group-6.svg" alt="" fill priority className="object-contain object-bottom" />
        </motion.div>
      </div>

      <div className="relative z-[2] mx-auto flex w-fit max-w-[90vw] flex-col items-center justify-center text-center max-[768px]:w-[85vw]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.2, delay: 0.2, ease: SLOW_EASE }}
          className="mb-[clamp(2.75rem,6vh,4.5rem)] mt-0 flex w-fit max-w-full flex-col items-center text-center font-['Perandory',Georgia,serif] text-[clamp(3rem,7vw,101px)] font-normal uppercase leading-none tracking-[0] text-[#442f0e] [font-stretch:semi-condensed] whitespace-pre-line max-[768px]:mb-10 max-[768px]:w-full max-[768px]:text-[clamp(3rem,12vw,4.2rem)]"
        >
          {titleText}
        </motion.h2>

        <div className="flex w-[520px] max-w-full flex-col items-center justify-center gap-8 text-center font-['Comfortaa',sans-serif] text-[18px] font-medium leading-[28px] tracking-[0] text-[#171717] [&_p]:m-0 [&_p]:w-full [&_p]:whitespace-normal [&_p]:text-center [&_strong]:font-bold max-[768px]:w-full max-[768px]:gap-6 max-[768px]:text-[16px] max-[768px]:leading-[25px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.2, delay: 0.8, ease: SLOW_EASE }}
          >
            {p1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.4, delay: 1.4, ease: SLOW_EASE }}
          >
            {p2}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.6, delay: 2.0, ease: SLOW_EASE }}
          >
            {p3}
          </motion.p>

          <div className="!mt-1 flex flex-wrap justify-center gap-[0.3em] !text-[28px] !font-bold !leading-[35px] !tracking-[0] max-[768px]:!text-[22px] max-[768px]:!leading-[29px]">
            {finalWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1.8,
                  delay: 2.7 + index * 0.4,
                  ease: SLOW_EASE,
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CraftedSection;