import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import AnimatedCounter from "@/components/AnimatedCounter";
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
  { icon: "truck", title: "Vehicle Relocations", desc: "Fast vehicle moves for repairs and maintenance", slug: "vehicle-relocations" },
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 animate-fade-in-up">
            Phoenix&apos;s Most Trusted
            <br />
            <span className="text-gradient" style={{ WebkitTextFillColor: "transparent", background: "linear-gradient(135deg, #ffffff, #93ccf7)", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
              Private Property Towing
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
            Professional parking enforcement and vehicle management at zero cost to property owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              Get a Free Quote
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary text-lg px-10 py-4">
              Call Now: {COMPANY.phone}
            </a>
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

      {/* ========== 2. SERVICES SECTION — Light background ========== */}
      <section id="services" className="py-24 bg-gray-50 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Our Services</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
                <p className="text-gray-500 leading-relaxed mb-4">{service.desc}</p>
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

      {/* ========== 3. WHY CHOOSE US — Refined overlay ========== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.hero.parkingLot} alt="Phoenix parking lot" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(27,42,63,0.88) 0%, rgba(30,107,184,0.7) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider font-heading">Why Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mt-3 mb-4">Why Choose Axle Towing?</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mb-6" />
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              We are not just another towing company. We are your dedicated parking enforcement partner, committed to protecting your property and keeping your tenants happy -- all at absolutely no cost to you.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { end: 5, suffix: "+", label: "Years Experience" },
              { end: 6, suffix: "+", label: "Tow Trucks" },
              { end: 8, suffix: "", label: "Cities Served" },
              { end: 0, prefix: "$", suffix: "", label: "Cost to Property Owners" },
            ].map((counter, i) => (
              <div key={counter.label} className="rounded-2xl p-8 reveal bg-white/10 backdrop-blur-sm border border-white/15" style={{ transitionDelay: `${i * 150}ms` }}>
                <AnimatedCounter end={counter.end} prefix={counter.prefix || ""} suffix={counter.suffix} label={counter.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. HOW IT WORKS — Clean white ========== */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider font-heading">Simple Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>How It Works</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Getting started is simple. Three easy steps and your parking problems are solved -- permanently.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  step: "1", title: "Contact Us",
                  desc: "Reach out for a free consultation. We assess your property and design a custom towing program tailored to your needs.",
                  icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>),
                },
                {
                  step: "2", title: "We Assess Your Property",
                  desc: "Our team visits your property, evaluates parking needs, and installs compliant towing signage -- all at no cost to you.",
                  icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>),
                },
                {
                  step: "3", title: "We Handle Everything",
                  desc: "We patrol, enforce, and remove unauthorized vehicles professionally. You sit back while we protect your property 24/7.",
                  icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
                },
              ].map((item, i) => (
                <div key={item.step} className="text-center reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl glass-card-white border-glow-blue flex flex-col items-center justify-center gap-2 p-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold font-heading text-lg">{item.step}</div>
                      <div className="text-blue-600">{item.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3" style={{ color: '#1a202c' }}>{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
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
            <p className="text-gray-500 text-lg">See what our clients across the Phoenix metro have to say.</p>
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
                  <div className="text-sm text-gray-500">{t.role}</div>
                  <div className="text-xs text-blue-500 mt-1">{t.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. SERVICE AREAS — White ========== */}
      <section id="locations" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider font-heading">Coverage Area</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mt-3 mb-4" style={{ color: '#1a202c' }}>Serving the Greater Phoenix Area</h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We provide towing and parking enforcement services throughout the Phoenix metro, including these communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SERVICE_AREAS.map((area, i) => (
              <Link key={area.slug} href={["phoenix", "scottsdale", "mesa"].includes(area.slug) ? `/locations/${area.slug}` : "/#locations"} className="glass-card-white rounded-2xl p-6 text-center group border-glow-blue reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div className="text-lg font-bold font-heading group-hover:text-blue-600 transition-colors mb-2" style={{ color: '#1a202c' }}>{area.name}</div>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{area.description}</p>
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">Ready to Secure Your Property?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Get started with a free consultation. Our parking enforcement services cost you absolutely nothing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY.phone}`} className="btn-primary text-lg inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {COMPANY.phone}
            </a>
            <Link href="/contact" className="btn-secondary text-lg">
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
            <p className="text-gray-500 text-lg">Stay informed about parking enforcement, Arizona towing laws, and property management best practices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <Link key={post.title} href={post.slug} className="glass-card rounded-2xl overflow-hidden group reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="h-48 relative overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading mb-3 group-hover:text-blue-600 transition-colors leading-snug" style={{ color: '#1a202c' }}>{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
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
