import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See our fleet, signage installations, and team in action. Axle Towing & Impound serves the Phoenix metro area with professional towing and parking enforcement.",
  openGraph: {
    title: "Gallery",
    description:
      "See our fleet, signage installations, and team in action. Axle Towing & Impound serves the Phoenix metro area with professional towing and parking enforcement.",
    url: "https://axletowing.com/gallery",
  },
};

const GALLERY_ITEMS = [
  // Our Fleet
  {
    category: "Our Fleet",
    title: "Flatbed Tow Truck #1",
    description: "Our primary flatbed unit for safe vehicle transport across the Phoenix metro area.",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    category: "Our Fleet",
    title: "Wheel-Lift Truck",
    description: "Quick-response wheel-lift truck for efficient private property impounds.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    category: "Our Fleet",
    title: "Heavy-Duty Wrecker",
    description: "Our heavy-duty unit handles larger vehicles and challenging towing situations.",
    gradient: "from-blue-700 to-blue-900",
  },
  {
    category: "Our Fleet",
    title: "Patrol Vehicle",
    description: "Dedicated patrol vehicle for regular property enforcement rounds.",
    gradient: "from-blue-400 to-blue-600",
  },
  // Before & After
  {
    category: "Before & After",
    title: "Apartment Complex Lot Cleared",
    description: "Before: 12 unauthorized vehicles. After: fully compliant resident parking.",
    gradient: "from-green-600 to-green-800",
  },
  {
    category: "Before & After",
    title: "HOA Community Enforcement",
    description: "Guest parking zones restored for legitimate visitors after enforcement began.",
    gradient: "from-green-500 to-green-700",
  },
  {
    category: "Before & After",
    title: "Commercial Lot Recovery",
    description: "Retail parking lot cleared of overnight vehicles blocking customer access.",
    gradient: "from-green-700 to-green-900",
  },
  {
    category: "Before & After",
    title: "Fire Lane Compliance",
    description: "Fire lanes restored to full compliance within 24 hours of program launch.",
    gradient: "from-green-400 to-green-600",
  },
  // Signage Installations
  {
    category: "Signage Installations",
    title: "ARS-Compliant Entry Signs",
    description: "Professional towing authorization signage meeting all Arizona legal requirements.",
    gradient: "from-amber-500 to-amber-700",
  },
  {
    category: "Signage Installations",
    title: "Reserved Parking Signs",
    description: "Custom reserved and assigned parking signage for apartment communities.",
    gradient: "from-amber-600 to-amber-800",
  },
  {
    category: "Signage Installations",
    title: "Fire Lane Markings",
    description: "Fire lane signage and curb markings installed per city fire code.",
    gradient: "from-amber-400 to-amber-600",
  },
  {
    category: "Signage Installations",
    title: "Visitor Parking Signs",
    description: "Clear visitor parking designation signs for HOA communities.",
    gradient: "from-amber-500 to-amber-700",
  },
  // Team
  {
    category: "Team",
    title: "Dispatch Operations Center",
    description: "Our 24/7 dispatch center coordinating tow responses across the metro.",
    gradient: "from-red-500 to-red-700",
  },
  {
    category: "Team",
    title: "Driver Training Session",
    description: "Regular training ensures our team stays current on procedures and safety.",
    gradient: "from-red-600 to-red-800",
  },
  {
    category: "Team",
    title: "Property Assessment Visit",
    description: "Our team conducting a free on-site property parking assessment.",
    gradient: "from-red-400 to-red-600",
  },
  {
    category: "Team",
    title: "Community Event Presence",
    description: "Axle Towing at a local community event, building neighborhood relationships.",
    gradient: "from-red-500 to-red-700",
  },
];

const GALLERY_IMAGES = [
  IMAGES.hero.truck,
  IMAGES.services.vehicleRelocation,
  IMAGES.services.commercialTowing,
  IMAGES.hero.parkingLot,
  IMAGES.services.apartmentTowing,
  IMAGES.services.hoaTowing,
  IMAGES.services.parkingEnforcement,
  IMAGES.services.privateImpound,
  IMAGES.blog.parkingSign,
  IMAGES.blog.fireLane,
  IMAGES.blog.towTruckNight,
  IMAGES.contact.phoenix,
  IMAGES.about.team,
  IMAGES.about.office,
  IMAGES.testimonial.background,
  IMAGES.hero.truck,
];

const CATEGORIES = ["All", "Our Fleet", "Before & After", "Signage Installations", "Team"];

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero (server component — static, no parallax JS) ── */}
      <section className="parallax-fixed relative min-h-[50vh] flex items-center text-white overflow-hidden" style={{ backgroundImage: `url(/images/optimized/axle-towing-hero-tow-truck-phoenix-az.webp)` }}>
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Our Fleet &amp; <span className="text-gradient">Work</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              A look at our trucks, signage installations, property
              transformations, and the team behind Axle Towing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category Filters ── */}
      <section className="py-20 bg-gray-50 wave-separator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading">
              Photo Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Browse our gallery to see our fleet, completed projects, signage
              installations, and team at work.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-blue-200 text-blue-900 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* ── Gallery Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`reveal glass-card-white rounded-2xl overflow-hidden shadow-md group delay-${((i % 4) + 1) * 100}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={GALLERY_IMAGES[i % GALLERY_IMAGES.length]} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <span className="absolute top-3 left-3 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full z-10">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-blue-900 font-heading mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Documentation Showcase ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider font-heading">Legal Protection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-heading mt-3">
              Documentation Showcase
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every vehicle we tow is thoroughly documented with timestamped,
              geo-tagged photos for complete legal protection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { image: IMAGES.services.privateImpound, angle: "Front Driver Side", time: "03/09/2026 2:47 PM", coords: "33.4484\u00b0 N, 112.0740\u00b0 W" },
              { image: IMAGES.services.parkingEnforcement, angle: "Rear Passenger Side", time: "03/09/2026 3:12 PM", coords: "33.5092\u00b0 N, 111.8988\u00b0 W" },
              { image: IMAGES.services.apartmentTowing, angle: "VIN Plate Close-Up", time: "03/08/2026 11:33 AM", coords: "33.4152\u00b0 N, 111.8315\u00b0 W" },
              { image: IMAGES.services.hoaTowing, angle: "Signage & Vehicle", time: "03/08/2026 9:05 AM", coords: "33.6060\u00b0 N, 111.9253\u00b0 W" },
              { image: IMAGES.services.commercialTowing, angle: "Wide Angle Context", time: "03/07/2026 4:58 PM", coords: "33.3528\u00b0 N, 111.7890\u00b0 W" },
              { image: IMAGES.hero.parkingLot, angle: "License Plate", time: "03/07/2026 1:20 PM", coords: "33.4373\u00b0 N, 112.0078\u00b0 W" },
              { image: IMAGES.services.vehicleRelocation, angle: "Damage Pre-Check", time: "03/06/2026 6:15 PM", coords: "33.4942\u00b0 N, 112.1141\u00b0 W" },
              { image: IMAGES.arizona.impoundLot, angle: "Impound Lot Arrival", time: "03/06/2026 7:02 PM", coords: "33.4484\u00b0 N, 112.0740\u00b0 W" },
            ].map((doc, i) => (
              <div
                key={i}
                className={`reveal glass-card rounded-2xl overflow-hidden group delay-${((i % 4) + 1) * 100}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={doc.image} alt={doc.angle} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Documentation overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-1.5 mb-1">
                      <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-mono">{doc.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className="text-xs font-mono">{doc.coords}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                      </svg>
                      <span className="text-xs font-semibold">{doc.angle}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            See Our Fleet in Action
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
            Ready to put our professional fleet and experienced team to work for
            your property? Get started with a free consultation today.
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
