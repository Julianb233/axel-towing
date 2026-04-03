import { NextRequest, NextResponse } from "next/server";
import type { OutreachEntry, OutreachStatus, OutreachPlatform } from "@/lib/data/social-outreach";

/**
 * In-memory outreach log (persists for the lifetime of the server process).
 * For a production implementation, replace with a database-backed store.
 */
const outreachLog: OutreachEntry[] = [];

/**
 * POST /api/outreach
 * Log a new outreach activity entry.
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

    const entry: OutreachEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name,
      company,
      platform,
      templateId,
      status,
      notes: notes ?? undefined,
      sentAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    outreachLog.push(entry);

    return NextResponse.json({ success: true, entry }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

/**
 * GET /api/outreach
 * Return a summary of the outreach log.
 */
export async function GET() {
  const summary = {
    total: outreachLog.length,
    byStat: {
      sent: outreachLog.filter((e) => e.status === "sent").length,
      replied: outreachLog.filter((e) => e.status === "replied").length,
      interested: outreachLog.filter((e) => e.status === "interested").length,
      not_interested: outreachLog.filter((e) => e.status === "not_interested").length,
      converted: outreachLog.filter((e) => e.status === "converted").length,
      no_response: outreachLog.filter((e) => e.status === "no_response").length,
    },
    byPlatform: {
      linkedin: outreachLog.filter((e) => e.platform === "linkedin").length,
      instagram: outreachLog.filter((e) => e.platform === "instagram").length,
      facebook: outreachLog.filter((e) => e.platform === "facebook").length,
    },
    recentEntries: outreachLog.slice(-20).reverse(),
  };

  return NextResponse.json(summary);
}
