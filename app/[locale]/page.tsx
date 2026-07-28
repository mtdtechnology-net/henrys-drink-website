import { InfoCard } from "@/components/common/InfoCard";
import { Navbar } from "@/components/navbar/Navbar";
import { HoverVideo } from "@/components/video/HoverVideo";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">

      <div className="absolute top-0 left-0 h-screen w-[50%] overflow-hidden">
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
          className="absolute bottom-[4%] left-[10%] z-20 aspect-[536/467] w-[38vw] h-[60vh] sm:w-[35vw] md:w-[40vw] xl:w-[38vw] 2xl:w-[40vw]"
        />
      </div>

      <div className="absolute top-0 right-0 h-screen w-[50%] overflow-hidden">
        <div className="absolute inset-0 z-10">
          <HoverVideo
            src="/parisianNight.mp4"
            videoClassName="h-full w-full object-cover object-center"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 bg-black/30" />

        <InfoCard
          align="right"
          title="Parisian Night"
          description="Cocktails, atmosphere, and connection."
          subtitle="by night"
          ctaText="Discover the experience"
          href="/bordeaux"
          textClassName="text-[20px] text-white/90"
          className="absolute bottom-[4%] right-[10%] z-30 aspect-[453/497] w-[38vw] h-[60vh] sm:w-[35vw] md:w-[40vw] xl:w-[30vw] 2xl:w-[31vw]"
        />
      </div>

    </main>
  );
}