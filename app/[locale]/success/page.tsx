import Link from "next/link";
import { stripe } from "@/lib/stripe";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  let isPaid = false;

  if (sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      isPaid = session.payment_status === "paid";
    } catch (error) {
      console.error("Failed to retrieve checkout session:", error);
    }
  }

  return (
    <main className="w-full min-h-screen bg-[#FFFBF7] flex items-center justify-center px-6 py-24 font-comfortaa text-[#442F0E]">
      <div className="w-full max-w-2xl text-center">
        {isPaid ? (
          <>
            <h1 className="font-['Pinyon_Script'] text-[clamp(52px,9vw,100px)] leading-[1.1] text-[#442F0E] mb-6">
              Order Confirmed
            </h1>

            <p className="text-[clamp(15px,1.8vw,20px)] leading-[160%] opacity-80 mb-12">
              Your payment was successful. Thank you for your order!
            </p>
          </>
        ) : (
          <>
            <h1 className="font-['Pinyon_Script'] text-[clamp(52px,9vw,100px)] leading-[1.1] text-[#442F0E] mb-6">
              No payment found
            </h1>

            <p className="text-[clamp(15px,1.8vw,20px)] leading-[160%] opacity-80 mb-12">
              We could not confirm any payment for this link.
            </p>
          </>
        )}

        <div className="mx-auto mb-10 h-px w-24 bg-[#442F0E]/20" />

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#325175] text-[#F3EDE6] font-semibold text-[17px] px-10 py-4 rounded-full hover:bg-[#233a54] transition-colors shadow-sm"
        >
          Return to Shop
        </Link>
      </div>
    </main>
  );
}
