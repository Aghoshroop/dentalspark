import React from 'react';
import Link from 'next/link';

export default function ReadyToGetStarted() {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        <div className="ready-wrapper" style={styles.contentWrapper}>
          {/* Left Side: Heading */}
          <div style={styles.leftCol}>
            <h2 style={styles.heading}>
              Ready to get<br />your teeth back?
            </h2>
          </div>

          {/* Right Side: CTA */}
          <div className="ready-right" style={styles.rightCol}>
            <p style={styles.subheading}>
              Your first consultation is free.
            </p>
            <Link href="#book" style={styles.ctaButton} className="cta-btn">
              Book a consultation 
              <span style={styles.ctaButtonIcon} className="arrow-circle">
                <span className="arrow arrow-main">&rarr;</span>
                <span className="arrow arrow-hover">&rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .ready-wrapper {
            flex-direction: column !important;
            text-align: center !important;
            gap: 2rem !important;
          }
          .ready-right {
            align-items: center !important;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "4rem 0 8rem 0", // Extra bottom padding to close out the section wrapper
    position: "relative" as const,
    zIndex: 10,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  leftCol: {
    flex: 1,
  },
  heading: {
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
    fontWeight: 700,
    color: "#111",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    margin: 0,
  },
  rightCol: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    gap: "1rem",
    paddingLeft: "clamp(2rem, 10vw, 8rem)",
  },
  subheading: {
    color: goldColor,
    fontSize: "clamp(1.2rem, 2vw, 1.4rem)",
    fontStyle: "italic",
    fontFamily: "serif",
    margin: 0,
  },
  ctaButton: {
    backgroundColor: "#1c1c1c",
    color: goldColor,
    padding: "0.6rem 0.6rem 0.6rem 1.5rem",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.95rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "1rem",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  ctaButtonIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "28px",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: "50%",
    fontSize: "1rem",
    color: goldColor,
  }
};
