import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Pricing | Axle Towing & Impound",
  description:
    "Zero cost parking enforcement for property owners. See how Axle Towing provides free 24/7 patrol, signage, vehicle removal, and portal access with no contracts or hidden fees.",
  alternates: {
    canonical: "https://axletowing.com/pricing",
    languages: {
      en: "https://axletowing.com/pricing",
      es: "https://axletowing.com/es/precios",
    },
  },
  openGraph: {
    title: "Transparent Pricing | Axle Towing & Impound",
    description:
      "Zero cost parking enforcement for property owners. See how Axle Towing provides free 24/7 patrol, signage, vehicle removal, and portal access with no contracts or hidden fees.",
    url: "https://axletowing.com/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing | Axle Towing & Impound",
    description:
      "Zero cost parking enforcement for property owners. See how Axle Towing provides free 24/7 patrol, signage, vehicle removal, and portal access with no contracts or hidden fees.",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
