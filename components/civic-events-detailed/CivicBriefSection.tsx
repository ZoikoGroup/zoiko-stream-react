  'use client';

import React from 'react';

export default function CivicBriefSection() {
  const steps = [
    {
      num: '1',
      title: 'Event basics',
      desc: 'Define official municipal host, public event type, planned schedule parameters, and geographical time zones.'
    },
    {
      num: '2',
      title: 'Event model',
      desc: 'Map single-site streams, virtual meetings, or concurrent multi-site chamber configurations.'
    },
    {
      num: '3',
      title: 'Audience & access',
      desc: 'Specify public participation limits, token parameters, or municipal credential checkouts.'
    },
    {
      num: '4',
      title: 'Accessibility',
      desc: 'Establish closed caption paths, multiple language slots, and emergency accessibility advisor channels.'
    },
    {
      num: '5',
      title: 'Production & readiness',
      desc: 'Detail AV partnership on-site, hardware ingestion routes, and active support technician contacts.'
    },
    {
      num: '6',
      title: 'Contact & consent',
      desc: 'Register official work address, public agency title, and verified administrative work emails.'
    },
    {
      num: '7',
      title: 'Review & submit',
      desc: 'Generate human-readable summaries with quick-edit overrides prior to ledger submission.'
    }
  ];

  return (
    <section 
      id="civic-brief-form"
      className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-40"
        style={{ backgroundImage: "url('/images/civic-events-detailed/bg (4).png')" }}
      />
      {/* Transparent Black Overlay (Cover) */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Tell us what you need — nothing you shouldn&apos;t share
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            The brief collects only operationally necessary information.
          </p>
        </div>

        {/* Horizontal / Grid representation of the steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div 
                key={idx}
                className="flex flex-col justify-start items-start gap-4 hover:translate-y-[-2px] transition-transform"
              >
                {/* Step indicator */}
                <div className="flex items-center gap-2 w-full">
                  <div className="w-7 h-7 bg-teal-400 dark:bg-teal-500/20 text-zinc-950 dark:text-teal-400 rounded-full flex justify-center items-center font-bold text-xs font-sans">
                    {step.num}
                  </div>
                  {!isLast && (
                    <div className="flex-1 h-0.5 bg-slate-800 hidden lg:block" />
                  )}
                </div>
                
                {/* Step contents */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-100 text-sm font-bold font-sans leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
