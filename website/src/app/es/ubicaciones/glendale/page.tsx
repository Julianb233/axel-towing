import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { SPANISH_LOCATION_PAGES } from "@/lib/spanish-location-data";
import SpanishLocationPageTemplate from "@/components/SpanishLocationPageTemplate";

const data = SPANISH_LOCATION_PAGES["glendale"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://${COMPANY.domain}/es/ubicaciones/glendale`,
    languages: {
      en: `https://${COMPANY.domain}/locations/glendale`,
      es: `https://${COMPANY.domain}/es/ubicaciones/glendale`,
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
