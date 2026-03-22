"use client";
import { useState } from "react";
import Link from "next/link";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Cosmetic Dentistry");

  const tabs = [
    "Clinical checkup",
    "Cosmetic Dentistry",
    "Oral Treatments"
  ];

  const renderContent = () => {
    return (
      <div className="services-content-box" style={serviceStyles.contentBox}>
        <h3 style={serviceStyles.contentTitle}>
          Dental veneers to smile makeovers, we offer various options to transform your smile.
        </h3>
        <p style={{ color: "var(--color-gray)", marginBottom: "var(--spacing-6)", lineHeight: 1.6 }}>
          Welcome to the world of Dental Spark Care, we have highly advanced tools. 
          Enjoy the latest technology and painless treatments for a beautiful, confident smile.
        </p>
        
        <div style={serviceStyles.featuresGrid}>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> Full Mouth Rehabilitation
          </div>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> Ceramic Veneers / Crowns
          </div>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> Tooth Extraction
          </div>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> Impacted Tooth Extraction
          </div>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> Implant Prosthesis
          </div>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> RCT - Root Canal Treatment
          </div>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> Scaling / Polishing
          </div>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> Wisdom Tooth Extraction
          </div>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> Tooth Air Polishing
          </div>
          <div style={serviceStyles.featureItem}>
            <span style={serviceStyles.checkmark}>✓</span> Tooth Coloured Fillings
          </div>
        </div>
        
        <Link href="#booking" className="btn btn-primary" style={{ marginTop: "var(--spacing-6)" }}>
          Book Appointment
        </Link>
      </div>
    );
  };

  return (
    <section id="services" className="section section-light">
      <div className="container">
        
        <div style={serviceStyles.header}>
          <div style={serviceStyles.taglineWrapper}>
             <span className="tagline" style={{ margin: 0, fontSize: "0.85rem", letterSpacing: "1px" }}>Our Dental Services</span>
          </div>
          <h2>We offer the best <span className="text-primary">Services</span></h2>
        </div>

        <div className="services-split" style={serviceStyles.splitLayout}>
          <style>{`
            @media (max-width: 500px) {
              .services-split {
                flex-direction: column !important;
              }
              .services-sidebar {
                flex: 1 1 100% !important;
                border-left: none !important;
                border-bottom: 2px solid rgba(0,0,0,0.05) !important;
                padding-left: 0 !important;
                padding-bottom: 1rem !important;
                flex-direction: row !important;
                overflow-x: auto !important;
              }
              .services-content-area {
                flex: 1 1 100% !important;
              }
              .services-content-box {
                padding: 1.5rem !important;
              }
              .services-tab-btn {
                font-size: 0.95rem !important;
                padding: 0.8rem 1rem !important;
                white-space: nowrap !important;
              }
            }
          `}</style>
          
          {/* Left Navigation */}
          <div className="services-sidebar" style={serviceStyles.sidebar}>
            {tabs.map(tab => (
              <button 
                key={tab}
                className="services-tab-btn"
                onClick={() => setActiveTab(tab)}
                style={{
                  ...serviceStyles.tabButton,
                  ...(activeTab === tab ? serviceStyles.activeTab : {})
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="services-content-area" style={serviceStyles.contentArea}>
            {renderContent()}
          </div>

        </div>

      </div>
    </section>
  );
}

const serviceStyles = {
  header: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
    marginBottom: "var(--spacing-12)",
  },
  taglineWrapper: {
    backgroundColor: "var(--color-white)",
    padding: "0.4rem 1rem",
    borderRadius: "var(--border-radius-pill)",
    boxShadow: "var(--shadow-sm)",
    marginBottom: "var(--spacing-4)",
    display: "inline-block",
  },
  splitLayout: {
    display: "flex",
    flexDirection: "row" as const,
    gap: "var(--spacing-16)",
    flexWrap: "wrap" as const,
  },
  sidebar: {
    flex: "0 0 250px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
    borderLeft: "2px solid rgba(0,0,0,0.05)",
    paddingLeft: "var(--spacing-4)",
  },
  tabButton: {
    background: "transparent",
    border: "none",
    padding: "1rem var(--spacing-4)",
    textAlign: "left" as const,
    fontSize: "1.05rem",
    fontWeight: 500,
    color: "var(--color-gray)",
    cursor: "pointer",
    borderRadius: "var(--border-radius-md)",
    transition: "all 0.3s ease",
  },
  activeTab: {
    color: "var(--color-primary)",
    backgroundColor: "var(--color-white)",
    boxShadow: "var(--shadow-sm)",
    borderLeft: "3px solid var(--color-primary)",
  },
  contentArea: {
    flex: "1 1 500px",
  },
  contentBox: {
    backgroundColor: "var(--color-white)",
    padding: "var(--spacing-12)",
    borderRadius: "var(--border-radius-lg)",
    boxShadow: "var(--shadow-sm)",
  },
  contentTitle: {
    fontSize: "1.5rem",
    lineHeight: 1.4,
    marginBottom: "var(--spacing-4)",
    color: "var(--color-dark)",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
    gap: "var(--spacing-4)",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: 500,
    fontSize: "0.95rem",
    color: "var(--color-dark)",
  },
  checkmark: {
    color: "var(--color-white)",
    backgroundColor: "var(--color-primary)",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontSize: "0.7rem",
  }
};
