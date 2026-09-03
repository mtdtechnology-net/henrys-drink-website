import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import {
  createOrderFromStripeSession,
  findOrderReferenceByTransactionId,
} from "@/lib/prestashop";
import { sendNotificationEmail } from "@/lib/services/email.service";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }

  let session;

  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Could not retrieve session.",
      },
      { status: 400 }
    );
  }

  const isPaid = session.payment_status === "paid";
  const metadata = session.metadata ?? {};
  const fallbackReference =
    session.client_reference_id ?? metadata.reference ?? null;

  let reference = fallbackReference;
  let orderCreated = false;
  let orderDuplicate = false;

  if (isPaid) {
    const result = await createOrderFromStripeSession(session);
    orderCreated = result.created;
    orderDuplicate = result.duplicate;

    if (typeof session.payment_intent === "string") {
      const realReference =
        (await findOrderReferenceByTransactionId(session.payment_intent))
          ?.orderReference ?? null;
      reference = realReference ?? result.reference ?? fallbackReference;
    }
  }

  if (isPaid && metadata.email) {
    try {
      await sendNotificationEmail({
        to: metadata.email,
        userEmail: metadata.email,
        subject: "Confirmation de votre commande - Henry's",
        title: "Merci pour votre commande !",
        description: `Merci pour votre achat ! Nous avons bien reçu votre paiement.`,
        firstName: metadata.firstName,
        locale: metadata.locale ?? "en",
      });
    } catch (error) {
      console.error(
        "[order-confirm] failed to send confirmation email:",
        error
      );
    }
  }

  const response = NextResponse.json({
    isPaid,
    reference,
    orderCreated,
    orderDuplicate,
    email: metadata.email ?? null,
    total: (session.amount_total ?? 0) / 100,
  });

  if (isPaid) {
    response.cookies.set("henrys_cart", JSON.stringify({ items: [] }), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    });
  }

  return response;
}
