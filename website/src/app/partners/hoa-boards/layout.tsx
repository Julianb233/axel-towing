import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOA Board Towing Programs in Phoenix, AZ",
  description:
    "Customized towing programs for HOA boards in Phoenix, Arizona. Free parking enforcement, board-approved signage, resident communication support, and transparent reporting.",
  keywords: [
    "HOA towing program arizona",
    "HOA parking enforcement phoenix",
    "homeowner association towing",
    "HOA board towing partner",
    "community parking enforcement program",
    "HOA parking violation enforcement",
  ],
  alternates: {
    canonical: "https://axletowing.com/partners/hoa-boards",
  },
  openGraph: {
    title: "HOA Board Towing Programs in Phoenix, AZ",
    description:
      "Customized parking enforcement for HOA communities. Free signage, resident communication support, and monthly board reports.",
    url: "https://axletowing.com/partners/hoa-boards",
  },
};

export default function HOABoardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
