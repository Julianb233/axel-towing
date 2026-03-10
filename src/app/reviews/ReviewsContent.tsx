"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

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
      ref.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return ref;
}

const TESTIMONIALS = [
  {
    name: "Maria Gonzalez",
    role: "Property Manager",
    property: "Desert Ridge Apartments",
    city: "Phoenix, AZ",
    quote: "Axle Towing transformed our parking situation. We went from constant tenant complaints about unauthorized vehicles to a fully managed, professional enforcement program. And it costs us absolutely nothing.",
  },
  {
    name: "David Chen",
    role: "Community Manager",
    property: "Sunrise Village Apartments",
    city: "Mesa, AZ",
    quote: "Their response time is incredible. When we call about a violation, they\u2019re on-site in under 30 minutes. Our residents finally feel like their assigned spots are actually theirs. The digital portal is a huge bonus.",
  },
  {
    name: "Keisha Williams",
    role: "Regional Property Manager",
    property: "Canyon Creek Communities",
    city: "Tempe, AZ",
    quote: "I manage multiple apartment communities and Axle handles enforcement across all of them. Their reporting is detailed, their team is professional, and they\u2019ve never given me a reason to look elsewhere.",
  },
  {
    name: "Robert Thornton",
    role: "HOA Board President",
    property: "Copper Canyon HOA",
    city: "Gilbert, AZ",
    quote: "Our HOA struggled with parking enforcement for years. Axle came in, installed compliant signage, and set up a system that actually works. Our homeowners are thrilled and it didn\u2019t cost the association a penny.",
  },
  {
    name: "Patricia Nguyen",
    role: "HOA Board Member",
    property: "Saguaro Hills Community",
    city: "Scottsdale, AZ",
    quote: "What impressed me most was their knowledge of Arizona towing law. They ensured every sign, every process, and every tow was fully compliant. That legal protection is invaluable for our community.",
  },
  {
    name: "James Mitchell",
    role: "HOA Vice President",
    property: "Estrella Park HOA",
    city: "Glendale, AZ",
    quote: "The professionalism of the Axle team sets them apart. Their drivers are courteous, their documentation is thorough, and they treat our community with respect. I recommend them to every HOA board I know.",
  },
  {
    name: "Sarah Patel",
    role: "Property Director",
    property: "Metro Business Park",
    city: "Phoenix, AZ",
    quote: "Unauthorized parking in our business park was costing tenants customers. Axle\u2019s enforcement program cleared up the problem within weeks. Our commercial tenants are much happier and lease renewals are up.",
  },
  {
    name: "Mark Rodriguez",
    role: "Facilities Manager",
    property: "Valley Medical Plaza",
    city: "Chandler, AZ",
    quote: "In a medical facility, every parking space matters. Patients need access. Axle keeps our lot clear of unauthorized vehicles so our patients and staff always have parking. Their 24/7 availability is essential.",
  },
  {
    name: "Lisa Thompson",
    role: "Retail Center Manager",
    property: "Baseline Crossing Shopping Center",
    city: "Mesa, AZ",
    quote: "We had a major issue with non-customer vehicles taking up our retail parking. Axle solved it professionally and our store tenants have noticed a real increase in customer parking availability.",
  },
  {
    name: "Frank Delgado",
    role: "Property Owner",
    property: "Multi-Unit Rental Property",
    city: "Apache Junction, AZ",
    quote: "As a small landlord with a four-plex, I didn\u2019t think I could afford professional towing services. Turns out it\u2019s completely free. Axle handles everything and my tenants finally have the parking they\u2019re paying for.",
  },
  {
    name: "Karen Olsen",
    role: "Property Owner",
    property: "Private Parking Lot",
    city: "Phoenix, AZ",
    quote: "People were constantly parking in my lot to walk to nearby businesses. Axle put up signs, set up enforcement, and the problem disappeared. I wish I\u2019d called them years ago. Zero cost, zero hassle.",
  },
  {
    name: "Anthony Reeves",
    role: "Property Owner",
    property: "Mixed-Use Development",
    city: "Tempe, AZ",
    quote: "Axle\u2019s modern approach impressed me. Real-time tracking, digital reports, instant notifications \u2014 it\u2019s not what you expect from a towing company. They\u2019re more like a technology-powered property partner.",
  },
];

const STATS = [
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 500, suffix: "+", label: "Properties Served" },
  { value: 30, suffix: " Min", label: "Avg Response Time" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

function StarRating() {
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsContent() {
  const parallaxRef = useParallax();

  return (
    <>
      {/* ── Parallax Hero ── */}
      <section className="parallax-container relative min-h-[50vh] flex items-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/testimonial-bg.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              What Our Partners <span className="text-gradient">Say</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Hear from property managers, HOA boards, and property owners across
              the Phoenix metro area who trust Axle Towing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Google Reviews Badge + Write a Review CTA ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Google Reviews Badge */}
            <div className="glass-card-white rounded-2xl px-8 py-5 flex items-center gap-4 shadow-md">
              <div className="flex items-center gap-1">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
                </svg>
                <span className="text-lg font-bold text-blue-900 font-heading">Google Reviews</span>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-bold text-blue-900 font-heading">4.9</span>
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500">Based on 127 reviews</p>
              </div>
            </div>

            {/* Write a Review CTA */}
            <a
              href="https://g.page/axletowing/review"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-white rounded-2xl px-8 py-5 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow group"
            >
              <svg className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <div>
                <span className="text-lg font-bold text-blue-900 font-heading">Write a Review</span>
                <p className="text-xs text-gray-500">Share your experience on Google</p>
              </div>
              <svg className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Trusted by Hundreds of Properties
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From apartment complexes to HOA communities, our partners share
              their experience with Axle Towing &amp; Impound.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`reveal glass-card-white rounded-2xl p-6 md:p-8 shadow-md delay-${((i % 3) + 1) * 100}`}
              >
                <StarRating />
                <blockquote className="mt-4 text-gray-600 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-400 text-white flex items-center justify-center text-sm font-bold font-heading shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-blue-900 text-sm font-heading">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t.role} &mdash; {t.property}
                    </div>
                    <div className="text-xs text-primary">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              By The Numbers
            </h2>
            <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
              The results speak for themselves.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal glass rounded-2xl p-6 text-center glow-blue delay-${(i + 1) * 100}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-white font-heading">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/60 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Join Our Satisfied Partners?
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            See why hundreds of property managers across Phoenix trust Axle
            Towing for their parking enforcement needs &mdash; at zero cost.
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
