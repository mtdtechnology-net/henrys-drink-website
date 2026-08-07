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
          className="relative z-10 mb-[clamp(3.5rem,7vh,5.5rem)] text-center"
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
            className="mx-auto mt-6 h-[2px] w-[125px] origin-center cursor-pointer bg-[#b30012] shadow-sm"
          />
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className={`${roboto.className} space-y-10 text-[17px] font-normal leading-[1.7] text-[#442f0e]/80 sm:text-[18px]`}
        >
          <motion.section variants={itemVariants} className="space-y-4">
            <p>
              The company SAS MBE, registered with the Trade and Companies Register (RCS) under number 980 803 921, whose registered office is located at 65 Impasse des Mouilles, Parc de Montfleur, 69400 Gleizé, France, attaches great importance to the protection of your personal data.
            </p>
            <p>
              This privacy policy aims to inform you in a transparent manner about how we collect, use, and protect your information, in accordance with the General Data Protection Regulation (GDPR) and applicable French legislation.
            </p>
          </motion.section>

          <PolicySection title="Data Controller">
            <p>
              The data controller for your data is SAS MBE, located at 65 Impasse des Mouilles, Parc de Montfleur, 69400 Gleizé – France (GDPR Contact:{" "}
              <a
                href="mailto:henrysdrink@gmail.com"
                className="underline underline-offset-2 transition-colors hover:text-[#b30012]"
              >
                henrysdrink@gmail.com
              </a>
              ).
            </p>
          </PolicySection>

          <PolicySection title="Personal Data Collected">
            <p>
              We only collect the data necessary within the scope of our activity, including identity details (first name, last name), contact information (postal address, email, phone number), message content sent via the contact form, newsletter subscriptions, and browsing data (connection timestamps, pages viewed, site activity via Google Analytics and similar cookies).
            </p>
          </PolicySection>

          <PolicySection title="Purposes of Collection">
            <p>
              Your data is strictly used to respond to your requests via the contact form, manage your newsletter subscriptions, improve site navigation and user experience, conduct statistical analyses via Google Analytics, and comply with our legal and regulatory obligations.
            </p>
          </PolicySection>

          <PolicySection title="Retention Period">
            <p>
              Data related to prospects (contact forms and newsletters) is retained for 5 years after the last contact, customer data is kept for 5 years following the end of the contractual relationship (or longer if required by French law), and browsing data from cookies/Analytics is stored according to Google's settings, generally for 14 months.
            </p>
          </PolicySection>

          <PolicySection title="Data Sharing and Hosting">
            <p>
              Your data may be processed by our web provider AGORATECH (SIRET 979 819 125), our host Wix.com Ltd. located outside the European Union under standard contractual clauses approved by the European Commission, and our technical partners (for payments, newsletters, or carriers if applicable), and we never resell your personal data to third parties.
            </p>
          </PolicySection>

          <PolicySection title="Your Rights">
            <p>
              In accordance with the GDPR and the Data Protection Act (Loi Informatique et Libertés), you have the right to access, rectify, erase, object to processing for direct marketing, and request the portability of your personal data by contacting{" "}
              <a
                href="mailto:henrysdrink@gmail.com"
                className="underline underline-offset-2 transition-colors hover:text-[#b30012]"
              >
                henrysdrink@gmail.com
              </a>
              , with a response guaranteed within a maximum of 30 days.
            </p>
          </PolicySection>

          <PolicySection title="Cookies and Tracking">
            <p>
              Our site uses Google Analytics to analyze traffic and improve user experience, and you can manage or refuse the use of cookies directly through your browser settings.
            </p>
          </PolicySection>

          <PolicySection title="Security">
            <p>
              We implement all technical and organizational measures necessary to protect your personal data against unauthorized access, loss, alteration, or disclosure.
            </p>
          </PolicySection>

          <PolicySection title="Policy Changes">
            <p>
              This privacy policy may be updated at any time, and we invite you to review it regularly.
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
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={itemVariants}>
      {title && (
        <h2
          className={`${comfortaa.className} mb-4 text-[24px] font-medium leading-tight text-[#442f0e] transition-colors duration-300 hover:text-[#b30012] sm:text-[27px]`}
        >
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}