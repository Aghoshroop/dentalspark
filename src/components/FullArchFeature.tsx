"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function FullArchFeature() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasWiggled, setHasWiggled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Wiggle animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasWiggled && !isDragging) {
          setHasWiggled(true);
          
          // Sequence of movements for the wiggle
          setTimeout(() => setSliderPos(40), 400); // Slide left
          setTimeout(() => setSliderPos(55), 1000); // Slide slightly right
          setTimeout(() => setSliderPos(50), 1500); // Back to center
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% visible
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [hasWiggled, isDragging]);

  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.card}>
          <div className="feature-grid" style={styles.grid}>
            
            {/* Left: Custom Slider */}
            <div 
              style={styles.sliderContainer}
              ref={containerRef}
              onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
              }}
              onTouchStart={(e) => {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
              }}
            >
              {/* After Image (Base) */}
              <div style={styles.imageWrapper}>
                <Image src="/after.png" alt="After" fill style={{ objectFit: "cover" }} draggable={false} />
              </div>
              
              {/* Before Image (Clipped) */}
              <div style={{
                ...styles.imageWrapper,
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                transition: isDragging ? "none" : "clip-path 0.5s ease-in-out"
              }}>
                <Image src="/before.png" alt="Before" fill style={{ objectFit: "cover" }} draggable={false} />
              </div>

              {/* Slider Handle */}
              <div style={{
                ...styles.sliderHandle,
                left: `${sliderPos}%`,
                transition: isDragging ? "none" : "left 0.5s ease-in-out"
              }}>
                <div style={styles.sliderIcon}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
              
              {/* Top Labels */}
              <div style={{ ...styles.label, left: "1.5rem" }}>BEFORE</div>
              <div style={{ ...styles.label, right: "1.5rem" }}>AFTER</div>

              {/* Bottom Text Overlay */}
              <div style={styles.bottomOverlay}></div>
              <div style={styles.bottomTextContent}>
                <div style={styles.patientTag}>Real patient &bull; All-on-4</div>
                <p style={styles.patientDesc}>
                  She had wanted a new smile for years but kept stopping short. One full upper and lower arch on implants later, she says she only wishes she had done it sooner.
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div style={styles.contentCol}>
              <h2 style={styles.heading}>
                A full arch of teeth<br />
                on implants. <span style={styles.headingGold}>Even<br />
                when others said it<br />
                could not be done.</span>
              </h2>
              
              <p style={styles.paragraph}>
                Failing teeth, a denture that never fits, or being told there is not enough bone for implants. None of that is the end of the road. We do All-on-X (a full arch on 4 to 6 implants), rebuild bone with custom titanium mesh, and place pterygoid implants where standard ones will not hold. The result: permanent, fixed teeth you can eat, speak, and smile with again.
              </p>
              
              <button className="gold-btn" style={styles.button}>
                See if All-on-X is right for you <span style={{ marginLeft: "0.5rem" }}>&rarr;</span>
              </button>
            </div>
            
          </div>
        </div>

        {/* Missing Bottom Text Section */}
        <div style={styles.bottomTextSection}>
          <div style={styles.smallLine}></div>
          <h3 style={styles.bottomHeading}>Were you told there is not enough bone for implants?</h3>
          <p style={styles.bottomSub}>
            It is not a dead end. <a href="#" style={styles.bottomLink}>Check in 30 seconds what is possible in your case &rarr;</a>
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .gold-btn {
          transition: all 0.3s ease;
        }
        .gold-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(188, 163, 116, 0.2);
          background-color: #cbb487 !important;
        }
        @media (max-width: 900px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "6rem 0",
    position: "relative" as const,
    zIndex: 10,
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  card: {
    backgroundColor: "#161616",
    borderRadius: "24px",
    padding: "4rem",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5rem",
    alignItems: "center",
  },
  sliderContainer: {
    position: "relative" as const,
    width: "100%",
    aspectRatio: "4 / 3",
    borderRadius: "24px",
    overflow: "hidden",
    cursor: "ew-resize",
    userSelect: "none" as const,
  },
  imageWrapper: {
    position: "absolute" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    pointerEvents: "none" as const,
  },
  sliderHandle: {
    position: "absolute" as const,
    top: 0, bottom: 0,
    width: "2px",
    backgroundColor: "rgba(255,255,255,0.8)",
    transform: "translateX(-50%)",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none" as const,
  },
  sliderIcon: {
    width: "40px",
    height: "40px",
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(4px)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  label: {
    position: "absolute" as const,
    top: "1.5rem",
    backgroundColor: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(4px)",
    padding: "0.25rem 0.75rem",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "1px",
    zIndex: 5,
    pointerEvents: "none" as const,
  },
  bottomOverlay: {
    position: "absolute" as const,
    bottom: 0, left: 0, right: 0,
    height: "50%",
    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
    zIndex: 4,
    pointerEvents: "none" as const,
  },
  bottomTextContent: {
    position: "absolute" as const,
    bottom: "2rem",
    left: "2rem",
    right: "2rem",
    zIndex: 5,
    pointerEvents: "none" as const,
  },
  patientTag: {
    display: "inline-block",
    backgroundColor: goldColor,
    color: "#111",
    fontSize: "0.7rem",
    fontWeight: 700,
    padding: "0.25rem 0.75rem",
    borderRadius: "12px",
    marginBottom: "1rem",
  },
  patientDesc: {
    color: "rgba(255,255,255,0.9)",
    fontSize: "0.9rem",
    lineHeight: 1.5,
    margin: 0,
  },
  contentCol: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
  },
  heading: {
    fontSize: "clamp(2rem, 3vw, 2.75rem)",
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    margin: "0 0 2rem 0",
  },
  headingGold: {
    color: goldColor,
  },
  paragraph: {
    color: "#aaa",
    fontSize: "0.95rem",
    lineHeight: 1.7,
    margin: "0 0 2.5rem 0",
  },
  button: {
    backgroundColor: goldColor,
    color: "#111",
    border: "none",
    padding: "0.8rem 1.75rem",
    borderRadius: "30px",
    fontSize: "0.95rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
  },
  bottomTextSection: {
    marginTop: "6rem",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
  },
  smallLine: {
    width: "30px",
    height: "2px",
    backgroundColor: goldColor,
    marginBottom: "1.5rem",
  },
  bottomHeading: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#111",
    marginBottom: "0.5rem",
  },
  bottomSub: {
    fontSize: "0.95rem",
    color: "#666",
  },
  bottomLink: {
    color: goldColor,
    textDecoration: "none",
    fontWeight: 600,
  }
};
