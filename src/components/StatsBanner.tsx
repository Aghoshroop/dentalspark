'use client';
import React, { useEffect, useState, useRef } from 'react';

export default function StatsBanner() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const targetNumber = 5000;
  const duration = 2000; // 2 seconds

  // Intersection Observer to trigger every time it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when out of view so it counts up *every time*
          setIsVisible(false);
          setCount(0); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation logic
  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo) for a smooth slow-down at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * targetNumber));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    if (isVisible) {
      animationFrameId = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  const formattedCount = count.toLocaleString('en-US');

  return (
    <section style={styles.section} ref={sectionRef}>
      <div className="container" style={styles.container}>
        <div className="stats-banner" style={styles.banner}>
          
          {/* Left Side: Number */}
          <div style={styles.leftCol}>
            <span style={styles.number}>{formattedCount}+</span>
          </div>

          {/* Divider */}
          <div className="stats-divider" style={styles.divider}></div>

          {/* Right Side: Text */}
          <div style={styles.rightCol}>
            <h3 style={styles.title}>implants placed</h3>
            <p style={styles.subtitle}>
              The earliest still going strong since <span style={styles.highlight}>2012</span>.
            </p>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .stats-banner {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1.5rem !important;
            padding: 2.5rem 1.5rem !important;
          }
          .stats-divider {
            width: 80px !important;
            height: 1px !important;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";
const darkBg = "#1a1a1a";

const styles = {
  section: {
    padding: "2rem 0 6rem 0",
    backgroundColor: "transparent",
  },
  container: {
    maxWidth: "1400px", // Changed to 1400px to perfectly match the gallery width
    margin: "0 auto",
    padding: "0 4vw",
  },
  banner: {
    backgroundColor: darkBg,
    borderRadius: "16px",
    padding: "2.5rem 6rem", // Reduced vertical padding from 3.5rem to 2.5rem to make it shorter
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // Left align instead of center
    gap: "4rem", 
  },
  leftCol: {
    display: "flex",
    justifyContent: "flex-end",
  },
  number: {
    fontSize: "clamp(4rem, 8vw, 7rem)", // Increased max size to match inspiration
    fontWeight: 700,
    color: goldColor,
    lineHeight: 1,
    letterSpacing: "-2px",
    fontVariantNumeric: "tabular-nums", 
  },
  divider: {
    width: "1px",
    height: "70px", // Reduced height of divider line from 90px to 70px
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  rightCol: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
    justifyContent: "center",
  },
  title: {
    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
    fontWeight: 700,
    color: "#f0f0f0",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#999999",
    margin: 0,
    fontWeight: 400,
  },
  highlight: {
    color: goldColor,
    fontWeight: 600,
  }
};
