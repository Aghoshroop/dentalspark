import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--spacing-28)", minHeight: "80vh", backgroundColor: "var(--color-white)" }}>
        
        {/* Testimonials Hero */}
        <section style={testiHeroStyles.banner}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={testiHeroStyles.ratingBadge}>
              <span style={{ color: "#f59e0b", fontSize: "1.2rem" }}>★★★★★</span>
              <span style={{ marginLeft: "8px", fontWeight: "bold", letterSpacing: "1px", color: "#b45309" }}>5.0 Average Rating</span>
            </div>
            <h1 style={testiHeroStyles.title}>Smiles That <span style={{ color: "var(--color-primary)" }}>Speak For Us</span></h1>
            <p style={testiHeroStyles.subtitle}>
              Over the past 17 years, Dr. Nilam Gada has expertly restored the health and confidence of thousands. 
              Read their genuine stories and see exactly why Dental Spark is Mumbai's most trusted clinic.
            </p>
          </div>
          <div style={testiHeroStyles.bgShape}></div>
        </section>

        {/* Aggregated Trust Stats */}
        <section style={{ backgroundColor: "#f8fafc", padding: "var(--spacing-16) 0", borderBottom: "1px solid #e2e8f0", borderTop: "1px solid rgba(0,0,0,0.02)" }}>
          <div className="container">
             <div style={testiHeroStyles.statsGrid}>
               <div style={testiHeroStyles.statCard}>
                 <h3 style={testiHeroStyles.statNumber}>17+</h3>
                 <p style={testiHeroStyles.statLabel}>Years Experience</p>
               </div>
               <div style={testiHeroStyles.statCard}>
                 <h3 style={testiHeroStyles.statNumber}>10k+</h3>
                 <p style={testiHeroStyles.statLabel}>Smiles Restored</p>
               </div>
               <div style={testiHeroStyles.statCard}>
                 <h3 style={testiHeroStyles.statNumber}>100%</h3>
                 <p style={testiHeroStyles.statLabel}>Painless Care</p>
               </div>
               <div style={testiHeroStyles.statCard}>
                 <h3 style={testiHeroStyles.statNumber}>70+</h3>
                 <p style={testiHeroStyles.statLabel}>5-Star Google Reviews</p>
               </div>
             </div>
          </div>
        </section>

        {/* The Infinite Slider & The Submission Form */}
        <div style={{ marginTop: "calc(var(--spacing-16) * -1)" }}>
          {/* Testimonials component already has its own generous padding, we overlap it slightly for cohesion */}
          <Testimonials />
        </div>

      </main>
      <Footer />
    </>
  );
}

const testiHeroStyles = {
  banner: {
    backgroundColor: "#ffffff",
    padding: "var(--spacing-10) 0 var(--spacing-16)",
    position: "relative" as const,
    overflow: "hidden",
  },
  ratingBadge: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#fffbeb",
    padding: "0.6rem 1.4rem",
    borderRadius: "100px",
    marginBottom: "1.5rem",
    border: "1px solid #fde68a",
    boxShadow: "0 4px 15px rgba(245, 158, 11, 0.1)",
  },
  title: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    fontWeight: 800,
    marginBottom: "1.2rem",
    lineHeight: 1.1,
    color: "var(--color-dark)",
  },
  subtitle: {
    fontSize: "1.15rem",
    color: "#64748b",
    maxWidth: "750px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  bgShape: {
    position: "absolute" as const,
    top: "-50%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "1000px",
    height: "800px",
    background: "radial-gradient(circle, rgba(14,165,233,0.05) 0%, rgba(14,165,233,0) 60%)",
    zIndex: 1,
    pointerEvents: "none" as const,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
    gap: "3rem",
    textAlign: "center" as const,
  },
  statCard: {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  statNumber: {
    fontSize: "3.5rem",
    fontWeight: 800,
    color: "var(--color-primary)",
    marginBottom: "0.5rem",
    letterSpacing: "-1px",
    textShadow: "0 4px 10px rgba(2, 132, 199, 0.15)",
  },
  statLabel: {
    fontSize: "0.95rem",
    color: "#475569",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
  }
};
