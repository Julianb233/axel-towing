// ============================================================
// SERVICES DATA — Axle Towing & Impound
// ============================================================

export type ServiceStatus = "active" | "available" | "coming-soon";

export type ServiceSlug =
  | "website"
  | "seo"
  | "content"
  | "crm"
  | "ai-agents"
  | "social-media"
  | "email-marketing"
  | "paid-ads"
  | "branding"
  | "consulting";

export interface ServiceFeature {
  label: string;
  included: boolean;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  description: string;
  status: ServiceStatus;
  icon: string;
  color: string;
  features: ServiceFeature[];
  scope?: string;
  detailUrl?: string;
}

export const services: Service[] = [
  {
    slug: "website",
    name: "Website Design & Development",
    description: "Custom-built, conversion-optimized Next.js website with 123+ pages targeting Phoenix metro towing services.",
    status: "active",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    color: "blue",
    features: [
      { label: "Custom responsive design", included: true },
      { label: "Mobile-first development", included: true },
      { label: "SEO-optimized architecture (123+ pages)", included: true },
      { label: "TowBook vehicle lookup integration", included: true },
      { label: "Vercel hosting & CI/CD", included: true },
      { label: "Performance optimization (95+ PageSpeed)", included: true },
    ],
    scope: "Full website build — Homepage, About, Services, Contact, FAQ, Blog (61 articles), Location pages, and TowBook integration.",
  },
  {
    slug: "seo",
    name: "SEO & Search Visibility",
    description: "Technical SEO, keyword strategy, local citation building, and daily automated ranking reports for Phoenix metro.",
    status: "active",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    color: "emerald",
    features: [
      { label: "Technical SEO audit & fixes", included: true },
      { label: "50+ keywords tracked (SEMrush)", included: true },
      { label: "Google Business Profile optimization", included: true },
      { label: "Daily automated ranking reports", included: true },
      { label: "Local citation building (200+ engines)", included: true },
      { label: "Link building campaigns", included: true },
    ],
    scope: "Full SEO package — 50+ keywords, daily SEMrush snapshots, localized content targeting all Phoenix metro cities.",
  },
  {
    slug: "content",
    name: "Content Marketing",
    description: "Strategic content creation — 61 blog articles covering towing laws, HOA parking, and local area guides.",
    status: "active",
    icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
    color: "amber",
    features: [
      { label: "SEO-optimized blog articles (61 published)", included: true },
      { label: "Content calendar & strategy", included: true },
      { label: "Competitor content analysis", included: true },
      { label: "Arizona towing law educational content", included: true },
      { label: "Localized neighborhood guides", included: true },
      { label: "Internal linking strategy", included: true },
    ],
    scope: "61 blog articles published covering towing regulations, HOA parking enforcement, and Phoenix metro area guides.",
  },
  {
    slug: "crm",
    name: "CRM & Lead Management",
    description: "GoHighLevel CRM with lead pipeline, automated follow-ups, AI receptionist, and referral partner tracking.",
    status: "active",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    color: "pink",
    features: [
      { label: "GoHighLevel CRM setup & config", included: true },
      { label: "Contact form → pipeline integration", included: true },
      { label: "AI voice agent for after-hours", included: true },
      { label: "Automated follow-up sequences", included: true },
      { label: "Referral partner outreach drips", included: true },
      { label: "Conversion tracking & attribution", included: false },
    ],
    scope: "GoHighLevel CRM with AI receptionist, referral partner drip campaigns, and automated lead follow-up.",
  },
  {
    slug: "ai-agents",
    name: "AI Agents & Automation",
    description: "Custom AI agents for customer support, lead qualification, and after-hours call handling.",
    status: "available",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    color: "violet",
    features: [
      { label: "Customer support chatbot", included: false },
      { label: "Lead qualification agent", included: false },
      { label: "Appointment booking automation", included: false },
      { label: "Email response automation", included: false },
      { label: "Voice AI agent", included: false },
      { label: "Custom workflow agents", included: false },
    ],
  },
  {
    slug: "email-marketing",
    name: "Email Marketing & Automation",
    description: "Newsletter campaigns, referral partner nurture sequences, and property manager outreach.",
    status: "available",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    color: "cyan",
    features: [
      { label: "Referral partner nurture sequences", included: false },
      { label: "Property manager outreach", included: false },
      { label: "Monthly newsletter template", included: false },
      { label: "HOA board outreach campaigns", included: false },
      { label: "Drip campaign sequences", included: false },
      { label: "A/B testing & analytics", included: false },
    ],
  },
  {
    slug: "paid-ads",
    name: "Paid Advertising",
    description: "Google Ads, Meta Ads, and conversion-optimized campaigns for towing services.",
    status: "available",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
    color: "orange",
    features: [
      { label: "Google Ads campaign setup", included: false },
      { label: "Landing page design & development", included: false },
      { label: "Conversion tracking & attribution", included: false },
      { label: "A/B testing framework", included: false },
      { label: "Monthly ad spend optimization", included: false },
      { label: "ROI reporting dashboard", included: false },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media Management",
    description: "Content creation, scheduling, community management, and social analytics.",
    status: "coming-soon",
    icon: "M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z",
    color: "rose",
    features: [
      { label: "Content calendar & creation", included: false },
      { label: "Multi-platform scheduling", included: false },
      { label: "Community management", included: false },
      { label: "Monthly analytics reports", included: false },
      { label: "Influencer outreach", included: false },
      { label: "Paid social campaigns", included: false },
    ],
  },
];

export function getActiveServices(): Service[] {
  return services.filter((s) => s.status === "active");
}

export function getAvailableServices(): Service[] {
  return services.filter((s) => s.status === "available");
}

export function getComingSoonServices(): Service[] {
  return services.filter((s) => s.status === "coming-soon");
}

export function getServiceBySlug(slug: ServiceSlug): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceStats = {
  active: services.filter((s) => s.status === "active").length,
  available: services.filter((s) => s.status === "available").length,
  total: services.length,
};
