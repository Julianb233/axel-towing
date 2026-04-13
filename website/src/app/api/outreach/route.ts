import { NextRequest, NextResponse } from "next/server";
import type { OutreachPlatform, OutreachStatus } from "@/lib/data/social-outreach";
import { createClient } from "@supabase/supabase-js";

/**
 * Get Supabase client for outreach activities.
 * Returns null if credentials are not configured.
 */
function getSupabase() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

/**
 * POST /api/outreach
 * Log a new outreach activity entry to Supabase.
 *
 * Body: { name, company, platform, templateId, status, notes? }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, platform, templateId, status, notes } = body;

    // Basic validation
    const requiredFields = ["name", "company", "platform", "templateId", "status"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const validPlatforms: OutreachPlatform[] = ["linkedin", "instagram", "facebook"];
    if (!validPlatforms.includes(platform)) {
      return NextResponse.json(
        { error: `Invalid platform. Must be one of: ${validPlatforms.join(", ")}` },
        { status: 400 }
      );
    }

    const validStatuses: OutreachStatus[] = [
      "sent",
      "replied",
      "interested",
      "not_interested",
      "converted",
      "no_response",
    ];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(", ")}` },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (!supabase) {
      console.warn("[Outreach] Supabase not configured — cannot store outreach activity");
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }

    const { data, error } = await supabase
      .from("outreach_activities")
      .insert({
        contact_name: name,
        company,
        platform,
        template_id: templateId,
        status,
        notes: notes ?? null,
        sent_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("[Outreach] Supabase insert error:", error.message);
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, entry: data }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

/**
 * GET /api/outreach
 * Return a summary of outreach activities from Supabase.
 */
export async function GET() {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({
      total: 0,
      byStatus: {},
      byPlatform: {},
      recentEntries: [],
      error: "Database not configured",
    });
  }

  try {
    // Get recent entries
    const { data: entries, error } = await supabase
      .from("outreach_activities")
      .select("*")
      .order("sent_at", { ascending: false })
      .limit(50);

    if (error) {
      console.error("[Outreach] Supabase query error:", error.message);
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      );
    }

    const allEntries = entries || [];

    // Count by status
    const byStatus: Record<string, number> = {};
    const byPlatform: Record<string, number> = {};

    for (const entry of allEntries) {
      byStatus[entry.status] = (byStatus[entry.status] || 0) + 1;
      byPlatform[entry.platform] = (byPlatform[entry.platform] || 0) + 1;
    }

    return NextResponse.json({
      total: allEntries.length,
      byStatus,
      byPlatform,
      recentEntries: allEntries.slice(0, 20),
    });
  } catch (error) {
    console.error("[Outreach] Error fetching outreach data:", error);
    return NextResponse.json(
      { error: "Failed to fetch outreach data" },
      { status: 500 }
    );
  }
}
