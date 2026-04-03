import type { ServiceSlug } from "./services";

export type ContentType = "blog-article" | "social-post" | "email-campaign" | "video" | "infographic" | "case-study" | "ebook" | "press-release";
export type ContentStatus = "draft" | "pending-approval" | "approved" | "scheduled" | "published" | "rejected";
export type ContentPlatform = "website" | "instagram" | "facebook" | "linkedin" | "twitter" | "email" | "youtube" | "tiktok" | "google-business";

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: ContentType;
  platform: ContentPlatform;
  service: ServiceSlug;
  status: ContentStatus;
  scheduledDate: string;
  publishedDate?: string;
  previewUrl?: string;
  liveUrl?: string;
  targetKeywords?: string[];
  clientNote?: string;
  author: string;
}

export const contentCalendar: ContentItem[] = [
  // --- Published ---
  {
    id: "cc-1",
    title: "Arizona Towing Laws: ARS 28-3511 Explained",
    description: "Comprehensive guide to Arizona's towing statutes covering private property towing, signage requirements, and vehicle owner rights.",
    type: "blog-article",
    platform: "website",
    service: "content",
    status: "published",
    scheduledDate: "2026-03-10",
    publishedDate: "2026-03-10",
    liveUrl: "https://axletowing.com/blog/arizona-towing-laws-ars-28-3511-explained",
    targetKeywords: ["arizona towing laws", "ARS 28-3511", "towing regulations arizona"],
    author: "AI Acrobatics",
  },
  {
    id: "cc-2",
    title: "HOA Parking Enforcement Guide for Property Managers",
    description: "Complete guide for HOA board members and property managers on implementing parking enforcement programs.",
    type: "blog-article",
    platform: "website",
    service: "content",
    status: "published",
    scheduledDate: "2026-03-15",
    publishedDate: "2026-03-15",
    liveUrl: "https://axletowing.com/blog/hoa-parking-enforcement-guide",
    targetKeywords: ["HOA parking enforcement", "property manager towing", "parking enforcement phoenix"],
    author: "AI Acrobatics",
  },
  {
    id: "cc-3",
    title: "Google Business Profile Optimization",
    description: "GBP post announcing optimized listing with updated photos, service hours, and descriptions.",
    type: "social-post",
    platform: "google-business",
    service: "seo",
    status: "published",
    scheduledDate: "2026-03-20",
    publishedDate: "2026-03-20",
    author: "AI Acrobatics",
  },

  // --- Scheduled ---
  {
    id: "cc-4",
    title: "Fire Lane Enforcement: What Property Managers Need to Know",
    description: "Educational article on fire lane regulations, signage requirements, and enforcement best practices in Arizona.",
    type: "blog-article",
    platform: "website",
    service: "content",
    status: "scheduled",
    scheduledDate: "2026-04-03",
    targetKeywords: ["fire lane enforcement", "fire lane towing arizona", "fire lane signage requirements"],
    author: "AI Acrobatics",
  },
  {
    id: "cc-5",
    title: "Referral Partner Outreach — Locksmiths",
    description: "Email drip sequence targeting 50+ Phoenix metro locksmiths for referral partnerships.",
    type: "email-campaign",
    platform: "email",
    service: "crm",
    status: "scheduled",
    scheduledDate: "2026-04-05",
    author: "AI Acrobatics",
  },

  // --- Pending Approval ---
  {
    id: "cc-6",
    title: "Abandoned Vehicle Removal on Private Property in Arizona",
    description: "Guide covering the legal process for removing abandoned vehicles from private lots, HOA communities, and commercial properties.",
    type: "blog-article",
    platform: "website",
    service: "content",
    status: "pending-approval",
    scheduledDate: "2026-04-10",
    targetKeywords: ["abandoned vehicle removal", "private property towing arizona", "abandoned car removal phoenix"],
    author: "AI Acrobatics",
  },
  {
    id: "cc-7",
    title: "Complete Guide to Towing Services in Mesa, AZ",
    description: "Localized SEO article targeting Mesa market. 2,500+ words covering all towing services available.",
    type: "blog-article",
    platform: "website",
    service: "seo",
    status: "pending-approval",
    scheduledDate: "2026-04-15",
    targetKeywords: ["towing mesa az", "tow truck mesa", "impound mesa arizona"],
    author: "AI Acrobatics",
  },

  // --- Drafts ---
  {
    id: "cc-8",
    title: "Referral Partner Outreach — Property Managers",
    description: "Email drip sequence targeting 100+ Phoenix metro property management companies.",
    type: "email-campaign",
    platform: "email",
    service: "crm",
    status: "draft",
    scheduledDate: "2026-04-18",
    author: "AI Acrobatics",
  },
  {
    id: "cc-9",
    title: "24/7 Towing Dispatch — How It Works Video",
    description: "Short-form video showing the 24/7/365 dispatch process from call to arrival.",
    type: "video",
    platform: "youtube",
    service: "content",
    status: "draft",
    scheduledDate: "2026-04-22",
    author: "AI Acrobatics",
  },
];

export function getContentByStatus(status: ContentStatus): ContentItem[] {
  return contentCalendar.filter((c) => c.status === status);
}

export function getContentByMonth(year: number, month: number): ContentItem[] {
  return contentCalendar.filter((c) => {
    const d = new Date(c.scheduledDate);
    return d.getFullYear() === year && d.getMonth() === month - 1;
  });
}

export function getContentNeedingApproval(): ContentItem[] {
  return contentCalendar.filter((c) => c.status === "pending-approval");
}

export function getUpcomingContent(days: number = 30): ContentItem[] {
  const now = new Date();
  const cutoff = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
  return contentCalendar
    .filter((c) => {
      const d = new Date(c.scheduledDate);
      return d >= now && d <= cutoff && c.status !== "published";
    })
    .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime());
}

export const calendarStats = {
  total: contentCalendar.length,
  published: contentCalendar.filter((c) => c.status === "published").length,
  scheduled: contentCalendar.filter((c) => c.status === "scheduled" || c.status === "approved").length,
  pendingApproval: contentCalendar.filter((c) => c.status === "pending-approval").length,
  drafts: contentCalendar.filter((c) => c.status === "draft").length,
};
