import { NavbarTextItem } from "./NavTextItem";
import { NavLogo } from "./NavLogo";
import { NavShopIcon } from "./NavShopIcon";
import { LanguageSwitcher } from "@/components/navbar/LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { NavBackground } from "./NavBackground";

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

const tabs = [
  { text: "Our Story", href: "/heritage" },
  { text: "French Vermouth", href: "/product" },
  { text: "Cocktails", href: "/nightlife" },
  { text: "Contact", href: "/contact" }
];


export const Navbar = ({ itemCount, theme: mode = "light", locale, background_theme: background_mode = "dark" }: NavbarProps) => {

  const leftTabs = tabs.slice(0, 2);
  const rightTabs = tabs.slice(2);

  const { textColor, shopIconUrl, signatureUrl } =
    MODE_STYLES[mode] ?? MODE_STYLES.light;
  const navTextStyle = `${BASE_NAV_STYLE} ${textColor}`;

  return (
    <header className="fixed inset-x-0 z-50 py-3 sm:py-5">

      <NavBackground mode = {background_mode}></NavBackground>

      <nav className="relative flex w-full items-center justify-between bg-transparent px-5 sm:px-8 md:px-12 lg:px-[80px]">
        <div className="hidden lg:flex flex-1 items-center justify-start gap-3 sm:gap-5 md:gap-8 lg:gap-[110px] pr-2">
          {leftTabs.map((tab) => (
            <NavbarTextItem
              key={tab.text}
              text={tab.text}
              href={`/${locale}${tab.href}`}
              textColor={textColor}
              className={navTextStyle}
            />
          ))}
        </div>

        <div className="hidden lg:flex items-center justify-center shrink-0">
          <NavLogo signatureUrl={signatureUrl} href={`/${locale}`} />
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-5 sm:gap-8 md:gap-12 lg:gap-[110px] pl-2">
          {rightTabs.map((tab) => (
            <NavbarTextItem
              key={tab.text}
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

        {/* Mobile navbar — Logo is server-rendered, menu toggle is a Client Component */}
        <div className="flex lg:hidden w-full items-center justify-between">
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
