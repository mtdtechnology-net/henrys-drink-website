import Image from "next/image";

export function CraftedSection() {
  return (
    <section className="relative z-[6] isolate -mt-28 box-border flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden bg-[#fffcf9] px-8 py-[clamp(8rem,15vh,12rem)] max-[768px]:-mt-12 max-[768px]:min-h-0 max-[768px]:px-6 max-[768px]:py-24">
      <div
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full [&_img]:block [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-center [&_img]:opacity-[0.78]"
        aria-hidden="true"
      >
        <Image src="/vinuti.svg" alt="" fill priority sizes="100vw" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[670px] flex-col items-center text-center">
        <h2 className="mb-[clamp(2.75rem,6vh,4.5rem)] mt-0 flex w-full flex-col items-center text-center font-['Perandory',Georgia,serif] text-[clamp(3rem,7vw,101px)] font-normal uppercase leading-none tracking-[0] text-[#442f0e] [font-stretch:semi-condensed] [&_span]:block [&_span]:whitespace-nowrap max-[768px]:mb-10 max-[768px]:text-[clamp(3rem,12vw,4.2rem)]">
          <span>CRAFTED WITH</span>
          <span>PATIENCE</span>
        </h2>

        <div className="flex w-full max-w-[520px] flex-col items-center gap-8 text-center font-['Comfortaa',sans-serif] text-[18px] font-medium leading-[28px] tracking-[0] text-[#171717] [&_p]:m-0 [&_p]:w-full [&_p]:whitespace-normal [&_p]:text-center [&_strong]:font-bold max-[768px]:gap-6 max-[768px]:text-[16px] max-[768px]:leading-[25px]">
          <p>Every bottle begins long before it reaches the glass.</p>

          <p>
            From vineyard to cellar, each step follows the same philosophy:{" "}
            <strong>quality takes time</strong>.
          </p>

          <p>
            The grapes are carefully cultivated and harvested before being
            transformed through a process that balances tradition, expertise,
            and patience.
          </p>

          <p className="!mt-1 !text-[28px] !font-bold !leading-[35px] !tracking-[0] max-[768px]:!text-[22px] max-[768px]:!leading-[29px]">
            Nothing is rushed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CraftedSection;