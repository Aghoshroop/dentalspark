"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we are past the top to apply a subtle shadow
      setScrolled(currentScrollY > 20);

      // Smart hide logic: Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true); // Scrolling down
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false); // Scrolling up
      }
      
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

  return (
    <>
      <header 
        className={`header ${scrolled ? "scrolled" : ""}`} 
        style={{
          ...headerStyles.header,
          transform: isHidden ? "translateY(-100%)" : "translateY(0)",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div className="container" style={headerStyles.container}>
          <Link href="/" className="logo" style={{ textDecoration: "none", ...headerStyles.logo }}>
            <span className="logo-icon-mobile" style={headerStyles.logoIcon}>🦷</span>
            <span className="logo-text-mobile" style={headerStyles.logoText}>Dental<span className="text-primary" style={{ fontWeight: 800 }}>Spark</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <nav className="nav" style={headerStyles.nav}>
              {navLinks.map((link) => {
                // Special case for root "/" to only match exactly, otherwise /about would highlight both
                const isActive = link.path === "/" ? pathname === "/" : pathname?.startsWith(link.path);
                
                return (
                  <Link 
                    key={link.path} 
                    href={link.path} 
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="cta">
              <Link href="#booking" className="btn btn-primary" style={{ padding: "0.6rem 1.5rem", borderRadius: "100px" }}>
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button 
             className="hamburger-btn"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             aria-label="Toggle Menu"
          >
             <span className={`hamburger-line ${isMobileMenuOpen ? "open-1" : ""}`}></span>
             <span className={`hamburger-line ${isMobileMenuOpen ? "open-2" : ""}`}></span>
             <span className={`hamburger-line ${isMobileMenuOpen ? "open-3" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
           <nav className="mobile-nav">
             {navLinks.map((link) => {
                const isActive = link.path === "/" ? pathname === "/" : pathname?.startsWith(link.path);
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
             <Link href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary" style={{ display: "block", textAlign: "center", width: "100%", padding: "1rem" }}>
               Book Appointment
             </Link>
           </div>
        </div>
      </header>

      {/* Embedded CSS for professional hover animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .nav-link {
          position: relative;
          color: var(--color-dark);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
          letter-spacing: 0.3px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0px;
          left: 50%;
          background-color: var(--color-primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
          border-radius: 2px;
          opacity: 0;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-link:hover::after {
          width: 100%;
          opacity: 1;
        }

        .nav-link.active {
          color: var(--color-primary);
          font-weight: 600;
        }

        .nav-link.active::after {
          width: 100%;
          opacity: 1;
        }

        /* Mobile Menu Styles */
        @media (min-width: 901px) {
          .hamburger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          
          .hamburger-btn { 
            display: flex; 
            flex-direction: column; 
            justify-content: space-between; 
            width: 32px; 
            height: 22px; 
            background: transparent; 
            border: none; 
            cursor: pointer; 
            z-index: 1002;
            padding: 0;
          }
          
          .hamburger-line {
            width: 100%;
            height: 3px;
            background-color: var(--color-dark);
            border-radius: 10px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: left center;
          }
          
          .open-1 { transform: rotate(45deg); width: 28px; }
          .open-2 { opacity: 0; }
          .open-3 { transform: rotate(-45deg); width: 28px; }

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
            font-size: 1.3rem;
            font-weight: 600;
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
        
        @media (max-width: 320px) {
          .logo-text-mobile {
            font-size: 1.15rem !important;
          }
          .logo-icon-mobile {
            font-size: 1.3rem !important;
          }
          .btn-primary {
            font-size: 0.9rem !important;
            padding: 0.8rem 1rem !important;
          }
        }
      `}} />
    </>
  );
}

const headerStyles = {
  header: {
    padding: "1rem 0",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    backgroundColor: "var(--color-white)", // Added background to ensure it acts as a solid navbar when sticky
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoIcon: {
    fontSize: "1.8rem",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "var(--color-dark)",
  },
  nav: {
    display: "flex",
    gap: "var(--spacing-8)",
  },
};
