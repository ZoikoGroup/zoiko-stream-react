import React from 'react';

export default function PricingDeveloperAccessDecisionsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-100 flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            TWO INDEPENDENT DECISIONS
          </span>
        </div>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-snug max-w-3xl">
          Access state and commercial state are modeled separately.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Whether you can build, and what it costs, are two different questions with two different, source-backed answers.
        </p>
      </div>

      {/* 2 Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Access State */}
        <div className="relative bg-white rounded-2xl p-7 outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between gap-6 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
          <div className="absolute size-28 -right-8 -top-8 bg-teal-600/10 rounded-full pointer-events-none" />
          
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-xs font-semibold font-['IBM_Plex_Mono'] uppercase tracking-wide">
              Access state
            </span>
            <h3 className="text-zinc-900 text-xl sm:text-2xl font-normal font-['Inter']">
              Self-service eligible
            </h3>
            <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-relaxed pt-2">
              Your account can create developer credentials now, without a manual approval step. This applies to the standard developer path described on this page.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono']">
              Prerequisites: valid account, accepted developer terms
            </span>
          </div>
        </div>

        {/* Card 2: Commercial State */}
        <div className="relative bg-white rounded-2xl p-7 outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between gap-6 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
          <div className="absolute size-28 -right-8 -top-8 bg-blue-500/10 rounded-full pointer-events-none" />

          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-xs font-semibold font-['IBM_Plex_Mono'] uppercase tracking-wide">
              Commercial state
            </span>
            <h3 className="text-zinc-900 text-xl sm:text-2xl font-normal font-['Inter']">
              Estimate available
            </h3>
            <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-relaxed pt-2">
              A non-invoice developer estimate can be generated from approved usage dimensions below. This is not a public fixed price and not a quote.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono']">
              Source version: v1 · reviewed Aug 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
