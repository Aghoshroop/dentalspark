'use client';
import React from 'react';

export default function PrivateGalleryLead() {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        <div className="lead-card" style={styles.card}>
          
          <div className="lead-left" style={styles.leftCol}>
            <span style={styles.eyebrow}>Private smile gallery</span>
            <h2 style={styles.heading}>Want to see more cases like yours?</h2>
            <p style={styles.text}>
              Get access to our private results gallery, full before-and-after sets we can't publish openly, including cases that match your starting point.
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <CheckIcon /> Dozens more full-arch & single-tooth cases
              </li>
              <li style={styles.listItem}>
                <CheckIcon /> Shared only with your consent &middot; HIPAA compliant
              </li>
            </ul>
          </div>
          
          <div className="lead-right" style={styles.rightCol}>
            <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label style={styles.label}>YOUR EMAIL</label>
              
              <div className="lead-input-wrapper" style={styles.inputWrapper}>
                <input 
                  type="email" 
                  placeholder="you@email.com" 
                  className="lead-input"
                  required 
                />
                
                <button type="submit" className="lead-btn">
                  Get access
                  <span className="arrow-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </button>
              </div>

              <p style={styles.disclaimer}>
                <em>No spam. One link, straight to the gallery.</em>
              </p>
            </form>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .lead-input {
          flex: 1;
          background-color: #242424;
          border: 1px solid #333;
          border-radius: 30px;
          padding: 0.85rem 1.2rem;
          color: #fff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s ease;
          width: 100%;
        }
        
        .lead-input:focus {
          border-color: #c8b384;
        }

        .lead-input::placeholder {
          color: #777;
        }

        .lead-btn {
          background-color: #c8b384; 
          color: #111;
          border: none;
          border-radius: 30px;
          padding: 0.75rem 1rem 0.75rem 1.2rem;
          font-size: 0.95rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
          white-space: nowrap;
        }

        .lead-btn:hover {
          background-color: #dac699;
        }

        .lead-btn .arrow-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          background-color: rgba(0,0,0,0.15);
          border-radius: 50%;
        }

        @media (max-width: 1024px) {
          .lead-card {
            flex-direction: column !important;
            padding: 3rem 2.5rem !important;
            gap: 3rem !important;
          }
          .lead-right {
            width: 100%;
            justify-content: flex-start !important;
          }
          .lead-input-wrapper {
            flex-direction: column;
            align-items: stretch !important;
          }
        }
      `}} />
    </section>
  );
}

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#c8b384" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: "1px" }}>
    <circle cx="12" cy="12" r="10" fill="#c8b384" />
    <path d="M8 12l3 3 5-6" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const goldColor = "#c8b384";
const darkBg = "#222222"; 

const styles = {
  section: {
    padding: "2rem 0 6rem 0",
    backgroundColor: "transparent",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  card: {
    backgroundColor: darkBg,
    borderRadius: "16px",
    padding: "2.5rem 4rem", // Severely reduced height to perfectly match the thin card in Image 1
    display: "flex",
    justifyContent: "space-between", // Pushes columns apart like Image 1
    gap: "2rem",
    alignItems: "center",
  },
  leftCol: {
    flex: "1 1 auto",
    maxWidth: "600px", // Increased to ensure heading stays on one line
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem", // Tighter gap between text elements
  },
  eyebrow: {
    color: goldColor,
    fontSize: "0.8rem",
    fontWeight: 600,
    fontFamily: "monospace",
  },
  heading: {
    fontSize: "2.2rem", // Exact size to fit on one line as seen in Image 1
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "-1px",
    margin: 0,
    lineHeight: 1.1,
    whiteSpace: "nowrap" as const, // Force one line
  },
  text: {
    fontSize: "0.95rem", // Smaller text like in Image 1
    color: "#999", 
    lineHeight: 1.5,
    margin: 0,
    maxWidth: "580px", 
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "0.5rem 0 0 0",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.8rem",
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.8rem",
    color: "#e0e0e0",
    fontSize: "0.85rem", // Smaller list items
    fontWeight: 600, 
  },
  rightCol: {
    flex: "0 0 450px", // Fixed width to keep input looking perfect
    display: "flex",
    justifyContent: "flex-end", 
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.8rem", 
    width: "100%",
  },
  label: {
    color: "#888",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
    marginBottom: "0.1rem",
  },
  inputWrapper: {
    display: "flex",
    gap: "0.8rem",
    alignItems: "center",
  },
  disclaimer: {
    color: "#777",
    fontSize: "0.75rem",
    margin: "0.2rem 0 0 0",
    fontStyle: "italic" as const,
  }
};
