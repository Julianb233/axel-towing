import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Calculator — See Your Parking Enforcement Impact",
  description:
    "Calculate the impact of professional parking enforcement on your property. Estimate violation reduction, complaint reduction, and property value impact — all at zero cost.",
  keywords: [
    "parking enforcement ROI",
    "towing cost calculator",
    "property management parking solutions",
    "parking violation reduction calculator",
    "free towing ROI Phoenix",
    "parking enforcement impact",
  ],
  openGraph: {
    title: "ROI Calculator — See Your Parking Enforcement Impact",
    description:
      "Calculate the impact of professional parking enforcement on your Phoenix property. Always free for property owners.",
    type: "website",
  },
};

export default function ROICalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
