"use client";

import { useState, useCallback } from "react";
import ScrollReveal from "../../components/ScrollReveal";
import PageHeader from "../../components/PageHeader";

const TEMPLATES = [
  { label: "Tow Truck at Night", prompt: "A professional flatbed tow truck on a Phoenix city street at night, dramatic lighting with streetlamps and city glow, clean truck with reflective markings" },
  { label: "Fleet Lineup", prompt: "A lineup of professional tow trucks parked in a row at a clean impound facility, early morning golden hour light, fleet branding visible" },
  { label: "Professional Driver", prompt: "A professional tow truck driver in uniform standing confidently next to a flatbed tow truck, friendly and approachable, desert Southwest backdrop" },
  { label: "Property Patrol", prompt: "A tow truck patrolling a well-lit apartment complex parking lot at dusk, professional parking enforcement, clear signage visible" },
  { label: "Impound Lot", prompt: "A clean, well-organized impound lot facility with security fencing, professional office building, vehicles neatly arranged, clear Arizona sky" },
  { label: "Customer Service", prompt: "A tow truck operator helping a stranded motorist on an Arizona highway, professional and courteous, roadside assistance scene" },
];

const ASPECT_RATIOS = [
  { value: "16:9" as const, label: "16:9" },
  { value: "3:2" as const, label: "3:2" },
  { value: "1:1" as const, label: "1:1" },
];

type AspectRatio = "16:9" | "3:2" | "1:1";

interface GeneratedImage {
  dataUrl: string;
  mimeType: string;
  prompt: string;
  aspectRatio: string;
}

export default function ImagesPage() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("16:9");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<GeneratedImage | null>(null);

  const generate = useCallback(async (customPrompt?: string) => {
    const finalPrompt = customPrompt || prompt;
    if (!finalPrompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/images/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalPrompt, aspectRatio }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to generate image");
        return;
      }

      setImage({
        dataUrl: data.image.dataUrl,
        mimeType: data.image.mimeType,
        prompt: data.prompt,
        aspectRatio: data.aspectRatio,
      });
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [prompt, aspectRatio]);

  const handleTemplateClick = (templatePrompt: string) => {
    setPrompt(templatePrompt);
    generate(templatePrompt);
  };

  const handleDownload = () => {
    if (!image) return;
    const ext = image.mimeType.split("/")[1] || "png";
    const a = document.createElement("a");
    a.href = image.dataUrl;
    a.download = `axle-towing-ai-${Date.now()}.${ext}`;
    a.click();
  };

  return (
    <>
      <PageHeader
        badge="Nano Banana"
        title="AI Image Generator"
        subtitle="Generate professional towing & fleet images powered by Google's Nano Banana AI"
      />

      {/* Quick Templates */}
      <ScrollReveal>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Quick Templates
          </h2>
          <div className="flex flex-wrap gap-2">
            {TEMPLATES.map((t) => (
              <button
                key={t.label}
                onClick={() => handleTemplateClick(t.prompt)}
                disabled={loading}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 bg-gray-50 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Prompt Input */}
      <ScrollReveal delay={100}>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Custom Prompt
          </h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate... e.g., 'A flatbed tow truck loading a sedan in a parking garage, professional lighting'"
            rows={3}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
            {/* Aspect Ratio Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aspect Ratio
              </span>
              <div className="flex rounded-lg border border-gray-200 overflow-hidden">
                {ASPECT_RATIOS.map((ar) => (
                  <button
                    key={ar.value}
                    onClick={() => setAspectRatio(ar.value)}
                    className={`px-3 py-1.5 text-xs font-medium transition-all ${
                      aspectRatio === ar.value
                        ? "bg-[#1E6BB8] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {ar.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={() => generate()}
              disabled={loading || !prompt.trim()}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1E6BB8] text-white text-sm font-semibold hover:bg-[#1a5ea3] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate Image
                </>
              )}
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Error Display */}
      {error && (
        <ScrollReveal>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        </ScrollReveal>
      )}

      {/* Loading State */}
      {loading && (
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 mb-6 flex flex-col items-center justify-center">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
              <div className="absolute inset-0 rounded-full border-4 border-[#1E6BB8] border-t-transparent animate-spin" />
            </div>
            <p className="text-sm font-medium text-gray-600">Generating your image with Nano Banana AI...</p>
            <p className="text-xs text-gray-400 mt-1">This usually takes 10-30 seconds</p>
          </div>
        </ScrollReveal>
      )}

      {/* Generated Image Display */}
      {image && !loading && (
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.dataUrl}
                alt={image.prompt}
                className="w-full object-contain max-h-[600px] bg-gray-50"
              />
            </div>

            <div className="p-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                    Prompt Used
                  </p>
                  <p className="text-sm text-gray-600 truncate">{image.prompt}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Aspect Ratio: {image.aspectRatio} | Format: {image.mimeType}
                  </p>
                </div>

                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Empty State */}
      {!image && !loading && !error && (
        <ScrollReveal delay={200}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 mb-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#1E6BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">No image generated yet</h3>
            <p className="text-sm text-gray-500 max-w-md">
              Choose a quick template above or write a custom prompt to generate professional towing and fleet imagery.
            </p>
          </div>
        </ScrollReveal>
      )}
    </>
  );
}
