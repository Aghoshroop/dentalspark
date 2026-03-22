import Image from "next/image";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400", // Woman big smile
    "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400", // Man big smile
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400", // Woman smiling straight
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400", // Man smiling straight
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400", // Woman laughing/smiling loud
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400", // Man big smile
  ];

  return (
    <section className="section section-white">
      <div className="container" style={galleryStyles.container}>
        <div style={galleryStyles.header}>
          <div style={galleryStyles.taglineWrapper}>
             <span className="tagline" style={{ margin: 0, fontSize: "0.85rem", letterSpacing: "1px" }}>Smiles We've Transformed</span>
          </div>
          <h2>Our Happy <span className="text-primary">Patients</span></h2>
          <p style={{ color: "var(--color-gray)", maxWidth: "500px", margin: "1rem auto 0" }}>
            Witness the beautiful, confident smiles of our patients after their successful treatments at Dental Spark.
          </p>
        </div>
        
        <style>{`
          @media (max-width: 400px) {
            .gallery-image-wrap {
              height: 180px !important;
            }
          }
        `}</style>

        <div style={galleryStyles.grid}>
          {images.map((img, idx) => (
            <div key={idx} className="gallery-image-wrap" style={galleryStyles.imageWrap}>
              <Image 
                src={img} 
                alt={`Happy patient ${idx + 1}`} 
                fill 
                style={galleryStyles.image} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div style={galleryStyles.overlay}>
                <span style={galleryStyles.icon}>⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const galleryStyles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-12)",
  },
  header: {
    textAlign: "center" as const,
  },
  taglineWrapper: {
    backgroundColor: "var(--color-light)",
    padding: "0.4rem 1rem",
    borderRadius: "var(--border-radius-pill)",
    boxShadow: "var(--shadow-sm)",
    marginBottom: "var(--spacing-4)",
    display: "inline-block",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
    gap: "var(--spacing-4)",
    gridAutoFlow: "dense",
  },
  imageWrap: {
    position: "relative" as const,
    width: "100%",
    height: "250px",
    borderRadius: "var(--border-radius-md)",
    overflow: "hidden",
    boxShadow: "var(--shadow-sm)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  image: {
    objectFit: "cover" as const,
  },
  overlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(2, 132, 199, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  icon: {
    fontSize: "2rem",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
  }
};
