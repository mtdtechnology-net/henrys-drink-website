import { getHeritagePage } from "@/lib/strapi";
import { FamilyStorySection } from "../../../../components/heritage/FamilyStorySection";
import { FloatingBottle } from "../../../../components/heritage/FloatingBottle";
import { HeritageHero } from "../../../../components/heritage/HeritageHero";
import { IdentitySection } from "../../../../components/heritage/IdentitySection";
import { CraftedSection } from "../../../../components/heritage/CraftedSection";
import { NightSection } from "../../../../components/heritage/NightSection";
import { MoreThanADrinkSection } from "../../../../components/heritage/MoreThanADrinkSection";

interface PageProps {
  params: Promise<{ locale: string }> | { locale: string };
}

export default async function HeritagePage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  
  const rawData = await getHeritagePage(locale);
  
  const data = rawData?.attributes || rawData;

  console.log("Strapi Heritage Data:", data);

  return (
    <main className="relative left-1/2 w-[100dvw] max-w-none -translate-x-1/2 overflow-x-clip bg-[#fffcf9]">
      <HeritageHero data={data} />

      <div className="relative">
        <FamilyStorySection data={data} />
        <div className="relative overflow-visible [clip-path:inset(-100vh_0_0_0)]">
          <IdentitySection data={data} />
          <FloatingBottle />
        </div>
        <CraftedSection data={data} />
        <MoreThanADrinkSection data={data} />
        <NightSection data={data} />
      </div>
    </main>
  );
}