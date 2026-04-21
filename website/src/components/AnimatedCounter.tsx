"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
  label,
}: AnimatedCounterProps) {
  // Start mounted state false. During SSR and the very first client render
  // we render the final `end` value (no "0+" flash, no SEO issue).
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(end);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mark mounted on the client so we can begin animating from 0 -> end.
  useEffect(() => {
    setMounted(true);
    setCount(0);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [mounted, started]);

  useEffect(() => {
    if (!started) return;

    let rafId = 0;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        // Snap to the exact end value to avoid floor-rounding short by one.
        setCount(end);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [started, end, duration]);

  // Before mount: render the target value directly (SSR + first paint)
  // After mount: render the animating count
  const displayed = mounted ? count : end;

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">
        {prefix}{displayed}{suffix}
      </div>
      <div className="text-sm text-blue-200 uppercase tracking-wider font-heading">
        {label}
      </div>
    </div>
  );
}
