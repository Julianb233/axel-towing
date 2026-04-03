import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ubicar Mi Vehiculo — Axle Towing & Impound",
  description:
    "Localice su vehiculo remolcado por Axle Towing & Impound. Informacion de contacto y pasos para recuperar su vehiculo en Phoenix, AZ.",
  alternates: {
    canonical: `https://${COMPANY.domain}/es/ubicar-vehiculo`,
    languages: {
      en: `https://${COMPANY.domain}/locate-vehicle`,
      es: `https://${COMPANY.domain}/es/ubicar-vehiculo`,
    },
  },
  openGraph: {
    title: "Ubicar Mi Vehiculo — Axle Towing & Impound",
    description:
      "Localice su vehiculo remolcado en Phoenix, AZ.",
    url: `https://${COMPANY.domain}/es/ubicar-vehiculo`,
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

export default function UbicarVehiculoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
