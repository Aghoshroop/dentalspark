import React from "react";
import Header from "@/components/Header";
import GlobalFooter from "@/components/GlobalFooter";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "#151515",
        color: "#f4f3ed",
        textAlign: "center",
        padding: "2rem",
        position: "relative"
      }}>
        {/* Soft center glow effect */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(196, 164, 124, 0.08) 0%, rgba(21, 21, 21, 0) 60%)",
          pointerEvents: "none"
        }}></div>

        <h1 style={{ 
          fontSize: "clamp(2.5rem, 5vw, 4rem)", 
          fontWeight: 600, 
          letterSpacing: "-1px", 
          marginBottom: "1.5rem",
          zIndex: 1 
        }}>
          Magical experience <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#c4a47c" }}>coming soon</span>
        </h1>
        <p style={{ 
          fontSize: "1.2rem", 
          color: "#999", 
          maxWidth: "600px", 
          lineHeight: 1.6,
          zIndex: 1 
        }}>
          ...on your agreement.
        </p>
      </main>
      <GlobalFooter />
    </>
  );
}
