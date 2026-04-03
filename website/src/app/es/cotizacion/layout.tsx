import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solicitar Cotizacion Gratuita — Axle Towing & Impound",
  description:
    "Solicite una cotizacion gratuita para servicio de remolque y control de estacionamiento para su propiedad en Phoenix. Sin costo para propietarios.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/cotizacion`,
    languages: {
      en: `https://${COMPANY.domain}/get-quote`,
      es: `https://${COMPANY.domain}/es/cotizacion`,
    },
  },
  openGraph: {
    title: "Solicitar Cotizacion Gratuita — Axle Towing & Impound",
    description:
      "Solicite una evaluacion gratuita de estacionamiento para su propiedad en Phoenix.",
    url: `https://${COMPANY.domain}/es/cotizacion`,
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

export default function CotizacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
