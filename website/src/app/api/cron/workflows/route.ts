import { NextResponse } from "next/server";
import { workflowEngine } from "@/lib/workflows/engine";

/**
 * Workflow Scheduler Cron
 *
 * GET /api/cron/workflows
 *
 * Called every 15 minutes by Vercel Cron or external cron service.
 * Finds all scheduled workflow steps that are due and executes them.
 *
 * Vercel cron config (add to vercel.json):
 *   { "crons": [{ "path": "/api/cron/workflows", "schedule": "every 15 min" }] }
 *
 * Authentication: Requires CRON_SECRET header.
 */

export async function GET(req: Request) {
  // Authenticate cron request
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const start = Date.now();
    const result = await workflowEngine.executePendingSteps();
    const duration = Date.now() - start;

    console.log(
      `[Workflow Cron] Executed: ${result.executed}, Failed: ${result.failed}, Skipped: ${result.skipped} (${duration}ms)`,
    );

    return NextResponse.json({
      success: true,
      ...result,
      durationMs: duration,
      nextRun: "15 minutes",
    });
  } catch (error) {
    console.error("[Workflow Cron] Error:", error);
    return NextResponse.json(
      { error: "Cron execution failed", detail: String(error) },
      { status: 500 },
    );
  }
}

/**
 * POST /api/cron/workflows — Manual trigger with options
 *
 * Body: { limit?: number, dryRun?: boolean }
 */
export async function POST(req: Request) {
  // Same auth as GET
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const body = await req.json().catch(() => ({}));
    const dryRun = body.dryRun === true;

    if (dryRun) {
      // Just return stats without executing
      const stats = await workflowEngine.getStats();
      return NextResponse.json({ dryRun: true, stats });
    }

    const result = await workflowEngine.executePendingSteps();

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Execution failed", detail: String(error) },
      { status: 500 },
    );
  }
}
