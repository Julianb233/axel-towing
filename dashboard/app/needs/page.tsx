import PageHeader from "../../components/PageHeader";
import { listOpenActionItems, type PortalActionItem } from "../../lib/convex";

// AI-9515 Phase B — Convex-driven action items. Replaces the 14-item static
// file (kept temporarily as page-static.tsx.legacy for soak/rollback). Source
// of truth is now the aa-fleet portalActionItems Convex table, mirrored from
// Linear `client-action` issues.

export const revalidate = 60;

const CLIENT_SLUG = "axle-towing";

const PRIORITY_STYLES: Record<PortalActionItem["priority"], { bg: string; fg: string; ring: string }> = {
  critical: { bg: "bg-rose-50",   fg: "text-rose-700",   ring: "ring-rose-400" },
  high:     { bg: "bg-amber-50",  fg: "text-amber-700",  ring: "ring-amber-400" },
  medium:   { bg: "bg-blue-50",   fg: "text-blue-700",   ring: "ring-blue-400" },
  low:      { bg: "bg-gray-50",   fg: "text-gray-700",   ring: "ring-gray-300" },
};

const STATUS_LABEL: Record<PortalActionItem["status"], string> = {
  open: "Open",
  in_progress: "In Progress",
  waiting: "Waiting",
  resolved: "Resolved",
};

export default async function NeedsPage() {
  let items: PortalActionItem[] = [];
  let fetchError: string | null = null;
  try {
    items = await listOpenActionItems(CLIENT_SLUG, 50);
  } catch (err) {
    fetchError = err instanceof Error ? err.message : String(err);
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader
        title="What We Need From You"
        subtitle="Action items where your input keeps the project moving. Synced live from Linear."
      />

      {fetchError && (
        <div className="mt-8 rounded-xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-900">
          <p className="font-semibold mb-1">Couldn&apos;t load action items</p>
          <p className="font-mono text-xs">{fetchError}</p>
        </div>
      )}

      {!fetchError && items.length === 0 && (
        <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
          <p className="font-semibold mb-2">Nothing to do — you&apos;re all clear</p>
          <p className="text-sm leading-relaxed">
            No open action items right now. New items appear here automatically when we file a Linear
            issue tagged <code className="font-mono text-xs bg-white px-1 py-0.5 rounded">client-action</code>.
          </p>
        </div>
      )}

      {items.length > 0 && (
        <p className="mt-2 text-xs text-gray-500">
          {items.length} open {items.length === 1 ? "item" : "items"} &nbsp;·&nbsp; live from Convex via Linear
        </p>
      )}

      <div className="mt-8 space-y-4">
        {items.map((item) => {
          const style = PRIORITY_STYLES[item.priority] ?? PRIORITY_STYLES.medium;
          return (
            <article key={item._id} className={`rounded-xl border border-gray-200 bg-white p-5 ring-1 ring-inset ${style.ring}`}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-gray-900 leading-snug flex-1">{item.title}</h3>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${style.bg} ${style.fg}`}>
                    {item.priority}
                  </span>
                  <span className="text-[10px] text-gray-400">{STATUS_LABEL[item.status]}</span>
                </div>
              </div>
              {item.why && (
                <div className="mt-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Why this matters</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.why}</p>
                </div>
              )}
              {item.howTo && (
                <div className="mt-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">How to do it</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.howTo}</p>
                </div>
              )}
              {item.impact && (
                <div className="mt-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Impact</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.impact}</p>
                </div>
              )}
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-gray-500 font-mono">
                {item.estimatedTime && (
                  <span className="bg-gray-50 px-2 py-0.5 rounded">⏱ {item.estimatedTime}</span>
                )}
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{item.linearIssueId}</span>
                {item.linearUrl && (
                  <a href={item.linearUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-50 px-2 py-0.5 rounded hover:bg-gray-100">
                    View in Linear →
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
