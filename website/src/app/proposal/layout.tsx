import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Proposal — Axle Towing & Impound",
  description: "Custom SEO and digital marketing proposal for Axle Towing & Impound. Dominate Phoenix metro search results.",
  robots: { index: false, follow: false },
};

export default function ProposalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
