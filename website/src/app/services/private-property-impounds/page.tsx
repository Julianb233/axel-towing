import type { Metadata } from "next";
import { SERVICE_PAGES } from "@/lib/service-data";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

const data = SERVICE_PAGES["private-property-impounds"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://axletowing.com/services/private-property-impounds`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: `https://axletowing.com/services/private-property-impounds`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(
            data.faqs.map(f => ({ question: f.q, answer: f.a }))
          )),
        }}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
