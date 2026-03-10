"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Add js-loaded class so animations only apply when JS is active.
    // Without this class, .reveal elements remain fully visible (progressive enhancement).
    document.body.classList.add("js-loaded");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      document.body.classList.remove("js-loaded");
    };
  }, []);

  return null;
}
