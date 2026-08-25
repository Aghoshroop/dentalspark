"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // If splash is skipped, animate immediately
    if (sessionStorage.getItem("splash_seen")) {
      setMounted(true);
    } else {
      // Listen for splashEnded event
      const handleSplashEnded = () => setMounted(true);
      window.addEventListener("splashEnded", handleSplashEnded);
      
      // Fallback in case event is missed
      const fallbackTimer = setTimeout(() => setMounted(true), 6500);

      return () => {
        window.removeEventListener("splashEnded", handleSplashEnded);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax scale and blur based on scroll position relative to viewport height
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const progress = Math.min(1, Math.max(0, scrollY / windowHeight));
  
  const scale = 1 + (progress * 0.1); // Expands slowly from 1 to 1.1
  const blur = progress * 3; // Blurs slightly up to 3px

  return (
    <section style={styles.wrapper}>
      {/* Background Image & Gradient */}
      <div style={{
        ...styles.bgWrapper,
        transform: `scale(${scale})`,
        filter: `blur(${blur}px)`,
        transition: "transform 0.1s ease-out, filter 0.1s ease-out"
      }}>
        <Image
          src="/h1.png"
          alt="Dental Background"
          fill
          style={{ objectFit: "cover", objectPosition: "center right" }}
          priority
        />
        {/* Stronger gradient: Solid black on the left, fading to transparent on the right */}
        <div style={styles.gradientOverlay} />
      </div>

      <div className="hero-container" style={styles.container}>
        {/* Left Content */}
        <div className="hero-left" style={{ ...styles.content, opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          
          <div style={styles.eyebrow}>
            Advanced Dental Care • Grant Road (W), Mumbai
          </div>
          
          <h1 style={styles.headline}>
            A Permanent Smile,<br />
            <span style={styles.headlineItalic}>Rebuilt by</span><br />
            <span style={styles.headlineItalic}>One Dentist.</span>
          </h1>
          
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.dash}>—</span>
              Full-arch implants and advanced bone reconstruction.
            </li>
            <li style={styles.listItem}>
              <span style={styles.dash}>—</span>
              Planned digitally, placed with a surgical guide.
            </li>
            <li style={styles.listItem}>
              <span style={styles.dash}>—</span>
              One doctor with you, from the first consultation to the final tooth.
            </li>
          </ul>
          
          <div style={styles.ctaRow}>
            <Link href="#booking" style={styles.ctaButton}>
              Book Your Free Implant Consultation &rarr;
            </Link>
            <a href="tel:+919702830848" style={styles.phoneLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#c0a062" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call +91 97028 30848
            </a>
          </div>
        </div>

        {/* Right Content: Doctor Card */}
        <div className="hero-right" style={{ ...styles.rightContent, opacity: mounted ? 1 : 0, transition: "all 1s ease 0.3s" }}>
          <div style={styles.doctorCard}>
            <div style={styles.doctorHeader}>
              <div style={styles.doctorLogo}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h4 style={styles.doctorName}>Dr. Nilam Gada, <span style={styles.doctorTitleSuffix}>BDS</span></h4>
                <p style={styles.doctorRole}>Founder • The Dental Spark</p>
              </div>
            </div>
            <ul style={styles.doctorList}>
              <li><span style={styles.bullet}>•</span> Cosmetic Dentist & Implantologist</li>
              <li><span style={styles.bullet}>•</span> 14+ Years Clinical Experience</li>
              <li><span style={styles.bullet}>•</span> TEDx Speaker & Therapist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div style={styles.bottomStrip}>
        <div className="hero-container" style={styles.bottomStripContainer}>
          <div style={styles.bottomFeaturesLeft}>
            <div style={styles.bottomFeature}>
              <span style={styles.check}>✓</span> One doctor, start to finish
            </div>
            <div style={styles.bottomFeature}>
              <span style={styles.check}>✓</span> Surgical microscope precision
            </div>
            <div style={styles.bottomFeature}>
              <span style={styles.check}>✓</span> Cosmetic & implant specialist
            </div>
            <div style={styles.bottomFeature}>
              <span style={styles.check}>✓</span> Painless Dentistry
            </div>
          </div>
          
          <div style={styles.googleRating}>
            <svg viewBox="0 0 48 48" width="18" height="18" style={{ marginRight: '4px' }}>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span style={styles.stars}>★★★★★</span>
            <span style={{fontSize: '0.85rem', fontWeight: 600, color: '#fff'}}>4.9 - Google</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-container {
          width: 100%;
          padding: 0 4vw;
        }
        
        .hero-left {
          padding-left: 0;
        }

        @media (max-width: 1024px) {
          .hero-container {
            padding: 0 2rem;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-right {
            justify-content: flex-start !important;
            align-items: flex-start !important;
            margin-top: 2rem;
          }
        }
        @media (max-width: 768px) {
          .hero-bottom-strip {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

const goldColor = "#bca374"; // More refined, muted premium gold

const styles = {
  wrapper: {
    position: "sticky" as const,
    top: 0,
    zIndex: 0,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#050505",
    color: "#ffffff",
    paddingTop: "0", 
    paddingBottom: "60px",
    overflow: "hidden",
  },
  bgWrapper: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  gradientOverlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.85) 35%, rgba(5,5,5,0.3) 65%, rgba(5,5,5,0) 100%)",
  },
  container: {
    position: "relative" as const,
    zIndex: 2,
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    paddingTop: "7rem",
  },
  rightContent: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "100%",
    paddingBottom: "2rem",
  },
  eyebrow: {
    color: goldColor,
    fontSize: "0.65rem",
    textTransform: "uppercase" as const,
    letterSpacing: "2.5px",
    fontWeight: 600,
    marginBottom: "1.5rem",
    opacity: 0.9,
  },
  headline: {
    fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
    lineHeight: 1.05,
    color: "#ffffff",
    margin: 0,
    fontWeight: 700,
    letterSpacing: "-1.5px",
  },
  headlineItalic: {
    fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
    fontStyle: "italic",
    color: goldColor,
    fontWeight: 400,
    letterSpacing: "-0.5px",
    fontSize: "clamp(3.2rem, 6vw, 4.8rem)",
    lineHeight: 1,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "2rem 0 3rem 0",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.2rem",
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    fontSize: "0.95rem",
    color: "#b0b0b0",
    lineHeight: 1.6,
    fontWeight: 300,
    maxWidth: "500px",
  },
  dash: {
    color: goldColor,
    fontWeight: 300,
    opacity: 0.8,
  },
  ctaRow: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    flexWrap: "wrap" as const,
  },
  ctaButton: {
    backgroundColor: goldColor,
    color: "#050505",
    padding: "1.1rem 2.5rem",
    borderRadius: "100px",
    fontWeight: 700,
    fontSize: "0.9rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    letterSpacing: "0.5px",
  },
  phoneLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.95rem",
    transition: "opacity 0.3s ease",
    opacity: 0.9,
  },
  doctorCard: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "12px",
    padding: "1.5rem 1.8rem",
    width: "100%",
    maxWidth: "340px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },
  doctorHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    paddingBottom: "1rem",
  },
  doctorLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  doctorName: {
    color: "#ffffff",
    fontSize: "1.05rem",
    margin: 0,
    fontWeight: 600,
    letterSpacing: "0.5px",
  },
  doctorTitleSuffix: {
    fontSize: "0.75rem",
    color: goldColor,
    fontWeight: 500,
  },
  doctorRole: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "0.75rem",
    margin: "4px 0 0 0",
    letterSpacing: "0.5px",
  },
  doctorList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
    marginTop: "1rem",
  },
  bullet: {
    color: goldColor,
    marginRight: "10px",
    fontSize: "0.7rem",
  },
  bottomStrip: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "1rem 0",
    zIndex: 2,
    backgroundColor: "transparent",
  },
  bottomStripContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: "1rem",
  },
  bottomFeaturesLeft: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap" as const,
  },
  bottomFeature: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.85rem",
    color: "#e0e0e0",
    fontWeight: 300,
  },
  check: {
    color: goldColor,
    fontSize: "0.9rem",
  },
  googleRating: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "rgba(20,20,20,0.8)",
    padding: "0.5rem 1.25rem",
    borderRadius: "100px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  },
  stars: {
    color: goldColor,
    letterSpacing: "3px",
    fontSize: "0.9rem",
  }
};
