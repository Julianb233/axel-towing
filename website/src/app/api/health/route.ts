import { NextResponse } from "next/server";
import { getGHLPipelines } from "@/lib/ghl";

/**
 * GET /api/health
 * Health check endpoint for Railway deployment monitoring.
 * Pass ?ghl=true to verify GHL API connectivity and discover pipeline IDs.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const checkGHL = url.searchParams.get("ghl") === "true";

  const health: Record<string, unknown> = {
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    integrations: {
      ghl: {
        configured: !!process.env.GHL_API_KEY,
        locationId: process.env.GHL_LOCATION_ID || null,
        pipelineId: process.env.GHL_PIPELINE_ID || null,
        stageId: process.env.GHL_STAGE_NEW_LEAD_ID || null,
      },
      supabase: !!(
        (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL) &&
        (process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY)
      ),
      resend: !!process.env.RESEND_API_KEY,
      twilio: !!process.env.TWILIO_ACCOUNT_SID,
    },
  };

  // If ?ghl=true, call GHL to list pipelines (useful for setup/discovery)
  if (checkGHL && process.env.GHL_API_KEY) {
    const pipelineResult = await getGHLPipelines();
    (health.integrations as Record<string, unknown>).ghlPipelines = pipelineResult;
  }

  return NextResponse.json(health);
}
