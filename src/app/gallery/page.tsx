import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--spacing-28)", minHeight: "80vh", backgroundColor: "#f8fafc" }}>
        
        {/* Gallery Hero Banner */}
        <section style={galleryStyles.banner}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <h1 style={galleryStyles.title}>Smile <span style={{ color: "var(--color-primary)" }}>Transformations</span></h1>
            <p style={galleryStyles.subtitle}>
              A picture is absolutely worth a thousand words. Explore our extensive portfolio of life-changing smile makeovers, restorative implants, and detailed cosmetic enhancements.
            </p>
          </div>
          <div style={galleryStyles.bgShape}></div>
        </section>

        {/* Before and After Proof Section */}
        <section style={{ padding: "var(--spacing-20) 0 var(--spacing-16)", backgroundColor: "var(--color-white)", borderBottom: "1px solid rgba(0,0,0,0.02)" }}>
           <div className="container" style={{ textAlign: "center", marginBottom: "var(--spacing-10)" }}>
             <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem", color: "var(--color-dark)" }}>Before & <span style={{ color: "var(--color-primary)" }}>After</span></h2>
             <p style={{ color: "#64748b", maxWidth: "650px", margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.6 }}>
               Drag the slider below to witness the dramatic difference our precise aesthetic and restorative procedures can create.
             </p>
           </div>
           
           <div style={{ maxWidth: "850px", margin: "0 auto" }}>
             {/* Slider holds the comparative imagery */}
             <BeforeAfterSlider />
           </div>
        </section>

        {/* Happy Patients Grid */}
        <section style={{ padding: "var(--spacing-20) 0 0", backgroundColor: "#f8fafc" }}>
           <div className="container" style={{ textAlign: "center", marginBottom: "var(--spacing-12)" }}>
             <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1rem", color: "var(--color-dark)" }}>Faces of <span style={{ color: "var(--color-primary)" }}>Happiness</span></h2>
             <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.6 }}>
               Browse through some of the beautiful, deeply confident smiles we've had the immense privilege of restoring perfectly.
             </p>
           </div>
           
           {/* The standalone Gallery component */}
           <Gallery />
        </section>

      </main>
      <Footer />
    </>
  );
}

const galleryStyles = {
  banner: {
    backgroundColor: "#ffffff",
    padding: "var(--spacing-16) 0 var(--spacing-20)",
    position: "relative" as const,
    overflow: "hidden",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
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
    top: "-30%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "1000px",
    height: "800px",
    background: "radial-gradient(circle, rgba(14,165,233,0.05) 0%, rgba(14,165,233,0) 60%)",
    zIndex: 1,
    pointerEvents: "none" as const,
  },
};
