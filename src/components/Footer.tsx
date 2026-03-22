"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container">
        
        <div style={styles.mainGrid}>
          
          {/* Column 1: Brand & Mission */}
          <div style={styles.brandCol}>
            <Link href="/" style={styles.brandLink}>
              <div style={styles.logoBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <span style={styles.logoText}>Dental<span style={{ color: "var(--color-primary)", fontWeight: 400 }}>Spark</span></span>
            </Link>
            <p style={styles.brandDesc}>
              Advanced, pain-free dentistry specializing in cosmetic enhancements and comprehensive full-mouth clinical rehabilitations.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div style={styles.linkCol}>
            <h4 style={styles.colHeading}>Navigation</h4>
            <nav style={styles.navGrid}>
              <Link href="/about" style={styles.linkItem}>About the Clinic</Link>
              <Link href="/services" style={styles.linkItem}>Our Treatments</Link>
              <Link href="/dentist" style={styles.linkItem}>Meet Dr. Nilam</Link>
              <Link href="/gallery" style={styles.linkItem}>Patient Gallery</Link>
              <Link href="/testimonials" style={styles.linkItem}>Success Stories</Link>
            </nav>
          </div>

          {/* Column 3: Contact details */}
          <div style={styles.contactCol}>
            <h4 style={styles.colHeading}>Contact</h4>
            <div style={styles.contactGroup}>
              <span style={styles.contactLabel}>Address:</span>
              <p style={styles.contactText}>
                Captain House, Bhaji Gali,<br/>
                opp. Flour Mill, Grant Road West,<br/>
                Mumbai 400007
              </p>
            </div>
            <div style={styles.contactGroup}>
              <span style={styles.contactLabel}>Phone:</span>
              <a href="tel:09702830848" style={styles.contactText}>097028 30848</a>
            </div>
            <div style={styles.contactGroup}>
              <span style={styles.contactLabel}>Email:</span>
              <a href="mailto:care@dentalspark.com" style={styles.contactText}>care@dentalspark.com</a>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div style={styles.hoursCol}>
            <h4 style={styles.colHeading}>Operating Hours</h4>
            <div style={styles.hoursList}>
              <div style={styles.hourRow}>
                <span style={styles.day}>Mon - Fri:</span>
                <span style={styles.time}>10:00 AM - 8:00 PM</span>
              </div>
              <div style={styles.hourRow}>
                <span style={styles.day}>Saturday:</span>
                <span style={styles.time}>10:00 AM - 4:00 PM</span>
              </div>
              <div style={styles.hourRow}>
                <span style={styles.day}>Sunday:</span>
                <span style={styles.time}>By Appointment Only</span>
              </div>
            </div>
            <Link href="#booking" style={styles.ctaButton}>
              Schedule Consultation
            </Link>
          </div>

        </div>
      </div>

      {/* Modern Bottom Bar */}
      <div style={styles.bottomBar}>
        <div className="container" style={styles.bottomFlex}>
          <p style={styles.copyright}>&copy; {new Date().getFullYear()} Dental Spark. All rights reserved.</p>
          <div style={styles.legalLinks}>
            <Link href="/" style={styles.legalLink}>Privacy Policy</Link>
            <Link href="/" style={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0f172a", // Clean, modern slate-900
    color: "#94a3b8", // Slate-400
    paddingTop: "clamp(3rem, 8vw, 5rem)",
    borderTop: "1px solid rgba(0,0,0,0.05)",
  },
  mainGrid: {
    display: "flex",
    flexWrap: "wrap" as const,
    justifyContent: "space-between",
    gap: "3rem",
    paddingBottom: "4rem",
  },
  brandCol: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    flex: "2 1 300px",
  },
  brandLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    textDecoration: "none",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    backgroundColor: "var(--color-primary)",
    color: "var(--color-white)",
    borderRadius: "10px",
    boxShadow: "0 4px 14px rgba(2, 132, 199, 0.4)",
  },
  logoText: {
    color: "var(--color-white)",
    fontSize: "1.6rem",
    fontWeight: 700,
    letterSpacing: "-0.5px",
  },
  brandDesc: {
    color: "#94a3b8",
    lineHeight: 1.8,
    fontSize: "0.95rem",
    margin: 0,
    maxWidth: "350px",
  },
  colHeading: {
    color: "var(--color-white)",
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "1.5rem",
    letterSpacing: "0.5px",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  linkCol: {
    display: "flex",
    flexDirection: "column" as const,
    flex: "1 1 150px",
  },
  navGrid: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  },
  linkItem: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  contactCol: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.25rem",
    flex: "1.2 1 200px",
  },
  contactGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.3rem",
  },
  contactLabel: {
    fontSize: "0.8rem",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    color: "#64748b",
    fontWeight: 600,
  },
  contactText: {
    color: "#cbd5e1",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    margin: 0,
    textDecoration: "none",
    transition: "color 0.2s ease",
  },
  hoursCol: {
    display: "flex",
    flexDirection: "column" as const,
    flex: "1.5 1 250px",
  },
  hoursList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.8rem",
    marginBottom: "1.8rem",
  },
  hourRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "0.5rem",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  day: {
    color: "#cbd5e1",
    fontSize: "0.95rem",
    fontWeight: 500,
  },
  time: {
    color: "var(--color-primary)",
    fontSize: "0.95rem",
    fontWeight: 600,
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--color-primary)",
    color: "white",
    padding: "0.8rem 1.5rem",
    borderRadius: "100px",
    fontSize: "0.95rem",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 14px rgba(2, 132, 199, 0.3)",
    width: "fit-content",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "1.5rem 0",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  bottomFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: "1rem",
  },
  copyright: {
    color: "#64748b",
    fontSize: "0.9rem",
    margin: 0,
  },
  legalLinks: {
    display: "flex",
    gap: "1.5rem",
  },
  legalLink: {
    color: "#64748b",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.2s ease",
  },
};
