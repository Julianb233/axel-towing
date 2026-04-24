import Link from "next/link";

interface ReviewBadgeProps {
  /** Display as inline block (default) or floating fixed position */
  variant?: "inline" | "floating";
  /** Custom class names */
  className?: string;
}

export default function ReviewBadge({
  variant = "inline",
  className = "",
}: ReviewBadgeProps) {
  const isFloating = variant === "floating";

  return (
    <Link
      href="/reviews"
      className={`
        group flex items-center gap-3 rounded-2xl transition-all
        ${
          isFloating
            ? "fixed bottom-24 left-4 z-40 glass-card-white px-4 py-3 shadow-lg hover:shadow-xl"
            : "glass-card-white px-5 py-3 shadow-md hover:shadow-lg inline-flex"
        }
        ${className}
      `}
    >
      {/* Google icon */}
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
          fill="#4285F4"
        />
      </svg>

      {/* Label */}
      <span className="text-sm font-semibold text-blue-900 font-heading whitespace-nowrap">
        Read our Google reviews
      </span>

      {/* Arrow */}
      <svg
        className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}
