"use client";

import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

// ─── Types ──────────────────────────────────────────────────────────────────

type ProductCategory = "hoa-gifting" | "parking-supplies" | "referral-partners" | "apparel";
type GiftTier = "premium" | "standard" | "basic" | "functional" | "partner";

interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  platform: "Printify" | "Printful" | "Both";
  unitCost: string;
  allInCost: string;
  retailPrice: string | null;
  bestUse: string;
  personalizationNote?: string;
}

interface GiftTierInfo {
  tier: GiftTier;
  label: string;
  leadScore: string;
  target: string;
  contents: string[];
  allInCost: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface GiftCampaign {
  month: string;
  campaign: string;
  giftItem: string;
  reason: string;
  status: "planned" | "active" | "completed";
}

// ─── Data ────────────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: "mug",
    name: "11oz Ceramic Mug",
    category: "hoa-gifting",
    platform: "Printify",
    unitCost: "$6.25",
    allInCost: "$11.75",
    retailPrice: "$19.99",
    bestUse: "HOA board contacts, property managers — daily use = daily brand impressions",
    personalizationNote: "Add community name on back at no extra cost — huge wow factor",
  },
  {
    id: "mousepad",
    name: "Mouse Pad 9\"x7\"",
    category: "hoa-gifting",
    platform: "Printify",
    unitCost: "$7.50",
    allInCost: "$12.00",
    retailPrice: "$22.99",
    bestUse: "Office desks — 8 hours/day brand exposure",
  },
  {
    id: "wireless-charger",
    name: "Wireless Charging Pad (15W)",
    category: "hoa-gifting",
    platform: "Printify",
    unitCost: "$20.00",
    allInCost: "$26.00",
    retailPrice: "$39.99",
    bestUse: "Premium gift for Score 9–10 leads, large portfolio managers",
  },
  {
    id: "candle",
    name: "Soy Wax Candle 9oz",
    category: "hoa-gifting",
    platform: "Printify",
    unitCost: "$13.00",
    allInCost: "$18.50",
    retailPrice: "$28.99",
    bestUse: "Holiday gifting (Nov–Dec), new manager onboarding — unique differentiator",
  },
  {
    id: "door-hanger",
    name: "Parking Permit Door Hangers (100-pk)",
    category: "parking-supplies",
    platform: "Printify",
    unitCost: "$150.00",
    allInCost: "$162.00",
    retailPrice: null,
    bestUse: "Gift to HOA as starter pack — they distribute to residents, your brand on every permit",
    personalizationNote: "Customize with community name + HOA logo on front",
  },
  {
    id: "mirror-hanger",
    name: "Mirror Hanger Parking Tags (100-pk)",
    category: "parking-supplies",
    platform: "Printify",
    unitCost: "$120.00",
    allInCost: "$130.00",
    retailPrice: null,
    bestUse: "Authorized resident vehicle tags — premium permit format",
  },
  {
    id: "numbered-permits",
    name: "Numbered Parking Permits (Stickers, 100-pk)",
    category: "parking-supplies",
    platform: "Printify",
    unitCost: "$75.00",
    allInCost: "$83.00",
    retailPrice: null,
    bestUse: "Sequential numbered permits for assigned parking spaces",
  },
  {
    id: "keychain",
    name: "Multi-Tool Keychain",
    category: "referral-partners",
    platform: "Printify",
    unitCost: "$5.00",
    allInCost: "$9.00",
    retailPrice: "$14.99",
    bestUse: "Memorable gift for mechanic shops and locksmiths — on-theme for the industry",
  },
  {
    id: "air-freshener",
    name: "Die-Cut Air Freshener",
    category: "referral-partners",
    platform: "Printify",
    unitCost: "$4.00",
    allInCost: "$7.50",
    retailPrice: "$8.99",
    bestUse: "Trade show giveaway, bulk locksmith/mechanic gifts — on-brand for auto industry",
  },
  {
    id: "sticker",
    name: "Vinyl Bumper Sticker (3\"x5\")",
    category: "referral-partners",
    platform: "Printify",
    unitCost: "$1.50",
    allInCost: "$4.50",
    retailPrice: "$5.99",
    bestUse: "High-volume trade show giveaway",
  },
  {
    id: "tshirt",
    name: "Bella+Canvas Unisex Tee",
    category: "apparel",
    platform: "Printful",
    unitCost: "$13.00",
    allInCost: "$18.00",
    retailPrice: "$29.99",
    bestUse: "Customer merch store, staff casual wear",
  },
  {
    id: "hat",
    name: "Richardson 112 Snapback (Embroidered)",
    category: "apparel",
    platform: "Printful",
    unitCost: "$16.50",
    allInCost: "$22.00",
    retailPrice: "$34.99",
    bestUse: "Customer merch, staff hats, welcome kit item",
  },
  {
    id: "polo",
    name: "Port Authority Performance Polo",
    category: "apparel",
    platform: "Printful",
    unitCost: "$21.00",
    allInCost: "$27.00",
    retailPrice: "$42.00",
    bestUse: "Staff uniforms — professional look for HOA client meetings",
  },
];

const giftTiers: GiftTierInfo[] = [
  {
    tier: "premium",
    label: "Premium Gift",
    leadScore: "Score 9–10",
    target: "HOA Board Presidents, Regional VPs, Portfolio Managers (5+ properties)",
    contents: ["Wireless charging pad OR", "Mug + Mouse Pad + Candle combo", "Handwritten gift note with community-specific research"],
    allInCost: "$25–50",
    color: "text-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    tier: "standard",
    label: "Standard Gift",
    leadScore: "Score 7–8",
    target: "Community Association Managers (CAMs), On-site apartment managers",
    contents: ["Branded mug", "Mouse pad", "Template gift note with first name + community name"],
    allInCost: "$23–25",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    tier: "basic",
    label: "Basic Gift",
    leadScore: "Score 5–6",
    target: "General property managers, commercial property contacts",
    contents: ["Branded mug only", "Template gift note"],
    allInCost: "$11–13",
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    tier: "functional",
    label: "Functional Gift",
    leadScore: "Any Score",
    target: "Any HOA or apartment complex",
    contents: ["Door hanger parking permit pack (100 permits)", "Custom-printed with community name", "Axle Towing branding on every permit distributed"],
    allInCost: "$40–50",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    tier: "partner",
    label: "Referral Partner Gift",
    leadScore: "Partner Onboarding",
    target: "Locksmiths and mechanic shops in the referral program",
    contents: ["Multi-tool keychain", "Air freshener", "Bumper sticker", "Referral program info card"],
    allInCost: "$12–18",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
];

const giftCampaigns: GiftCampaign[] = [
  {
    month: "January",
    campaign: "New Year, New Towing Partner",
    giftItem: "Branded mug",
    reason: "New HOA board presidents elected at year-end — fresh decision makers with no vendor loyalty",
    status: "planned",
  },
  {
    month: "March–May",
    campaign: "Spring Door Hanger Drop",
    giftItem: "Parking permit door hangers",
    reason: "New residents moving in after winter — parking enforcement surge, HOAs need supplies",
    status: "active",
  },
  {
    month: "June",
    campaign: "Annual Meeting Season",
    giftItem: "Mug + Mouse Pad",
    reason: "Many HOAs hold annual meetings June–July — gift arrives before the meeting",
    status: "planned",
  },
  {
    month: "September",
    campaign: "Back-to-School Mouse Pad Drop",
    giftItem: "Mouse pad",
    reason: "Property managers setting up new offices, back from summer",
    status: "planned",
  },
  {
    month: "November",
    campaign: "Thanksgiving Candle Gifting",
    giftItem: "Soy wax candle",
    reason: "Holiday season goodwill — build relationships before year-end budget decisions",
    status: "planned",
  },
  {
    month: "December",
    campaign: "Year-End Client Appreciation",
    giftItem: "Wireless charging pad (premium clients)",
    reason: "Reward existing HOA clients — retention is cheaper than acquisition",
    status: "planned",
  },
];

const categoryLabels: Record<ProductCategory, string> = {
  "hoa-gifting": "HOA Corporate Gifting",
  "parking-supplies": "Parking Supplies",
  "referral-partners": "Referral Partner Gifts",
  "apparel": "Apparel & Merch",
};

const categoryColors: Record<ProductCategory, { bg: string; text: string; border: string }> = {
  "hoa-gifting": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "parking-supplies": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "referral-partners": { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  "apparel": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
};

const stats = {
  totalProducts: 13,
  giftTiers: 5,
  estimatedMonthlyBudget: "$200–$1,000",
  projectedROI: "150–400%",
  yearOneBudget: "$4,000–$5,950",
  contractValue: "$6K–$24K/yr",
};

const setupSteps = [
  { step: 1, title: "Get print-ready logo files from Elliott", detail: "SVG vector + PNG at 300 DPI. Brand colors: Navy #1B2A3F, Red #DC2626, Blue #1E6BB8.", done: false },
  { step: 2, title: "Create Printify account (30 min)", detail: "printify.com/app/register → 'My own website' → Business: 'Axle Towing & Impound'", done: false },
  { step: 3, title: "Design 3 launch products", detail: "Mug, mouse pad, door hanger. Use design specs in MERCH-STORE-STRATEGY.md.", done: false },
  { step: 4, title: "Place test order to Elliott's address", detail: "Order 1 mug + 1 mouse pad (~$30–40). Verify quality before bulk gifting.", done: false },
  { step: 5, title: "Send first 20 gifts", detail: "Pull 20 hot leads from GHL → order through Printify → tag contacts 'gift-sent-[date]'", done: false },
  { step: 6, title: "Add GHL custom fields for tracking", detail: "Gift Sent, Gift Item, Gift Date, Delivery Status, Response, Cost, Printify Order ID", done: false },
  { step: 7, title: "Launch Printify hosted storefront", detail: "Free at myaxletowing.printify.me — link from axletowing.com/merch", done: false },
  { step: 8, title: "Set up Zapier GHL → Printify automation", detail: "When lead reaches 'Meeting Scheduled' stage → trigger auto-gift order. Est. Month 3.", done: false },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function MerchPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [expandedTier, setExpandedTier] = useState<GiftTier | null>(null);

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHeader
        badge="Corporate Gifting"
        title="Merchandise Store"
        subtitle="Print-on-demand branded merch for HOA gifting, referral partners, and customer sales. Zero inventory — ships direct."
      />

      {/* Stats Row */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Products</p>
            <p className="text-3xl font-bold font-display text-brand-blue mt-1">{stats.totalProducts}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Gift Tiers</p>
            <p className="text-3xl font-bold font-display text-purple-600 mt-1">{stats.giftTiers}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Monthly Budget</p>
            <p className="text-2xl font-bold font-display text-gray-900 mt-1">{stats.estimatedMonthlyBudget}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Projected ROI</p>
            <p className="text-2xl font-bold font-display text-green-600 mt-1">{stats.projectedROI}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Year 1 Budget</p>
            <p className="text-2xl font-bold font-display text-amber-500 mt-1">{stats.yearOneBudget}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Contract Value</p>
            <p className="text-2xl font-bold font-display text-gray-900 mt-1">{stats.contractValue}</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Strategy Banner */}
      <ScrollReveal delay={50}>
        <div className="rounded-2xl bg-gradient-to-r from-[#1B2A3F] to-[#1E6BB8] p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-2">The Gift Before the Pitch</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                A branded mug or mouse pad on a property manager&apos;s desk = Axle Towing brand in front of them every single day.
                At a 10% conversion rate, a $12 gift that converts to a $1,000/month contract returns <span className="text-white font-semibold">100:1 ROI</span>.
                No other towing company in Phoenix is doing this.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:text-right">
              <a
                href="https://printify.com/app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#1B2A3F] font-semibold text-sm hover:bg-white/90 transition-colors"
              >
                Open Printify
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span className="text-white/50 text-xs">Free account — no monthly fee</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Product Catalog */}
      <ScrollReveal delay={100}>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Product Catalog
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-5">
            {(["all", "hoa-gifting", "parking-supplies", "referral-partners", "apparel"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-brand-blue text-white border-brand-blue"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                }`}
              >
                {cat === "all" ? "All Products" : categoryLabels[cat]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => {
              const colors = categoryColors[product.category];
              return (
                <div key={product.id} className="glass-card p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border mt-1 ${colors.bg} ${colors.text} ${colors.border}`}>
                        {categoryLabels[product.category]}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200 whitespace-nowrap">
                      via {product.platform}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed">{product.bestUse}</p>

                  {product.personalizationNote && (
                    <div className="rounded-lg bg-blue-50 border border-blue-100 px-3 py-2">
                      <p className="text-xs text-blue-700">
                        <span className="font-semibold">Tip:</span> {product.personalizationNote}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">Unit Cost</p>
                      <p className="text-sm font-bold text-gray-900">{product.unitCost}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">All-In</p>
                      <p className="text-sm font-bold text-green-700">{product.allInCost}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">Retail</p>
                      <p className="text-sm font-bold text-gray-500">{product.retailPrice ?? "Gift only"}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Gift Tiers */}
      <ScrollReveal delay={150}>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            Corporate Gifting Tiers
          </h2>

          <div className="space-y-3">
            {giftTiers.map((tier) => {
              const isExpanded = expandedTier === tier.tier;
              return (
                <div key={tier.tier} className={`rounded-2xl border ${tier.borderColor} ${tier.bgColor} overflow-hidden`}>
                  <button
                    onClick={() => setExpandedTier(isExpanded ? null : tier.tier)}
                    className="w-full text-left p-5 flex items-center gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`text-base font-semibold ${tier.color}`}>{tier.label}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${tier.borderColor} ${tier.color}`}>
                          {tier.leadScore}
                        </span>
                        <span className={`text-sm font-bold ${tier.color}`}>{tier.allInCost}</span>
                      </div>
                      <p className="text-sm text-gray-600">{tier.target}</p>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-white/50">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4 mb-2">Package Contents</p>
                      <ul className="space-y-1">
                        {tier.contents.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className={`w-4 h-4 flex-shrink-0 ${tier.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Gifting Campaigns Calendar */}
      <ScrollReveal delay={200}>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Seasonal Gift Campaigns
          </h2>

          <div className="space-y-3">
            {giftCampaigns.map((campaign, idx) => {
              const statusColors = {
                planned: "bg-gray-100 text-gray-500 border-gray-200",
                active: "bg-green-100 text-green-700 border-green-200",
                completed: "bg-blue-100 text-blue-700 border-blue-200",
              };
              return (
                <div key={idx} className="glass-card p-5 flex items-start gap-4">
                  <div className="w-20 flex-shrink-0">
                    <p className="text-xs font-bold text-brand-blue">{campaign.month}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-sm font-semibold text-gray-900">{campaign.campaign}</h3>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${statusColors[campaign.status]}`}>
                        {campaign.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">
                      <span className="font-medium text-gray-700">Gift: </span>{campaign.giftItem}
                    </p>
                    <p className="text-xs text-gray-500">{campaign.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Setup Checklist */}
      <ScrollReveal delay={250}>
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 3h6m-6 4h6m-6 4h4" />
            </svg>
            Setup Checklist
          </h2>

          <div className="glass-card divide-y divide-gray-100">
            {setupSteps.map((step) => (
              <div key={step.step} className="p-4 flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  step.done ? "bg-green-500 border-green-500" : "bg-white border-gray-300"
                }`}>
                  {step.done ? (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-xs font-bold text-gray-400">{step.step}</span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* ROI Calculator */}
      <ScrollReveal delay={300}>
        <div className="glass-card p-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Gift ROI Analysis
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 pr-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Gift Item</th>
                  <th className="text-right py-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">All-In Cost</th>
                  <th className="text-right py-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contract Worth</th>
                  <th className="text-right py-2 pl-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Break-Even Gifts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { item: "Branded Mug", cost: "$11.75", contract: "$500–$2,000/mo", breakeven: "43–170 mugs" },
                  { item: "Mouse Pad", cost: "$12.00", contract: "$500–$2,000/mo", breakeven: "42–167 pads" },
                  { item: "Wireless Charger", cost: "$26.00", contract: "$500–$2,000/mo", breakeven: "19–77 chargers" },
                  { item: "Candle", cost: "$18.50", contract: "$500–$2,000/mo", breakeven: "27–108 candles" },
                  { item: "Door Hanger Pack (100)", cost: "$162", contract: "$500–$2,000/mo", breakeven: "3–12 packs" },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3 pr-4 font-medium text-gray-900">{row.item}</td>
                    <td className="py-3 px-4 text-right text-red-600 font-semibold">{row.cost}</td>
                    <td className="py-3 px-4 text-right text-green-700 font-semibold">{row.contract}</td>
                    <td className="py-3 pl-4 text-right text-gray-500">{row.breakeven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl bg-green-50 border border-green-100 p-4">
            <p className="text-sm text-green-800">
              <span className="font-bold">Key insight:</span> A single HOA contract at $1,000/month = $12,000/year. At a 10% conversion rate (realistic in relationship sales), a $12 mouse pad campaign generates{" "}
              <span className="font-bold">100:1 ROI</span>. No other towing company in Phoenix is doing this.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
