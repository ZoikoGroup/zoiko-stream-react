import React from 'react';

// --- DATA DEFINITION ---

const EVIDENCE_CARDS = [
  {
    id: 'docs',
    title: 'Documentation',
    description: 'Complete public guides, API reference, copyable examples, versioned changelog.',
    linkText: 'Read the docs →',
    linkHref: '#docs',
    imageSrc: 'https://placehold.co/235x235',
  },
  {
    id: 'status',
    title: 'System status',
    description: 'Public status page, real incident history, service components.',
    linkText: 'View status →',
    linkHref: '#status',
    imageSrc: 'https://placehold.co/235x235',
  },
  {
    id: 'sandbox',
    title: 'Sandbox or demo',
    description: 'Actual playback, measured latency context, accessible controls.',
    linkText: 'Try the sandbox →',
    linkHref: '#sandbox',
    imageSrc: 'https://placehold.co/235x235',
  },
  {
    id: 'architecture',
    title: 'Architecture',
    description: 'Published system overview, resilience approach, security boundaries.',
    linkText: 'Read the overview →',
    linkHref: '#architecture',
    imageSrc: 'https://placehold.co/235x235',
  },
];

// --- COMPONENT ---

export default function EvidenceSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-zinc-950 text-zinc-900 dark:text-slate-100 py-16 px-6 sm:px-10 lg:px-20   transition-colors">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-12 text-center">
        
        {/* Eyebrow Badge & Section Title */}
        <div className="flex flex-col items-center gap-3.5 max-w-[700px]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-normal   uppercase tracking-wide">
              EVIDENCE, NOT DECORATION
            </span>
          </div>

          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold   leading-tight">
            Trusted where video performance matters.
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-normal leading-relaxed">
            ZoikoStream earns trust through evidence a skeptical evaluator can inspect — no invented logos, testimonials, ratings, or awards.
          </p>
        </div>

        {/* 4-Card Feature Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left">
          {EVIDENCE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between gap-6 shadow-sm hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              {/* Preview Image */}
              <div className="w-full aspect-square overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-800 bg-slate-50 dark:bg-zinc-950">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  src={card.imageSrc}
                  alt={card.title}
                />
              </div>

              {/* Text Info & CTA */}
              <div className="flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-zinc-900 dark:text-white text-base font-bold  ">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <a
                  href={card.linkHref}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold transition-colors inline-flex items-center"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}