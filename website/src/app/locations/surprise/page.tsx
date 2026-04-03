import type { Metadata } from "next";
import { LOCATION_PAGES } from "@/lib/location-data";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const data = LOCATION_PAGES["surprise"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://axletowing.com/locations/surprise`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://axletowing.com/locations/surprise`,
  },
};

export default function Page() {
  return <LocationPageTemplate data={data} />;
}
