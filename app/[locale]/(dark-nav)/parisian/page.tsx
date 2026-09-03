"use client";

import Image from "next/image";
import { InfoCard } from "@/components/common/InfoCard";
import { HoverVideo } from "@/components/video/HoverVideo";
import { Navbar } from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getParisianNightPage } from "@/lib/strapi";

export default function ParisianPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadText() {
      try {
        const strapiData = await getParisianNightPage(locale);
        setData(strapiData);
      } catch (err) {
        console.error("Failed to load Strapi text for Parisian Night:", err);
      }
    }
    loadText();
  }, [locale]);

  return (
    <main className="relative min-h-screen min-h-[100svh] w-full overflow-hidden bg-[#110202]">
      <div className="absolute inset-0 z-10">
        <HoverVideo
          src="/parisianNight.mp4"
          videoClassName="h-full w-full object-center scale-[1.9] -translate-y-[10%] -translate-x-[2%]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 bg-black/30" />

      <InfoCard
        align="right"
        title={data?.ParisianTitle || "Parisian Night"}
        description={data?.ParisianDescription || "Cocktails, atmosphere, and connection."}
        subtitle={undefined}
        ctaText={data?.ParisianTextButton || "Discover the experience"}
        href={`/${locale}/nightlife`}
        textClassName="text-[20px] text-white/90"
        className="absolute bottom-[5%] left-[20%] z-30 aspect-[453/497] w-[38vw] h-[60vh] sm:w-[35vw] md:w-[40vw] xl:w-[30vw] 2xl:w-[31çvw]"
      />

      <div className="pointer-events-none absolute top-0 left-0 z-20 h-screen w-[24%] overflow-hidden">
        <Image
          src="/leftBlurParisian.svg"
          alt="Parisian blur overlay"
          fill
          priority
          className="object-cover object-left-top"
        />
      </div>

      <div className="pointer-events-none absolute top-0 right-0 z-20 h-screen w-[30%] overflow-hidden">
        <Image
          src="/rightBlurParisian.svg"
          alt="Parisian blur overlay"
          fill
          priority
          className="object-cover object-left-top"
        />
      </div>
    </main>
  );
}