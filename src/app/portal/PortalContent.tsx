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

const TOWBOOK_URL = "https://app.towbook.com";

const TOWBOOK_PORTALS = [
  {
    title: "Manager Login",
    desc: "Full access to dispatch, vehicle management, invoicing, and reporting. Sticker vehicles, build tow calls, and manage your fleet.",
    url: TOWBOOK_URL,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    primary: true,
  },
  {
    title: "Dispatch Portal",
    desc: "Create and manage tow calls, assign drivers, track active jobs in real time, and handle dispatch operations.",
    url: TOWBOOK_URL,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m4.5 0V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125" />
      </svg>
    ),
    primary: false,
  },
  {
    title: "Vehicle Lookup",
    desc: "Search impounded vehicles by plate, VIN, or make/model. Check vehicle status and release eligibility.",
    url: TOWBOOK_URL,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    primary: false,
  },
];

const PORTAL_FEATURES = [
  {
    title: "Sticker Vehicles",
    desc: "Log and sticker unauthorized vehicles directly in TowBook with photo documentation, timestamps, and location data.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: "Build Tow Calls",
    desc: "Create new tow calls with all required details -- vehicle info, location, photos, and authorization -- in minutes.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Status Tracking",
    desc: "Track every tow from request to completion with live status updates, driver assignments, and ETA notifications.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Reports & Analytics",
    desc: "Access detailed reports on tow activity, parking violations, enforcement trends, and revenue for your properties.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Vehicle Release Authorization",
    desc: "Authorize vehicle releases remotely through TowBook. No more phone tag or office visits for owner pickups.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Photo Documentation",
    desc: "Timestamped, geo-tagged photos for every sticker and tow provide a complete legal evidence chain.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
];

export default function PortalContent() {
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
              TowBook Manager <span className="text-gradient">Portal</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Log in to TowBook to sticker vehicles, build tow calls, manage
              dispatch, and track your fleet -- all from one platform.
            </p>
          </div>
        </div>
      </section>

      {/* ── TowBook Login Portals ── */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              TowBook Access
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Select your portal below to log in. All management functions are
              powered by TowBook.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOWBOOK_PORTALS.map((portal) => (
              <a
                key={portal.title}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal glass-card-white rounded-2xl p-8 text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  portal.primary ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
              >
                {portal.primary && (
                  <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 font-heading">
                    Primary Access
                  </span>
                )}
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    portal.primary
                      ? "bg-primary text-white group-hover:bg-blue-700"
                      : "bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white"
                  }`}
                >
                  {portal.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-heading">
                  {portal.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {portal.desc}
                </p>
                <span
                  className={`inline-flex items-center gap-2 font-bold text-sm font-heading transition-all ${
                    portal.primary
                      ? "bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                      : "text-primary group-hover:gap-3"
                  }`}
                >
                  {portal.primary ? "Log In to TowBook" : "Open Portal"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          {/* Help text */}
          <div className="mt-10 text-center reveal">
            <p className="text-gray-500 text-sm">
              Need login credentials or having trouble accessing TowBook?{" "}
              <a
                href={`tel:${COMPANY.phone}`}
                className="text-primary font-medium hover:underline"
              >
                Call {COMPANY.phone}
              </a>{" "}
              or{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-primary font-medium hover:underline"
              >
                email us
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── What You Can Do in TowBook ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              What You Can Do in TowBook
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              TowBook gives managers complete control over stickering, tow calls,
              dispatch, and reporting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTAL_FEATURES.map((feature, i) => (
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

      {/* ── Quick Access Steps ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
              Quick Start
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading mt-3">
              How to Use TowBook
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "1",
                title: "Sticker a Vehicle",
                instructions: [
                  'Log in to TowBook and select "New Call"',
                  "Enter the vehicle details (plate, make, model, color)",
                  "Take photos of the violation and vehicle",
                  'Select "Sticker" as the call type',
                  "The sticker timer starts automatically",
                ],
              },
              {
                step: "2",
                title: "Build a Tow Call",
                instructions: [
                  "Open an existing stickered vehicle or create a new call",
                  "Verify all vehicle information and photos",
                  "Assign a driver and truck from the dispatch board",
                  "Track the tow in real time from pickup to impound lot",
                  "Invoice is generated automatically on completion",
                ],
              },
            ].map((item) => (
              <div
                key={item.step}
                className="reveal glass-card-white rounded-2xl p-8 shadow-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold font-heading text-xl shrink-0">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 font-heading">
                    {item.title}
                  </h3>
                </div>
                <ol className="space-y-3">
                  {item.instructions.map((instruction, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ol>
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
