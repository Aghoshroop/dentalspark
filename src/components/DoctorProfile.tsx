"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.08, 1],
    opacity: [0.1, 0.15, 0.1],
    transition: { duration: 4, repeat: Infinity }
  }
};

export default function DoctorProfile() {
  return (
    <section id="dentist" className="section section-white">
      <motion.div 
        className="container" 
        style={docStyles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        <motion.div style={docStyles.imageWrapper} variants={itemVariants}>
          <motion.div style={docStyles.imageBlob} variants={pulseVariants} animate="pulse"></motion.div>
          <Image 
            src="/dr.jpg"
            alt="Dr. Nilam Gada"
            width={450}
            height={600}
            style={docStyles.image}
          />
          <motion.div 
            style={docStyles.floatingBadge}
            whileHover={{ scale: 1.05 }}
          >
            <div style={docStyles.stars}>⭐⭐⭐⭐⭐</div>
            <strong style={{ display: 'block', color: 'var(--color-dark)' }}>Top Rated Dentist</strong>
          </motion.div>
        </motion.div>

        <div style={docStyles.content}>
          <motion.div variants={itemVariants} style={docStyles.taglineWrapper}>
             <span className="tagline" style={{ margin: 0, fontSize: "0.85rem", letterSpacing: "1px" }}>Our Expert Dentist</span>
          </motion.div>
          <motion.h2 variants={itemVariants}>Dr. Nilam Gada</motion.h2>
          <motion.h4 variants={itemVariants} style={docStyles.role}>BDS - Dental Surgeon, Implantologist</motion.h4>
          
          <motion.div variants={itemVariants} style={docStyles.badge}>
            <strong>17 Years Experience</strong>
          </motion.div>
          
          <motion.p variants={itemVariants} style={{ marginTop: "1rem" }}>
            The DENTAL Spark is Dr. NILAM GADA's private practice in Grant Road West running successfully since almost a decade. We emphasise in giving our patients a relaxed, informed and pain free dental experience.
          </motion.p>
          <motion.p variants={itemVariants}>
            Dr. Nilam offers a wide range of services with specializations in various areas like Implants, Cosmetic, Orthodontic and Pediatric dentistry at affordable rates with high quality care. The clinic is truly a one stop solution for all your dental needs. The clinic is open throughout the day to accomodate you as per your convenience of schedule around work and home chores.
          </motion.p>

          <motion.div variants={itemVariants} style={docStyles.statsContainer}>
            <div>
              <h3 style={{color:"var(--color-primary)", margin:0}}>100%</h3>
              <p style={{fontSize:"0.9rem", margin:0}}>Positive (72 votes)</p>
            </div>
            <div>
              <h3 style={{color:"var(--color-primary)", margin:0}}>72+</h3>
              <p style={{fontSize:"0.9rem", margin:0}}>Patient Stories</p>
            </div>
            <div>
              <h3 style={{color:"var(--color-primary)", margin:0}}>17</h3>
              <p style={{fontSize:"0.9rem", margin:0}}>Years Exp.</p>
            </div>
          </motion.div>
        </div>
        
      </motion.div>
    </section>
  );
}

const docStyles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
    gap: "var(--spacing-16)",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column" as const,
  },
  taglineWrapper: {
    backgroundColor: "var(--color-light)",
    padding: "0.4rem 1rem",
    borderRadius: "var(--border-radius-pill)",
    marginBottom: "var(--spacing-2)",
    width: "fit-content",
  },
  role: {
    color: "var(--color-accent)",
    fontWeight: 600,
    marginBottom: "var(--spacing-4)",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "var(--color-light)",
    padding: "0.5rem 1rem",
    borderRadius: "var(--border-radius-pill)",
    color: "var(--color-primary-dark)",
    width: "fit-content",
    border: "1px solid rgba(2, 132, 199, 0.2)"
  },
  statsContainer: {
    display: "flex",
    gap: "var(--spacing-8)",
    marginTop: "var(--spacing-6)",
    paddingTop: "var(--spacing-6)",
    borderTop: "1px solid rgba(0,0,0,0.05)",
  },
  imageWrapper: {
    position: "relative" as const,
    display: "flex",
    justifyContent: "center",
  },
  imageBlob: {
    position: "absolute" as const,
    width: "100%",
    height: "100%",
    backgroundColor: "var(--color-accent)",
    opacity: 0.1,
    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    top: 0,
    left: 0,
    transform: "scale(1.05)",
    zIndex: 0,
  },
  image: {
    borderRadius: "var(--border-radius-lg)",
    boxShadow: "var(--shadow-lg)",
    position: "relative" as const,
    zIndex: 1,
    objectFit: "cover" as const,
  },
  floatingBadge: {
    position: "absolute" as const,
    bottom: "10%",
    right: "-5%",
    backgroundColor: "var(--color-white)",
    padding: "1rem 1.5rem",
    borderRadius: "var(--border-radius-md)",
    boxShadow: "var(--shadow-lg)",
    zIndex: 2,
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.25rem",
  },
  stars: {
    fontSize: "0.8rem",
    letterSpacing: "2px",
  }
};
