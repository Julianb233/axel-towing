'use client';

import { useSearchParams } from 'next/navigation';

interface PaymentSuccessBannerProps {
  invoiceNumber?: string;
}

/**
 * PaymentSuccessBanner — shown on the invoice page after a successful
 * Klarna (or other) payment redirect.
 *
 * Reads ?payment=success&order_id=... from the URL query string.
 * Renders nothing if payment param is not present.
 */
export default function PaymentSuccessBanner({ invoiceNumber }: PaymentSuccessBannerProps) {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get('payment');
  const orderId = searchParams.get('order_id');

  if (paymentStatus !== 'success') return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="mb-6 rounded-2xl border-2 border-green-300 bg-green-50 px-6 py-5 text-center shadow-sm print:hidden"
    >
      {/* Checkmark icon */}
      <div className="mb-3 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      <h2 className="mb-1 text-lg font-bold text-green-800">Payment Received — Thank You!</h2>
      <p className="text-sm text-green-700">
        Your Klarna payment has been confirmed.
        {(orderId || invoiceNumber) && (
          <>
            {' '}
            Order reference: <span className="font-mono font-bold">{orderId || invoiceNumber}</span>
          </>
        )}
      </p>
      <p className="mt-2 text-xs text-green-600">
        You&apos;ll receive a confirmation email from Klarna shortly. Questions?{' '}
        <a
          href="mailto:julian@aiacrobatics.com"
          className="font-semibold underline hover:text-green-800"
        >
          julian@aiacrobatics.com
        </a>
      </p>
    </div>
  );
}
