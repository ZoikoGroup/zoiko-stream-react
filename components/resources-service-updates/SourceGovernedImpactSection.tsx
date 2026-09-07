'use client';

import React from 'react';

interface ImpactCard {
  id: string;
  title: string;
  dotColor: string;
  description: string;
}

const IMPACT_CARDS: ImpactCard[] = [
  {
    id: 'no-impact',
    title: 'No Customer Impact Expected',
    dotColor: 'bg-emerald-500',
    description:
      'Approved source explicitly establishes no expected customer-visible effect.',
  },
  {
    id: 'potential-impact',
    title: 'Potential Impact',
    dotColor: 'bg-blue-500',
    description:
      'Source-backed possibility of customer-visible effect within stated scope.',
  },
  {
    id: 'expected-interruption',
    title: 'Expected Interruption',
    dotColor: 'bg-amber-500',
    description:
      'Source confirms planned interruption to specified services during window.',
  },
  {
    id: 'unknown-impact',
    title: 'Unknown',
    dotColor: 'bg-rose-500',
    description:
      'Impact not yet established or source stale. Fail-closed — does not masquerade as safe.',
  },
];

export default function SourceGovernedImpactSection() {
  return (
    <section className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Source-governed impact with honest uncertainty
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Impact statements use only approved operational vocabulary. When impact is unknown, the notice says so — never inferring &quot;no impact&quot; from silence.
          </p>
        </div>

        {/* 4 Impact Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {IMPACT_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-slate-100/90 rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className={`w-2.5 h-2.5 rounded-full ${card.dotColor} shrink-0`} />
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Platform Timing & Timezone Contract Box */}
        <div className="bg-slate-100/90 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-3">
            Core Platform Timing &amp; Timezone Contract
          </h3>

          <div>
            <span className="font-bold text-slate-900 text-xs sm:text-[13px] mb-1 block">
              &bull; Timezone Database Management
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every notice stores its authoritative scheduled start and end parameters in UTC. Viewer local time calculations always leverage named IANA zone parameters, ensuring robust handling of dynamic Daylight Saving Time shifts.
            </p>
          </div>

          <div className="pt-2">
            <span className="font-bold text-slate-900 text-xs sm:text-[13px] mb-1 block">
              &bull; Immutable Window Preservation
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              When a planned service update is rescheduled, the original window is mathematically preserved inside the append-only change history block. This guarantees a verifiable operational audit trail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
