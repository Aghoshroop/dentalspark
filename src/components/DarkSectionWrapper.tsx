"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function DarkSectionWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgColor, setBgColor] = useState("rgb(244, 243, 237)"); // start beige

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress of the ENTIRE wrapper moving through the viewport
      // rect.top is the top of SmileReel
      // rect.bottom is the bottom of Testimonials
      
      // 1. Fade TO dark as the wrapper enters the screen
      const startFadeIn = windowHeight * 0.5; // Starts fading to dark when top is halfway up
      const endFadeIn = 0; // Fully dark when top reaches the top of the screen
      
      // 2. Fade BACK to beige as the wrapper leaves the screen
      // Wait, Testimonials is the bottom part. We want it to fade back to beige
      // as Testimonials scrolls up. Let's trigger the fade back when the bottom
      // of the wrapper is approaching the bottom of the viewport.
      const startFadeOut = windowHeight + 400; // Start fading back when bottom is just coming up
      const endFadeOut = windowHeight; // Fully beige when bottom is at the bottom of the screen
      
      let r = 244, g = 243, b = 237; // Beige

      if (rect.top > startFadeIn) {
        // Before entering, it's beige
        r = 244; g = 243; b = 237;
      } else if (rect.top <= startFadeIn && rect.top > endFadeIn) {
        // Fading to dark
        const progress = 1 - (rect.top - endFadeIn) / (startFadeIn - endFadeIn);
        r = Math.round(244 + (18 - 244) * progress);
        g = Math.round(243 + (23 - 243) * progress);
        b = Math.round(237 + (26 - 237) * progress);
      } else if (rect.top <= endFadeIn && rect.bottom > startFadeOut) {
        // Fully dark in the middle
        r = 18; g = 23; b = 26;
      } else if (rect.bottom <= startFadeOut && rect.bottom > endFadeOut) {
        // Fading back to beige
        const progress = 1 - (rect.bottom - endFadeOut) / (startFadeOut - endFadeOut);
        r = Math.round(18 + (244 - 18) * progress);
        g = Math.round(23 + (243 - 23) * progress);
        b = Math.round(26 + (237 - 26) * progress);
      } else {
        // After leaving, it's beige
        r = 244; g = 243; b = 237;
      }
      
      setBgColor(`rgb(${r}, ${g}, ${b})`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        backgroundColor: bgColor,
        position: "relative",
        zIndex: 2
      }}
    >
      {/* We pass the bgColor as a CSS variable so children can invert text colors based on it if needed,
          but we will handle it simpler. */}
      {children}
    </div>
  );
}
