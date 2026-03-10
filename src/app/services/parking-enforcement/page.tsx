import type { Metadata } from "next";
import { SERVICE_PAGES } from "@/lib/service-data";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const data = SERVICE_PAGES["parking-enforcement"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
  },
};

export default function ParkingEnforcementPage() {
  return <ServicePageTemplate data={data} />;
}
