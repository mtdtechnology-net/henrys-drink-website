import Image from "next/image";

export default function ProductPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#FBF9F5] font-comfortaa flex items-start justify-between px-10 xl:px-20 pt-12 xl:pt-16 pb-12 overflow-y-auto">
      
      {/* 1. FUNDALUL DESENAT */}
      <div className="absolute left-0 -bottom-8 w-[55%] h-[80%] z-0 pointer-events-none opacity-80">
        <Image
          src="/productbg.svg"
          alt="Illustration Background"
          fill
          priority
          className="object-contain object-bottom-left"
        />
      </div>

      {/* 2. COLOANA STÂNGA */}
      <div className="relative z-10 flex flex-col justify-between h-131.5 w-102.75 shrink-0">
        <div className="flex flex-col gap-5">
          {/* Titlu principal */}
          <h1 className="font-perandory text-[52px] xl:text-[58px] leading-[1.02] uppercase text-[#325175] tracking-wide">
            THE SIGNATURE<br />APERITIF
          </h1>
          
          {/* Subtitlu */}
          <div className="text-[18px] text-[#0F0F0F] font-medium leading-relaxed mt-1">
            <p className="font-semibold text-[#325175]">Bordeaux, France</p>
            <p>Wine • Walnut • Elderflower</p>
          </div>

          {/* Preț */}
          <div className="font-perandory text-[72px] xl:text-[80px] text-[#325175] leading-none mt-2">
            50 €
          </div>
        </div>

        {/* Buton Add to Cart */}
        <div>
          <button className="bg-[#325175] text-white font-comfortaa text-[15px] font-medium px-9 py-3.5 rounded-full hover:bg-[#233a54] transition-colors cursor-pointer shadow-sm">
            Add to cart
          </button>
        </div>
      </div>

      {/* 3. COLOANA CENTRU: STICLA (COBORÂTĂ MAI JOS) */}
      <div className="relative z-20 h-[85vh] min-h-150 w-120 xl:w-135 shrink-0 flex items-center justify-center translate-y-20">
        <Image
          src="/henrybottle.svg"
          alt="Henry's Signature Aperitif Bottle"
          fill
          priority
          className="object-contain drop-shadow-2xl scale-110"
        />
      </div>

      {/* 4. COLOANA DREAPTA (CU SCROLL & PADDING JOS PENTRU TEMPERATURĂ) */}
      <div className="relative z-10 flex flex-col justify-start gap-8 max-h-[calc(100vh-100px)] w-95 xl:w-108.75 shrink-0 overflow-y-auto no-scrollbar pr-2 pb-24">
        
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