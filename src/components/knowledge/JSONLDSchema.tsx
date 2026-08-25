import React from 'react';

interface JSONLDSchemaProps {
  schema: Record<string, any>;
}

export default function JSONLDSchema({ schema }: JSONLDSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
