import Link from "next/link";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

const TRUST_STATS = [
  { value: "5+", label: "Years in Business" },
  { value: "24/7", label: "Service Available" },
  { value: "8+", label: "Cities Served" },
  { value: "0", label: "Cost to Property Owners" },
];

const TESTIMONIALS = [
  {
    quote:
      "Axel Towing has been a game-changer for our apartment community. Unauthorized parking dropped by 90% within the first month.",
    name: "Sarah M.",
    role: "Property Manager, Phoenix",
  },
  {
    quote:
      "Professional, responsive, and their portal makes it so easy to manage everything. Best towing company we've worked with.",
    name: "James R.",
    role: "HOA Board President, Scottsdale",
  },
  {
    quote:
      "The fact that their service is free for property owners made the decision easy. Their team is always courteous and efficient.",
    name: "Linda K.",
    role: "Commercial Property Owner, Mesa",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-navy-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 text-orange-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse" />
              Serving the Greater Phoenix Metro Area
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Private Property Towing &amp;{" "}
              <span className="text-orange-400">Parking Enforcement</span>{" "}
              You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your property from unauthorized parking &mdash; at{" "}
              <strong className="text-white">absolutely no cost to you</strong>.
              Axel Towing provides professional impound, enforcement, and vehicle
              relocation services across Phoenix, Scottsdale, Mesa, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold px-8 py-4 rounded-lg transition-colors text-lg text-center"
              >
                Get a Free Quote
              </a>
              <Link
                href="/services"
                className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-navy-900">
                  {stat.value === "0" ? "$0" : stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive private property towing solutions tailored for HOAs,
              apartment complexes, and commercial properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Getting started with Axel Towing is simple and completely free for
              property owners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                desc: "Reach out for a free consultation. We will assess your property's needs and design a custom towing program.",
              },
              {
                step: "2",
                title: "We Set Up Signage",
                desc: "We install compliant towing signage on your property at no cost, ensuring legal authorization for enforcement.",
              },
              {
                step: "3",
                title: "We Handle Everything",
                desc: "Our team patrols and enforces your parking rules 24/7. Unauthorized vehicles are removed quickly and professionally.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-navy-950 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Property Managers Across Phoenix
            </h2>
            <p className="text-gray-400 text-lg">
              See what our clients have to say about our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-navy-900 rounded-xl p-6 border border-navy-800"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Serving the Greater Phoenix Area
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide towing and parking enforcement services throughout the
              Phoenix metro, including these communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={
                  area.slug === "phoenix" ||
                  area.slug === "scottsdale" ||
                  area.slug === "mesa"
                    ? `/locations/${area.slug}`
                    : "/#locations"
                }
                className="bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl p-4 text-center transition-all group"
              >
                <div className="text-lg font-bold text-navy-900 group-hover:text-orange-600 transition-colors">
                  {area.name}
                </div>
                <div className="text-sm text-gray-500">Arizona</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
