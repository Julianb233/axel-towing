import { Metadata } from "next";
import AboutContent from "./AboutContent";
import { organizationSchema, towingServiceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Axle Towing & Impound - Phoenix Private Property Towing Experts",
  description:
    "Axle Towing & Impound is a Phoenix-based towing company founded in 2021, specializing in free private property towing, parking enforcement, and impound services for property managers across the Phoenix metro area. Two impound yards, 24/7 dispatch, sub-30-minute response.",
  alternates: {
    canonical: "https://axletowing.com/about",
    languages: {
      en: "https://axletowing.com/about",
      es: "https://axletowing.com/es/nosotros",
    },
  },
  openGraph: {
    title: "About Axle Towing & Impound - Phoenix Private Property Towing Experts",
    description:
      "Axle Towing & Impound is a Phoenix-based towing company founded in 2021, specializing in free private property towing, parking enforcement, and impound services for property managers across the Phoenix metro area. Two impound yards, 24/7 dispatch, sub-30-minute response.",
    url: "https://axletowing.com/about",
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
          __html: JSON.stringify(towingServiceSchema()),
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
