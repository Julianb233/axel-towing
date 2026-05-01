import type { Metadata } from "next";
import Link from "next/link";
import { CITY_SEO_DATA } from "@/lib/city-seo-data";
import { COMPANY } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

const CITIES_IN_LAUNCH_ORDER: string[] = [
  "phoenix",
  "mesa",
  "chandler",
  "tempe",
  "gilbert",
  "scottsdale",
  "glendale",
  "peoria",
  "surprise",
  "goodyear",
  "avondale",
  "queen-creek",
];

export const metadata: Metadata = {
  title:
    "Private Property Towing in Phoenix, AZ — Free Service for Property Managers | Axle Towing",
  description:
    "Free private property towing for Phoenix-metro property managers, HOAs, apartments, and commercial properties. 24/7 dispatch. <30 min response. ARS-compliant signage. No fees, no contracts, no minimums.",
  alternates: {
    canonical: `https://${COMPANY.domain}/private-property-towing`,
  },
  openGraph: {
    title:
      "Private Property Towing — Free for Phoenix-Metro Property Owners | Axle Towing",
    description:
      "Free private property towing across the Phoenix metro. 24/7 dispatch, ARS-compliant signage included, no monthly fees.",
    url: `https://${COMPANY.domain}/private-property-towing`,
  },
};

export default function PrivatePropertyTowingHubPage() {
  return (
    <>
      <section
        className="parallax-container min-h-[45vh] flex items-center relative"
      >
        <div
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/contact-phoenix.jpg)` }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(27,42,63,0.88) 0%, rgba(220,38,38,0.55) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Private Property Towing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Private Property Towing — <span className="text-gradient">Free for Phoenix-Metro Property Owners</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Axle Towing &amp; Impound provides free private property towing for
            apartment communities, HOAs, and commercial properties across the Phoenix
            metro. ARS-compliant signage installed at no cost. 24/7 dispatch. Sub-30
            minute response. No fees, no contracts, no minimums.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call dispatch — {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request free site walk
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Choose Your City
          </h2>
          <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto">
            City-specific service pages with response times, neighborhoods, ZIP
            coverage, and answers to the questions {`{city}`} property managers ask.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES_IN_LAUNCH_ORDER.map((slug) => {
              const c = CITY_SEO_DATA[slug];
              if (!c) return null;
              return (
                <Link
                  key={slug}
                  href={`/private-property-towing/${slug}`}
                  className="block rounded-2xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-white transition-colors p-6"
                >
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                    {c.responseTime} • {c.nearestYard} dispatch
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-2">
                    Private Property Towing in {c.name}, AZ
                  </div>
                  <div className="text-sm text-gray-700">
                    {c.hoaCount} HOAs • {c.apartmentCount} apartment units • {c.commercialPropertyCount} commercial properties
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
