import React from 'react';
import Link from 'next/link';

export default function PatientResults() {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.eyebrow}>Patient results</div>
          <h2 style={styles.heading}>Results you can see.</h2>
        </div>
        
        {/* Gallery Grid */}
        <div className="results-grid" style={styles.grid}>
          {/* Left Column - Tall Image */}
          <div className="results-left" style={styles.leftCol}>
            <img 
              src="/g2.png" 
              alt="Patient smile result" 
              style={styles.image}
              loading="lazy"
            />
          </div>
          
          {/* Right Column - Split Layout */}
          <div className="results-right" style={styles.rightCol}>
            {/* Top Row - Two Images */}
            <div className="results-top-row" style={styles.rightTopRow}>
              <div style={styles.imgWrapper}>
                <img 
                  src="/before.png" 
                  alt="Patient smile result" 
                  style={styles.image}
                  loading="lazy"
                />
              </div>
              <div style={styles.imgWrapper}>
                <img 
                  src="/after.png" 
                  alt="Patient smile result" 
                  style={styles.image}
                  loading="lazy"
                />
              </div>
            </div>
            {/* Bottom Row - Wide Image */}
            <div className="results-bottom-row" style={styles.rightBottomRow}>
              <img 
                src="/implant.jpg" 
                alt="Patient smile result wide" 
                style={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div style={styles.footerContent}>
          <p style={styles.paragraph}>
            Every case is a real person who got<br/>
            their teeth, and their smile, back.
          </p>
          <Link href="/gallery" style={styles.galleryLink} className="gallery-link">
            See the full gallery 
            <span style={styles.arrowCircle} className="arrow-circle-bg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "1px" }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .results-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .results-left {
            height: 400px !important;
          }
          .results-right {
            height: auto !important;
          }
          .results-top-row {
            height: 250px !important;
          }
          .results-bottom-row {
            height: 250px !important;
          }
        }
        @media (max-width: 500px) {
          .results-top-row {
            grid-template-columns: 1fr !important;
            height: 500px !important;
          }
        }
        .gallery-link:hover .arrow-circle-bg {
          background-color: #d1b88a !important;
          color: #fff !important;
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "6rem 0 6rem 0", // Top padding increased so heading isn't cut off by sticky header
    position: "relative" as const,
    zIndex: 10,
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
    display: "flex",
    flexDirection: "column" as const,
  },
  header: {
    marginBottom: "3rem", // slightly more space
  },
  eyebrow: {
    color: goldColor,
    fontSize: "1rem", // slightly larger
    fontStyle: "italic",
    fontFamily: "serif",
    marginBottom: "0.5rem",
    fontWeight: 500, // softer weight
  },
  heading: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)", // Smaller max size, matching target
    fontWeight: 700, // 700 instead of 800
    color: "#111",
    letterSpacing: "-1px", // Less tight letter spacing
    margin: 0,
    lineHeight: 1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.3fr", 
    gap: "1rem",
    width: "100%",
    height: "clamp(450px, 55vh, 600px)", // Responsive height
    marginBottom: "4rem",
  },
  leftCol: {
    width: "100%",
    height: "100%",
    minHeight: 0, 
    borderRadius: "16px", // Reverted to 16px for larger curve
    overflow: "hidden",
  },
  rightCol: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    height: "100%",
    minHeight: 0, 
  },
  rightTopRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    height: "45%", 
    minHeight: 0, 
  },
  imgWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: "16px", // 16px
    overflow: "hidden",
  },
  rightBottomRow: {
    height: "55%", 
    minHeight: 0,
    borderRadius: "16px", // 16px
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    objectPosition: "center",
  },
  footerContent: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
  },
  paragraph: {
    fontSize: "1.4rem", // Heavier, larger text matching target
    fontWeight: 500,
    color: "#333",
    lineHeight: 1.4,
    marginBottom: "2rem",
  },
  galleryLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#111",
    textDecoration: "none",
  },
  arrowCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    backgroundColor: "#e8e5dc", // Exact beige from target
    borderRadius: "50%",
    color: "#111",
    transition: "all 0.2s ease",
  }
};
