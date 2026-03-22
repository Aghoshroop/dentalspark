import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorProfile from "@/components/DoctorProfile";
import FeatureStrip from "@/components/FeatureStrip";
import Gallery from "@/components/Gallery";
import WeTakeCare from "@/components/WeTakeCare";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--spacing-24)", minHeight: "80vh", backgroundColor: "var(--color-white)" }}>
        
        {/* About Hero Banner */}
        <section style={aboutStyles.heroBanner}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <h1 style={aboutStyles.heroTitle}>About <span style={{ color: "var(--color-primary)" }}>Dental Spark</span></h1>
            <p style={aboutStyles.heroSubtitle}>
              Advanced Dental Care with a Gentle Touch. Discover the story behind our decade of creating beautiful, confident smiles.
            </p>
          </div>
          {/* Decorative shapes */}
          <div style={aboutStyles.heroShapeLeft}></div>
          <div style={aboutStyles.heroShapeRight}></div>
        </section>

        {/* Doctor Profile (The founder story) */}
        <DoctorProfile />

        {/* Mission & Values Section */}
        <section style={aboutStyles.missionSection}>
          <div className="container">
            <div style={aboutStyles.missionGrid}>
              
              {/* Mission Statement */}
              <div style={aboutStyles.missionCard} className="glass-card">
                <div style={aboutStyles.iconWrapper}>🎯</div>
                <h3 style={aboutStyles.cardTitle}>Our Mission</h3>
                <p style={aboutStyles.cardText}>
                  To break the stigma of painful dental visits by providing a genuinely relaxed, highly informed, and utterly pain-free dental experience. We strive to be the definitive one-stop solution for all family dental needs in Mumbai.
                </p>
              </div>

              {/* Core Values */}
              <div style={aboutStyles.missionCard} className="glass-card">
                <div style={aboutStyles.iconWrapper}>💎</div>
                <h3 style={aboutStyles.cardTitle}>Our Core Values</h3>
                <ul style={aboutStyles.valueList}>
                  <li style={aboutStyles.valueItem}>
                     <span style={aboutStyles.check}>✔</span> <strong>100% Transparency:</strong> Clear explanations of treatments and costs.
                  </li>
                  <li style={aboutStyles.valueItem}>
                     <span style={aboutStyles.check}>✔</span> <strong>Absolute Sterilization:</strong> The highest standards of hygiene and safety.
                  </li>
                  <li style={aboutStyles.valueItem}>
                     <span style={aboutStyles.check}>✔</span> <strong>Advanced Tech:</strong> Employing modern equipment for painless procedures.
                  </li>
                  <li style={aboutStyles.valueItem}>
                     <span style={aboutStyles.check}>✔</span> <strong>Patient Centricity:</strong> Your comfort is our ultimate priority.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic Feature Strip component */}
        <FeatureStrip />

        {/* Why Choose Us Highlight */}
        <WeTakeCare beforeImage="/i1.png" afterImage="/i2.png" className="section" />

        {/* Clinic & Patient Gallery */}
        <div style={{ padding: "var(--spacing-12) 0", backgroundColor: "#f8fafc" }}>
          <div className="container" style={{ textAlign: "center", marginBottom: "var(--spacing-8)" }}>
             <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Our Patient <span style={{ color: "var(--color-primary)" }}>Gallery</span></h2>
             <p style={{ color: "var(--color-gray)", maxWidth: "600px", margin: "0 auto" }}>See the genuine smiles we've helped craft over the past 17 years.</p>
          </div>
          <Gallery />
        </div>

      </main>
      <Footer />
    </>
  );
}

const aboutStyles = {
  heroBanner: {
    backgroundColor: "#f4f8fb",
    padding: "var(--spacing-16) 0",
    position: "relative" as const,
    overflow: "hidden",
    borderBottom: "1px solid #e2e8f0",
  },
  heroTitle: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: 800,
    marginBottom: "1rem",
    lineHeight: 1.1,
  },
  heroSubtitle: {
    fontSize: "1.1rem",
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  heroShapeLeft: {
    position: "absolute" as const,
    top: "-50%",
    left: "-10%",
    width: "100%", maxWidth: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(2,132,199,0.08) 0%, rgba(2,132,199,0) 70%)",
    zIndex: 1,
  },
  heroShapeRight: {
    position: "absolute" as const,
    bottom: "-20%",
    right: "-5%",
    width: "100%", maxWidth: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0) 70%)",
    zIndex: 1,
  },
  missionSection: {
    padding: "var(--spacing-16) 0",
    backgroundColor: "var(--color-white)",
  },
  missionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
    gap: "var(--spacing-8)",
  },
  missionCard: {
    padding: "var(--spacing-10)",
    backgroundColor: "#f8fafc",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
    border: "1px solid rgba(255,255,255,0.6)",
    display: "flex",
    flexDirection: "column" as const,
  },
  iconWrapper: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  cardTitle: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "var(--color-dark)",
  },
  cardText: {
    fontSize: "1rem",
    color: "#64748b",
    lineHeight: 1.7,
  },
  valueList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  },
  valueItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
    fontSize: "0.95rem",
    color: "#475569",
    lineHeight: 1.5,
  },
  check: {
    color: "var(--color-primary)",
    fontWeight: "bold",
    marginTop: "2px",
  }
};
