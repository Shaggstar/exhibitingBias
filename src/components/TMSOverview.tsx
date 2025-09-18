// src/components/TMSOverview.tsx
import React from "react";

export default function TMSOverview() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="section-title mb-2">Transcendental Model Selection</h2>
      <p className="text-[var(--subtext)] mb-6 text-center">
        A compact overview that connects active inference to your α parameter and selection across scales.
      </p>

      <div className="prose prose-invert max-w-none">
        <p>
          Active inference frames life as prediction under uncertainty. Transcendental Model
          Selection adapts this for social cognition by letting a cultural precision parameter
          α weigh model choice when contexts collide. Family, friends, work, strangers:
          the right behavior is selected by integrating moral constraints across scales. 
          The way sounds and etchings are grouped under a a structure of shared meaning is 
          an outgrowth of the process of codifying social behavior into moral impulses and norms. 
        </p>
      </div>
    </div>
  );
}
