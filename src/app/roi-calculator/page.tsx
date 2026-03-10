"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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

/* ── Animated Number Display ── */
function AnimatedValue({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [displayed, setDisplayed] = useState(0);
  const prevRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const from = prevRef.current;
    const to = value;
    const duration = 600;
    let start = 0;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplayed(Math.round(from + (to - from) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    prevRef.current = to;

    return () => cancelAnimationFrame(rafRef.current);
  }, [value]);

  return (
    <span>
      {prefix}{displayed.toLocaleString()}{suffix}
    </span>
  );
}

/* ── Property Types ── */
const PROPERTY_TYPES = [
  { value: "apartment", label: "Apartment Complex" },
  { value: "hoa", label: "HOA Community" },
  { value: "commercial", label: "Commercial Property" },
  { value: "retail", label: "Retail / Shopping Center" },
  { value: "medical", label: "Medical Office / Facility" },
];

/* ── Calculate results based on inputs ── */
function calculateResults(propertyType: string, spaces: number, violations: number, complaints: number) {
  // Reduction percentage varies slightly by property type
  const reductionMap: Record<string, number> = {
    apartment: 0.92,
    hoa: 0.88,
    commercial: 0.90,
    retail: 0.93,
    medical: 0.95,
  };

  // Property value impact per space varies by type
  const valuePerSpaceMap: Record<string, number> = {
    apartment: 85,
    hoa: 65,
    commercial: 120,
    retail: 150,
    medical: 130,
  };

  const reductionRate = reductionMap[propertyType] || 0.90;
  const valuePerSpace = valuePerSpaceMap[propertyType] || 100;

  const violationReduction = Math.round(reductionRate * 100);
  const complaintsAfter = Math.max(1, Math.round(complaints * 0.1));
  const propertyValueImpact = Math.round(spaces * valuePerSpace);
  const violationsAfter = Math.max(1, Math.round(violations * (1 - reductionRate)));

  return {
    violationReduction,
    complaintsAfter,
    propertyValueImpact,
    violationsAfter,
  };
}

export default function ROICalculatorPage() {
  const parallaxRef = useParallax();

  const [propertyType, setPropertyType] = useState("apartment");
  const [spaces, setSpaces] = useState(100);
  const [violations, setViolations] = useState(30);
  const [complaints, setComplaints] = useState(15);

  const results = calculateResults(propertyType, spaces, violations, complaints);

  const handleSpaces = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSpaces(Number(e.target.value));
  }, []);

  const handleViolations = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setViolations(Number(e.target.value));
  }, []);

  const handleComplaints = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setComplaints(Number(e.target.value));
  }, []);

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(${COMPANY.heroImage})` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Calculate Your <span className="text-gradient">ROI</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              See the impact professional parking enforcement can have on your property
              &mdash; completely free of charge.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator Section ── */}
      <section className="py-20 bg-white wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ── Input Form ── */}
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 font-heading">
                Tell Us About Your Property
              </h2>
              <p className="text-gray-600 mb-8">
                Adjust the sliders to match your property and see estimated results instantly.
              </p>

              <div className="glass-form rounded-2xl p-8 space-y-8">
                {/* Property Type */}
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 font-heading uppercase tracking-wider">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  >
                    {PROPERTY_TYPES.map((pt) => (
                      <option key={pt.value} value={pt.value}>
                        {pt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Parking Spaces */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider">
                      Parking Spaces
                    </label>
                    <span className="text-lg font-bold text-primary font-heading">{spaces}</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={500}
                    step={5}
                    value={spaces}
                    onChange={handleSpaces}
                    className="w-full h-2 bg-blue-100 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>20</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Monthly Violations */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider">
                      Monthly Violations
                    </label>
                    <span className="text-lg font-bold text-primary font-heading">{violations}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={100}
                    step={1}
                    value={violations}
                    onChange={handleViolations}
                    className="w-full h-2 bg-blue-100 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>5</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Monthly Complaints */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-blue-900 font-heading uppercase tracking-wider">
                      Monthly Complaints
                    </label>
                    <span className="text-lg font-bold text-primary font-heading">{complaints}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={1}
                    value={complaints}
                    onChange={handleComplaints}
                    className="w-full h-2 bg-blue-100 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0</span>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Results ── */}
            <div className="reveal delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 font-heading">
                Your Estimated Results
              </h2>
              <p className="text-gray-600 mb-8">
                Based on real outcomes from properties like yours across Phoenix.
              </p>

              <div className="space-y-6">
                {/* Violation Reduction */}
                <div className="glass-card-white rounded-2xl p-6 shadow-md border-l-4 border-green-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider font-heading">
                        Estimated Violation Reduction
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        From {violations} to ~{results.violationsAfter} violations/month
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-green-600 font-heading">
                      <AnimatedValue value={results.violationReduction} suffix="%" />
                    </div>
                  </div>
                </div>

                {/* Complaints After */}
                <div className="glass-card-white rounded-2xl p-6 shadow-md border-l-4 border-blue-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider font-heading">
                        Monthly Complaints After Enforcement
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Down from {complaints} complaints/month
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-primary font-heading">
                      <AnimatedValue value={results.complaintsAfter} prefix="~" />
                    </div>
                  </div>
                </div>

                {/* Property Value Impact */}
                <div className="glass-card-white rounded-2xl p-6 shadow-md border-l-4 border-primary">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider font-heading">
                        Est. Annual Property Value Impact
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Based on {spaces} spaces at market rates
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-primary font-heading">
                      <AnimatedValue value={results.propertyValueImpact} prefix="$" />
                    </div>
                  </div>
                </div>

                {/* Time to Results */}
                <div className="glass-card-white rounded-2xl p-6 shadow-md border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider font-heading">
                        Time to See Results
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Most properties see major improvement in weeks
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-yellow-600 font-heading">
                      &lt; 30 days
                    </div>
                  </div>
                </div>

                {/* Your Cost */}
                <div className="glass rounded-2xl p-6 bg-gradient-to-r from-blue-900 to-primary text-white glow-blue">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white/70 uppercase tracking-wider font-heading">
                        Your Total Cost
                      </div>
                      <div className="text-sm text-white/60 mt-1">
                        Our service is always 100% free for property owners
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-white font-heading">
                      $0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              How Our Free Model Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              You might be wondering how we provide all this at no cost. It&rsquo;s simple.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "We Install & Patrol",
                desc: "Free signage installation, customized patrol schedules, and 24/7 on-call service for your property.",
              },
              {
                step: "02",
                title: "Violations Are Towed",
                desc: "Unauthorized vehicles are removed quickly and legally, with full photo documentation for every tow.",
              },
              {
                step: "03",
                title: "Impound Fees Cover Costs",
                desc: "Arizona law mandates impound fees paid by the vehicle owner. These fees fund our entire operation — you pay nothing.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`reveal glass-card-white rounded-2xl p-8 shadow-md text-center delay-${(i + 1) * 100}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-5 text-xl font-bold font-heading">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-heading">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to See These Results on Your Property?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation assessment of your parking situation. We&rsquo;ll show you exactly how
            Axle Towing can help &mdash; and it won&rsquo;t cost you a thing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Get Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
