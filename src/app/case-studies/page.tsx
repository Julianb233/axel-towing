"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{prefix}{count}{suffix}</div>;
}

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

/* ── Case Study Data ── */
const CASE_STUDIES = [
  {
    id: "phoenix-apartment",
    title: "240-Unit Phoenix Apartment Complex",
    tag: "Residential",
    timelineBadge: "30 Day Results",
    problem: "The property was dealing with 50+ unauthorized vehicles daily, constant tenant complaints about unavailable parking, and repeated fire lane violations that put the community at risk. Previous towing providers were inconsistent and hard to reach.",
    solution: "Axle Towing installed compliant signage at all entry points and throughout the lot, implemented 3x per week patrols with randomized schedules, and provided 24/7 on-call service for urgent removals. The digital portal gave management real-time visibility into every tow.",
    timeline: "Results in first 30 days",
    stats: [
      { label: "Violation Reduction", value: 92, suffix: "%", prefix: "" },
      { label: "Fire Lane Violations", value: 0, suffix: "", prefix: "" },
      { label: "Tenant Satisfaction Increase", value: 40, suffix: "%", prefix: "+" },
      { label: "Days to See Results", value: 30, suffix: "", prefix: "<" },
    ],
    quote: "We went from fielding parking complaints daily to almost none. Axle Towing transformed our community's parking situation in less than a month.",
    quoteName: "Maria L.",
    quoteRole: "Community Manager",
    beforeAfter: {
      before: {
        items: ["50+ unauthorized vehicles daily", "Weekly tenant complaints", "Regular fire lane violations", "No documentation or reporting"],
        stats: { violations: "50+/day", complaints: "7+/week", liability: "3 incidents/mo" },
      },
      after: {
        items: ["< 5 violations per week", "Near-zero complaints", "Zero fire lane violations", "Full digital reporting portal"],
        stats: { violations: "<5/week", complaints: "0/month", liability: "0 incidents" },
      },
    },
  },
  {
    id: "scottsdale-hoa",
    title: "Scottsdale HOA Community (450 Homes)",
    tag: "HOA",
    timelineBadge: "60 Day Results",
    problem: "Guest parking areas were chronically abused by non-residents, RV and boat storage violations were rampant, and the HOA board was receiving 12+ complaints per week. Previous enforcement efforts were seen as inconsistent and unfair by homeowners.",
    solution: "Axle Towing designed a custom permit system for residents and guests, implemented structured guest parking management with clear time limits, and established consistent RV and oversized vehicle enforcement aligned with HOA CC&Rs.",
    timeline: "Measurable improvement within 45 days",
    stats: [
      { label: "Weekly Complaints", value: 1, suffix: "/mo", prefix: "" },
      { label: "From Weekly Complaints", value: 12, suffix: "/wk", prefix: "" },
      { label: "Resident Approval", value: 94, suffix: "%", prefix: "" },
      { label: "Property Value Impact", value: 0, suffix: "", prefix: "+" },
    ],
    quote: "The board was spending half of every meeting on parking complaints. Now it's not even on the agenda. Axle's permit system was exactly what we needed.",
    quoteName: "David K.",
    quoteRole: "HOA Board President",
    beforeAfter: {
      before: {
        items: ["12 complaints per week", "Guest parking chronically abused", "RV storage violations everywhere", "Board meetings dominated by parking"],
        stats: { violations: "20+/week", complaints: "12/week", liability: "2 disputes/mo" },
      },
      after: {
        items: ["1 complaint per month", "Structured guest parking system", "Full RV enforcement compliance", "Parking removed from agenda"],
        stats: { violations: "2/month", complaints: "1/month", liability: "0 disputes" },
      },
    },
  },
  {
    id: "mesa-retail",
    title: "Mesa Retail Shopping Center (120,000 sq ft)",
    tag: "Commercial",
    timelineBadge: "90 Day Results",
    problem: "Employees from neighboring businesses were parking in customer spots all day, effectively stealing 30-40 parking spaces. Customer complaints were rising and foot traffic was declining, directly impacting tenant revenue.",
    solution: "Axle Towing implemented time-limited parking enforcement with clear signage, created a commercial permit system for tenant employees in designated areas, and ran evening patrols to prevent overnight abandoned vehicles.",
    timeline: "Revenue impact within 60 days",
    stats: [
      { label: "More Available Parking", value: 35, suffix: "%", prefix: "+" },
      { label: "Tenant Revenue Increase", value: 18, suffix: "%", prefix: "+" },
      { label: "Customer Complaints", value: 0, suffix: "", prefix: "" },
      { label: "Abandoned Vehicles Removed", value: 24, suffix: "", prefix: "" },
    ],
    quote: "Our tenants noticed the difference immediately. More customer parking means more foot traffic means more revenue. The ROI is undeniable -- and it didn't cost us a penny.",
    quoteName: "James R.",
    quoteRole: "Shopping Center Owner",
    beforeAfter: {
      before: {
        items: ["30-40 spaces taken by non-customers", "Rising customer complaints", "Declining foot traffic", "Overnight abandoned vehicles"],
        stats: { violations: "35+/day", complaints: "10+/week", liability: "4 incidents/mo" },
      },
      after: {
        items: ["35% more available customer parking", "Near-zero parking complaints", "18% revenue increase for tenants", "Evening patrols prevent abandonment"],
        stats: { violations: "1-2/week", complaints: "0/month", liability: "0 incidents" },
      },
    },
  },
];

/* ── Before Stats Card ── */
function BeforeStatsCard({ stats, items }: { stats: { violations: string; complaints: string; liability: string }; items: string[] }) {
  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "Violations", value: stats.violations },
          { label: "Complaints", value: stats.complaints },
          { label: "Liability", value: stats.liability },
        ].map((s) => (
          <div key={s.label} className="bg-red-100/80 rounded-lg p-2 text-center">
            <div className="text-red-700 font-bold font-heading text-sm">{s.value}</div>
            <div className="text-red-500 text-[10px] font-medium uppercase">{s.label}</div>
          </div>
        ))}
      </div>
      <ul className="space-y-2 flex-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-red-800/80">
            <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── After Stats Card ── */
function AfterStatsCard({ stats, items }: { stats: { violations: string; complaints: string; liability: string }; items: string[] }) {
  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "Violations", value: stats.violations },
          { label: "Complaints", value: stats.complaints },
          { label: "Liability", value: stats.liability },
        ].map((s) => (
          <div key={s.label} className="bg-green-100/80 rounded-lg p-2 text-center">
            <div className="text-green-700 font-bold font-heading text-sm">{s.value}</div>
            <div className="text-green-600 text-[10px] font-medium uppercase">{s.label}</div>
          </div>
        ))}
      </div>
      <ul className="space-y-2 flex-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-green-800/80">
            <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CaseStudiesPage() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/hero-parking-lot.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Real Results for <span className="text-gradient">Real Properties</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              See how Phoenix property managers solved their parking challenges with Axle Towing &amp; Impound
              &mdash; at zero cost.
            </p>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      {CASE_STUDIES.map((cs, index) => (
        <section
          key={cs.id}
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} ${index === 0 ? "wave-separator" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with Timeline Badge */}
            <div className="reveal text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold font-heading uppercase tracking-wider">
                  {cs.tag}
                </span>
                <span className="inline-block bg-amber-50 border border-amber-200 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold font-heading uppercase tracking-wider">
                  {cs.timelineBadge}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-heading">
                {cs.title}
              </h2>
            </div>

            {/* Problem / Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="reveal glass-card-white rounded-2xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-500 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 font-heading">The Problem</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{cs.problem}</p>
              </div>
              <div className="reveal glass-card-white rounded-2xl p-8 shadow-md delay-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 font-heading">Our Solution</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
              </div>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {cs.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="reveal glass-card-white rounded-2xl p-6 text-center shadow-md"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary font-heading">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className="text-sm text-gray-700 mt-2 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Before/After Interactive Slider */}
            <div className="mb-12 reveal">
              <BeforeAfterSlider
                beforeLabel="Before Axle"
                afterLabel="After Axle"
                beforeContent={
                  <BeforeStatsCard stats={cs.beforeAfter.before.stats} items={cs.beforeAfter.before.items} />
                }
                afterContent={
                  <AfterStatsCard stats={cs.beforeAfter.after.stats} items={cs.beforeAfter.after.items} />
                }
              />
            </div>

            {/* Testimonial Card */}
            <div className="reveal max-w-3xl mx-auto">
              <div className="glass-card-white rounded-2xl p-8 md:p-10 shadow-md border-glow-blue relative overflow-hidden">
                {/* Decorative quote background */}
                <div className="absolute top-4 right-6 text-primary/5 pointer-events-none">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    &ldquo;{cs.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading text-lg">
                      {cs.quoteName.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-blue-900 font-heading">{cs.quoteName}</div>
                      <div className="text-sm text-gray-700">{cs.quoteRole}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-block text-xs text-primary font-heading font-semibold uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                        {cs.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA Banner ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Your Property Could Be Our Next Success Story
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Every case study above started with a single phone call. Let us show you what professional
            parking enforcement can do for your property &mdash; at absolutely no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
