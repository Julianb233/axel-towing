-- Allow 'lead' request type in dispatch_requests table
ALTER TABLE dispatch_requests DROP CONSTRAINT IF EXISTS dispatch_requests_request_type_check;
ALTER TABLE dispatch_requests ADD CONSTRAINT dispatch_requests_request_type_check
  CHECK (request_type IN ('tow-request', 'stickering', 'patrol-request', 'report', 'question', 'lead'));

-- Outreach activities table for tracking social media outreach campaigns
CREATE TABLE IF NOT EXISTS outreach_activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_name TEXT NOT NULL,
  company TEXT NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('linkedin', 'instagram', 'facebook')),
  template_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'sent'
    CHECK (status IN ('sent', 'replied', 'interested', 'not_interested', 'converted', 'no_response')),
  notes TEXT,
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for outreach queries
CREATE INDEX idx_outreach_activities_status ON outreach_activities (status);
CREATE INDEX idx_outreach_activities_platform ON outreach_activities (platform);
CREATE INDEX idx_outreach_activities_sent ON outreach_activities (sent_at DESC);

-- Auto-update updated_at for outreach_activities
CREATE OR REPLACE FUNCTION update_outreach_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER outreach_activities_updated_at
  BEFORE UPDATE ON outreach_activities
  FOR EACH ROW
  EXECUTE FUNCTION update_outreach_updated_at();
