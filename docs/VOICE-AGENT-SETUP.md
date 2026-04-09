# Voice Agent Setup — Axle Towing

AI voice agent for handling inbound towing calls and outbound sales calls to HOA/property managers.

---

## Architecture

```
Inbound call → Twilio → /api/voice/inbound  → IVR menu → Transfer to dispatcher
                                                         ↑ Press 1/2/3/0

Outbound call → Portal form → /api/voice/outbound → Twilio → calls recipient
                                                           → /api/voice/outbound/script (TwiML)
                                                           → /api/voice/outbound/callback (DTMF)

All calls → /api/voice/status (lifecycle events, logging)
```

---

## API Endpoints

| Method     | Path                           | Purpose                                    |
| ---------- | ------------------------------ | ------------------------------------------ |
| `POST`     | `/api/voice/inbound`           | Twilio webhook — serves IVR TwiML          |
| `POST`     | `/api/voice/outbound`          | Initiate outbound call via Twilio REST API |
| `GET/POST` | `/api/voice/outbound/script`   | TwiML script served to outbound calls      |
| `POST`     | `/api/voice/outbound/callback` | Handles DTMF responses from outbound calls |
| `POST`     | `/api/voice/status`            | Twilio status callback (lifecycle logging) |

---

## Environment Variables

Add these to your `.env.local` (and Railway / Vercel dashboard):

```bash
# Twilio credentials
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+14802885526        # Your Twilio number in E.164 format

# Call routing
DISPATCH_PHONE=480-288-5526            # Dispatcher phone (calls transferred here)

# App
NEXT_PUBLIC_BASE_URL=https://axletowing.com

# Optional
TWILIO_RECORD_CALLS=true               # Set to "true" to record all calls
```

---

## Twilio Console Setup

### 1. Get a Twilio Phone Number

1. Log in to [console.twilio.com](https://console.twilio.com)
2. Navigate to **Phone Numbers → Manage → Buy a number**
3. Search for Arizona (602 or 480 area code)
4. Purchase a number with **Voice** capability

### 2. Configure Inbound Webhook

1. Go to **Phone Numbers → Manage → Active Numbers**
2. Click your Axle Towing number
3. Under **Voice & Fax → A Call Comes In**, set:
   - **Webhook:** `https://axletowing.com/api/voice/inbound`
   - **HTTP Method:** `POST`
4. Save

### 3. Configure Status Callback (Optional — for analytics)

Under the same phone number configuration:

- **Call Status Changes:** `https://axletowing.com/api/voice/status`
- **HTTP Method:** `POST`

---

## Outbound Call Flow

The portal at `/portal/calls` provides a UI to trigger outbound calls.

Three call scripts are available:

### HOA Script

- Introduces Axle Towing's parking enforcement services
- DTMF 1 → queues for callback
- DTMF 9 → opt-out

### Property Manager Script

- Focuses on apartment/commercial towing services
- DTMF 1 → queues for callback
- DTMF 9 → opt-out

### General Outreach

- Generic introduction
- DTMF 1 → transfer / callback
- DTMF 9 → opt-out

---

## Inbound IVR Menu

When a call comes in to the Twilio number:

```
"Thank you for calling Axle Towing..."
  ├─ Press 1 → "Towing services" → Transfer to dispatcher
  ├─ Press 2 → "Roadside assistance" → Transfer to dispatcher
  ├─ Press 3 → "Billing / account questions" → Transfer to dispatcher
  ├─ Press 0 → "Speak with dispatcher" → Immediate transfer
  └─ No input → Auto-transfer to dispatcher after timeout
```

Voice: Amazon Polly "Joanna" (natural US English)

---

## Portal Dashboard

URL: `https://axletowing.com/portal/calls`

Features:

- Call log with direction, status, duration, context
- Summary stats (total, inbound, outbound, avg duration)
- Outbound call launcher with phone + name + script selector
- IVR reference card

To add real call data, connect Supabase:

- Uncomment the TODO in `/api/voice/status/route.ts`
- Add a `calls` table with columns: `call_sid`, `direction`, `from`, `to`, `status`, `duration`, `context`, `timestamp`

---

## Testing

### Test Inbound IVR locally

```bash
# Use ngrok to expose local dev server
npx ngrok http 3000

# Set Twilio webhook to your ngrok URL
# https://abc123.ngrok.io/api/voice/inbound

# Call your Twilio number and follow the IVR
```

### Test Outbound API

```bash
curl -X POST http://localhost:3000/api/voice/outbound \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+16025550100",
    "contactName": "Jane Smith",
    "context": "hoa"
  }'
```

Expected response:

```json
{
  "success": true,
  "callSid": "CAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "to": "+16025550100",
  "status": "queued"
}
```

### Verify TwiML script renders correctly

```bash
curl "http://localhost:3000/api/voice/outbound/script?context=hoa&name=Jane"
```

---

## Compliance Notes

- All calls must comply with the **TCPA** (Telephone Consumer Protection Act)
- Outbound calls require prior express written consent for auto-dialled or pre-recorded messages
- Always honour opt-out requests (DTMF 9) immediately
- Arizona follows federal TCPA rules — no additional state-specific restrictions beyond TCPA
- Maintain a do-not-call suppression list (integrate with `DISPATCH_PHONE` flow or CRM)

---

## Future Enhancements

- [ ] Supabase `calls` table for persistent call history
- [ ] Whisper AI / Deepgram transcription for call summaries
- [ ] CRM integration (GoHighLevel) — auto-create contact on inbound call
- [ ] Voicemail detection for outbound — skip to callback request
- [ ] SMS follow-up after missed calls
- [ ] Real-time call monitoring in dashboard via Twilio Sync
- [ ] Bulk CSV upload for outbound call campaigns
