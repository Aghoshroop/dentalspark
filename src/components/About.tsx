import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section section-white">
      <div className="container" style={aboutStyles.container}>
        <div style={aboutStyles.imageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
            alt="Dental Spark Professionals"
            width={500}
            height={600}
            style={aboutStyles.image}
          />
          <div style={aboutStyles.experienceBadge} className="glass-card">
            <h2 style={{ margin:0, color:"var(--color-primary)", fontSize:"2.5rem" }}>10+</h2>
            <p style={{ margin:0, fontWeight: 600 }}>Years of Excellence</p>
          </div>
        </div>

        <div style={aboutStyles.contentWrapper}>
          <p className="tagline">About Dental Spark</p>
          <h2>We Provide Advanced Dental Care with a Gentle Touch</h2>
          <p>
            At Dental Spark, we believe that a healthy smile is a beautiful smile. Our clinic is equipped with the latest technology and a team of experienced professionals dedicated to giving you the best possible care in a comfortable environment.
          </p>
          
          <div style={aboutStyles.featureList}>
            <FeatureItem title="Experienced Professionals" desc="Top-tier dentists specialized in various fields." />
            <FeatureItem title="Patient-First Approach" desc="Your comfort and goals are our top priority." />
            <FeatureItem title="Modern Equipment" desc="State-of-the-art tools for precise, painless procedures." />
            <FeatureItem title="Hygiene-Focused" desc="Strict sterilization protocols for your safety." />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div style={aboutStyles.featureItem}>
      <div style={aboutStyles.iconBox}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:"var(--color-white)"}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>
      <div>
        <h4 style={{ margin:0, marginBottom:"0.25rem" }}>{title}</h4>
        <p style={{ margin:0, fontSize:"0.9rem" }}>{desc}</p>
      </div>
    </div>
  )
}

const aboutStyles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
    gap: "var(--spacing-16)",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative" as const,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    borderRadius: "var(--border-radius-lg)",
    boxShadow: "var(--shadow-md)",
    width: "100%",
    height: "auto",
    objectFit: "cover" as const,
  },
  experienceBadge: {
    position: "absolute" as const,
    bottom: "-20px",
    right: "-20px",
    textAlign: "center" as const,
    padding: "var(--spacing-6)",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-4)",
  },
  featureList: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "var(--spacing-6)",
    marginTop: "var(--spacing-6)",
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "var(--spacing-4)",
  },
  iconBox: {
    width: "48px",
    height: "48px",
    minWidth: "48px",
    borderRadius: "50%",
    backgroundColor: "var(--color-primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(2, 132, 199, 0.3)",
  }
};
