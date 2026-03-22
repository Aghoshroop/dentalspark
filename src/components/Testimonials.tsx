"use client";
import React, { useState } from "react";

const reviews = [
  { name: "Pratham Maru", text: "Great service went for a dental checkup and cleaning very friendly staff. Made the whole experience absolutely effortless.", rating: 5 },
  { name: "Vinner Synthetics", text: "She gave a perfectly clear explanation of the treatment and its options. Extremely professional and deeply knowledgeable.", rating: 5 },
  { name: "Riya Sharma", text: "Dr. Nilam is incredibly gentle. I had a completely painless root canal and I couldn't be happier with the amazing results!", rating: 5 },
  { name: "Amit Patel", text: "Got my ceramic veneers done here. The meticulous attention to detail is strictly unmatched, totally transformed my smile.", rating: 5 },
  { name: "Sneha Desai", text: "Very clean environment with state of the art equipment. The staff literally makes you feel right at home the moment you walk in.", rating: 5 },
  { name: "Kunal Singh", text: "Highly transparent about the procedure and costs. Easily the most premium dental experience I've ever had in Mumbai.", rating: 5 },
];

// Duplicate the array to create a seamless infinite loop track
const infiniteReviews = [...reviews, ...reviews];

export default function Testimonials({ hideForm = false }: { hideForm?: boolean }) {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [isPaused, setIsPaused] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section className="section" style={{ backgroundColor: "#f8fafc", paddingTop: "var(--spacing-24)", paddingBottom: "var(--spacing-24)", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-16)" }}>
          <div style={{ display: "inline-block", backgroundColor: "var(--color-white)", padding: "0.4rem 1.2rem", borderRadius: "100px", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", marginBottom: "1rem" }}>
            <span style={{ fontSize: "1rem", color: "#f59e0b" }}>★</span>
            <span style={{ fontSize: "0.85rem", letterSpacing: "1.5px", fontWeight: 700, marginLeft: "8px", textTransform: "uppercase" }}>Testimonials</span>
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "1rem", color: "var(--color-dark)", fontWeight: 800 }}>
            What Our <span style={{ color: "var(--color-primary)" }}>Patients Say</span>
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Don't just take our word for it. Read the genuine experiences of the beautiful smiles we have restored over the last 17 years.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Slider Container */}
      <div 
        style={sliderStyles.marqueeWrapper}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="infinite-track"
          style={{
            ...sliderStyles.marqueeTrack,
            animationPlayState: isPaused ? "paused" : "running"
          }}
        >
          {infiniteReviews.map((review, idx) => (
            <div key={idx} className="testimonials-card" style={sliderStyles.card}>
              <div className="testimonials-quote-icon" style={sliderStyles.quoteIcon}>"</div>
              <p className="testimonials-review-text" style={sliderStyles.reviewText}>{review.text}</p>
              
              <div style={sliderStyles.cardFooter}>
                <div style={sliderStyles.avatar}>{review.name.charAt(0)}</div>
                <div>
                  <h4 style={sliderStyles.reviewerName}>{review.name}</h4>
                  <div style={sliderStyles.stars}>{"★".repeat(review.rating)}{"☆".repeat(5-review.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Ratings Aggregator */}
        <div style={sliderStyles.aggregator}>
           {[
             { name: 'Practo', score: '5/5' },
             { name: 'Justdial', score: '4.9/5' },
             { name: 'Google', score: '5/5' }
           ].map((plat, i) => (
             <div key={i} style={sliderStyles.platBadge}>
                <span style={{ color: "#0f172a", fontWeight: 700 }}>{plat.name}</span>
                <span style={{ color: "#f59e0b", fontWeight: 800 }}>★ {plat.score}</span>
             </div>
           ))}
        </div>

        {/* Conditional Review Submission Form */}
        {!hideForm && (
          <div className="testimonials-form-container" style={formStyles.formContainer}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h3 className="testimonials-form-heading" style={{ fontSize: "1.8rem", color: "var(--color-dark)", fontWeight: 700 }}>Share Your Experience</h3>
              <p style={{ color: "#64748b", fontSize: "1rem", marginTop: "0.5rem" }}>
                Leave a rating and help us continue to improve our exceptional care.
              </p>
            </div>
            
            {formState === "success" ? (
               <div style={formStyles.successMsg}>
                 Thank you for your valuable feedback! Your review will be completely published shortly.
               </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="testimonials-form-grid" style={formStyles.formGrid}>
                <div style={formStyles.formGroup}>
                  <label style={formStyles.formLabel}>Your Name</label>
                  <input type="text" placeholder="John Doe" required style={formStyles.formInput} />
                </div>
                <div style={formStyles.formGroup}>
                  <label style={formStyles.formLabel}>Your Rating</label>
                  <select required style={formStyles.formInput}>
                    <option value="">Select Rating...</option>
                    <option value="5">Excellent (5 Stars)</option>
                    <option value="4">Good (4 Stars)</option>
                    <option value="3">Average (3 Stars)</option>
                    <option value="2">Poor (2 Stars)</option>
                    <option value="1">Terrible (1 Star)</option>
                  </select>
                </div>
                <div style={{ ...formStyles.formGroup, gridColumn: "1 / -1" }}>
                  <label style={formStyles.formLabel}>Your Experience</label>
                  <textarea 
                    placeholder="Tell us about your treatment experience with Dr. Nilam Gada..." 
                    required 
                    style={{ ...formStyles.formInput, minHeight: "120px", resize: "vertical" }}
                  />
                </div>
                <button type="submit" disabled={formState === "submitting"} style={formStyles.formSubmitBtn}>
                  {formState === "submitting" ? "Submitting securely..." : "Post Review"}
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollInfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } 
        }
        .infinite-track {
          animation: scrollInfinite 40s linear infinite;
        }
        .infinite-track:hover {
          cursor: crosshair; 
        }
        @media (max-width: 500px) {
          .testimonials-card {
            padding: 1.5rem !important;
            width: 85vw !important;
          }
          .testimonials-quote-icon {
            font-size: 3rem !important;
            top: -15px !important;
            left: 1rem !important;
          }
          .testimonials-review-text {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }
          .testimonials-form-container {
            padding: 1.5rem !important;
            margin-top: var(--spacing-8) !important;
          }
          .testimonials-form-grid {
            display: flex !important;
            flex-direction: column !important;
          }
          .testimonials-form-heading {
            font-size: 1.3rem !important;
          }
        }
      `}} />
    </section>
  );
}

const sliderStyles = {
  marqueeWrapper: {
    width: "100%",
    padding: "3rem 0 1rem",
    position: "relative" as const,
    display: "flex",
    overflow: "hidden", // Prevent horizontal scrolling issues on body
  },
  marqueeTrack: {
    display: "flex",
    gap: "2rem",
    width: "max-content",
    willChange: "transform",
    paddingLeft: "1rem", // minimal initial offset to avoid hard cuts
    paddingRight: "1rem", 
  },
  card: {
    width: "100%", maxWidth: "420px",
    backgroundColor: "var(--color-white)",
    borderRadius: "24px",
    padding: "3rem 2.5rem",
    boxShadow: "0 15px 40px rgba(0,0,0,0.03)",
    textAlign: "left" as const,
    position: "relative" as const,
    border: "1px solid rgba(0,0,0,0.02)",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
  },
  quoteIcon: {
    position: "absolute" as const,
    top: "-30px",
    left: "2rem",
    fontSize: "6rem",
    lineHeight: 1,
    color: "rgba(14, 165, 233, 0.1)",
    fontFamily: "serif",
    pointerEvents: "none" as const,
  },
  reviewText: {
    fontSize: "1.15rem",
    color: "#475569",
    lineHeight: 1.7,
    fontStyle: "italic",
    marginBottom: "2.5rem",
    position: "relative" as const,
    zIndex: 1,
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    borderTop: "1px solid #f1f5f9",
    paddingTop: "1.5rem",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#eff6ff",
    color: "var(--color-primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    fontWeight: 800,
    border: "1px solid rgba(14, 165, 233, 0.15)",
  },
  reviewerName: {
    margin: "0 0 0.25rem 0",
    fontSize: "1rem",
    color: "#0f172a",
    fontWeight: 700,
  },
  stars: {
    color: "#f59e0b",
    fontSize: "0.95rem",
    letterSpacing: "1px",
  },
  aggregator: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap" as const,
    marginTop: "var(--spacing-12)",
  },
  platBadge: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.6rem 1.2rem",
    backgroundColor: "var(--color-white)",
    borderRadius: "100px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
    fontSize: "0.95rem",
  }
};

const formStyles = {
  formContainer: {
    marginTop: "var(--spacing-20)",
    backgroundColor: "var(--color-white)",
    padding: "var(--spacing-12)",
    borderRadius: "24px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.04)",
    maxWidth: "800px",
    margin: "var(--spacing-20) auto 0",
    position: "relative" as const,
  },
  successMsg: {
    textAlign: "center" as const,
    color: "var(--color-primary)",
    fontWeight: 700,
    padding: "3rem",
    fontSize: "1.2rem",
    backgroundColor: "#f0f9ff",
    borderRadius: "16px",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  },
  formLabel: {
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#64748b",
    paddingLeft: "0.25rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
  },
  formInput: {
    padding: "1rem 1.25rem",
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    fontSize: "1rem",
    outline: "none",
    fontFamily: "inherit",
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    transition: "all 0.3s ease",
  },
  formSubmitBtn: {
    gridColumn: "1 / -1",
    padding: "1.2rem",
    borderRadius: "14px",
    fontSize: "1.1rem",
    fontWeight: 700,
    marginTop: "1rem",
    boxShadow: "0 10px 25px rgba(2, 132, 199, 0.25)",
    backgroundColor: "var(--color-primary)",
    color: "var(--color-white)",
    border: "none",
    cursor: "pointer",
  },
};
