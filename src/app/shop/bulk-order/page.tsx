import { Metadata } from 'next';
import BulkOrderContent from './BulkOrderContent';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Bulk Corporate Gifting Order — Axle Towing',
  description:
    'Request a bulk corporate gifting order for Axle Towing branded merchandise. Minimum 10 units. Zero markup for HOA and property management partners.',
  alternates: {
    canonical: 'https://axletowing.com/shop/bulk-order',
  },
};

export default function BulkOrderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://axletowing.com' },
              { name: 'Shop', url: 'https://axletowing.com/shop' },
              { name: 'Bulk Order', url: 'https://axletowing.com/shop/bulk-order' },
            ])
          ),
        }}
      />
      <BulkOrderContent />
    </>
  );
}
