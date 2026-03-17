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

/* ── TowBook Login URL ── */
const TOWBOOK_LOGIN_URL = "https://app.towbook.com";

/* ── Portal Cards ── */
const PORTAL_OPTIONS = [
  {
    title: "Manager Login",
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
    features: [
      "Live dispatch board",
      "Driver GPS tracking",
      "Vehicle inventory lookup",
      "Invoicing and billing",
    ],
  },
  {
    title: "Property Manager Portal",
    subtitle: "Request Tows & Stickering",
    desc: "Submit tow requests, request parking stickering, and track enforcement activity on your property.",
    href: "#property-portal",
    external: false,
    cta: "Submit a Request",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    features: [
      "Submit tow requests online",
      "Request parking stickering",
      "Track tow status in real time",
      "View enforcement reports",
    ],
  },
  {
    title: "Vehicle Lookup",
    subtitle: "Find a Towed Vehicle",
    desc: "Look up if your vehicle has been towed and get release instructions, fees, and impound lot directions.",
    href: "/locate-vehicle",
    external: false,
    cta: "Locate My Vehicle",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    features: [
      "Search by plate or VIN",
      "Impound lot directions",
      "Release requirements",
      "Fee schedule",
    ],
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

/* ── Request Types for Property Manager Form ── */
const REQUEST_TYPES = [
  { value: "tow-request", label: "Tow Request - Remove an unauthorized vehicle" },
  { value: "stickering", label: "Stickering Request - Mark vehicles for enforcement" },
  { value: "patrol-request", label: "Patrol Request - Schedule parking lot patrol" },
  { value: "report", label: "Report Request - Monthly enforcement report" },
  { value: "other", label: "Other - General inquiry" },
];

export default function PortalPage() {
  const parallaxRef = useParallax();
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyName: "",
    propertyAddress: "",
    requestType: "",
    description: "",
    urgent: false,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    // Simulate submission - in production this would hit an API/webhook
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  }

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
              Client <span className="text-gradient">Portal</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Access your TowBook dashboard, submit tow requests, and manage your
              parking enforcement program from one central hub.
            </p>
          </div>
        </div>
      </section>

      {/* ── Portal Options Grid ── */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Choose Your Portal
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Select the portal that matches your needs. Property managers, staff, and vehicle owners each have dedicated access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTAL_OPTIONS.map((option, i) => (
              <div
                key={option.title}
                className={`reveal glass-card-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow delay-${((i % 3) + 1) * 100} flex flex-col`}
              >
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 border-glow-blue">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1 font-heading">
                  {option.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{option.subtitle}</p>
                <p className="text-gray-600 leading-relaxed text-sm mb-5">{option.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {option.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
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
                ) : option.href.startsWith("#") ? (
                  <a href={option.href} className="btn-primary w-full text-center">
                    {option.cta}
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

      {/* ── Property Manager Request Form ── */}
      <section id="property-portal" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div className="reveal">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">
                Property Managers
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading mt-3">
                Submit a Tow or Stickering Request
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Use this form to request a tow, schedule parking stickering, or submit
                an enforcement request. Our dispatch team will respond promptly.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 font-heading">Emergency Tows</h4>
                    <p className="text-sm text-gray-600">
                      For immediate tow needs (fire lane, blocking access), call dispatch directly
                      at <a href={`tel:${COMPANY.phone}`} className="text-primary font-medium">{COMPANY.phone}</a>.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 font-heading">Response Times</h4>
                    <p className="text-sm text-gray-600">
                      Standard requests are processed within 2 hours during business hours.
                      Urgent requests are prioritized for same-day response.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 font-heading">Existing Partners</h4>
                    <p className="text-sm text-gray-600">
                      Already have a TowBook account? <a href={TOWBOOK_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-medium">Log in to TowBook</a> to
                      manage requests and view history directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal delay-200">
              <div className="glass-form rounded-2xl p-8 md:p-10 shadow-xl">
                {formState === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">
                      Request Submitted
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Our dispatch team has received your request and will respond shortly.
                      For urgent matters, call <a href={`tel:${COMPANY.phone}`} className="text-primary font-medium">{COMPANY.phone}</a>.
                    </p>
                    <button
                      onClick={() => {
                        setFormState("idle");
                        setFormData({ name: "", email: "", phone: "", propertyName: "", propertyAddress: "", requestType: "", description: "", urgent: false });
                      }}
                      className="text-primary font-medium hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                          placeholder="(480) 555-1234"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                        placeholder="you@property.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Property Name *
                        </label>
                        <input
                          type="text"
                          name="propertyName"
                          required
                          value={formData.propertyName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                          placeholder="e.g. Sunset Apartments"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Property Address *
                        </label>
                        <input
                          type="text"
                          name="propertyAddress"
                          required
                          value={formData.propertyAddress}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                          placeholder="123 Main St, Phoenix, AZ"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Request Type *
                      </label>
                      <select
                        name="requestType"
                        required
                        value={formData.requestType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                      >
                        <option value="">Select request type...</option>
                        {REQUEST_TYPES.map((rt) => (
                          <option key={rt.value} value={rt.value}>
                            {rt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description *
                      </label>
                      <textarea
                        name="description"
                        required
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white resize-none"
                        placeholder="Describe the vehicle(s), location on property, violation type, and any other relevant details..."
                      />
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="urgent"
                        checked={formData.urgent}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="text-sm text-gray-700">
                        <span className="font-medium text-red-600">Mark as urgent</span> - requires same-day response
                      </span>
                    </label>
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors text-lg font-heading tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formState === "submitting" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portal Benefits ── */}
      <section className="py-20 bg-gray-50">
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
            - professionally, legally, and at zero cost to you.
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
