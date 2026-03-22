"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="booking" className="section" style={bookingStyles.wrapper}>
      {/* Abstract Background Shapes */}
      <div style={bookingStyles.bgShapeTopLeft}></div>
      <div style={bookingStyles.bgShapeRight}></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={bookingStyles.emergencyGrid}>
          
          {/* Left Content */}
          <div style={bookingStyles.emergencyContent}>
            <div style={bookingStyles.taglineWrapper}>
               <span style={{ fontSize: "1rem", color: "var(--color-primary)" }}>✓</span>
               <span style={{ fontSize: "0.85rem", letterSpacing: "1px", fontWeight: 600 }}>Get In Touch</span>
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "var(--spacing-8)", lineHeight: 1.1 }}>
              We will help in <br/><span style={{ color: "var(--color-primary)" }}>Emergency</span>
            </h2>
            
            <div style={bookingStyles.contactList}>
              <div style={bookingStyles.contactCard}>
                <div style={{...bookingStyles.contactIcon, backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#ef4444"}}>📍</div>
                <div>
                  <h4 style={{margin:0, fontSize: "1.05rem"}}>Dental Spark</h4>
                  <p style={{margin:0, color:"var(--color-gray)", fontSize:"0.85rem"}}>Captain House, Grant Road West, Mumbai</p>
                </div>
              </div>
              
              <div style={bookingStyles.contactCard}>
                <div style={{...bookingStyles.contactIcon, backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10b981"}}>📞</div>
                <div>
                  <h4 style={{margin:0, fontSize: "1.05rem"}}>097028 30848</h4>
                  <p style={{margin:0, color:"var(--color-gray)", fontSize:"0.85rem"}}>Call For emergency</p>
                </div>
              </div>
              
              <div style={bookingStyles.contactCard}>
                <div style={{...bookingStyles.contactIcon, backgroundColor: "rgba(245, 158, 11, 0.1)", color: "#f59e0b"}}>🕒</div>
                <div>
                  <h4 style={{margin:0, fontSize: "1.05rem"}}>Opening Hours</h4>
                  <p style={{margin:0, color:"var(--color-gray)", fontSize:"0.85rem"}}>Mon-Sat: 09:30 AM - 08:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div style={bookingStyles.emergencyImageWrapper}>
            <div style={bookingStyles.imageCircleBg}></div>
            <Image 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
              alt="Nurse"
              width={500}
              height={600}
              style={bookingStyles.nurseImage}
              priority
            />
          </div>
        </div>

        {/* Horizontal Booking Banner */}
        <div style={bookingStyles.bookingBanner}>
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-6)" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>Schedule Your Appointment Online</h3>
            <p style={{ color: "var(--color-gray)", fontSize: "0.95rem" }}>
              Get <strong style={{ color: "var(--color-primary)" }}>10% discount</strong> on your first successful appointment!
            </p>
          </div>
          
          {status === "success" ? (
             <div style={{ textAlign: "center", color: "var(--color-primary)", fontWeight: "bold", padding: "1rem" }}>
               Request successfully sent! Our team will contact you shortly.
             </div>
          ) : (
            <form onSubmit={handleSubmit} style={bookingStyles.detailedForm}>
              <div style={bookingStyles.formGroup}>
                <label style={bookingStyles.formLabel}>Patient Name</label>
                <input type="text" placeholder="John Doe" required style={bookingStyles.formInput} />
              </div>
              <div style={bookingStyles.formGroup}>
                <label style={bookingStyles.formLabel}>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" required style={bookingStyles.formInput} />
              </div>
              <div style={bookingStyles.formGroup}>
                <label style={bookingStyles.formLabel}>Appointment Date</label>
                <input type="date" required style={bookingStyles.formInput} />
              </div>
              <div style={bookingStyles.formGroup}>
                <label style={bookingStyles.formLabel}>Required Service</label>
                <select required style={bookingStyles.formInput}>
                  <option value="">Choose treatment...</option>
                  <option value="consultation">General Consultation</option>
                  <option value="cleaning">Scaling & Polishing</option>
                  <option value="rootcanal">Root Canal Treatment</option>
                  <option value="implants">Implant Prosthesis</option>
                  <option value="other">Other Treatment</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={bookingStyles.formSubmitBtn}>
                {status === "submitting" ? "Processing..." : "Confirm Appointment"}
              </button>
            </form>
          )}

          <div style={bookingStyles.featuresRow}>
            <div style={bookingStyles.featureItem}>
              <span style={{ fontSize: "1.2rem", color: "var(--color-gray)" }}>📋</span>
              <div>
                <strong style={{ display: "block", fontSize: "0.9rem" }}>Corporate Services</strong>
                <span style={{ fontSize: "0.75rem", color: "var(--color-gray)" }}>Special programs for teams.</span>
              </div>
            </div>
            <div style={bookingStyles.featureItem}>
              <span style={{ fontSize: "1.2rem", color: "var(--color-gray)" }}>🚑</span>
              <div>
                <strong style={{ display: "block", fontSize: "0.9rem" }}>Assistance Emergency 24/7</strong>
                <span style={{ fontSize: "0.75rem", color: "var(--color-gray)" }}>We are always here.</span>
              </div>
            </div>
            <div style={bookingStyles.featureItem}>
              <span style={{ fontSize: "1.2rem", color: "var(--color-gray)" }}>🏥</span>
              <div>
                <strong style={{ display: "block", fontSize: "0.9rem" }}>Medical Facilities</strong>
                <span style={{ fontSize: "0.75rem", color: "var(--color-gray)" }}>Modern advanced treatment.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const bookingStyles = {
  wrapper: {
    backgroundColor: "#f4f8fb", // Very light blue/gray background from reference
    position: "relative" as const,
    overflow: "hidden",
    paddingTop: "var(--spacing-16)",
    paddingBottom: "var(--spacing-24)",
  },
  bgShapeTopLeft: {
    position: "absolute" as const,
    top: "-10%",
    left: "-10%",
    width: "50%",
    height: "50%",
    background: "radial-gradient(circle, rgba(2,132,199,0.1) 0%, rgba(2,132,199,0) 70%)",
    zIndex: 0,
  },
  bgShapeRight: {
    position: "absolute" as const,
    bottom: "10%",
    right: "-20%",
    width: "40%",
    height: "60%",
    background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0) 70%)",
    zIndex: 0,
  },
  emergencyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
    gap: "var(--spacing-8)",
    alignItems: "center",
    marginBottom: "var(--spacing-12)",
  },
  emergencyContent: {
    display: "flex",
    flexDirection: "column" as const,
  },
  taglineWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "var(--spacing-2)",
  },
  contactList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-4)",
    maxWidth: "400px",
  },
  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacing-4)",
    backgroundColor: "var(--color-white)",
    padding: "var(--spacing-3) var(--spacing-4)",
    borderRadius: "var(--border-radius-md)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
    border: "1px solid rgba(0,0,0,0.01)",
    transition: "transform 0.3s ease",
  },
  contactIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "var(--border-radius-sm)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.1rem",
  },
  emergencyImageWrapper: {
    position: "relative" as const,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    minHeight: "450px",
  },
  imageCircleBg: {
    position: "absolute" as const,
    width: "100%", maxWidth: "400px",
    height: "400px",
    border: "2px dashed var(--color-primary)",
    opacity: 0.3,
    borderRadius: "50%",
    top: "10%",
    zIndex: 0,
  },
  nurseImage: {
    position: "relative" as const,
    zIndex: 1,
    objectFit: "contain" as const,
    objectPosition: "bottom",
    maskImage: "linear-gradient(to top, transparent 0%, black 10%)",
    WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 10%)",
  },
  bookingBanner: {
    backgroundColor: "var(--color-white)",
    padding: "var(--spacing-12)",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0,0,0,0.02)",
    maxWidth: "1000px",
    margin: "0 auto",
    position: "relative" as const,
    zIndex: 2,
    border: "1px solid rgba(255,255,255,0.5)",
  },
  detailedForm: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "1.5rem",
    maxWidth: "800px",
    margin: "2rem auto 0",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
    textAlign: "left" as const,
  },
  formLabel: {
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#64748b",
    paddingLeft: "0.25rem",
    letterSpacing: "0.5px",
    textTransform: "uppercase" as const,
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
    fontWeight: "bold",
    marginTop: "1.5rem",
    boxShadow: "0 10px 25px rgba(2, 132, 199, 0.25)",
    backgroundColor: "var(--color-primary)",
    color: "var(--color-white)",
    border: "none",
    cursor: "pointer",
  },
  featuresRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "var(--spacing-6)",
    justifyContent: "space-between",
    marginTop: "var(--spacing-12)",
    paddingTop: "var(--spacing-8)",
    borderTop: "1px solid #f1f5f9",
    maxWidth: "850px",
    margin: "3rem auto 0",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    flex: "1 1 200px",
  }
};
