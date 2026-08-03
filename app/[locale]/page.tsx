import Image from "next/image";
import { InfoCard } from "@/components/common/InfoCard";
import { HoverVideo } from "@/components/video/HoverVideo";

export default function Home() {
  const sharedCardClasses = `
    absolute z-20 pointer-events-none
    
  bottom-[20%] max-h-[600px]:bottom-[5%] w-[85%] max-w-[340px] min-h-[20vh] h-auto aspect-auto overflow-visible
  sm:bottom-[5%] sm:w-[50%] sm:max-w-[360px] sm:h-auto sm:aspect-auto 
    
  md:bottom-[8%] md:w-[40vw] md:h-auto md:aspect-[4/3] md:max-w-none
  xl:bottom-[8%] xl:w-[40vw]
  2xl:bottom-[10%] 2xl:w-[38vw]
  `;

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">

      <div className="flex flex-col md:flex-row h-full w-full">

        <div className="relative h-[50vh] md:h-full w-full md:w-[50%] overflow-hidden">
          <HoverVideo
            src="/grandchildWalking.mp4"
            videoClassName="absolute inset-0 h-full w-full object-cover origin-center scale-[1.45] object-[45%_45%] -translate-y-[5%] -translate-x-[10%]"
          />

          <div className="pointer-events-none absolute inset-0 z-10 bg-black/30" />

          <InfoCard
            title="Bordeaux Heritage"
            description="The vineyard, the family, the craft."
            subtitle="by day"
            ctaText="Discover the story"
            href="/bordeaux"
            className={`left-[10%] ${sharedCardClasses}`}
          />
        </div>

        <div className="relative h-[50vh] md:h-full w-full md:w-[50%] overflow-hidden">
          <HoverVideo
            src="/parisianNight.mp4"
            videoClassName="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-0 z-10 bg-black/30" />

          <InfoCard
            align="right"
            title="Parisian Nights"
            description="Cocktails, atmosphere, and connection."
            subtitle="by night"
            ctaText="Discover the experience"
            href="/parisian"
            className={`right-[10%] ${sharedCardClasses}`}
          />
        </div>

      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 z-15 h 32 w-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center md:hidden bg-gradient-to-b from-transparent via-black/75 to-transparent">
        <Image
          src="/darkBlur.svg"
          alt=""
          width={500}
          height={300}
          className="w-full h-full object-cover brightness-0 scale-125 blur-xl"
          priority
        />
      </div>
    </main>
  );
}