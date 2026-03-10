import type { Metadata } from "next";
import { SERVICE_PAGES } from "@/lib/service-data";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const data = SERVICE_PAGES["vehicle-relocations"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
  },
};

export default function VehicleRelocationsPage() {
  return <ServicePageTemplate data={data} />;
}
