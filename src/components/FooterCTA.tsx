"use client";
import React from "react";

export default function FooterCTA() {
  return (
    <section 
      style={{
        backgroundColor: "transparent",
        marginTop: "-4rem", // Pull up over the FAQ section
        position: "relative",
        zIndex: 10
      }}
    >
      <div style={{
        backgroundColor: "#151515",
        borderTopLeftRadius: "80px",
        borderTopRightRadius: "80px",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        padding: "7rem 2rem 5rem 2rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden"
      }}>
        
        {/* Soft top glow effect */}
        <div style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(196, 164, 124, 0.08) 0%, rgba(21, 21, 21, 0) 60%)",
          pointerEvents: "none"
        }}></div>

        <span style={{ color: "#c4a47c", fontSize: "0.65rem", letterSpacing: "1.5px", fontWeight: 700, textTransform: "uppercase", marginBottom: "1.5rem", zIndex: 1 }}>
          Your move
        </span>

        <h2 style={{ 
          fontSize: "clamp(3rem, 5.5vw, 4.5rem)", 
          fontWeight: 600, 
          margin: "0 0 1.5rem 0", 
          letterSpacing: "-1px", 
          color: "#fff", 
          lineHeight: 1.1, 
          maxWidth: "800px", 
          zIndex: 1 
        }}>
          Get your teeth, and<br/>
          your <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#c4a47c", fontWeight: 500 }}>confidence,</span> back.
        </h2>

        <p style={{ fontSize: "1.1rem", color: "#999", lineHeight: 1.6, marginBottom: "2.5rem", maxWidth: "600px", zIndex: 1, letterSpacing: "0.2px" }}>
          Your first consultation is free. No pressure, no padded quotes, an<br/>honest look at your case.
        </p>

        <a 
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.8rem",
            backgroundColor: "#c4a47c",
            color: "#151515",
            padding: "0.9rem 1.8rem",
            borderRadius: "30px",
            fontSize: "0.95rem",
            fontWeight: 700,
            textDecoration: "none",
            transition: "transform 0.2s, background-color 0.2s",
            zIndex: 1,
            marginBottom: "4.5rem"
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#d3b38c"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#c4a47c"}
        >
          Book a consultation
          <span style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            width: "24px", 
            height: "24px", 
            borderRadius: "50%", 
            backgroundColor: "rgba(0,0,0,0.08)",
            fontSize: "1.1rem"
          }}>
            →
          </span>
        </a>

        {/* Divider */}
        <div style={{ width: "100%", maxWidth: "300px", position: "relative", marginBottom: "3.5rem", zIndex: 1 }}>
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }}></div>
          <div style={{ position: "relative", display: "inline-block", backgroundColor: "#151515", padding: "0 1rem", color: "#666", fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase" }}>
            OR
          </div>
        </div>

        <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem", zIndex: 1, letterSpacing: "-0.5px" }}>
          Prefer that we call you?
        </h3>

        {/* Input Form */}
        <form style={{ 
          display: "flex", 
          width: "100%", 
          maxWidth: "420px", 
          backgroundColor: "rgba(255,255,255,0.03)", 
          borderRadius: "40px", 
          padding: "0.35rem 0.35rem 0.35rem 1.5rem", 
          marginBottom: "1.2rem", 
          zIndex: 1, 
          border: "1px solid rgba(255,255,255,0.08)",
          alignItems: "center"
        }}>
          <div style={{ color: "#666", display: "flex", alignItems: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <input 
            type="tel" 
            placeholder="Your phone number" 
            style={{
              flex: 1,
              backgroundColor: "transparent",
              border: "none",
              color: "#fff",
              padding: "0.8rem 1rem",
              fontSize: "0.95rem",
              outline: "none"
            }}
          />
          <button 
            type="button"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#ecebe6",
              color: "#151515",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "30px",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background-color 0.2s",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fff"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#ecebe6"}
          >
            Call me back
            <span style={{ fontSize: "1.1rem", color: "#666", display: "flex", alignItems: "center" }}>→</span>
          </button>
        </form>

        <div style={{ fontSize: "0.75rem", color: "#777", marginBottom: "5rem", zIndex: 1, letterSpacing: "0.3px" }}>
          We will call you back within <span style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: "4px", padding: "0.15rem 0.4rem", color: "#999", marginLeft: "0.2rem" }}>1 business hour</span>
        </div>

        {/* Bottom Contact Links */}
        <div style={{ 
          display: "flex", 
          gap: "1.5rem", 
          alignItems: "center", 
          borderTop: "1px solid rgba(255,255,255,0.04)", 
          paddingTop: "2rem",
          width: "100%",
          maxWidth: "500px",
          justifyContent: "center",
          zIndex: 1
        }}>
          
          <a href="tel:+919702830848" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#bbb", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call (970) 283-0848
          </a>

          <span style={{ color: "rgba(255,255,255,0.1)" }}>•</span>

          <a href="https://wa.me/919702830848" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#bbb", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Message us on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}
