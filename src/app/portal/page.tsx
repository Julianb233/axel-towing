"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
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

/* ── TowBook Login URLs ── */
const TOWBOOK_LOGIN_URL = "https://app.towbook.com";
const TOWBOOK_MANAGER_URL = "https://manager.towbook.com";

/* ── Manager Login Cards ── */
const MANAGER_LOGINS = [
  {
    title: "Property Manager Login",
    subtitle: "Commercial & Retail Properties",
    desc: "Access your property's enforcement dashboard, submit tow requests, view reports, and manage your parking enforcement program through TowBook.",
    href: TOWBOOK_MANAGER_URL,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    features: [
      "Submit tow requests online",
      "Track enforcement activity",
      "View monthly reports",
      "Manage signage compliance",
    ],
  },
  {
    title: "HOA Manager Login",
    subtitle: "Homeowner Associations",
    desc: "Dedicated portal for HOA boards and management companies to oversee community parking enforcement, review violations, and manage towing agreements.",
    href: TOWBOOK_MANAGER_URL,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    features: [
      "Community violation tracking",
      "Board-accessible reports",
      "Resident notification logs",
      "Towing agreement management",
    ],
  },
  {
    title: "Apartment Complex Manager Login",
    subtitle: "Multi-Family Properties",
    desc: "Portal for apartment complex managers to request tows, manage permit parking, track unauthorized vehicles, and review enforcement history for their community.",
    href: TOWBOOK_MANAGER_URL,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h1.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    features: [
      "Permit parking management",
      "Unauthorized vehicle alerts",
      "Tenant enforcement history",
      "Guest parking oversight",
    ],
  },
];

/* ── Portal Options (secondary) ── */
const PORTAL_OPTIONS = [
  {
    title: "Staff Login",
    subtitle: "TowBook Dashboard",
    desc: "Access dispatch management, driver tracking, vehicle records, and billing through TowBook.",
    href: TOWBOOK_LOGIN_URL,
    external: true,
    cta: "Open TowBook",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: "Submit Tow Request",
    subtitle: "Property Managers",
    desc: "Submit a detailed tow request with vehicle information, photos, and location details.",
    href: "/portal/request",
    external: false,
    cta: "Submit a Request",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Vehicle Lookup",
    subtitle: "Vehicle Owners",
    desc: "Check if your vehicle was towed and get instructions for retrieval.",
    href: "/vehicle-lookup",
    external: false,
    cta: "Locate My Vehicle",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
];

const PORTAL_BENEFITS = [
  {
    title: "Real-Time Tow Status Tracking",
    desc: "Track every tow from request to completion with live status updates and notifications.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Monthly Reports & Analytics",
    desc: "Access detailed reports on tow activity, parking violations, and enforcement trends for your property.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Contract Management",
    desc: "View and manage your towing agreements, signage specifications, and compliance documents in one place.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Direct Dispatch Requests",
    desc: "Submit tow requests directly from the portal. Our dispatch team responds to priority requests within minutes.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m4.5 0V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125" />
      </svg>
    ),
  },
  {
    title: "Vehicle Release Authorization",
    desc: "Authorize vehicle releases remotely. No more phone tag or office visits to process owner pickups.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Photo Documentation",
    desc: "Photo evidence, timestamps, and full documentation for every violation and tow on your property.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
];

export default function PortalPage() {
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full text-center">
          <div className="reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Manager <span className="text-gradient">Portal</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Access your TowBook dashboard, submit tow requests, and manage your
              parking enforcement program from one central hub.
            </p>
          </div>
        </div>
      </section>

      {/* ── Manager Login Cards ── */}
      <section className="py-20 wave-separator" style={{ background: '#1B2A3F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Manager Login
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Select your portal type to access the TowBook management dashboard for your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MANAGER_LOGINS.map((login, i) => (
              <div
                key={login.title}
                className="reveal rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-white/10"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white" style={{ background: 'rgba(30, 107, 184, 0.3)', border: '1px solid rgba(30, 107, 184, 0.5)' }}>
                  {login.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 font-heading">
                  {login.title}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#4d9fff' }}>{login.subtitle}</p>
                <p className="text-white/70 leading-relaxed text-sm mb-5">{login.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {login.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={login.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-lg font-bold font-heading tracking-wide transition-colors flex items-center justify-center gap-2 text-white"
                  style={{ background: '#1E6BB8' }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#2578cc')}
                  onMouseOut={(e) => (e.currentTarget.style.background = '#1E6BB8')}
                >
                  Access Portal
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Credential note */}
          <div className="mt-10 text-center reveal">
            <div
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-white/80 text-sm">
                Contact dispatch at{" "}
                <a href={`tel:${COMPANY.phone}`} className="font-semibold text-white hover:underline">
                  {COMPANY.phone}
                </a>{" "}
                for portal access credentials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Access Cards ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Quick Access
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Staff logins, tow request forms, and vehicle lookup -- everything you need in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTAL_OPTIONS.map((option) => (
              <div
                key={option.title}
                className="reveal glass-card-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 border-glow-blue">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1 font-heading">
                  {option.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{option.subtitle}</p>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">{option.desc}</p>
                {option.external ? (
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center flex items-center justify-center gap-2"
                  >
                    {option.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ) : (
                  <Link href={option.href} className="btn-primary w-full text-center">
                    {option.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portal Benefits ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              What You Get with TowBook Integration
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our partnership with TowBook gives property managers complete visibility
              and control over their parking enforcement program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTAL_BENEFITS.map((feature, i) => (
              <div
                key={feature.title}
                className={`reveal glass-card-white rounded-2xl p-7 shadow-md delay-${((i % 3) + 1) * 100}`}
              >
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-5 border-glow-blue">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Not a Partner Yet?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Contact us to learn how we can help manage your property&rsquo;s parking enforcement
            -- professionally, legally, and at zero cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cta">
              Get Started Free
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
