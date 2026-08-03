import Image from "next/image";

export function HeritageHero() {
  return (
    <section
      className="relative grid min-h-screen min-h-[100svh] place-items-start justify-items-center overflow-hidden bg-[#fffcf9] text-center after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[2] after:h-[clamp(180px,26vh,300px)] after:bg-[linear-gradient(to_bottom,rgba(255,252,249,0)_0%,rgba(255,252,249,0.45)_38%,rgba(255,252,249,0.88)_72%,#fffcf9_100%)] after:content-['']"
      aria-labelledby="heritage-title"
    >
      <Image
        src="/house-light.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="z-[1] object-cover object-center"
      />

      {/* Tint overlay (was baked into the bg gradient before) */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(255,252,249,0.16),rgba(255,252,249,0.34))]" />

      <div className="relative z-[3] mx-auto flex min-h-screen min-h-[100svh] w-full max-w-[1800px] flex-col items-center px-[clamp(20px,5vw,80px)] pb-[clamp(5rem,9vh,8rem)] pt-[clamp(10rem,18vh,15rem)] max-[768px]:px-5 max-[768px]:pb-16 max-[768px]:pt-[clamp(8rem,17vh,11rem)]">
        <h1
          id="heritage-title"
          className="m-0 whitespace-nowrap text-center font-['Perandory',Georgia,serif] text-[clamp(42px,7.78vw,112px)] font-normal leading-[1] tracking-[0] text-[#325175] [font-stretch:semi-condensed] max-[768px]:max-w-full max-[768px]:whitespace-normal max-[768px]:text-[clamp(42px,10vw,72px)] max-[768px]:leading-[0.95]"
        >
          WHERE THE STORY BEGINS
        </h1>

        <p className="mb-0 mt-[clamp(18px,2vh,28px)] w-[clamp(300px,38.13vw,650px)] max-w-full text-center font-['Comfortaa',sans-serif] text-[clamp(16px,1.53vw,26px)] font-medium leading-[1.25] text-[#442f0e] max-[768px]:w-full max-[768px]:max-w-[550px] max-[768px]:text-[clamp(16px,4vw,18px)]">
          From the vineyards of Bordeaux to generations of tradition,
          Henry&apos;s is rooted in heritage, craftsmanship, and the art of
          taking time.
        </p>

        <a
          href="#family-story"
          className="mt-auto inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#325175] px-[clamp(24px,2vw,32px)] py-[clamp(12px,1vw,16px)] font-['Comfortaa',sans-serif] text-[clamp(0.85rem,1vw,1rem)] text-white no-underline transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#1c3858] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#95000d] motion-reduce:transition-none"
        >
          Discover the Legacy
        </a>
      </div>
    </section>
  );
}
