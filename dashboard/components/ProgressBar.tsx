"use client";

import { useEffect, useState, useRef } from "react";

interface ProgressBarProps {
  percentage: number;
  label?: string;
  color?: "blue" | "emerald" | "amber" | "red" | "gold";
  showPercentage?: boolean;
  height?: string;
}

export default function ProgressBar({ percentage, label, color = "blue", showPercentage = true, height = "h-2" }: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage]);

  const colorMap: Record<string, string> = {
    blue: "#1e6bb8",
    emerald: "#16a34a",
    amber: "#d97706",
    red: "#dc3a30",
    gold: "#d4af37",
  };

  return (
    <div ref={ref}>
      {label && (
        <div className="flex justify-between mb-1.5">
          <span className="text-sm text-gray-600">{label}</span>
          {showPercentage && <span className="text-sm text-gray-400">{percentage}%</span>}
        </div>
      )}
      <div className={`${height} rounded-full overflow-hidden bg-gray-100`}>
        <div
          className={`${height} rounded-full transition-all duration-[1500ms] ease-out progress-shine`}
          style={{ width: `${width}%`, background: colorMap[color] }}
        />
      </div>
    </div>
  );
}
