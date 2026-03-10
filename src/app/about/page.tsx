import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name} — Phoenix's trusted private property towing and parking enforcement company. Serving HOAs, apartments, and commercial properties since ${COMPANY.foundedYear}.`,
};

const VALUES = [
  {
    title: "Integrity",
    desc: "We operate with complete transparency. Every tow is documented, every process is compliant, and every interaction is professional.",
  },
  {
    title: "Reliability",
    desc: "When you call, we answer. Our 24/7 dispatch ensures your property is protected around the clock, 365 days a year.",
  },
  {
    title: "Professionalism",
    desc: "Our drivers are trained, certified, and courteous. We represent your property with the same care you would.",
  },
  {
    title: "Community",
    desc: "We are a Phoenix-based company serving Phoenix communities. Your success is our success.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-orange-400">{COMPANY.name}</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Since {COMPANY.foundedYear}, Axel Towing has been the trusted partner for
              property owners and managers across the Phoenix metro area. We
              specialize in private property impounds, parking enforcement, and
              vehicle relocations &mdash; all at zero cost to property owners.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Axel Towing was founded in {COMPANY.foundedYear} with a simple mission: to help
                  Phoenix property owners solve their unauthorized parking
                  problems without spending a dime. We saw property managers,
                  HOA board members, and commercial property owners struggling
                  with vehicles blocking fire lanes, taking reserved spaces, and
                  creating liability issues.
                </p>
                <p>
                  We built our business around providing professional,
                  compliant, and responsive towing services that protect
                  properties while treating all parties with respect. Our model
                  is straightforward: we install compliant signage, patrol your
                  property, and remove unauthorized vehicles &mdash; all funded
                  through legally mandated impound fees, not through charges to
                  property owners.
                </p>
                <p>
                  Today, we serve hundreds of properties across Phoenix,
                  Scottsdale, Mesa, Glendale, Gilbert, Chandler, Tempe, and
                  Apache Junction. Our team of experienced professionals and
                  modern fleet ensure fast response times and reliable service.
                </p>
              </div>
            </div>
            <div className="bg-navy-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy-900">5+</div>
                  <div className="text-sm text-gray-500 mt-1">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy-900">8+</div>
                  <div className="text-sm text-gray-500 mt-1">Cities Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy-900">24/7</div>
                  <div className="text-sm text-gray-500 mt-1">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy-900">$0</div>
                  <div className="text-sm text-gray-500 mt-1">Cost to Owners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything we do is guided by these principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
            Why Property Managers Choose Axel Towing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Zero Cost", desc: "Our services are completely free for property owners. We fund operations through legally mandated impound fees." },
              { title: "Full Compliance", desc: "We handle all ARS (Arizona Revised Statutes) requirements, including proper signage, documentation, and notification." },
              { title: "Property Manager Portal", desc: "Track tows, view reports, and manage your account through our online portal — available 24/7." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark />
    </>
  );
}
