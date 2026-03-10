import type { Metadata } from "next";
import { SERVICE_PAGES } from "@/lib/service-data";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const data = SERVICE_PAGES["private-property-impounds"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
  },
};

export default function PrivatePropertyImpoundsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({
            title: data.title,
            slug: data.slug,
            description: data.metaDescription,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://axletowing.com" },
            { name: "Services", url: "https://axletowing.com/services" },
            { name: data.title, url: `https://axletowing.com/services/${data.slug}` },
          ])),
        }}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
