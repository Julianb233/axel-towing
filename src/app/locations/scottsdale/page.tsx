import type { Metadata } from "next";
import { LOCATION_PAGES } from "@/lib/location-data";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const data = LOCATION_PAGES["scottsdale"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://axletowing.com/locations/scottsdale`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://axletowing.com/locations/scottsdale`,
  },
};

export default function Page() {
  return <LocationPageTemplate data={data} />;
}
