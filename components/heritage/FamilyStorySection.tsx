"use client";

import Image from "next/image";
import { motion } from "motion/react";

const SLOW_EASE = [0.05, 0.7, 0.1, 1] as const;

export function FamilyStorySection() {
  return (
    <section
      id="family-story"
      className="relative min-h-[max(100svh,min(56.25vw,1080px))] overflow-hidden bg-[#282828] before:pointer-events-none before:absolute before:inset-x-0 before:top-[-80px] before:z-[1] before:h-[300px] before:scale-x-[1.04] before:bg-[linear-gradient(to_bottom,#fffcf9_0%,#fffcf9_30%,rgba(255,252,249,0.94)_43%,rgba(255,252,249,0.72)_58%,rgba(255,252,249,0.34)_76%,rgba(255,252,249,0)_100%)] before:blur-[18px] before:content-[''] max-[768px]:min-h-0 max-[768px]:px-4 max-[768px]:pb-28 max-[768px]:pt-20"
      aria-labelledby="family-story-title"
    >
      <div className="absolute inset-0 z-0 bg-[url('/vines.svg')] bg-cover bg-center bg-no-repeat grayscale after:absolute after:inset-0 after:bg-black/[0.06] after:content-['']" />

      <div className="relative z-[2] mx-auto min-h-[max(100svh,min(56.25vw,1080px))] w-full max-w-[1920px] max-[768px]:flex max-[768px]:min-h-0 max-[768px]:flex-col max-[768px]:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 3.2, delay: 0.6, ease: SLOW_EASE }}
          className="absolute left-[18.594%] top-[min(18.698vw,359px)] z-[3] h-auto w-[18.854%] max-w-[362px] max-[768px]:relative max-[768px]:left-auto max-[768px]:top-auto max-[768px]:mb-14 max-[768px]:w-[210px] max-[768px]:shrink-0 max-[768px]:self-start max-[768px]:translate-x-[8vw] max-[480px]:mb-12 max-[480px]:w-[170px] max-[480px]:translate-x-[5vw]"
        >
          <Image
            className="h-auto w-full object-contain [filter:drop-shadow(0_4px_15.7px_rgba(0,0,0,0.35))]"
            src="/logo-burgundy.svg"
            alt=""
            width={362}
            height={486}
            aria-hidden="true"
          />
        </motion.div>

<<<<<<< HEAD
        <article className="absolute left-[55.99%] top-[min(10.885vw,209px)] z-[2] box-border flex h-[min(40.938vw,786px)] w-[29.427%] max-w-[565px] flex-col overflow-hidden bg-[#fffcf9] px-[min(2.604vw,50px)] pb-[min(2.604vw,50px)] pt-[min(2.604vw,50px)] text-[#442f0e] min-[1600px]:h-[740px] min-[1600px]:w-[535px] min-[1600px]:px-[45px] min-[1600px]:pb-[38px] min-[1600px]:pt-[38px] max-[768px]:relative max-[768px]:left-auto max-[768px]:top-auto max-[768px]:h-auto max-[768px]:w-full max-[768px]:max-w-[500px] max-[768px]:px-6 max-[768px]:pb-10 max-[768px]:pt-8 max-[480px]:px-5">
          {" "}
          <h2
=======
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.2, delay: 0.2, ease: SLOW_EASE }}
          className="absolute left-[55.99%] top-[min(10.885vw,209px)] z-[2] box-border flex h-[min(40.938vw,786px)] w-[29.427%] max-w-[565px] flex-col overflow-hidden bg-[#fffcf9] px-[min(2.604vw,50px)] pb-[min(2.604vw,50px)] pt-[min(2.604vw,50px)] text-[#442f0e] min-[1600px]:h-[740px] min-[1600px]:w-[535px] min-[1600px]:px-[45px] min-[1600px]:pb-[38px] min-[1600px]:pt-[38px] max-[768px]:relative max-[768px]:left-auto max-[768px]:top-auto max-[768px]:h-auto max-[768px]:w-full max-[768px]:max-w-[500px] max-[768px]:px-6 max-[768px]:pb-10 max-[768px]:pt-8 max-[480px]:px-5"
        >
          <motion.h2
>>>>>>> e93d459 (heritage animations implementation)
            id="family-story-title"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.2, delay: 0.4, ease: SLOW_EASE }}
            className="relative z-[3] mb-[min(1.042vw,20px)] mt-0 flex h-[min(3.542vw,68px)] w-full shrink-0 items-center justify-center whitespace-nowrap text-center align-middle font-['Perandory',Georgia,serif] text-[min(3.229vw,62px)] font-normal leading-none tracking-[0] text-[#442f0e] [font-stretch:semi-condensed] max-[768px]:mb-6 max-[768px]:h-auto max-[768px]:min-h-[52px] max-[768px]:whitespace-normal max-[768px]:text-[clamp(42px,10vw,56px)]"
          >
            A FAMILY STORY
<<<<<<< HEAD
          </h2>
          <div className="relative z-[2] aspect-[1.07/1] w-full shrink-0 overflow-hidden">
=======
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.4, delay: 0.9, ease: SLOW_EASE }}
            className="relative z-[2] aspect-[1.07/1] w-full shrink-0 overflow-hidden"
          >
>>>>>>> e93d459 (heritage animations implementation)
            <Image
              className="object-cover object-center grayscale"
              src="/man.svg"
              alt="Henri, the grandfather who preserved the family recipe"
              fill
              sizes="(max-width: 768px) 85vw, 24.22vw"
            />
<<<<<<< HEAD
          </div>
=======
          </motion.div>

>>>>>>> e93d459 (heritage animations implementation)
          <div className="relative mt-[min(0.833vw,16px)] flex min-h-0 flex-1 items-start">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.65 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 3.0, delay: 1.8, ease: "easeInOut" }}
              className="pointer-events-none absolute bottom-[-18%] left-[-10%] z-[1] h-auto w-[78%] object-contain [filter:saturate(1.5)_brightness(0.95)] max-[768px]:bottom-[-45px] max-[768px]:left-[-75px] max-[768px]:h-[270px] max-[768px]:w-[305px]"
              src="/mark.svg"
              alt=""
              width={362}
              height={321}
              aria-hidden="true"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 2.4, delay: 1.4, ease: SLOW_EASE }}
              className="relative z-[2] m-0 w-full font-['Comfortaa',sans-serif] text-[min(1.146vw,22px)] font-medium leading-[min(1.458vw,28px)] tracking-[0] text-[#442f0e] max-[768px]:text-[18px] max-[768px]:leading-[25px]"
            >
              Preciously guarding his recipe for more than half a century,
              Henri, the grandfather, passed down his passion for delicate
              drinks and warm shared moments.
            </motion.p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default FamilyStorySection;
