import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto — Evaluacion Gratuita de Propiedad",
  description:
    "Contacte a Axle Towing & Impound para remolque gratuito de propiedad privada y control de estacionamiento en el area de Phoenix. Llame al 480-288-5526.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/contacto`,
    languages: {
      en: `https://${COMPANY.domain}/contact`,
      es: `https://${COMPANY.domain}/es/contacto`,
    },
  },
  openGraph: {
    title: "Contacto — Axle Towing & Impound",
    description:
      "Contacte a Axle Towing & Impound para servicio gratuito de remolque y control de estacionamiento en Phoenix.",
    url: `https://${COMPANY.domain}/es/contacto`,
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
