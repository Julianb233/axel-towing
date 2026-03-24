import { Metadata } from "next";
import GetQuoteContent from "./GetQuoteContent";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get a Free Quote - Parking Enforcement Assessment",
  description:
    "Request a free property assessment and parking enforcement quote from Axle Towing & Impound. Zero cost for property owners in the Phoenix metro area.",
  alternates: {
    canonical: "https://axletowing.com/get-quote",
    languages: {
      en: "https://axletowing.com/get-quote",
      es: "https://axletowing.com/es/cotizacion",
    },
  },
};

export default function GetQuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "Get a Free Quote", url: "https://axletowing.com/get-quote" },
            ])
          ),
        }}
      />
      <GetQuoteContent />
    </>
  );
}
