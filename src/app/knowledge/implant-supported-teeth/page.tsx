import React from 'react';
import { Metadata } from 'next';
import KnowledgeHeader from '@/components/knowledge/KnowledgeHeader';
import AEOSection from '@/components/knowledge/AEOSection';
import JSONLDSchema from '@/components/knowledge/JSONLDSchema';

export const metadata: Metadata = {
  title: 'Implant-Supported Teeth for Denture Wearers',
  description: 'Learn how implant-supported teeth can stabilize moving dentures and restore chewing function.',
};

export default function ImplantSupportedTeethPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Implant-Supported Teeth",
    "description": "Information on stabilizing loose dentures with dental implants.",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do implants fix a loose denture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental implants act as artificial tooth roots. By placing as few as 2 to 4 implants in the jaw, a denture can be modified to 'snap' onto the implants, completely eliminating movement and the need for messy adhesives."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a snap-on denture and fixed teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A snap-on denture (overdenture) is removable by the patient for cleaning, but is highly stable when snapped in. Fixed teeth (All-on-X) are permanently screwed into the implants and can only be removed by a dentist."
          }
        }
      ]
    }
  };

  return (
    <article>
      <JSONLDSchema schema={schema} />
      
      <KnowledgeHeader 
        title="Implant-Supported Teeth"
        subtitle="Stop denture movement, eliminate adhesives, and regain your bite."
      />

      <AEOSection question="How do implants fix a loose denture?">
        <p>A common complaint among denture wearers, particularly with lower dentures, is that they move while speaking and eating. This happens because the jawbone naturally shrinks over time when teeth are missing.</p>
        <p>By placing dental implants into the jawbone, we create solid anchor points. Special attachments (often called locators) are placed on the implants, and corresponding housings are placed inside your denture. The denture then "snaps" tightly onto the implants, providing incredible stability.</p>
      </AEOSection>

      <AEOSection question="What is the difference between a snap-on denture and fixed teeth?">
        <p>There are two main ways to use implants to replace an arch of teeth:</p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
          <li style={{ marginBottom: "1rem" }}><strong>Implant-Supported Overdenture (Snap-On):</strong> This is removable. You take it out at night to clean it. It rests on your gums but is securely anchored by implants (usually 2 to 4). It is highly stable, cost-effective, and easy to clean.</li>
          <li style={{ marginBottom: "1rem" }}><strong>Fixed Implant Bridge (All-on-X):</strong> This is permanent. It is screwed directly into the implants (usually 4 to 6) and does not touch the gums. It is slimmer, feels exactly like natural teeth, and is brushed just like natural teeth. It can only be removed by a dentist.</li>
        </ul>
      </AEOSection>
    </article>
  );
}
