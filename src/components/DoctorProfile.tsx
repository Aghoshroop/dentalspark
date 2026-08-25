"use client";
import React from "react";

export default function DoctorProfile() {
  return (
    <section 
      style={{
        backgroundColor: "#f4f3ed",
        // Graph paper grid pattern
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
        padding: "8rem 0",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4vw", display: "flex", flexWrap: "wrap", gap: "5rem", alignItems: "center" }}>
        
        {/* Left Image Section */}
        <div style={{ flex: "1 1 450px", position: "relative", minHeight: "650px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}>
          <img 
            src="/dr.jpg" 
            alt="Dr. Nilam Gada" 
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} 
          />
          {/* Gradient Overlay for Text */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "2.5rem"
          }}>
            <h3 style={{ color: "#fff", fontSize: "1.8rem", margin: "0 0 0.5rem 0", fontWeight: 500, fontFamily: "var(--font-serif)" }}>
              N. Gada
            </h3>
            <span style={{ color: "#bfa573", fontSize: "0.75rem", letterSpacing: "2px", fontWeight: 600, textTransform: "uppercase" }}>
              Founder - Implant & Cosmetic Dentistry
            </span>
          </div>
        </div>

        {/* Right Content Section */}
        <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          
          <span style={{ color: "#bfa573", fontSize: "0.75rem", letterSpacing: "1px", fontWeight: 700, textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>
            Meet your doctor
          </span>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 700, margin: 0, letterSpacing: "-1.5px", color: "#111", lineHeight: 1 }}>
              Dr. Nilam Gada
            </h2>
            <span style={{ 
              border: "1px solid #ccc", 
              borderRadius: "20px", 
              padding: "0.2rem 0.6rem", 
              fontSize: "0.8rem", 
              fontWeight: 700, 
              color: "#555",
              letterSpacing: "1px"
            }}>
              BDS
            </span>
          </div>

          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.7rem", fontStyle: "italic", color: "#111", lineHeight: 1.3, marginBottom: "3rem", maxWidth: "450px" }}>
            One doctor who carries your case from the first scan to the last crown.
          </p>

          {/* Details Grid */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "2rem",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            padding: "2.5rem 0",
            marginBottom: "3rem"
          }}>
            
            <div>
              <div style={{ color: "#bfa573", fontSize: "0.65rem", letterSpacing: "2px", fontWeight: 700, marginBottom: "0.3rem" }}>EDUCATION</div>
              <div style={{ fontSize: "0.9rem", color: "#333" }}>BDS, Mumbai University</div>
            </div>

            <div>
              <div style={{ color: "#bfa573", fontSize: "0.65rem", letterSpacing: "2px", fontWeight: 700, marginBottom: "0.3rem" }}>EXPERIENCE</div>
              <div style={{ fontSize: "0.9rem", color: "#333" }}>17+ Years in Practice</div>
            </div>

            <div>
              <div style={{ color: "#bfa573", fontSize: "0.65rem", letterSpacing: "2px", fontWeight: 700, marginBottom: "0.3rem" }}>SPECIALIZATION</div>
              <div style={{ fontSize: "0.9rem", color: "#333" }}>Implant & Cosmetic Dentistry</div>
            </div>

            <div>
              <div style={{ color: "#bfa573", fontSize: "0.65rem", letterSpacing: "2px", fontWeight: 700, marginBottom: "0.3rem" }}>APPROACH</div>
              <div style={{ fontSize: "0.9rem", color: "#333" }}>Gentle, Pain-Free Dentistry</div>
            </div>

            <div>
              <div style={{ color: "#bfa573", fontSize: "0.65rem", letterSpacing: "2px", fontWeight: 700, marginBottom: "0.3rem" }}>CLINIC</div>
              <div style={{ fontSize: "0.9rem", color: "#333" }}>The Dental Spark, Grant Road</div>
            </div>

            <div>
              <div style={{ color: "#bfa573", fontSize: "0.65rem", letterSpacing: "2px", fontWeight: 700, marginBottom: "0.3rem" }}>LANGUAGES</div>
              <div style={{ fontSize: "0.9rem", color: "#333" }}>English - Hindi - Gujarati - Marathi</div>
            </div>

          </div>

          {/* Button */}
          <div>
            <a 
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                backgroundColor: "#1a1a1a",
                color: "#fff",
                padding: "1rem 2rem",
                borderRadius: "30px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#333"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1a1a1a"}
            >
              More about the doctor 
              <span style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "24px", 
                height: "24px", 
                borderRadius: "50%", 
                backgroundColor: "rgba(255,255,255,0.1)",
                fontSize: "1.1rem"
              }}>
                →
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
