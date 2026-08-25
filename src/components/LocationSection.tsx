"use client";
import React from "react";

const neighborhoods = [
  "Grant Road",
  "Tardeo",
  "Malabar Hill",
  "Kemps Corner",
  "Girgaon",
  "Peddar Road",
  "Marine Lines"
];

export default function LocationSection() {
  return (
    <section 
      style={{
        backgroundColor: "#f4f3ed",
        // Graph paper grid pattern to match DoctorProfile perfectly
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
        padding: "4rem 0 8rem 0",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4vw" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "3rem" }}>
          <span style={{ color: "#bfa573", fontSize: "0.75rem", letterSpacing: "1px", fontWeight: 700, textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>
            Where we are
          </span>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, margin: "0 0 2rem 0", letterSpacing: "-1.5px", color: "#111", lineHeight: 1.1, maxWidth: "800px" }}>
            Patients from across South Mumbai and surrounding areas.
          </h2>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            {neighborhoods.map((n, i) => (
              <div 
                key={i} 
                style={{ 
                  backgroundColor: "#fff", 
                  border: "1px solid rgba(0,0,0,0.1)", 
                  padding: "0.5rem 1.2rem", 
                  borderRadius: "20px", 
                  fontSize: "0.9rem", 
                  color: "#333",
                  fontWeight: 500
                }}
              >
                {n}
              </div>
            ))}
            <span style={{ fontSize: "0.9rem", color: "#666", fontStyle: "italic", marginLeft: "0.5rem" }}>
              & nearby towns
            </span>
          </div>
        </div>

        {/* Map Container */}
        <div style={{ 
          position: "relative", 
          width: "100%", 
          height: "600px", 
          borderRadius: "24px", 
          overflow: "hidden", 
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          backgroundColor: "#e5e3df" 
        }}>
          
          {/* We use an iframe to embed Google Maps, zoomed to Grant Road West */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.136453982512!2d72.8055!3d18.9629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce0d3ef5a5d3%3A0x29205298081368e8!2sThe%20Dental%20Spark!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Info Card Overlay */}
          <div style={{
            position: "absolute",
            bottom: "2rem",
            left: "2rem",
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "2.5rem",
            width: "calc(100% - 4rem)",
            maxWidth: "380px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            zIndex: 10
          }}>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: "#bfa573", fontSize: "0.7rem", letterSpacing: "2px", fontWeight: 700, marginBottom: "0.5rem", textTransform: "uppercase" }}>
                Address
              </div>
              <div style={{ fontSize: "1.1rem", color: "#111", fontWeight: 600, lineHeight: 1.4 }}>
                Shop 4, Pitale Prasad Bldg<br/>
                Sleater Rd, Grant Rd (W)<br/>
                Mumbai - 400007
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <div style={{ color: "#bfa573", fontSize: "0.7rem", letterSpacing: "2px", fontWeight: 700, marginBottom: "0.8rem", textTransform: "uppercase" }}>
                Hours
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem", fontSize: "0.95rem", color: "#333" }}>
                <span>Mon - Sat</span>
                <span>10:00 AM to 8:00 PM</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem", color: "#333" }}>
                <span>Sunday</span>
                <span style={{ color: "#888" }}>By Appointment</span>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=The+Dental+Spark+Grant+Road+Mumbai" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                backgroundColor: "#1a1a1a",
                color: "#fff",
                padding: "0.9rem 1.8rem",
                borderRadius: "30px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s",
                marginBottom: "1.5rem"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#333"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1a1a1a"}
            >
              Get directions
              <span style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "22px", 
                height: "22px", 
                borderRadius: "50%", 
                backgroundColor: "rgba(255,255,255,0.1)",
                fontSize: "1rem"
              }}>
                →
              </span>
            </a>

            <div style={{ borderTop: "1px solid #eee", paddingTop: "1.5rem" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111", letterSpacing: "0.5px" }}>
                +91 97028 30848
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
