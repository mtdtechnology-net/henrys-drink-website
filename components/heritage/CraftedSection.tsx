import Image from "next/image";

export function CraftedSection() {
  return (
    <section className="relative z-[6] isolate -mt-28 box-border flex min-h-screen min-h-[100svh] items-start justify-center overflow-hidden bg-[#fffcf9] px-8 pb-20 pt-[clamp(9rem,18vh,13rem)] max-[1024px]:pt-[clamp(7rem,15vh,10rem)] max-[768px]:-mt-12 max-[768px]:min-h-0 max-[768px]:px-6 max-[768px]:py-24">
      <div
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full [&_img]:block [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-top [&_img]:opacity-[0.78]"
        aria-hidden="true"
      >
        <Image
          src="/vinuti.svg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-[2] mx-auto flex w-[670px] max-w-[90vw] translate-y-[clamp(20px,5vh,60px)] flex-col items-start text-left max-[768px]:w-[85vw] max-[768px]:translate-y-0">
        <h2 className="mb-[clamp(2.75rem,6vh,4.5rem)] mt-0 flex w-max origin-left scale-x-[0.7] flex-col items-start text-left font-['Perandory',Georgia,serif] text-[clamp(3rem,9vw,101px)] font-normal uppercase leading-[1] tracking-[0] text-[#442f0e] [&_span]:block [&_span]:whitespace-nowrap max-[768px]:mb-10 max-[768px]:scale-x-[0.76] max-[768px]:text-[clamp(3rem,12vw,4.2rem)]">
          <span>CRAFTED WITH</span>
          <span>PATIENCE</span>
        </h2>

<div className="flex w-[520px] max-w-full origin-left scale-x-[1.1] self-start flex-col items-start gap-[32px] text-left font-['Comfortaa',sans-serif] text-[18px] font-medium leading-[28px] tracking-[0] text-[#171717] [&_p]:m-0 [&_p]:w-full [&_p]:whitespace-normal [&_p]:text-left [&_strong]:font-bold max-[768px]:w-full max-[768px]:scale-x-100 max-[768px]:gap-6 max-[768px]:text-[16px] max-[768px]:leading-[25px]">          <p>Every bottle begins long before it reaches the glass.</p>

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