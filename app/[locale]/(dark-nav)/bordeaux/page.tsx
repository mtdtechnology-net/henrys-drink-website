"use client";

import { InfoCard } from "@/components/common/InfoCard";
import { Navbar } from "@/components/navbar/Navbar";
import { HoverVideo } from "@/components/video/HoverVideo";
import { use } from "react";

export default function BordeauxPage() {
    return (
    <main className="relative min-h-screen min-h-[100svh] w-full overflow-hidden">

      <div className="absolute inset-0">
        <HoverVideo
          src="/grandchildWalking.mp4"
          videoClassName="absolute inset-0 h-full w-full origin-center scale-[1.45]
                     object-cover object-[45%_45%] max-[768px]:scale-[1.45] max-[768px]:object-center -translate-y-[8%]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/30" />
      <InfoCard
        title="Bordeaux Heritage"
        description="The vineyard, the family, the craft."
        subtitle="by day"
        ctaText="Discover the story"
        href="/heritage"
        className="absolute bottom-[10%] left-[7%] z-10 aspect-[536/467] w-[38vw] h-[60vh] sm:w-[35vw] md:w-[40vw] xl:w-[38vw] 2xl:w-[40vw]"
      />
    </main>
  );
}
