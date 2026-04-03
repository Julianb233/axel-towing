import { Metadata } from 'next';
import ShopContent from './ShopContent';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Merchandise Shop — Corporate Gifting | Axle Towing',
  description:
    'Order Axle Towing branded merchandise for corporate gifting. Mugs, mouse pads, wireless chargers, candles, parking permit hangers. Zero markup — cost price for HOA and property management partners.',
  alternates: {
    canonical: 'https://axletowing.com/shop',
  },
  openGraph: {
    title: 'Corporate Gifting Merchandise — Axle Towing',
    description:
      'Premium branded merchandise at cost price for HOA and property management partners. Mugs, mouse pads, wireless chargers, candles, and parking permit accessories.',
    url: 'https://axletowing.com/shop',
    type: 'website',
  },
};

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://axletowing.com' },
              { name: 'Merchandise', url: 'https://axletowing.com/merchandise' },
              { name: 'Shop', url: 'https://axletowing.com/shop' },
            ])
          ),
        }}
      />
      <ShopContent />
    </>
  );
}
