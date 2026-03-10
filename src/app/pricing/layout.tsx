import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Pricing | Axle Towing & Impound",
  description:
    "Zero cost parking enforcement for property owners. See how Axle Towing provides free 24/7 patrol, signage, vehicle removal, and portal access with no contracts or hidden fees.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
