import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400",
      category: "DENTAL CARE",
      title: "Understanding Invisalign: Is it the Right Choice for You?",
      date: "Oct 12, 2026",
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400",
      category: "ORAL HEALTH",
      title: "What Does Your Diet Have to Do With Your Dental Health?",
      date: "Oct 05, 2026",
    },
    {
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=400",
      category: "NEW TECHNOLOGY",
      title: "Modern Medical Equipment and Painless Treatments",
      date: "Sep 28, 2026",
    }
  ];

  return (
    <section className="section" style={blogStyles.wrapper}>
      <div className="container">
        
        <div style={blogStyles.headerRow}>
          <div>
            <div style={blogStyles.taglineWrapper}>
              <span style={{ fontSize: "0.9rem", color: "var(--color-primary)", marginRight: "4px" }}>📰</span>
              <span style={{ fontSize: "0.85rem", letterSpacing: "1px", fontWeight: 600 }}>Blog</span>
            </div>
            <h2 style={{ fontSize: "2.5rem", margin: 0 }}>Latest <span className="text-primary">blog</span> from us</h2>
          </div>
          <p style={{ maxWidth: "400px", color: "var(--color-gray)", fontSize: "0.95rem", margin: 0 }}>
            Read quality dental care articles from the top tier professionals. We provide essential tips and treatments discovery to help your health.
          </p>
        </div>

        <div style={blogStyles.grid}>
          {posts.map((post, idx) => (
            <div key={idx} style={blogStyles.card}>
              <div style={blogStyles.imageWrap}>
                <Image src={post.image} alt={post.title} fill style={blogStyles.image} />
                <div style={blogStyles.badge}>{post.category}</div>
              </div>
              <div style={blogStyles.content}>
                <h4 style={blogStyles.title}>
                  <Link href="#" style={{ color: "var(--color-dark)", textDecoration: "none" }}>{post.title}</Link>
                </h4>
                <div style={blogStyles.meta}>
                  <span style={{ color: "var(--color-gray)", fontSize: "0.85rem" }}>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const blogStyles = {
  wrapper: {
    backgroundColor: "var(--color-white)",
    paddingTop: "var(--spacing-16)",
    paddingBottom: "var(--spacing-24)",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap" as const,
    gap: "var(--spacing-4)",
    marginBottom: "var(--spacing-12)",
  },
  taglineWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: "var(--spacing-2)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
    gap: "var(--spacing-8)",
  },
  card: {
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "var(--color-white)",
    borderRadius: "var(--border-radius-lg)",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
    transition: "transform 0.3s ease",
    border: "1px solid rgba(0,0,0,0.02)",
  },
  imageWrap: {
    position: "relative" as const,
    width: "100%",
    height: "220px",
  },
  image: {
    objectFit: "cover" as const,
  },
  badge: {
    position: "absolute" as const,
    bottom: "1rem",
    left: "1rem",
    backgroundColor: "var(--color-primary)",
    color: "var(--color-white)",
    fontSize: "0.75rem",
    fontWeight: "bold",
    padding: "0.25rem 0.75rem",
    borderRadius: "var(--border-radius-pill)",
    letterSpacing: "0.5px",
  },
  content: {
    padding: "var(--spacing-6)",
  },
  title: {
    margin: "0 0 1rem 0",
    fontSize: "1.1rem",
    lineHeight: 1.4,
  },
  meta: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  }
};
