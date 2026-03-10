'use client';

import { useEffect } from 'react';

export default function ScrollAnimator() {
  useEffect(() => {
    // Add js-loaded class so animations only apply when JS is active.
    document.body.classList.add('js-loaded');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.body.classList.remove('js-loaded');
    };
  }, []);

  return null;
}
