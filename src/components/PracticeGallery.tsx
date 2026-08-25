'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeUp from './FadeUp';

const allPhotos = [
  { id: 1, type: "The practice", caption: "Inside the practice", src: "/h1.png", styleClass: "item-large", filter: "practice" },
  { id: 2, type: "Technology", caption: "Magnification and a microscope", src: "/h2.png", styleClass: "item-wide", filter: "technology" },
  { id: 3, type: "The doctor", caption: "Dr. Nilam Gada at work", src: "/dr.jpg", styleClass: "item-tall", filter: "doctor" },
  { id: 4, type: "Technology", caption: "Straumann and Neodent, ready", src: "/i1.png", styleClass: "item-square", filter: "technology" },
  { id: 5, type: "The practice", caption: "A calm, modern space", src: "/g1.png", styleClass: "item-square", filter: "practice" },
  { id: 6, type: "The doctor", caption: "Dr. Nilam Gada", src: "/dr-gada.jpg", styleClass: "item-square", filter: "doctor" },
  { id: 7, type: "The practice", caption: "Treatment room", src: "/h3.png", styleClass: "item-tall", filter: "practice" },
  { id: 8, type: "The practice", caption: "In the office", src: "/g2.png", styleClass: "item-wide", filter: "practice" },
  { id: 9, type: "Technology", caption: "A 3D scan of your jaw", src: "/implant.jpg", styleClass: "item-square", filter: "technology" },
];

export default function PracticeGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPhotos = activeFilter === "all" 
    ? allPhotos 
    : allPhotos.filter(p => p.filter === activeFilter);

  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        
        {/* Header Area */}
        <div style={styles.headerRow}>
          <FadeUp>
            <div style={styles.headerText}>
              <div style={styles.eyebrow}>Gallery</div>
              <h2 style={styles.heading}>A look inside the practice.</h2>
              <p style={styles.subheading}>The place, the technology, and the doctor behind every result.</p>
            </div>
          </FadeUp>
          
          <Link href="/gallery" className="gallery-link-small" style={styles.topLink}>
            View the full gallery 
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "1px" }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Filter Bar */}
        <div style={styles.filterBar}>
          <div style={styles.filterGroup}>
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'practice' ? 'active' : ''}`}
              onClick={() => setActiveFilter('practice')}
            >
              The practice
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'technology' ? 'active' : ''}`}
              onClick={() => setActiveFilter('technology')}
            >
              Technology
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'doctor' ? 'active' : ''}`}
              onClick={() => setActiveFilter('doctor')}
            >
              The doctor
            </button>
          </div>
          <div style={styles.photoCount}>
            {filteredPhotos.length} photos
          </div>
        </div>

        {/* Masonry Grid */}
        <div className={`practice-grid ${activeFilter !== 'all' ? 'filtered' : ''}`}>
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className={`practice-item ${activeFilter === 'all' ? photo.styleClass : 'item-square'}`}>
              <img src={photo.src} alt={photo.caption} className="practice-img" loading="lazy" />
              
              {/* Overlays */}
              <div className="practice-tag">{photo.type}</div>
              <div className="practice-caption">{photo.caption}</div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .practice-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 180px; /* Reduced from 260px to 180px for perfect aspect ratio */
          gap: 1rem;
          transition: all 0.3s ease;
        }
        
        .practice-grid.filtered {
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 180px;
        }

        .practice-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #e0dcd3;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .practice-item:hover .practice-img {
          transform: scale(1.05);
        }

        .practice-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .item-large { grid-column: span 2; grid-row: span 2; }
        .item-wide { grid-column: span 2; grid-row: span 1; }
        .item-tall { grid-column: span 1; grid-row: span 2; }
        .item-square { grid-column: span 1; grid-row: span 1; }

        .practice-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .practice-caption {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 500;
          text-shadow: 0 1px 4px rgba(0,0,0,0.6);
          font-family: monospace;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid #d1ccc0;
          color: #444;
          padding: 0.4rem 1.2rem;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: #bca374;
          color: #111;
        }

        .filter-btn.active {
          background: #bca374;
          border-color: #bca374;
          color: #fff;
        }

        .gallery-link-small {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #bca374;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .gallery-link-small:hover {
          color: #111;
        }

        @media (max-width: 1024px) {
          .practice-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .item-large { grid-column: span 2; }
          .item-wide { grid-column: span 2; }
          .item-tall { grid-row: span 1; }
        }

        @media (max-width: 768px) {
          .practice-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 200px;
          }
          .item-large, .item-wide { grid-column: span 2; }
          .headerRow {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .filterBar {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        @media (max-width: 500px) {
          .practice-grid {
            grid-template-columns: 1fr;
          }
          .item-large, .item-wide, .item-tall, .item-square {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}} />
    </section>
  );
}

const goldColor = "#bca374";

const styles = {
  section: {
    padding: "6rem 0 8rem 0",
    backgroundColor: "#f4f2ed", // Match the beige background from the screenshot
    position: "relative" as const,
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 4vw",
    display: "flex",
    flexDirection: "column" as const,
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "3rem",
    className: "headerRow",
  },
  headerText: {
    display: "flex",
    flexDirection: "column" as const,
  },
  eyebrow: {
    color: goldColor,
    fontSize: "0.95rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  heading: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: 700,
    color: "#111",
    letterSpacing: "-1px",
    margin: "0 0 0.5rem 0",
    lineHeight: 1.1,
  },
  subheading: {
    fontSize: "1.1rem",
    color: "#555",
    margin: 0,
    fontWeight: 400,
  },
  topLink: {
    marginBottom: "0.5rem",
  },
  filterBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    className: "filterBar",
  },
  filterGroup: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap" as const,
  },
  photoCount: {
    fontSize: "0.85rem",
    color: "#777",
    fontWeight: 500,
    fontFamily: "monospace",
  }
};
