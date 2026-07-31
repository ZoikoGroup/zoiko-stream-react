import React from 'react';

// --- DATA DEFINITIONS ---

const FEATURE_LIST = [
  {
    title: 'Secure by design',
    description: 'Control who can create, operate, publish, access, and replay media.',
  },
  {
    title: 'Resilient by operation',
    description:
      'Monitor contribution and delivery paths and prepare continuity measures for critical broadcasts.',
  },
  {
    title: 'Accessible by default',
    description:
      'Support captions, translation, usable controls, and inclusive viewing experiences.',
  },
  {
    title: 'Observable end to end',
    description:
      'Understand stream health, playback behavior, access activity, and operational events.',
  },
];

const ANALYTICS_CARDS = [
  {
    title: 'Improve viewer experience',
    description:
      'Identify playback and engagement issues before they become recurring problems.',
    imageSrc: '/images/home/div.on-dark (3).png',
  },
  {
    title: 'Strengthen media operations',
    description:
      'Use stream and event history to improve preparation, production, and delivery.',
    imageSrc: '/images/home/div.on-dark (4).png',
  },
  {
    title: 'Extend content value',
    description:
      'Measure how recordings and replay experiences continue performing after the live broadcast.',
    imageSrc: '/images/home/div.on-dark (6).png',
  },
];

// --- COMPONENT ---

export default function TrustedMediaOperationsSection() {
  return (
    <section className="w-full bg-zinc-950 text-slate-100 py-16 px-6 sm:px-10 lg:px-20 border-t border-zinc-900  ">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-start gap-4 max-w-[750px]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-normal   uppercase tracking-wide">
              TRUSTED MEDIA OPERATIONS
            </span>
          </div>

          <h2 className="text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold   leading-tight">
            Security, resilience, and access are built into the stream.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            ZoikoStream integrates protection, operational continuity, accessibility, and control across the media lifecycle rather than adding them after deployment.
          </p>
        </div>

        {/* Feature Overview Grid: Image + 4 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Preview */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[320px] aspect-[708/443] overflow-hidden rounded-2xl border border-slate-700 bg-neutral-900">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.01]"
                src="/images/home/div.on-dark-1.png"
                alt="Trusted Media Operations Security Overview"
              />
            </div>
          </div>

          {/* Core Pillars List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {FEATURE_LIST.map((feature) => (
              <div
                key={feature.title}
                className="bg-zinc-900 rounded-2xl border border-gray-800 p-5 flex flex-col gap-1.5 hover:border-gray-700 transition-colors"
              >
                <h3 className="text-slate-100 text-sm font-bold  ">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Analytics & Insights 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {ANALYTICS_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-zinc-900 rounded-2xl border border-gray-800 p-6 flex flex-col justify-between gap-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-100 text-sm font-bold  ">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="w-full aspect-[335/168] overflow-hidden rounded-xl border border-slate-700 bg-neutral-950">
                <img
                  className="w-full h-full object-cover"
                  src={card.imageSrc}
                  alt={card.title}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            className="px-6 py-3.5 border border-gray-700 hover:border-gray-500 text-slate-100 font-semibold text-base rounded-[10px] transition-colors"
          >
            Explore security
          </button>
          <button
            type="button"
            className="px-6 py-3.5 border border-gray-700 hover:border-gray-500 text-slate-100 font-semibold text-base rounded-[10px] transition-colors"
          >
            Explore analytics
          </button>
          <button
            type="button"
            className="px-6 py-3.5 border border-gray-700 hover:border-gray-500 text-slate-100 font-semibold text-base rounded-[10px] transition-colors"
          >
            Discuss enterprise requirements
          </button>
        </div>

      </div>
    </section>
  );
}