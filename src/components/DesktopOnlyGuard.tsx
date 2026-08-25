import React from 'react';

export default function DesktopOnlyGuard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mobile-guard">
        <div className="mobile-guard-content">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#bca374" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "2rem" }}>
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          <h1>Desktop Experience Recommended</h1>
          <p>Dental Spark is currently optimized for larger screens.</p>
          <p>Please visit us on a desktop or laptop for the full immersive experience.</p>
        </div>
      </div>
      <div className="desktop-content">
        {children}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .mobile-guard {
          display: none;
        }
        @media (max-width: 1023px) {
          .mobile-guard {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #0a0a0a;
            color: #fff;
            z-index: 999999;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
          }
          .desktop-content {
            display: none !important;
          }
          body {
            overflow: hidden !important;
          }
        }
        .mobile-guard-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-guard-content h1 {
          font-family: var(--font-playfair), serif;
          font-size: 2.2rem;
          color: #bca374;
          margin-bottom: 1.5rem;
          letter-spacing: -0.5px;
        }
        .mobile-guard-content p {
          font-family: var(--font-inter), sans-serif;
          font-size: 1.05rem;
          color: #a0a0a0;
          max-width: 320px;
          margin: 0 auto 0.5rem auto;
          line-height: 1.6;
        }
      `}} />
    </>
  );
}
