"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function DarkTransitionWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // We start fading when the top of this wrapper reaches 70% of the viewport height
      // and finish fading when it reaches 20% of the viewport height.
      const startFade = windowHeight * 0.7;
      const endFade = windowHeight * 0.1;
      
      let progress = 0;
      if (rect.top <= startFade) {
        progress = 1 - (rect.top - endFade) / (startFade - endFade);
      }
      
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interpolate between beige (#f4f3ed) and dark (#12171a)
  const r = Math.round(244 + (18 - 244) * scrollProgress);
  const g = Math.round(243 + (23 - 243) * scrollProgress);
  const b = Math.round(237 + (26 - 237) * scrollProgress);
  const dynamicBgColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div 
      ref={containerRef}
      style={{
        position: "relative",
        zIndex: 2,
        backgroundColor: dynamicBgColor,
        transition: "background-color 0.1s ease"
      }}
    >
      {/* We pass scrollProgress down as a CSS variable in case children need it */}
      <div style={{ '--fade-progress': scrollProgress } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}
