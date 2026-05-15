import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Who We Serve — HOAs, Apartments, Commercial | Axle Towing Phoenix",
  description:
    "Axle Towing builds tailored parking enforcement programs for HOA boards, apartment property managers, and commercial property owners across the Phoenix metro. Zero cost to the property.",
  alternates: {
    canonical: "https://axletowing.com/audiences",
  },
  openGraph: {
    title: "Who We Serve — HOAs, Apartments, Commercial | Axle Towing Phoenix",
    description:
      "Tailored towing and parking enforcement programs for HOA boards, apartment property managers, and commercial property owners across the Phoenix metro.",
    url: "https://axletowing.com/audiences",
    images: [{ url: "https://axletowing.com/images/seo/audiences-hoa.webp", width: 1200, height: 630, alt: "Axle Towing serves Phoenix metro HOAs, apartments, and commercial properties" }],
  },
};

const AUDIENCES = [
  {
    slug: "hoa",
    title: "HOA Boards & Community Managers",
    desc: "Annual board presentations, CC&R-aligned enforcement, monthly reports for board meetings, and continuity through every board transition.",
    bullets: [
      "Annual presentation to incoming board members",
      "CC&R-aligned enforcement matrix",
      "Monthly written report ready for board packets",
      "One point of contact for property management companies",
    ],
    image: "/images/arizona-hoa-entrance.jpg",
  },
  {
    slug: "apartment-complexes",
    title: "Apartment Property Managers",
    desc: "Assigned-space verification, visitor permit systems, abandoned vehicle removal, and a property manager portal that turns tow requests into a 60-second task.",
    bullets: [
      "Assigned space verification against master roster",
      "Visitor permits with time limits",
      "ARS-compliant abandoned vehicle pipeline",
      "Manager portal: request tow, view evidence, pull reports",
    ],
    image: "/images/arizona-apartment-parking.jpg",
  },
  {
    slug: "commercial-property-managers",
    title: "Commercial Property Owners",
    desc: "Retail, office, strip mall, medical, and industrial parking enforcement. Tenant-friendly customer parking, strict fire-lane/ADA/loading-zone enforcement, multi-tenant coordination.",
    bullets: [
      "Multi-tenant coordination and sign-off",
      "Customer-first, warning-first enforcement",
      "24/7 enforcement of fire lane, ADA, loading zones",
      "Employee permit systems to free customer spaces",
    ],
    image: "/images/arizona-commercial-parking.jpg",
  },
];

export default function AudiencesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://axletowing.com" },
            { name: "Audiences", url: "https://axletowing.com/audiences" },
          ])),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary to-cta">
        <div className="absolute inset-0 grain-overlay z-[1]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/90 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Audiences</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Who We Serve
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed reveal delay-200">
            Axle Towing builds tailored parking enforcement programs for three core audiences. Pick the one that fits and we'll show you exactly how the program runs for your community or property.
          </p>
        </div>
      </section>

      {/* ===== AUDIENCE CARDS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {AUDIENCES.map((a, i) => (
              <Link
                key={a.slug}
                href={`/audiences/${a.slug}`}
                className={`group flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-stretch gap-8 md:gap-12 reveal`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex-1 glass-card-white rounded-2xl p-8 md:p-10">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {a.title}
                  </h2>
                  <p className="text-body-text text-lg leading-relaxed mb-6">{a.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {a.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-body-text">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-cta transition-colors">
                    See the {a.title.split(" ")[0]} program
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 hidden md:block">
                  <div
                    className="w-full h-full rounded-2xl bg-cover bg-center min-h-[260px]"
                    style={{ backgroundImage: `url(${a.image})` }}
                    aria-hidden
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESOURCES CTA ===== */}
      <section className="py-16 bg-blue-50/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Need the Resources Before You Pick Up the Phone?
          </h2>
          <p className="text-body-text text-lg mb-8 max-w-2xl mx-auto">
            Our Property Manager Towing Hub has guides, templates, checklists, and the Arizona statutes — built for board members, property managers, and HOA volunteers.
          </p>
          <Link
            href="/resources/property-manager-towing-hub"
            className="btn-primary inline-flex items-center"
          >
            Open the Property Manager Towing Hub
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-16 bg-gradient-to-br from-primary to-cta text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to See Your Audience-Specific Program?
          </h2>
          <p className="text-white/95 text-lg mb-8">
            Call Axle Towing for a free walk-through tailored to your property type. Zero cost to property owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-bold text-base border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
            >
              Request Free Walk-Through
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
