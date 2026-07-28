import { FamilyStorySection } from "../components/heritage/FamilyStorySection";
import { FloatingBottle } from "../components/heritage/FloatingBottle";
import { HeritageHero } from "../components/heritage/HeritageHero";
import { IdentitySection } from "../components/heritage/IdentitySection";
import { CraftedSection } from "../components/heritage/CraftedSection";
import { NightSection } from "../components/heritage/NightSection";
import { MoreThanADrinkSection } from "../components/heritage/MoreThanADrinkSection";

export default function HeritagePage() {
  return (
    <main className="w-full overflow-x-clip bg-[#fffcf9]">
      <HeritageHero />

      <div className="relative">
        <FamilyStorySection />
        <IdentitySection />
        <FloatingBottle />
        <CraftedSection />
        <MoreThanADrinkSection />
        <NightSection />
      </div>
    </main>
  );
}