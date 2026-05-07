import PageHeader from "../../components/PageHeader";
import { listChangelog, type PortalChangelogEntry } from "../../lib/convex";

// AI-9515 Phase B — Convex-driven changelog. Replaces the 1,381-line static
// file (kept temporarily as page-static.tsx.legacy for soak/rollback). Source
// of truth is now the aa-fleet portalChangelog Convex table, fed by
// .fleet-config/hooks/auto-changelog.sh on every git push to a client repo.
//
// Per Julian's 2026-05-07 directive, Supabase is being deprecated; this page
// reads ONLY from Convex.

export const revalidate = 60;

const CLIENT_SLUG = "axle-towing";

const CATEGORY_STYLES: Record<PortalChangelogEntry["category"], { bg: string; fg: string; border: string }> = {
  feature:        { bg: "bg-emerald-50", fg: "text-emerald-700", border: "border-emerald-200" },
  fix:            { bg: "bg-rose-50",    fg: "text-rose-700",    border: "border-rose-200" },
  content:        { bg: "bg-green-50",   fg: "text-green-700",   border: "border-green-200" },
  seo:            { bg: "bg-amber-50",   fg: "text-amber-700",   border: "border-amber-200" },
  design:         { bg: "bg-indigo-50",  fg: "text-indigo-700",  border: "border-indigo-200" },
  infrastructure: { bg: "bg-purple-50",  fg: "text-purple-700",  border: "border-purple-200" },
  improvement:    { bg: "bg-sky-50",     fg: "text-sky-700",     border: "border-sky-200" },
  strategy:       { bg: "bg-blue-50",    fg: "text-blue-700",    border: "border-blue-200" },
};

function formatDate(ms: number): string {
  return new Date(ms).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function groupByDate(entries: PortalChangelogEntry[]): Map<string, PortalChangelogEntry[]> {
  const out = new Map<string, PortalChangelogEntry[]>();
  for (const e of entries) {
    const key = formatDate(e.createdAt);
    const list = out.get(key) ?? [];
    list.push(e);
    out.set(key, list);
  }
  return out;
}

export default async function ChangelogPage() {
  let entries: PortalChangelogEntry[] = [];
  let fetchError: string | null = null;
  try {
    entries = await listChangelog(CLIENT_SLUG, 200);
  } catch (err) {
    fetchError = err instanceof Error ? err.message : String(err);
  }

  const grouped = groupByDate(entries);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="Changelog"
        subtitle="Everything we've shipped on your project. Auto-updated on every push from the AI Acrobatics fleet."
      />

      {fetchError && (
        <div className="mt-8 rounded-xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-900">
          <p className="font-semibold mb-1">Couldn&apos;t load changelog</p>
          <p className="font-mono text-xs">{fetchError}</p>
        </div>
      )}

      {!fetchError && entries.length === 0 && (
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
          <p className="font-semibold mb-2">No changelog entries yet</p>
          <p className="text-sm leading-relaxed">
            New entries land here automatically when our team pushes code to your project. The first entry
            should appear within a few hours of activity resuming.
          </p>
        </div>
      )}

      {entries.length > 0 && (
        <p className="mt-2 text-xs text-gray-500">
          {entries.length} {entries.length === 1 ? "entry" : "entries"} &nbsp;·&nbsp; live from Convex
        </p>
      )}

      <div className="mt-8 space-y-10">
        {Array.from(grouped.entries()).map(([date, items]) => (
          <section key={date}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">{date}</h2>
            <div className="space-y-3">
              {items.map((entry) => {
                const style = CATEGORY_STYLES[entry.category] ?? CATEGORY_STYLES.improvement;
                return (
                  <article key={entry._id} className="rounded-xl border border-gray-200 bg-white p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 leading-snug">{entry.title}</h3>
                        {entry.description && (
                          <p className="mt-2 text-sm text-gray-700 leading-relaxed">{entry.description}</p>
                        )}
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap border ${style.bg} ${style.fg} ${style.border}`}
                      >
                        {entry.category}
                      </span>
                    </div>
                    {entry.items && entry.items.length > 0 && (
                      <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
                        {entry.items.slice(0, 8).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {(entry.linearIssueIds?.length || entry.commitSha || entry.repo) && (
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-gray-500 font-mono">
                        {entry.repo && <span className="bg-gray-50 px-2 py-0.5 rounded">{entry.repo}</span>}
                        {entry.commitSha && (
                          <span className="bg-gray-50 px-2 py-0.5 rounded">{entry.commitSha.slice(0, 7)}</span>
                        )}
                        {entry.linearIssueIds?.slice(0, 5).map((id) => (
                          <span key={id} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{id}</span>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
