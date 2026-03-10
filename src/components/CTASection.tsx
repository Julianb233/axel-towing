import Link from "next/link";
import { COMPANY } from "@/lib/constants";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  dark?: boolean;
}

export default function CTASection({
  headline = "Get Started Today — At No Cost to You",
  subtext = "Our private property towing services are completely free for property owners and managers. Let us handle your parking problems.",
  dark = false,
}: CTASectionProps) {
  return (
    <section className={`relative py-20 ${dark ? "bg-gray-900" : "bg-gray-50"}`}>
      {dark && (
        <>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        </>
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-5 ${dark ? "text-white" : ""}`} style={dark ? undefined : { color: '#1a202c' }}>
          {headline}
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${dark ? "text-gray-300" : "text-gray-700"}`}>
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${COMPANY.phone}`} className="btn-primary">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className={dark ? "btn-secondary" : "btn-cta"}>
            Request Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
