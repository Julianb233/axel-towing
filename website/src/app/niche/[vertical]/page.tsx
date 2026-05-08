import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY } from "@/lib/constants";
import { NICHE_VERTICALS, NICHE_CITIES, fillCity } from "@/lib/niche-data";

interface Props {
  params: Promise<{ vertical: string }>;
}

export async function generateStaticParams() {
  return NICHE_VERTICALS.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical: slug } = await params;
  const vertical = NICHE_VERTICALS.find((v) => v.slug === slug);
  if (!vertical) return {};

  const title = `${vertical.title} in Phoenix Metro | ${COMPANY.name}`;
  const description = fillCity(vertical.metaDescTemplate, "Phoenix Metro");

  return {
    title,
    description,
    alternates: { canonical: `https://${COMPANY.domain}/niche/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://${COMPANY.domain}/niche/${slug}`,
      type: "website",
    },
  };
}

export default async function VerticalHubPage({ params }: Props) {
  const { vertical: slug } = await params;
  const vertical = NICHE_VERTICALS.find((v) => v.slug === slug);
  if (!vertical) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div
          className="parallax-bg"
          style={{ backgroundImage: `url(${vertical.heroImage})` }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(27,42,63,0.88) 0%, rgba(30,107,184,0.7) 100%)",
          }}
        />
        <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/90 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/niche" className="hover:text-white transition-colors">
              Specialty Services
            </Link>
            <span>/</span>
            <span className="text-white">{vertical.shortTitle}</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            {vertical.title}
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl leading-relaxed mb-8 reveal delay-200">
            {fillCity(vertical.heroSubtext, "Phoenix metro")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call Now: {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8 reveal">
            {vertical.title} Across Phoenix Metro
          </h2>
          <div className="space-y-5 text-body-text leading-relaxed text-lg">
            {vertical.intro.map((p, i) => (
              <p
                key={i}
                className="reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                {fillCity(p, "the Phoenix metro area")}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal"
            style={{ color: "#1a202c" }}
          >
            What&apos;s Included
          </h2>
          <p className="text-gray-700 text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Everything you need from a professional{" "}
            {vertical.shortTitle.toLowerCase()} partner.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vertical.features.map((feat, i) => (
              <div
                key={feat.title}
                className="glass-card rounded-2xl p-6 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3
                  className="font-heading text-lg font-bold mb-2"
                  style={{ color: "#1a202c" }}
                >
                  {feat.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {fillCity(feat.desc, "the Phoenix area")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Pages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 reveal">
            Find {vertical.shortTitle} in Your City
          </h2>
          <p className="text-body-text text-center text-lg mb-12 max-w-2xl mx-auto reveal delay-100">
            Select your city to see localized {vertical.shortTitle.toLowerCase()}{" "}
            information, coverage areas, and contact details.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NICHE_CITIES.map((c, i) => (
              <Link
                key={c.slug}
                href={`/niche/${vertical.slug}/${c.slug}`}
                className="group glass-card-white rounded-2xl p-6 border-glow-blue reveal"
                style={{ animationDelay: `${(i + 1) * 75}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {c.name}, AZ
                    </h3>
                    <p className="text-xs text-gray-500">
                      Pop. {c.population}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {vertical.shortTitle} services covering{" "}
                  {c.neighborhoods.slice(0, 3).join(", ")} and more.
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-cta transition-colors">
                  View Details
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: "url(/images/optimized/axle-towing-arizona-skyline-panoramic-phoenix-az.webp)",
          }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to set up a {vertical.shortTitle.toLowerCase()}{" "}
              partnership. Available 24/7 across the entire Phoenix metro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY.phone}`}
                className="btn-primary text-lg"
              >
                Call {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-secondary text-lg">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
