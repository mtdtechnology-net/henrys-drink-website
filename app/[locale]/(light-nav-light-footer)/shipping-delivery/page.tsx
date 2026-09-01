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

export default function ShippingDeliveryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.25], [0, -25]);
  const headerScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.98]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.5]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#fffcf9] text-[#442f0e]"
    >
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
            Shipping Policy
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
          <PolicySection title="Delivery Zones">
            <p>
              Henrys ships its products within France and internationally
              through its logistics partner Pelican.
            </p>
          </PolicySection>

          <PolicySection title="Delivery Times">
            <p>
              The average delivery time is a minimum of one business week
              starting from order confirmation.
            </p>

            <p>
              Delivery times may vary depending on the destination country and
              are not guaranteed.
            </p>

            <p>
              Henrys shall not be held responsible for any delays related to the
              carrier, customs, or events of force majeure.
            </p>
          </PolicySection>

          <PolicySection title="Shipping Fees">
            <div className="space-y-6">
              <div>
                <p>
                  Shipping costs are calculated at checkout based on the
                  destination and chosen shipping method.
                </p>

                <p>
                  Delivery reserved strictly for adults. In accordance with
                  current legislation, our alcohol-containing products can only
                  be sold and delivered to adults (18 years and older).
                </p>
              </div>

              <div>
                <p>The carrier may verify the recipient's age upon delivery.</p>

                <p>
                  Damaged, lost, or non-compliant products. If the package
                  arrives damaged, incomplete, or non-compliant, the customer
                  must immediately report it to the carrier and contact our
                  customer service at{" "}
                  <a
                    href="mailto:henrysdrink@gmail.com"
                    className="underline underline-offset-2 transition-colors hover:text-[#b30012]"
                  >
                    henrysdrink@gmail.com
                  </a>
                  .
                </p>
              </div>

              <p>
                In the event of confirmed loss or damage, Henrys undertakes to
                refund or resend the package according to the customer's
                preference.
              </p>
            </div>
          </PolicySection>

          <PolicySection title="Customs and Local Taxes">
            <p>
              For deliveries outside the European Union, customs fees or local
              taxes may apply and remain the responsibility of the customer.
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
