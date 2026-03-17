"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { JobPosition, PreQualQuestion } from "@/lib/jobs";
import { COMPANY } from "@/lib/constants";

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

function QuestionField({
  q,
  value,
  onChange,
}: {
  q: PreQualQuestion;
  value: string;
  onChange: (val: string) => void;
}) {
  if (q.type === "text") {
    return (
      <div>
        <label htmlFor={q.id} className="block text-sm font-medium text-white/95 mb-2">
          {q.question} {q.required && "*"}
        </label>
        <input
          type="text"
          id={q.id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={q.required}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
          placeholder="Type your answer..."
        />
      </div>
    );
  }

  if (q.type === "select") {
    return (
      <div>
        <label htmlFor={q.id} className="block text-sm font-medium text-white/95 mb-2">
          {q.question} {q.required && "*"}
        </label>
        <select
          id={q.id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={q.required}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
        >
          <option value="" className="text-gray-900">
            Select an option
          </option>
          {q.options?.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-gray-900">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // radio
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-white/95 mb-3">
        {q.question} {q.required && "*"}
      </legend>
      <div className="flex flex-wrap gap-3">
        {q.options?.map((opt) => (
          <label
            key={opt.value}
            className={`cursor-pointer px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
              value === opt.value
                ? "bg-cta border-cta text-white"
                : "bg-white/10 border-white/20 text-white/80 hover:border-white/40"
            }`}
          >
            <input
              type="radio"
              name={q.id}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="sr-only"
              required={q.required}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function JobPageContent({ job }: { job: JobPosition }) {
  const parallaxRef = useParallax();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState<"qualify" | "disqualified" | "apply">("qualify");
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const setAnswer = (id: string, val: string) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const allRequired = job.preQualQuestions
    .filter((q) => q.required)
    .every((q) => answers[q.id]);

  const disqualified = job.preQualQuestions.some((q) => {
    const val = answers[q.id];
    if (!val || !q.options) return false;
    const opt = q.options.find((o) => o.value === val);
    return opt && !opt.qualified;
  });

  const handlePreQual = (e: React.FormEvent) => {
    e.preventDefault();
    if (disqualified) {
      setStep("disqualified");
    } else {
      setStep("apply");
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/about-office.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="reveal max-w-3xl">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white mb-4 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Careers
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-white/15 backdrop-blur rounded-full text-sm font-medium">
                {job.type}
              </span>
              <span className="px-3 py-1 bg-white/15 backdrop-blur rounded-full text-sm font-medium">
                {job.department}
              </span>
              <span className="px-3 py-1 bg-white/15 backdrop-blur rounded-full text-sm font-medium">
                {job.location}
              </span>
              <span className="px-3 py-1 bg-cta/80 backdrop-blur rounded-full text-sm font-bold">
                {job.payRange}
              </span>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">{job.description}</p>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Responsibilities */}
            <div className="reveal">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements + Nice to Have */}
            <div>
              <div className="reveal mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6 font-heading">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-gray-700">
                      <svg
                        className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.niceToHave.length > 0 && (
                <div className="reveal">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 font-heading">Nice to Have</h3>
                  <ul className="space-y-2">
                    {job.niceToHave.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-gray-500">
                        <svg
                          className="w-5 h-5 text-blue-300 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Qualification + Application Form */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center reveal">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Application Received!</h2>
              <p className="text-white/90 text-lg mb-8">
                Thank you for your interest in joining {COMPANY.name}. We will review your application and
                contact you within 2-3 business days.
              </p>
              <Link href="/careers" className="btn-primary">
                View Other Positions
              </Link>
            </div>
          ) : step === "disqualified" ? (
            <div className="text-center reveal">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">
                Thanks for Your Interest
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Based on your responses, this position may not be the best fit right now. However, we
                encourage you to check out our other openings or reach out to discuss other opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers" className="btn-primary">
                  View Other Positions
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
                  Call Us: {COMPANY.phone}
                </a>
              </div>
            </div>
          ) : step === "qualify" ? (
            <>
              <div className="text-center mb-10 reveal">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                  Quick Pre-Qualification
                </h2>
                <p className="text-white/90 text-lg">
                  Answer a few quick questions to see if this role is a good fit.
                </p>
              </div>
              <form onSubmit={handlePreQual} className="reveal glass rounded-2xl p-8 md:p-10 space-y-6">
                {job.preQualQuestions.map((q) => (
                  <QuestionField
                    key={q.id}
                    q={q}
                    value={answers[q.id] || ""}
                    onChange={(val) => setAnswer(q.id, val)}
                  />
                ))}
                <button
                  type="submit"
                  disabled={!allRequired}
                  className="w-full btn-primary text-center py-4 text-lg font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Check My Eligibility
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="text-center mb-10 reveal">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  You qualify for this position!
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                  Complete Your Application
                </h2>
                <p className="text-white/90 text-lg">
                  You meet the basic requirements. Fill in your contact info to apply.
                </p>
              </div>
              <form onSubmit={handleApply} className="reveal glass rounded-2xl p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/95 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo((p) => ({ ...p, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/95 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo((p) => ({ ...p, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/95 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo((p) => ({ ...p, phone: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent"
                    placeholder="(480) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-white/95 mb-2">
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
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
            Questions About This Position?
          </h2>
          <p className="text-white/90 mb-6">Give us a call or send an email.</p>
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
