"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import FadeUp from './FadeUp';

const reasons = [
  {
    id: "01",
    title: "One doctor, the whole way.",
    description: "No handoffs. Dr. Nilam plans your treatment, places the implant, and makes the final crown herself. From the first consultation to the result you see, one face, not an assembly line where a surgeon places the implant and someone else finishes the restoration.",
    image: "/dr.jpg"
  },
  {
    id: "02",
    title: "We rebuild bone, even when you were told there is none.",
    description: "Turned away because of missing bone? We grow bone with custom titanium mesh and place implants where others give up.",
    image: "/i1.png"
  },
  {
    id: "03",
    title: "Surgical microscope precision.",
    description: "Dr. Nilam performs procedures under high magnification using a surgical microscope, ensuring less trauma, faster healing, and perfect microscopic fits for your crowns and implants.",
    image: "/i2.png"
  }
];

export default function ReasonsToChoose() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.card}>
          
          {/* Background Images inside Card (Fading based on hover) */}
          <div style={styles.bgWrapper}>
            {reasons.map((reason, i) => (
              <Image
                key={reason.id}
                src={reason.image}
                alt={reason.title}
                fill
                style={{
                  objectFit: "cover", 
                  objectPosition: "center right", 
                  opacity: hoveredIndex === i ? 0.5 : 0,
                  transform: hoveredIndex === i ? "scale(1)" : "scale(1.1)",
                  transition: "opacity 0.6s ease, transform 15s ease-out",
                }}
              />
            ))}
            {/* Gradient overlay to make the left dark and text legible on the right */}
            <div style={styles.gradientOverlay}></div>
          </div>

          <div className="reasons-content" style={styles.content}>
            {/* Left side: Heading */}
            <div style={styles.leftCol}>
              <FadeUp>
                <h2 style={styles.title}>
                  Three reasons to<br />
                  <span style={styles.titleHighlight}>choose us.</span>
                </h2>
              </FadeUp>
            </div>

            {/* Right side: List */}
            <div className="reasons-right" style={styles.rightCol}>
              {reasons.map((reason, index) => (
                <div 
                  key={reason.id} 
                  onMouseEnter={() => setHoveredIndex(index)}
                  style={{
                    ...styles.listItem,
                    paddingTop: index !== 0 ? "2.5rem" : "0",
                    opacity: hoveredIndex === index ? 1 : 0.6,
                    transition: "opacity 0.3s ease",
                    cursor: "default"
                  }}
                >
                  {index !== 0 && (
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: "-2rem",
                      right: 0,
                      height: "16px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                      borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRight: "1px solid rgba(255, 255, 255, 0.15)",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                      maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
                    }}></div>
                  )}
                  <FadeUp delay={index * 0.1}>
                    <div style={styles.itemHeader}>
                      <span style={styles.itemNumber}>{reason.id}</span>
                      <h3 style={styles.itemTitle}>{reason.title}</h3>
                    </div>
                    <p className="reason-desc" style={styles.itemDesc}>{reason.description}</p>
                  </FadeUp>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .reasons-content {
            flex-direction: column !important;
            padding: 3rem 2rem !important;
            gap: 2rem !important;
          }
          .reasons-right {
            gap: 1.5rem !important;
          }
          .reason-desc {
            padding-left: 0 !important;
            margin-top: 0.5rem !important;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "0 0 6rem 0", // No top padding so it sits right under SituationCards
    position: "relative" as const,
    zIndex: 10,
  },
  container: {
    position: "relative" as const,
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  card: {
    position: "relative" as const,
    backgroundColor: "#0a0a0a",
    borderRadius: "32px",
    // Removed overflow: hidden here so position: sticky works on child elements
    boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
    minHeight: "500px",
  },
  bgWrapper: {
    position: "absolute" as const,
    top: 0, right: 0, bottom: 0, left: 0,
    zIndex: 1,
    borderRadius: "32px",
    overflow: "hidden", // Clip the image to the border radius
  },
  gradientOverlay: {
    position: "absolute" as const,
    top: 0, right: 0, bottom: 0, left: 0,
    background: "linear-gradient(90deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 100%)",
  },
  content: {
    position: "relative" as const,
    zIndex: 2,
    display: "flex",
    padding: "5rem",
    gap: "5rem",
  },
  leftCol: {
    flex: "0 0 35%",
    position: "sticky" as const,
    top: "5rem",
    alignSelf: "flex-start",
  },
  title: {
    fontSize: "clamp(2.5rem, 3.5vw, 3.2rem)",
    fontWeight: 700,
    color: "#e8e5dc", // Off-white
    lineHeight: 1.05,
    letterSpacing: "-1.5px",
    margin: 0,
    whiteSpace: "nowrap" as const, // Prevents "Three reasons to" from wrapping
  },
  titleHighlight: {
    color: goldColor,
  },
  rightCol: {
    flex: "1",
    display: "flex",
    flexDirection: "column" as const,
  },
  listItem: {
    position: "relative" as const,
    paddingBottom: "2rem",
  },
  itemHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "0.75rem",
  },
  itemNumber: {
    color: goldColor,
    fontSize: "1rem",
    fontWeight: 700,
    marginTop: "1px",
    minWidth: "24px",
  },
  itemTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
    letterSpacing: "-0.5px",
    lineHeight: 1.2,
  },
  itemDesc: {
    color: "#999",
    fontSize: "0.85rem",
    lineHeight: 1.6,
    margin: 0,
    paddingLeft: "2.5rem", // Align with title text
    maxWidth: "90%",
  }
};
