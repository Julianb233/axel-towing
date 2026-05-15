import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Axle Towing — Compare Our Services",
  description:
    "Review Axle Towing & Impound's private property towing, parking enforcement, documentation, response model, and property-manager service standards across the Phoenix metro area.",
  keywords: [
    "free towing for property owners",
    "parking enforcement standards",
    "no contract towing Phoenix",
    "property manager towing Phoenix",
  ],
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Why Choose Axle Towing — Compare Our Services",
    description:
      "Review Axle Towing & Impound's property-manager service standards, documentation model, and response approach.",
    type: "website",
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
