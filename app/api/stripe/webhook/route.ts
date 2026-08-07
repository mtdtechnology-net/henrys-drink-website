import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const webhookSecret = process.env.STRIPE_SIGNING_SECRET;

export async function POST(request: Request) {
  const signature = request.headers.get('stripe-signature');
  const rawBody = await request.text();

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: 'Missing Stripe signature or webhook secret' },
      { status: 400 },
    );
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Webhook signature verification failed';
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      console.log('[webhook] checkout.session.completed', {
        sessionId: session.id,
        customerEmail: session.customer_email ?? session.customer_details?.email ?? null,
        amountTotal: session.amount_total,
        currency: session.currency,
        paymentStatus: session.payment_status,
        metadata: session.metadata,
      });
      break;
    }
    default:
      console.log(`[webhook] unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
