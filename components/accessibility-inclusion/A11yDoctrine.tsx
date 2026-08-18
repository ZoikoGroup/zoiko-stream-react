'use client';

import React from 'react';

export default function A11yDoctrine() {
  const steps = [
    {
      num: '01',
      title: 'Requirements before config',
      desc: 'Prevents production teams from assuming one general delivery method works for every live broadcast.'
    },
    {
      num: '02',
      title: 'Visible ownership',
      desc: 'Establishes clear, separate lines of responsibility across event owner, production lead, and accessibility desk.'
    },
    {
      num: '03',
      title: 'Verification before certainty',
      desc: 'Separates what is merely configured in settings from what has been actively tested and signed-off by pre-air ops.'
    },
    {
      num: '04',
      title: 'Material-change awareness',
      desc: 'Triggers instant re-validation prompts whenever sources, presentation materials, or captions change post-verify.'
    },
    {
      num: '05',
      title: 'Limitations stay visible',
      desc: 'Protects audience trust and activates automated alternative channels when primary delivery hits systemic limits.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-50"
        style={{ backgroundImage: "url('/images/accessibility-inclusion/bg (26).png')" }}
      />
      <div className="absolute right-[-200px] bottom-[-200px] w-[500px] h-[500px] bg-gradient-to-t from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Accessibility is a system, not a final-minute toggle
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Deterministic inclusion demands strict programmatic steps throughout the entire event planning workflow.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="p-6 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between items-start gap-4 hover:border-zinc-700/50 transition-colors"
            >
              <span className="text-teal-400 text-sm font-bold font-mono tracking-wider">
                {s.num}
              </span>
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-slate-100 text-base font-bold font-spaceGrotesk leading-snug">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-[11px] sm:text-xs font-normal font-spaceGrotesk leading-relaxed text-left">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
