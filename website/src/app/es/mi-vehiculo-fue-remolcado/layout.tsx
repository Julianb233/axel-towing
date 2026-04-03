import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mi Vehiculo Fue Remolcado — Como Recuperarlo",
  description:
    "Pasos para recuperar su vehiculo remolcado en Phoenix. Informacion sobre documentos necesarios, costos y horarios de atencion de Axle Towing & Impound.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/mi-vehiculo-fue-remolcado`,
    languages: {
      en: `https://${COMPANY.domain}/locate-vehicle`,
      es: `https://${COMPANY.domain}/es/mi-vehiculo-fue-remolcado`,
    },
  },
  openGraph: {
    title: "Mi Vehiculo Fue Remolcado — Axle Towing & Impound",
    description:
      "Pasos para recuperar su vehiculo remolcado en Phoenix, AZ.",
    url: `https://${COMPANY.domain}/es/mi-vehiculo-fue-remolcado`,
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

export default function MiVehiculoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
