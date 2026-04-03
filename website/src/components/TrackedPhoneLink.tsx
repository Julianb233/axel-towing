"use client";

import { trackPhoneClick } from "@/lib/analytics";
import { COMPANY } from "@/lib/constants";

interface TrackedPhoneLinkProps {
  /** Override the phone number (defaults to COMPANY.phone). */
  phone?: string;
  /** CSS classes passed through to the anchor. */
  className?: string;
  /** Content inside the link. If omitted, renders the formatted phone number. */
  children?: React.ReactNode;
}

/**
 * An `<a href="tel:...">` link that fires a GA4 phone_click event.
 * Drop-in replacement for plain phone links across the site.
 */
export default function TrackedPhoneLink({
  phone,
  className,
  children,
}: TrackedPhoneLinkProps) {
  const number = phone ?? COMPANY.phone;
  const digits = number.replace(/[^+\d]/g, "");

  return (
    <a
      href={`tel:${digits}`}
      className={className}
      onClick={() => trackPhoneClick(number)}
    >
      {children ?? number}
    </a>
  );
}
