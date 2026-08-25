"use client";
import React from "react";

export default function GlobalFooter() {
  return (
    <footer style={{ backgroundColor: "#151515", padding: "4rem 4vw 2rem 4vw", color: "#888", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 10 }}>
      
      {/* Top Section: 4 Columns */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4rem", width: "100%", maxWidth: "1400px", marginBottom: "6rem" }}>
        
        {/* Column 1: Brand & Badges */}
        <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Logo Placeholder */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img src="/logo.png" alt="Dental Spark Logo" style={{ height: "32px", width: "auto" }} />
            <span style={{ color: "#c4a47c", fontWeight: 700, letterSpacing: "2px", fontSize: "1.2rem", textTransform: "uppercase" }}>
              Dental Spark
            </span>
          </div>
          <p style={{ fontSize: "0.75rem", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600, color: "#999" }}>
            Implant & Cosmetic Dentistry
          </p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <span style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: "20px", padding: "0.4rem 1rem", fontSize: "0.7rem", color: "#aaa" }}>Out of network</span>
            <span style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: "20px", padding: "0.4rem 1rem", fontSize: "0.7rem", color: "#aaa" }}>Financing • EMI Available</span>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <h4 style={{ color: "#c4a47c", fontSize: "0.7rem", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>Explore</h4>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>Dental Implants</a>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>All-on-X</a>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>About Dr. Nilam Gada</a>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>Patient Gallery</a>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>Patient Reviews</a>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>Treatment Cost</a>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>Questions (FAQ)</a>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>Contact</a>
        </div>

        {/* Column 3: Visit */}
        <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <h4 style={{ color: "#c4a47c", fontSize: "0.7rem", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>Visit</h4>
          <p style={{ color: "#fff", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
            Shreepati Castle, 11th Khetwadi Lane<br/>Grant Road, Mumbai 400004
          </p>
          <div style={{ marginTop: "1rem" }}>
            <h5 style={{ color: "#c4a47c", fontSize: "0.65rem", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>Hours</h5>
            <p style={{ color: "#999", fontSize: "0.8rem", margin: 0, fontFamily: "monospace", lineHeight: 1.6 }}>Mon - Sat: 10 AM to 9 PM</p>
            <p style={{ color: "#999", fontSize: "0.8rem", margin: 0, fontFamily: "monospace", lineHeight: 1.6 }}>Sun: Closed</p>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, marginTop: "0.5rem", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
            Get directions →
          </a>
        </div>

        {/* Column 4: Contact */}
        <div style={{ flex: "1 1 250px", display: "flex", flexDirection: "column", gap: "1.2rem", alignItems: "flex-start" }}>
          <h4 style={{ color: "#c4a47c", fontSize: "0.7rem", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>Contact</h4>
          <a href="tel:+919702830848" style={{ color: "#fff", textDecoration: "none", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>+91 9702830848</a>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>Request a callback</a>
          <a href="https://wa.me/919702830848" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>Message us on WhatsApp</a>
          <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>@dentalspark.mumbai</a>
          
          <a 
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              backgroundColor: "#c4a47c",
              color: "#151515",
              padding: "0.8rem 1.5rem",
              borderRadius: "30px",
              fontSize: "0.9rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "transform 0.2s, background-color 0.2s",
              marginTop: "1rem"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#d3b38c"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#c4a47c"}
          >
            Book a consultation
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              width: "20px", 
              height: "20px", 
              borderRadius: "50%", 
              backgroundColor: "rgba(0,0,0,0.08)",
              fontSize: "1rem"
            }}>
              →
            </span>
          </a>
        </div>
      </div>

      {/* Subtle Divider */}
      <div style={{ width: "100%", maxWidth: "1400px", height: "1px", backgroundColor: "rgba(255,255,255,0.05)", marginBottom: "3rem" }}></div>

      {/* Massive Faded Logo Text */}
      <div style={{ 
        width: "100%", 
        overflow: "hidden", 
        display: "flex", 
        justifyContent: "center",
        marginBottom: "2rem"
      }}>
        <h1 style={{ 
          fontSize: "clamp(5rem, 15vw, 15rem)", 
          fontWeight: 800, 
          margin: 0, 
          letterSpacing: "-4px",
          lineHeight: 0.85,
          background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: 0.4,
          whiteSpace: "nowrap"
        }}>
          Dental Spark
        </h1>
      </div>

      {/* Bottom Copyright */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        width: "100%", 
        maxWidth: "1400px", 
        flexWrap: "wrap", 
        gap: "1rem",
        fontSize: "0.75rem",
        color: "#666"
      }}>
        <span>© 2026 Dental Spark. All rights reserved.</span>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#" style={{ color: "#666", textDecoration: "none" }} onMouseEnter={(e) => e.currentTarget.style.color = "#999"} onMouseLeave={(e) => e.currentTarget.style.color = "#666"}>Privacy Policy</a>
          <span>·</span>
          <a href="#" style={{ color: "#666", textDecoration: "none" }} onMouseEnter={(e) => e.currentTarget.style.color = "#999"} onMouseLeave={(e) => e.currentTarget.style.color = "#666"}>HIPAA Notice</a>
        </div>
      </div>

    </footer>
  );
}
