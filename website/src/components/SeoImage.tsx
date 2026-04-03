"use client";

import Image, { ImageProps } from "next/image";
import { IMAGE_SEO_BY_ORIGINAL, SeoImageEntry } from "@/lib/data/image-seo-manifest";

interface SeoImageProps extends Omit<ImageProps, "src" | "alt"> {
  /** Original image path (e.g. "/images/hero-tow-truck.jpg") — used for lookup */
  src: string;
  /** Override auto-generated alt text */
  alt?: string;
  /** Show the structured caption below the image */
  showCaption?: boolean;
  /** Use the thumbnail variant */
  thumbnail?: boolean;
  /** Prefer optimized WebP when available, fallback to original */
  preferOptimized?: boolean;
  /** Additional className for the figure wrapper */
  wrapperClassName?: string;
}

/**
 * SEO-optimized image component for Axle Towing.
 *
 * Automatically looks up the SEO manifest for the given `src` and:
 * - Uses the optimized WebP version when available
 * - Applies the SEO alt text
 * - Optionally shows the structured caption
 * - Falls back to the original image if no manifest entry exists
 */
export default function SeoImage({
  src,
  alt,
  showCaption = false,
  thumbnail = false,
  preferOptimized = true,
  wrapperClassName,
  ...rest
}: SeoImageProps) {
  const entry: SeoImageEntry | undefined = IMAGE_SEO_BY_ORIGINAL[src];

  // Determine which image source to use
  let resolvedSrc = src;
  if (entry && preferOptimized) {
    resolvedSrc = thumbnail ? entry.thumbnail : entry.optimized;
  }

  // Determine alt text
  const resolvedAlt = alt || entry?.alt || "";

  // Determine dimensions (for non-fill images)
  const hasFill = rest.fill;
  const dimensionProps: Partial<Pick<ImageProps, "width" | "height">> = {};
  if (!hasFill && entry) {
    if (thumbnail) {
      dimensionProps.width = entry.thumbWidth;
      dimensionProps.height = entry.thumbHeight;
    } else {
      dimensionProps.width = entry.width;
      dimensionProps.height = entry.height;
    }
  }

  const imageElement = (
    <Image
      src={resolvedSrc}
      alt={resolvedAlt}
      {...dimensionProps}
      {...rest}
    />
  );

  if (showCaption && entry?.caption) {
    return (
      <figure className={wrapperClassName}>
        {imageElement}
        <figcaption className="text-sm text-gray-500 mt-2 leading-relaxed">
          {entry.caption}
        </figcaption>
      </figure>
    );
  }

  return imageElement;
}
