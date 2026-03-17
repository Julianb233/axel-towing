import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroVideoButton from "@/components/HeroVideoButton";
import { localBusinessSchema } from "@/lib/schema";
import { IMAGES } from "@/lib/images";

const ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  clipboard: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  truck: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1 2 1 2-1 2 1 2-1zm0 0l2-1 2 1 2-1 2 1V6a1 1 0 00-1-1h-4" />
    </svg>
  ),
  home: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
    </svg>
  ),
  building: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  store: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
};

const SERVICE_CARDS = [
  { icon: "shield", title: "Private Property Impounds", desc: "Remove unauthorized vehicles at zero cost to you", slug: "private-property-impounds" },
  { icon: "clipboard", title: "Parking Enforcement", desc: "Professional patrol for garages and private lots", slug: "parking-enforcement" },
  { icon: "home", title: "HOA Towing", desc: "Custom towing programs for homeowner associations", slug: "hoa-towing" },
  { icon: "building", title: "Apartment Towing", desc: "Keep your complex parking organized", slug: "apartment-towing" },
  { icon: "store", title: "Commercial Property", desc: "Protect your commercial property from unauthorized parking", slug: "commercial-property-towing" },
];

const TESTIMONIALS = [
  {
    quote: "Axle Towing transformed our apartment complex parking situation overnight. We went from daily complaints to zero unauthorized vehicles in under a month. Their team is incredibly professional and responsive.",
    name: "Sarah Mitchell",
    role: "Property Manager, Phoenix",
    type: "Apartment Complex (240 units)",
  },
  {
    quote: "As an HOA board president, I was skeptical about free towing services. Axle proved me wrong -- their signage program and patrol response times are outstanding. Best decision our board ever made.",
    name: "James Richardson",
    role: "HOA Board President, Scottsdale",
    type: "Homeowner Association",
  },
  {
    quote: "We manage three commercial plazas and Axle handles all of them. Their portal makes tracking easy, and the fact that it costs us nothing is remarkable. Highly recommend to any property owner in the Valley.",
    name: "Linda Kerrigan",
    role: "Commercial Property Owner, Mesa",
    type: "Commercial Plaza Management",
  },
];

const BLOG_POSTS = [
  {
    title: "Understanding Arizona's Private Property Towing Laws in 2025",
    excerpt: "A comprehensive guide to ARS 28-1104 and what property owners need to know about legal towing requirements, proper signage, and compliance.",
    slug: "/blog",
    image: IMAGES.blog.parkingSign,
  },
  {
    title: "How to Reduce Unauthorized Parking at Your Apartment Complex",
    excerpt: "Five proven strategies that property managers use to eliminate parking violations and improve tenant satisfaction across the Phoenix metro.",
    slug: "/blog",
    image: IMAGES.blog.fireLane,
  },
  {
    title: "The True Cost of Not Enforcing Your Parking Policy",
    excerpt: "Unauthorized parking costs Phoenix property owners thousands annually in lost revenue, liability exposure, and tenant turnover. Here is what you can do.",
    slug: "/blog",
    image: IMAGES.blog.towTruckNight,
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: LocalBusiness for both locations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema("phoenix"),
            localBusinessSchema("apache-junction"),
          ]),
        }}
      />

      {/* ========== 1. HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.hero.truck} alt="Axle Towing fleet of tow trucks" fill className="object-cover" priority />
        </div>
        {/* Lighter, more balanced overlay — shows the image better */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "linear-gradient(160deg, rgba(30,107,184,0.7) 0%, rgba(27,42,63,0.78) 100%)" }}
        />

        <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-tight mb-6 animate-fade-in-up">
            Phoenix&apos;s Most Trusted
            <br />
            <span className="text-white">
              Private Property Towing
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
            Professional parking enforcement and vehicle management at zero cost to property owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link href="/contact" className="btn-primary px-8 py-3">
              Get a Free Quote
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary px-8 py-3">
              Call Now: {COMPANY.phone}
            </a>
          </div>
          <div className="mt-8 animate-fade-in-up delay-400 flex justify-center">
            <HeroVideoButton />
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-16 animate-fade-in-up delay-500">
            {[
              { label: "Since 2021", icon: "\u{1F4C5}" },
              { label: "6+ Trucks", icon: "\u{1F69B}" },
              { label: "8 Cities Served", icon: "\u{1F4CD}" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-6 py-3 flex items-center gap-3 animate-float">
                <span className="text-2xl">{stat.icon}</span>
                <span className="font-heading font-semibold text-white tracking-wide">{stat.label}</span>
              </div>
            ))}
            {/* Response Time Guarantee Badge */}
            <div className="backdrop-blur-xl bg-amber-500/20 border border-amber-400/40 rounded-full px-6 py-3 flex items-center gap-3 animate-float shadow-lg shadow-amber-500/10">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              <span className="font-heading font-bold text-amber-300 tracking-wide text-sm sm:text-base">30-Minute Response Guarantee</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <a href="#services" className="block animate-bounce text-white/60 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ========== TRUST BADGE BAR ========== */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-heading font-semibold uppercase tracking-wider text-gray-600 mb-8">Trusted By &amp; Affiliated With</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              {
                label: "BBB Accredited",
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                label: "Arizona Multihousing Association",
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                ),
              },
              {
                label: "Google 4.9\u2605 Rating",
                icon: (
                  <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ),
              },
              {
                label: "Licensed & Insured",
                icon: (
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                label: "Veteran Owned",
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
              {
                label: "1,000+ Properties Served",
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                ),
              },
            ].map((badge) => (
              <div
                key={badge.label}
                className="glass-card-white rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center border border-gray-100 hover:shadow-lg transition-shadow"
              >
                {badge.icon}
                <span className="text-sm font-heading font-semibold text-gray-700 leading-tight">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 2. SERVICES SECTION — Light background ========== */}
      <section id="services" className="py-24 bg-gray-50 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Our Services</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Comprehensive private property towing solutions tailored for HOAs, apartment complexes, and commercial properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((service, i) => (
              <Link key={service.title} href={`/services/${service.slug}`} className="glass-card rounded-2xl p-8 group cursor-pointer reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {ICONS[service.icon]}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-blue-600 transition-colors" style={{ color: '#1a202c' }}>{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PAID SERVICES CALLOUT ========== */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services/vehicle-relocations" className="group flex flex-col sm:flex-row items-center gap-6 glass-card-white rounded-2xl p-6 sm:p-8 border-2 border-amber-100 hover:border-amber-200 transition-all reveal">
            <div className="w-16 h-16 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
              {ICONS.truck}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <h3 className="text-xl font-bold font-heading" style={{ color: '#1a202c' }}>Vehicle Relocations</h3>
                <span className="inline-flex items-center bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">Charged Service</span>
              </div>
              <p className="text-gray-700 leading-relaxed">Professional vehicle moves for asphalt repairs, property maintenance, and construction projects. Starting at ~$100/vehicle.</p>
            </div>
            <span className="inline-flex items-center text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all shrink-0">
              Get a Quote
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ========== 3. WHY CHOOSE US — Refined overlay ========== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.hero.parkingLot} alt="Phoenix parking lot" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(27,42,63,0.88) 0%, rgba(30,107,184,0.7) 100%)" }} />
        <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider font-heading">Why Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">Why Choose Axle Towing?</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mb-6" />
            <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
              We are not just another towing company. We are your dedicated parking enforcement partner, committed to protecting your property and keeping your tenants happy -- all at absolutely no cost to you.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { end: 5, suffix: "+", label: "Years Experience" },
              { end: 6, suffix: "+", label: "Tow Trucks" },
              { end: 8, suffix: "", label: "Cities Served" },
              { end: 0, prefix: "$", suffix: "", label: "Cost to Property Owners" },
            ].map((counter, i) => (
              <div key={counter.label} className="rounded-2xl p-5 sm:p-8 reveal bg-white/10 backdrop-blur-sm border border-white/15" style={{ transitionDelay: `${i * 150}ms` }}>
                <AnimatedCounter end={counter.end} prefix={counter.prefix || ""} suffix={counter.suffix} label={counter.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. HOW IT WORKS — Enhanced Timeline ========== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider font-heading">Simple Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>How It Works</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Getting started is simple. Four easy steps and your parking problems are solved -- permanently.
            </p>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[3px] reveal" style={{ transitionDelay: '200ms' }}>
              <div className="w-full h-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full" />
            </div>

            <div className="grid grid-cols-4 gap-6 relative">
              {[
                {
                  step: "1", title: "Contact Us",
                  desc: "Reach out for a free consultation. We design a custom towing program tailored to your property.",
                  icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>),
                },
                {
                  step: "2", title: "Property Assessment",
                  desc: "Our team visits your property, evaluates parking needs, and identifies the best enforcement strategy.",
                  icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>),
                },
                {
                  step: "3", title: "Signage & Setup",
                  desc: "We install ARS-compliant towing signage and set up your enforcement program -- all at zero cost to you.",
                  icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>),
                },
                {
                  step: "4", title: "24/7 Enforcement",
                  desc: "We patrol, enforce, and remove unauthorized vehicles professionally while you focus on your business.",
                  icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
                },
              ].map((item, i) => (
                <div key={item.step} className="text-center reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                  {/* Circle with number */}
                  <div className="relative mx-auto mb-8">
                    <div className="w-[104px] h-[104px] mx-auto rounded-full bg-white border-[3px] border-blue-400 flex items-center justify-center shadow-lg relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold font-heading text-2xl shadow-md">
                        {item.step}
                      </div>
                    </div>
                  </div>
                  {/* Card below */}
                  <div className="glass-card-white rounded-2xl p-6 border-glow-blue">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold font-heading mb-2" style={{ color: '#1a202c' }}>{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 rounded-full" />

            <div className="space-y-10">
              {[
                {
                  step: "1", title: "Contact Us",
                  desc: "Reach out for a free consultation. We design a custom towing program tailored to your property.",
                  icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>),
                },
                {
                  step: "2", title: "Property Assessment",
                  desc: "Our team visits your property, evaluates parking needs, and identifies the best enforcement strategy.",
                  icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>),
                },
                {
                  step: "3", title: "Signage & Setup",
                  desc: "We install ARS-compliant towing signage and set up your enforcement program -- all at zero cost to you.",
                  icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>),
                },
                {
                  step: "4", title: "24/7 Enforcement",
                  desc: "We patrol, enforce, and remove unauthorized vehicles professionally while you focus on your business.",
                  icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
                },
              ].map((item, i) => (
                <div key={item.step} className="relative pl-20 reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                  {/* Circle on the timeline */}
                  <div className="absolute left-[14px] top-0 w-[36px] h-[36px] rounded-full bg-white border-[3px] border-blue-400 flex items-center justify-center z-10">
                    <span className="font-bold font-heading text-blue-600 text-sm">{item.step}</span>
                  </div>
                  {/* Card */}
                  <div className="glass-card-white rounded-2xl p-5 border-glow-blue">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold font-heading" style={{ color: '#1a202c' }}>{item.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5. TESTIMONIALS — Light, clean ========== */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Subtle decorative blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider font-heading">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Trusted by Property Managers</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg">See what our clients across the Phoenix metro have to say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="glass-card rounded-2xl p-8 reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold font-heading" style={{ color: '#1a202c' }}>{t.name}</div>
                  <div className="text-sm text-gray-700">{t.role}</div>
                  <div className="text-xs text-blue-500 mt-1">{t.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. DASHBOARD PREVIEW ========== */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider font-heading">Client Portal</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Your Property Management Dashboard</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Every client gets a real-time dashboard to track tows, view documentation, and manage their parking enforcement program.
            </p>
          </div>

          {/* Browser Window Mockup */}
          <div className="reveal glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Browser chrome */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-gray-700 rounded-lg px-4 py-1.5 text-gray-600 text-xs font-mono flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                portal.axletowing.com/dashboard
              </div>
            </div>

            {/* Dashboard content */}
            <div className="flex min-h-[420px]">
              {/* Sidebar */}
              <div className="hidden md:flex w-56 bg-[#1B2A4A] flex-col py-6 px-4 flex-shrink-0">
                <div className="text-white font-heading font-bold text-lg mb-8 px-2">Axle Portal</div>
                {[
                  { label: "Dashboard", active: true },
                  { label: "Tow History", active: false },
                  { label: "Photo Docs", active: false },
                  { label: "Patrol Schedule", active: false },
                  { label: "Reports", active: false },
                  { label: "Settings", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium mb-1 ${
                      item.active
                        ? "bg-white/15 text-white"
                        : "text-white/50 hover:text-white/90"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div className="flex-1 bg-gray-50 p-6 md:p-8">
                {/* Stats row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { value: "12", label: "Vehicles Towed This Month", color: "text-blue-600", bg: "bg-blue-50" },
                    { value: "3", label: "Active Patrols", color: "text-green-600", bg: "bg-green-50" },
                    { value: "98%", label: "Compliance Rate", color: "text-amber-600", bg: "bg-amber-50" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className={`text-2xl font-bold font-heading ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-gray-700 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <h4 className="text-sm font-bold text-gray-800 font-heading">Recent Activity</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-xs text-gray-600 uppercase tracking-wider">
                          <th className="px-4 py-2.5">Vehicle</th>
                          <th className="px-4 py-2.5">Date</th>
                          <th className="px-4 py-2.5">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {[
                          { vehicle: "2019 Honda Civic (Silver)", date: "Mar 9, 2026", status: "Completed", statusColor: "bg-green-100 text-green-700" },
                          { vehicle: "2021 Toyota Camry (White)", date: "Mar 9, 2026", status: "In Transit", statusColor: "bg-blue-100 text-blue-700" },
                          { vehicle: "2018 Ford F-150 (Black)", date: "Mar 8, 2026", status: "Completed", statusColor: "bg-green-100 text-green-700" },
                          { vehicle: "2020 Nissan Altima (Red)", date: "Mar 8, 2026", status: "Released", statusColor: "bg-gray-100 text-gray-600" },
                          { vehicle: "2022 Chevy Malibu (Blue)", date: "Mar 7, 2026", status: "Completed", statusColor: "bg-green-100 text-green-700" },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50/50">
                            <td className="px-4 py-2.5 font-medium text-gray-800">{row.vehicle}</td>
                            <td className="px-4 py-2.5 text-gray-700">{row.date}</td>
                            <td className="px-4 py-2.5">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${row.statusColor}`}>{row.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA below dashboard */}
          <div className="text-center mt-10 reveal">
            <Link href="/portal" className="btn-cta text-lg inline-flex items-center gap-2">
              Get Your Free Dashboard
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 7. SERVICE AREAS — White ========== */}
      <section id="locations" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider font-heading">Coverage Area</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Serving the Greater Phoenix Area</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We provide towing and parking enforcement services throughout the Phoenix metro, including these communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SERVICE_AREAS.map((area, i) => (
              <Link key={area.slug} href={["phoenix", "scottsdale", "mesa"].includes(area.slug) ? `/locations/${area.slug}` : "/#locations"} className="glass-card-white rounded-2xl p-6 text-center group border-glow-blue reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div className="text-lg font-bold font-heading group-hover:text-blue-600 transition-colors mb-2" style={{ color: '#1a202c' }}>{area.name}</div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{area.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. CTA BANNER ========== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/arizona-skyline-panoramic.jpg" alt="Phoenix Arizona skyline" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(15,31,54,0.92) 0%, rgba(27,42,63,0.88) 50%, rgba(30,107,184,0.75) 100%)" }} />
        <div className="hero-text relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4">Ready to Secure Your Property?</h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto">Get started with a free consultation. Our parking enforcement services cost you absolutely nothing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 8. BLOG PREVIEW — Subtle blue tint ========== */}
      <section className="py-24 bg-blue-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider font-heading">From Our Blog</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Latest Insights</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-700 text-lg">Stay informed about parking enforcement, Arizona towing laws, and property management best practices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <Link key={post.title} href={post.slug} className="glass-card rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="h-48 relative overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading mb-3 group-hover:text-blue-600 transition-colors leading-snug" style={{ color: '#1a202c' }}>{post.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
