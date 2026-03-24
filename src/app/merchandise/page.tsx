import { Metadata } from "next";
import MerchandiseContent from "./MerchandiseContent";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Branded Merchandise & Corporate Gifting — Axle Towing",
  description:
    "Order Axle Towing branded merchandise for corporate gifting and HOA partner appreciation. Apparel, keychains, car accessories, and office items. Bulk discounts available via Printful & Printify.",
  alternates: {
    canonical: "https://axletowing.com/merchandise",
  },
  openGraph: {
    title: "Branded Merchandise & Corporate Gifting — Axle Towing",
    description:
      "Premium co-branded merchandise for HOA clients and property management partners. T-shirts, hats, keychains, car accessories, and more.",
    url: "https://axletowing.com/merchandise",
    type: "website",
  },
};

export default function MerchandisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "Merchandise & Corporate Gifting", url: "https://axletowing.com/merchandise" },
            ])
          ),
        }}
      />
      <MerchandiseContent />
    </>
  );
}
