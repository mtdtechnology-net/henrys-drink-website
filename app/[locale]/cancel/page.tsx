import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="w-full min-h-screen bg-[#FFFBF7] flex items-center justify-center px-6 py-24 font-comfortaa text-[#442F0E]">
      <div className="w-full max-w-2xl text-center">
        <h1 className="font-['Pinyon_Script'] text-[clamp(52px,9vw,100px)] leading-[1.1] text-[#442F0E] mb-6">
          Payment Cancelled
        </h1>

        <p className="text-[clamp(15px,1.8vw,20px)] leading-[160%] opacity-80 mb-12">
          Your payment was cancelled. Nothing was charged to your card.
        </p>

        <div className="mx-auto mb-10 h-px w-24 bg-[#442F0E]/20" />

        <Link
          href="/cart"
          className="inline-flex items-center justify-center bg-[#325175] text-[#F3EDE6] font-semibold text-[17px] px-10 py-4 rounded-full hover:bg-[#233a54] transition-colors shadow-sm"
        >
          Return to Cart
        </Link>
      </div>
    </main>
  );
}
