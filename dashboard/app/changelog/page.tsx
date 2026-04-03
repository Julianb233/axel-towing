"use client";

import PageHeader from "../../components/PageHeader";
import ScrollReveal from "../../components/ScrollReveal";

interface ChangelogEntry {
  text: string;
  category?: "website" | "dashboard" | "seo" | "strategy" | "content" | "infrastructure";
}

interface ChangelogSection {
  date: string;
  type: "completed" | "upcoming";
  entries: ChangelogEntry[];
}

const changelog: ChangelogSection[] = [
  {
    date: "March 24, 2026 (Spanish SEO Expansion Initiated)",
    type: "completed",
    entries: [
      { text: "Planning completed for 50+ Spanish pages targeting Phoenix Hispanic market (42% of city population)", category: "seo" },
      { text: "5 Spanish pages already live (homepage, services, contact, FAQ, vehicle towed)", category: "seo" },
      { text: "Phase 1: 5 core pages, Phase 2: 10 city pages, Phase 3: 10 blog posts planned", category: "seo" },
    ],
  },
  {
    date: "March 24, 2026 (PR #27 Merged \u2014 FAQ Legal Content Removed)",
    type: "completed",
    entries: [
      { text: "Removed Arizona towing laws section from FAQ per Elliott's directive", category: "website" },
      { text: "Removed payment arrangement and dispute guidance content", category: "website" },
      { text: "Property Owner FAQs (14 entries) preserved unchanged", category: "website" },
    ],
  },
  {
    date: "March 24, 2026 (TowBook Integration Started)",
    type: "completed",
    entries: [
      { text: "Manager portal page for property managers, HOA managers, apartment complexes", category: "infrastructure" },
      { text: "Online tow request form for property managers", category: "infrastructure" },
      { text: "Vehicle lookup page for vehicle owners", category: "infrastructure" },
    ],
  },
  {
    date: "March 24, 2026 (Railway Migration)",
    type: "completed",
    entries: [
      { text: "Migrated website hosting from Vercel to Railway for production deployment", category: "infrastructure" },
      { text: "Added Next.js standalone output mode for optimal Railway performance", category: "infrastructure" },
      { text: "Created railway.toml and nixpacks.toml configuration files", category: "infrastructure" },
      { text: "Added /api/health endpoint for Railway health checks", category: "website" },
      { text: "Created deploy.sh script for one-command Railway deployments", category: "infrastructure" },
      { text: "Created .env.example documenting all required environment variables", category: "infrastructure" },
      { text: "Updated all Vercel references in proposal page to reflect Railway hosting", category: "website" },
      { text: "Updated CLAUDE.md deployment instructions for Railway", category: "infrastructure" },
      { text: "Fixed Turbopack workspace root detection build error", category: "infrastructure" },
      { text: "Verified full production build succeeds with standalone output", category: "infrastructure" },
    ],
  },
  {
    date: "March 23, 2026 (Service Area Expansion \u2014 38 Cities)",
    type: "completed",
    entries: [
      { text: "Updated service area page city count from 29 \u2192 38 to match actual SERVICE_AREAS list (hero text + stats counter)", category: "website" },
      { text: "Added city stats (population, properties served, response time) for 10 previously missing cities: Gold Canyon, Laveen, Sun Lakes, Waddell, Ahwatukee, Casa Grande, Coolidge, New River, Rio Verde, San Tan Heights", category: "website" },
      { text: "Action item PERS-283: 'Update website service area with all Phoenix metro cities' \u2014 resolved", category: "website" },
    ],
  },
  {
    date: "March 23, 2026 (AI Citation Baseline Research)",
    type: "completed",
    entries: [
      { text: "Completed AI citation baseline test \u2014 20 queries tested across Google, ChatGPT-style searches, and AI overview patterns (AI-4696)", category: "seo" },
      { text: "Finding: 100% citation rate on brand searches, 0% on competitive searches \u2014 zero presence for 'best towing Phoenix', 'private property towing Phoenix', 'HOA towing east valley' etc.", category: "seo" },
      { text: "Identified top competitors dominating AI citations: Freeway Towing (phoenixtowtruck.com), All City Towing, Arizona Impound \u2014 all have blog content, 4.5+ star ratings, 30+ citations", category: "strategy" },
      { text: "Root causes documented: no blog/FAQ content, 2.0/5 Yelp rating (AI avoids 2-star companies), new website not yet indexed, thin citation profile (~8 vs competitors' 30+)", category: "seo" },
      { text: "Baseline report saved to /axel-towing/docs/AI-CITATION-BASELINE-2026-03-23.md \u2014 monthly re-test plan established, target 20%+ competitive citation rate by July 2026", category: "strategy" },
    ],
  },
  {
    date: "March 23, 2026 (Video Modal + Hero Enhancement)",
    type: "completed",
    entries: [
      { text: "Added VideoModal component \u2014 accessible YouTube embed modal with keyboard support (Escape to close) and body scroll lock", category: "website" },
      { text: "Added 'Watch How It Works' button to hero section \u2014 play button with glass styling, wires up to VideoModal (video ID swappable when Elliott provides footage)", category: "website" },
      { text: "Extracted HeroButtons to client component \u2014 keeps homepage as a server component while enabling interactive modal state", category: "infrastructure" },
      { text: "Confirmed all v2.0 roadmap phases (01\u201307) already implemented: response time badge, trust bar, newsletter, pricing page, gallery docs badge, dashboard preview, referral program, case studies with BeforeAfter slider, AggregateRating schema", category: "website" },
    ],
  },
  {
    date: "March 23, 2026 (Dispatch API + Voice Agent)",
    type: "completed",
    entries: [
      { text: "Built dispatch API (POST /api/dispatch) \u2014 chatbot tow requests trigger multi-channel notifications in real time", category: "infrastructure" },
      { text: "Email notifications via Resend to axletowing@gmail.com for every dispatch request \u2014 includes all request details and reference ID", category: "infrastructure" },
      { text: "SMS notifications via Twilio to dispatch phone (480-288-5526) for immediate mobile alerting", category: "infrastructure" },
      { text: "All dispatch requests persisted to Supabase database \u2014 enables full request history, tracking, and analytics", category: "infrastructure" },
      { text: "Twilio warm transfer integrated into voice agent \u2014 callers can be transferred to live dispatcher mid-call without dropping", category: "infrastructure" },
      { text: "Google Search Console verification metadata added to site layout \u2014 enables property ownership and SEO data access", category: "seo" },
      { text: "TowBook API integration deferred to Phase 3 (pending client API credentials from Elliott)", category: "infrastructure" },
    ],
  },
  {
    date: "March 22, 2026 (Driver & Staff SOP Handbook)",
    type: "completed",
    entries: [
      { text: "Built comprehensive Driver & Staff SOP Digital Handbook at /sop — mobile-first, searchable, covers all 8 parts (AI-2184)", category: "website" },
      { text: "SOP covers: Company Overview, ARS Compliance, Daily Operations, Violation Types (9 violation categories), Customer Interaction Scripts, Account Management, Safety, New Driver Onboarding", category: "content" },
      { text: "Features: client-side keyword search with tag filtering, chapter navigation, expand/collapse sections, print-to-PDF support, chapter-to-chapter navigation", category: "website" },
      { text: "Includes after-hours answering service scripts, registration display positioning guide, flatbed vs wheel-lift decision matrix, ARS city rate reference table, MVD notification timelines", category: "content" },
      { text: "Marked robots noindex — internal document only, not publicly indexed", category: "infrastructure" },
      { text: "Total website pages now 129", category: "dashboard" },
    ],
  },
  {
    date: "March 22, 2026 (Content Accuracy)",
    type: "completed",
    entries: [
      { text: "Updated experience claim on Resources page from '25+ years' to '30+ years combined experience' — consistent with all other site pages and client-confirmed figure", category: "website" },
    ],
  },
  {
    date: "March 22, 2026 (City SEO Expansion)",
    type: "completed",
    entries: [
      { text: "Added 8 new localized city SEO pages: Guadalupe, Youngtown, Casa Grande, Ahwatukee, Rio Verde, New River, Coolidge, San Tan Heights", category: "seo" },
      { text: "Total location pages now 38 cities (up from 30), expanding coverage to Pinal County and all unincorporated Phoenix metro communities", category: "seo" },
      { text: "Each new page includes unique intro content, neighborhoods, property types, local stats, testimonial, why-choose-us, and city facts", category: "content" },
      { text: "Updated all site-wide city count references from 30 to 38", category: "website" },
      { text: "Sitemap auto-updated via SERVICE_AREAS constant — all new pages indexed", category: "seo" },
      { text: "Dashboard deliverables updated: 128 total pages, 43 location pages", category: "dashboard" },
    ],
  },
  {
    date: "March 19, 2026 (Image SEO Pipeline)",
    type: "completed",
    entries: [
      { text: "Built and ran Image SEO optimization pipeline: 38 images converted to WebP with SEO-friendly filenames (77.7% file size reduction)", category: "seo" },
      { text: "Created SeoImage component with auto alt text, structured captions, and WebP fallback support", category: "website" },
      { text: "Generated image-seo-manifest.ts with structured data for all 38 images (alt text, captions, dimensions)", category: "seo" },
      { text: "Created /image-sitemap.xml route for Google image indexing", category: "seo" },
      { text: "All SEO filenames follow pattern: axle-towing-{service/context}-phoenix-az.webp", category: "seo" },
      { text: "Original images preserved as fallbacks; optimized WebP versions in /images/optimized/", category: "infrastructure" },
    ],
  },
  {
    date: "March 19, 2026",
    type: "completed",
    entries: [
      { text: "Added hero background video from original axletowing.com", category: "website" },
      { text: "Added 14 real fleet photos from Elliott across all pages (homepage gallery, service pages, about page)", category: "website" },
      { text: "Created partnership pages (locksmiths, HOA boards, property managers)", category: "website" },
      { text: "Enhanced referral program page with partner benefits and role-based form", category: "website" },
      { text: "Built career pages with live pre-qualification scoring and CDL validation", category: "website" },
      { text: "Added Careers to main navigation", category: "website" },
      { text: "Removed BBB Accredited badge from all pages and blog articles", category: "website" },
      { text: 'Removed "Watch How It Works" video button and dead code', category: "website" },
      { text: "Removed 12 adversarial legal blog posts (dispute guides, fee breakdowns, tenant rights arguments)", category: "content" },
      { text: 'Simplified pricing page (removed detailed fee table, replaced with "call for rates")', category: "website" },
      { text: "Fixed Vehicle Relocations as paid service (not free)", category: "website" },
      { text: "Updated all page counts to 120+ pages", category: "website" },
      { text: 'Dashboard: Articles now link to live blog posts with "View Live Article" button', category: "dashboard" },
      { text: "Dashboard: Article approvals persist in localStorage across page refreshes", category: "dashboard" },
      { text: "Dashboard: GHL Approvals now have Approve/Request Changes buttons with persistence", category: "dashboard" },
      { text: "Dashboard: Action Items have completion checkboxes with progress bar", category: "dashboard" },
      { text: "Dashboard: Feedback page has edit/delete with toast notifications", category: "dashboard" },
      { text: "Dashboard: Data consistency fixed across all pages (120 pages, 63 articles, 7 services)", category: "dashboard" },
      { text: "Dashboard: Plan page has interactive completion toggles", category: "dashboard" },
      { text: 'Dashboard: Added "Latest Updates \u2014 March 2026" section to overview', category: "dashboard" },
      { text: "Created 15 Linear issues (AI-3966 through AI-3980) for outstanding work", category: "infrastructure" },
    ],
  },
  {
    date: "March 17, 2026",
    type: "completed",
    entries: [
      { text: "Client strategy session with Elliott (73 minutes)", category: "strategy" },
      { text: "Key decisions: remove BBB, update experience to 30+ years combined, add 24/7 dispatch prominently", category: "strategy" },
      { text: "Added 24/7 dispatch availability banner with truck count", category: "website" },
      { text: "Updated experience statement to 30+ years combined", category: "website" },
    ],
  },
  {
    date: "March 2026 (earlier)",
    type: "completed",
    entries: [
      { text: "Built 120-page Next.js website with SEO optimization", category: "website" },
      { text: "63 blog articles published", category: "content" },
      { text: "35 location pages (8 cities + 27 neighborhoods)", category: "seo" },
      { text: "7 service pages with schema markup", category: "seo" },
      { text: "Glassmorphism design system", category: "website" },
      { text: "Property manager dashboard mockup", category: "website" },
      { text: "Spanish language pages (3)", category: "website" },
      { text: "Client dashboard portal built and deployed", category: "dashboard" },
    ],
  },
  {
    date: "Upcoming / To Do",
    type: "upcoming",
    entries: [
      { text: "DNS migration from GoDaddy to Railway (CRITICAL \u2014 blocks Google indexing)", category: "infrastructure" },
      { text: "Google Workspace email setup with aliases", category: "infrastructure" },
      { text: "TowBook portal integration", category: "website" },
      { text: "AI receptionist for after-hours calls", category: "infrastructure" },
      { text: "Phone system migration from UMA to CRM", category: "infrastructure" },
      { text: "Expand service area to all Phoenix metro cities (waiting on Elliott)", category: "seo" },
      { text: "Google Search Console + Analytics access", category: "seo" },
      { text: "Google Business Profile optimization", category: "seo" },
      { text: "Nurture/referral email templates", category: "content" },
      { text: "40-50 additional localized SEO pages", category: "seo" },
    ],
  },
];

const categoryColors: Record<string, { bg: string; text: string; label: string }> = {
  website: { bg: "bg-blue-50 border-blue-100", text: "text-blue-600", label: "Website" },
  dashboard: { bg: "bg-purple-50 border-purple-100", text: "text-purple-600", label: "Dashboard" },
  seo: { bg: "bg-green-50 border-green-100", text: "text-green-600", label: "SEO" },
  strategy: { bg: "bg-amber-50 border-amber-100", text: "text-amber-600", label: "Strategy" },
  content: { bg: "bg-teal-50 border-teal-100", text: "text-teal-600", label: "Content" },
  infrastructure: { bg: "bg-red-50 border-red-100", text: "text-red-600", label: "Infrastructure" },
};

export default function ChangelogPage() {
  const totalCompleted = changelog
    .filter((s) => s.type === "completed")
    .reduce((sum, s) => sum + s.entries.length, 0);
  const totalUpcoming = changelog
    .filter((s) => s.type === "upcoming")
    .reduce((sum, s) => sum + s.entries.length, 0);

  return (
    <>
      <PageHeader
        badge="Project History"
        title="Changelog"
        subtitle="A complete record of every change, decision, and deliverable for the Axle Towing digital transformation."
      />

      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Completed Items</p>
            <p className="text-3xl font-bold font-display text-green-600 mt-1">{totalCompleted}</p>
          </div>
          <div className="glass-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Upcoming Items</p>
            <p className="text-3xl font-bold font-display text-amber-500 mt-1">{totalUpcoming}</p>
          </div>
          <div className="glass-card p-5 col-span-2 md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Completion Rate</p>
            <p className="text-3xl font-bold font-display text-brand-blue mt-1">
              {Math.round((totalCompleted / (totalCompleted + totalUpcoming)) * 100)}%
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-blue/40 to-amber-400/40 hidden md:block" />

        {changelog.map((section, sectionIdx) => (
          <ScrollReveal key={sectionIdx} delay={sectionIdx * 100}>
            <div className="relative mb-10">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-0 items-center">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                    section.type === "completed"
                      ? "bg-green-50 border-green-400"
                      : "bg-amber-50 border-amber-400"
                  }`}
                >
                  {section.type === "completed" ? (
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content card */}
              <div className="md:ml-16">
                <div className="glass-card p-6 md:p-8">
                  {/* Date header */}
                  <div className="flex items-center gap-3 mb-5">
                    <h2 className="text-xl font-bold font-display text-gray-900">{section.date}</h2>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        section.type === "completed"
                          ? "text-green-600 bg-green-50 border-green-200"
                          : "text-amber-600 bg-amber-50 border-amber-200"
                      }`}
                    >
                      {section.type === "completed" ? `${section.entries.length} changes` : `${section.entries.length} planned`}
                    </span>
                  </div>

                  {/* Entries */}
                  <div className="space-y-2.5">
                    {section.entries.map((entry, entryIdx) => {
                      const cat = entry.category ? categoryColors[entry.category] : null;
                      return (
                        <div
                          key={entryIdx}
                          className="flex items-start gap-3 rounded-xl p-3 bg-gray-50/70 border border-gray-100 hover:border-gray-200 transition-colors"
                        >
                          {/* Status icon */}
                          <div className="flex-shrink-0 mt-0.5">
                            {section.type === "completed" ? (
                              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-amber-500" />
                              </div>
                            )}
                          </div>

                          {/* Text */}
                          <p className="text-sm text-gray-700 flex-1 leading-relaxed">{entry.text}</p>

                          {/* Category badge */}
                          {cat && (
                            <span
                              className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${cat.bg} ${cat.text}`}
                            >
                              {cat.label}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
