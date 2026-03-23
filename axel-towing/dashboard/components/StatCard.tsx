"use client";

import { useEffect, useState, useRef } from "react";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  color?: "blue" | "emerald" | "amber" | "red" | "gold" | "white";
  description?: string;
  delay?: number;
}

export default function StatCard({ label, value, suffix = "", prefix = "", color = "blue", description, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!visible) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, value]);

  const colorStyles: Record<string, string> = {
    blue: "#1e6bb8",
    emerald: "#16a34a",
    amber: "#d97706",
    red: "#dc3a30",
    gold: "#d4af37",
    white: "#1a202c",
  };

  return (
    <div
      ref={ref}
      className={`stat-card transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ "--accent-color": colorStyles[color] } as React.CSSProperties}
    >
      <p className="text-xs uppercase tracking-wider font-semibold mb-2 text-gray-500">{label}</p>
      <p className="text-3xl font-bold font-display" style={{ color: colorStyles[color] }}>
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      {description && <p className="text-xs mt-2 text-gray-400">{description}</p>}
    </div>
  );
}
