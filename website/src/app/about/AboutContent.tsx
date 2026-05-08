"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
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

  return <div ref={ref}>{count}{suffix}</div>;
}

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

const STATS = [
  { value: 30, suffix: "+", label: "Years Combined Experience" },
  { value: 6, suffix: "+", label: "Trucks in Our Fleet" },
  { value: 8, suffix: "", label: "Cities Served" },
  { value: 1000, suffix: "s+", label: "Properties Served" },
];

const VALUES = [
  {
    title: "Integrity",
    desc: "Every tow is documented, every process is legally compliant, and every interaction is handled with complete transparency.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Professionalism",
    desc: "Our drivers are trained, certified, and courteous. We represent your property with the same care you would expect from your own team.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "We are a Phoenix-based company serving Phoenix communities. We invest in the neighborhoods we serve and treat every property like our own.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const DIFFERENTIATORS = [
  {
    title: "Modern Technology, Real-Time Tracking",
    desc: "While other towing companies rely on paper logs and phone calls, we provide a digital portal with real-time tow tracking, automated reporting, and instant notifications. Your property management has never been this easy.",
    align: "left" as const,
  },
  {
    title: "Zero Cost to Property Owners",
    desc: "Our business model is built so that property owners and managers never pay a dime. All costs are covered through legally mandated impound fees. No hidden charges, no contracts with surprise costs, no monthly retainers.",
    align: "right" as const,
  },
  {
    title: "Legal Compliance Expertise",
    desc: "Arizona towing law is complex. We ensure every sign, every notification, and every tow meets ARS requirements. Our compliance-first approach protects your property from liability and keeps your parking program on solid legal ground.",
    align: "left" as const,
  },
];

const TEAM = [
  { name: "Executive Leadership", role: "Operations & Strategy", initials: "EL" },
  { name: "Field Operations Lead", role: "Fleet & Dispatch", initials: "FO" },
  { name: "Client Relations Manager", role: "Partnerships & Support", initials: "CR" },
];

export default function AboutContent() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[60vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/optimized/axle-towing-about-team-phoenix-az.webp)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              About <span className="text-gradient">Axle Towing &amp; Impound</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Phoenix&rsquo;s modern approach to private property towing and parking enforcement.
              Built on integrity, powered by technology.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 bg-white wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-heading">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Axle Towing &amp; Impound was founded in {COMPANY.foundedYear} with a clear mission: to give
                  Phoenix property owners a modern, ethical, and professional solution to their
                  unauthorized parking challenges &mdash; at absolutely no cost.
                </p>
                <p>
                  Starting from our Apache Junction location, we built a reputation for responsive
                  service, legal compliance, and genuine partnership with the communities we serve.
                  Our founding team brought over 30 years of combined industry experience, applying
                  that knowledge to reimagine what a towing company could be.
                </p>
                <p>
                  In January 2025, growing demand led us to open our second location in Phoenix at
                  320 E. Pioneer St., expanding our capacity to serve the greater metro area with
                  even faster response times.
                </p>
              </div>
            </div>
            <div className="reveal-right">
              <div className="glass-card-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-6 font-heading">Timeline</h3>
                <div className="space-y-6">
                  {[
                    { year: "2021", event: "Founded in Apache Junction, AZ" },
                    { year: "2022", event: "Expanded fleet to 4 trucks, 50+ properties" },
                    { year: "2023", event: "Launched digital property manager portal" },
                    { year: "2024", event: "Grew to 6+ trucks, serving 38 cities" },
                    { year: "2025", event: "Opened Phoenix location at 320 E. Pioneer St." },
                  ].map((item, i) => (
                    <div key={item.year} className="flex gap-4 items-start">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                          {item.year.slice(2)}
                        </div>
                        {i < 4 && <div className="w-px h-6 bg-blue-200 mt-1" />}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary">{item.year}</div>
                        <div className="text-gray-600">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Mission ── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal">
            <div className="glass rounded-2xl p-10 md:p-14 glow-blue">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">Our Mission</h2>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                To provide professional, ethical, and legally compliant private property towing
                services that protect property owners and communities &mdash; while treating every
                individual we interact with respectfully. We believe towing can be done right:
                transparently, efficiently, and at zero cost to the people we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── By The Numbers ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-heading">
              By The Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal glass-card-white rounded-2xl p-6 text-center shadow-md delay-${(i + 1) * 100}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary font-heading">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-700 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything we do is guided by these core principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`reveal glass-card-white rounded-2xl p-8 text-center shadow-md delay-${(i + 1) * 100}`}
              >
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5 border-glow-blue">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-heading">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why We're Different ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Why We&rsquo;re Different
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&rsquo;re not your typical towing company. Here&rsquo;s what sets us apart.
            </p>
          </div>
          <div className="space-y-16">
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={d.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${d.align === "right" ? "lg:direction-rtl" : ""}`}
              >
                <div className={d.align === "right" ? "reveal-right lg:order-2" : "reveal-left"}>
                  <div className="glass-card-white rounded-2xl p-8 shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4 text-xl font-bold font-heading">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4 font-heading">{d.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{d.desc}</p>
                  </div>
                </div>
                <div className={d.align === "right" ? "reveal-left lg:order-1" : "reveal-right"}>
                  <div className="rounded-2xl h-64 relative overflow-hidden border border-blue-200">
                    <Image src={i === 0 ? IMAGES.about.office : i === 1 ? IMAGES.about.team : IMAGES.about.office} alt={d.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-8">
              <Image src={IMAGES.about.team} alt="Axle Towing team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Our Leadership
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A dedicated team with decades of combined industry experience, committed to
              modernizing private property towing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className={`reveal glass-card-white rounded-2xl p-8 text-center shadow-md delay-${(i + 1) * 100}`}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-400 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-5 font-heading">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-blue-900 font-heading">{member.name}</h3>
                <p className="text-gray-700 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Partner With Phoenix&rsquo;s Modern Towing Company
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Join hundreds of property managers who trust Axle Towing to protect their
            properties &mdash; professionally, legally, and at zero cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
