'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  return (
    <main className="mx-auto max-w-md px-6 pt-20 text-center">
      <div className="mb-4 text-5xl">🎉</div>
      <h1 className="mb-4 text-3xl font-bold text-gray-900">Order Confirmed!</h1>
      
      <p className="mb-8 rounded-md bg-green-50 p-4 text-green-800 border border-green-200">
        {message || 'Your order was placed successfully!'}
      </p>

      <Link
        href="/"
        className="inline-block rounded-md bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700"
      >
        Return to Shop
      </Link>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="pt-20 text-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}