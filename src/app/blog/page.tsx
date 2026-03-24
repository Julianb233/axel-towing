import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Insights & Resources — Parking Management Blog",
  description:
    "Expert articles and guides on private property towing, parking enforcement, HOA management, and Arizona towing laws from Axle Towing & Impound.",
  alternates: {
    canonical: "https://axletowing.com/blog",
  },
  openGraph: {
    title: "Insights & Resources — Parking Management Blog",
    description:
      "Expert articles and guides on private property towing, parking enforcement, HOA management, and Arizona towing laws from Axle Towing & Impound.",
    url: "https://axletowing.com/blog",
  },
};

// ---------------------------------------------------------------------------
// Category definitions
// ---------------------------------------------------------------------------

type CategoryKey =
  | "property-management"
  | "arizona-towing-laws"
  | "hoa-resources"
  | "commercial-apartment"
  | "vehicle-owner-resources"
  | "safety-community";

interface Category {
  key: CategoryKey;
  label: string;
  color: string; // tailwind badge bg
  textColor: string;
}

const CATEGORIES: Category[] = [
  {
    key: "property-management",
    label: "Property Management",
    color: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    key: "arizona-towing-laws",
    label: "Arizona Towing Laws",
    color: "bg-amber-100",
    textColor: "text-amber-700",
  },
  {
    key: "hoa-resources",
    label: "HOA Resources",
    color: "bg-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    key: "commercial-apartment",
    label: "Commercial & Apartment Towing",
    color: "bg-purple-100",
    textColor: "text-purple-700",
  },
  {
    key: "vehicle-owner-resources",
    label: "Vehicle Owner Resources",
    color: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    key: "safety-community",
    label: "Safety & Community",
    color: "bg-teal-100",
    textColor: "text-teal-700",
  },
];

// ---------------------------------------------------------------------------
// Article data — 62 articles (2 existing + 60 new)
// ---------------------------------------------------------------------------

interface Article {
  slug: string;
  title: string;
  category: CategoryKey;
  readTime: string;
  gradient: string;
  description: string;
}

const ARTICLES: Article[] = [
  // ── Property Management (10 articles) ──────────────────────────────────
  {
    slug: "how-to-get-illegally-parked-vehicles-removed",
    title: "How to Get Illegally Parked Vehicles Removed from Private Property for Free",
    category: "property-management",
    readTime: "8 min",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
    description: "A complete guide for property owners and managers on legally removing unauthorized vehicles from private property in Arizona — at no cost.",
  },
  {
    slug: "how-to-choose-towing-company-for-property",
    title: "How to Choose a Towing Company for Your Property",
    category: "property-management",
    readTime: "7 min",
    gradient: "from-blue-500 via-blue-700 to-blue-900",
    description: "Key factors to evaluate when selecting a private property towing partner, from response time to signage compliance.",
  },
  {
    slug: "property-manager-guide-to-towing-contracts",
    title: "The Property Manager's Guide to Towing Contracts",
    category: "property-management",
    readTime: "9 min",
    gradient: "from-slate-600 via-blue-700 to-slate-900",
    description: "What to look for in a towing contract, red flags to avoid, and how to negotiate the best terms for your property.",
  },
  {
    slug: "parking-lot-signage-requirements-arizona",
    title: "Parking Lot Signage Requirements in Arizona",
    category: "property-management",
    readTime: "6 min",
    gradient: "from-sky-500 via-blue-600 to-sky-800",
    description: "Arizona law requires specific towing signage on private property. Learn the exact size, placement, and language requirements.",
  },
  {
    slug: "fire-lane-enforcement-property-managers",
    title: "Fire Lane Enforcement for Property Managers",
    category: "property-management",
    readTime: "5 min",
    gradient: "from-orange-500 via-red-600 to-orange-800",
    description: "How to establish and maintain fire lane compliance at your property to protect tenants and avoid liability.",
  },
  {
    slug: "nighttime-parking-enforcement-strategies",
    title: "Nighttime Parking Enforcement Strategies",
    category: "property-management",
    readTime: "6 min",
    gradient: "from-indigo-700 via-blue-900 to-indigo-950",
    description: "Best practices for enforcing parking rules after dark, including patrol schedules, lighting, and technology solutions.",
  },
  {
    slug: "property-value-impact-parking-enforcement",
    title: "How Parking Enforcement Impacts Property Values",
    category: "property-management",
    readTime: "7 min",
    gradient: "from-green-600 via-emerald-700 to-green-900",
    description: "Research-backed insights on how professional parking management boosts property values and tenant satisfaction.",
  },
  {
    slug: "reducing-tenant-complaints-about-parking",
    title: "Reducing Tenant Complaints About Parking",
    category: "property-management",
    readTime: "6 min",
    gradient: "from-cyan-500 via-blue-600 to-cyan-800",
    description: "Proven strategies to minimize tenant parking disputes and create a fair, well-communicated enforcement program.",
  },
  {
    slug: "construction-site-vehicle-relocation",
    title: "Construction Site Vehicle Relocation Guide",
    category: "property-management",
    readTime: "5 min",
    gradient: "from-yellow-600 via-amber-700 to-yellow-900",
    description: "How to coordinate vehicle relocations for construction, repaving, and property maintenance projects.",
  },
  {
    slug: "5-signs-apartment-needs-parking-enforcement",
    title: "5 Signs Your Apartment Complex Needs Parking Enforcement",
    category: "property-management",
    readTime: "5 min",
    gradient: "from-indigo-500 via-purple-600 to-indigo-800",
    description: "Is your apartment community struggling with parking chaos? Here are the telltale signs it is time to bring in professional enforcement.",
  },

  // ── Arizona Towing Laws (12 articles) ──────────────────────────────────
  {
    slug: "arizona-towing-laws-ars-28-3511-explained",
    title: "Arizona Towing Laws: ARS 28-3511 Explained",
    category: "arizona-towing-laws",
    readTime: "6 min",
    gradient: "from-amber-500 via-yellow-600 to-amber-800",
    description: "A plain-language breakdown of Arizona's private property towing statute and what property owners need to know to stay compliant.",
  },
  {
    slug: "arizona-private-property-towing-rights",
    title: "Arizona Private Property Towing Rights",
    category: "arizona-towing-laws",
    readTime: "7 min",
    gradient: "from-amber-600 via-orange-700 to-amber-900",
    description: "Know your rights as a property owner under Arizona law when it comes to removing unauthorized vehicles.",
  },
  {
    slug: "arizona-abandoned-vehicle-laws",
    title: "Arizona Abandoned Vehicle Laws",
    category: "arizona-towing-laws",
    readTime: "8 min",
    gradient: "from-yellow-500 via-amber-600 to-yellow-800",
    description: "Complete guide to Arizona's abandoned vehicle statutes, timelines, notification requirements, and lien procedures.",
  },
  {
    slug: "arizona-fire-lane-towing-laws",
    title: "Arizona Fire Lane Towing Laws",
    category: "arizona-towing-laws",
    readTime: "5 min",
    gradient: "from-red-500 via-orange-600 to-red-800",
    description: "Understanding Arizona fire lane regulations, penalties, and the legal process for towing fire lane violators.",
  },
  {
    slug: "arizona-handicap-parking-laws-private-property",
    title: "Arizona Handicap Parking Laws on Private Property",
    category: "arizona-towing-laws",
    readTime: "7 min",
    gradient: "from-blue-500 via-indigo-600 to-blue-800",
    description: "How ADA and Arizona law apply to handicap parking enforcement on private property, including signage and towing authority.",
  },
  {
    slug: "arizona-impound-fees-what-to-expect",
    title: "Arizona Impound Fees: What to Expect",
    category: "arizona-towing-laws",
    readTime: "6 min",
    gradient: "from-amber-500 via-yellow-700 to-amber-900",
    description: "A transparent breakdown of Arizona impound fee limits, storage charges, and what the law allows towing companies to charge.",
  },
  {
    slug: "arizona-tow-truck-regulations",
    title: "Arizona Tow Truck Regulations",
    category: "arizona-towing-laws",
    readTime: "6 min",
    gradient: "from-yellow-600 via-orange-700 to-yellow-900",
    description: "Licensing, insurance, and equipment requirements for tow truck operators in Arizona.",
  },
  {
    slug: "arizona-vehicle-lien-laws-towing-companies",
    title: "Arizona Vehicle Lien Laws for Towing Companies",
    category: "arizona-towing-laws",
    readTime: "8 min",
    gradient: "from-orange-600 via-amber-700 to-orange-900",
    description: "How Arizona's mechanic's lien and storage lien laws apply to towing companies handling unclaimed vehicles.",
  },
  {
    slug: "phoenix-city-code-parking-enforcement",
    title: "Phoenix City Code Parking Enforcement",
    category: "arizona-towing-laws",
    readTime: "7 min",
    gradient: "from-amber-600 via-yellow-800 to-amber-950",
    description: "How Phoenix municipal codes interact with state towing law, and what property managers need to know about city-specific rules.",
  },
  {
    slug: "can-my-car-be-towed-without-warning",
    title: "Can My Car Be Towed Without Warning?",
    category: "arizona-towing-laws",
    readTime: "5 min",
    gradient: "from-red-600 via-rose-700 to-red-900",
    description: "When Arizona law allows towing without prior notice, and when advance warning is required.",
  },
  {
    slug: "how-to-dispute-towing-charges-arizona",
    title: "How to Dispute Towing Charges in Arizona",
    category: "arizona-towing-laws",
    readTime: "7 min",
    gradient: "from-orange-500 via-red-600 to-orange-800",
    description: "Step-by-step guide to disputing a tow or impound charges you believe are unfair or unlawful in Arizona.",
  },
  {
    slug: "towed-vehicle-auction-process-arizona",
    title: "The Towed Vehicle Auction Process in Arizona",
    category: "arizona-towing-laws",
    readTime: "6 min",
    gradient: "from-yellow-700 via-amber-800 to-yellow-950",
    description: "How unclaimed vehicles move from impound to auction under Arizona law, including timelines and owner rights.",
  },

  // ── HOA Resources (12 articles) ────────────────────────────────────────
  {
    slug: "hoa-parking-enforcement-guide",
    title: "HOA Parking Enforcement: What Board Members Need to Know",
    category: "hoa-resources",
    readTime: "10 min",
    gradient: "from-emerald-500 via-green-700 to-emerald-900",
    description: "Everything HOA board members need to know about implementing and managing an effective parking enforcement program.",
  },
  {
    slug: "hoa-towing-program-setup-guide",
    title: "HOA Towing Program Setup Guide",
    category: "hoa-resources",
    readTime: "9 min",
    gradient: "from-green-500 via-emerald-600 to-green-800",
    description: "Step-by-step instructions for establishing a professional towing program in your HOA community.",
  },
  {
    slug: "hoa-parking-rules-template-arizona",
    title: "HOA Parking Rules Template for Arizona",
    category: "hoa-resources",
    readTime: "8 min",
    gradient: "from-emerald-600 via-teal-700 to-emerald-900",
    description: "A ready-to-use parking rules template customized for Arizona HOA communities, with enforcement procedures included.",
  },
  {
    slug: "hoa-parking-violation-notice-templates",
    title: "HOA Parking Violation Notice Templates",
    category: "hoa-resources",
    readTime: "5 min",
    gradient: "from-green-600 via-emerald-700 to-green-900",
    description: "Professional parking violation notice templates for HOA boards, including warning notices and final tow notices.",
  },
  {
    slug: "hoa-towing-communication-strategies",
    title: "HOA Towing Communication Strategies",
    category: "hoa-resources",
    readTime: "6 min",
    gradient: "from-teal-500 via-emerald-600 to-teal-800",
    description: "How to communicate towing policies to homeowners without causing conflict, including letter templates and meeting scripts.",
  },
  {
    slug: "guest-parking-management-hoa",
    title: "Guest Parking Management for HOAs",
    category: "hoa-resources",
    readTime: "6 min",
    gradient: "from-emerald-500 via-green-600 to-emerald-800",
    description: "Balancing resident parking needs with guest access — systems, permits, and enforcement strategies.",
  },
  {
    slug: "hoa-board-member-parking-liability",
    title: "HOA Board Member Parking Liability",
    category: "hoa-resources",
    readTime: "7 min",
    gradient: "from-green-700 via-emerald-800 to-green-950",
    description: "Understanding the personal liability risks for HOA board members related to parking enforcement decisions.",
  },
  {
    slug: "hoa-rv-boat-parking-enforcement",
    title: "HOA RV & Boat Parking Enforcement",
    category: "hoa-resources",
    readTime: "6 min",
    gradient: "from-teal-600 via-green-700 to-teal-900",
    description: "How to handle RV, boat, and oversized vehicle parking violations in HOA communities under Arizona law.",
  },
  {
    slug: "hoa-electric-vehicle-parking-policies",
    title: "HOA Electric Vehicle Parking Policies",
    category: "hoa-resources",
    readTime: "6 min",
    gradient: "from-emerald-400 via-green-500 to-emerald-700",
    description: "Developing EV charging station policies and parking rules for the growing number of electric vehicles in HOA communities.",
  },
  {
    slug: "hoa-annual-meeting-parking-presentation",
    title: "HOA Annual Meeting Parking Presentation Guide",
    category: "hoa-resources",
    readTime: "5 min",
    gradient: "from-green-500 via-teal-600 to-green-800",
    description: "How to present parking enforcement results and plans at your HOA annual meeting for maximum board and homeowner buy-in.",
  },
  {
    slug: "seasonal-parking-enforcement-arizona-hoa",
    title: "Seasonal Parking Enforcement for Arizona HOAs",
    category: "hoa-resources",
    readTime: "5 min",
    gradient: "from-teal-500 via-green-600 to-teal-800",
    description: "How parking enforcement needs shift with Arizona's seasons — snowbirds, monsoons, holidays, and summer residents.",
  },
  {
    slug: "abandoned-vehicle-removal-private-property-arizona",
    title: "Abandoned Vehicle Removal from Private Property in Arizona",
    category: "hoa-resources",
    readTime: "7 min",
    gradient: "from-emerald-600 via-green-700 to-emerald-900",
    description: "The legal process for removing abandoned vehicles from HOA common areas and private lots in Arizona.",
  },

  // ── Commercial & Apartment Towing (12 articles) ────────────────────────
  {
    slug: "apartment-complex-parking-management-guide",
    title: "Apartment Complex Parking Management Guide",
    category: "commercial-apartment",
    readTime: "9 min",
    gradient: "from-purple-500 via-violet-600 to-purple-800",
    description: "Comprehensive guide to setting up and managing parking enforcement at apartment communities of all sizes.",
  },
  {
    slug: "office-building-parking-management",
    title: "Office Building Parking Management",
    category: "commercial-apartment",
    readTime: "7 min",
    gradient: "from-violet-500 via-purple-600 to-violet-800",
    description: "How to manage shared parking at office buildings, handle tenant disputes, and keep commercial lots compliant.",
  },
  {
    slug: "retail-shopping-center-parking-enforcement",
    title: "Retail & Shopping Center Parking Enforcement",
    category: "commercial-apartment",
    readTime: "7 min",
    gradient: "from-purple-600 via-indigo-700 to-purple-900",
    description: "Protect your retail parking from employee abuse, neighboring business overflow, and overnight campers.",
  },
  {
    slug: "restaurant-parking-lot-towing",
    title: "Restaurant Parking Lot Towing",
    category: "commercial-apartment",
    readTime: "5 min",
    gradient: "from-fuchsia-500 via-purple-600 to-fuchsia-800",
    description: "Managing parking at restaurants and food service businesses — from customer-only enforcement to after-hours security.",
  },
  {
    slug: "medical-facility-parking-enforcement",
    title: "Medical Facility Parking Enforcement",
    category: "commercial-apartment",
    readTime: "6 min",
    gradient: "from-violet-600 via-purple-700 to-violet-900",
    description: "Special considerations for parking enforcement at medical offices, clinics, and healthcare facilities.",
  },
  {
    slug: "industrial-park-parking-management",
    title: "Industrial Park Parking Management",
    category: "commercial-apartment",
    readTime: "6 min",
    gradient: "from-purple-700 via-violet-800 to-purple-950",
    description: "Managing commercial vehicle parking, trailer staging, and unauthorized parking in industrial parks.",
  },
  {
    slug: "church-parking-lot-enforcement",
    title: "Church Parking Lot Enforcement",
    category: "commercial-apartment",
    readTime: "5 min",
    gradient: "from-indigo-500 via-violet-600 to-indigo-800",
    description: "Balancing community access with parking control at churches and houses of worship.",
  },
  {
    slug: "student-housing-parking-enforcement",
    title: "Student Housing Parking Enforcement",
    category: "commercial-apartment",
    readTime: "6 min",
    gradient: "from-purple-500 via-fuchsia-600 to-purple-800",
    description: "Tackling the unique parking challenges of student housing near universities like ASU.",
  },
  {
    slug: "multi-tenant-commercial-parking-disputes",
    title: "Multi-Tenant Commercial Parking Disputes",
    category: "commercial-apartment",
    readTime: "7 min",
    gradient: "from-violet-500 via-indigo-600 to-violet-800",
    description: "How to resolve parking conflicts between tenants in multi-tenant commercial properties.",
  },
  {
    slug: "dumpster-access-blocked-vehicles",
    title: "Dumpster Access Blocked by Vehicles",
    category: "commercial-apartment",
    readTime: "4 min",
    gradient: "from-purple-600 via-violet-700 to-purple-900",
    description: "When vehicles block dumpster access, waste pickup suffers. How to enforce clear dumpster zones on your property.",
  },
  {
    slug: "handicap-parking-enforcement-private-property",
    title: "Handicap Parking Enforcement on Private Property",
    category: "commercial-apartment",
    readTime: "6 min",
    gradient: "from-indigo-600 via-purple-700 to-indigo-900",
    description: "ADA compliance for private property handicap spaces — enforcement authority, signage, and liability.",
  },
  {
    slug: "accessible-parking-protecting-disability-rights",
    title: "Accessible Parking: Protecting Disability Rights",
    category: "commercial-apartment",
    readTime: "6 min",
    gradient: "from-violet-500 via-purple-600 to-violet-800",
    description: "How professional parking enforcement protects accessible spaces and ensures ADA compliance on private property.",
  },

  // ── Vehicle Owner Resources (8 articles) ───────────────────────────────
  {
    slug: "what-to-do-when-car-towed-phoenix",
    title: "What to Do When Your Car Gets Towed in Phoenix",
    category: "vehicle-owner-resources",
    readTime: "6 min",
    gradient: "from-red-500 via-rose-600 to-red-800",
    description: "Step-by-step guide for vehicle owners on what to do immediately after discovering your car has been towed in Phoenix.",
  },
  {
    slug: "how-to-retrieve-impounded-vehicle-arizona",
    title: "How to Retrieve an Impounded Vehicle in Arizona",
    category: "vehicle-owner-resources",
    readTime: "7 min",
    gradient: "from-rose-500 via-red-600 to-rose-800",
    description: "Everything you need to bring, where to go, and how to get your impounded vehicle back as quickly as possible.",
  },
  {
    slug: "understanding-towing-fees-arizona",
    title: "Understanding Towing Fees in Arizona",
    category: "vehicle-owner-resources",
    readTime: "5 min",
    gradient: "from-red-600 via-rose-700 to-red-900",
    description: "A clear breakdown of what towing fees you can expect, what the legal maximums are, and how to dispute unfair charges.",
  },
  {
    slug: "tenant-rights-when-car-is-towed-arizona",
    title: "Tenant Rights When Your Car Is Towed in Arizona",
    category: "vehicle-owner-resources",
    readTime: "7 min",
    gradient: "from-rose-600 via-pink-700 to-rose-900",
    description: "What apartment and HOA residents need to know about their rights when their vehicle is towed from their own community.",
  },
  {
    slug: "vehicle-towed-from-apartment-rights",
    title: "Vehicle Towed from Apartment: Know Your Rights",
    category: "vehicle-owner-resources",
    readTime: "6 min",
    gradient: "from-red-500 via-rose-600 to-red-800",
    description: "Your rights when a vehicle is towed from an apartment complex, including wrongful tow protections under Arizona law.",
  },
  {
    slug: "personal-belongings-towed-vehicle-arizona",
    title: "Personal Belongings in a Towed Vehicle: Arizona Rights",
    category: "vehicle-owner-resources",
    readTime: "5 min",
    gradient: "from-pink-500 via-rose-600 to-pink-800",
    description: "Arizona law requires impound lots to allow access to personal belongings. Know your rights and the process.",
  },
  {
    slug: "rental-car-towed-private-property",
    title: "Rental Car Towed from Private Property",
    category: "vehicle-owner-resources",
    readTime: "5 min",
    gradient: "from-red-600 via-orange-700 to-red-900",
    description: "What happens when a rental car gets towed, who is responsible for fees, and how to handle the situation.",
  },
  {
    slug: "avoiding-private-property-towing-tips",
    title: "Tips for Avoiding Private Property Towing",
    category: "vehicle-owner-resources",
    readTime: "4 min",
    gradient: "from-rose-500 via-red-600 to-rose-800",
    description: "Simple steps drivers can take to avoid getting towed from private property in Arizona.",
  },

  // ── Safety & Community (8 articles) ────────────────────────────────────
  {
    slug: "fire-lane-safety-why-it-matters",
    title: "Fire Lane Safety: Why It Matters",
    category: "safety-community",
    readTime: "5 min",
    gradient: "from-teal-500 via-cyan-600 to-teal-800",
    description: "Fire lane violations put lives at risk. Learn why fire lane enforcement is essential for community safety.",
  },
  {
    slug: "emergency-vehicle-access-parking-lots",
    title: "Emergency Vehicle Access in Parking Lots",
    category: "safety-community",
    readTime: "5 min",
    gradient: "from-cyan-500 via-teal-600 to-cyan-800",
    description: "How blocked parking lots delay emergency response and what property managers can do to ensure clear access.",
  },
  {
    slug: "double-parking-dangers-solutions",
    title: "Double Parking: Dangers and Solutions",
    category: "safety-community",
    readTime: "4 min",
    gradient: "from-teal-600 via-emerald-700 to-teal-900",
    description: "The safety hazards of double parking and practical enforcement solutions for property managers.",
  },
  {
    slug: "parking-lot-lighting-safety-arizona",
    title: "Parking Lot Lighting and Safety in Arizona",
    category: "safety-community",
    readTime: "5 min",
    gradient: "from-cyan-600 via-blue-700 to-cyan-900",
    description: "How proper lighting combined with parking enforcement creates safer properties for tenants and visitors.",
  },
  {
    slug: "reducing-crime-through-parking-enforcement",
    title: "Reducing Crime Through Parking Enforcement",
    category: "safety-community",
    readTime: "6 min",
    gradient: "from-teal-500 via-cyan-600 to-teal-800",
    description: "Research shows that active parking enforcement deters criminal activity. Learn how towing patrols improve community safety.",
  },
  {
    slug: "community-benefits-professional-towing",
    title: "Community Benefits of Professional Towing",
    category: "safety-community",
    readTime: "5 min",
    gradient: "from-emerald-500 via-teal-600 to-emerald-800",
    description: "Beyond compliance — how professional towing services improve quality of life in residential and commercial communities.",
  },
  {
    slug: "phoenix-monsoon-season-parking-safety",
    title: "Phoenix Monsoon Season Parking Safety",
    category: "safety-community",
    readTime: "5 min",
    gradient: "from-cyan-600 via-teal-700 to-cyan-900",
    description: "Monsoon-specific parking safety tips for property managers and drivers in the Phoenix metro area.",
  },
  {
    slug: "summer-parking-lot-safety-phoenix",
    title: "Summer Parking Lot Safety in Phoenix",
    category: "safety-community",
    readTime: "5 min",
    gradient: "from-orange-500 via-amber-600 to-orange-800",
    description: "Extreme heat creates unique parking lot hazards. Safety strategies for Arizona's brutal summer months.",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const BLOG_IMAGES = [IMAGES.blog.parkingSign, IMAGES.blog.fireLane, IMAGES.blog.towTruckNight];

function getCategoryMeta(key: CategoryKey): Category {
  return CATEGORIES.find((c) => c.key === key)!;
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function BlogPage() {
  const featuredArticle = ARTICLES[0];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="parallax-container min-h-[50vh] flex items-center relative">
        <div
          className="parallax-bg"
          style={{ backgroundImage: `url(/images/blog-tow-truck-night.jpg)` }}
        />
        <div className="absolute inset-0 gradient-overlay-blue z-[1]" />
        <div className="absolute inset-0 gradient-overlay-dark z-[1]" />
        <div className="hero-text relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center glass rounded-full px-4 py-1.5 text-blue-200 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Blog &amp; Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Insights &amp; <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Expert articles and guides on private property towing, parking
              enforcement, and Arizona towing laws from the team at Axle Towing
              &amp; Impound.
            </p>
            <p className="text-sm text-blue-200/50 mt-4">
              {ARTICLES.length} articles across {CATEGORIES.length} categories
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Article ─────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-blue-950 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="block glass-card-white rounded-2xl overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto relative overflow-hidden">
                  <Image src={IMAGES.blog.parkingSign} alt={featuredArticle.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-white/90 text-sm font-medium uppercase tracking-wider bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      Featured Article
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    {(() => {
                      const cat = getCategoryMeta(featuredArticle.category);
                      return (
                        <span className={`${cat.color} ${cat.textColor} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                          {cat.label}
                        </span>
                      );
                    })()}
                    <span className="text-sm text-gray-600">{featuredArticle.readTime} read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredArticle.description}
                  </p>
                  <div className="flex items-center justify-end">
                    <span className="text-cta font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Category Sections ────────────────────────────────────────── */}
      {CATEGORIES.map((cat) => {
        const catArticles = ARTICLES.filter((a) => a.category === cat.key);
        if (catArticles.length === 0) return null;

        return (
          <section
            key={cat.key}
            id={cat.key}
            className="py-16 even:bg-gray-50 odd:bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10 reveal">
                <span className={`${cat.color} ${cat.textColor} text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider`}>
                  {cat.label}
                </span>
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-600">{catArticles.length} articles</span>
              </div>

              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catArticles.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="reveal glass-card-white rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow"
                    style={{ transitionDelay: `${Math.min(index * 80, 400)}ms` }}
                  >
                    <div className="h-36 relative overflow-hidden">
                      <Image src={BLOG_IMAGES[index % BLOG_IMAGES.length]} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`${cat.color} ${cat.textColor} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}>
                          {cat.label}
                        </span>
                        <span className="text-xs text-gray-600">{article.readTime} read</span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                        {article.description}
                      </p>
                      <span className="text-cta text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read More
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Browse by City ────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by <span className="text-gradient">City</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find towing and parking enforcement information specific to your
              area in the Phoenix metro.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 reveal">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="glass-card-white rounded-xl p-5 text-center group hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {area.name}
                </h3>
                <p className="text-xs text-gray-700 mt-1 line-clamp-2">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter Signup ─────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal glass rounded-2xl p-8 md:p-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cta/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get Parking Management Tips Delivered Monthly
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join property managers across Arizona who get our latest guides,
              legal updates, and enforcement tips straight to their inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" action="#">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
              />
              <button type="submit" className="btn-cta whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-blue-300/40 text-xs mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
