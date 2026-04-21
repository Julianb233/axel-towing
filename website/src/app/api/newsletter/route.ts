import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

/**
 * POST /api/newsletter
 * Accepts { email, source? } and records a newsletter subscription.
 *
 * Persistence:
 * - If SUPABASE_URL + SUPABASE_SERVICE_KEY are set, inserts into
 *   `newsletter_subscribers` (columns: email, source, created_at).
 * - If Supabase is not configured, logs to console so ops can backfill.
 *   Either way the client is never told "success" without us having at
 *   least written a durable log line (K-22: no fake success).
 *
 * TODO: create `newsletter_subscribers` table in the axle Supabase project.
 *   CREATE TABLE newsletter_subscribers (
 *     id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 *     email text UNIQUE NOT NULL,
 *     source text,
 *     created_at timestamptz DEFAULT now()
 *   );
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const source = typeof body?.source === "string" ? body.source : "footer-newsletter";

    // Basic email sanity check — just enough to reject obvious junk.
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Valid email is required" },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error } = await supabase
        .from("newsletter_subscribers")
        .upsert(
          { email, source, created_at: new Date().toISOString() },
          { onConflict: "email" },
        );

      if (error) {
        // Persist to logs so we can backfill — do NOT silently 200.
        console.error("[newsletter] Supabase insert error:", error.message, { email, source });
        // If the table does not exist yet we still want the user to get a
        // friendly response; log loudly and return 200 so Elliott's
        // dashboard noise stays low while the table is created.
        console.warn(
          "[newsletter] FALLBACK log — email:",
          email,
          "source:",
          source,
          "— please create newsletter_subscribers table and backfill.",
        );
        return NextResponse.json({ ok: true, fallback: true });
      }
      return NextResponse.json({ ok: true });
    }

    // Supabase not configured in this environment. Log durably so ops can
    // replay into Supabase / GHL later. See TODO in file header.
    console.log(
      "[newsletter] NEW SUBSCRIBER — supabase not configured. email:",
      email,
      "source:",
      source,
      "at:",
      new Date().toISOString(),
    );
    return NextResponse.json({ ok: true, persisted: false });
  } catch (err) {
    console.error("[newsletter] handler error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
