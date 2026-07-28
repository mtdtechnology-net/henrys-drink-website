import Image from "next/image";

export function FamilyStorySection() {
  return (
    <section
      id="family-story"
      className="relative min-h-screen min-h-[100svh] overflow-hidden bg-[#282828] before:pointer-events-none before:absolute before:inset-x-0 before:top-[-80px] before:z-[1] before:h-[300px] before:scale-x-[1.04] before:bg-[linear-gradient(to_bottom,#fffcf9_0%,#fffcf9_30%,rgba(255,252,249,0.94)_43%,rgba(255,252,249,0.72)_58%,rgba(255,252,249,0.34)_76%,rgba(255,252,249,0)_100%)] before:blur-[18px] before:content-[''] max-[768px]:min-h-[100svh] max-[768px]:px-4 max-[768px]:pb-28 max-[768px]:pt-12 max-[480px]:pt-10"
      aria-labelledby="family-story-title"
    >
      <div className="absolute inset-0 z-0 bg-[url('/vines.svg')] bg-cover bg-center bg-no-repeat grayscale after:absolute after:inset-0 after:bg-black/[0.06] after:content-['']" />

      <div className="relative z-[2] mx-auto min-h-screen min-h-[100svh] w-full max-[768px]:flex max-[768px]:min-h-0 max-[768px]:flex-col max-[768px]:items-center">
        <Image
          className="absolute left-[max(5.34%,calc((100vw-1441px)/2+77px))] top-[22%] h-auto w-[clamp(260px,25.12%,362px)] object-contain [filter:drop-shadow(0_4px_15.7px_rgba(0,0,0,0.35))] max-[1200px]:left-[6%] max-[1200px]:top-[23%] max-[1200px]:w-[clamp(230px,28%,320px)] max-[1024px]:left-[3%] max-[1024px]:top-[21%] max-[1024px]:w-[clamp(220px,30%,300px)] max-[768px]:relative max-[768px]:left-auto max-[768px]:top-auto max-[768px]:z-[2] max-[768px]:mb-[-2.5rem] max-[768px]:ml-2 max-[768px]:mr-0 max-[768px]:mt-0 max-[768px]:w-[min(48vw,220px)] max-[768px]:max-w-none max-[768px]:self-start max-[480px]:mb-[-2rem] max-[480px]:w-[185px] [@media(min-width:769px)_and_(max-height:1000px)]:!left-[12%]"
          src="/logo-burgundy.svg"
          alt=""
          width={430}
          height={530}
          aria-hidden="true"
        />

        <article className="absolute right-[6%] top-[7%] z-[2] box-border flex h-auto w-[clamp(350px,33.4vw,565px)] flex-col overflow-hidden bg-[#fffcf9] px-[clamp(24px,2.36vw,40px)] py-[clamp(28px,2.95vw,50px)] text-[#493015] [container-type:inline-size] max-[1200px]:right-[5%] max-[1200px]:top-[8%] max-[1200px]:w-[clamp(350px,37vw,440px)] max-[1200px]:px-7 max-[1200px]:pb-9 max-[1200px]:pt-8 max-[1024px]:right-[4%] max-[1024px]:w-[clamp(340px,38vw,390px)] max-[1024px]:px-6 max-[1024px]:pb-8 max-[1024px]:pt-7 max-[768px]:relative max-[768px]:inset-auto max-[768px]:w-full max-[768px]:max-w-[430px] max-[768px]:px-6 max-[768px]:pb-10 max-[768px]:pt-8 max-[480px]:px-5 [@media(min-width:769px)_and_(max-height:1000px)]:right-[7%] [@media(min-width:769px)_and_(max-height:1000px)]:top-[12%] [@media(min-width:769px)_and_(max-height:1000px)]:w-[clamp(400px,28vw,500px)] [@media(min-width:769px)_and_(max-height:1000px)]:px-[30px] [@media(min-width:769px)_and_(max-height:1000px)]:pb-9 [@media(min-width:769px)_and_(max-height:1000px)]:pt-8">
          <h2
            id="family-story-title"
            className="relative z-[3] mb-8 mt-0 flex min-h-[68px] w-full origin-center scale-x-[0.82] items-center justify-center whitespace-nowrap text-center font-['Perandory',Georgia,serif] text-[clamp(1.75rem,2.2vw,2.5rem)] font-normal leading-none text-[#442f0e] [font-stretch:semi-condensed] max-[1200px]:text-[clamp(1.8rem,3vw,2.35rem)] max-[1024px]:text-[clamp(1.75rem,3.2vw,2.25rem)] max-[768px]:mb-7 max-[768px]:whitespace-normal max-[768px]:text-[clamp(2rem,9vw,2.7rem)] [@media(min-width:769px)_and_(max-height:1000px)]:mb-6 [@media(min-width:769px)_and_(max-height:1000px)]:min-h-[52px] [@media(min-width:769px)_and_(max-height:1000px)]:text-[clamp(1.75rem,2vw,2.2rem)]"
          >
            A FAMILY STORY
          </h2>

          <div className="relative z-[2] aspect-[1.07/1] w-full overflow-hidden">
            <Image
              className="object-cover object-center grayscale"
              src="/man.svg"
              alt="Henri, the grandfather who preserved the family recipe"
              fill
              sizes="(max-width: 768px) 80vw, 420px"
            />
          </div>

          <div className="static mt-4 min-h-[125px] max-[768px]:min-h-[120px] [@media(min-width:769px)_and_(max-height:1000px)]:mt-3 [@media(min-width:769px)_and_(max-height:1000px)]:min-h-0">
            <Image
              className="pointer-events-none !absolute !inset-auto !left-[-32px] !top-[420px] !z-10 !h-[333px] !w-[382px] object-contain opacity-95 [filter:brightness(0.7)_saturate(220%)_hue-rotate(-10deg)] max-[768px]:!left-[-93.5px] max-[768px]:!top-[208px] max-[768px]:!h-[321px] max-[768px]:!w-[362px] [@media(min-width:769px)_and_(max-height:1000px)]:!left-[-35px] [@media(min-width:769px)_and_(max-height:1000px)]:!top-[255px] [@media(min-width:769px)_and_(max-height:1000px)]:!h-[266px] [@media(min-width:769px)_and_(max-height:1000px)]:!w-[300px]"
              src="/mark.svg"
              alt=""
              fill
              aria-hidden="true"
            />

            <p className="relative z-[3] m-0 font-['Comfortaa',sans-serif] text-[clamp(1.2rem,2.2vw,22px)] font-medium leading-[1.3] max-[1200px]:text-[clamp(0.85rem,1.2vw,0.95rem)] max-[768px]:text-[0.95rem] [@media(min-width:769px)_and_(max-height:1000px)]:text-[clamp(0.75rem,0.75vw,0.85rem)] [@media(min-width:769px)_and_(max-height:1000px)]:leading-[1.25]">
              Preciously guarding his recipe for more than half a century,
              Henri, the grandfather, passed down his passion for delicate
              drinks and warm shared moments.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
