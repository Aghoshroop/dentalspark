import React from 'react';

export default function NotAlone() {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        
        <div style={styles.eyebrow}>
          You are not alone
        </div>
        
        <h2 className="not-alone-heading" style={styles.heading}>
          Have not been to a dentist<br />
          in years? That is <span style={styles.goldItalic}>more<br />common</span> than you think.
        </h2>
        
        <p className="not-alone-paragraph" style={styles.paragraph}>
          Many of our patients avoided care for <strong>5, 10, even 15 years</strong>, out of fear or a bad<br />
          experience in the past. We treat calmly and without judgment, with nitrous oxide<br />
          or oral sedation to keep you relaxed.
        </p>
        
        <div style={styles.divider}></div>
        
        <div className="not-alone-quote" style={styles.bottomQuote}>
          Most patients later regret only<br />
          one thing: not coming sooner.
        </div>
        
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .not-alone-heading {
            font-size: clamp(2rem, 8vw, 2.5rem) !important;
          }
          .not-alone-paragraph {
            max-width: 100% !important;
          }
          .not-alone-quote {
            font-size: clamp(1.5rem, 6vw, 1.8rem) !important;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "2rem 0 4rem 0", // Reduced height
    position: "relative" as const,
    zIndex: 10,
    textAlign: "center" as const,
  },
  container: {
    width: "100%",
    maxWidth: "1200px", // Much wider to prevent wrapping
    margin: "0 auto",
    padding: "0 4vw",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  eyebrow: {
    color: goldColor,
    fontSize: "1.1rem",
    fontStyle: "italic",
    fontFamily: "serif",
    marginBottom: "0.5rem", 
  },
  heading: {
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)", // Slightly smaller so it fits on 3 lines
    fontWeight: 800, 
    color: "#111",
    lineHeight: 0.95, 
    letterSpacing: "-2px",
    margin: "0 0 1rem 0", 
    width: "100%", // Let it take full container width
  },
  goldItalic: {
    color: goldColor,
    fontStyle: "italic",
    fontFamily: "serif",
    fontWeight: 400,
    letterSpacing: "-1px",
  },
  paragraph: {
    color: "#555",
    fontSize: "1.05rem", 
    lineHeight: 1.5,
    margin: "0 0 1.5rem 0",
    maxWidth: "800px", // Constrain just the paragraph
  },
  divider: {
    width: "40px",
    height: "1px",
    backgroundColor: "rgba(0,0,0,0.15)",
    margin: "1rem 0", // Tighter around divider
  },
  bottomQuote: {
    color: goldColor,
    fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
    fontStyle: "italic",
    fontFamily: "serif",
    margin: 0,
    lineHeight: 1.1,
    letterSpacing: "-0.5px",
  }
};
