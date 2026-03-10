"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import Image from "next/image";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

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

export default function ContactPage() {
  const parallaxRef = useParallax();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(${IMAGES.contact.phoenix})` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Ready to protect your property from unauthorized parking? Reach out for a
              free consultation and custom towing program.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT: Contact Form */}
            <div className="reveal">
              <div className="glass-form rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                  Request a Free Quote
                </h2>
                <p className="text-gray-500 mb-6">
                  Fill out the form and we&rsquo;ll get back to you within 1 business hour.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. Our team will contact you within 1 business hour.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                          placeholder="(480) 555-1234"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Property Type *
                      </label>
                      <select
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                      >
                        <option value="">Select property type</option>
                        <option value="hoa">HOA Community</option>
                        <option value="apartment">Apartment Complex</option>
                        <option value="commercial">Commercial Property</option>
                        <option value="parking-lot">Parking Lot</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white"
                        placeholder="Tell us about your property and parking challenges..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-center justify-center">
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT: Contact Info Cards */}
            <div className="reveal-right space-y-5">
              {/* Phone */}
              <div className="glass-card-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 border-glow-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 font-heading">Phone</h3>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-primary hover:text-blue-700 font-semibold text-lg transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Dispatch available 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="glass-card-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 border-glow-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 font-heading">Email</h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-primary hover:text-blue-700 font-semibold transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">We respond within 1 business hour</p>
                </div>
              </div>

              {/* Apache Junction Location */}
              <div className="glass-card-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 border-glow-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 font-heading">Apache Junction Office</h3>
                  <p className="text-gray-600">
                    {COMPANY.addresses[0].street}<br />
                    {COMPANY.addresses[0].city}, {COMPANY.addresses[0].state} {COMPANY.addresses[0].zip}
                  </p>
                </div>
              </div>

              {/* Phoenix Location */}
              <div className="glass-card-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 border-glow-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 font-heading">Phoenix Office</h3>
                  <p className="text-gray-600">
                    {COMPANY.addresses[1].street}<br />
                    {COMPANY.addresses[1].city}, {COMPANY.addresses[1].state} {COMPANY.addresses[1].zip}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="glass-card-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center shrink-0 border-glow-blue">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 font-heading">Office Hours</h3>
                  <div className="text-gray-600 space-y-0.5">
                    <p>{COMPANY.hours.weekday}</p>
                    <p>{COMPANY.hours.saturday}</p>
                    <p>{COMPANY.hours.sunday}</p>
                  </div>
                  <p className="text-sm text-primary font-medium mt-1">
                    Dispatch available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map / Service Area Section ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Service Area
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide private property towing and parking enforcement across the Phoenix metro area.
            </p>
          </div>
          <div className="reveal">
            <div className="glass-card-white rounded-2xl p-10 shadow-md border border-blue-100">
              <div className="flex items-center justify-center mb-8">
                <div className="text-primary opacity-40">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SERVICE_AREAS.map((area) => (
                  <div
                    key={area.slug}
                    className="bg-blue-50 rounded-xl px-4 py-3 text-center border border-blue-100 hover:border-primary hover:bg-blue-100 transition-all"
                  >
                    <div className="font-bold text-blue-900 font-heading">{area.name}</div>
                    <div className="text-xs text-gray-500">Arizona</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Banner ── */}
      <section className="relative py-16 text-white overflow-hidden" style={{ background: "linear-gradient(160deg, rgba(15,31,54,1) 0%, rgba(27,42,63,0.95) 50%, rgba(30,107,184,0.9) 100%)" }}>
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 animate-float" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Need Emergency Towing?
            </h2>
          </div>
          <p className="text-lg text-white/90 mb-6">
            Our dispatch team is available around the clock for urgent towing requests.
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
