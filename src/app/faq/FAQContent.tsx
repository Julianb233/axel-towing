"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

/* ── Parallax Hook ── */
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return ref;
}

const PROPERTY_OWNER_FAQS = [
  {
    q: "How much does your towing service cost?",
    a: "Absolutely nothing. Our private property towing and parking enforcement services are 100% free for property owners and managers. All costs are covered through legally mandated impound and storage fees paid by the vehicle owner upon retrieval. There are no hidden fees, no monthly retainers, and no setup costs.",
  },
  {
    q: "How do I get started with parking enforcement?",
    a: "Getting started is simple. Call us or fill out our contact form for a free property assessment. We\u2019ll visit your property, evaluate your parking situation, recommend compliant signage placement, and set up your customized enforcement program \u2014 usually within 48 hours.",
  },
  {
    q: "What signage do you provide?",
    a: "We provide all required towing authorization signage at no cost to you. Our signs meet all Arizona Revised Statutes (ARS) requirements for size, content, placement, and visibility. We handle the design, production, and professional installation.",
  },
  {
    q: "How quickly can you respond to a call?",
    a: "Our average response time is under 30 minutes across the Phoenix metro area. With two strategically located yards \u2014 in Apache Junction and Phoenix \u2014 we can reach most properties quickly. For contracted properties, we aim for even faster response times.",
  },
  {
    q: "Do you offer 24/7 service?",
    a: "Yes! Our dispatch and towing operations are available 24 hours a day, 7 days a week, 365 days a year. Our office hours for vehicle retrieval are Mon\u2013Fri 9am\u20135pm and Saturday by appointment, but our towing crews are always on call.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the entire Phoenix metro area including Phoenix, Scottsdale, Mesa, Glendale, Gilbert, Chandler, Tempe, and Apache Junction. If your property is in the greater Phoenix area, chances are we can help.",
  },
  {
    q: "How does the property manager portal work?",
    a: "Our digital portal gives you real-time access to tow requests, activity logs, reports, and vehicle status updates. You can submit tow requests online, track active tows, and download reports for your records. It\u2019s accessible from any device with a web browser.",
  },
  {
    q: "What types of properties do you serve?",
    a: "We serve apartment complexes, HOA communities, condominiums, commercial properties, retail centers, office parks, shopping plazas, medical facilities, churches, and private parking lots. If you have a parking challenge, we have a solution.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. We offer flexible agreements with no long-term commitments required. We believe in earning your business through excellent service, not locking you into contracts. You can adjust or cancel your program at any time.",
  },
  {
    q: "What happens when you tow a vehicle from my property?",
    a: "When we tow a vehicle, we document the violation with timestamped photos, record the vehicle\u2019s condition, and transport it to our secure impound yard. The vehicle owner is notified per Arizona law, and you receive a digital record of the tow for your files.",
  },
  {
    q: "How do residents/tenants retrieve their vehicle?",
    a: "Vehicle owners can retrieve their car by visiting our impound yard during office hours with valid photo ID, vehicle registration or proof of ownership, and payment for applicable fees. We accept cash, credit cards, and debit cards.",
  },
  {
    q: "Can you handle fire lane and handicap violations?",
    a: "Yes. We enforce fire lane, handicap zone, and other safety-critical violations. These tows are prioritized due to their impact on safety and ADA compliance. We work closely with property managers to ensure these zones are properly marked and enforced.",
  },
  {
    q: "Do you provide documentation and reports?",
    a: "Absolutely. Every tow is documented with photos, timestamps, location data, and violation details. Property managers receive digital reports and can access historical data through our portal. This documentation also protects you in the event of a dispute.",
  },
  {
    q: "What if a tenant disputes a tow?",
    a: "All of our tows are thoroughly documented with photographic evidence and compliance records. If a dispute arises, we provide complete documentation to support the tow\u2019s legality. Our process is designed to be transparent and legally defensible.",
  },
  {
    q: "How do you handle visitor and guest parking?",
    a: "We work with you to establish clear visitor parking policies. This can include designated visitor zones, temporary parking permits, or grace period protocols. Our goal is to enforce parking rules while accommodating legitimate guests.",
  },
];

const VEHICLE_OWNER_FAQS = [
  {
    q: "My car was towed \u2014 how do I get it back?",
    a: `Contact us at ${COMPANY.phone} or visit one of our impound yards during office hours. You\u2019ll need to bring valid photo ID, vehicle registration or title, and payment for applicable fees. We\u2019ll walk you through the process and have you on your way as quickly as possible.`,
  },
  {
    q: "What do I need to bring to retrieve my vehicle?",
    a: "You\u2019ll need: (1) a valid government-issued photo ID, (2) current vehicle registration or title proving ownership, and (3) payment for impound and storage fees. If you\u2019re picking up on behalf of the registered owner, you\u2019ll need a notarized authorization letter.",
  },
  {
    q: "What are the storage fees?",
    a: "Storage fees are set in accordance with Arizona state regulations and accrue daily. The exact amount depends on the vehicle type and duration of storage. Contact us for current rates. Fees can be paid by cash, credit card, or debit card.",
  },
  {
    q: "Can I get my personal belongings from the vehicle?",
    a: "Yes. Arizona law allows you to retrieve personal belongings from an impounded vehicle during business hours. You\u2019ll need to show valid photo ID. There is no charge to retrieve personal items. Contact us to schedule a time.",
  },
  {
    q: "What are your office hours for vehicle pickup?",
    a: `Our office hours are ${COMPANY.hours.weekday}, ${COMPANY.hours.saturday}, and ${COMPANY.hours.sunday}. Vehicle retrieval is available during these hours at both our Apache Junction and Phoenix locations. For emergencies, call ${COMPANY.phone}.`,
  },
  {
    q: "What if I was parked in a visitor spot?",
    a: "Visitor parking policies vary by property. If you believe you were parked in an authorized visitor area, contact us with your details and we\u2019ll review the tow documentation and the property\u2019s visitor parking policy. If the tow was made in error, we\u2019ll work to resolve it.",
  },
];

export default function FAQContent() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Everything you need to know about our towing and parking
              enforcement services &mdash; whether you&rsquo;re a property owner or a
              vehicle owner.
            </p>
          </div>
        </div>
      </section>

      {/* ── Property Owner FAQs ── */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              For Property Owners &amp; Managers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Property Owner Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn how our free parking enforcement program works for your property.
            </p>
          </div>
          <div className="space-y-3">
            {PROPERTY_OWNER_FAQS.map((faq, i) => (
              <details
                key={i}
                className="reveal glass-card-white rounded-2xl shadow-sm group"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 md:px-8 md:py-6 list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-bold text-blue-900 font-heading text-lg pr-4">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 bg-blue-50 text-primary rounded-lg flex items-center justify-center border border-blue-200 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vehicle Owner FAQs ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-red-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m4.5 0V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125" />
              </svg>
              For Vehicle Owners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Vehicle Owner Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Information about retrieving your vehicle and understanding the impound process.
            </p>
          </div>
          <div className="space-y-3">
            {VEHICLE_OWNER_FAQS.map((faq, i) => (
              <details
                key={i}
                className="reveal glass-card-white rounded-2xl shadow-sm group"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 md:px-8 md:py-6 list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-bold text-blue-900 font-heading text-lg pr-4">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 bg-red-50 text-accent rounded-lg flex items-center justify-center border border-red-200 transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Still Have Questions CTA ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Reach out for a free consultation and
            we&rsquo;ll answer any questions about your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
