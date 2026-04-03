#!/usr/bin/env bash
# Step 4: Create draft auto-reply templates
# These are saved as drafts that can be used with Gmail's "Templates" feature
# or sent manually. They serve as starting points for common responses.
#
# Usage: ./04-auto-reply-templates.sh <user-email>
# Example: ./04-auto-reply-templates.sh elliott@axletowing.com

set -euo pipefail
source "$(dirname "$0")/config.sh"

USER_EMAIL="${1:-$ADMIN_EMAIL}"

echo "Creating auto-reply draft templates for $USER_EMAIL..."

# Template 1: General inquiry response
echo "  Creating: General Inquiry Response"
gws gmail users drafts create \
  --params "{\"userId\": \"$USER_EMAIL\"}" \
  --json "{
    \"message\": {
      \"raw\": \"$(echo -n 'Subject: RE: Your Inquiry - Axle Towing & Impound
Content-Type: text/html; charset=utf-8

<html><body>
<p>Thank you for reaching out to Axle Towing &amp; Impound.</p>

<p>We have received your message and a member of our team will respond within 1 business day.</p>

<p><strong>Need immediate assistance?</strong></p>
<ul>
<li>24/7 Dispatch: <a href=\"tel:4802885526\">(480) 288-5526</a></li>
<li>Office Hours: Monday-Friday, 9:00 AM - 5:00 PM</li>
</ul>

<p>Best regards,<br>
Axle Towing &amp; Impound<br>
Serving the Greater Phoenix Metro Area<br>
<a href=\"https://axletowing.com\">axletowing.com</a></p>
</body></html>' | base64 -w 0)\"
    }
  }" 2>/dev/null && echo "    OK" || echo "    Error"

# Template 2: Vehicle release inquiry
echo "  Creating: Vehicle Release Inquiry"
gws gmail users drafts create \
  --params "{\"userId\": \"$USER_EMAIL\"}" \
  --json "{
    \"message\": {
      \"raw\": \"$(echo -n 'Subject: RE: Vehicle Release Information - Axle Towing
Content-Type: text/html; charset=utf-8

<html><body>
<p>Thank you for contacting us about vehicle release.</p>

<p><strong>To retrieve your vehicle, please bring:</strong></p>
<ol>
<li>Valid photo ID (driver'\''s license or state ID)</li>
<li>Vehicle registration or title</li>
<li>Payment (cash, credit/debit card accepted)</li>
</ol>

<p><strong>Vehicle Release Hours:</strong><br>
Monday - Friday: 9:00 AM - 5:00 PM</p>

<p><strong>Location:</strong><br>
Please call for our current impound lot address: <a href=\"tel:4802885526\">(480) 288-5526</a></p>

<p><strong>Important:</strong> Storage fees accrue daily. We recommend retrieving your vehicle as soon as possible to minimize charges.</p>

<p>If you have questions about your tow or charges, please call our office during business hours.</p>

<p>Axle Towing &amp; Impound<br>
<a href=\"tel:4802885526\">(480) 288-5526</a><br>
<a href=\"https://axletowing.com\">axletowing.com</a></p>
</body></html>' | base64 -w 0)\"
    }
  }" 2>/dev/null && echo "    OK" || echo "    Error"

# Template 3: Job application acknowledgment
echo "  Creating: Job Application Acknowledgment"
gws gmail users drafts create \
  --params "{\"userId\": \"$USER_EMAIL\"}" \
  --json "{
    \"message\": {
      \"raw\": \"$(echo -n 'Subject: RE: Your Application - Axle Towing & Impound
Content-Type: text/html; charset=utf-8

<html><body>
<p>Thank you for your interest in joining the Axle Towing &amp; Impound team!</p>

<p>We have received your application and will review it within 3-5 business days.</p>

<p><strong>What happens next:</strong></p>
<ol>
<li>Our team reviews your application</li>
<li>Qualified candidates will be contacted for a phone screening</li>
<li>Selected candidates will be invited for an in-person interview</li>
</ol>

<p>In the meantime, learn more about us at <a href=\"https://axletowing.com/careers\">axletowing.com/careers</a>.</p>

<p>Best regards,<br>
Axle Towing &amp; Impound<br>
Human Resources</p>
</body></html>' | base64 -w 0)\"
    }
  }" 2>/dev/null && echo "    OK" || echo "    Error"

# Template 4: HOA/Property Management inquiry
echo "  Creating: HOA/Property Management Inquiry"
gws gmail users drafts create \
  --params "{\"userId\": \"$USER_EMAIL\"}" \
  --json "{
    \"message\": {
      \"raw\": \"$(echo -n 'Subject: RE: Towing Services for Your Property - Axle Towing
Content-Type: text/html; charset=utf-8

<html><body>
<p>Thank you for your interest in our property towing enforcement services.</p>

<p>Axle Towing &amp; Impound provides comprehensive towing and impound services for:</p>
<ul>
<li>HOA communities</li>
<li>Apartment complexes</li>
<li>Commercial properties</li>
<li>Retail centers and parking lots</li>
</ul>

<p><strong>Our services include:</strong></p>
<ul>
<li>24/7/365 dispatch availability</li>
<li>Dedicated account management</li>
<li>Compliant signage consultation</li>
<li>Regular patrol options</li>
<li>Online portal access (TowBook)</li>
</ul>

<p>We would love to schedule a brief call to discuss your property'\''s specific needs. Are you available this week for a 15-minute consultation?</p>

<p>Best regards,<br>
Axle Towing &amp; Impound<br>
<a href=\"tel:4802885526\">(480) 288-5526</a><br>
<a href=\"https://axletowing.com\">axletowing.com</a></p>
</body></html>' | base64 -w 0)\"
    }
  }" 2>/dev/null && echo "    OK" || echo "    Error"

# Template 5: Dispatch acknowledgment (after-hours auto-response)
echo "  Creating: After-Hours Dispatch Response"
gws gmail users drafts create \
  --params "{\"userId\": \"$USER_EMAIL\"}" \
  --json "{
    \"message\": {
      \"raw\": \"$(echo -n 'Subject: RE: Dispatch Request Received - Axle Towing
Content-Type: text/html; charset=utf-8

<html><body>
<p>Your dispatch request has been received.</p>

<p><strong>For immediate towing needs, please call:</strong><br>
<a href=\"tel:4802885526\">(480) 288-5526</a></p>

<p>Our dispatch line is available <strong>24 hours a day, 7 days a week, 365 days a year</strong>.</p>

<p>If this is not urgent, a team member will follow up during office hours (Monday-Friday, 9 AM - 5 PM).</p>

<p>Axle Towing &amp; Impound<br>
Serving the Greater Phoenix Metro Area</p>
</body></html>' | base64 -w 0)\"
    }
  }" 2>/dev/null && echo "    OK" || echo "    Error"

echo ""
echo "Draft templates created for $USER_EMAIL"
echo ""
echo "To enable as Gmail templates:"
echo "1. Open Gmail -> Settings -> Advanced -> Templates -> Enable"
echo "2. Open each draft, click ... -> Templates -> Save draft as template"
echo "3. Name each template for easy identification"
echo ""
echo "For auto-responses, use Gmail filters with 'Send template' action"
echo "or set up vacation responder for after-hours via:"
echo "  gws gmail users settings updateVacation"
