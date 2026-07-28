export function HeritageHero() {
  return (
    <section
      className="relative grid min-h-screen min-h-[100svh] place-items-start justify-items-center overflow-hidden bg-[#fffcf9] text-center after:pointer-events-none after:absolute after:bottom-[-20px] after:left-[-131px] after:z-[2] after:h-[163px] after:w-[calc(100%+262px)] after:bg-[#fffcf9] after:content-[''] after:[backdrop-filter:blur(52.4px)] after:[filter:blur(52.4px)]"
      aria-labelledby="heritage-title"
    >
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(255,252,249,0.16),rgba(255,252,249,0.34)),url('/house-light.svg')] bg-cover bg-center bg-no-repeat" />

      <div className="relative z-[3] flex h-auto w-full max-w-[1440px] translate-y-[clamp(55px,10vh,120px)] flex-col items-center gap-5 pt-[142px] max-[768px]:w-[90%] max-[768px]:translate-y-[30px] max-[768px]:pt-[130px]">
        <h1
          id="heritage-title"
          className="m-0 origin-center scale-x-[0.78] whitespace-nowrap text-center font-['Perandory',Georgia,serif] text-[clamp(2rem,6.5vw,112px)] font-normal leading-none tracking-[-0.05em] text-[#325175] [font-stretch:semi-condensed] max-[768px]:whitespace-normal max-[768px]:text-[clamp(2.5rem,9vw,5.5rem)] max-[768px]:leading-[0.95]"
        >
          WHERE THE STORY BEGINS
        </h1>

        <p className="m-0 w-[549px] max-w-[90%] text-center font-['Comfortaa',sans-serif] text-[22px] font-medium leading-[1.25] text-[#442f0e] max-[768px]:w-full max-[768px]:max-w-[549px] max-[768px]:text-[18px]">
          From the vineyards of Bordeaux to generations of tradition,
          Henry&apos;s is rooted in heritage, craftsmanship, and the art of
          taking time.
        </p>

        <a
  href="#family-story"
  className="mt-[clamp(18rem,46vh,30rem)] inline-flex min-h-11 items-center justify-center rounded-full bg-[#325175] px-6 py-3 font-['Comfortaa',sans-serif] text-[0.85rem] text-white no-underline transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#1c3858] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#95000d] [@media(min-width:769px)_and_(max-height:1000px)]:!mt-[6rem] max-[768px]:!mt-28"
>
  Discover the Legacy
</a>
      </div>
    </section>
  );
}