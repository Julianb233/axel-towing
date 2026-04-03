import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { SPANISH_LOCATION_PAGES } from "@/lib/spanish-location-data";
import SpanishLocationPageTemplate from "@/components/SpanishLocationPageTemplate";

const data = SPANISH_LOCATION_PAGES["tolleson"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://${COMPANY.domain}/es/ubicaciones/tolleson`,
    languages: {
      en: `https://${COMPANY.domain}/locations/tolleson`,
      es: `https://${COMPANY.domain}/es/ubicaciones/tolleson`,
    },
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

export default function Page() {
  return <SpanishLocationPageTemplate data={data} />;
}
