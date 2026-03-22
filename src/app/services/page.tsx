import Header from "@/components/Header";
import Footer from "@/components/Footer";

const detailedTreatments = [
  { 
    title: "Full Mouth Rehabilitation", 
    desc: "A highly customized, comprehensive treatment plan designed to completely restore the health, function, and aesthetics of your entire mouth. Ideal for patients with severe wear, missing teeth, or trauma, this procedure systematically rebuilds your bite and smile from the ground up.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Ceramic Veneers & Crowns", 
    desc: "Achieve a flawless, Hollywood-level aesthetic with our premium ceramic veneers and crowns. These custom-crafted, ultra-thin porcelain shells are meticulously bonded to correct discoloration, chips, or strict misalignments, providing highly durable, tooth-colored protection.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Painless Root Canal Treatment", 
    desc: "Save your natural tooth with our heavily advanced, pain-free root canal therapy. Using rotary endodontics and profound targeted anesthesia, we expertly extract infected pulp, thoroughly sanitize the root canal system, and permanently seal it to guarantee long-term relief.",
    image: "https://images.unsplash.com/photo-1598256989800-fea5ce51416e?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Precision Implant Prosthesis", 
    desc: "The ultimate gold standard for replacing missing teeth. We surgically place bio-compatible titanium roots that fuse rigidly with your jawbone, later topped with incredibly natural-looking custom crowns. Implants restore 100% chewing power and permanently prevent bone density loss.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Wisdom Tooth & Impaction Extraction", 
    desc: "Expert surgical removal of problematic, painfully impacted, or partially erupted wisdom teeth. Our highly skilled oral surgeons utilize minimally invasive techniques focused on preserving surrounding bone, ensuring the safest extraction process and the fastest possible recovery times.",
    image: "https://images.unsplash.com/photo-1628177142898-93e46e623636?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Advanced Scaling & Air Polishing", 
    desc: "Experience a pristine, deep clean with our professional ultrasonic scaling and advanced air polishing technology. We systematically obliterate stubborn plaque, hardened calculus, and deep-set stains, instantly improving gum health and leaving a strikingly brighter smile.",
    image: "https://images.unsplash.com/photo-1570624536750-18451f2fde46?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Invisible Tooth Coloured Fillings", 
    desc: "Say goodbye to obvious, visually unappealing silver metal in your mouth. We utilize state-of-the-art composite resin materials that are perfectly color-matched to your natural enamel. These fillings invisibly repair cavities and remain completely unnoticeable when you laugh or speak.",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=800"
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--spacing-28)", paddingBottom: "var(--spacing-24)", minHeight: "80vh", backgroundColor: "#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-20)" }}>
             <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--color-dark)", marginBottom: "1rem" }}>
               Our Dedicated <span style={{ color: "var(--color-primary)" }}>Treatments</span>
             </h1>
             <p style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
               Explore our comprehensive portfolio of specialized dental procedures. Dr. Nilam Gada utilizes over 17 years of expertise to deliver absolute precision and gentle care across every single treatment.
             </p>
          </div>

          <div style={detailStyles.grid}>
            {detailedTreatments.map((treatment, idx) => (
              <div key={idx} style={{ ...detailStyles.card, flexDirection: idx % 2 === 0 ? "row" : "row-reverse" } as React.CSSProperties}>
                <div style={detailStyles.imageWrap}>
                   <img src={treatment.image} alt={treatment.title} style={detailStyles.image} />
                </div>
                <div style={detailStyles.contentBlock}>
                  <div style={detailStyles.numberBadge}>{(idx + 1).toString().padStart(2, '0')}.</div>
                  <h3 style={detailStyles.title}>{treatment.title}</h3>
                  <div style={{ width: "40px", height: "3px", backgroundColor: "var(--color-primary)", marginBottom: "1.5rem" }}></div>
                  <p style={detailStyles.desc}>{treatment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const detailStyles = {
  grid: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-16)",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    display: "flex",
    backgroundColor: "var(--color-white)",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,0.04)",
    border: "1px solid rgba(0,0,0,0.02)",
    minHeight: "400px",
  },
  imageWrap: {
    flex: "0 0 45%",
    position: "relative" as const,
    backgroundColor: "#e2e8f0",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    position: "absolute" as const,
    top: 0,
    left: 0,
  },
  contentBlock: {
    flex: "1",
    padding: "var(--spacing-12) var(--spacing-12)",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
  },
  numberBadge: {
    fontSize: "1rem",
    fontWeight: 800,
    color: "var(--color-primary)",
    letterSpacing: "3px",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1.2rem",
    color: "var(--color-dark)",
    fontWeight: 800,
    lineHeight: 1.1,
  },
  desc: {
    fontSize: "1.1rem",
    color: "#475569",
    lineHeight: 1.8,
  }
};
