import React from 'react';

interface KnowledgeHeaderProps {
  title: string;
  subtitle: string;
  dateUpdated?: string;
  author?: string;
}

export default function KnowledgeHeader({ 
  title, 
  subtitle, 
  dateUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  author = "Dr. Nilam Gada"
}: KnowledgeHeaderProps) {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.subtitle}>{subtitle}</p>
      
      <div style={styles.meta}>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Written by</span>
          <span style={styles.metaValue}>{author}</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Last updated</span>
          <span style={styles.metaValue}>{dateUpdated}</span>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    marginBottom: "3rem",
    paddingBottom: "2rem",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: 800,
    color: "#111",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#555",
    lineHeight: 1.5,
    marginBottom: "2rem",
    fontWeight: 400,
  },
  meta: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  metaItem: {
    display: "flex",
    flexDirection: "column" as const,
  },
  metaLabel: {
    fontSize: "0.75rem",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    color: "#888",
    fontWeight: 600,
    marginBottom: "0.25rem",
  },
  metaValue: {
    fontSize: "0.95rem",
    color: "#111",
    fontWeight: 500,
  }
};
