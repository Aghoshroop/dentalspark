"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import FadeUp from './FadeUp';

const quizData: Record<number, any> = {
  1: {
    indicator: "Question 1",
    progress: 0,
    title: "What brings you in?",
    image: "/dr.jpg",
    imageText: <>A few questions about your teeth,<br />and you will see what likely fits.</>,
    options: [
      { letter: "A", text: "I am missing one tooth", nextStep: 2 },
      { letter: "B", text: "I am missing several or most teeth", nextStep: null },
      { letter: "C", text: "My denture or partial bothers me", nextStep: null },
      { letter: "D", text: "I was told I cannot get implants / not enough bone", nextStep: null },
      { letter: "E", text: "I have a broken, loose or painful tooth", nextStep: null },
      { letter: "F", text: "I want to straighten my teeth", nextStep: null },
      { letter: "G", text: "I want a better-looking smile", nextStep: null },
      { letter: "H", text: "Just a checkup, or I am not sure", nextStep: null },
    ]
  },
  2: {
    indicator: "2 / 4",
    progress: 50,
    title: "Which tooth is it?",
    image: "/before.png", // Using an existing image as placeholder for the patient
    imageText: <>One implant, done right, without<br />filing down healthy teeth.</>,
    options: [
      { letter: "A", text: "A front tooth people can see", nextStep: null },
      { letter: "B", text: "A back tooth", nextStep: null },
      { letter: "C", text: "A few different spots", nextStep: null },
    ]
  }
};

export default function PersonalPlan() {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rotation, setRotation] = useState(0);

  const stepData = quizData[currentStep];

  const handleOptionClick = (nextStep: number | null) => {
    if (nextStep && quizData[nextStep]) {
      setIsAnimating(true);
      setRotation(90); // Rotate out
      
      setTimeout(() => {
        setCurrentStep(nextStep);
        setRotation(-90); // Prepare to rotate in
        
        // Small delay to allow state to commit before animating in
        setTimeout(() => {
          setIsAnimating(false);
          setRotation(0);
        }, 50);
      }, 400); // 400ms duration for the first half of the flip
    } else {
      console.log("Next step not implemented yet");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setRotation(-90); // Rotate out (backwards)
      
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setRotation(90); // Prepare to rotate in (backwards)
        
        setTimeout(() => {
          setIsAnimating(false);
          setRotation(0);
        }, 50);
      }, 400);
    }
  };

  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Header Section */}
        <FadeUp>
          <div style={styles.headerArea}>
            <div style={styles.eyebrow}>60-second check</div>
            <h2 style={styles.heading}>
              Get your personal plan<br />
              in <span style={styles.headingItalic}>60 seconds.</span>
            </h2>
            <p style={styles.subheading}>
              Answer a few questions and see what likely fits your case, and roughly what it would cost.
            </p>
            
            <div style={styles.featuresRow}>
              <span style={styles.featureItem}><span style={styles.check}>✓</span> Takes about a minute</span>
              <span style={styles.featureItem}><span style={styles.check}>✓</span> The consultation is free</span>
              <span style={styles.featureItem}><span style={styles.check}>✓</span> No obligation to book</span>
            </div>
          </div>
        </FadeUp>

        {/* Content Section: 2 Columns */}
        <div className="plan-grid" style={styles.grid}>
          
          {/* Left: Image Card */}
          <div style={{
            ...styles.imageCard,
            transform: `perspective(1000px) rotateY(${rotation}deg)`,
            transition: "transform 0.4s ease-in-out",
          }}>
            <Image
              src={stepData.image}
              alt="Consultation context"
              fill
              style={{ objectFit: "cover" }}
            />
            <div style={styles.imageGradient}></div>
            <div style={styles.imageText}>
              {stepData.imageText}
            </div>
          </div>

          {/* Right: Quiz Interface */}
          <div style={{
            ...styles.quizArea,
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? "translateY(10px)" : "translateY(0)",
            transition: "all 0.4s ease-in-out"
          }}>
            <div style={styles.quizHeader}>
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: `${stepData.progress}%` }}></div>
              </div>
              <span style={styles.questionNumber}>{stepData.indicator}</span>
            </div>
            
            <h3 style={styles.questionTitle}>{stepData.title}</h3>
            
            <div style={styles.optionsList}>
              {stepData.options.map((opt: any) => (
                <button 
                  key={opt.letter}
                  onClick={() => handleOptionClick(opt.nextStep)}
                  onMouseEnter={() => setHoveredOption(opt.letter)}
                  onMouseLeave={() => setHoveredOption(null)}
                  style={{
                    ...styles.optionButton,
                    transform: hoveredOption === opt.letter ? "scale(1.01)" : "scale(1)",
                    boxShadow: hoveredOption === opt.letter ? "0 10px 20px rgba(0,0,0,0.05)" : "none",
                    borderColor: hoveredOption === opt.letter ? goldColor : "rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={{
                    ...styles.letterCircle,
                    backgroundColor: hoveredOption === opt.letter ? goldColor : "#fff",
                    color: hoveredOption === opt.letter ? "#fff" : "#333",
                    borderColor: hoveredOption === opt.letter ? goldColor : "#e0e0e0",
                  }}>
                    {opt.letter}
                  </div>
                  <span style={styles.optionText}>{opt.text}</span>
                </button>
              ))}
            </div>

            {currentStep > 1 && (
              <button 
                onClick={handleBack}
                style={styles.backButton}
              >
                &larr; Back
              </button>
            )}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .plan-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
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
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 4vw",
  },
  headerArea: {
    marginBottom: "4rem",
  },
  eyebrow: {
    color: goldColor,
    fontSize: "0.75rem",
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    fontWeight: 700,
    marginBottom: "1rem",
  },
  heading: {
    fontSize: "clamp(2.5rem, 4vw, 4rem)",
    fontWeight: 700,
    color: "#111",
    lineHeight: 1.05,
    letterSpacing: "-1.5px",
    margin: "0 0 1.5rem 0",
  },
  headingItalic: {
    fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
    fontStyle: "italic",
    color: goldColor,
    fontWeight: 400,
    letterSpacing: "-0.5px",
  },
  subheading: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: 1.6,
    maxWidth: "500px",
    margin: "0 0 2rem 0",
  },
  featuresRow: {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap" as const,
  },
  featureItem: {
    fontSize: "0.85rem",
    color: "#333",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  check: {
    color: goldColor,
    fontWeight: 400,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: "4rem",
    alignItems: "start", // Important for sticky to work correctly
  },
  imageCard: {
    position: "sticky" as const,
    top: "8rem", // Sticks exactly where it should below the header
    width: "100%",
    aspectRatio: "3/4",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  imageGradient: {
    position: "absolute" as const,
    bottom: 0, left: 0, right: 0,
    height: "50%",
    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
    zIndex: 1,
  },
  imageText: {
    position: "absolute" as const,
    bottom: "2rem",
    left: "2rem",
    right: "2rem",
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: 600,
    lineHeight: 1.3,
    zIndex: 2,
    letterSpacing: "-0.5px",
  },
  quizArea: {
    display: "flex",
    flexDirection: "column" as const,
    paddingTop: "1rem", // align slightly with image
  },
  quizHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
  },
  progressContainer: {
    flex: 1,
    height: "2px",
    backgroundColor: "rgba(0,0,0,0.1)",
    position: "relative" as const,
  },
  progressBar: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: goldColor,
    transition: "width 0.4s ease",
  },
  questionNumber: {
    fontSize: "0.75rem",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    color: "#777",
    fontWeight: 600,
  },
  questionTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#111",
    marginBottom: "2rem",
    letterSpacing: "-1px",
  },
  optionsList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  },
  optionButton: {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    width: "100%",
    padding: "1rem 1.5rem",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.05)",
    borderRadius: "16px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textAlign: "left" as const,
  },
  letterCircle: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    border: "1px solid #e0e0e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.75rem",
    fontWeight: 600,
    transition: "all 0.2s ease",
  },
  optionText: {
    fontSize: "1rem",
    color: "#333",
    fontWeight: 500,
  },
  backButton: {
    marginTop: "2rem",
    background: "transparent",
    border: "none",
    color: "#777",
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: "0.5rem 0",
    transition: "color 0.2s ease",
  }
};
