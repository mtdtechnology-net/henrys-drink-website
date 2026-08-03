import { sendNotificationEmail } from '@/lib/services/email.service';
import { NextResponse } from 'next/server';

interface PurchaseRequestBody {
  userEmail: string,
  itemCount: number;
}

export async function POST(request: Request) {
  try {
    const body: PurchaseRequestBody = await request.json();

    await sendNotificationEmail({
      to: body.userEmail,
      subject: 'Hi!',
      message: `Thank you for buying ${body.itemCount} items!`,
    });

    return NextResponse.json({
      message: `The payment was successful! You bought ${body.itemCount} products.`,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong processing your order.' },
      { status: 500 }
    );
  }
}


