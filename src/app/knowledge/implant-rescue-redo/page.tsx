import React from 'react';
import { Metadata } from 'next';
import KnowledgeHeader from '@/components/knowledge/KnowledgeHeader';
import AEOSection from '@/components/knowledge/AEOSection';
import JSONLDSchema from '@/components/knowledge/JSONLDSchema';

export const metadata: Metadata = {
  title: 'Dental Implant Rescue and Redo',
  description: 'Specialized care for failing implants, peri-implantitis, and complex restorative redos.',
};

export default function ImplantRescueRedoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Implant Rescue and Redo",
    "description": "Clinical information on treating failing dental implants and peri-implantitis.",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do dental implants fail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Implants can fail due to poor initial placement, inadequate bone density, infection (peri-implantitis), or excessive biting forces on a poorly designed restoration."
          }
        },
        {
          "@type": "Question",
          "name": "Can a failing implant be saved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If caught early, conditions like peri-implantitis can be treated to save the implant. If the implant is loose or has lost significant bone integration, it must be carefully removed, the site grafted, and a new implant placed."
          }
        }
      ]
    }
  };

  return (
    <article>
      <JSONLDSchema schema={schema} />
      
      <KnowledgeHeader 
        title="Implant Rescue & Redo"
        subtitle="Expert solutions for failing implants and complex complications."
      />

      <AEOSection question="Why do dental implants fail?">
        <p>While dental implants have an extremely high success rate, complications can occur, particularly if the initial procedure lacked proper 3D planning or the restoration was not designed for optimal force distribution.</p>
        <p>The most common cause of late implant failure is <strong>peri-implantitis</strong>, an inflammatory condition similar to gum disease that destroys the bone supporting the implant. Other causes include fractured screws, poor bone grafting, or systemic health issues.</p>
      </AEOSection>

      <AEOSection question="Can a failing implant be saved?">
        <p>If you notice pain, swelling, bleeding gums around the implant, or if the crown feels loose, it is critical to seek specialist care immediately.</p>
        <p>If caught early, the implant surface can be decontaminated and the surrounding bone regenerated. However, if the implant is mobile (loose), it has lost osseointegration. In this case, Dr. Nilam will gently remove the failing implant, thoroughly clean and graft the infected site, and plan for the placement of a new, healthy implant once the foundation is restored.</p>
      </AEOSection>
    </article>
  );
}
