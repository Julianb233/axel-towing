import type { Metadata } from 'next';
import { Suspense } from 'react';
import PaymentConfirmationContent from './PaymentConfirmationContent';

export const metadata: Metadata = {
  title: 'Payment Confirmed — Thank You',
  description: 'Your payment has been received. Thank you for choosing AI Acrobatics.',
  robots: 'noindex, nofollow',
};

export default function PaymentConfirmationPage() {
  return (
    <Suspense>
      <PaymentConfirmationContent />
    </Suspense>
  );
}
