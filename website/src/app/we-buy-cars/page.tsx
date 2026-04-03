import { Metadata } from "next";
import WeBuyCarsContent from "./WeBuyCarsContent";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "We Buy Cars - Sell Your Vehicle in Arizona",
  description:
    "Sell your car to Axle Towing & Impound in the Phoenix metro area. We buy vehicles in any condition. Get a fair offer today.",
  alternates: {
    canonical: "https://axletowing.com/we-buy-cars",
  },
};

export default function WeBuyCarsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://axletowing.com" },
              { name: "We Buy Cars", url: "https://axletowing.com/we-buy-cars" },
            ])
          ),
        }}
      />
      <WeBuyCarsContent />
    </>
  );
}
