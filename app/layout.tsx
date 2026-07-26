import type { Metadata } from "next";
import { Geist, Geist_Mono, Pinyon_Script, Didact_Gothic } from "next/font/google";
import { Playfair_Display } from 'next/font/google'
import { Comfortaa } from 'next/font/google'
import "./globals.css";

const pinyonScript = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pinyon',
});

const didactGothic = Didact_Gothic({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-didact',
});

const perandoryFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-perandory',
});

const comfortaaFont = Comfortaa({
  subsets: ['latin'],
  weight: ['500'], 
  variable: '--font-comfortaa',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henry's Nightlife",
  description: "When the night comes alive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pinyonScript.variable} ${didactGothic.variable} ${perandoryFont.variable} ${comfortaaFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}