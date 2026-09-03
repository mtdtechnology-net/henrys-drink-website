import { getNightlifePage } from "@/lib/strapi";
import Section1 from "@/components/nightlife/section1";
import Section2 from "@/components/nightlife/section2";
import Section3 from "@/components/nightlife/section3";
import Section4 from "@/components/nightlife/section4";
import Section5 from "@/components/nightlife/section5";

interface NightlifePageProps {
  params: Promise<{ locale: string }>;
}

export default async function NightlifePage({ params }: NightlifePageProps) {
  const { locale } = await params;
  const strapiData = await getNightlifePage(locale);

  return (
    <main className="w-full bg-black text-white relative">
      <Section1 data={strapiData?.nightcomesaliveSection} />
      <Section2 data={strapiData?.differentrhythmSection} />
      <Section3 data={strapiData?.cocktailsSection} />
      <Section4 data={strapiData?.sharedSection} />
      <Section5 data={strapiData?.meetthemanSection} />
    </main>
  );
}