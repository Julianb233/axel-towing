"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const PROGRAM_FEATURES = [
  {
    title: "Board-Approved Signage Package",
    description:
      "We provide ARS-compliant towing signage designed to meet HOA aesthetic standards. Choose from multiple styles, all installed at no cost to your community.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
  },
  {
    title: "Customized Enforcement Rules",
    description:
      "Every HOA is different. We work with your board to create enforcement policies that fit your CC&Rs -- guest parking rules, reserved spots, commercial vehicle restrictions, and more.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Resident Communication Support",
    description:
      "We provide templated notices, FAQ sheets, and communication materials your board can share with residents before enforcement begins. No surprises, no angry neighbors.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Transparent Board Reporting",
    description:
      "Monthly reports detail every patrol, warning, and impound. Your board has full visibility into enforcement activity for every meeting.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Zero Cost to the HOA",
    description:
      "No setup fees, no monthly fees, no per-tow charges to your HOA. Our services are funded entirely through impound fees collected from violators.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Legal Compliance Guarantee",
    description:
      "Every tow we perform is fully compliant with Arizona Revised Statutes. We carry full insurance and handle all legal documentation, protecting your HOA from liability.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const COMMON_VIOLATIONS = [
  "Unauthorized vehicles in reserved spots",
  "Commercial vehicles parked overnight",
  "Expired registration vehicles",
  "Vehicles on blocks or inoperable",
  "Guest parking violations",
  "Fire lane parking",
  "Double parking",
  "Oversized vehicle violations",
];

const FAQS = [
  {
    q: "How do we get board approval for a towing program?",
    a: "We make it easy. We provide a board presentation package that includes program details, sample signage, enforcement policies, and resident communication templates. Many boards approve our program in a single meeting because there is zero cost and zero risk.",
  },
  {
    q: "How do residents know about the new enforcement rules?",
    a: "We provide notice templates and a recommended rollout timeline. Typically, communities post notices 30 days before enforcement begins, giving residents time to adjust. We also include resident FAQ sheets to reduce questions to the board.",
  },
  {
    q: "What if a resident's guest gets towed?",
    a: "Our customized enforcement rules account for guest parking. We work with your board to establish clear guest parking policies and signage. If a legitimate guest is towed in error, we handle the situation directly and make it right.",
  },
  {
    q: "Can we exclude certain areas from enforcement?",
    a: "Absolutely. We customize enforcement zones for each HOA community. You choose which areas are enforced, which are guest parking, and which are unrestricted. Full flexibility.",
  },
  {
    q: "How quickly can you set up a new HOA community?",
    a: "Most HOA communities are fully set up within 2-3 weeks after board approval. This includes signage installation, patrol scheduling, and portal access for the board. Urgent setups can be expedited.",
  },
  {
    q: "Is there a minimum community size requirement?",
    a: "No minimum. We serve HOA communities of all sizes, from small townhome associations with 20 units to large master-planned communities with thousands of homes.",
  },
];

export default function HOABoardsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "HOA Board Towing Programs - Axle Towing Phoenix",
            description: "Customized towing programs for HOA boards in Phoenix, Arizona. Free parking enforcement, ARS-compliant signage, and transparent board reporting.",
            url: `https://${COMPANY.domain}/partners/hoa-boards`,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `https://${COMPANY.domain}` },
                { "@type": "ListItem", position: 2, name: "Partners", item: `https://${COMPANY.domain}/partners` },
                { "@type": "ListItem", position: 3, name: "HOA Boards", item: `https://${COMPANY.domain}/partners/hoa-boards` },
              ],
            },
            mainEntity: {
              "@type": "Service",
              name: "HOA Board Towing Program",
              provider: {
                "@type": "LocalBusiness",
                name: COMPANY.name,
                telephone: COMPANY.phone,
                url: `https://${COMPANY.domain}`,
              },
              areaServed: { "@type": "State", name: "Arizona" },
              description: "Customized towing and parking enforcement programs designed specifically for homeowner associations in the Phoenix metro area.",
            },
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section
        className="parallax-fixed relative min-h-[60vh] flex items-center"
        style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-primary/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 reveal">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/partners" className="hover:text-white transition-colors">Partners</Link>
            <span>/</span>
            <span className="text-white">HOA Boards</span>
          </nav>
          <span className="inline-block bg-primary/20 border border-primary/40 text-blue-200 text-sm font-bold font-heading uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 reveal">
            HOA Programs
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal">
            HOA Board <span className="text-blue-300">Towing Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed reveal delay-200 mb-8">
            Customized parking enforcement built for homeowner associations. We handle the
            compliance, signage, patrols, and reporting &mdash; your board approves it, and
            your community benefits. All at zero cost to the HOA.
          </p>
          {/* Robert-2 / K-3: Board Packet — downloadable, no form required. */}
          <div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
            <a
              href="/downloads/axle-towing-hoa-board-packet.pdf"
              className="btn-primary inline-flex items-center gap-2"
              download
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Board Packet (PDF)
            </a>
            <a
              href="#hoa-inquiry-form"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Or request an emailed version
            </a>
          </div>
        </div>
      </section>

      {/* ===== PROGRAM FEATURES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Program Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              Built for HOA Communities
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our HOA towing programs are designed from the ground up for community governance.
              Board-friendly reporting, resident communication, and full legal compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAM_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card-white rounded-2xl p-8 border border-gray-100 reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3" style={{ color: "#1a202c" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMON VIOLATIONS ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider font-heading">
                What We Enforce
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-3 mb-4">
                Common HOA Parking Violations
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mb-6" />
              <p className="text-blue-100 text-lg mb-8">
                Does your community struggle with any of these? Our enforcement programs
                address every common HOA parking violation &mdash; customized to your CC&Rs.
              </p>
              <Link href="/services/hoa-towing" className="btn-primary inline-flex items-center gap-2">
                View HOA Towing Service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 reveal delay-200">
              {COMMON_VIOLATIONS.map((violation, i) => (
                <div
                  key={violation}
                  className="flex items-center gap-3 rounded-xl p-4 bg-white/10 backdrop-blur-sm border border-white/15"
                  style={{ animationDelay: `${(i + 1) * 50}ms` }}
                >
                  <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <span className="text-white text-sm font-medium">{violation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS FOR HOAs ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Getting Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              How HOA Programs Work
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Board Inquiry", desc: "A board member fills out our inquiry form or calls us. We send a program overview for board review." },
                { step: "2", title: "Community Assessment", desc: "We assess your community, review CC&Rs, and create a custom enforcement plan for board approval." },
                { step: "3", title: "Signage & Setup", desc: "After board approval, we install compliant signage and distribute resident notices. Typically 2-3 weeks." },
                { step: "4", title: "Enforcement Begins", desc: "Regular patrols begin. Board receives monthly reports. Residents enjoy organized, compliant parking." },
              ].map((item, i) => (
                <div key={item.step} className="text-center reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                  <div className="relative mx-auto mb-6">
                    <div className="w-28 h-28 mx-auto rounded-2xl glass-card-white border-glow-blue flex flex-col items-center justify-center gap-2 p-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold font-heading text-lg">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-2" style={{ color: "#1a202c" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm max-w-[220px] mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIP INQUIRY FORM ===== */}
      <section id="hoa-inquiry-form" className="py-20 md:py-28 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              HOA Board Inquiry
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-xl mx-auto">
              Tell us about your community and we will send a program overview your board can review at the next meeting.
            </p>
          </div>

          <div className="reveal glass-form rounded-2xl p-8 md:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">Inquiry Submitted!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We will prepare a program overview for your board and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Board Member Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Role *</label>
                    <select required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                      <option value="">Select your role...</option>
                      <option value="president">Board President</option>
                      <option value="vice-president">Vice President</option>
                      <option value="secretary">Secretary</option>
                      <option value="treasurer">Treasurer</option>
                      <option value="member">Board Member</option>
                      <option value="manager">Community Manager</option>
                      <option value="resident">Resident</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="board@community.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="(480) 555-1234" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">HOA / Community Name *</label>
                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Sunset Ridge HOA" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Units</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                      <option value="">Select range...</option>
                      <option value="1-50">1 - 50 units</option>
                      <option value="51-200">51 - 200 units</option>
                      <option value="201-500">201 - 500 units</option>
                      <option value="500+">500+ units</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Next Board Election Date</label>
                    <input type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Community Address / Location</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white" placeholder="Neighborhood or address in the Phoenix metro area" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Parking Challenges</label>
                    <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white" placeholder="What parking issues is your community facing? Unauthorized vehicles, guest parking abuse, commercial vehicles overnight..." />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full text-center justify-center">
                  Request HOA Program Overview
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4" style={{ color: "#1a202c" }}>
              HOA Board FAQ
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
          </div>
          <div className="space-y-4 reveal">
            {FAQS.map((faq, i) => (
              <details key={i} className="group glass-card-white rounded-2xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-blue-900 font-heading text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-primary shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 text-white overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.95) 50%, rgba(30,107,184,0.9) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Your Community Deserves Better Parking
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Stop wasting board meetings on parking complaints. Let {COMPANY.name} handle enforcement while your board focuses on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call {COMPANY.phone}
            </a>
            <Link href="/services/hoa-towing" className="btn-secondary text-lg">
              View HOA Towing Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
