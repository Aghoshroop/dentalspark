"use client";
import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { motion, Variants } from 'framer-motion';

const featureLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const featureRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const zoomVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const swoopFloatVariants: Variants = {
  float: {
    y: [0, -10, 0],
    scale: [1, 1.02, 1],
    transition: { duration: 6, repeat: Infinity }
  }
};

const swoopFloatDelayedVariants: Variants = {
  float: {
    y: [0, 10, 0],
    scale: [1, 1.02, 1],
    transition: { duration: 7, repeat: Infinity, delay: 2 }
  }
};

export default function WeTakeCare() {
  // Using two distinct images for true before/after representation
  const beforeImage = "https://images.unsplash.com/photo-1598256989433-2ba393a54b38?auto=format&fit=crop&q=80&w=800"; 
  const afterImage = "https://images.unsplash.com/photo-1628177142898-93e46e623636?auto=format&fit=crop&q=80&w=800";

  return (
    <section className="section section-white" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Swoosh */}
      <motion.div style={takeStyles.backgroundSwoosh} variants={swoopFloatVariants} animate="float"></motion.div>
      <motion.div style={takeStyles.backgroundSwooshBottom} variants={swoopFloatDelayedVariants} animate="float"></motion.div>

      <div className="container" style={takeStyles.container}>
        <motion.div 
          style={takeStyles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={takeStyles.taglineWrapper}>
            <span style={takeStyles.taglineIcon}>❤️</span> 
            <span className="tagline" style={{ margin: 0 }}>Dental Spark</span>
          </div>
          <h2 style={{ fontSize: "2.5rem", marginTop: "var(--spacing-2)" }}>We take <br />care of <br /><span className="text-primary">Teeth</span></h2>
        </motion.div>

        <div style={takeStyles.grid}>
          
          {/* Left Features */}
          <motion.div 
            style={takeStyles.featuresLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
          >
            <motion.div variants={featureLeftVariants}>
              <FeatureBox 
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                title="Dental Cavity"
                desc="Comprehensive treatment to restore damaged teeth perfectly."
              />
            </motion.div>
            <motion.div variants={featureLeftVariants}>
              <FeatureBox 
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>}
                title="Teeth Pain"
                desc="Instant relief from acute pain and thorough diagnostics."
              />
            </motion.div>
          </motion.div>

          {/* Center Slider */}
          <motion.div 
            style={takeStyles.sliderFrame}
            variants={zoomVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <BeforeAfterSlider 
              beforeImage={beforeImage}
              afterImage={afterImage}
            />
          </motion.div>

          {/* Right Features */}
          <motion.div 
            style={takeStyles.featuresRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
          >
             <motion.div variants={featureRightVariants}>
               <FeatureBox 
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>}
                title="Missing Teeth"
                desc="Natural-looking implants to restore your perfect smile."
              />
            </motion.div>
             <motion.div variants={featureRightVariants}>
               <FeatureBox 
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>}
                title="Periodontal Diseases"
                desc="Effective gum treatments for a healthier foundation."
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FeatureBox({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div style={takeStyles.featureBox} whileHover={{ scale: 1.05 }}>
      <div style={takeStyles.iconWrapper}>
        {icon}
      </div>
      <div>
        <h4 style={takeStyles.featureTitle}>{title}</h4>
        <p style={takeStyles.featureDesc}>{desc}</p>
      </div>
    </motion.div>
  );
}

const takeStyles = {
  backgroundSwoosh: {
    position: 'absolute' as const,
    top: '-10%',
    left: '-5%',
    width: '40%',
    height: '40%',
    background: 'var(--color-primary)',
    opacity: 0.05,
    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
    zIndex: 0,
  },
  backgroundSwooshBottom: {
    position: 'absolute' as const,
    bottom: '-10%',
    right: '10%',
    width: '30%',
    height: '60%',
    background: 'var(--color-accent)',
    opacity: 0.05,
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    zIndex: 0,
  },
  container: {
    position: 'relative' as const,
    zIndex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-end",
    textAlign: "right" as const,
    marginBottom: "var(--spacing-8)",
  },
  taglineWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "var(--color-light)",
    padding: "0.5rem 1rem",
    borderRadius: "var(--border-radius-pill)",
  },
  taglineIcon: {
    fontSize: "1.2rem",
  },
  grid: {
    display: "flex",
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: "var(--spacing-8)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  featuresLeft: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-8)",
    flex: "1 1 250px",
  },
  featuresRight: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-8)",
    flex: "1 1 250px",
  },
  sliderFrame: {
    flex: "1 1 350px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  featureBox: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-3)",
    background: "transparent",
  },
  iconWrapper: {
    width: "48px",
    height: "48px",
    borderRadius: "var(--border-radius-md)",
    backgroundColor: "var(--color-light)",
    color: "var(--color-primary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "var(--shadow-sm)",
  },
  featureTitle: {
    fontSize: "1.1rem",
    margin: 0,
  },
  featureDesc: {
    fontSize: "0.9rem",
    color: "var(--color-gray)",
    margin: 0,
    lineHeight: 1.5,
  }
};
