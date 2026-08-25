import React from 'react';
import Image from 'next/image';

const smallServices = [
  { title: "General Dentistry", count: 5, items: ["Checkups", "Cleanings", "Fillings", "Extractions", "X-Rays"], image: "/after.png" },
  { title: "Restorative", count: 7, items: ["Crowns", "Bridges", "Tooth fillings", "Inlays & onlays", "Dentures"], image: "/g2.png" },
  { title: "Cosmetic", count: 4, items: ["Veneers", "Teeth whitening", "Bonding", "Smile makeover"], image: "/before.png" },
  { title: "Orthodontics", count: 1, items: ["Clear aligners"], image: "/h1.png" },
  { title: "Root Canal", count: 3, items: ["Anterior", "Premolar", "Molar"], image: "/i1.png" },
  { title: "Oral Surgery", count: 4, items: ["Wisdom teeth", "Bone grafting", "Sinus lift", "Extractions"], image: "/i2.png" },
  { title: "Periodontics", count: 4, items: ["Scaling", "Root planing", "Gum grafting", "Crown lengthening"], image: "/before.png" },
  { title: "Sedation", count: 2, items: ["IV Sedation", "Nitrous oxide"], image: "/dr.jpg" },
  { title: "Special & Other", count: 4, items: ["TMD therapy", "Sleep apnea", "Mouthguards", "Emergency"], image: "/g2.png" }
];

export default function AllServices() {
  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.eyebrow}>All services</div>
          <h2 style={styles.heading}>
            The full range of adult dentistry,<br />
            with a focus on implants<br />
            and full-mouth restoration.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="services-grid" style={styles.grid}>
          
          {/* Flagship Card (Full Width) */}
          <div className="service-card flagship" style={{ ...styles.card, ...styles.flagshipCard }}>
            <Image
              src="/dr.jpg"
              alt="Dental Implants"
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%", transition: "transform 0.5s ease" }}
              className="card-bg-img"
            />
            <div style={{...styles.overlay, background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)"}}></div>
            
            <div style={styles.cardContent}>
              <div style={styles.flagshipTag}>Flagship</div>
              
              <div style={styles.flagshipTitleRow}>
                <h3 style={styles.flagshipTitle}>Dental Implants</h3>
                <span style={styles.serviceCount}>&bull; 10 services</span>
              </div>

              <div style={styles.serviceListGrid}>
                <ul style={styles.serviceList}>
                  <li style={styles.serviceListItem}>All-on-4</li>
                  <li style={styles.serviceListItem}>All-on-X</li>
                  <li style={styles.serviceListItem}>Single-tooth implant</li>
                </ul>
                <ul style={styles.serviceList}>
                  <li style={styles.serviceListItem}>Multiple implants</li>
                  <li style={styles.serviceListItem}>Implant bridge</li>
                  <li style={styles.serviceListItem}>Bone grafting</li>
                </ul>
              </div>

              <a href="#" className="viewAllLink">
                View all Dental Implants - 10 &rarr;
              </a>
            </div>
          </div>

          {/* Small Cards */}
          {smallServices.map((service, index) => (
            <div key={index} className="service-card small-card" style={styles.card}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                className="card-bg-img"
              />
              <div style={styles.overlay}></div>
              <div className="hover-dark-overlay" style={styles.hoverDarkOverlay}></div>
              
              <div className="small-card-content" style={styles.smallCardContent}>
                <div style={styles.smallCardHeader}>
                  <h3 style={styles.smallCardTitle}>{service.title}</h3>
                  <span style={styles.serviceCount}>&bull; {service.count} {service.count === 1 ? 'service' : 'services'}</span>
                </div>
                
                <div className="small-card-hidden-list" style={styles.smallCardHiddenList}>
                  <ul style={styles.hoverServiceList}>
                    {service.items.map((item, i) => (
                      <li key={i} className="hover-service-item">
                        {item}
                        <span className="hover-arrow">&rsaquo;</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="viewAllLink" style={{ marginTop: "1rem" }}>
                    View all {service.title} &bull; {service.count} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .service-card {
          cursor: pointer;
        }
        .service-card:hover .card-bg-img {
          transform: scale(1.05) !important;
        }
        .viewAllLink {
          color: #bca374;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: gap 0.2s ease;
        }
        .service-card:hover .viewAllLink {
          gap: 0.8rem;
        }
        
        /* Small Card Hover Animation */
        .small-card-hidden-list {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .small-card:hover .small-card-hidden-list {
          max-height: 350px; /* arbitrary large enough height */
          opacity: 1;
          margin-top: 1.5rem;
        }
        .small-card:hover .hover-dark-overlay {
          opacity: 1 !important;
        }
        
        .hover-service-item {
          color: #fff;
          font-size: 0.85rem;
          font-weight: 400;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 0.4rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: color 0.2s ease;
        }
        .hover-service-item:hover {
          color: #fff;
          font-weight: 500;
        }
        .hover-arrow {
          opacity: 0;
          color: #bca374;
          font-size: 1.2rem;
          line-height: 1;
          transform: translateX(-5px);
          transition: all 0.2s ease;
        }
        .hover-service-item:hover .hover-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .flagship {
            grid-column: 1 / -1 !important;
          }
          .serviceListGrid {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "6rem 0",
    position: "relative" as const,
    zIndex: 10,
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  header: {
    marginBottom: "3rem",
  },
  eyebrow: {
    color: goldColor,
    fontSize: "0.85rem",
    fontWeight: 500,
    marginBottom: "1rem",
  },
  heading: {
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
    fontWeight: 700,
    color: "#111",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
  },
  card: {
    position: "relative" as const,
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    minHeight: "380px",
    height: "100%",
  },
  flagshipCard: {
    gridColumn: "1 / -1",
    aspectRatio: "auto",
    minHeight: "450px",
  },
  overlay: {
    position: "absolute" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)",
    zIndex: 1,
  },
  hoverDarkOverlay: {
    position: "absolute" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.65)",
    zIndex: 1,
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  cardContent: {
    position: "relative" as const,
    zIndex: 2,
    padding: "3rem 4rem",
    height: "100%",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
  },
  flagshipTag: {
    display: "inline-block",
    backgroundColor: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(4px)",
    color: "#fff",
    padding: "0.4rem 1rem",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: 600,
    marginBottom: "2rem",
    width: "fit-content",
  },
  flagshipTitleRow: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
  },
  flagshipTitle: {
    fontSize: "clamp(2rem, 3vw, 3rem)",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
    letterSpacing: "-1px",
  },
  serviceCount: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.9rem",
    fontWeight: 500,
  },
  serviceListGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "3rem",
    maxWidth: "500px",
    marginBottom: "2.5rem",
  },
  serviceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
  },
  serviceListItem: {
    color: "#fff",
    fontSize: "0.95rem",
    fontWeight: 400,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    paddingBottom: "0.75rem",
  },
  smallCardContent: {
    position: "absolute" as const,
    top: 0, left: 0, right: 0, bottom: 0,
    padding: "2rem",
    zIndex: 2,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-end", // Pushes header to bottom by default
  },
  smallCardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  smallCardTitle: {
    color: "#fff",
    fontSize: "1.25rem",
    fontWeight: 700,
    margin: 0,
  },
  smallCardHiddenList: {
    // Styling handled in CSS block for hover state
  },
  hoverServiceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
  }
};
