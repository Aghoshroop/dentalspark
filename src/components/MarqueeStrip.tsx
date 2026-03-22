"use client";
import React from "react";

export default function MarqueeStrip() {
  const phrases = [
    "Transforming Smiles", 
    "Advanced Dental Care", 
    "Painless Treatments", 
    "State-of-the-Art Technology", 
    "World-Class Specialists"
  ];

  // We repeat the phrases multiple times to ensure a seamless infinite loop 
  // without whitespace gaps while scrolling.
  const allItems = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <div style={styles.marqueeContainer}>
      <style>{`
        @keyframes infinite-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: infinite-slide 30s linear infinite;
        }
      `}</style>
      <div className="marquee-track">
        {allItems.map((text, i) => (
          <React.Fragment key={i}>
            <span style={styles.text}>{text}</span>
            <span style={styles.dot}>•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const styles = {
  marqueeContainer: {
    width: "100%",
    backgroundColor: "var(--color-primary)",
    overflow: "hidden",
    padding: "0.8rem 0",
    position: "relative" as const,
    display: "flex",
    boxShadow: "0 4px 15px rgba(2, 132, 199, 0.3)", // nice glow
    zIndex: 10,
    transform: "rotate(-2deg) scale(1.05)",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  text: {
    color: "var(--color-white)",
    fontSize: "1.1rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "2px",
    whiteSpace: "nowrap" as const,
    padding: "0 1.5rem",
  },
  dot: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "1.2rem",
  }
};
