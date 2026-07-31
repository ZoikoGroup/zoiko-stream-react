import React from 'react';

// --- DATA DEFINITIONS ---

const RESOURCE_CARDS = [
  {
    id: 'api-guide',
    title: 'Getting started with secure video streaming APIs',
    meta: 'Developer guide · 8 min read',
    linkText: 'Read the guide →',
    linkHref: '#api-guide',
    imageSrc: '/images/home/div.ar-4-3 (1).png',
  },
  {
    id: 'resilient-workflows',
    title: 'Designing resilient live-video workflows',
    meta: 'Architecture guide · 11 min read',
    linkText: 'Explore the architecture →',
    linkHref: '#resilient-workflows',
    imageSrc: '/images/home/div.ar-4-3 (2).png',
  },
  {
    id: 'live-broadcast',
    title: 'How to plan a professionally managed live broadcast',
    meta: 'Live Events guide · 9 min read',
    linkText: 'Read the guide →',
    linkHref: '#live-broadcast',
    imageSrc: '/images/home/div.ar-4-3 (3).png',
  },
  {
    id: 'accessible-video',
    title: 'Building accessible and multilingual video experiences',
    meta: 'Accessibility guide · 7 min read',
    linkText: 'Read the guide →',
    linkHref: '#accessible-video',
    imageSrc: '/images/home/div.ar-4-3 (4).png',
  },
];

const FOOTER_LINKS = [
  { label: 'Documentation', href: '#documentation' },
  { label: 'API reference', href: '#api-reference' },
  { label: 'Guides', href: '#guides' },
  { label: 'Case studies', href: '#case-studies' },
  { label: 'Webinars', href: '#webinars' },
  { label: 'Status', href: '#status' },
  { label: 'Changelog', href: '#changelog' },
];

// --- COMPONENT ---

export default function ResourcesSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-zinc-950 text-zinc-900 dark:text-slate-100 py-16 px-6 sm:px-10 lg:px-20   transition-colors">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-12 text-center">
        
        {/* Eyebrow Badge & Section Title */}
        <div className="flex flex-col items-center gap-3.5 max-w-[750px]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-normal   uppercase tracking-wide">
              RESOURCES
            </span>
          </div>

          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight">
            Build better video experiences with practical guidance.
          </h2>
        </div>

        {/* 4-Card Resource Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left">
          {RESOURCE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between gap-6 shadow-sm hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              {/* Preview Image */}
              <div className="w-full aspect-[235/176] overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-800 bg-slate-50 dark:bg-zinc-950">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  src={card.imageSrc}
                  alt={card.title}
                />
              </div>

              {/* Card Metadata & Actions */}
              <div className="flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-zinc-900 dark:text-white text-sm font-bold   leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-normal leading-relaxed">
                    {card.meta}
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

        {/* Bottom Link Navigation */}
        <div className="w-full flex flex-wrap items-center justify-start gap-x-8 gap-y-3 pt-4 border-t border-gray-200 dark:border-zinc-800 text-left">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-slate-100 text-sm font-normal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}