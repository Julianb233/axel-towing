import { Metadata } from "next";
import CareersContent from "./CareersContent";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Careers - Join the Axle Towing Team",
  description:
    "Join Axle Towing & Impound. We're hiring tow truck operators and dispatchers in the Phoenix metro area. Competitive pay, benefits, and growth opportunities.",
  alternates: {
    canonical: "https://axletowing.com/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "Careers", url: "https://axletowing.com/careers" },
            ])
          ),
        }}
      />
      <CareersContent />
    </>
  );
}
