import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Management Towing Solutions in Phoenix, AZ",
  description:
    "Free parking enforcement and towing for property managers in Phoenix. Digital portal, ARS-compliant signage, 30-minute response, and dedicated account management.",
  keywords: [
    "property management towing solutions phoenix",
    "property manager parking enforcement",
    "free towing property managers arizona",
    "private property impound management",
    "parking enforcement digital portal",
    "property management towing partner phoenix",
  ],
  alternates: {
    canonical: "https://axletowing.com/partners/property-managers",
  },
  openGraph: {
    title: "Property Management Towing Solutions in Phoenix, AZ",
    description:
      "Eliminate unauthorized parking across your portfolio at zero cost. Digital portal, ARS-compliant signage, and 30-minute response guarantee.",
    url: "https://axletowing.com/partners/property-managers",
  },
};

export default function PropertyManagersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
