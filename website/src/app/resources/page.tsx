import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Resources for Property Managers & HOAs",
  description:
    "Download free parking policy templates, HOA enforcement checklists, and property manager guides for Arizona towing laws. Expert resources from Axle Towing & Impound.",
  alternates: {
    canonical: `https://${COMPANY.domain}/resources`,
  },
};

const RESOURCES = [
  {
    title: "Parking Policy Template",
    subtitle: "For Arizona Properties",
    desc: "A comprehensive, ready-to-use parking policy template that covers all Arizona legal requirements. Customize it for your HOA, apartment complex, or commercial property.",
    href: "/resources/parking-policy-template",
    badge: "Most Popular",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "HOA Parking Enforcement Checklist",
    subtitle: "20-Item Compliance Checklist",
    desc: "A step-by-step checklist covering everything from signage requirements to towing authorization procedures. Used by 500+ Arizona HOA communities.",
    href: "/resources/hoa-enforcement-checklist",
    badge: "HOA Essential",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
  },
  {
    title: "Property Manager's Guide to Arizona Towing Laws",
    subtitle: "Complete Legal Reference",
    desc: "An in-depth guide covering ARS 28-3511, signage requirements, notification procedures, liability protection, and best practices for property managers in Arizona.",
    href: "/resources/property-manager-guide",
    badge: "Comprehensive",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="parallax-fixed relative min-h-[60vh] flex items-center"
        style={{ backgroundImage: `url(/images/optimized/axle-towing-blog-fire-lane-enforcement-phoenix-az.webp)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Resources</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            Free <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed reveal delay-200">
            Download free templates, checklists, and guides to help you manage parking enforcement at your Arizona property &mdash; created by the experts at {COMPANY.name}.
          </p>
        </div>
      </section>

      {/* ===== RESOURCES GRID ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Free Downloads</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3 mb-4 font-heading">
              Expert Resources for Property Managers
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-primary to-cta rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to set up and manage a professional parking enforcement program at your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCES.map((resource, i) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group glass-card-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 reveal"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Preview Image Area */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-primary opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transform transition-transform duration-500">
                    {resource.icon}
                    <div className="w-24 h-24 flex items-center justify-center">
                      {resource.icon}
                    </div>
                  </div>
                  <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full border ${resource.badgeColor}`}>
                    {resource.badge}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">{resource.subtitle}</p>
                  <h3 className="text-xl font-bold text-blue-950 mb-3 font-heading group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {resource.desc}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Download Free
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY DOWNLOAD ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 font-heading">
              Why Our Resources?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Created by Arizona towing and parking enforcement experts with years of hands-on experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Arizona-Specific", desc: "Every template and guide is tailored specifically for Arizona state laws, ARS requirements, and local regulations.", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
              { title: "Expert-Created", desc: "Written by professionals with 25+ years of combined experience in private property towing and parking enforcement.", icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" },
              { title: "Always Free", desc: "No strings attached. Download our resources at no cost and start improving your parking management today.", icon: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" },
            ].map((item, i) => (
              <div key={item.title} className={`reveal glass-card-white rounded-2xl p-8 text-center shadow-md delay-${(i + 1) * 100}`}>
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5 border-glow-blue">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-heading">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/arizona-skyline-panoramic.jpg" alt="Phoenix Arizona skyline" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)" }} />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 reveal">
            Need a Custom Parking Program?
          </h2>
          <p className="text-white/95 text-lg mb-10 max-w-2xl mx-auto reveal delay-100">
            Our free resources are a great start, but nothing beats a personalized parking enforcement program. Contact us for a free property assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-200">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary text-lg">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
