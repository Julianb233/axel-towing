import type { Metadata } from 'next';
import PayContent from './PayContent';

export const metadata: Metadata = {
  title: 'Pay Your Invoice — Axle Towing Website Development',
  description: 'Securely pay your invoice for Axle Towing website development. Choose to pay in full or in 4 interest-free installments with Klarna.',
  robots: 'noindex, nofollow',
};

export default function PayPage() {
  return <PayContent />;
}
