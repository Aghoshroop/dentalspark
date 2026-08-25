import React from 'react';

interface AEOSectionProps {
  question: string;
  children: React.ReactNode;
}

export default function AEOSection({ question, children }: AEOSectionProps) {
  return (
    <section style={styles.section}>
      <h2 style={styles.question}>{question}</h2>
      <div style={styles.answer}>
        {children}
      </div>
    </section>
  );
}

const styles = {
  section: {
    marginBottom: "3rem",
  },
  question: {
    fontSize: "1.75rem",
    fontWeight: 700,
    color: "#222",
    marginBottom: "1rem",
    lineHeight: 1.3,
    letterSpacing: "-0.5px",
  },
  answer: {
    fontSize: "1.1rem",
    color: "#444",
    lineHeight: 1.8,
  }
};
