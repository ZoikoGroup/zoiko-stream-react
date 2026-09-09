import React from 'react';

interface RelationshipCard {
  title: string;
  description: string;
}

const RELATIONSHIPS: RelationshipCard[] = [
  {
    title: 'Terms of service ↔ Service-specific terms',
    description: 'Service-specific terms supplement, not replace, the general Terms of service for the identified service only.',
  },
  {
    title: 'Privacy notice ↔ Cookie notice',
    description: 'Privacy notice covers personal data broadly; Cookie notice covers browser-based tracking technologies specifically.',
  },
  {
    title: 'Privacy notice ↔ Data processing addendum',
    description: "The DPA governs ZoikoStream's processing of data on a customer's behalf; the Privacy notice governs ZoikoStream's own data practices generally.",
  },
  {
    title: 'Data processing addendum ↔ Subprocessors',
    description: 'The DPA defines the contractual subprocessor process; the current list itself lives at its own destination.',
  },
];

export default function DocumentRelationshipsSection() {
  return (
    <section className="w-full bg-[#0B132B] px-6 sm:px-12 lg:px-20 py-14 lg:py-18 text-white border-b border-slate-800">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#40C4AA] text-xs font-mono uppercase tracking-wide font-medium">
              PURPOSE MAP, NOT A HIERARCHY
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            How these documents relate.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Related does not mean ranked — each document remains the authority for its own scope. Precedence, where it exists, is stated only inside the operative documents themselves.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="grid grid-cols-2 gap-4">
          {RELATIONSHIPS.map((card, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#1C2541]/70 border border-slate-700/60 rounded-2xl flex flex-col gap-2 backdrop-blur-sm"
            >
              <h3 className="text-white text-sm font-semibold font-['Space_Grotesk'] leading-6">
                {card.title}
              </h3>
              <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
