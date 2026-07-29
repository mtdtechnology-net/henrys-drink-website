import { NavbarTextItem } from "./NavTextItem";
import { NavLogo } from "./NavLogo";
import { NavShopIcon } from "./NavShopIcon";
import { LanguageSwitcher } from "@/components/navbar/LanguageSwitcher";

type NavbarMode = 'blue' | 'white' | 'brown';

const BASE_NAV_STYLE = "italic font-normal transition-all duration-200 ease-in-out font-['Inter_Variable',_sans-serif] whitespace-nowrap text-[clamp(0.7rem,1.1vw,1.125rem)]";

interface StyleConfig {
  textColor: string;
  shopIconUrl: string;
  signatureUrl: string;
}

const MODE_STYLES: Record<NavbarMode, StyleConfig> = {
  blue: {
    textColor: "text-[#442F0E]",
    shopIconUrl: "/shopIconRed.svg",
    signatureUrl: "/blueSignature.svg"
  },
  white: {
    textColor: "text-white",
    shopIconUrl: "/shopIconWhite.svg",
    signatureUrl: "/whiteSignature.svg"
  },
  brown: {
    textColor: "text-white",
    shopIconUrl: "/shopIconWhite.svg",
    signatureUrl: "/brownSignature.svg"
  }
};

interface NavbarProps {
  itemCount: number;
  mode?: NavbarMode;
  locale: string;
}

const tabs = [
  { text: "Our Story", href: "/heritage" },
  { text: "French Vermouth", href: "/product" },
  { text: "Cocktails", href: "/nightlife" },
  { text: "Contact", href: "/contact" },
];

export const Navbar = ({
  itemCount,
  mode = "blue",
  locale,
}: NavbarProps) => {

  const leftTabs = tabs.slice(0, 3);
  const rightTabs = tabs.slice(3);

  const { textColor, shopIconUrl, signatureUrl } = MODE_STYLES[mode] ?? MODE_STYLES.blue;
  const navTextStyle = `${BASE_NAV_STYLE} ${textColor}`;

  return (
    <header className="fixed inset-x-0 z-50 py-3 sm:py-5">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_50%,transparent_97%)] pointer-events-none" />

      <nav className="relative flex w-full items-center justify-between bg-transparent px-[clamp(0.75rem,3vw,5rem)]">

        <div className="flex flex-1 items-center justify-start gap-3 sm:gap-5 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-38 pr-2">
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

        <div className="flex items-center justify-center shrink-0">
          <NavLogo signatureUrl={signatureUrl} href={`/${locale}`} />
        </div>

        <div className="flex flex-1 items-center justify-end gap-5 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-32 2xl:gap-48 pl-2">          
          {rightTabs.map((tab) => (
            <NavbarTextItem
              key={tab.text}
              text={tab.text}
              href={`/${locale}${tab.href}`}
              textColor={textColor}
              className={navTextStyle}
            />
          ))}

          <NavShopIcon iconUrl={shopIconUrl} itemCount={itemCount} />

          <LanguageSwitcher currentLocale={locale} textColor={textColor} className={navTextStyle} />
        </div>

      </nav>
    </header>
  );
};