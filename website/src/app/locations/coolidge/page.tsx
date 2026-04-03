import type { Metadata } from "next";
import { LOCATION_PAGES } from "@/lib/location-data";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const data = LOCATION_PAGES["coolidge"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://axletowing.com/locations/coolidge`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://axletowing.com/locations/coolidge`,
  },
};

export default function Page() {
  return <LocationPageTemplate data={data} />;
}
