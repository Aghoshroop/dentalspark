"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const cards = [
  {
    id: "01",
    title: "My teeth are failing and I am tired of patching them",
    subtitle: "Full-mouth restoration / All-on-X \u2192",
    grid: { left: "0%", top: "0%", width: "48%", height: "100%" },
    startTransform: { x: "40vw", y: "10vh", r: "4deg", s: 0.9 },
    zIndex: 5,
    image: "/situations/situation_1.jpg",
    link: "/knowledge/full-mouth-restoration"
  },
  {
    id: "02",
    title: "My denture moves and gets in the way",
    subtitle: "Implant-supported teeth / All-on-4 \u2192",
    grid: { left: "50%", top: "0%", width: "24%", height: "48%" },
    startTransform: { x: "10vw", y: "20vh", r: "-3deg", s: 0.85 },
    zIndex: 4,
    image: "/situations/situation_2.jpg",
    link: "/knowledge/implant-supported-teeth"
  },
  {
    id: "03",
    title: "I lost a single tooth",
    subtitle: "Single-tooth implant \u2192",
    grid: { left: "76%", top: "0%", width: "24%", height: "48%" },
    startTransform: { x: "-10vw", y: "25vh", r: "5deg", s: 0.8 },
    zIndex: 3,
    image: "/situations/situation_3.jpg",
    link: "/knowledge/single-tooth-implant"
  },
  {
    id: "04",
    title: "I was told there is not enough bone",
    subtitle: "Bone reconstruction (titanium mesh) \u2192",
    grid: { left: "50%", top: "52%", width: "24%", height: "48%" },
    startTransform: { x: "10vw", y: "-20vh", r: "-5deg", s: 0.75 },
    zIndex: 2,
    image: "/situations/situation_4.jpg",
    link: "/knowledge/bone-reconstruction"
  },
  {
    id: "05",
    title: "An implant placed elsewhere failed",
    subtitle: "Rescue and redo \u2192",
    grid: { left: "76%", top: "52%", width: "24%", height: "48%" },
    startTransform: { x: "-10vw", y: "-25vh", r: "6deg", s: 0.7 },
    zIndex: 1,
    image: "/situations/situation_5.jpg",
    link: "/knowledge/implant-rescue-redo"
  }
];

export default function SituationCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState({ cards: 0, heading: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Cards progress: Starts later (further up) and completes much faster
      const cardsStart = windowHeight * 0.35; 
      const cardsEnd = windowHeight * 0.05;
      let cp = (cardsStart - rect.top) / (cardsStart - cardsEnd);
      cp = Math.max(0, Math.min(1, cp));

      // Heading progress: Starts much earlier (e.g. 80% down the viewport) and fades in slowly
      const headingStart = windowHeight * 0.8;
      const headingEnd = windowHeight * 0.3;
      let hp = (headingStart - rect.top) / (headingStart - headingEnd);
      hp = Math.max(0, Math.min(1, hp));
      
      setProgress({ cards: cp, heading: hp });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When progress = 1, inverse = 0 (no transform offset)
  // When progress = 0, inverse = 1 (full startTransform offset)
  const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
  
  const easedCardsProgress = easeOutQuart(progress.cards);
  const inverseCards = 1 - easedCardsProgress;

  const easedHeadingProgress = easeOutQuart(progress.heading);
  const inverseHeading = 1 - easedHeadingProgress;

  return (
    <section ref={containerRef} className="situation-section" style={styles.sectionWrapper}>
      <div style={styles.animationContainer}>
        
        <div className="container" style={styles.contentContainer}>
          
          <div style={{
            ...styles.header,
            opacity: progress.heading === 0 ? 0 : progress.heading, // Fades in smoothly proportional to scroll
            transform: `translate3d(${10 * inverseHeading}vw, 0, 0)`,
          }}>
            <p style={styles.eyebrow}>Where do you start?</p>
            <h2 style={styles.title}>
              Find your <span style={{ color: "#bca374" }}>situation.</span>
            </h2>
          </div>

          <div style={styles.cardsGrid}>
            {cards.map((card) => {
              // Interpolate transform
              const tx = `calc(${card.startTransform.x} * ${inverseCards})`;
              const ty = `calc(${card.startTransform.y} * ${inverseCards})`;
              const rot = `calc(${card.startTransform.r} * ${inverseCards})`;
              const scale = 1 - (1 - card.startTransform.s) * inverseCards;

              // Make cards invisible when progress is exactly 0, and fade them in quickly as progress starts
              const cardOpacity = progress.cards === 0 ? 0 : Math.min(1, progress.cards * 4);

              return (
                <Link 
                  href={card.link}
                  key={card.id}
                  className="situation-card"
                  style={{
                    ...styles.card,
                    left: card.grid.left,
                    top: card.grid.top,
                    width: card.grid.width,
                    height: card.grid.height,
                    zIndex: card.zIndex,
                    transform: `translate3d(${tx}, ${ty}, 0) rotate(${rot}) scale(${scale})`,
                    opacity: cardOpacity, 
                    textDecoration: "none"
                  }}
                >
                  <div style={styles.cardNumber}>{card.id}</div>
                  
                  {/* Background Image */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.7,
                    zIndex: 0,
                    transition: "transform 0.5s ease",
                  }} className="card-bg-image"></div>
                  
                  {/* Decorative Gradient Overlay for text readability */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "70%",
                    background: "linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.7) 40%, rgba(17,17,17,0) 100%)",
                    zIndex: 1,
                  }}></div>

                  <div style={styles.cardContent}>
                    <h3 style={{...styles.cardTitle, fontSize: card.id === "01" ? "1.8rem" : "1.2rem"}}>{card.title}</h3>
                    <p style={styles.cardSubtitle}>{card.subtitle}</p>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .situation-card {
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
        }
        
        .situation-card:hover {
          z-index: 10 !important;
        }
        
        .situation-card:hover .card-bg-image {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .cardsGrid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
            height: auto !important;
          }
          .situation-card {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: 400px !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}} />
    </section>
  );
}

const styles = {
  sectionWrapper: {
    position: "relative" as const,
    width: "100%",
    padding: "6rem 0",
  },
  animationContainer: {
    position: "relative" as const,
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
  },
  gridOverlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px",
    pointerEvents: "none" as const,
    zIndex: 1,
  },
  contentContainer: {
    position: "relative" as const,
    zIndex: 2,
    maxWidth: "1400px",
    width: "100%",
    margin: "0 auto",
    padding: "0 4vw",
    display: "flex",
    flexDirection: "column" as const,
    height: "85vh", // Fill most of the viewport
  },
  header: {
    marginBottom: "3rem",
    marginTop: "2rem",
  },
  eyebrow: {
    color: "#bca374",
    fontSize: "0.85rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
    letterSpacing: "0.5px",
    textTransform: "uppercase" as const,
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: 700,
    letterSpacing: "-1.5px",
    color: "#111",
    margin: 0,
  },
  cardsGrid: {
    position: "relative" as const,
    flex: 1,
    width: "100%",
    minHeight: "500px",
  },
  card: {
    position: "absolute" as const,
    background: "linear-gradient(135deg, #222 0%, #111 100%)",
    borderRadius: "24px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.05)",
    display: "flex",
    flexDirection: "column" as const,
  },
  cardNumber: {
    position: "absolute" as const,
    top: "1.5rem",
    right: "1.5rem",
    fontSize: "1rem",
    fontWeight: 600,
    color: "rgba(255,255,255,0.5)",
    zIndex: 2,
  },
  cardContent: {
    position: "absolute" as const,
    bottom: "2rem",
    left: "2rem",
    right: "2rem",
    zIndex: 2,
  },
  cardTitle: {
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 0.5rem 0",
    letterSpacing: "-0.5px",
    lineHeight: 1.1,
  },
  cardSubtitle: {
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.6)",
    margin: 0,
    fontWeight: 500,
  }
};
