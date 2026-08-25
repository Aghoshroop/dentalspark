import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    template: '%s | Dental Spark Knowledge Center',
    default: 'Knowledge Center | Dental Spark',
  },
  description: 'Expert, clinical information on dental implants and full-mouth restorations by Dr. Nilam Gada.',
  openGraph: {
    type: 'website',
    siteName: 'Dental Spark',
  }
};

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={styles.layout}>
      <header style={styles.header}>
        <div className="container" style={styles.nav}>
          <Link href="/" style={styles.backLink}>
            &larr; Back to Home
          </Link>
          <div style={styles.logo}>Dental Spark Knowledge Center</div>
        </div>
      </header>
      <main style={styles.main}>
        {children}
      </main>
      <footer style={styles.footer}>
        <div className="container" style={styles.footerInner}>
          <p>Dental Spark Knowledge Center &copy; {new Date().getFullYear()}. For informational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  layout: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#faf9f6",
    fontFamily: "var(--font-inter), sans-serif",
  },
  header: {
    padding: "1.5rem 0",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
    position: "sticky" as const,
    top: 0,
    zIndex: 100,
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 2rem",
  },
  backLink: {
    color: "#bca374",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logo: {
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#111",
  },
  main: {
    flex: 1,
    padding: "4rem 2rem",
    maxWidth: "800px",
    margin: "0 auto",
    width: "100%",
  },
  footer: {
    padding: "3rem 2rem",
    backgroundColor: "#111",
    color: "#888",
    textAlign: "center" as const,
    fontSize: "0.85rem",
  },
  footerInner: {
    maxWidth: "1000px",
    margin: "0 auto",
  }
};
