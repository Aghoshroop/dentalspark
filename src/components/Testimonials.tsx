"use client";
import React, { useState, useEffect, useRef } from "react";

const baseReviews = [
  { name: "Siddharth J.", time: "2 months ago", text: "Dr. Nilam Gada is extremely professional and kind. She explained my dental problem clearly and made the treatment completely painless. The clinic is clean and well-maintained. Highly recommended for quality dental care.", rating: 5, avatar: "/p1.png" },
  { name: "Satyam Surawase", time: "8 months ago", text: "I had a wonderful experience with Dr. Nilam! She is incredibly kind and super nice, which immediately put me at ease. Her work is top-notch, she is very meticulous and ensures everything is perfect before you leave the chair.", rating: 5, avatar: "/p2.png" },
  { name: "Prakash Gondhali", time: "3 months ago", text: "Dr. Nilam is the best person to go to if you have dental anxiety or fear of dental pain kr treatment. She knows how to take care and keep patient comfortable and do painless procedures. Highly recommend her.", rating: 5, avatar: "/p3.png" },
  { name: "Priya V.", time: "7 months ago", text: "I had an excellent experience at The Dental Spark. I had a follow-up appointment and the wait time was less than half an hour. Booking the appointment was easy and the supervision during my visit was very good.", rating: 5, avatar: "/p1.png" },
  { name: "Sonali Surawase", time: "8 months ago", text: "She is the best dentist, if you want genuine advice and not business doctors who only want to mint, very empathetic.", rating: 5, avatar: "/p2.png" },
  { name: "Shaily Neerav", time: "2 years ago", text: "I had an excellent experience with Dr. Nilam. She took the time to patiently understand my dental issues and didn't rush through the treatment. Instead, she focused on proper healing, ensuring I was comfortable throughout the process.", rating: 5, avatar: "/p3.png" },
  { name: "Amit P.", time: "10 months ago", text: "It was a great relief to see such good hygiene and protocols to be followed at the clinic. I was in deep pain and equally anxious but they are very cautious and follow strict guidelines.", rating: 5, avatar: "/p1.png" },
  { name: "Rohan M.", time: "4 months ago", text: "Very kind and down-to-earth nature she has. Sometimes even if we get late, she manages it. NOW SHE IS MY FAMILY DOCTOR for tooth problems... She is so much focused on her work that I have hardly seen doctors like her.", rating: 5, avatar: "/p2.png" },
  { name: "Vinner Synthetics", time: "1 year ago", text: "Had an exceptional experience at The Dental Spark!! Dr.Nilam is professional and knowledgeable. She gave clear explanation of treatment and its options. Very Gentle and caring ...", rating: 5, avatar: "/p3.png" },
  { name: "Neha K.", time: "6 months ago", text: "Great brains and soft hands, perfect way to describe Dr. Nilam Gada, highly recommend her, trust her with my dental health.", rating: 5, avatar: "/p1.png" }
];

const reviews = [...baseReviews, ...baseReviews]; // Duplicate for infinite scroll

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3500); // Step every 3.5 seconds
    
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    // When we reach the start of the duplicate set
    if (currentIndex === baseReviews.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // Disable transition for snap back
        setCurrentIndex(0); // Snap back to the beginning
      }, 500); // Wait for the 0.5s CSS transition to finish before snapping
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Background is handled by DarkSectionWrapper
  const dynamicTextColor = "#111";
  const dynamicDescColor = "#666";

  return (
    <section 
      ref={sectionRef}
      style={{
        backgroundColor: "transparent",
        padding: "8rem 0 6rem 0",
        position: "relative",
        zIndex: 1, 
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 4vw", overflow: "hidden" }}>
        
        {/* Top Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}>
          <div style={{ maxWidth: "600px" }}>
            <span style={{ color: "#bfa573", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>
              In their words
            </span>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, margin: "0 0 1rem 0", letterSpacing: "-1px", color: dynamicTextColor, lineHeight: 1.1 }}>
              Patients who found the right doctor.
            </h2>
            <p style={{ fontSize: "1.05rem", color: dynamicDescColor, lineHeight: 1.6, margin: 0 }}>
              Real reviews from Google. One doctor plans, places, and restores every case, and it shows in how people talk about the care.
            </p>
          </div>

          {/* Rating Card */}
          <div style={{ backgroundColor: "#ffffff", padding: "2rem", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", minWidth: "260px", flexShrink: 0 }}>
            <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "#111", lineHeight: 1, marginBottom: "0.5rem" }}>5.0</div>
            <div style={{ color: "#f59e0b", fontSize: "1.2rem", letterSpacing: "2px", marginBottom: "1rem" }}>
              ★★★★★
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <span style={{ fontSize: "0.8rem", color: "#666", fontWeight: 600 }}>Read our reviews on Google</span>
            </div>
          </div>
        </div>

        {/* Stepping Slider */}
        <div 
          style={{ width: "100%", overflow: "hidden" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            style={{ 
              display: "flex", 
              gap: "2rem",
              width: "max-content",
              transform: `translateX(calc(-${currentIndex * (360 + 32)}px))`, // 360px width + 32px gap (2rem)
              transition: isTransitioning ? "transform 0.5s ease-in-out" : "none"
            }}
          >
            {reviews.map((r, i) => (
              <div key={i} style={{ 
                width: "360px",
                flexShrink: 0,
                backgroundColor: "#ffffff", 
                padding: "2.5rem 2rem", 
                borderRadius: "16px", 
                boxShadow: "0 10px 40px rgba(0,0,0,0.05)", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between", 
                minHeight: "320px" 
              }}>
                <div>
                  <div style={{ color: "#c8b384", fontSize: "4rem", fontFamily: "serif", lineHeight: 0.5, marginBottom: "2rem" }}>“</div>
                  <p style={{ fontSize: "1.05rem", color: "#444", lineHeight: 1.6, marginBottom: "2rem" }}>
                    {r.text}
                  </p>
                </div>

                <div>
                  <div style={{ color: "#f59e0b", fontSize: "0.9rem", letterSpacing: "1px", marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>★★★★★</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <svg viewBox="0 0 24 24" width="14" height="14">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span style={{ fontSize: "0.75rem", color: "#666", fontWeight: 600 }}>Google</span>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "45px", height: "45px", borderRadius: "50%", backgroundColor: "#eee", overflow: "hidden", position: "relative" }}>
                      <img src={r.avatar} alt={r.name} style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }} onError={(e) => e.currentTarget.style.display = 'none'} />
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e2e8f0", color: "#64748b", fontWeight: "bold", fontSize: "1.2rem", position: "absolute", top: 0, left: 0, zIndex: 0 }}>
                        {r.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 0.2rem 0", fontSize: "0.95rem", color: "#111", fontWeight: 700 }}>{r.name}</h4>
                      <span style={{ fontSize: "0.8rem", color: "#888" }}>{r.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
