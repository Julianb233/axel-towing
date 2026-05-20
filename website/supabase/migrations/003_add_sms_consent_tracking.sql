-- SMS consent tracking for A2P 10DLC TCPA compliance
-- AI-7457: Required before any SMS campaigns launch

-- Add SMS consent fields to dispatch_requests (which stores lead form submissions)
ALTER TABLE dispatch_requests
  ADD COLUMN IF NOT EXISTS sms_consent BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS sms_consent_source TEXT CHECK (
    sms_consent_source IS NULL OR
    sms_consent_source IN ('web_form', 'verbal', 'event', 'sms_reply')
  ),
  ADD COLUMN IF NOT EXISTS sms_consent_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS sms_consent_ip TEXT;

-- Standalone SMS consent log for audit trail (TCPA requires proof of consent)
CREATE TABLE IF NOT EXISTS sms_consent_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_phone TEXT NOT NULL,
  contact_name TEXT,
  contact_email TEXT,
  consent_given BOOLEAN NOT NULL,
  consent_source TEXT NOT NULL CHECK (
    consent_source IN ('web_form', 'verbal', 'event', 'sms_reply', 'opt_out')
  ),
  consent_text TEXT, -- the exact disclosure language shown/read
  ip_address TEXT,
  user_agent TEXT,
  form_url TEXT,
  agent_name TEXT, -- who collected verbal consent
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for quick lookups by phone number
CREATE INDEX IF NOT EXISTS idx_sms_consent_phone ON sms_consent_log (contact_phone);
CREATE INDEX IF NOT EXISTS idx_sms_consent_created ON sms_consent_log (created_at DESC);

-- View: current consent status per phone number (latest record wins)
CREATE OR REPLACE VIEW sms_consent_status AS
SELECT DISTINCT ON (contact_phone)
  contact_phone,
  contact_name,
  consent_given,
  consent_source,
  created_at as consent_date
FROM sms_consent_log
ORDER BY contact_phone, created_at DESC;
