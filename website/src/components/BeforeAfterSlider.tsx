'use client';

import { useRef, useState, useCallback, useEffect, type ReactNode } from 'react';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeContent: ReactNode;
  afterContent: ReactNode;
}

export default function BeforeAfterSlider({
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforeContent,
  afterContent,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = useCallback(() => setIsDragging(true), []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      updatePosition(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  const handleTouchStart = useCallback(() => setIsDragging(true), []);

  useEffect(() => {
    if (!isDragging) return;

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX);
      }
    };
    const handleTouchEnd = () => setIsDragging(false);

    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden select-none"
      style={{ minHeight: '280px' }}
    >
      {/* After side (full width behind) */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-block bg-green-600 text-white text-xs font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full">
            {afterLabel}
          </span>
        </div>
        <div className="p-6 pt-12 h-full">{afterContent}</div>
      </div>

      {/* Before side (clipped by position) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-red-500 text-white text-xs font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full">
            {beforeLabel}
          </span>
        </div>
        <div className="p-6 pt-12 h-full">{beforeContent}</div>
      </div>

      {/* Divider handle */}
      <div
        className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-0.5 h-full bg-white/80 shadow-lg" />
        <button
          type="button"
          aria-label="Drag to compare before and after"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className={`absolute w-10 h-10 bg-white rounded-full shadow-lg border-2 border-primary flex items-center justify-center cursor-grab transition-transform ${
            isDragging ? 'scale-110 cursor-grabbing' : 'hover:scale-105'
          }`}
        >
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
