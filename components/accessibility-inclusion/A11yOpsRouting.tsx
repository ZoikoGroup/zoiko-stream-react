'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function A11yOpsRouting() {
  const steps = [
    { num: 'STEP 01', title: 'Viewer Report', desc: 'Issue flagged in player overlay', style: 'border-zinc-800 text-slate-500' },
    { num: 'STEP 02', title: 'A11y Triage', desc: 'System maps active context', style: 'border-zinc-800 text-teal-400' },
    { num: 'STEP 03', title: 'Ops Escalation', desc: 'Routed to on-duty L2 team', style: 'border-zinc-800 text-blue-400' },
    { num: 'STEP 04', title: 'Recovery Action', desc: 'Fallback pipeline deployed', style: 'border-zinc-800 text-teal-400' },
    { num: 'STEP 05', title: 'Status Logged', desc: 'Viewer confirmed resolved', style: 'border-emerald-500 text-emerald-400' }
  ];

  const cards = [
    {
      title: 'Dedicated Routing',
      desc: 'Accessibility failures instantly bypass standard marketing or sales queues. Direct priority streams reach senior engineers within seconds.',
      img: '/images/accessibility-inclusion/Rectangle (74).png'
    },
    {
      title: 'Event Context',
      desc: 'Ops sees active player session metrics, accessibility config parameters, and registered limitations instantly to eliminate discovery lag.',
      img: '/images/accessibility-inclusion/Rectangle (75).png'
    },
    {
      title: 'Recovery States',
      desc: 'Monitor status phases — Degraded, Recovering, or Resolved — clearly logged and accessible to viewers during active live transmissions.',
      img: '/images/accessibility-inclusion/Rectangle (76).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-30"
        style={{ backgroundImage: "url('/images/accessibility-inclusion/bg (28).png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950/90 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Active-event accessibility issues route to operations, not Sales.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            Dedicated issue routing for live accessibility failures with event/session context and urgency.
          </p>
        </div>

        {/* Timeline Panel */}
        <div className="w-full p-6 sm:p-8 bg-zinc-950/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-xl backdrop-blur-sm">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
            ACCESSIBILITY RECOVERY PATHWAY
          </span>

          {/* Timeline steps row */}
          <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 w-full">
            {steps.map((s, idx) => (
              <React.Fragment key={idx}>
                {/* Step item */}
                <div className={`flex-1 p-5 rounded-lg border bg-zinc-900/60 flex flex-col justify-start items-start gap-1 text-left ${s.style}`}>
                  <span className="text-[10px] font-bold font-mono tracking-wider uppercase opacity-90">{s.num}</span>
                  <h4 className="text-slate-105 text-sm font-bold leading-tight">{s.title}</h4>
                  <p className="text-slate-400 text-[11px] font-normal leading-normal">{s.desc}</p>
                </div>

                {/* Chevron connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-teal-450 mx-1 shrink-0">
                    <ChevronRight className="size-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3 cards bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/80 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700/50 flex flex-col transition-all duration-300 shadow-md"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full bg-zinc-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col gap-2.5 justify-start items-start text-left">
                <h3 className="text-slate-105 text-lg font-bold leading-snug">
                  {c.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
