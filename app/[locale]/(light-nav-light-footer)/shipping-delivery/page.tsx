"use client";

import { Comfortaa, Roboto } from "next/font/google";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { getShippingPolicyPage } from "@/lib/strapi";

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
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const [data, setData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await getShippingPolicyPage(locale);
        const strapiData = res?.data?.attributes || res?.attributes || res;
        setData(strapiData);
      } catch (err) {
        console.error(err);
      }
    }
    loadData();
  }, [locale]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.25], [0, -25]);
  const headerScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.98]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.5]);

  const formatText = (text?: string) => text?.replace(/\\n/g, "\n") || "";

  const subtitle = data?.ShippingPolicySubtitle || "Legal & Policies";
  const title = data?.ShippingPolicyTitle || "Shipping Policy";

  const deliveryZonesTitle = data?.DeliveryZonesTitle || "Delivery Zones";
  const deliveryZonesParagraph =
    formatText(data?.DeliveryZonesParagraph) ||
    "Henrys ships its products within France and internationally through its logistics partner Pelican.";

  const deliveryTimesTitle = data?.DeliveryTimesTitle || "Delivery Times";
  const deliveryTimesParagraph1 =
    formatText(data?.DeliveryTimesParagraph1) ||
    "The average delivery time is a minimum of one business week starting from order confirmation.";
  const deliveryTimesParagraph2 =
    formatText(data?.DeliveryTimesParagraph2) ||
    "Delivery times may vary depending on the destination country and are not guaranteed.";
  const deliveryTimesParagraph3 =
    formatText(data?.DeliveryTimesParagraph3) ||
    "Henrys shall not be held responsible for any delays related to the carrier, customs, or events of force majeure.";

  const shippingTitle = data?.ShippingTitle || "Shipping Fees";
  const shippingParagraph1 =
    formatText(data?.ShippingParagraph1) ||
    "Shipping costs are calculated at checkout based on the destination and chosen shipping method.";
  const shippingParagraph2 =
    formatText(data?.ShippingParagraph2) ||
    "Delivery reserved strictly for adults. In accordance with current legislation, our alcohol-containing products can only be sold and delivered to adults (18 years and older).";
  const shippingParagraph3 =
    formatText(data?.ShippingParagraph3) ||
    "The carrier may verify the recipient's age upon delivery.";
  const shippingParagraph4 =
    formatText(data?.ShippingParagraph4) ||
    "Damaged, lost, or non-compliant products. If the package arrives damaged, incomplete, or non-compliant, the customer must immediately report it to the carrier and contact our customer service at henrysdrink@gmail.com.";
  const shippingParagraph5 =
    formatText(data?.ShippingParagraph5) ||
    "In the event of confirmed loss or damage, Henrys undertakes to refund or resend the package according to the customer's preference.";

  const customsTitle = data?.CustomsTitle || "Customs and Local Taxes";
  const customsParagraph =
    formatText(data?.CustomsParagraph) ||
    "For deliveries outside the European Union, customs fees or local taxes may apply and remain the responsibility of the customer.";

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#fffcf9] text-[#442f0e]"
    >
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
            {subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className={`${comfortaa.className} m-0 text-[clamp(2.75rem,5vw,4.25rem)] font-normal leading-[1.1] tracking-[-0.035em]`}
          >
            {title}
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
          <PolicySection title={deliveryZonesTitle}>
            <p className="whitespace-pre-line">{deliveryZonesParagraph}</p>
          </PolicySection>

          <PolicySection title={deliveryTimesTitle}>
            <p className="whitespace-pre-line">{deliveryTimesParagraph1}</p>
            <p className="whitespace-pre-line">{deliveryTimesParagraph2}</p>
            <p className="whitespace-pre-line">{deliveryTimesParagraph3}</p>
          </PolicySection>

          <PolicySection title={shippingTitle}>
            <div className="space-y-6">
              <div>
                <p className="whitespace-pre-line">{shippingParagraph1}</p>
                <p className="whitespace-pre-line">{shippingParagraph2}</p>
              </div>

              <div>
                <p className="whitespace-pre-line">{shippingParagraph3}</p>
                <p className="whitespace-pre-line">{shippingParagraph4}</p>
              </div>

              <p className="whitespace-pre-line">{shippingParagraph5}</p>
            </div>
          </PolicySection>

          <PolicySection title={customsTitle}>
            <p className="whitespace-pre-line">{customsParagraph}</p>
          </PolicySection>
        </motion.div>
      </article>
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