import { Metadata } from 'next';
import ParkingPermitsContent from './ParkingPermitsContent';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Custom Parking Permits — Axle Towing',
  description:
    'Order custom branded parking permits for your HOA, apartment complex, or commercial property. Hang tags and door hangers with your property branding and custom numbering.',
  alternates: {
    canonical: 'https://axletowing.com/shop/parking-permits',
  },
  openGraph: {
    title: 'Custom Parking Permits — Axle Towing',
    description:
      'Custom branded parking permits for property managers. Hang tags and door hangers with your logo, property address, and sequential numbering.',
    url: 'https://axletowing.com/shop/parking-permits',
    type: 'website',
  },
};

export default function ParkingPermitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://axletowing.com' },
              { name: 'Parking Permits', url: 'https://axletowing.com/shop/parking-permits' },
            ])
          ),
        }}
      />
      <ParkingPermitsContent />
    </>
  );
}
