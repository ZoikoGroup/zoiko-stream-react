'use client';

import React from 'react';

interface EventTypeCard {
  id: string;
  title: string;
  badge: string;
  badgeStyle: string;
  description: string;
  tag: string;
}

const CARDS: EventTypeCard[] = [
  {
    id: 'published',
    title: 'Published',
    badge: 'INITIAL',
    badgeStyle: 'text-teal-300 bg-teal-950/80 border-teal-800/80',
    description:
      'Initial notice published with baseline window parameters, impacted system scope, and expected client-side impact matrix.',
    tag: 'RECORDED AT PUBLISHED_AT',
  },
  {
    id: 'rescheduled',
    title: 'Rescheduled',
    badge: 'SHIFTED',
    badgeStyle: 'text-amber-400 bg-amber-950/80 border-amber-800/80',
    description:
      'New primary execution window assigned. Previous windows are preserved in the metadata tree with approved operational rescheduling reasons.',
    tag: 'PREVIOUS WINDOW PRESERVED',
  },
  {
    id: 'corrected',
    title: 'Corrected',
    badge: 'CLARIFIED',
    badgeStyle: 'text-blue-400 bg-blue-950/80 border-blue-800/80',
    description:
      'Retroactive corrections to text fields or parameters are explicitly flagged with detailed change deltas to maintain complete audit capability.',
    tag: 'TRACEABLE DELTA GENERATED',
  },
  {
    id: 'cancelled',
    title: 'Cancelled',
    badge: 'VOID',
    badgeStyle: 'text-rose-400 bg-rose-950/80 border-rose-800/80',
    description:
      'Updates may be cancelled due to shifting engineering priorities. Original timing parameters are permanently kept on record.',
    tag: 'CANCELLATION PATH SECURED',
  },
  {
    id: 'started-completed',
    title: 'Started & Completed',
    badge: 'EXECUTION',
    badgeStyle: 'text-emerald-400 bg-emerald-950/80 border-emerald-800/80',
    description:
      'Authoritative operational signals emitted by deploy pipeline runners. Never inferred by calendar clock times.',
    tag: 'OPERATIONS TRIGGER ONLY',
  },
  {
    id: 'follow-up',
    title: 'Follow-up',
    badge: 'POST-WINDOW',
    badgeStyle: 'text-blue-400 bg-blue-950/80 border-blue-800/80',
    description:
      'Post-maintenance verification steps, unexpected edge case resolutions, and link references back to the main System Status page.',
    tag: 'INTEGRATED SYSTEM ROUTING',
  },
];

export default function AppendOnlyHistorySection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/service-updates/su-bg2.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Append-only history preserves operational truth
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Every material schedule change, correction, cancellation, and completion is recorded with secure, unalterable timestamps. Past notices are never silently rewritten.
          </p>
        </div>

        {/* 6 Event Type Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-6 shadow-lg flex flex-col justify-between hover:border-slate-700/90 transition-all duration-200"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-base sm:text-lg">
                    {card.title}
                  </h3>
                  <span
                    className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider uppercase shrink-0 ${card.badgeStyle}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed my-2">
                  {card.description}
                </p>
              </div>

              {/* Footer Tag */}
              <div className="pt-3 border-t border-slate-800/60">
                <span className="font-mono text-[9px] font-bold text-teal-400 uppercase tracking-wider block">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
