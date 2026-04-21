import { NextResponse } from "next/server";
import { workflowEngine, ALL_WORKFLOWS } from "@/lib/workflows/engine";

/**
 * Workflow Admin API
 *
 * GET  /api/admin/workflows — Dashboard stats + workflow list
 * POST /api/admin/workflows — Enroll a contact manually
 * DELETE /api/admin/workflows — Cancel an enrollment
 */

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  // If email provided, return that contact's enrollments
  if (email) {
    const enrollments = await workflowEngine.getContactEnrollments(email);
    return NextResponse.json({ email, enrollments });
  }

  // Dashboard view
  const stats = await workflowEngine.getStats();

  const workflows = ALL_WORKFLOWS.map((wf) => ({
    id: wf.id,
    name: wf.name,
    description: wf.description,
    triggerTag: wf.trigger.tag,
    enabled: wf.enabled,
    stepCount: wf.steps.length,
    emailSteps: wf.steps.filter((s) => s.action === "send_email").length,
    smsSteps: wf.steps.filter((s) => s.action === "send_sms").length,
    stats: stats.byWorkflow[wf.id] || { active: 0, completed: 0, emailsSent: 0 },
  }));

  return NextResponse.json({
    stats,
    workflows,
    endpoints: {
      webhook: "POST /api/webhooks/ghl",
      cron: "GET /api/cron/workflows",
      test: "GET /api/webhooks/ghl?action=test&email=X&workflow=Y",
      admin: "GET /api/admin/workflows",
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { workflowId, email, firstName, lastName, companyName, city, phone } = body;

    if (!workflowId || !email) {
      return NextResponse.json(
        { error: "Required: workflowId, email" },
        { status: 400 },
      );
    }

    const enrollment = await workflowEngine.enrollContact(workflowId, {
      id: `manual-${Date.now()}`,
      email,
      firstName: firstName || "",
      lastName: lastName || "",
      companyName: companyName || "",
      city: city || "Phoenix",
      phone: phone || "",
      tags: [],
    });

    if (!enrollment) {
      return NextResponse.json(
        { error: "Enrollment failed — may already be enrolled" },
        { status: 409 },
      );
    }

    return NextResponse.json({ success: true, enrollment });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const enrollmentId = searchParams.get("enrollmentId");

  if (!enrollmentId) {
    return NextResponse.json(
      { error: "Required: enrollmentId" },
      { status: 400 },
    );
  }

  await workflowEngine.cancelEnrollment(enrollmentId);
  return NextResponse.json({ success: true, cancelled: enrollmentId });
}
