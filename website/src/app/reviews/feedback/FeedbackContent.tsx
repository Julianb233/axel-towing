"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

interface FeedbackForm {
  name: string;
  email: string;
  phone: string;
  propertyName: string;
  dateOfService: string;
  whatWentWrong: string;
  whatWeCanDoBetter: string;
}

const INITIAL: FeedbackForm = {
  name: "",
  email: "",
  phone: "",
  propertyName: "",
  dateOfService: "",
  whatWentWrong: "",
  whatWeCanDoBetter: "",
};

export default function FeedbackContent() {
  const [form, setForm] = useState<FeedbackForm>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof FeedbackForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || (!form.email.trim() && !form.phone.trim())) {
      setError("Please provide your name and at least one contact method.");
      return;
    }
    if (!form.whatWentWrong.trim()) {
      setError("Please describe what went wrong so we can address it.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "review-feedback-form",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please try again or call us at 480-288-5526."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <>
        <section className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-10 h-10 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Thank You for Your Feedback
            </h1>
            <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
              We take every concern seriously. Our team will review your feedback
              and reach out within <strong>24 hours</strong> to discuss how we
              can make things right.
            </p>
            <Link href="/reviews" className="btn-secondary">
              Back to Reviews
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
            We Want to <span className="text-gradient">Hear From You</span>
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Your feedback is private and goes directly to our management team.
            We&apos;ll work to resolve any issues promptly.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
          >
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                {error}
              </div>
            )}

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-blue-900 mb-2"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                placeholder="John Smith"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-blue-900 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-blue-900 mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="(480) 555-1234"
                />
              </div>
            </div>

            {/* Property Name & Date of Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="propertyName"
                  className="block text-sm font-semibold text-blue-900 mb-2"
                >
                  Property Name
                </label>
                <input
                  id="propertyName"
                  type="text"
                  value={form.propertyName}
                  onChange={(e) => update("propertyName", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="Sunset Apartments"
                />
              </div>
              <div>
                <label
                  htmlFor="dateOfService"
                  className="block text-sm font-semibold text-blue-900 mb-2"
                >
                  Date of Service
                </label>
                <input
                  id="dateOfService"
                  type="date"
                  value={form.dateOfService}
                  onChange={(e) => update("dateOfService", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* What Went Wrong */}
            <div>
              <label
                htmlFor="whatWentWrong"
                className="block text-sm font-semibold text-blue-900 mb-2"
              >
                What Went Wrong? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="whatWentWrong"
                rows={4}
                value={form.whatWentWrong}
                onChange={(e) => update("whatWentWrong", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-y"
                placeholder="Please describe the issue you experienced..."
              />
            </div>

            {/* What We Can Do Better */}
            <div>
              <label
                htmlFor="whatWeCanDoBetter"
                className="block text-sm font-semibold text-blue-900 mb-2"
              >
                What Can We Do Better?
              </label>
              <textarea
                id="whatWeCanDoBetter"
                rows={3}
                value={form.whatWeCanDoBetter}
                onChange={(e) => update("whatWeCanDoBetter", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-y"
                placeholder="Any suggestions for improvement..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Feedback"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Your feedback is private and will not be published online. Our team
              will reach out within 24 hours.
            </p>
          </form>

          {/* Back link */}
          <div className="text-center mt-8">
            <Link
              href="/reviews/leave-review"
              className="text-primary hover:underline font-medium inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Leave a Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
