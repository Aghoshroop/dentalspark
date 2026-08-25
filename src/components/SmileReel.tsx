"use client";

import React, { useState, useRef, useEffect } from 'react';

const cases = [
  { id: 1, before: "/g1.png", after: "/g2.png", title: "The smile she kept putting off", desc: "For years she wanted to fix her smile, and each time she came close she backed out. We rebuilt both arches with All-on-4. Now she is happier than she has been in a long time, and only wishes she had done it sooner." },
  { id: 2, before: "/g3.png", after: "/g4.png", title: "Restoring confidence", desc: "Severe bone loss made traditional implants difficult. We used advanced grafting techniques to secure a beautiful, permanent set." },
  { id: 3, before: "/g5.png", after: "/g6.png", title: "A flawless transition", desc: "Patient required full extraction. Delivered a temporary prosthesis same-day, and final zirconia bridges 3 months later." },
  { id: 4, before: "/before.png", after: "/after.png", title: "Precision color matching", desc: "Single tooth implant in the aesthetic zone. Custom shading ensures the crown is indistinguishable from natural teeth." },
  { id: 5, before: "/i1.png", after: "/i2.png", title: "A new lease on life", desc: "Years of neglect reversed in one surgical visit. The patient can now eat steak and smile without hesitation." },
  { id: 6, before: "/g1.png", after: "/g4.png", title: "Complex bite restoration", desc: "Corrected severe underbite and restored missing molars to bring back full chewing function and facial symmetry." },
  { id: 7, before: "/g5.png", after: "/after.png", title: "The final touch", desc: "Veneers and a minor gum lift created this perfectly balanced, radiant smile." },
];

export default function SmileReel() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const activeCase = cases[activeCaseIdx];

  // Slider Logic
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

  return (
    <section 
      ref={sectionRef} 
      className="smile-reel-section" 
      style={{
        ...styles.section,
        backgroundColor: "transparent"
      }}
    >
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.eyebrow}>Real patients, real results</span>
          <h2 
            className="dynamic-heading" 
            style={{
              ...styles.heading,
              color: "#ffffff"
            }}
          >
            Every smile has a reel.
          </h2>
        </div>

        <div style={styles.sliderMainWrapper}>
          {/* Main Slider */}
          <div 
            ref={containerRef}
            className="sr-slider-container"
            style={styles.sliderContainer}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* AFTER Image (Background) */}
            <div style={styles.imageWrapper}>
              <img src={activeCase.after} alt="After Treatment" style={styles.image} draggable={false} />
            </div>

            {/* BEFORE Image (Clipped Foreground) */}
            <div style={{ ...styles.imageWrapper, clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, zIndex: 1 }}>
              <img src={activeCase.before} alt="Before Treatment" style={styles.image} draggable={false} />
            </div>

            {/* Slider Handle */}
            <div style={{ ...styles.sliderHandle, left: `${sliderPosition}%` }}>
              <div style={styles.sliderLine}></div>
              <div style={styles.sliderIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>

            {/* Internal Overlay Elements */}
            <div style={styles.overlayContainer}>
              <div style={styles.overlayLeft}>
                <div style={styles.tag}>Upper and lower All-on-4</div>
                
                <div style={styles.overlayTextContent}>
                  <h3 style={styles.overlayTitle}>{activeCase.title}</h3>
                  <p style={styles.overlayDesc}>{activeCase.desc}</p>
                  
                  <div style={styles.overlayActions}>
                    <button style={styles.overlayBtn}>
                      About All-on-4 
                      <span style={{marginLeft: "0.4rem"}}>&rarr;</span>
                    </button>
                    <button style={styles.overlayLinkBtn}>
                      Read the full story &or;
                    </button>
                  </div>
                </div>
              </div>
              
              <div style={styles.overlayRight}>
                <div style={styles.slideCounter}>
                  <strong>{String(activeCaseIdx + 1).padStart(2, '0')}</strong> <span style={{opacity: 0.5}}>/ {String(cases.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div style={styles.thumbnailsWrapper}>
            <button 
              style={styles.navBtn} 
              onClick={() => setActiveCaseIdx(prev => prev > 0 ? prev - 1 : cases.length - 1)}
            >
              &larr;
            </button>

            <div style={styles.thumbnailsContainer}>
              {cases.map((c, idx) => (
                <div 
                  key={c.id} 
                  style={{
                    ...styles.thumbnailBox,
                    border: activeCaseIdx === idx ? "2px solid #bfa573" : "2px solid transparent",
                    opacity: activeCaseIdx === idx ? 1 : 0.4
                  }}
                  onClick={() => {
                    setActiveCaseIdx(idx);
                    setSliderPosition(50); // Reset slider on change
                  }}
                >
                  <img src={c.after} alt="Thumbnail" style={styles.thumbnailImg} draggable={false} />
                  <span style={styles.thumbnailNum}>{String(idx + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>

            <button 
              style={styles.navBtn}
              onClick={() => setActiveCaseIdx(prev => prev < cases.length - 1 ? prev + 1 : 0)}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .smile-reel-section {
           color: #fff;
           transition: color 0.3s ease;
        }
        .dynamic-heading {
           color: var(--dynamic-text, #c8b384);
           transition: color 0.3s ease;
        }
        .sr-slider-container {
          position: relative;
          width: 100%;
          height: 65vh;
          min-height: 500px;
          border-radius: 20px;
          overflow: hidden;
          cursor: ew-resize;
          user-select: none;
        }
        @media (max-width: 1024px) {
          .sr-slider-container {
            height: 55vh;
            min-height: 400px;
          }
        }
        @media (max-width: 768px) {
          .sr-slider-container {
            height: 60vh;
          }
        }
      `}} />
    </section>
  );
}

const styles = {
  section: {
    position: "relative" as const,
    zIndex: 2,
    padding: "6rem 0 8rem 0",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  header: {
    marginBottom: "3rem",
  },
  eyebrow: {
    color: "#bfa573", // gold
    fontFamily: "var(--font-serif)",
    fontStyle: "italic" as const,
    fontSize: "1.4rem",
    display: "block",
    marginBottom: "0.2rem",
  },
  heading: {
    fontSize: "clamp(3rem, 5vw, 4.5rem)",
    fontWeight: 700,
    letterSpacing: "-1.5px",
    margin: 0,
  },
  sliderMainWrapper: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
  },
  sliderContainer: {
    // Defined in stylesheet for responsive height
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
    pointerEvents: "none" as const,
  },
  sliderLine: {
    position: "absolute" as const,
    top: 0,
    bottom: 0,
    width: "2px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },
  sliderIcon: {
    width: "36px",
    height: "36px",
    backgroundColor: "#e8e5dc", // matching the beige circle
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    zIndex: 11,
    gap: "2px",
  },
  overlayContainer: {
    position: "absolute" as const,
    inset: 0,
    zIndex: 2,
    pointerEvents: "none" as const, // Let clicks pass through to slider
    padding: "2.5rem 3rem",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
  },
  overlayLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  tag: {
    backgroundColor: "#daccb7",
    color: "#111",
    padding: "0.4rem 1rem",
    borderRadius: "30px",
    fontSize: "0.75rem",
    fontWeight: 700,
    pointerEvents: "auto" as const,
  },
  overlayTextContent: {
    maxWidth: "420px",
    pointerEvents: "auto" as const,
    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 200%)",
    padding: "1.5rem",
    borderRadius: "16px",
    backdropFilter: "blur(2px)",
  },
  overlayTitle: {
    fontSize: "2.2rem",
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 0.8rem 0",
    letterSpacing: "-0.5px",
    lineHeight: 1.1,
  },
  overlayDesc: {
    fontSize: "0.95rem",
    color: "#e0e0e0",
    lineHeight: 1.6,
    margin: "0 0 1.5rem 0",
  },
  overlayActions: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  overlayBtn: {
    backgroundColor: "#e8e5dc",
    color: "#111",
    border: "none",
    padding: "0.7rem 1.2rem",
    borderRadius: "30px",
    fontSize: "0.85rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  overlayLinkBtn: {
    background: "transparent",
    color: "#ccc",
    border: "none",
    fontSize: "0.85rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  overlayRight: {
    position: "absolute" as const,
    bottom: "2.5rem",
    right: "3rem",
  },
  slideCounter: {
    color: "#fff",
    fontFamily: "var(--font-serif)",
    fontStyle: "italic" as const,
    fontSize: "1.8rem",
    fontWeight: 600,
    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
  },
  thumbnailsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    marginTop: "0.5rem",
  },
  thumbnailsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    overflowX: "auto" as const,
    scrollbarWidth: "none" as const,
  },
  thumbnailBox: {
    width: "120px",
    height: "70px",
    borderRadius: "8px",
    position: "relative" as const,
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
    flexShrink: 0,
  },
  thumbnailImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },
  thumbnailNum: {
    position: "absolute" as const,
    bottom: "4px",
    left: "6px",
    color: "#fff",
    fontSize: "0.75rem",
    fontWeight: 700,
    fontStyle: "italic" as const,
    textShadow: "0 1px 3px rgba(0,0,0,0.8)",
  },
  navBtn: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#2a2a2a",
    border: "1px solid #444",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    transition: "background-color 0.2s ease",
  }
};
