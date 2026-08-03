import { NextResponse } from 'next/server';

interface PurchaseRequestBody {
  itemCount: number;
}

export async function POST(request: Request) {
  try {
    const body: PurchaseRequestBody = await request.json();

    console.log(`Backend received request for ${body.itemCount} items.`);

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


