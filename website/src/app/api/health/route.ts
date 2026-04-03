import { NextResponse } from "next/server";

/**
 * GET /api/health
 * Health check endpoint for Railway deployment monitoring.
 */
export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
