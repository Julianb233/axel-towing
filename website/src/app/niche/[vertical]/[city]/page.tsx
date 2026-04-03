import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPANY } from "@/lib/constants";
import {
  NICHE_VERTICALS,
  NICHE_CITIES,
  fillCity,
} from "@/lib/niche-data";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import NichePageTemplate from "@/components/NichePageTemplate";

interface Props {
  params: Promise<{ vertical: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { vertical: string; city: string }[] = [];
  for (const v of NICHE_VERTICALS) {
    for (const c of NICHE_CITIES) {
      params.push({ vertical: v.slug, city: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical: vSlug, city: cSlug } = await params;
  const vertical = NICHE_VERTICALS.find((v) => v.slug === vSlug);
  const city = NICHE_CITIES.find((c) => c.slug === cSlug);
  if (!vertical || !city) return {};

  const title = fillCity(vertical.metaTitleTemplate, city.name);
  const description = fillCity(vertical.metaDescTemplate, city.name);
  const url = `https://${COMPANY.domain}/niche/${vSlug}/${cSlug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
      "max-video-preview": -1,
    },
  };
}

export default async function NicheCityPage({ params }: Props) {
  const { vertical: vSlug, city: cSlug } = await params;
  const vertical = NICHE_VERTICALS.find((v) => v.slug === vSlug);
  const city = NICHE_CITIES.find((c) => c.slug === cSlug);
  if (!vertical || !city) notFound();

  const BASE_URL = `https://${COMPANY.domain}`;

  const faqs = vertical.faqs.map((faq) => ({
    question: fillCity(faq.q, city.name),
    answer: fillCity(faq.a, city.name),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              title: fillCity(vertical.title, city.name),
              slug: `niche/${vertical.slug}/${city.slug}`,
              description: fillCity(vertical.metaDescTemplate, city.name),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BASE_URL },
              { name: "Specialty Services", url: `${BASE_URL}/niche` },
              {
                name: vertical.shortTitle,
                url: `${BASE_URL}/niche/${vertical.slug}`,
              },
              {
                name: city.name,
                url: `${BASE_URL}/niche/${vertical.slug}/${city.slug}`,
              },
            ])
          ),
        }}
      />
      <NichePageTemplate vertical={vertical} city={city} />
    </>
  );
}
