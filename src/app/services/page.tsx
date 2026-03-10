import type { Metadata } from "next";
import { COMPANY, SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description: `${COMPANY.name} offers private property impounds, parking enforcement, vehicle relocations, HOA towing, apartment towing, and commercial property towing across Phoenix, AZ.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From private property impounds to parking enforcement and vehicle
              relocations, Axel Towing provides comprehensive towing solutions
              for every type of property &mdash; all at no cost to property owners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            Why Choose Axel Towing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "No Cost to You", desc: "All services are free for property owners and managers." },
              { title: "ARS Compliant", desc: "Full compliance with Arizona towing laws and regulations." },
              { title: "24/7 Availability", desc: "Round-the-clock dispatch and patrol services." },
              { title: "Fast Response", desc: "Quick response times across the entire Phoenix metro." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
