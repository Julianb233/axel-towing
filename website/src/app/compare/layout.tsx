import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Axle Towing — Compare Our Services",
  description:
    "See how Axle Towing & Impound compares to the industry average. Zero cost, sub-30-minute response, real-time tracking, and no contracts. Serving 8 Phoenix metro cities.",
  keywords: [
    "towing company comparison Phoenix",
    "best towing company Phoenix AZ",
    "free towing for property owners",
    "parking enforcement comparison",
    "Axle Towing vs competitors",
    "no contract towing Phoenix",
  ],
  openGraph: {
    title: "Why Choose Axle Towing — Compare Our Services",
    description:
      "See how Axle Towing & Impound compares to the industry average. Zero cost, sub-30-minute response, and no contracts.",
    url: "https://axletowing.com/compare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Axle Towing — Compare Our Services",
    description:
      "See how Axle Towing & Impound compares to the industry average. Zero cost, sub-30-minute response, and no contracts.",
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
