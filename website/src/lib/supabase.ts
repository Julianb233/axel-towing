import { createClient } from "@supabase/supabase-js";

// Support both naming conventions for Supabase env vars
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

function getClient() {
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseKey);
}

export interface DispatchRecord {
  reference_id: string;
  request_type: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  property_name: string;
  property_address: string;
  urgent: boolean;
  request_data: Record<string, unknown>;
  status: "pending" | "dispatched" | "completed" | "cancelled";
}

/**
 * Store a dispatch request in the database for tracking.
 */
export async function storeDispatchRequest(
  record: DispatchRecord,
): Promise<{ success: boolean; error?: string }> {
  const supabase = getClient();
  if (!supabase) {
    console.warn("Supabase not configured — skipping DB storage");
    return { success: false, error: "Supabase not configured" };
  }

  const { error } = await supabase.from("dispatch_requests").insert({
    reference_id: record.reference_id,
    request_type: record.request_type,
    contact_name: record.contact_name,
    contact_phone: record.contact_phone,
    contact_email: record.contact_email,
    property_name: record.property_name,
    property_address: record.property_address,
    urgent: record.urgent,
    request_data: record.request_data,
    status: record.status,
    created_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Supabase insert error:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
}
