import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for Phoenix Properties",
  description:
    "See how Axle Towing & Impound helped Phoenix apartment complexes, HOAs, and retail centers reduce parking violations by up to 92% — at zero cost to property owners.",
  keywords: [
    "towing case studies Phoenix",
    "parking enforcement results",
    "apartment towing success stories",
    "HOA parking solutions",
    "commercial parking enforcement",
    "property management towing Phoenix",
  ],
  openGraph: {
    title: "Case Studies — Real Results for Phoenix Properties",
    description:
      "See how Axle Towing helped Phoenix properties reduce parking violations by up to 92% at zero cost.",
    type: "website",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
