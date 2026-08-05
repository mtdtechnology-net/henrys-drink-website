// app/actions/order.ts
"use server";

import { sendNotificationEmail } from "@/lib/services/email.service";

interface ProcessMockPaymentParams {
  userEmail: string;
  itemCount: number;
  total: number;
  locale: string;
}

export async function processMockPaymentAction({
  userEmail,
  itemCount,
  total,
  locale
}: ProcessMockPaymentParams) {

  try {
    console.log(`[MOCK STRIPE] Payment processing for: ${userEmail} (${total}€)`);

    await sendNotificationEmail({
      to: userEmail,
      userEmail: userEmail,
      subject: "Confirmation de votre commande - Henry's",
      message: `Merci pour votre achat ! Nous avons bien reçu votre paiement de ${total.toFixed(
        2
      )} € pour ${itemCount} article(s).`,
      itemCount,
      locale: locale
    });

    return { success: true };
  } catch (error) {
    console.error("[MOCK STRIPE] Payment failed:", error);
    return { success: false, error: "L'envoi de l'e-mail a échoué." };
  }
}