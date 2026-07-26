import Image from "next/image";

export default function NightlifePage() {
  return (
    <main className="h-screen w-full bg-black overflow-y-scroll text-white relative">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/nightlifebackground1.svg"
          alt="Nightlife Background"
          fill
          priority
          unoptimized
          className="object-cover object-center brightness-90"
        />
      </div>

      {/* section 1: when the night comes alive */}
      <section className="relative z-10 h-full w-full flex flex-col items-center justify-start text-center pt-70">
      
        <h1 className="font-pinyon text-[134px] leading-none text-white text-center w-full max-w-360 h-41.75 flex items-center justify-center">
          When the night comes alive
          </h1>
        
        <p className="font-didact text-[24px] font-semibold leading-none uppercase text-white text-center w-full max-w-137.25 h-14.5 mt-8 flex items-center justify-center">
          Cocktails, atmosphere, and moments worth remembering.
          </p>
        
        <button className="absolute top-166 w-75 h-17.25 rounded-[160px] bg-[#FFFCF9] font-didact text-[22px] font-semibold leading-none text-[#442F0E] hover:bg-opacity-90 transition cursor-pointer flex items-center justify-center">
          Discover the experience
          </button>

          <div className="absolute -bottom-20 left-0 w-full h-40.25 bg-[#080808] blur-2xl z-20 pointer-events-none" />
      </section>

      {/* section 2: a different rhythm */}
      <section className="h-screen w-full snap-start grid grid-cols-1 md:grid-cols-2 bg-black text-[#F4EFE6] relative">
  <div className="relative w-full h-full">
    <Image
      src="/bartender.svg" 
      alt="Bartender"
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  <div className="w-full h-full bg-black flex flex-col justify-center items-start pl-4 md:pl-6 p-8">
    
<div className="w-full max-w-131.25 flex flex-col gap-13.75 -mt-12 md:-mt-16">      
      <h2 className="font-didact text-[52px] font-extrabold leading-none uppercase text-[#F4EFE6] w-full max-w-131.25">
       A DIFFERENT RHYTHM
      </h2>

      <p className="font-didact text-[24px] font-semibold leading-[130%] text-[#F4EFE6] w-full max-w-131.25">
        as the day slows down, the Henry's experience takes on a new energy.
      </p>

      <p className="font-didact text-[23px] font-semibold leading-[130%] lowercase text-[#F4EFE6] w-full max-w-127.5">
        The same appreciation for taste, craftsmanship, and connection moves into a more social setting, where cocktails replace wine glasses, conversations become longer, and every evening unfolds in its own way.
      </p>

    </div>

  </div>

</section>

      {/* section 3: signature cocktails */}
<section className="h-screen w-full snap-start bg-black text-[#F4EFE6] relative flex flex-col justify-between p-10 md:p-16 overflow-hidden">
  
  <div className="w-full flex justify-between items-center z-10 text-xs tracking-[0.2em] uppercase font-didact opacity-80">
    <span>SIGNATURE COCKTAILS</span>
    <span>03 / 11</span>
  </div>

  <div className="relative w-full h-[55%] flex items-center justify-center my-auto">
    <div className="absolute -left-25 md:-left-12.5 w-40 h-64 opacity-40 pointer-events-none flex items-center">
      <Image
        src="/prevcocktail.svg" 
        alt="Previous Cocktail"
        fill
        className="object-contain object-right"
      />
    </div>

    <div className="relative w-110 md:w-300 h-full z-10 flex items-center justify-center scale-125">
      <Image
        src="/currcocktail.svg"
        alt="Signature Cocktail"
        fill
        priority
        className="object-contain"
      />
    </div>
    
    <div className="absolute -right-28 md:-right-40 w-55 h-95 opacity-40 pointer-events-none flex items-center">
     <Image
    src="/nextcocktail.svg"
    alt="Next Cocktail"
    fill
    className="object-contain object-left"
     />
   </div>

  </div>

  <div className="w-full flex flex-col gap-6 z-10">
    
    <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
        <p className="font-didact text-xs uppercase tracking-[0.3em] opacity-70 mb-1">
         ELEGANT, UNEXPECTED, UNFORGETTABLE
       </p>

        <h3 className="font-pinyon text-[32px] md:text-[40px] opacity-98 leading-none text-[#F4EFE6] w-full max-w-131.25">
         Boulevard des coeurs
        </h3>
      </div>

      <p className="font-didact text-sm font-semibold md:text-base max-w-105 text-white leading-relaxed">
        A refined combination of almond, white pepper, and citrus that balances softness with subtle spice, creating a sophisticated and layered profile.
      </p>

    </div>

    <div className="w-full flex gap-2 pt-4 border-t border-white/10">
      <div className="h-0.5 flex-1 bg-white/20" />
      <div className="h-0.5 flex-1 bg-white/20" />
      <div className="h-0.5 flex-1 bg-white/20" />
      <div className="h-0.5 flex-1 bg-[#F4EFE6]" />
      <div className="h-0.5 flex-1 bg-white/20" />
      <div className="h-0.5 flex-1 bg-white/20" />
      <div className="h-0.5 flex-1 bg-white/20" />
      <div className="h-0.5 flex-1 bg-white/20" />
      <div className="h-0.5 flex-1 bg-white/20" />
      <div className="h-0.5 flex-1 bg-white/20" />
      <div className="h-0.5 flex-1 bg-white/20" />
    </div>

  </div>

</section>


  {/* section 4: made to be shared*/}
<section className="h-screen w-full snap-start bg-black text-[#F4EFE6] relative flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 w-full h-full z-0">
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black to-transparent z-20 pointer-events-none" />
    
    <div className="absolute inset-0 w-full h-full">
      <Image
        src="/bgsection4.svg"
        alt="Bar atmosphere"
        fill
        priority
        className="object-cover object-center brightness-170"
      />
    </div>

    <div className="absolute top-0 left-0 w-1/2 h-full z-10">
      <Image
        src="/cocktailsection4.svg"
        alt="Cocktail poured"
        fill
        priority
        className="object-cover object-center brightness-110"
      />
    </div>

    <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none" />
  </div>

<div className="relative z-30 w-full flex flex-col items-center text-center px-4 gap-10.75">
  
  <h2 className="font-pinyon text-[161px] leading-[100%] font-normal text-white whitespace-nowrap pr-6 w-full max-w-268.25">
    made to be shared
  </h2>

  <p className="font-didact text-[25px] font-extrabold leading-[100%] text-white text-center w-full max-w-268.25">
    The best moments happen when people come together.
  </p>

  <div className="flex flex-col gap-4 font-comfortaa text-[18px] font-medium leading-7 text-white text-center w-full max-w-161.75">
    <p>
      It's about connection. About sharing stories, creating memories, and enjoying the company of others in an atmosphere that feels effortless and genuine.
    </p>
    <p>
      Henry's was created for these moments. The ones that don't need a special occasion, yet somehow become unforgettable.
    </p>
  </div>

</div>

</section>

{/* section 5: meet the man behind the story */}
<section className="h-screen w-full snap-start bg-black text-white relative flex items-center justify-center overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black to-transparent z-20 pointer-events-none" />

  <div className="absolute inset-0 w-full h-full z-0">
    <Image
      src="/bgsection5.svg" 
      alt="Meet the man behind the story background"
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  <div className="relative z-30 w-full max-w-284 flex flex-col items-center text-center px-4 gap-10.75">
    
    <h2 className="font-perandory text-[60px] md:text-[85px] lg:text-[80px] leading-[100%] font-normal text-white uppercase whitespace-nowrap tracking-tighter mb-12">
    MEET THE MAN BEHIND THE STORY
  </h2>

    <p className="font-comfortaa text-[24px] font-medium leading-[100%] text-white text-center w-full max-w-167.25">
      Long before Henry's became cocktails, events, and celebrations, it was a family tradition.
    </p>

    <button className="bg-[#325175] text-white font-comfortaa text-[21px] font-medium rounded-[160px] px-7.5 py-4 hover:bg-[#28415e] transition-colors duration-300">
  Discover the Legacy
</button>

  </div>

</section>

    </main>
  );
}