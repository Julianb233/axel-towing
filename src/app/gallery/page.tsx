import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See our fleet, signage installations, and team in action. Axle Towing & Impound serves the Phoenix metro area with professional towing and parking enforcement.",
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
      <section className="parallax-fixed relative min-h-[50vh] flex items-center text-white overflow-hidden" style={{ backgroundImage: `url(/images/hero-tow-truck.jpg)` }}>
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 grain-overlay z-[2]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="reveal max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Our Fleet &amp; <span className="text-gradient">Work</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
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
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            See Our Fleet in Action
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
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
