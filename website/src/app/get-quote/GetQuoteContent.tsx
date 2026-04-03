"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
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

/* ── Data ── */
const PROPERTY_TYPES = [
  { id: "apartment", label: "Apartment Complex", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" },
  { id: "hoa", label: "HOA Community", icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" },
  { id: "commercial", label: "Commercial / Retail", icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36c-.301 0-.558-.221-.6-.519C1.612 19.361 1.5 18.196 1.5 17c0-3.14.872-6.07 2.386-8.57.46-.76 1.144-1.105 1.864-1.105h14.5c.72 0 1.404.345 1.864 1.105A16.942 16.942 0 0124.5 17c0 1.196-.112 2.361-.26 3.481a.609.609 0 01-.6.519H13.5z" },
  { id: "office", label: "Office Building", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h1.75c.621 0 1.125.504 1.125 1.125V21" },
  { id: "medical", label: "Medical Facility", icon: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: "industrial", label: "Industrial / Warehouse", icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" },
  { id: "restaurant", label: "Restaurant", icon: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" },
  { id: "other", label: "Other", icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" },
];

const CITIES = [
  "Phoenix", "Scottsdale", "Mesa", "Tempe", "Chandler", "Gilbert", "Glendale", "Apache Junction",
];

const SERVICES_LIST = [
  { id: "impounds", label: "Private Property Impounds", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { id: "patrol", label: "Regular Parking Patrol", icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { id: "signage", label: "Signage Installation", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" },
  { id: "firelane", label: "Fire Lane Enforcement", icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" },
  { id: "handicap", label: "Handicap Enforcement", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: "guest", label: "Guest Parking Management", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { id: "relocations", label: "Vehicle Relocations", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
  { id: "oncall", label: "24/7 On-Call Service", icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" },
];

const STEP_LABELS = ["Property Type", "Details", "Services", "Contact", "Review"];

type FormData = {
  propertyType: string;
  propertyName: string;
  city: string;
  parkingSpaces: number;
  currentEnforcement: boolean | null;
  urgency: string;
  services: string[];
  fullName: string;
  email: string;
  phone: string;
  bestTime: string;
  notes: string;
};

const URGENCY_OPTIONS = [
  { id: "immediately", label: "Immediately (within 24 hours)" },
  { id: "this-week", label: "This week" },
  { id: "exploring", label: "Exploring options" },
];

const initialFormData: FormData = {
  propertyType: "",
  propertyName: "",
  city: "",
  parkingSpaces: 50,
  currentEnforcement: null,
  urgency: "",
  services: [],
  fullName: "",
  email: "",
  phone: "",
  bestTime: "",
  notes: "",
};

export default function GetQuoteContent() {
  const parallaxRef = useParallax();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  function canAdvance(): boolean {
    switch (step) {
      case 1: return formData.propertyType !== "";
      case 2: return formData.propertyName !== "" && formData.city !== "" && formData.currentEnforcement !== null && formData.urgency !== "";
      case 3: return formData.services.length > 0;
      case 4: return formData.fullName !== "" && formData.email !== "" && formData.phone !== "";
      default: return true;
    }
  }

  function next() {
    if (step < totalSteps && canAdvance()) {
      setDirection("forward");
      setStep((s) => s + 1);
    }
  }

  function back() {
    if (step > 1) {
      setDirection("back");
      setStep((s) => s - 1);
    }
  }

  function toggleService(id: string) {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const selectedPropertyLabel = PROPERTY_TYPES.find((p) => p.id === formData.propertyType)?.label || "";
  const selectedServiceLabels = SERVICES_LIST.filter((s) => formData.services.includes(s.id)).map((s) => s.label);

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[45vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/contact-phoenix.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="reveal max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
              <svg className="w-4 h-4 text-cta" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide">Takes only 60 seconds</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading leading-tight">
              Get Your Free Parking
              <br />
              <span className="text-gradient">Enforcement Quote</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl">
              Answer a few quick questions and we&rsquo;ll create a custom parking enforcement
              program for your property — completely free.
            </p>
          </div>
        </div>
      </section>

      {/* ── Multi-Step Form ── */}
      <section className="py-16 md:py-20 bg-gray-50 wave-separator">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="glass-card rounded-2xl p-10 md:p-14 text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-3 font-heading">
                Quote Request Submitted!
              </h2>
              <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto">
                Thank you, {formData.fullName}. Our team will reach out within 1 business hour
                with your custom parking enforcement proposal.
              </p>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-primary font-semibold px-6 py-3 rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Or call us: {COMPANY.phone}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  {STEP_LABELS.map((label, i) => {
                    const stepNum = i + 1;
                    const isActive = step === stepNum;
                    const isComplete = step > stepNum;
                    return (
                      <div key={label} className="flex flex-col items-center flex-1">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            isComplete
                              ? "bg-primary text-white shadow-md"
                              : isActive
                              ? "bg-primary text-white shadow-lg ring-4 ring-primary/20"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {isComplete ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          ) : (
                            stepNum
                          )}
                        </div>
                        <span
                          className={`text-xs mt-1.5 font-medium transition-colors hidden sm:block ${
                            isActive || isComplete ? "text-primary" : "text-gray-600"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cta rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Step Container with transitions */}
              <div className="glass-card rounded-2xl p-8 md:p-10 shadow-lg overflow-hidden">
                <div
                  key={step}
                  className={`${
                    direction === "forward" ? "animate-fade-in-up" : "animate-fade-in-down"
                  }`}
                  style={{ animationDuration: "0.35s" }}
                >
                  {/* ── Step 1: Property Type ── */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                        What type of property do you manage?
                      </h2>
                      <p className="text-gray-700 mb-6">Select the option that best describes your property.</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {PROPERTY_TYPES.map((pt) => (
                          <button
                            key={pt.id}
                            type="button"
                            onClick={() => setFormData((d) => ({ ...d, propertyType: pt.id }))}
                            className={`group relative flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer text-center ${
                              formData.propertyType === pt.id
                                ? "border-primary bg-blue-50 shadow-md ring-2 ring-primary/20"
                                : "border-gray-200 bg-white hover:border-primary/40 hover:bg-blue-50/50"
                            }`}
                          >
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                                formData.propertyType === pt.id
                                  ? "bg-primary text-white"
                                  : "bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-primary"
                              }`}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d={pt.icon} />
                              </svg>
                            </div>
                            <span className={`text-sm font-semibold ${formData.propertyType === pt.id ? "text-primary" : "text-gray-700"}`}>
                              {pt.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Step 2: Property Details ── */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                        Tell us about your property
                      </h2>
                      <p className="text-gray-700 mb-6">These details help us tailor our enforcement program.</p>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Property Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.propertyName}
                            onChange={(e) => setFormData((d) => ({ ...d, propertyName: e.target.value }))}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                            placeholder="e.g. Sunset Ridge Apartments"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                          <select
                            required
                            value={formData.city}
                            onChange={(e) => setFormData((d) => ({ ...d, city: e.target.value }))}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                          >
                            <option value="">Select city</option>
                            {CITIES.map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Parking Spaces: <span className="text-primary font-bold">{formData.parkingSpaces}</span>
                          </label>
                          <div className="relative">
                            <input
                              type="range"
                              min={10}
                              max={500}
                              step={10}
                              value={formData.parkingSpaces}
                              onChange={(e) => setFormData((d) => ({ ...d, parkingSpaces: Number(e.target.value) }))}
                              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-xs text-gray-600 mt-1 px-1">
                              <span>10</span>
                              <span>100</span>
                              <span>250</span>
                              <span>500+</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Do you currently have parking enforcement? *
                          </label>
                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() => setFormData((d) => ({ ...d, currentEnforcement: true }))}
                              className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold text-sm transition-all ${
                                formData.currentEnforcement === true
                                  ? "border-primary bg-blue-50 text-primary"
                                  : "border-gray-200 bg-white text-gray-600 hover:border-primary/40"
                              }`}
                            >
                              Yes
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData((d) => ({ ...d, currentEnforcement: false }))}
                              className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold text-sm transition-all ${
                                formData.currentEnforcement === false
                                  ? "border-primary bg-blue-50 text-primary"
                                  : "border-gray-200 bg-white text-gray-600 hover:border-primary/40"
                              }`}
                            >
                              No
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            How soon do you need service? *
                          </label>
                          <div className="flex flex-col sm:flex-row gap-3">
                            {URGENCY_OPTIONS.map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => setFormData((d) => ({ ...d, urgency: opt.id }))}
                                className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold text-sm transition-all ${
                                  formData.urgency === opt.id
                                    ? "border-primary bg-blue-50 text-primary"
                                    : "border-gray-200 bg-white text-gray-600 hover:border-primary/40"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Step 3: Services Needed ── */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                        Which services do you need?
                      </h2>
                      <p className="text-gray-700 mb-6">Select all that apply — all services are free for property owners.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SERVICES_LIST.map((svc) => {
                          const selected = formData.services.includes(svc.id);
                          return (
                            <button
                              key={svc.id}
                              type="button"
                              onClick={() => toggleService(svc.id)}
                              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                selected
                                  ? "border-primary bg-blue-50 shadow-md"
                                  : "border-gray-200 bg-white hover:border-primary/40 hover:bg-blue-50/50"
                              }`}
                            >
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                  selected ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {selected ? (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={svc.icon.split(" M")[0]} />
                                  </svg>
                                )}
                              </div>
                              <span className={`text-sm font-semibold ${selected ? "text-primary" : "text-gray-700"}`}>
                                {svc.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── Step 4: Contact Info ── */}
                  {step === 4 && (
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                        How can we reach you?
                      </h2>
                      <p className="text-gray-700 mb-6">We&rsquo;ll use this to send your custom proposal.</p>
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData((d) => ({ ...d, fullName: e.target.value }))}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white"
                              placeholder="(480) 555-1234"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Best time to call</label>
                          <div className="flex gap-3">
                            {["Morning", "Afternoon", "Evening"].map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setFormData((d) => ({ ...d, bestTime: t }))}
                                className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold text-sm transition-all ${
                                  formData.bestTime === t
                                    ? "border-primary bg-blue-50 text-primary"
                                    : "border-gray-200 bg-white text-gray-600 hover:border-primary/40"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                          <textarea
                            rows={3}
                            value={formData.notes}
                            onChange={(e) => setFormData((d) => ({ ...d, notes: e.target.value }))}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none bg-white"
                            placeholder="Any specific concerns or requirements..."
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Step 5: Review & Submit ── */}
                  {step === 5 && (
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900 mb-2 font-heading">
                        Review Your Quote Request
                      </h2>
                      <p className="text-gray-700 mb-6">Everything look right? Hit submit and we&rsquo;ll get started.</p>

                      <div className="space-y-4 mb-8">
                        {/* Property Info */}
                        <div className="bg-blue-50/70 rounded-xl p-5 border border-blue-100">
                          <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-3">Property</h3>
                          <div className="grid grid-cols-2 gap-y-2 text-sm">
                            <span className="text-gray-700">Type</span>
                            <span className="font-semibold text-gray-800">{selectedPropertyLabel}</span>
                            <span className="text-gray-700">Name</span>
                            <span className="font-semibold text-gray-800">{formData.propertyName}</span>
                            <span className="text-gray-700">City</span>
                            <span className="font-semibold text-gray-800">{formData.city}, AZ</span>
                            <span className="text-gray-700">Parking Spaces</span>
                            <span className="font-semibold text-gray-800">{formData.parkingSpaces}</span>
                            <span className="text-gray-700">Current Enforcement</span>
                            <span className="font-semibold text-gray-800">{formData.currentEnforcement ? "Yes" : "No"}</span>
                            <span className="text-gray-700">Service Urgency</span>
                            <span className="font-semibold text-gray-800">{URGENCY_OPTIONS.find((o) => o.id === formData.urgency)?.label || formData.urgency}</span>
                          </div>
                        </div>

                        {/* Services */}
                        <div className="bg-blue-50/70 rounded-xl p-5 border border-blue-100">
                          <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-3">Services Requested</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedServiceLabels.map((label) => (
                              <span
                                key={label}
                                className="inline-flex items-center gap-1.5 bg-white text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                {label}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-blue-50/70 rounded-xl p-5 border border-blue-100">
                          <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-3">Contact</h3>
                          <div className="grid grid-cols-2 gap-y-2 text-sm">
                            <span className="text-gray-700">Name</span>
                            <span className="font-semibold text-gray-800">{formData.fullName}</span>
                            <span className="text-gray-700">Email</span>
                            <span className="font-semibold text-gray-800">{formData.email}</span>
                            <span className="text-gray-700">Phone</span>
                            <span className="font-semibold text-gray-800">{formData.phone}</span>
                            {formData.bestTime && (
                              <>
                                <span className="text-gray-700">Best Time</span>
                                <span className="font-semibold text-gray-800">{formData.bestTime}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Key highlights */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="flex-1 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-green-700 font-heading">48 Hours</div>
                          <div className="text-xs text-green-600 font-medium">Estimated Setup Time</div>
                        </div>
                        <div className="flex-1 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-green-700 font-heading">$0</div>
                          <div className="text-xs text-green-600 font-medium">All Services Free for Property Owners</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Navigation Buttons ── */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-semibold transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!canAdvance()}
                      className={`btn-primary inline-flex items-center gap-2 ${
                        !canAdvance() ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      Next Step
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                      Submit Quote Request
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
