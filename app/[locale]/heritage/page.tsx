import { FamilyStorySection } from "../../../components/heritage/FamilyStorySection";
import { FloatingBottle } from "../../../components/heritage/FloatingBottle";
import { HeritageHero } from "../../../components/heritage/HeritageHero";
import { IdentitySection } from "../../../components/heritage/IdentitySection";
import { CraftedSection } from "../../../components/heritage/CraftedSection";
import { NightSection } from "../../../components/heritage/NightSection";
import { MoreThanADrinkSection } from "../../../components/heritage/MoreThanADrinkSection";

export default function HeritagePage() {
  return (
    <main className="relative left-1/2 w-[100dvw] max-w-none -translate-x-1/2 overflow-x-clip bg-[#fffcf9]">
      <HeritageHero />

      <div className="relative">
        <FamilyStorySection />
        <div className="relative overflow-visible [clip-path:inset(-100vh_0_0_0)]">
          <IdentitySection />
          <FloatingBottle />
        </div>
        <CraftedSection />
        <MoreThanADrinkSection />
        <NightSection />
      </div>
    </main>
    
  );
}
