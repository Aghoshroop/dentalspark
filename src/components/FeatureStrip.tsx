"use client";
import { motion, Variants } from "framer-motion";

export default function FeatureStrip() {
  const features = [
    {
      title: "Access anywhere",
      desc: "We have multiple branches across the city for easy access to our premium care.",
      icon: "🏥"
    },
    {
      title: "High Quality Equipment",
      desc: "Our clinic uses the latest technology and top-tier materials for all procedures.",
      icon: "⚙️"
    },
    {
      title: "Great communication",
      desc: "We ensure you understand every step of your treatment in a clear, friendly manner.",
      icon: "💬"
    },
    {
      title: "Say it with friendly",
      desc: "A warm, welcoming environment that completely changes how you view dental visits.",
      icon: "😊"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section" style={stripStyles.section}>
      <motion.div 
        className="container" 
        style={stripStyles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((item, i) => (
          <motion.div 
            key={i} 
            variants={cardVariants}
            style={stripStyles.card}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
          >
            <div style={stripStyles.iconBox}>{item.icon}</div>
            <h4 style={stripStyles.title}>{item.title}</h4>
            <p style={stripStyles.desc}>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const stripStyles = {
  section: {
    padding: "var(--spacing-12) 0",
    backgroundColor: "var(--color-white)",
    borderBottom: "1px solid rgba(0,0,0,0.03)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
    gap: "var(--spacing-8)",
  },
  card: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--spacing-4)",
    padding: "var(--spacing-4) var(--spacing-2)",
  },
  iconBox: {
    width: "48px",
    height: "48px",
    borderRadius: "var(--border-radius-md)",
    backgroundColor: "rgba(2, 132, 199, 0.05)",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 0,
    fontSize: "1.05rem",
  },
  desc: {
    margin: 0,
    fontSize: "0.9rem",
    color: "var(--color-gray)",
    lineHeight: 1.5,
  }
};
