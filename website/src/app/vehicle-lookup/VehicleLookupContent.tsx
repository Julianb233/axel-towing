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

const WHAT_TO_BRING = [
  {
    title: "Valid Photo ID",
    desc: "Government-issued photo identification (driver's license, state ID, or passport).",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
  {
    title: "Vehicle Registration or Title",
    desc: "Current registration card or vehicle title proving ownership.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Payment",
    desc: "Cash, credit card, or debit card. No personal checks accepted.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "Lien Release (if applicable)",
    desc: "If the vehicle has an active lien, a release from the lienholder may be required.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function VehicleLookupContent() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/optimized/axle-towing-hero-tow-truck-phoenix-az.webp)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Vehicle <span className="text-gradient">Lookup</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Check if your vehicle was towed and learn how to retrieve it from our impound lot.
            </p>
          </div>
        </div>
      </section>

      {/* ── Lookup Section ── */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT: Call to check */}
            <div className="reveal">
              <div className="glass-form rounded-2xl p-8 md:p-10 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-3 font-heading">
                    Check If Your Vehicle Was Towed
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To check if your vehicle is at one of our impound lots, call our dispatch team.
                    They can confirm your vehicle's status, provide fee information, and explain the
                    retrieval process.
                  </p>
                </div>

                <a
                  href={`tel:${COMPANY.phone}`}
                  className="btn-primary w-full text-center text-xl flex items-center justify-center gap-3 py-4"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {COMPANY.phone}
                </a>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Dispatch is available 24/7 for vehicle status inquiries
                </p>

                {/* TowBook online lookup */}
                <div className="mt-8">
                  <a
                    href="https://axletowing7900.towbook.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3 rounded-lg font-bold font-heading tracking-wide transition-colors flex items-center justify-center gap-2 text-white"
                    style={{ background: '#1B2A3F' }}
                    onMouseOver={(e) => (e.currentTarget.style.background = '#2578cc')}
                    onMouseOut={(e) => (e.currentTarget.style.background = '#1B2A3F')}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    Search by License Plate Online
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Enter your license plate number on the TowBook portal to check vehicle status
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Process Steps */}
            <div className="reveal-right">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">
                How Vehicle Retrieval Works
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Contact Us",
                    desc: "Call us at " + COMPANY.phone + " to confirm your vehicle is in our system and get fee details.",
                  },
                  {
                    step: "2",
                    title: "Gather Documents",
                    desc: "Bring your valid photo ID, vehicle registration or title, and payment method.",
                  },
                  {
                    step: "3",
                    title: "Visit Our Yard",
                    desc: "Come to either our Apache Junction or Phoenix location during office hours.",
                  },
                  {
                    step: "4",
                    title: "Drive Away",
                    desc: "Once documentation is verified and fees are paid, you'll be reunited with your vehicle.",
                  },
                ].map((s, i) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 font-heading">
                        {s.step}
                      </div>
                      {i < 3 && (
                        <div className="w-px h-8 bg-blue-200 mt-1" />
                      )}
                    </div>
                    <div className="pb-2">
                      <h3 className="font-bold text-blue-900 font-heading">
                        {s.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impound Yard Locations ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Impound Lot Locations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visit either of our two secure impound yards to retrieve your
              vehicle during office hours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY.addresses.map((addr, i) => (
              <div
                key={addr.label}
                className="reveal glass-card-white rounded-2xl p-8 shadow-md"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 border-glow-blue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 font-heading">
                      {addr.label} Lot
                    </h3>
                    <p className="text-gray-600">
                      {addr.street}<br />
                      {addr.city}, {addr.state} {addr.zip}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium text-blue-900">Gate Hours:</span>{" "}
                      <span className="text-gray-600">{COMPANY.hours.weekday}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium text-blue-900">Weekend:</span>{" "}
                      <span className="text-gray-600">{COMPANY.hours.saturday} / {COMPANY.hours.sunday}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <a href={`tel:${COMPANY.phone}`} className="text-primary font-semibold hover:text-blue-700 transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Bring ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              What to Bring
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have these items ready when you come to retrieve your vehicle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_TO_BRING.map((item) => (
              <div
                key={item.title}
                className="reveal glass-card-white rounded-2xl p-6 text-center shadow-md"
              >
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 border-glow-blue">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Important Info ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal glass-card-white rounded-2xl p-8 md:p-10 shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">
              Important Information
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {[
                {
                  label: "Personal belongings",
                  text: "You may retrieve personal items from your vehicle during business hours with valid ID at no charge, even before paying impound fees.",
                },
                {
                  label: "Third-party pickup",
                  text: "If someone is picking up the vehicle on your behalf, they must bring a notarized authorization letter along with both their ID and a copy of the registered owner's ID.",
                },
                {
                  label: "Storage fees",
                  text: "Daily storage fees accrue per Arizona state regulations. Retrieving your vehicle as soon as possible will minimize total costs.",
                },
                {
                  label: "Payment methods",
                  text: "We accept cash, Visa, Mastercard, American Express, and debit cards. No personal checks.",
                },
                {
                  label: "Disputes",
                  text: "If you believe your vehicle was towed in error, please contact us with your details. All tows are documented with photographs and timestamps.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p>
                    <strong className="text-blue-900">{item.label}:</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Contact Banner ── */}
      <section className="relative py-16 text-white overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.95) 50%, rgba(30,107,184,0.9) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 animate-float" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Need Immediate Help?
            </h2>
          </div>
          <p className="text-lg text-white/90 mb-6">
            Call us now to check on your vehicle or get answers to your questions.
          </p>
          <a
            href={`tel:${COMPANY.phone}`}
            className="btn-primary text-xl inline-flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call {COMPANY.phone} Now
          </a>
        </div>
      </section>
    </>
  );
}
