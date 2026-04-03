import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — Remolque de Propiedad Privada en Phoenix",
  description:
    "Respuestas a preguntas frecuentes sobre remolque de propiedad privada, costos, leyes de Arizona y como funciona el control de estacionamiento gratuito de Axle Towing.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/preguntas-frecuentes`,
    languages: {
      en: `https://${COMPANY.domain}/faq`,
      es: `https://${COMPANY.domain}/es/preguntas-frecuentes`,
    },
  },
  openGraph: {
    title: "Preguntas Frecuentes — Axle Towing & Impound",
    description:
      "Respuestas a preguntas frecuentes sobre remolque de propiedad privada y control de estacionamiento en Phoenix.",
    url: `https://${COMPANY.domain}/es/preguntas-frecuentes`,
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

export default function PreguntasFrecuentesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
