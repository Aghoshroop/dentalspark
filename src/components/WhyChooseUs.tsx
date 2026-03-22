export default function WhyChooseUs() {
  const points = [
    {
      title: "Experienced Team",
      desc: "Our highly qualified doctors bring decades of combined experience to ensure you get the best possible care.",
      icon: "👩‍⚕️"
    },
    {
      title: "Modern Equipment",
      desc: "We use the latest dental technology for precise diagnosis and completely painless procedures.",
      icon: "🔬"
    },
    {
      title: "Pain-Free Procedures",
      desc: "Your comfort is our priority. We employ advanced techniques to ensure a relaxing, anxiety-free experience.",
      icon: "✨"
    },
    {
      title: "Affordable Care",
      desc: "Premium dental shouldn't break the bank. We offer transparent pricing and flexible payment options.",
      icon: "💎"
    }
  ];

  return (
    <section className="section section-light" style={{ overflow: "hidden" }}>
      <div className="container" style={whyStyles.container}>
        <div style={whyStyles.header}>
          <p className="tagline">Why Choose Us</p>
          <h2>Trust Your Smile to the Experts</h2>
        </div>
        
        <div style={whyStyles.grid}>
          {points.map((point, i) => (
            <div key={i} className="glass-card" style={whyStyles.card}>
              <div style={whyStyles.icon}>{point.icon}</div>
              <h3 style={whyStyles.title}>{point.title}</h3>
              <p style={whyStyles.desc}>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const whyStyles = {
  container: {
    position: "relative" as const,
    zIndex: 1,
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "var(--spacing-12)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
    gap: "var(--spacing-8)",
  },
  card: {
    backgroundColor: "var(--color-white)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
    border: "1px solid rgba(0,0,0,0.03)",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "var(--spacing-4)",
    backgroundColor: "var(--color-light)",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  title: {
    fontSize: "1.25rem",
    marginBottom: "var(--spacing-2)",
  },
  desc: {
    fontSize: "0.95rem",
    color: "var(--color-gray)",
  }
};
