import React from 'react';
import { Metadata } from 'next';
import KnowledgeHeader from '@/components/knowledge/KnowledgeHeader';
import AEOSection from '@/components/knowledge/AEOSection';
import JSONLDSchema from '@/components/knowledge/JSONLDSchema';

export const metadata: Metadata = {
  title: 'Single Tooth Implant',
  description: 'Learn why a single tooth implant is the gold standard for replacing a single missing tooth compared to dental bridges.',
};

export default function SingleToothImplantPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Single Tooth Implant",
    "description": "Clinical information on replacing a single missing tooth with a dental implant.",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is an implant better than a dental bridge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental bridge requires grinding down healthy adjacent teeth to support the bridge. A single tooth implant stands alone, preserving the health and structure of your adjacent teeth while preventing bone loss in the gap."
          }
        },
        {
          "@type": "Question",
          "name": "Is a single tooth implant painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most patients report that getting a single implant is less painful than a tooth extraction. It is performed under local anesthesia, and post-operative discomfort is typically managed with over-the-counter pain relievers."
          }
        }
      ]
    }
  };

  return (
    <article>
      <JSONLDSchema schema={schema} />
      
      <KnowledgeHeader 
        title="Single Tooth Implant"
        subtitle="The gold standard for replacing a missing tooth."
      />

      <AEOSection question="Why is an implant better than a dental bridge?">
        <p>Historically, a missing tooth was replaced with a traditional dental bridge. However, a bridge requires the dentist to grind down the healthy teeth on either side of the gap to act as anchors. This permanently damages healthy tooth structure.</p>
        <p>A single tooth implant is a self-supporting structure. It consists of a titanium post placed in the jawbone, an abutment, and a lifelike ceramic crown. It looks, feels, and functions exactly like a natural tooth, completely preserving the health of the adjacent teeth.</p>
      </AEOSection>

      <AEOSection question="How does an implant prevent bone loss?">
        <p>When you lose a tooth, the jawbone in that area no longer receives the chewing stimulation it needs to stay dense and healthy. Over time, the bone begins to resorb or melt away.</p>
        <p>A dental implant is the only tooth replacement option that replaces the <em>root</em> of the tooth, not just the visible crown. The titanium implant integrates with the bone, providing the necessary stimulation to halt bone loss and preserve your facial structure.</p>
      </AEOSection>
    </article>
  );
}
