import { Metadata } from "next";
import AboutContent from "./AboutContent";
import { organizationSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us - Professional Towing Since 2021",
  description:
    "Learn about Axle Towing & Impound, a family-owned Arizona towing company providing free private property towing, parking enforcement, and impound services across the Phoenix metro area since 2021.",
  alternates: {
    canonical: "https://axletowing.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "About", url: "https://axletowing.com/about" },
            ])
          ),
        }}
      />
      <AboutContent />
    </>
  );
}
