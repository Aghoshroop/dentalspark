"use client";
import React, { useEffect, useState, useRef } from "react";
import FadeUp from "./FadeUp";

export default function TrainingTimeline() {
  const goldColor = "#bca374";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress as the section slides up the screen
      // Delay the start until the section has lifted up to the middle of the screen (50%)
      const startPoint = windowHeight * 0.5;
      let p = (startPoint - rect.top) / startPoint;
      
      // Clamp between 0 and 1
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      title: "Mumbai",
      subtitle: "BDS Dental Surgery",
      description: "Core foundation in general dentistry",
    },
    {
      title: "Implants",
      subtitle: "Advanced Training",
      description: "Specialized in painless dental implants",
    },
    {
      title: "Cosmetics",
      subtitle: "Aesthetic Treatments",
      description: "Smile designing and full-mouth rehabilitation",
    },
    {
      title: "TEDx",
      subtitle: "Social Entrepreneur",
      description: "Advocate for tobacco deaddiction",
    },
  ];

  // Calculate the animated implants number (starting from 0)
  const currentImplants = Math.floor(0 + progress * 5015);
  const displayImplants = progress >= 0.99 ? "5,000+" : currentImplants.toLocaleString();

  return (
    <section ref={sectionRef} className="timeline-section" style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Top Header Area */}
        <FadeUp>
          <div style={styles.headerArea}>
            <h2 style={styles.mainStat}>
              <span style={{ color: goldColor }}>{displayImplants}</span> implants placed
            </h2>
            <p style={styles.subStat}>
              The earliest still going strong since 2009.
            </p>
          </div>
        </FadeUp>

        {/* Timeline Area */}
        <div style={styles.timelineWrapper}>
          <div style={styles.eyebrow}>Where Dr. Nilam Gada trained</div>
          
          <div style={styles.timelineTrack}>
            {/* Background Line */}
            <div style={{...styles.timelineLine, width: "100%", backgroundColor: "rgba(188, 163, 116, 0.2)"}}></div>
            {/* Active Animated Line */}
            <div style={{
              ...styles.timelineLine, 
              width: `${progress * 100}%`, 
              backgroundColor: goldColor,
              transition: "width 0.1s ease-out"
            }}></div>
            
            <div style={styles.nodesContainer}>
              {timelineData.map((item, index) => {
                // Calculate when this node should become active
                // Node 0 active early, Node 3 active at the end
                const activationPoint = 0.1 + (index * 0.25);
                const isActive = progress >= activationPoint;
                
                return (
                  <div key={index} style={styles.nodeWrapper}>
                    <div style={{
                      ...styles.dot,
                      borderColor: isActive ? "transparent" : "rgba(188, 163, 116, 0.4)",
                      backgroundColor: isActive ? "transparent" : "#f4f3ed",
                      boxShadow: isActive ? `0 0 15px ${goldColor}, inset 0 0 0 4px ${goldColor}` : "none",
                    }}>
                      {/* Optional Inner glow/dot handled by box-shadow above for active state */}
                    </div>
                    <div style={{
                      ...styles.content,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(20px)",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      pointerEvents: isActive ? "auto" : "none"
                    }}>
                      <h3 style={styles.title}>{item.title}</h3>
                      <h4 style={styles.subtitle}>{item.subtitle}</h4>
                      <p style={styles.description}>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .timeline-section {
          position: relative;
          z-index: 10;
          padding: 8rem 0 4rem 0;
        }

        @media (max-width: 900px) {
          .timeline-section {
            padding: 5rem 0 5rem 0;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
          }
          
          /* On mobile, stack the timeline */
          .nodesContainer {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}} />
    </section>
  );
}

const styles = {
  section: {
    // Styles handled by CSS class for media queries
  },
  gridOverlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px",
    pointerEvents: "none" as const,
    zIndex: 1,
  },
  container: {
    position: "relative" as const,
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  headerArea: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-end",
    textAlign: "right" as const,
    marginBottom: "8rem",
  },
  mainStat: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: 700,
    letterSpacing: "-1.5px",
    color: "#222",
    margin: "0 0 0.5rem 0",
  },
  subStat: {
    fontSize: "1.1rem",
    color: "#666",
    fontWeight: 400,
    margin: 0,
  },
  timelineWrapper: {
    width: "100%",
  },
  eyebrow: {
    color: "#bca374",
    fontSize: "0.85rem",
    fontWeight: 600,
    marginBottom: "2rem",
    letterSpacing: "0.5px",
  },
  timelineTrack: {
    position: "relative" as const,
    width: "100%",
  },
  timelineLine: {
    position: "absolute" as const,
    top: "8px",
    left: 0,
    height: "2px",
    zIndex: 1,
  },
  nodesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    position: "relative" as const,
    zIndex: 2,
  },
  nodeWrapper: {
    display: "flex",
    flexDirection: "column" as const,
  },
  dot: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border: "2px solid rgba(188, 163, 116, 0.4)",
    backgroundColor: "#f4f3ed",
    marginBottom: "1.5rem",
    transition: "all 0.3s ease",
  },
  content: {
    paddingRight: "1rem",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#111",
    margin: "0 0 0.25rem 0",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "#444",
    margin: "0 0 0.5rem 0",
  },
  description: {
    fontSize: "0.85rem",
    color: "#777",
    lineHeight: 1.5,
    margin: 0,
  },
};
