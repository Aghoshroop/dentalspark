"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Trigger when the 2nd section hits the nav (approx 100vh - 80px)
      const triggerPoint = window.innerHeight - 100;
      setIsPastHero(currentScrollY > triggerPoint);

      // The user requested the nav must NOT hide when scrolling down.
      // So we always keep it visible.
      setIsHidden(false);
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Treatments", path: "/services" },
    { name: "Our Dentist", path: "/dentist" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const goldColor = "#bca374";
  
  // Base states
  const showFloatingNav = isPastHero && !isMobileMenuOpen;
  const textColor = showFloatingNav ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.65)";

  return (
    <>
      <header 
        className={`header ${showFloatingNav ? "floating" : "transparent"}`} 
        style={{
          transform: isHidden ? "translateY(-150%)" : "translateY(0)",
          transition: "transform 0.3s ease, background-color 0s",
          position: "fixed",
          top: showFloatingNav ? "20px" : "0",
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          pointerEvents: isHidden ? "none" : "auto",
        }}
      >
        <div 
          className="header-inner" 
          style={{
            ...headerStyles.container,
            ...(showFloatingNav ? headerStyles.pillContainer : headerStyles.fullContainer)
          }}
        >
          {/* Logo */}
          <Link href="/" className="logo" style={{ textDecoration: "none", ...headerStyles.logo, flex: showFloatingNav ? "none" : 1, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img src="/logo.png" alt="Dental Spark Logo" style={{ height: showFloatingNav ? "24px" : "32px", width: "auto" }} />
            {!showFloatingNav && (
              <span className="logo-text-mobile" style={{ ...headerStyles.logoText, color: "#ffffff" }}>
                Dental<span style={{ color: goldColor, fontWeight: 700 }}>Spark</span>
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-menu" style={{ display: "flex", justifyContent: "center", flex: showFloatingNav ? "none" : 2 }}>
            <nav className="nav" style={headerStyles.nav}>
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className={`nav-link ${showFloatingNav ? "floating-link" : ""}`}
                  style={{ color: textColor }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side CTA */}
          <div className="desktop-menu" style={{ display: "flex", justifyContent: "flex-end", flex: showFloatingNav ? "none" : 1, alignItems: "center" }}>
             {!showFloatingNav ? (
               // Transparent state: Phone Number
               <a href="tel:+919702830848" style={{ ...headerStyles.phoneLink, color: "#ffffff" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={goldColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px" }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +91 97028 30848
               </a>
             ) : (
               // Floating state: Gold Button
               <Link href="#book" style={headerStyles.floatingBtn}>
                 Book a Consult &rarr;
               </Link>
             )}
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button 
             className="hamburger-btn"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             aria-label="Toggle Menu"
          >
             <span className={`hamburger-line ${isMobileMenuOpen ? "open-1" : ""}`} style={{ backgroundColor: "#ffffff" }}></span>
             <span className={`hamburger-line ${isMobileMenuOpen ? "open-2" : ""}`} style={{ backgroundColor: "#ffffff" }}></span>
             <span className={`hamburger-line ${isMobileMenuOpen ? "open-3" : ""}`} style={{ backgroundColor: "#ffffff" }}></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
           <nav className="mobile-nav">
             {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link 
                    key={link.path} 
                    href={link.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
             })}
           </nav>
           <div style={{ marginTop: "2rem", width: "100%" }}>
             <a href="tel:+919702830848" className="btn btn-primary" style={{ display: "block", textAlign: "center", width: "100%", padding: "1rem" }}>
               Call Us Now
             </a>
           </div>
        </div>
      </header>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes popIn {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.85rem;
          transition: color 0.2s ease;
          padding: 0.5rem 0;
          letter-spacing: 0.5px;
        }

        .nav-link:hover {
          color: #ffffff !important;
          opacity: 1;
        }

        .floating-link {
          font-weight: 500;
          letter-spacing: 0px;
        }

        /* Mobile Menu Styles */
        @media (min-width: 950px) {
          .hamburger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        
        @media (max-width: 949px) {
          .desktop-menu { display: none !important; }
          
          .header-inner {
            width: 100% !important;
            padding: 1rem 1.5rem !important;
            border-radius: 0 !important;
            background-color: transparent !important;
            border: none !important;
            box-shadow: none !important;
          }

          .header.floating .header-inner {
            background-color: rgba(30, 30, 30, 0.95) !important;
            backdrop-filter: blur(10px);
          }
          
          .hamburger-btn { 
            display: flex; 
            flex-direction: column; 
            justify-content: space-between; 
            width: 30px; 
            height: 20px; 
            background: transparent; 
            border: none; 
            cursor: pointer; 
            z-index: 1002;
            padding: 0;
          }
          
          .hamburger-line {
            width: 100%;
            height: 2px;
            border-radius: 10px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: left center;
          }
          
          .open-1 { transform: rotate(45deg); width: 26px; }
          .open-2 { opacity: 0; }
          .open-3 { transform: rotate(-45deg); width: 26px; }

          .mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--color-white);
            padding: 2.5rem 2rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-top: 1px solid rgba(0,0,0,0.05);
            z-index: 1001;
            max-height: calc(100vh - 80px);
            overflow-y: auto;
          }
          
          .mobile-menu.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .mobile-nav-link {
            font-size: 1.2rem;
            font-weight: 500;
            color: var(--color-dark);
            text-decoration: none;
            transition: color 0.2s;
            display: block;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(0,0,0,0.03);
          }
          
          .mobile-nav-link:last-child {
            border-bottom: none;
          }
          
          .mobile-nav-link.active {
            color: var(--color-primary);
          }
        }
      `}} />
    </>
  );
}

const headerStyles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  fullContainer: {
    justifyContent: "space-between",
    width: "100%",
    padding: "1.2rem 4vw",
    backgroundColor: "transparent",
    transition: "none",
  },
  pillContainer: {
    justifyContent: "center",
    width: "auto",
    gap: "2.5rem",
    padding: "0.6rem 0.6rem 0.6rem 1.5rem",
    backgroundColor: "rgba(90, 85, 80, 0.85)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "100px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    animation: "popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoText: {
    fontSize: "1.2rem",
    fontWeight: 700,
  },
  nav: {
    display: "flex",
    gap: "2.5rem",
    alignItems: "center",
  },
  phoneLink: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.85rem",
    fontWeight: 600,
    textDecoration: "none",
    letterSpacing: "0.5px",
    transition: "opacity 0.2s",
  },
  floatingBtn: {
    backgroundColor: "#bca374",
    color: "#111",
    padding: "0.7rem 1.5rem",
    borderRadius: "100px",
    fontWeight: 600,
    fontSize: "0.85rem",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    transition: "all 0.2s",
  }
};

