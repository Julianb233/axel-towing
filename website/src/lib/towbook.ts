/**
 * TowBook integration layer.
 * Currently sends requests via webhook/email.
 * Ready for TowBook API integration when credentials are available.
 */

import type { ChatbotRequest } from "./chatbot-knowledge";

export interface TowBookDispatchResult {
  success: boolean;
  referenceId: string;
  message: string;
  dispatchMethod: "webhook" | "email" | "towbook-api";
}

/**
 * Submit a tow/service request to dispatch.
 * Phase 1: Sends notification email + stores request.
 * Phase 2 (future): Direct TowBook API integration for automated dispatch.
 */
export async function submitToDispatch(
  request: ChatbotRequest,
): Promise<TowBookDispatchResult> {
  const referenceId = generateReferenceId(request.type);

  // Phase 1: Submit via internal API (email notification + database)
  // Phase 2: Will integrate directly with TowBook API
  const response = await fetch("/api/dispatch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...request, referenceId }),
  });

  if (!response.ok) {
    return {
      success: false,
      referenceId,
      message: "Failed to submit request. Please call dispatch at 480-288-5526.",
      dispatchMethod: "webhook",
    };
  }

  return {
    success: true,
    referenceId,
    message: `Request submitted successfully. Reference: ${referenceId}`,
    dispatchMethod: "webhook",
  };
}

function generateReferenceId(type: string): string {
  const prefix = {
    "tow-request": "TOW",
    stickering: "STK",
    "patrol-request": "PTR",
    report: "RPT",
    question: "INQ",
  }[type] || "REQ";

  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

/**
 * Format request for dispatch notification email.
 */
export function formatRequestForEmail(request: ChatbotRequest & { referenceId: string }): string {
  const urgencyTag = request.urgent ? "[URGENT] " : "";
  const typeLabel = {
    "tow-request": "Tow Request",
    stickering: "Stickering Request",
    "patrol-request": "Patrol Request",
    report: "Report Request",
    question: "General Inquiry",
  }[request.type] || "Request";

  let body = `${urgencyTag}New ${typeLabel}\n`;
  body += `Reference: ${request.referenceId}\n`;
  body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  body += `Contact: ${request.contactName}\n`;
  body += `Phone: ${request.contactPhone}\n`;
  body += `Email: ${request.contactEmail}\n\n`;
  body += `Property: ${request.propertyName}\n`;
  body += `Address: ${request.propertyAddress}\n\n`;

  if (request.type === "tow-request") {
    body += `Vehicle: ${request.vehicleDescription || "Not provided"}\n`;
    body += `Plate: ${request.licensePlate || "Not visible"}\n`;
    body += `Location: ${request.locationOnProperty || "Not specified"}\n`;
    body += `Violation: ${request.violation || "Not specified"}\n`;
  } else if (request.type === "stickering") {
    body += `Vehicles to sticker: ${request.numberOfVehicles || "Not specified"}\n`;
    body += `Notes: ${request.stickeringNotes || "None"}\n`;
  } else if (request.type === "patrol-request") {
    body += `Preferred schedule: ${request.patrolSchedule || "Not specified"}\n`;
    body += `Notes: ${request.patrolNotes || "None"}\n`;
  }

  if (request.additionalNotes) {
    body += `\nAdditional notes: ${request.additionalNotes}\n`;
  }

  body += `\nUrgent: ${request.urgent ? "YES" : "No"}\n`;
  return body;
}
