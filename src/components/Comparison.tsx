import React from 'react';

export default function Comparison() {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.eyebrow}>How we differ</div>
          <h2 style={styles.heading}>Not an assembly line.</h2>
          <h2 style={styles.headingItalic}>Compare for yourself.</h2>
        </div>

        {/* Comparison Cards Grid */}
        <div className="comparison-grid" style={styles.grid}>
          
          {/* Left Card: Dental Spark */}
          <div style={styles.darkCard}>
            <div style={styles.cardHeader}>
              <span style={styles.goldDot}>&bull;</span>
              <span style={styles.darkCardTitle}>Dental Spark</span>
            </div>
            
            <div style={styles.cardContent}>
              
              {/* Item 1 */}
              <div style={styles.item}>
                <div style={styles.iconGold}>&#10003;</div>
                <div>
                  <div style={styles.itemEyebrowGold}>Who treats you</div>
                  <div style={styles.itemTextWhite}>One doctor, start to finish</div>
                </div>
              </div>

              {/* Item 2 */}
              <div style={styles.item}>
                <div style={styles.iconGold}>&#10003;</div>
                <div>
                  <div style={styles.itemEyebrowGold}>Approach</div>
                  <div style={styles.itemTextWhite}>Your case studied, a plan built for you</div>
                </div>
              </div>

              {/* Item 3 */}
              <div style={styles.item}>
                <div style={styles.iconGold}>&#10003;</div>
                <div>
                  <div style={styles.itemEyebrowGold}>Price</div>
                  <div style={styles.itemTextWhite}>Transparent, an honest plan</div>
                </div>
              </div>

              {/* Item 4 */}
              <div style={styles.item}>
                <div style={styles.iconGold}>&#10003;</div>
                <div>
                  <div style={styles.itemEyebrowGold}>Materials</div>
                  <div style={styles.itemTextWhite}>Straumann / Neodent</div>
                </div>
              </div>

              {/* Item 5 */}
              <div style={styles.itemLast}>
                <div style={styles.iconGold}>&#10003;</div>
                <div>
                  <div style={styles.itemEyebrowGold}>Language</div>
                  <div style={styles.itemTextWhite}>English, Hindi, Marathi & Gujarati</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Card: Corporate Chains */}
          <div style={styles.lightCard}>
            <div style={styles.cardHeader}>
              <span style={styles.grayDot}>&bull;</span>
              <span style={styles.lightCardTitle}>Corporate chains</span>
            </div>
            
            <div style={styles.cardContent}>
              
              {/* Item 1 */}
              <div style={styles.itemLight}>
                <div style={styles.iconGray}>&mdash;</div>
                <div>
                  <div style={styles.itemEyebrowGray}>Who treats you</div>
                  <div style={styles.itemTextGray}>A surgeon places, someone else restores, doctors rotate</div>
                </div>
              </div>

              {/* Item 2 */}
              <div style={styles.itemLight}>
                <div style={styles.iconGray}>&mdash;</div>
                <div>
                  <div style={styles.itemEyebrowGray}>Approach</div>
                  <div style={styles.itemTextGray}>One package for everyone, sales managers</div>
                </div>
              </div>

              {/* Item 3 */}
              <div style={styles.itemLight}>
                <div style={styles.iconGray}>&mdash;</div>
                <div>
                  <div style={styles.itemEyebrowGray}>Price</div>
                  <div style={styles.itemTextGray}>Pressure and add-ons along the way</div>
                </div>
              </div>

              {/* Item 4 */}
              <div style={styles.itemLight}>
                <div style={styles.iconGray}>&mdash;</div>
                <div>
                  <div style={styles.itemEyebrowGray}>Materials</div>
                  <div style={styles.itemTextGray}>The chain standard</div>
                </div>
              </div>

              {/* Item 5 */}
              <div style={styles.itemLast}>
                <div style={styles.iconGray}>&mdash;</div>
                <div>
                  <div style={styles.itemEyebrowGray}>Language</div>
                  <div style={styles.itemTextGray}>English only</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div style={styles.ctaContainer}>
          <h3 style={styles.ctaHeading}>
            Told you need a <span style={styles.ctaGoldItalic}>"standard package"</span> for your smile?
          </h3>
          <p style={styles.ctaText}>
            Your case is unique. Get a bespoke, honest treatment plan without the assembly-line pressure.
          </p>
          <a href="#book" style={styles.ctaButton} className="cta-btn">
            Free second opinion 
            <span style={styles.ctaButtonIcon} className="arrow-circle">
              <span className="arrow arrow-main">&rarr;</span>
              <span className="arrow arrow-hover">&rarr;</span>
            </span>
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .comparison-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "6rem 0 10rem 0",
    position: "relative" as const,
    zIndex: 10,
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  header: {
    marginBottom: "4rem",
  },
  eyebrow: {
    color: goldColor,
    fontSize: "1.2rem",
    fontStyle: "italic",
    marginBottom: "1rem",
    fontFamily: "serif",
  },
  heading: {
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
    fontWeight: 700,
    color: "#111",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    margin: 0,
  },
  headingItalic: {
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
    fontWeight: 400,
    color: goldColor,
    lineHeight: 1.1,
    fontStyle: "italic",
    margin: "0.2rem 0 0 0",
    fontFamily: "serif",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "stretch",
  },
  darkCard: {
    backgroundColor: "#1c1c1c",
    borderRadius: "24px",
    padding: "3rem",
    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column" as const,
  },
  lightCard: {
    backgroundColor: "transparent",
    borderRadius: "24px",
    padding: "3rem",
    border: "1px solid rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column" as const,
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "2rem",
  },
  goldDot: {
    color: goldColor,
    fontSize: "1.5rem",
    lineHeight: 0,
  },
  grayDot: {
    color: "#999",
    fontSize: "1.5rem",
    lineHeight: 0,
  },
  darkCardTitle: {
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: 700,
  },
  lightCardTitle: {
    color: "#777",
    fontSize: "1.1rem",
    fontWeight: 700,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column" as const,
    flexGrow: 1,
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "1.5rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  itemLight: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "1.5rem 0",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },
  itemLast: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    paddingTop: "1.5rem",
  },
  iconGold: {
    color: goldColor,
    fontSize: "1rem",
    marginTop: "2px",
  },
  iconGray: {
    color: "#999",
    fontSize: "1rem",
    marginTop: "2px",
  },
  itemEyebrowGold: {
    color: goldColor,
    fontSize: "0.75rem",
    fontWeight: 600,
    marginBottom: "0.25rem",
  },
  itemEyebrowGray: {
    color: "#999",
    fontSize: "0.75rem",
    fontWeight: 600,
    marginBottom: "0.25rem",
  },
  itemTextWhite: {
    color: "#fff",
    fontSize: "0.95rem",
    fontWeight: 500,
  },
  itemTextGray: {
    color: "#666",
    fontSize: "0.95rem",
    fontWeight: 400,
  },
  ctaContainer: {
    marginTop: "6rem",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.5rem",
  },
  ctaHeading: {
    fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
    fontWeight: 600,
    color: "#111",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  ctaGoldItalic: {
    color: goldColor,
    fontStyle: "italic",
    fontFamily: "serif",
    fontWeight: 400,
  },
  ctaText: {
    fontSize: "0.95rem",
    color: "#666",
    margin: "0 0 1.5rem 0",
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
