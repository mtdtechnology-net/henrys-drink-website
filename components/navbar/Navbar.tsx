"use client";

import { useEffect, useState } from "react";
import { NavbarTextItem } from "./NavTextItem";
import { NavLogo } from "./NavLogo";
import { NavShopIcon } from "./NavShopIcon";
import { LanguageSwitcher } from "@/components/navbar/LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { NavBackground } from "./NavBackground";
import { getGlobalData } from "@/lib/strapi";

export type NavbarTheme = "light" | "dark";

const BASE_NAV_STYLE =
  "italic font-medium transition-all duration-200 ease-in-out font-['Inter_Variable',_sans-serif] whitespace-nowrap text-[clamp(0.7rem,1.1vw,1.125rem)]";

interface StyleConfig {
  textColor: string;
  shopIconUrl: string;
  signatureUrl: string;
}

const MODE_STYLES: Record<NavbarTheme, StyleConfig> = {
  light: {
    textColor: "text-[#325175]",
    shopIconUrl: "/shopIconRed.svg",
    signatureUrl: "/blueSignature.svg",
  },
  dark: {
    textColor: "text-white",
    shopIconUrl: "/shopIconWhite.svg",
    signatureUrl: "/whiteSignature.svg",
  },
};

interface NavbarProps {
  itemCount: number;
  theme?: NavbarTheme;
  locale: string;
  background_theme?: NavbarTheme;
}

export const Navbar = ({
  itemCount,
  theme: mode = "light",
  locale,
  background_theme: background_mode = "dark",
}: NavbarProps) => {
  const [navData, setNavData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    async function loadNavbarData() {
      try {
        const res = await getGlobalData(locale);
        const attributes = res?.data?.attributes || res?.attributes || res;
        setNavData(attributes?.Navbar || attributes?.navbar || null);
      } catch (err) {
        console.error("Error fetching navbar data:", err);
      }
    }
    loadNavbarData();
  }, [locale]);

  const tabs = [
    { text: navData?.NavbarOurStory || "Our Story", href: "/heritage" },
    { text: navData?.NavbarFrenchVermouth || "French Vermouth", href: "/product" },
    { text: navData?.NavbarCocktails || "Cocktails", href: "/nightlife" },
    { text: navData?.NavbarContact || "Contact", href: "/contact" },
  ];

  const leftTabs = tabs.slice(0, 2);
  const rightTabs = tabs.slice(2);

  const { textColor, shopIconUrl, signatureUrl: defaultSignatureUrl } =
    MODE_STYLES[mode] ?? MODE_STYLES.light;

  const strapiLogoUrl =
    mode === "dark"
      ? navData?.LogoDarkTheme?.data?.attributes?.url
      : navData?.LogoLightTheme?.data?.attributes?.url;

  const signatureUrl = strapiLogoUrl
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${strapiLogoUrl}`
    : defaultSignatureUrl;

  const navTextStyle = `${BASE_NAV_STYLE} ${textColor}`;

  return (
    <header className="fixed inset-x-0 z-50 py-3 sm:py-5">
      <NavBackground mode={background_mode}></NavBackground>

      <nav className="relative flex w-full items-center justify-between bg-transparent px-5 sm:px-8 md:px-12 lg:px-[80px]">
        <div className="hidden flex-1 items-center justify-start gap-3 sm:gap-5 md:gap-8 lg:flex lg:gap-[110px] pr-2">
          {leftTabs.map((tab) => (
            <NavbarTextItem
              key={tab.href}
              text={tab.text}
              href={`/${locale}${tab.href}`}
              textColor={textColor}
              className={navTextStyle}
            />
          ))}
        </div>

        <div className="hidden shrink-0 items-center justify-center lg:flex">
          <NavLogo signatureUrl={signatureUrl} href={`/${locale}`} />
        </div>

        <div className="hidden flex-1 items-center justify-end gap-5 sm:gap-8 md:gap-12 lg:flex lg:gap-[110px] pl-2">
          {rightTabs.map((tab) => (
            <NavbarTextItem
              key={tab.href}
              text={tab.text}
              href={`/${locale}${tab.href}`}
              textColor={textColor}
              className={navTextStyle}
            />
          ))}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              width: "15%",
            }}
          >
            <NavShopIcon iconUrl={shopIconUrl} itemCount={itemCount} />

            <LanguageSwitcher
              currentLocale={locale}
              textColor={textColor}
              className={navTextStyle}
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-between lg:hidden">
          <NavLogo signatureUrl={signatureUrl} href={`/${locale}`} />

          <MobileMenu
            tabs={tabs}
            locale={locale}
            textColor={textColor}
            shopIconUrl={shopIconUrl}
            itemCount={itemCount}
          />
        </div>
      </nav>
    </header>
  );
};