"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { getGlobalData } from "@/lib/strapi";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type FooterTheme = "light" | "dark";

type FooterProps = {
  theme?: FooterTheme;
  privacyHref?: string;
  shippingHref?: string;
  locale?: string;
};

const footerThemes = {
  light: {
    background: "bg-[#fffcf9]",
    text: "text-[#442F0E]",
    watermark: "text-[#442F0E0D]",
    logo: "/logo-blue.svg",
    socialIcons: "brightness-0",
  },
  dark: {
    background: "bg-[#12120E]",
    text: "text-white",
    watermark: "text-[#FFFFFF0D]",
    logo: "/logo-white.svg",
    socialIcons: "brightness-0 invert",
  },
} satisfies Record<
  FooterTheme,
  {
    background: string;
    text: string;
    watermark: string;
    logo: string;
    socialIcons: string;
  }
>;

export function Footer({
  theme = "light",
  privacyHref = "#",
  shippingHref = "#",
  locale,
}: FooterProps) {
  const styles = footerThemes[theme];

  const [footerData, setFooterData] = useState<Record<string, any> | null>(
    null
  );

  useEffect(() => {
    if (!locale) return;

    async function loadFooterData() {
      try {
        const res = await getGlobalData(locale);

        const attributes =
          res?.data?.attributes ||
          res?.attributes ||
          res;

        setFooterData(attributes?.footer || null);
      } catch (err) {
        console.error("Error fetching footer data:", err);
      }
    }

    loadFooterData();
  }, [locale]);

  const contactTitle =
    footerData?.FooterContactTitle || "Contact";

  const contactEmail =
    footerData?.FooterEmailAddress || "contact@henrysdrink.com";

  const contactDays =
    footerData?.FooterContactDays || "Monday–Friday";

  const contactHours =
    footerData?.FooterContactHours || "09:00–19:00";

  const policiesTitle =
    footerData?.FooterPoliciesTitle || "Policies";

  const privacyPolicyText =
    footerData?.FooterPrivacyPolicy || "Privacy Policy";

  const shippingDeliveryText =
    footerData?.FooterShippingDelivery || "Shipping & Delivery";

  const logoUrlFromStrapi =
    theme === "dark"
      ? footerData?.LogoDarkTheme?.data?.attributes?.url
      : footerData?.LogoLightTheme?.data?.attributes?.url;

  const logoSrc = logoUrlFromStrapi
    ? `${
        process.env.NEXT_PUBLIC_STRAPI_URL ||
        "http://localhost:1337"
      }${logoUrlFromStrapi}`
    : styles.logo;

  return (
    <footer
      className={`${roboto.className} ${styles.background} ${styles.text} relative z-[100] isolate min-h-[480px] w-full overflow-hidden px-[clamp(32px,8vw,150px)] py-[clamp(56px,8vh,90px)] max-[700px]:min-h-[430px] max-[700px]:px-6 max-[700px]:py-10`}
    >
      <p
        aria-hidden="true"
        style={{
          WebkitTextStroke:
            theme === "light"
              ? "2px #fffcf9"
              : "2px #12120E",
        }}
        className={`${styles.watermark} pointer-events-none absolute left-[52%] top-[47%] z-0 m-0 origin-center -translate-x-1/2 -translate-y-1/2 scale-x-[0.88] whitespace-nowrap font-['Perandory',Georgia,serif] text-[clamp(17rem,25vw,26rem)] font-normal leading-[0.8] tracking-[0.015em] antialiased max-[1599px]:left-[51%] max-[1599px]:scale-x-[0.84] max-[1599px]:text-[clamp(16rem,27vw,24rem)] max-[1100px]:left-1/2 max-[1100px]:scale-x-[0.8] max-[1100px]:text-[clamp(14rem,30vw,21rem)] max-[700px]:top-[64%] max-[700px]:scale-x-[0.62] max-[700px]:text-[clamp(10rem,45vw,13rem)] max-[380px]:scale-x-[0.57] max-[380px]:text-[9.5rem]`}
      >
        Henry’s
      </p>

      <div className="pointer-events-auto relative z-20 mx-auto grid min-h-[320px] w-full max-w-[1440px] grid-cols-[1fr_auto] items-center gap-[clamp(50px,8vw,150px)] max-[700px]:grid-cols-1 max-[700px]:items-start max-[700px]:gap-10">
        <div className="flex min-w-0 translate-x-[25px] translate-y-[18px] self-center flex-col items-start gap-[45px] min-[1600px]:translate-x-0 min-[1600px]:translate-y-[20px] max-[1100px]:translate-x-[15px] max-[700px]:w-full max-[700px]:translate-x-0 max-[700px]:translate-y-0 max-[700px]:flex-row max-[700px]:items-center max-[700px]:justify-between max-[700px]:gap-6">
          <Image
            src={logoSrc}
            alt="Henry's"
            width={98.53448486328125}
            height={127}
            className="h-[127px] w-[98.534px] shrink-0 object-contain max-[1100px]:h-[118px] max-[1100px]:w-[91.6px] max-[700px]:h-[105px] max-[700px]:w-[81.5px]"
          />

          <div className="pointer-events-auto relative z-50 flex items-center gap-5">
            <a
              href="https://www.instagram.com/henrys_drink/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Henry's on Instagram"
              className="relative z-50 inline-flex size-9 cursor-pointer items-center justify-center transition duration-150 hover:-translate-y-0.5 hover:opacity-70 active:scale-95"
            >
              <Image
                src="/instagram.svg"
                alt=""
                width={25}
                height={25}
                className={`pointer-events-none size-[25px] object-contain ${styles.socialIcons}`}
              />
            </a>

            <a
              href="https://www.linkedin.com/company/henrysdrink/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Henry's on LinkedIn"
              className="relative z-50 inline-flex size-9 cursor-pointer items-center justify-center transition duration-150 hover:-translate-y-0.5 hover:opacity-70 active:scale-95"
            >
              <Image
                src="/linkedin.svg"
                alt=""
                width={25}
                height={25}
                className={`pointer-events-none size-[25px] object-contain ${styles.socialIcons}`}
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-[clamp(55px,7vw,120px)] max-[900px]:gap-10 max-[700px]:grid-cols-2 max-[700px]:gap-5">
          <div className="flex min-w-[210px] flex-col items-start gap-5 max-[700px]:min-w-0 max-[700px]:gap-4">
            <h2 className="m-0 text-[18px] font-bold leading-none max-[700px]:text-[16px]">
              <Link
                href={`/${locale || "en"}/contact`}
                className="transition-opacity duration-150 hover:opacity-65"
              >
                {contactTitle}
              </Link>
            </h2>

            <div className="flex min-w-0 flex-col gap-4 text-[16px] font-normal leading-[1.25] max-[700px]:gap-3 max-[700px]:text-[14px]">
              <a
                href={`mailto:${contactEmail}`}
                className="break-all transition-opacity duration-150 hover:opacity-65"
              >
                {contactEmail}
              </a>

              <p className="m-0 uppercase">
                {contactDays}
              </p>

              <p className="m-0">
                {contactHours}
              </p>
            </div>
          </div>

          <nav
            className="flex min-w-[180px] flex-col items-start gap-5 max-[700px]:min-w-0 max-[700px]:gap-4"
            aria-label="Footer policies"
          >
            <h2 className="m-0 text-[18px] font-bold uppercase leading-none max-[700px]:text-[16px]">
              {policiesTitle}
            </h2>

            <div className="flex flex-col gap-4 text-[16px] font-normal leading-[1.25] max-[700px]:gap-3 max-[700px]:text-[14px]">
              <Link
                href={
                  privacyHref !== "#"
                    ? privacyHref
                    : `/${locale || "en"}/privacy-policy`
                }
                className="w-fit underline-offset-4 transition-opacity duration-150 hover:underline hover:opacity-65 active:opacity-50"
              >
                {privacyPolicyText}
              </Link>

              <Link
                href={
                  shippingHref !== "#"
                    ? shippingHref
                    : `/${locale || "en"}/shipping-policy`
                }
                className="w-fit underline-offset-4 transition-opacity duration-150 hover:underline hover:opacity-65 active:opacity-50"
              >
                {shippingDeliveryText}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
