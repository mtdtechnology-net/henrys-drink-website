import Image from "next/image";
//import { addToCartAction } from "./actions";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <section className="relative w-full min-h-screen bg-[#FBF9F5] flex flex-col lg:flex-row items-center lg:items-start justify-between px-10 xl:px-23 pt-35 pb-24 overflow-x-hidden gap-12 lg:gap-0">
      <div className="absolute left-0 top-70 w-[55%] h-[75%] z-0 pointer-events-none opacity-80">
        <Image
          src="/productbg.svg"
          alt="Illustration Background"
          fill
          priority
          className="object-contain object-top-left"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-between min-h-131.5 w-full lg:w-102.75 max-w-102.75 shrink-0 items-center text-center lg:items-start lg:text-left">
        <div className="flex flex-col gap-11.5">
          <div>
            <h1 className="font-perandory text-[60px] xl:text-[64px] leading-[1.02] uppercase text-[#325175] tracking-wide">
              THE SIGNATURE
              <br />
              APERITIF
            </h1>

            <div className="font-comfortaa text-[22px] text-[#0F0F0F] font-medium leading-relaxed mt-5 flex flex-col gap-3">
              <p className="font-semibold text-[#0F0F0F]">Bordeaux, France</p>
              <p>Wine • Walnut • Elderflower</p>
            </div>
          </div>

          <div className="font-perandory text-[100px] xl:text-[108px] text-[#325175] leading-none">
            50 €
          </div>
        </div>

        <div className="mb-8">
  <AddToCartButton productId={1} locale={locale} />
</div>
      </div>

      <div className="relative z-20 w-full max-w-84.25 h-auto lg:h-244.25 shrink-0 flex justify-center pt-3">
        <Image
          src="/henrybottle.svg"
          alt="Henry's Signature Aperitif Bottle"
          width={674}
          height={1954}
          priority
          unoptimized
          className="w-full max-w-84.25 h-auto max-h-244.25 object-contain"
        />
      </div>

      <div className="font-comfortaa relative z-10 flex flex-col justify-start gap-15 w-full lg:w-[435px] max-w-[435px] shrink-0 items-center text-center lg:items-start lg:text-left">
        <div className="space-y-3">
          <h3 className="font-bold text-[18px] text-[#325175] leading-[25px]">
            About This Aperitif
          </h3>
          <div className="text-[#0F0F0F] text-[16px] font-medium leading-[25px] space-y-5">
            <p>
              Inspired by a family recipe passed down through generations, Henry's
              combines Bordeaux wine, walnut, elderflower, and carefully selected
              spirits to create a refined and distinctive aperitif.
            </p>
            <p>
              Balanced, elegant, and versatile, it can be enjoyed on its own or as
              the foundation of our signature cocktails.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-[18px] text-[#325175] leading-[25px]">
            Tasting Notes
          </h3>
          <div className="space-y-5 text-[#0F0F0F] text-[16px] font-medium leading-[25px]">
            <div>
              <p className="text-[#325175] font-bold">Nose</p>
              <p>Floral • Fruity • Delicate</p>
            </div>

            <div>
              <p className="text-[#325175] font-bold">Palate</p>
              <p>Rich Wine • Walnut • Soft Sweetness</p>
            </div>

            <div>
              <p className="text-[#325175] font-bold">Finish</p>
              <p>Smooth • Elegant • Long</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-[18px] text-[#325175] leading-[25px]">
            Details
          </h3>

          <div className="space-y-5 text-[#0F0F0F] text-[16px] font-medium leading-[25px]">
            <div>
              <p className="text-[#325175] font-bold">Origin</p>
              <p>Bordeaux, France</p>
            </div>

            <div>
              <p className="text-[#325175] font-bold">Style</p>
              <p>Wine Aperitif</p>
            </div>

            <div>
              <p className="text-[#325175] font-bold">Serving Temperature</p>
              <p>6–8°C</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}