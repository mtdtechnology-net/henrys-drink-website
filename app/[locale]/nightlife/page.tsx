import Section1 from "@/components/nightlife/section1";
import Section2 from "@/components/nightlife/section2";
import Section3 from "@/components/nightlife/section3";
import Section4 from "@/components/nightlife/section4";
import Section5 from "@/components/nightlife/section5";


export default function NightlifePage() {
  return (
    
    <main className="w-full bg-black text-white relative">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  );
}
