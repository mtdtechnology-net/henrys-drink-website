"use client";

import { useState } from "react";
import { NavbarTextItem } from "./NavTextItem";
import { NavShopIcon } from "./NavShopIcon";
import { LanguageSwitcher } from "./LanguageSwitcher";

const BASE_NAV_STYLE =
  "italic font-normal transition-all duration-200 ease-in-out font-['Inter_Variable',_sans-serif] whitespace-nowrap text-[clamp(0.7rem,1.1vw,1.125rem)]";

interface MobileMenuProps {
  tabs: { text: string; href: string }[];
  locale: string;
  textColor: string;
  shopIconUrl: string;
  itemCount: number;
}

export const MobileMenu = ({
  tabs,
  locale,
  textColor,
  shopIconUrl,
  itemCount,
}: MobileMenuProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className={`flex h-10 w-10 items-center justify-center rounded-full border ${
          textColor === "text-white" ? "border-white" : "border-[#442F0E]"
        }`}
      >
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          className={textColor}
        >
          {isMobileMenuOpen ? (
            <>
              <line
                x1="1"
                y1="1"
                x2="17"
                y2="13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="17"
                y1="1"
                x2="1"
                y2="13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              <line
                x1="0"
                y1="1"
                x2="18"
                y2="1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="0"
                y1="7"
                x2="18"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="0"
                y1="13"
                x2="18"
                y2="13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "rgba(243, 243, 243, 0.8)",
            backdropFilter: "blur(10px)",
          }}
          className="lg:hidden absolute inset-x-0 top-full px-5 py-6"
        >
          <div className="flex flex-col gap-5">
            {tabs.map((tab) => (
              <NavbarTextItem
                key={tab.text}
                text={tab.text}
                href={`/${locale}${tab.href}`}
                textColor="text-black"
                className={`${BASE_NAV_STYLE} text-black text-lg`}
              />
            ))}

            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <NavShopIcon iconUrl={shopIconUrl} itemCount={itemCount} />
              <LanguageSwitcher
                currentLocale={locale}
                textColor="text-black"
                className={`${BASE_NAV_STYLE} text-black`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
