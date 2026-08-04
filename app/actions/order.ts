// app/actions/order.ts
"use server";

import { sendNotificationEmail } from "@/lib/services/email.service";

interface ProcessMockPaymentParams {
  userEmail: string;
  itemCount: number;
  total: number;
}

export async function processMockPaymentAction({
  userEmail,
  itemCount,
  total,
}: ProcessMockPaymentParams) {
  try {
    console.log(`[MOCK STRIPE] Payment processing for: ${userEmail} (${total}€)`);

    // 1. Send the email via Resend
    await sendNotificationEmail({
      to: userEmail,
      subject: "Confirmation de votre commande - Henry's",
      message: `Merci pour votre achat ! Nous avons bien reçu votre paiement de ${total.toFixed(
        2
      )} € pour ${itemCount} article(s).`,
      itemCount,
    });

    return { success: true };
  } catch (error) {
    console.error("[MOCK STRIPE] Payment failed:", error);
    return { success: false, error: "L'envoi de l'e-mail a échoué." };
  }
}