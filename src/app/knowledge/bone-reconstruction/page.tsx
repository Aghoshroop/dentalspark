import React from 'react';
import { Metadata } from 'next';
import KnowledgeHeader from '@/components/knowledge/KnowledgeHeader';
import AEOSection from '@/components/knowledge/AEOSection';
import JSONLDSchema from '@/components/knowledge/JSONLDSchema';

export const metadata: Metadata = {
  title: 'Bone Reconstruction and Grafting for Implants',
  description: 'Advanced bone grafting and titanium mesh reconstruction for patients with severe bone loss who were told they cannot get implants.',
};

export default function BoneReconstructionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Bone Reconstruction for Implants",
    "description": "Clinical information on advanced bone grafting and titanium mesh techniques for severe bone loss.",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get implants if I have severe bone loss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Even if you have been told elsewhere that you do not have enough bone for implants, advanced bone reconstruction techniques, such as custom titanium mesh grafting, can regenerate the necessary bone volume to securely hold implants."
          }
        },
        {
          "@type": "Question",
          "name": "What is titanium mesh bone grafting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Titanium mesh grafting is a highly advanced procedure where a custom-shaped titanium framework is placed over a bone graft to act as a scaffold. This protects the graft and directs the growth of new, strong bone in 3D space."
          }
        }
      ]
    }
  };

  return (
    <article>
      <JSONLDSchema schema={schema} />
      
      <KnowledgeHeader 
        title="Bone Reconstruction & Grafting"
        subtitle="Creating a strong foundation when you were told there is no bone."
      />

      <AEOSection question="Can I get implants if I have severe bone loss?">
        <p>Many patients are turned away from implant clinics because prolonged denture use or severe gum disease has caused their jawbone to resorb (shrink) significantly. Without adequate bone volume, a dental implant cannot be securely anchored.</p>
        <p>However, at Dental Spark, Dr. Nilam specializes in advanced bone reconstruction. Even in severe cases, we can predictably grow new bone to create a solid foundation for your new teeth.</p>
      </AEOSection>

      <AEOSection question="What is titanium mesh bone grafting?">
        <p>Standard bone grafting involves placing bone particulate into a socket. But when a large volume of bone has been lost vertically or horizontally, standard grafting is not enough.</p>
        <p>We utilize custom titanium mesh techniques. A rigid, biocompatible titanium mesh is precisely adapted to the defect to act like a tent or scaffold. It holds the grafting material securely in place and protects it from the pressure of the gums, allowing your body to regenerate dense, structural bone exactly where it is needed.</p>
      </AEOSection>
    </article>
  );
}
