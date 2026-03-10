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
      const y = window.scrollY;
      ref.current.style.transform = `translateY(${y * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return ref;
}

const POSITIONS = [
  {
    title: "Tow Truck Operator",
    type: "Full-time",
    description:
      "Operate flatbed and wheel-lift tow trucks for private property impounds and vehicle relocations across the Phoenix metro area. You will be the face of Axle Towing on every call.",
    requirements: [
      "CDL preferred (Class B or higher)",
      "Clean driving record (no DUIs, no major violations in last 3 years)",
      "Ability to lift 50+ lbs and work outdoors in Arizona heat",
      "Professional demeanor and strong communication skills",
      "Prior towing experience preferred but not required — we train",
    ],
  },
  {
    title: "Parking Enforcement Officer",
    type: "Full-time",
    description:
      "Patrol assigned properties to enforce parking regulations, document violations, and coordinate towing operations. You will work closely with property managers to keep parking areas safe and compliant.",
    requirements: [
      "Valid Arizona driver's license with clean record",
      "Strong attention to detail and documentation skills",
      "Comfortable working independently and making judgment calls",
      "Experience in security, parking enforcement, or property management a plus",
      "Ability to work varied shifts including evenings and weekends",
    ],
  },
  {
    title: "Dispatch Coordinator",
    type: "Full-time",
    description:
      "Manage incoming calls, coordinate driver assignments, and ensure efficient routing across our service area. You are the hub that keeps our operation running smoothly.",
    requirements: [
      "Excellent phone and communication skills",
      "Ability to multitask and remain calm under pressure",
      "Proficiency with dispatch software and GPS tracking systems",
      "Knowledge of Phoenix metro area geography",
      "Prior dispatch or logistics experience preferred",
    ],
  },
  {
    title: "Administrative Assistant",
    type: "Part-time",
    description:
      "Provide office support at our impound facility including customer service, data entry, file management, and assisting with vehicle release paperwork.",
    requirements: [
      "Strong organizational and computer skills",
      "Professional and courteous customer service abilities",
      "Experience with Microsoft Office or Google Workspace",
      "Bilingual (English/Spanish) a plus",
      "Availability during business hours (Mon-Fri 9am-5pm)",
    ],
  },
];

const BENEFITS = [
  {
    title: "Competitive Pay",
    desc: "Above-market wages with performance bonuses and overtime opportunities.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Growth Opportunities",
    desc: "Clear career paths from operator to supervisor to management. We promote from within.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Training Provided",
    desc: "Comprehensive paid training on equipment, safety, Arizona towing law, and customer service.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Modern Equipment",
    desc: "Work with well-maintained, modern tow trucks and the latest dispatch technology.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M3.375 14.25V3.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v11.25" />
      </svg>
    ),
  },
  {
    title: "Team Culture",
    desc: "Join a tight-knit team that values respect, accountability, and doing things the right way.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    desc: "Multiple shift options with advance scheduling so you can plan your life around work.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/about-office.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Join <span className="text-gradient">Our Team</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Build a career with Phoenix&rsquo;s fastest-growing private property towing company.
              We&rsquo;re looking for dedicated professionals who share our commitment to integrity and service.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Work at Axle ── */}
      <section className="py-20 bg-white wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Why Work at {COMPANY.name.split(" &")[0]}?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer more than a job &mdash; we offer a career path in a growing industry with a
              company that values its people.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((b, i) => (
              <div
                key={b.title}
                className={`reveal glass-card-white rounded-2xl p-7 shadow-md delay-${(i + 1) * 100}`}
              >
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4 border-glow-blue">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 font-heading">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Open Positions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&rsquo;re hiring across multiple roles. Find the right fit for your skills and
              experience.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {POSITIONS.map((pos, i) => (
              <div
                key={pos.title}
                className={`reveal glass-card-white rounded-2xl p-8 shadow-md delay-${(i + 1) * 100}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 font-heading">{pos.title}</h3>
                    <span className="inline-block mt-1 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {pos.type}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-bold font-heading shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{pos.description}</p>
                <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-2">
                  Requirements
                </h4>
                <ul className="text-gray-600 text-sm space-y-1.5">
                  {pos.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-primary shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Apply Now</h2>
            <p className="text-white/70 text-lg">
              Ready to join our team? Fill out the form below and we&rsquo;ll be in touch.
            </p>
          </div>
          <div className="reveal">
            <form action="#" className="glass rounded-2xl p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                    placeholder="(480) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-white/80 mb-2">
                    Position *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                  >
                    <option value="" className="text-gray-900">Select a position</option>
                    <option value="tow-truck-operator" className="text-gray-900">Tow Truck Operator</option>
                    <option value="parking-enforcement" className="text-gray-900">Parking Enforcement Officer</option>
                    <option value="dispatch-coordinator" className="text-gray-900">Dispatch Coordinator</option>
                    <option value="admin-assistant" className="text-gray-900">Administrative Assistant</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-white/80 mb-2">
                  Tell Us About Your Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent resize-none"
                  placeholder="Briefly describe your relevant work experience..."
                />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-white/80 mb-2">
                  Upload Resume
                </label>
                <div className="w-full px-4 py-8 rounded-lg border-2 border-dashed border-white/20 text-center text-white/40 hover:border-white/40 transition-colors cursor-pointer">
                  <svg
                    className="w-8 h-8 mx-auto mb-2 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <p className="text-sm">Click to upload or drag and drop</p>
                  <p className="text-xs mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-center py-4 text-lg font-bold"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Equal Opportunity Statement ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="glass-card-white rounded-2xl p-8 md:p-10 shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4 font-heading">
              Equal Opportunity Employer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {COMPANY.name} is an equal opportunity employer. We celebrate diversity and are
              committed to creating an inclusive environment for all employees. All qualified
              applicants will receive consideration for employment without regard to race, color,
              religion, sex, sexual orientation, gender identity, national origin, disability,
              veteran status, or any other characteristic protected by applicable law.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Have Questions About Working With Us?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Give us a call or send an email. We&rsquo;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
