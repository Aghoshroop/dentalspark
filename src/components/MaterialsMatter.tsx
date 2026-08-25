import React from 'react';
import Image from 'next/image';

export default function MaterialsMatter() {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        
        <div className="materials-card" style={styles.card}>
          {/* Left Side: Image */}
          <div style={styles.imageCol}>
            <div className="materials-img-wrapper" style={styles.imageWrapper}>
              <Image 
                src="/implant.jpg" 
                alt="Premium Titanium Dental Implant" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="materials-content" style={styles.contentCol}>
            <div style={styles.eyebrow}>The materials matter</div>
            <h2 style={styles.heading}>
              The implant we<br />
              place <span style={styles.headingGold}>matters.</span>
            </h2>
            
            <p style={styles.paragraph}>
              <strong>Straumann and Neodent</strong> are among the most researched implant systems in the world, with <strong>decades of documented success</strong> and a <strong>manufacturer warranty</strong>. A cheap no-name implant saves money today and costs far more later if it has to be redone. We choose what lasts for decades.
            </p>
            
            <div style={styles.brands}>
              Straumann <span style={styles.dot}>&bull;</span> Neodent
            </div>
            
            <div className="materials-features" style={styles.featuresList}>
              {/* Feature 1 */}
              <div style={styles.featureItem}>
                <div style={styles.featureNum}>01</div>
                <div style={styles.featureText}>
                  Straumann and Neodent implants come with the manufacturer's warranty.
                </div>
              </div>
              
              {/* Feature 2 */}
              <div style={styles.featureItem}>
                <div style={styles.featureNum}>02</div>
                <div style={styles.featureText}>
                  On top of that we stand behind our own work: if something goes wrong, you come back to the same doctor who treated you, instead of hunting for someone to fix it.
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .materials-card {
            flex-direction: column !important;
          }
          .materials-img-wrapper {
            height: 300px !important;
            margin-bottom: 2rem;
          }
          .materials-content {
            padding-left: 0 !important;
            border-left: none !important;
          }
          .materials-features {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "0 0 6rem 0", // Below ReadyToGetStarted
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
    padding: "clamp(2rem, 5vw, 4rem)",
    display: "flex",
    gap: "4rem",
    alignItems: "center",
    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
  },
  imageCol: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative" as const,
    width: "100%",
    height: "500px",
    WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
  },
  contentCol: {
    flex: "1.2",
    display: "flex",
    flexDirection: "column" as const,
  },
  eyebrow: {
    color: goldColor,
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    fontStyle: "italic",
    fontFamily: "serif",
    marginBottom: "1rem",
  },
  heading: {
    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    margin: "0 0 1.5rem 0",
  },
  headingGold: {
    color: goldColor,
  },
  paragraph: {
    color: "#aaa",
    fontSize: "1rem",
    lineHeight: 1.6,
    marginBottom: "2.5rem",
    maxWidth: "90%",
  },
  brands: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "2rem",
    letterSpacing: "-0.5px",
  },
  dot: {
    color: goldColor,
    margin: "0 0.5rem",
  },
  featuresList: {
    display: "flex",
    gap: "2rem",
  },
  featureItem: {
    display: "flex",
    gap: "1rem",
    flex: 1,
  },
  featureNum: {
    color: goldColor,
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  featureText: {
    color: "#888",
    fontSize: "0.9rem",
    lineHeight: 1.5,
  }
};
