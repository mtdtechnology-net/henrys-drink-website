import Image from "next/image";

export default function ProductPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#FBF9F5] flex items-start justify-between px-10 xl:px-23 pt-35 pb-24 overflow-y-auto">
      
      {/* 1. background illustration */}
      <div className="absolute left-0 top-55 w-[55%] h-[75%] z-0 pointer-events-none opacity-80">
        <Image
          src="/productbg.svg"
          alt="Illustration Background"
          fill
          priority
          className="object-contain object-top-left"
        />
      </div>

      {/* 2. left side */}
      <div className="relative z-10 flex flex-col justify-between h-131.5 w-102.75 shrink-0">
        <div className="flex flex-col gap-11.5">
          <div>
            <h1 className="font-perandory text-[60px] xl:text-[64px] leading-[1.02] uppercase text-[#325175] tracking-wide">
              THE SIGNATURE<br />APERITIF
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
          <button className="font-comfortaa bg-[#325175] text-white text-[18px] font-medium px-9 py-3.5 rounded-full hover:bg-[#233a54] transition-colors cursor-pointer shadow-sm">
            Add to cart
          </button>
        </div>
      </div>

      {/* 3. centre: henry's bottle */}
      <div className="relative z-20 w-84.25 h-244.25 shrink-0 flex justify-center -mt-15">
        <Image
          src="/henrybottle.svg"
          alt="Henry's Signature Aperitif Bottle"
          width={337}
          height={977}
          priority
          className="w-84.25 h-244.25 object-contain"
        />
      </div>

      {/* 4.right side */}
      <div className="font-comfortaa relative z-10 flex flex-col justify-start gap-15 w-108.75 shrink-0">
        
        {/* About */}
        <div className="space-y-3">
          <h3 className="font-semibold text-[17px] text-[#325175]">About This Aperitif</h3>
          <div className="text-[#0F0F0F] text-[16px] font-medium leading-7 space-y-3">
            <p>
              Inspired by a family recipe passed down through generations, Henry's combines Bordeaux wine, walnut, elderflower, and carefully selected spirits to create a refined and distinctive aperitif.
            </p>
            <p>
              Balanced, elegant, and versatile, it can be enjoyed on its own or as the foundation of our signature cocktails.
            </p>
          </div>
        </div>

        {/* Tasting Notes */}
        <div className="space-y-3">
          <h3 className="font-semibold text-[17px] text-[#325175]">Tasting Notes</h3>
          <div className="space-y-3 text-[#0F0F0F] text-[16px] font-medium leading-7">
            <div>
              <p className="text-[#325175] font-semibold">Nose</p>
              <p>Floral • Fruity • Delicate</p>
            </div>

            <div>
              <p className="text-[#325175] font-semibold">Palate</p>
              <p>Rich Wine • Walnut • Soft Sweetness</p>
            </div>

            <div>
              <p className="text-[#325175] font-semibold">Finish</p>
              <p>Smooth • Elegant • Long</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <h3 className="font-semibold text-[17px] text-[#325175]">Details</h3>

          <div className="space-y-3 text-[#0F0F0F] text-[16px] font-medium leading-7">
            <div>
              <p className="text-[#325175] font-semibold">Origin</p>
              <p>Bordeaux, France</p>
            </div>

            <div>
              <p className="text-[#325175] font-semibold">Style</p>
              <p>Wine Aperitif</p>
            </div>

            <div>
              <p className="text-[#325175] font-semibold">Serving Temperature</p>
              <p>6–8°C</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}