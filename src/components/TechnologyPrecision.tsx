import React from 'react';
import Image from 'next/image';

export default function TechnologyPrecision() {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        <div className="grid-tech" style={styles.grid}>
          
          {/* Left Text Column */}
          <div style={styles.textCol}>
            <div style={styles.eyebrow}>Technology and precision</div>
            <h2 style={styles.heading}>Precision that<br/>lowers your risk.</h2>
            
            <p style={styles.subheading}>We plan every case in advance:</p>
            
            <ul style={styles.list}>
              <li style={{...styles.listItem, borderTop: "1px solid rgba(0,0,0,0.1)"}}>
                <span style={styles.listNum}>01</span>
                <span style={styles.listText}>A CBCT scan and a 3D model of your jaw</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listNum}>02</span>
                <span style={styles.listText}>Digital surgical planning</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listNum}>03</span>
                <span style={styles.listText}>Surgical guides</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listNum}>04</span>
                <span style={styles.listText}>Work under a microscope</span>
              </li>
            </ul>

            <p style={styles.paragraph}>
              The implant goes exactly where it was planned, not improvised in the moment. Less trauma and faster healing, with a result you can predict.
            </p>
          </div>

          {/* Right Image Composition */}
          <div className="image-col" style={styles.imageCol}>
            {/* Main Image */}
            <div style={styles.mainImageWrapper}>
              <Image src="/dr.jpg" alt="Digital surgical planning" fill style={{ objectFit: "cover" }} />
            </div>

            {/* Overlapping Small Image */}
            <div style={styles.smallImageWrapper}>
              <Image src="/g2.png" alt="Microscope work" fill style={{ objectFit: "cover" }} />
              <div style={styles.imageTag}>Microscope</div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .grid-tech {
            grid-template-columns: 1fr !important;
            gap: 5rem !important;
          }
          .image-col {
            margin-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "8rem 0",
    position: "relative" as const,
    zIndex: 10,
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "6rem",
    alignItems: "center",
  },
  textCol: {
    display: "flex",
    flexDirection: "column" as const,
    maxWidth: "500px",
  },
  eyebrow: {
    color: goldColor,
    fontSize: "0.85rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  heading: {
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
    fontWeight: 700,
    color: "#111",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    margin: "0 0 2.5rem 0",
  },
  subheading: {
    fontSize: "1.1rem",
    color: goldColor,
    fontStyle: "italic",
    margin: "0 0 1.5rem 0",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 2.5rem 0",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    padding: "1rem 0",
  },
  listNum: {
    color: goldColor,
    fontSize: "0.85rem",
    fontWeight: 600,
    width: "2.5rem",
    flexShrink: 0,
  },
  listText: {
    color: "#111",
    fontSize: "0.95rem",
    fontWeight: 400,
  },
  paragraph: {
    color: "#666",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    margin: 0,
  },
  imageCol: {
    position: "relative" as const,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  mainImageWrapper: {
    position: "relative" as const,
    width: "75%",
    aspectRatio: "3 / 4",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  smallImageWrapper: {
    position: "absolute" as const,
    bottom: "-10%",
    left: "5%",
    width: "45%",
    aspectRatio: "1 / 1",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    zIndex: 2,
  },
  imageTag: {
    position: "absolute" as const,
    bottom: "1rem",
    left: "1rem",
    backgroundColor: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(4px)",
    color: "#fff",
    padding: "0.3rem 0.8rem",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: 600,
    zIndex: 3,
  }
};
