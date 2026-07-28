import { Pinyon_Script } from "next/font/google";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

export function NightSection() {
  return (
    <section
      className="relative flex min-h-screen min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black px-8 py-16 max-[768px]:px-5 max-[768px]:py-12"
      aria-labelledby="night-title"
    >
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-center blur-[20px] brightness-[0.7]"
          src="/video-heritage.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 z-10 bg-black/35" />
      </div>

      <div className="relative z-20 flex w-full max-w-full flex-col items-center text-center">
        <h2
          id="night-title"
          className={`${pinyonScript.className} m-0 text-center text-[clamp(4rem,15vw,232px)] font-normal leading-none text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.4)]`}
        >
          Enter the night
        </h2>

        <p className="my-14 text-center font-['Futura','Trebuchet_MS',sans-serif] text-[clamp(14px,1.8vw,25px)] font-medium uppercase leading-none text-white max-[768px]:mb-10 max-[768px]:mt-4 max-[768px]:tracking-[0.05em]">
          COCKTAILS. ATMOSPHERE. MUSIC. CONNECTION.
        </p>

        <a
  href="#experience"
  className="mt-8 inline-flex h-[63px] min-w-[356px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#b50012] px-7 font-['Futura','Trebuchet_MS',sans-serif] text-[20px] font-medium leading-none text-white no-underline shadow-[0_8px_24px_rgba(149,0,13,0.4)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#95000d] max-[480px]:h-[56px] max-[480px]:min-w-0 max-[480px]:w-full max-[480px]:px-5 max-[480px]:text-[15px]"
>
  Discover the experience by night
</a>
      </div>
    </section>
  );
}