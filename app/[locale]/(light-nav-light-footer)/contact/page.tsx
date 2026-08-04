import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-[#FFFCF9] flex flex-col items-center justify-center px-6 pt-50 pb-20">
      <div className="flex flex-col items-center mb-16 w-full max-w-210">
        <h1 className="font-['Pinyon_Script'] text-[clamp(40px,6vw,85px)] leading-[110%] text-[#442F0E] text-center w-full mb-4">
          Join the Henry's experience
        </h1>

        <p className="font-comfortaa text-[clamp(16px,1.8vw,22px)] leading-[160%] text-[#442F0E] opacity-80 text-center w-full mt-4 mb-2">
          Whether you're interested in Henry's, planning an event, or looking to
          place an order, we'd love to hear from you.
        </p>
      </div>

      <form className="w-full max-w-210 flex flex-col items-center gap-12 font-comfortaa">
        <div className="w-full max-w-160 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#442F0E] font-medium">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: Jean"
              required
              className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#442F0E] font-medium">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: Dupont"
              required
              className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
            />
          </div>
        </div>

        <div className="w-full max-w-160 flex flex-col gap-2">
          <label className="text-[14px] text-[#442F0E] font-medium">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="jean.dupont@email.com"
            required
            className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
          />
        </div>

        <div className="w-full max-w-160 flex flex-col gap-2">
          <label className="text-[14px] text-[#442F0E] font-medium">
            Phone
          </label>
          <input
            type="tel"
            placeholder="+33 6 00 00 00 00"
            className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
          />
        </div>

        <div className="w-full max-w-160 flex flex-col gap-2">
          <label className="text-[14px] text-[#442F0E] font-medium">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Optional"
            className="bg-transparent border-b border-[#442F0E]/70 pb-2 text-[15px] text-[#442F0E] placeholder:text-[#442F0E]/30 focus:outline-none focus:border-[#442F0E] transition-colors"
          />
        </div>

        <div className="w-full max-w-160 flex flex-col gap-4 mt-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 appearance-none w-4 h-4 rounded-xs border border-[#442F0E] checked:bg-[#325175] checked:border-[#325175] shrink-0 cursor-pointer transition-colors"
            />
            <span className="text-[14px] leading-[140%] text-[#442F0E]">
              Yes, subscribe me to your newsletter.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              className="mt-1 appearance-none w-4 h-4 rounded-xs border border-[#442F0E] checked:bg-[#325175] checked:border-[#325175] shrink-0 cursor-pointer transition-colors"
            />
            <span className="text-[14px] leading-[140%] text-[#442F0E]">
              By this, I affirm that I am over 18 years old and agree to the
              general terms and conditions of the website.{" "}
              <span className="text-red-500">*</span>
            </span>
          </label>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#325175] text-[#F3EDE6] font-semibold text-[18px] whitespace-nowrap px-10 py-4 min-w-65 rounded-full hover:bg-[#233a54] transition-colors cursor-pointer flex items-center justify-center shadow-sm"
          >
            Send my message
          </button>
        </div>
      </form>
    </section>
  );
}
