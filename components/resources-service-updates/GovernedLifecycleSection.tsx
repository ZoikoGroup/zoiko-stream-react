'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const STAGES = [
  { name: 'Draft', style: 'bg-slate-900 border-slate-700 text-slate-400' },
  { name: 'Scheduled', style: 'bg-teal-950/80 border-teal-800/80 text-teal-300' },
  { name: 'In Progress', style: 'bg-blue-950/80 border-blue-800/80 text-blue-300' },
  { name: 'Completed', style: 'bg-emerald-950/80 border-emerald-800/80 text-emerald-300' },
];

const PRINCIPLES = [
  {
    title: 'Time \u2260 State',
    description:
      'Clock time is contextual, not authoritative. States require explicit operations events, not timestamp comparison.',
  },
  {
    title: 'Expected \u2260 Actual',
    description:
      'Expected impact is planning context. Once actual degradation exists, System status owns the condition.',
  },
  {
    title: 'One Notice, One Identity',
    description:
      'Reschedules, corrections, and cancellations update the same canonical notice — never creating duplicate pages.',
  },
];

export default function GovernedLifecycleSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Every notice follows a governed lifecycle
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Service update states are backend-authoritative — wall-clock time never auto-promotes lifecycle. Scheduled start passing does not prove work began. Scheduled end passing does not prove work completed.
          </p>
        </div>

        {/* Lifecycle Flow Contract Card */}
        <div className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-8 mb-8 shadow-2xl">
          <span className="font-mono text-[10px] font-bold text-cyan-400 tracking-wider uppercase mb-5 block">
            ZOIKOSTREAM LIFECYCLE FLOW CONTRACT
          </span>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-2 mb-6">
            {STAGES.map((stg, idx) => (
              <React.Fragment key={stg.name}>
                <div
                  className={`w-full flex-1 rounded-xl border ${stg.style} px-4 py-3 font-mono text-xs font-bold text-center`}
                >
                  {stg.name}
                </div>
                {idx < STAGES.length - 1 && (
                  <div className="hidden md:flex items-center text-slate-600 font-mono text-xs px-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Exception Paths */}
          <div className="border-t border-slate-800/80 pt-4">
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">
              Alternative Exception Paths &amp; Escapes:
            </span>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">
              &bull; Scheduled &rarr; <span className="text-teal-300 font-bold">Rescheduled</span> (loops back to Scheduled) &bull; Scheduled &rarr; <span className="text-rose-400 font-bold">Cancelled</span> &bull; In Progress &rarr; <span className="text-blue-400 font-bold">Completed with Follow-up</span> &bull; Any state &rarr; <span className="text-amber-400 font-bold">Review Required</span>
            </p>
          </div>
        </div>

        {/* 3 Principle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRINCIPLES.map((item) => (
            <div
              key={item.title}
              className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-6 shadow-lg hover:border-slate-700/90 transition-all duration-200"
            >
              <h3 className="font-bold text-white text-base sm:text-lg mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
