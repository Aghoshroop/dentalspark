import React from 'react';
import { Metadata } from 'next';
import KnowledgeHeader from '@/components/knowledge/KnowledgeHeader';
import AEOSection from '@/components/knowledge/AEOSection';
import JSONLDSchema from '@/components/knowledge/JSONLDSchema';

export const metadata: Metadata = {
  title: 'Full-Mouth Restoration & All-on-X Implants',
  description: 'Learn about full-mouth restorations, All-on-X, and implant-supported bridges to replace failing or missing teeth.',
};

export default function FullMouthRestorationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Full-Mouth Restoration & All-on-X",
    "description": "Clinical information on full arch dental implants and All-on-X procedures for patients with failing teeth.",
    "about": {
      "@type": "MedicalProcedure",
      "name": "All-on-4 Dental Implants"
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a full-mouth restoration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A full-mouth restoration (often referred to as All-on-X or All-on-4) is a permanent, implant-supported bridge that replaces an entire arch of failing or missing teeth. It is secured to the jawbone using strategically placed titanium implants."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose an implant-supported bridge over dentures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike traditional dentures, an implant-supported bridge is fixed in place. It does not slip, requires no adhesives, and restores nearly 100% of your natural bite force, allowing you to eat, speak, and smile with confidence."
          }
        }
      ]
    }
  };

  return (
    <article>
      <JSONLDSchema schema={schema} />
      
      <KnowledgeHeader 
        title="Full-Mouth Restoration & All-on-X"
        subtitle="A permanent, fixed solution for failing teeth or severe bone loss."
      />

      <AEOSection question="What is a full-mouth restoration?">
        <p>A full-mouth restoration, commonly known as All-on-X or All-on-4, is an advanced dental implant procedure designed to replace an entire arch of teeth (upper, lower, or both). Instead of replacing each tooth individually, an entire custom-milled bridge of teeth is securely attached to 4 to 6 titanium implants placed in the jawbone.</p>
        <p>This procedure is ideal for patients whose natural teeth are failing due to severe decay, gum disease, or trauma, and who want to avoid the discomfort and inconvenience of traditional removable dentures.</p>
      </AEOSection>

      <AEOSection question="Why choose an implant-supported bridge over dentures?">
        <p>Traditional dentures sit on the gums and rely on suction or adhesives to stay in place. This often leads to slipping, sore spots, and bone loss over time. An implant-supported bridge is <strong>fixed</strong>. It acts, feels, and functions like natural teeth.</p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}><strong>Preserves Bone:</strong> Implants stimulate the jawbone, preventing the sunken facial appearance associated with tooth loss.</li>
          <li style={{ marginBottom: "0.5rem" }}><strong>Restores Bite Force:</strong> You can eat crisp apples, steak, and nuts without fear of your teeth moving.</li>
          <li style={{ marginBottom: "0.5rem" }}><strong>No Palate Coverage:</strong> Upper implant bridges leave the roof of your mouth uncovered, preserving your ability to taste food properly.</li>
        </ul>
      </AEOSection>

      <AEOSection question="What is the process like?">
        <p>At Dental Spark, Dr. Nilam Gada handles the entire process from start to finish. Utilizing 3D CBCT scans, the implant placement is virtually planned for microscopic precision.</p>
        <p>Often, failing teeth can be extracted, implants placed, and a temporary (but beautiful) fixed bridge attached all in a single surgical visit. After a healing period of a few months where the implants fuse with the bone (osseointegration), the final, ultra-durable Zirconia bridge is designed and permanently attached.</p>
      </AEOSection>
    </article>
  );
}
