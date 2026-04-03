import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * GET /api/feedback-digest
 * Compiles all recent feedback items and sends a daily summary email.
 * Designed to be called by a cron job (e.g., Vercel Cron, Railway Cron).
 *
 * Query params:
 *   ?items=<base64-encoded JSON array of FeedbackItem[]>
 *   (If no items param, returns instructions for usage)
 *
 * POST /api/feedback-digest
 * Accepts a JSON body with { items: FeedbackItem[] } directly.
 */

interface FeedbackItem {
  id: string;
  type: "comment" | "suggestion" | "reaction";
  text: string;
  priority: "low" | "medium" | "high";
  status: "new" | "reviewed" | "in-progress" | "completed";
  page: string;
  createdAt: string;
  reaction?: "up" | "down";
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const encodedItems = searchParams.get("items");

  if (!encodedItems) {
    return NextResponse.json({
      usage:
        "POST a JSON body with { items: FeedbackItem[] } or pass ?items=<base64-encoded JSON>",
      description:
        "This endpoint compiles a daily digest email of all feedback items. " +
        "Call it from a cron job, passing the current feedback items from localStorage.",
    });
  }

  try {
    const items: FeedbackItem[] = JSON.parse(
      Buffer.from(encodedItems, "base64").toString("utf-8"),
    );
    return await compileAndSendDigest(items);
  } catch {
    return NextResponse.json(
      { error: "Invalid base64-encoded items" },
      { status: 400 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items: FeedbackItem[] = body.items || [];

    if (items.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No feedback items to digest",
        sent: false,
      });
    }

    return await compileAndSendDigest(items);
  } catch (error) {
    console.error("Feedback digest error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// ─── Compile & Send ────────────────────────────────────────────────────────

async function compileAndSendDigest(items: FeedbackItem[]) {
  // Filter to recent items (last 24 hours for daily digest)
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const recentItems = items.filter((item) => item.createdAt >= oneDayAgo);

  if (recentItems.length === 0) {
    return NextResponse.json({
      success: true,
      message: "No recent feedback items in the last 24 hours",
      sent: false,
    });
  }

  // Group by type
  const comments = recentItems.filter((i) => i.type === "comment");
  const suggestions = recentItems.filter((i) => i.type === "suggestion");
  const reactions = recentItems.filter((i) => i.type === "reaction");

  // Sort suggestions by priority (high first)
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  suggestions.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
  );

  // Build email
  const lines: string[] = [
    `AXLE TOWING — DAILY FEEDBACK DIGEST`,
    `${new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}`,
    ``,
    `Total items in last 24h: ${recentItems.length}`,
    `  Comments: ${comments.length}`,
    `  Suggestions: ${suggestions.length}`,
    `  Reactions: ${reactions.length}`,
    ``,
  ];

  // High priority items first
  const highPriority = recentItems.filter((i) => i.priority === "high");
  if (highPriority.length > 0) {
    lines.push(`=== HIGH PRIORITY ===`);
    for (const item of highPriority) {
      lines.push(
        `  [${item.type.toUpperCase()}] ${item.text}`,
        `    Page: ${item.page}`,
        `    Time: ${new Date(item.createdAt).toLocaleString("en-US", { timeZone: "America/Phoenix" })}`,
        ``,
      );
    }
  }

  if (comments.length > 0) {
    lines.push(`=== COMMENTS (${comments.length}) ===`);
    for (const item of comments) {
      lines.push(
        `  ${item.text}`,
        `    Page: ${item.page}`,
        `    Time: ${new Date(item.createdAt).toLocaleString("en-US", { timeZone: "America/Phoenix" })}`,
        ``,
      );
    }
  }

  if (suggestions.length > 0) {
    lines.push(`=== SUGGESTIONS (${suggestions.length}) ===`);
    for (const item of suggestions) {
      lines.push(
        `  [${item.priority.toUpperCase()}] ${item.text}`,
        `    Page: ${item.page}`,
        `    Time: ${new Date(item.createdAt).toLocaleString("en-US", { timeZone: "America/Phoenix" })}`,
        ``,
      );
    }
  }

  if (reactions.length > 0) {
    lines.push(`=== REACTIONS (${reactions.length}) ===`);
    // Group reactions by page
    const reactionsByPage = new Map<string, { up: number; down: number }>();
    for (const item of reactions) {
      const existing = reactionsByPage.get(item.page) || { up: 0, down: 0 };
      if (item.reaction === "up") existing.up++;
      else existing.down++;
      reactionsByPage.set(item.page, existing);
    }
    for (const [page, counts] of reactionsByPage) {
      lines.push(
        `  ${page}: ${counts.up} thumbs up, ${counts.down} thumbs down`,
      );
    }
    lines.push(``);
  }

  lines.push(`---`);
  lines.push(`Dashboard: https://axle-towing-portal.vercel.app/feedback`);

  const emailBody = lines.join("\n");

  // Send via Resend
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured — digest not sent");
    return NextResponse.json({
      success: false,
      error: "Resend not configured",
      digest: emailBody,
    });
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.FROM_EMAIL || "dispatch@axletowing.com";

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: "julian@aiacrobatics.com",
    subject: `Axle Towing Feedback Digest — ${recentItems.length} items (${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })})`,
    text: emailBody,
  });

  if (error) {
    console.error("Digest email error:", error.message);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }

  console.log(`Feedback digest sent with ${recentItems.length} items`);
  return NextResponse.json({
    success: true,
    sent: true,
    itemCount: recentItems.length,
  });
}
