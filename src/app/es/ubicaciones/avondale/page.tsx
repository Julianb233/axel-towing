import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { SPANISH_LOCATION_PAGES } from "@/lib/spanish-location-data";
import SpanishLocationPageTemplate from "@/components/SpanishLocationPageTemplate";

const data = SPANISH_LOCATION_PAGES["avondale"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://${COMPANY.domain}/es/ubicaciones/avondale`,
    languages: {
      en: `https://${COMPANY.domain}/locations/avondale`,
      es: `https://${COMPANY.domain}/es/ubicaciones/avondale`,
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
