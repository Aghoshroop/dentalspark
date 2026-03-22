"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const floatVariants: Variants = {
  float: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity }
  }
};

const floatDelayedVariants: Variants = {
  float: {
    y: [0, -20, 0],
    transition: { duration: 5, repeat: Infinity, delay: 1 }
  }
};

export default function Hero() {
  return (
    <section className="section" style={heroStyles.wrapper}>
      <style>{`
        @media (max-width: 768px) {
          .hero-container-mobile {
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            position: relative;
            min-height: 60vh;
          }
          .hero-img-mobile {
            position: absolute !important;
            top: 0; left: 0; right: 0; bottom: 0;
            width: 100% !important;
            height: 100% !important;
            opacity: 0.35 !important;
            z-index: 0 !important;
          }
          .hero-content-mobile {
            position: relative;
            z-index: 2 !important;
            text-align: center;
            align-items: center !important;
            width: 100%;
          }
          .hero-tagline-mobile {
            margin: 0 auto;
          }
          .hero-mini-mobile {
            justify-content: center;
          }
          .hero-cta-mobile {
            justify-content: center;
          }
          .hero-badge-mobile {
            display: none !important;
          }
        }
      `}</style>
      <div className="container hero-container-mobile" style={heroStyles.container}>
        
        {/* Left Image (Doctor) */}
        <motion.div 
          className="hero-img-mobile"
          style={heroStyles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div variants={floatVariants} animate="float" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "flex-end" }}>
            <Image 
              src="/h3.png" 
            alt="Female Dentist"
            width={500}
            height={600}
            style={heroStyles.mainImage}
            priority
          />
          </motion.div>
          <motion.div 
            className="hero-badge-mobile"
            style={heroStyles.floatingBadge}
            variants={floatDelayedVariants}
            animate="float"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <div style={heroStyles.iconCircle}>🦷</div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="hero-content-mobile"
          style={heroStyles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="hero-tagline-mobile" variants={itemVariants} style={heroStyles.taglineWrapper}>
            <span style={{ fontSize: "1.2rem" }}>✓</span>
            <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--color-dark)" }}>Best Dental Care</span>
          </motion.div>
          <motion.h1 variants={itemVariants} style={heroStyles.headline}>
            Healthy teeth <br/>is <span className="text-secondary" style={{color: "var(--color-primary)"}}>Wealth</span>
          </motion.h1>
          <motion.p variants={itemVariants} style={heroStyles.subheading}>
            Welcome to Dental Spark where we provide world-class dental treatments and care for your glowing smile. Discover our advanced technology and comfortable environment.
          </motion.p>
          
          <motion.div className="hero-mini-mobile" variants={itemVariants} style={heroStyles.miniImagesRow}>
            <div style={heroStyles.miniImageWrap}>
               <Image src="/h1.png" alt="Clinic 1" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={heroStyles.miniImageWrap}>
               <Image src="/h2.png" alt="Clinic 2" fill style={{ objectFit: 'cover' }} />
            </div>
          </motion.div>

          <motion.div className="hero-cta-mobile" variants={itemVariants} style={heroStyles.ctaRow}>
             <div style={heroStyles.statsBox}>
                <span style={{color: "var(--color-primary)", fontWeight: "bold"}}>17</span> Years Experience
             </div>
             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               <Link href="#booking" className="btn btn-primary">
                  Book Appointment
               </Link>
             </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

const heroStyles = {
  wrapper: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--color-light)",
    paddingTop: "var(--spacing-24)", // offset for fixed header
    overflow: "hidden",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--spacing-16)",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative" as const,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
  },
  mainImage: {
    objectFit: "cover" as const,
    objectPosition: "top center",
    maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
    WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)",
  },
  floatingBadge: {
    position: "absolute" as const,
    right: 0,
    top: "20%",
    backgroundColor: "var(--color-white)",
    padding: "0.5rem",
    borderRadius: "50%",
    boxShadow: "var(--shadow-lg)",
  },
  iconCircle: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid var(--color-light)",
    borderRadius: "50%",
    fontSize: "1.2rem",
  },
  content: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-6)",
  },
  taglineWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "var(--color-white)",
    padding: "0.4rem 1rem",
    borderRadius: "var(--border-radius-pill)",
    width: "max-content",
    boxShadow: "var(--shadow-sm)",
  },
  headline: {
    fontSize: "clamp(3rem, 5vw, 4.5rem)",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    margin: 0,
  },
  subheading: {
    fontSize: "1.1rem",
    color: "var(--color-gray)",
    lineHeight: 1.6,
    maxWidth: "450px",
  },
  miniImagesRow: {
    display: "flex",
    gap: "var(--spacing-4)",
  },
  miniImageWrap: {
    position: "relative" as const,
    width: "120px",
    height: "80px",
    borderRadius: "var(--border-radius-md)",
    overflow: "hidden",
    boxShadow: "var(--shadow-sm)",
  },
  ctaRow: {
    display: "flex",
    alignItems: "center",
    gap: "var(--spacing-8)",
    marginTop: "var(--spacing-4)",
    flexWrap: "wrap" as const,
  },
  statsBox: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.95rem",
    color: "var(--color-dark)",
  }
};
