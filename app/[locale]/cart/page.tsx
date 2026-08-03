'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const [quantity, setQuantity] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handlePay = async () => {
    setIsLoading(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemCount: quantity }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push(`/success?message=${encodeURIComponent(data.message)}`);
      }
    } catch (error) {
      console.error('Failed to communicate with server:', error);
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-md px-6 pt-20">
      <h1 className="mb-8 text-3xl font-bold">Cart</h1>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">
          Quantity:
        </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          className="w-20 rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <button
        onClick={handlePay}
        disabled={isLoading}
        className="w-full rounded-md bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
    </main>
  );
}