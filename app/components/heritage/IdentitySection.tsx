import Image from "next/image";

export function IdentitySection() {
  return (
    <section
      className="relative min-h-screen min-h-[100svh] overflow-hidden bg-[#fffcf9] max-[768px]:min-h-[900px] max-[480px]:min-h-[880px] [@media(min-width:769px)_and_(max-height:1000px)]:h-auto [@media(min-width:769px)_and_(max-height:1000px)]:min-h-screen [@media(min-width:769px)_and_(max-height:1000px)]:overflow-visible [@media(min-width:769px)_and_(max-height:1000px)]:pb-24 [@media(min-width:769px)_and_(max-height:1000px)]:pt-16"
      aria-labelledby="identity-title"
    >
      <div className="absolute left-0 top-[17%] z-[1] h-[74%] w-full overflow-hidden rounded-t-[100%] after:absolute after:inset-0 after:bg-[rgba(255,252,249,0.24)] after:content-[''] max-[768px]:left-[-40%] max-[768px]:top-[25%] max-[768px]:h-[82%] max-[768px]:w-[150%] [@media(min-width:769px)_and_(max-height:1000px)]:!inset-x-0 [@media(min-width:769px)_and_(max-height:1000px)]:!bottom-0 [@media(min-width:769px)_and_(max-height:1000px)]:!top-auto [@media(min-width:769px)_and_(max-height:1000px)]:!h-[92%] [@media(min-width:769px)_and_(max-height:1000px)]:!w-full [@media(min-width:769px)_and_(max-height:1000px)]:!overflow-hidden [@media(min-width:769px)_and_(max-height:1000px)]:!rounded-t-[60vw]">
        <Image
          className="object-cover object-[center_48%] opacity-[0.42] grayscale max-[768px]:object-center"
          src="/wine.svg"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-[3] box-border min-h-screen min-h-[100svh] w-full px-[6vw] pb-12 pt-[clamp(4rem,8vh,6rem)] max-[1200px]:px-[5vw] max-[768px]:min-h-[900px] max-[768px]:px-5 max-[768px]:pb-12 max-[768px]:pt-20 max-[480px]:min-h-[880px] [@media(min-width:769px)_and_(max-height:1000px)]:!gap-6">
        <h2
          id="identity-title"
          className="m-0 origin-left scale-x-[0.87] whitespace-nowrap font-['Perandory',Georgia,serif] text-[clamp(2.7rem,3.25vw,4rem)] font-normal leading-none text-[#325175] [font-stretch:semi-condensed] max-[1200px]:text-[clamp(2.5rem,4vw,3.4rem)] max-[1024px]:text-[clamp(2.5rem,5vw,3.25rem)] max-[768px]:max-w-[calc(100%-4rem)] max-[768px]:whitespace-normal max-[768px]:text-[clamp(2.2rem,9vw,3rem)] max-[480px]:max-w-[280px] max-[480px]:text-[2rem]"
        >
          HENRY&apos;S IDENTITY
        </h2>

        <p className="mb-0 mt-[clamp(1.2rem,2vh,1.6rem)] font-['Comfortaa',sans-serif] text-[clamp(1.15rem,1.45vw,1.75rem)] leading-[1.2] text-[#325175] max-[1200px]:text-[clamp(1.05rem,1.8vw,1.4rem)] max-[1024px]:text-[clamp(1.05rem,2vw,1.3rem)] max-[768px]:max-w-[calc(100%-5rem)] max-[768px]:text-base">
          A family tradition reimagined.
        </p>

        <div className="mt-[clamp(2.5rem,5vh,4rem)] flex w-[39vw] flex-col gap-[clamp(1.8rem,4vh,3rem)] font-['Comfortaa',sans-serif] text-[clamp(1rem,1.08vw,1.3rem)] leading-[1.35] text-[#171717] [&_p]:m-0 max-[1200px]:w-[46vw] max-[1200px]:text-[clamp(0.95rem,1.35vw,1.1rem)] max-[1024px]:w-[49vw] max-[1024px]:gap-[1.8rem] max-[1024px]:text-[clamp(0.95rem,1.6vw,1.1rem)] max-[768px]:mt-10 max-[768px]:w-[72%] max-[768px]:gap-6 max-[768px]:text-[0.9rem] max-[480px]:w-[76%] max-[480px]:text-[0.82rem]">
          <p>
            Built around carefully selected Bordeaux wine, it combines rich
            walnut notes, delicate elderflower aromas, and carefully balanced
            spirits to create a unique and elegant taste.
          </p>

          <p>
            At the heart of Henry&apos;s is a recipe inspired by a traditional
            Bordeaux apéritif passed down through generations.
          </p>

          <p>
            Every ingredient plays a role.
            <br />
            The wine provides depth and structure, the walnut brings warmth and
            character, while the elderflower adds a lighter, more floral
            dimension.
          </p>

          <p className="w-[min(31vw,520px)] text-[clamp(1.6rem,2.15vw,2.5rem)] leading-[1.08] max-[1024px]:w-[38vw] max-[1024px]:text-[clamp(1.4rem,2.7vw,1.8rem)] max-[768px]:w-full max-[768px]:max-w-[280px] max-[768px]:text-[1.4rem]">
            The result is a drink that feels both timeless and contemporary.
          </p>

          <a
            className="w-fit font-['Comfortaa',sans-serif] text-[clamp(1.05rem,1.25vw,1.4rem)] text-[#95000d] underline-offset-4 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#95000d] max-[768px]:text-base"
            href="#heritage-details"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
}
