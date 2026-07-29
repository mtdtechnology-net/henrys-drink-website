import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type FooterTheme = "light" | "dark";

type FooterProps = {
  theme?: FooterTheme;
  privacyHref?: string;
  shippingHref?: string;
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
}: FooterProps) {
  const styles = footerThemes[theme];

  return (
    <footer
      className={`${roboto.className} ${styles.background} ${styles.text} relative z-[100] isolate min-h-[480px] w-full overflow-hidden px-[clamp(32px,8vw,150px)] py-[clamp(56px,8vh,90px)]`}
    >
      {/* Background watermark */}
      <p
  aria-hidden="true"
  style={{
    WebkitTextStroke:
      theme === "light" ? "1.2px #fffcf9" : "1.2px #12120E",
  }}
  className={`${styles.watermark} pointer-events-none absolute scale-x-[1.28] left-1/2 top-[42%] z-0 m-0 origin-center -translate-x-1/2 -translate-y-1/2 scale-x-[0.72] whitespace-nowrap font-['Perandory',Georgia,serif] text-[clamp(14rem,23vw,31rem)] font-thin leading-[0.8] antialiased max-[900px]:top-1/2 max-[900px]:text-[16rem] max-[700px]:text-[14rem]`}
>
  Henry’s
</p>

<div className="pointer-events-auto relative z-20 mx-auto grid min-h-[320px] w-full max-w-[1440px] grid-cols-[minmax(160px,1fr)_auto_auto] items-center gap-[clamp(40px,7vw,130px)] max-[1100px]:grid-cols-[minmax(150px,1fr)_1fr] max-[1100px]:items-start max-[1100px]:gap-x-10 max-[700px]:grid-cols-1 max-[700px]:gap-12">        {/* Brand and social media */}
       <div className="flex h-full min-w-0 flex-col items-start justify-between gap-16 max-[1100px]:gap-12">
  <Image
    src={styles.logo}
    alt="Henry's"
    width={170}
    height={190}
className="relative left-0 top-4 h-auto w-[145px] object-contain min-[701px]:top-0 min-[701px]:w-[150px] min-[1101px]:left-0 min-[1101px]:top-5 min-[1101px]:w-[165px] min-[1600px]:left-[-100px] min-[1850px]:left-[-200px]"  />

          <div className="pointer-events-auto relative z-50 flex left-0 items-center gap-5 max-[700px]:mt-3 min-[1600px]:left-[-100px] min-[1850px]:left-[-200px]">
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

        {/* Contact details */}
        <div className="flex flex-col items-start gap-5 self-center max-[640px]:self-auto">
          <h2 className="m-0 text-[18px] font-bold leading-none">Contact</h2>

          <div className="flex flex-col gap-4 text-[16px] font-normal leading-[1.25]">
            <a
              href="mailto:contact@henrysdrink.com"
              className="transition-opacity duration-150 hover:opacity-65"
            >
              contact@henrysdrink.com
            </a>

            <p className="m-0 uppercase">Monday–Friday</p>
            <p className="m-0">09:00–19:00</p>
          </div>
        </div>

        {/* Policies */}
        <nav
          className="flex flex-col items-start gap-5 self-center max-[900px]:col-start-2 max-[640px]:col-start-auto max-[640px]:self-auto"
          aria-label="Footer policies"
        >
          <h2 className="m-0 text-[18px] font-bold uppercase leading-none">
            Policies
          </h2>

          <div className="flex flex-col gap-4 text-[16px] font-normal leading-[1.25]">
            <Link
              href={privacyHref}
              className="w-fit underline-offset-4 transition-opacity duration-150 hover:underline hover:opacity-65 active:opacity-50"
            >
              Privacy Policy
            </Link>

            <Link
              href={shippingHref}
              className="w-fit underline-offset-4 transition-opacity duration-150 hover:underline hover:opacity-65 active:opacity-50"
            >
              Shipping &amp; Delivery
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;