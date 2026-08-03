import Image from "next/image";

export function MoreThanADrinkSection() {
  return (
    <section
      className="relative flex min-h-screen min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black"
      aria-labelledby="moments-title"
    >
      <div
        className="absolute inset-0 z-[1] flex h-full w-full max-[768px]:flex-col"
        aria-hidden="true"
      >
        <div className="relative h-full min-h-0 w-1/2 flex-none overflow-hidden max-[768px]:h-1/2 max-[768px]:w-full">
    <Image
  src="/girl.svg"
  alt=""
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="!bottom-0 !left-0 !right-auto !top-0 !h-full !w-[220%] !max-w-none object-cover object-left"
/>
  </div>

        <div className="relative h-full min-w-0 max-w-[50%] basis-1/2 overflow-hidden max-[768px]:h-1/2 max-[768px]:w-full max-[768px]:max-w-full">
          <Image
            src="/wine-in-hand.svg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="!absolute !inset-0 !block !h-full !w-full !max-w-none !object-cover !object-center"
          />
        </div>
      </div>

      <div className="relative z-[2] box-border flex h-full w-full items-center justify-center px-8 py-16">
        <div className="flex w-full max-w-[1000px] flex-col items-center text-center">
          <h2
            id="moments-title"
            className="mb-10 mt-0 whitespace-nowrap text-center font-['Perandory',Georgia,serif] text-[clamp(2.5rem,6.5vw,101px)] font-normal leading-none text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.4)] max-[768px]:mb-6 max-[768px]:whitespace-normal"
          >
            MORE THAN A DRINK
          </h2>

          <div className="flex flex-col gap-[1.8rem] text-center font-['Comfortaa',sans-serif] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] max-[768px]:gap-[1.2rem] max-[768px]:[&_br]:hidden">
            <p className="m-0 text-[clamp(1.1rem,1.8vw,24px)] font-semibold leading-[1.35]">
              Henry&apos;s is not only about what is inside the bottle.
              <br />
              It is about the moments created around it.
            </p>

            <p className="m-0 text-[clamp(0.95rem,1.3vw,18px)] font-normal leading-[1.4] opacity-95">
              Long conversations, shared meals, celebrations, and the people who
              <br />
              make those moments memorable.
            </p>

            <p className="m-0 text-[clamp(0.9rem,1.1vw,16px)] font-normal leading-[1.4] opacity-90">
              French Vermouth becomes the reason people gather.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreThanADrinkSection;
