import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import type { ServicePageData } from "@/lib/service-data";
import CTASection from "./CTASection";

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center text-sm text-gray-400 hover:text-orange-400 mb-4 transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {data.heroHeadline.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-orange-400">
                {data.heroHeadline.split(" ").slice(-1)}
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.heroSubtext}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${COMPANY.phone}`}
                className="bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold px-8 py-3 rounded-lg transition-colors text-center"
              >
                Call Now: {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-3 rounded-lg transition-colors text-center"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            {data.introTitle}
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            {data.introText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {data.faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        dark
        headline={`Ready to Get Started?`}
        subtext={`Contact us today for a free consultation. Our ${data.title.toLowerCase()} services are completely free for ${data.targetAudience}.`}
      />
    </>
  );
}
