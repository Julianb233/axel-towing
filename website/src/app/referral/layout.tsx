import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral Program | Axle Towing & Impound",
  description:
    "Refer a property manager to Axle Towing & Impound and earn up to $200+ in gift card rewards. Free parking enforcement for them, rewards for you.",
  keywords: [
    "towing referral program Phoenix",
    "parking enforcement referral",
    "Axle Towing referral rewards",
    "property manager referral",
    "towing gift card rewards",
  ],
  openGraph: {
    title: "Referral Program | Axle Towing & Impound",
    description:
      "Refer a property manager and earn up to $200+ in gift card rewards. Free parking enforcement for them, rewards for you.",
    url: "https://axletowing.com/referral",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Program | Axle Towing & Impound",
    description:
      "Refer a property manager and earn up to $200+ in gift card rewards. Free parking enforcement for them, rewards for you.",
  },
};

export default function ReferralLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
