/**
 * Convex HTTP client — reads aa-fleet snapshots without bundling the Convex SDK.
 *
 * The aa-fleet Convex deployment hosts shared cross-client tables — semrushSnapshots,
 * portalClients, agentTasks, etc. We read them from this dashboard via plain HTTP.
 *
 * Env: NEXT_PUBLIC_CONVEX_URL (set on Vercel; falls back to the dev deployment URL).
 */

const CONVEX_URL =
  process.env.NEXT_PUBLIC_CONVEX_URL ||
  process.env.CONVEX_URL ||
  "https://third-bear-685.convex.cloud";

export interface SemrushSnapshot {
  _id: string;
  clientSlug: string;
  domain: string;
  date: string;
  overview: {
    authorityScore: number;
    organicKeywords: number;
    organicTraffic: number;
    backlinks: number;
    referringDomains: number;
    adwordsTraffic: number;
    aiVisibilityMentions: number;
    aiVisibilityCitedPages: number;
  };
  keywords: Array<{
    keyword: string;
    intent: string;
    position: number;
    volume: number;
    cpc: number;
    traffic: number;
  }>;
  competitors: Array<{
    domain: string;
    authorityScore: number;
    organicKeywords: number;
    organicTraffic: number;
    backlinks: number;
    referringDomains: number;
  }>;
  backlinks: {
    follow: number;
    nofollow: number;
    topReferringDomains: Array<{
      domain: string;
      ip?: string;
      backlinks: number;
    }>;
  };
  source: string;
  profile?: string;
  createdAt: number;
}

async function convexQuery<T>(path: string, args: Record<string, unknown>): Promise<T> {
  const resp = await fetch(`${CONVEX_URL}/api/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path, args, format: "json" }),
    next: { revalidate: 60 }, // Re-fetch at most once per minute
  });
  if (!resp.ok) {
    throw new Error(`Convex ${path} HTTP ${resp.status}: ${await resp.text()}`);
  }
  const json = await resp.json();
  if (json.status === "error") {
    throw new Error(`Convex ${path} error: ${json.errorMessage ?? JSON.stringify(json)}`);
  }
  return json.value as T;
}

export async function getLatestSnapshot(clientSlug: string): Promise<SemrushSnapshot | null> {
  return convexQuery<SemrushSnapshot | null>(
    "semrushSnapshots:getLatest",
    { clientSlug },
  );
}

// Portal changelog (auto-fed by .fleet-config/hooks/auto-changelog.sh on every git push)
export interface PortalChangelogEntry {
  _id: string;
  clientSlug: string;
  title: string;
  description?: string;
  category: "feature" | "fix" | "content" | "seo" | "design" | "infrastructure" | "improvement" | "strategy";
  items?: string[];
  linearIssueIds?: string[];
  repo?: string;
  branch?: string;
  commitSha?: string;
  deployUrl?: string;
  agent?: string;
  createdAt: number;
}

export async function listChangelog(clientSlug: string, limit = 100): Promise<PortalChangelogEntry[]> {
  return convexQuery<PortalChangelogEntry[]>(
    "portalChangelog:listForClient",
    { clientSlug, limit },
  );
}

// Portal feed (deploy events, content publishes, milestones)
export interface PortalFeedEntry {
  _id: string;
  clientSlug: string;
  type: "deploy" | "content-published" | "meeting-notes" | "deliverable" | "seo-snapshot" | "review" | "approval-needed" | "milestone" | "other";
  title: string;
  body?: string;
  url?: string;
  icon?: string;
  agent?: string;
  createdAt: number;
}

export async function listFeed(clientSlug: string, limit = 50): Promise<PortalFeedEntry[]> {
  return convexQuery<PortalFeedEntry[]>(
    "portalFeed:listForClient",
    { clientSlug, limit },
  );
}

// Portal action items (mirror of Linear `client-action` issues)
export interface PortalActionItem {
  _id: string;
  clientSlug: string;
  linearIssueId: string;
  title: string;
  why?: string;
  howTo?: string;
  impact?: string;
  estimatedTime?: string;
  priority: "critical" | "high" | "medium" | "low";
  status: "open" | "in_progress" | "waiting" | "resolved";
  linearUrl?: string;
  createdAt: number;
  updatedAt: number;
}

export async function listOpenActionItems(clientSlug: string, limit = 50): Promise<PortalActionItem[]> {
  return convexQuery<PortalActionItem[]>(
    "portalActionItems:listOpenForClient",
    { clientSlug, limit },
  );
}

export async function listSnapshots(
  clientSlug: string,
  limit = 30,
): Promise<SemrushSnapshot[]> {
  return convexQuery<SemrushSnapshot[]>(
    "semrushSnapshots:listForClient",
    { clientSlug, limit },
  );
}

/**
 * Compute the per-metric delta between the latest snapshot and the one N positions back.
 * Returns null when fewer than 2 snapshots exist.
 */
export function computeDelta(
  latest: SemrushSnapshot | undefined,
  prior: SemrushSnapshot | undefined,
): null | {
  authorityScore: number;
  organicKeywords: number;
  organicTraffic: number;
  backlinks: number;
  referringDomains: number;
  daysApart: number;
} {
  if (!latest || !prior) return null;
  const daysApart = Math.round(
    (new Date(latest.date).getTime() - new Date(prior.date).getTime()) / 86400000,
  );
  return {
    authorityScore: latest.overview.authorityScore - prior.overview.authorityScore,
    organicKeywords: latest.overview.organicKeywords - prior.overview.organicKeywords,
    organicTraffic: latest.overview.organicTraffic - prior.overview.organicTraffic,
    backlinks: latest.overview.backlinks - prior.overview.backlinks,
    referringDomains: latest.overview.referringDomains - prior.overview.referringDomains,
    daysApart,
  };
}
