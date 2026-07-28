import Image from "next/image";

export function CraftedSection() {
  return (
    <section className="relative z-[6] isolate -mt-28 box-border flex min-h-screen min-h-[100svh] items-start justify-center overflow-hidden bg-[#fffcf9] px-8 pb-20 pt-[clamp(9rem,18vh,13rem)] max-[1024px]:pt-[clamp(7rem,15vh,10rem)] max-[768px]:-mt-12 max-[768px]:min-h-0 max-[768px]:px-6 max-[768px]:py-24">
      <div
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full [&_img]:block [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-top [&_img]:opacity-[0.78]"
        aria-hidden="true"
      >
        <Image src="/vinuti.svg" alt="" fill priority sizes="100vw" />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[560px] flex-col items-start text-left max-[1024px]:max-w-[520px]">
        <h2 className="mb-[clamp(2.5rem,5vh,4rem)] mt-0 flex origin-left scale-x-[0.87] flex-col items-start font-['Perandory',Georgia,serif] text-[clamp(3rem,3.8vw,4rem)] font-normal uppercase leading-[0.9] tracking-[-0.035em] text-[#442f0e] [font-stretch:semi-condensed] [&_span]:block [&_span]:whitespace-nowrap max-[1024px]:text-[clamp(3.5rem,7vw,5rem)] max-[768px]:mb-10 max-[768px]:text-[clamp(3rem,12vw,4.2rem)]">
          <span>CRAFTED WITH</span>
          <span>PATIENCE</span>
        </h2>

        <div className="flex w-full max-w-[560px] flex-col items-start gap-[clamp(1.7rem,3.5vh,2.5rem)] text-left font-['Comfortaa',sans-serif] text-[clamp(1rem,1.15vw,1.25rem)] font-medium leading-[1.45] text-[#171717] [&_p]:m-0 [&_p]:text-left [&_strong]:font-bold max-[768px]:gap-6 max-[768px]:text-[0.95rem]">
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

          <p className="!mt-1 text-[clamp(1.35rem,1.65vw,1.75rem)] font-semibold leading-[1.25] max-[768px]:text-[1.35rem]">
            Nothing is rushed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CraftedSection;
