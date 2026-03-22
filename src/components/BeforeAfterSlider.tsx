"use client";
import React, { useState, useRef, useEffect } from "react";

const cases = [
  {
    title: "Premium Ceramic Veneers",
    desc: "Complete smile makeover correcting deep discoloration and architectural misalignments.",
    before: "/g1.png",
    after: "/g2.png",
  },
  {
    title: "Advanced Laser Whitening",
    desc: "Pain-free deep stain removal lifting the shade of teeth by up to 6 levels in a single session.",
    before: "/before.png",
    after: "/after.png",
  },
  {
    title: "Full Mouth Rehabilitation",
    desc: "Extensive restorative implant work restoring proper bite alignment and aesthetic symmetry.",
    before: "/i1.png",
    after: "/i2.png",
  }
];

function SingleSlider({ data }: { data: typeof cases[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });

      const disableDrag = () => setIsDragging(false);
      window.addEventListener("mouseup", disableDrag);
      window.addEventListener("touchend", disableDrag);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("mouseup", disableDrag);
        window.removeEventListener("touchend", disableDrag);
      };
    }
  }, [isDragging]);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  return (
    <div style={styles.caseWrapper}>
      <div style={styles.textContainer}>
        <h3 style={styles.caseTitle}>{data.title}</h3>
        <p style={styles.caseDesc}>{data.desc}</p>
      </div>

      <div
        ref={containerRef}
        style={styles.container}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* AFTER Image (Background) */}
        <div style={styles.imageWrapper}>
          <img src={data.after} alt="After Treatment" style={styles.image} draggable={false} />
          <div style={{ ...styles.label, right: "1rem" }}>After</div>
        </div>

        {/* BEFORE Image (Clipped Foreground) */}
        <div style={{ ...styles.imageWrapper, clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, zIndex: 1 }}>
          <img src={data.before} alt="Before Treatment" style={styles.image} draggable={false} />
          <div style={{ ...styles.label, left: "1rem", backgroundColor: "rgba(100,116,139,0.85)" }}>Before</div>
        </div>

        {/* Slider Interactive Handle */}
        <div style={{ ...styles.sliderHandle, left: `${sliderPosition}%` }}>
          <div style={styles.sliderLine}></div>
          <div style={styles.sliderIcon}>⟷</div>
        </div>
      </div>
    </div>
  );
}
type Props = {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  desc?: string;
};
export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  desc,
}: Props) {

  // If images are passed → show single slider
  if (beforeImage && afterImage) {
    return (
      <SingleSlider
       data={{
  title: title || "",
  desc: desc || "",
  before: beforeImage,
  after: afterImage,
}}
      />
    );
  }

  // Default → show all cases
  return (
    <div style={styles.gridContainer}>
      {cases.map((c, i) => (
        <SingleSlider key={i} data={c} />
      ))}
    </div>
  );
}

const styles = {
  gridContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-16)",
    width: "100%",
  },
  caseWrapper: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    backgroundColor: "var(--color-white)",
    padding: "var(--spacing-8)",
    borderRadius: "24px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
    border: "1px solid rgba(0,0,0,0.02)",
  },
  textContainer: {
    textAlign: "left" as const,
    paddingLeft: "0.5rem",
  },
  caseTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "var(--color-dark)",
    marginBottom: "0.5rem",
  },
  caseDesc: {
    fontSize: "1rem",
    color: "#475569",
    lineHeight: 1.6,
  },
  container: {
    position: "relative" as const,
    width: "100%",
    height: "400px", // Increased height for better visibility
    overflow: "hidden",
    borderRadius: "16px",
    cursor: "ew-resize",
    userSelect: "none" as const,
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },
  imageWrapper: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
  },
  label: {
    position: "absolute" as const,
    top: "1rem",
    padding: "0.4rem 1rem",
    backgroundColor: "rgba(14, 165, 233, 0.9)", // Brand primary
    color: "var(--color-white)",
    borderRadius: "100px",
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    pointerEvents: "none" as const,
  },
  sliderHandle: {
    position: "absolute" as const,
    top: 0,
    bottom: 0,
    width: "40px",
    transform: "translateX(-50%)",
    zIndex: 10,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none" as const, // Parent container handles drag events
  },
  sliderLine: {
    position: "absolute" as const,
    top: 0,
    bottom: 0,
    width: "4px",
    backgroundColor: "var(--color-white)",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
  sliderIcon: {
    width: "48px",
    height: "48px",
    backgroundColor: "var(--color-white)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    color: "var(--color-primary)",
    fontWeight: "bold",
    fontSize: "1.2rem",
    zIndex: 11, // Above the line
  }
};
