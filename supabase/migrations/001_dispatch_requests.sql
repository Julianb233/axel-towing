-- Dispatch requests table for tracking tow/service requests
CREATE TABLE IF NOT EXISTS dispatch_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reference_id TEXT NOT NULL UNIQUE,
  request_type TEXT NOT NULL CHECK (request_type IN ('tow-request', 'stickering', 'patrol-request', 'report', 'question')),
  contact_name TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT,
  property_name TEXT NOT NULL,
  property_address TEXT,
  urgent BOOLEAN DEFAULT FALSE,
  request_data JSONB,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'dispatched', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for lookups by reference ID and status
CREATE INDEX idx_dispatch_requests_reference ON dispatch_requests (reference_id);
CREATE INDEX idx_dispatch_requests_status ON dispatch_requests (status);
CREATE INDEX idx_dispatch_requests_created ON dispatch_requests (created_at DESC);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_dispatch_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER dispatch_requests_updated_at
  BEFORE UPDATE ON dispatch_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_dispatch_updated_at();
