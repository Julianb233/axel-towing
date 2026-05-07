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
