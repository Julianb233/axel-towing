import type { Metadata } from "next";
import { SERVICE_PAGES } from "@/lib/service-data";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

const data = SERVICE_PAGES["commercial-property-managers"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: `https://axletowing.com/audiences/${data.slug}`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    images: [{ url: "https://axletowing.com/images/seo/audiences-commercial-property-managers.webp", width: 1200, height: 630, alt: "Professional tow truck at a Phoenix commercial office park - Axle Towing commercial services" }],
    url: `https://axletowing.com/audiences/${data.slug}`,
  },
};

export default function CommercialPropertyManagersAudiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({
            title: data.title,
            slug: data.slug,
            description: data.metaDescription,
            pathPrefix: "audiences",
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://axletowing.com" },
            { name: "Audiences", url: "https://axletowing.com/audiences" },
            { name: data.title, url: `https://axletowing.com/audiences/${data.slug}` },
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": data.metaTitle,
            "description": data.metaDescription,
            "image": "https://axletowing.com/images/seo/audiences-commercial-property-managers.webp",
            "dateModified": "2026-05-15T00:00:00.000Z",
            "author": {
              "@type": "Organization",
              "name": "Axle Towing & Impound",
              "url": "https://axletowing.com",
              "knowsAbout": ["Arizona private property towing", "ARS 28-3511", "HOA parking enforcement", "Property management"],
              "areaServed": "Phoenix metro, Arizona",
            },
            "reviewedBy": {
              "@type": "Organization",
              "name": "Axle Towing Operations Team",
              "description": "ARS-compliant private property towing operators serving the Phoenix metro since 2021",
            },
          })
        }}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
