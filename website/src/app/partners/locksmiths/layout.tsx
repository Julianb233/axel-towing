import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locksmith Towing Partnership in Phoenix, AZ",
  description:
    "Partner with Axle Towing as a locksmith in Phoenix. Earn referral commissions by connecting property managers with free parking enforcement. Zero cost, 30-minute response.",
  keywords: [
    "locksmith towing partnership phoenix",
    "locksmith referral program towing",
    "locksmith parking enforcement partner",
    "phoenix locksmith towing referral",
    "earn money locksmith referrals arizona",
  ],
  alternates: {
    canonical: "https://axletowing.com/partners/locksmiths",
  },
  openGraph: {
    title: "Locksmith Towing Partnership in Phoenix, AZ",
    description:
      "Earn referral commissions by partnering with Axle Towing. Turn every lock-out call into a revenue opportunity.",
    url: "https://axletowing.com/partners/locksmiths",
  },
};

export default function LocksmithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
