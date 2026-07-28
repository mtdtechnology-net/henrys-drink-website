import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Pinyon_Script, Comfortaa } from "next/font/google";
import localFont from "next/font/local";

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

const comfortaa = Comfortaa({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

const interDisplay = localFont({
  src: [
    {
      path: "../fonts/Font - Inter Display/InterDisplay-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Font - Inter Display/InterDisplay-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/Font - Inter Display/InterDisplay-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/Font - Inter Display/InterDisplay-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-inter-display",
});

const futuraPt = localFont({
  src: [
    { path: "../fonts/futura-pt/FuturaCyrillicBook.ttf", weight: "400" },
    { path: "../fonts/futura-pt/FuturaCyrillicMedium.ttf", weight: "500" },
    { path: "../fonts/futura-pt/FuturaCyrillicBold.ttf", weight: "700" },
  ],
  variable: "--font-futura",
});

const perandory = localFont({
  src: "../fonts/PerandorySemiCondensed.otf",
  variable: "--font-perandory",
});

export const metadata: Metadata = {
  title: "Henry's Nightlife",
  description: "When the night comes alive",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html
      lang="en"
      className={` ${pinyonScript.variable} ${comfortaa.variable} ${perandory.variable} ${futuraPt.variable} ${interDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
<<<<<<< HEAD
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar locale={locale} itemCount={1} mode="blue" />
=======
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar
            tabs={tabs}
            signatureUrl={signatureUrl}
            shopIconUrl={shopIconUrl}
            itemCount={3}
            locale={locale}
          />
>>>>>>> 934fddd (feat: create first page)
        </div>
        {children}
      </body>
    </html>
  );
}
