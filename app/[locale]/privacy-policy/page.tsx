"use client";

import { Comfortaa, Roboto } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import { useRef } from "react";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 1.0,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.25], [0, -25]);
  const headerScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.98]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.5]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#fffcf9] text-[#442f0e]">
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-28 pt-[clamp(7rem,14vh,11rem)] sm:px-10 lg:px-8">
        <motion.header 
          style={{ y: headerY, scale: headerScale, opacity: headerOpacity }}
          className="mb-[clamp(3.5rem,7vh,5.5rem)] text-center relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: -20, letterSpacing: "0.25em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className={`${roboto.className} mb-5 text-[14px] uppercase leading-none text-[#b30012] sm:text-[15px]`}
          >
            Legal &amp; Policies
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className={`${comfortaa.className} m-0 text-[clamp(2.75rem,5vw,4.25rem)] font-normal leading-[1.1] tracking-[-0.035em]`}
          >
            Privacy Policy
          </motion.h1>

          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scaleX: 1.2, transition: { duration: 0.5 } }}
            className="mx-auto mt-6 h-[2px] w-[125px] bg-[#b30012] origin-center cursor-pointer shadow-sm"
          />
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className={`${roboto.className} space-y-10 text-[17px] font-normal leading-[1.7] text-[#442f0e]/80 sm:text-[18px]`}
        >
          <PolicySection title="Data Collection">
            <p>
              We collect personal information that you provide directly to us when
              creating an account, placing an order, or contacting our support team.
            </p>
          </PolicySection>

          <PolicySection title="Use of Information">
            <p>
              Your personal data is strictly used to process your orders, improve
              our products and services, and maintain account security.
            </p>
            <p>
              We do not sell or rent your personal information to third parties under
              any circumstances.
            </p>
          </PolicySection>

          <PolicySection title="Data Security & Rights">
            <div className="space-y-6">
              <p>
                We implement robust physical and technical security measures to protect
                your information against unauthorized access, loss, or alteration.
              </p>
              <p>
                In accordance with applicable privacy laws, you have the right to access,
                rectify, or request the deletion of your personal data at any time by contacting us at{" "}
                <a
                  href="mailto:henrysdrink@gmail.com"
                  className="underline underline-offset-2 transition-colors hover:text-[#b30012]"
                >
                  henrysdrink@gmail.com
                </a>
                .
              </p>
            </div>
          </PolicySection>

          <PolicySection title="Cookies & Analytics">
            <p>
              Our website uses essential cookies to ensure proper site performance and functional features.
              Analytics cookies are only utilized to understand aggregated usage patterns and improve experience.
            </p>
          </PolicySection>
        </motion.div>
      </article>

      <Footer
        theme="light"
        privacyHref="/privacy-policy"
        shippingHref="/shipping-delivery"
      />
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={itemVariants}>
      <h2
        className={`${comfortaa.className} mb-4 text-[24px] font-medium leading-tight text-[#442f0e] transition-colors duration-300 hover:text-[#b30012] sm:text-[27px]`}
      >
        {title}
      </h2>

      {children}
    </motion.section>
  );
}