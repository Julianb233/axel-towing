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

/* ── Violation Types ── */
const VIOLATION_TYPES = [
  { value: "unauthorized-parking", label: "Unauthorized Parking" },
  { value: "expired-permit", label: "Expired Permit" },
  { value: "abandoned-vehicle", label: "Abandoned Vehicle" },
  { value: "fire-lane", label: "Fire Lane Violation" },
  { value: "handicap-violation", label: "Handicap Parking Violation" },
  { value: "double-parked", label: "Double Parked" },
  { value: "blocking-access", label: "Blocking Access / Driveway" },
  { value: "no-permit", label: "No Parking Permit Displayed" },
  { value: "other", label: "Other" },
];

/* ── Urgency Levels ── */
const URGENCY_LEVELS = [
  { value: "standard", label: "Standard - Within 2 hours during business hours", color: "text-blue-600" },
  { value: "priority", label: "Priority - Within 1 hour", color: "text-amber-600" },
  { value: "emergency", label: "Emergency - Immediate (fire lane, blocking access)", color: "text-red-600" },
];

interface FormData {
  propertyName: string;
  managerName: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleColor: string;
  vehiclePlate: string;
  locationOnProperty: string;
  violationType: string;
  urgencyLevel: string;
  additionalNotes: string;
}

const INITIAL_FORM: FormData = {
  propertyName: "",
  managerName: "",
  email: "",
  phone: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleColor: "",
  vehiclePlate: "",
  locationOnProperty: "",
  violationType: "",
  urgencyLevel: "standard",
  additionalNotes: "",
};

export default function TowRequestPage() {
  const parallaxRef = useParallax();
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [referenceId, setReferenceId] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("submitting");

    const refId = `TOW-${Date.now().toString(36).toUpperCase()}`;

    try {
      const res = await fetch("/api/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referenceId: refId,
          type: "tow-request",
          contactName: formData.managerName,
          contactEmail: formData.email,
          contactPhone: formData.phone,
          propertyName: formData.propertyName,
          propertyAddress: formData.locationOnProperty,
          urgent: formData.urgencyLevel === "emergency",
          vehicleDescription: `${formData.vehicleColor} ${formData.vehicleMake} ${formData.vehicleModel}`.trim(),
          vehiclePlate: formData.vehiclePlate,
          violationType: formData.violationType,
          urgencyLevel: formData.urgencyLevel,
          additionalNotes: formData.additionalNotes,
        }),
      });

      if (res.ok) {
        setReferenceId(refId);
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const estimatedTime = {
    standard: "within 2 hours",
    priority: "within 1 hour",
    emergency: "within 15-30 minutes",
  }[formData.urgencyLevel] || "within 2 hours";

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[40vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/optimized/axle-towing-hero-parking-lot-phoenix-az.webp)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="reveal max-w-3xl">
            <Link
              href="/portal"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Portal
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Submit a <span className="text-gradient">Tow Request</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Property managers: fill out this form to request a tow from your property.
              Our dispatch team will respond based on your selected urgency level.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left sidebar info */}
            <div className="lg:col-span-1 reveal">
              <div className="sticky top-28 space-y-6">
                {/* Emergency note */}
                <div className="glass-card-white rounded-2xl p-6 shadow-md border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-blue-900 font-heading text-sm">Emergency Tow?</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        For fire lane violations or vehicles blocking access, call dispatch directly:
                      </p>
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="inline-flex items-center gap-2 mt-2 text-red-600 font-bold text-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response times */}
                <div className="glass-card-white rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-blue-900 font-heading mb-4">Estimated Response Times</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Standard</p>
                        <p className="text-xs text-gray-500">Within 2 hours (business hours)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Priority</p>
                        <p className="text-xs text-gray-500">Within 1 hour</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Emergency</p>
                        <p className="text-xs text-gray-500">15-30 minutes (fire lane, blocking)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photos info */}
                <div className="glass-card-white rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-blue-900 font-heading mb-2">Photo Tips</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Photos help our team respond faster. If possible, include photos of:
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Vehicle license plate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Location of the vehicle on property
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Parking signage nearby
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Any visible violations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2 reveal">
              <div className="glass-form rounded-2xl p-8 md:p-10 shadow-xl">
                {formState === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3 font-heading">
                      Tow Request Submitted
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Your request has been sent to our dispatch team.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg mb-6">
                      <span className="text-sm text-gray-600">Reference ID:</span>
                      <span className="font-mono font-bold text-primary">{referenceId}</span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 mb-6 max-w-md mx-auto">
                      <h4 className="font-bold text-blue-900 font-heading mb-2">Estimated Response Time</h4>
                      <p className="text-lg font-semibold text-primary">{estimatedTime}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Our dispatch team will contact you to confirm
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => {
                          setFormState("idle");
                          setFormData(INITIAL_FORM);
                          setReferenceId("");
                        }}
                        className="btn-primary"
                      >
                        Submit Another Request
                      </button>
                      <Link href="/portal" className="btn-secondary">
                        Back to Portal
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                      Tow Request Form
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Provide details about the vehicle and violation. All fields marked with * are required.
                    </p>

                    {formState === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium text-red-800">Failed to submit request</p>
                          <p className="text-sm text-red-600 mt-1">
                            Please try again or call dispatch at{" "}
                            <a href={`tel:${COMPANY.phone}`} className="font-semibold underline">{COMPANY.phone}</a>
                          </p>
                        </div>
                      </div>
                    )}

                    <form className="space-y-8" onSubmit={handleSubmit}>
                      {/* Property & Manager Info */}
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4 font-heading">
                          Property & Contact Information
                        </h3>
                        <div className="space-y-4">
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
                                Manager Name *
                              </label>
                              <input
                                type="text"
                                name="managerName"
                                required
                                value={formData.managerName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                                placeholder="Full name"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email *
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
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone *
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
                        </div>
                      </div>

                      {/* Vehicle Info */}
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4 font-heading">
                          Vehicle Description
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Make *
                              </label>
                              <input
                                type="text"
                                name="vehicleMake"
                                required
                                value={formData.vehicleMake}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                                placeholder="e.g. Toyota"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Model *
                              </label>
                              <input
                                type="text"
                                name="vehicleModel"
                                required
                                value={formData.vehicleModel}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                                placeholder="e.g. Camry"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Color *
                              </label>
                              <input
                                type="text"
                                name="vehicleColor"
                                required
                                value={formData.vehicleColor}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                                placeholder="e.g. Silver"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              License Plate
                            </label>
                            <input
                              type="text"
                              name="vehiclePlate"
                              value={formData.vehiclePlate}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white uppercase"
                              placeholder="e.g. ABC1234 (if visible)"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Location & Violation */}
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4 font-heading">
                          Location & Violation Details
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Location on Property *
                            </label>
                            <input
                              type="text"
                              name="locationOnProperty"
                              required
                              value={formData.locationOnProperty}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                              placeholder="e.g. Building C, Spot #42, near the east dumpster"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Violation Type *
                            </label>
                            <select
                              name="violationType"
                              required
                              value={formData.violationType}
                              onChange={handleChange}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                            >
                              <option value="">Select violation type...</option>
                              {VIOLATION_TYPES.map((vt) => (
                                <option key={vt.value} value={vt.value}>
                                  {vt.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Photos Upload (optional) */}
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4 font-heading">
                          Photos (Optional)
                        </h3>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary transition-colors">
                          <svg className="w-10 h-10 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                          </svg>
                          <p className="text-sm text-gray-600 mb-1">
                            Photo upload coming soon
                          </p>
                          <p className="text-xs text-gray-400">
                            For now, you can text photos directly to dispatch at {COMPANY.phone}
                          </p>
                        </div>
                      </div>

                      {/* Urgency Level */}
                      <div>
                        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4 font-heading">
                          Urgency Level *
                        </h3>
                        <div className="space-y-3">
                          {URGENCY_LEVELS.map((level) => (
                            <label
                              key={level.value}
                              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                                formData.urgencyLevel === level.value
                                  ? "border-primary bg-blue-50 shadow-sm"
                                  : "border-gray-200 hover:border-gray-300 bg-white"
                              }`}
                            >
                              <input
                                type="radio"
                                name="urgencyLevel"
                                value={level.value}
                                checked={formData.urgencyLevel === level.value}
                                onChange={handleChange}
                                className="w-5 h-5 text-primary focus:ring-primary"
                              />
                              <span className={`text-sm font-medium ${level.color}`}>
                                {level.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Notes
                        </label>
                        <textarea
                          name="additionalNotes"
                          rows={3}
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white resize-none"
                          placeholder="Any additional details that would help our dispatch team..."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors text-lg font-heading tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formState === "submitting" ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting Request...
                          </span>
                        ) : (
                          "Submit Tow Request"
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
