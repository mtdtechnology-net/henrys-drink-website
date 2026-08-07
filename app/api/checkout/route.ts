import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

interface CheckoutRequestBody {
  productName: string;
  priceInEur: number;
  quantity: number;
  locale: string;
}

export async function POST(request: Request) {
  try {
    const body: CheckoutRequestBody = await request.json();

    const quantity = body.quantity && body.quantity > 0 ? body.quantity : 1;
    const locale = body.locale || 'en';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: body.productName,
            },
            unit_amount: Math.round(body.priceInEur * 100),
          },
          quantity,
        },
      ],
      metadata: {
        productName: body.productName,
        quantity: String(quantity),
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
