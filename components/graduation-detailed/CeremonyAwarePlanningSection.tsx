'use client';

import React from 'react';

export default function CeremonyAwarePlanningSection() {
  const steps = [
    {
      num: '1',
      title: 'Define',
      desc: 'What ceremony or event series is being planned?',
      cyanText: 'Event-type cards · date/time · site count'
    },
    {
      num: '2',
      title: 'Program',
      desc: 'What is the ceremony sequence and which source is authoritative?',
      cyanText: 'Program version · last updated · owner'
    },
    {
      num: '3',
      title: 'Access',
      desc: 'Who should be able to watch, and how?',
      cyanText: 'Access-intent selector · verified state'
    },
    {
      num: '4',
      title: 'Include',
      desc: 'What caption, language, assistive, or remote-contributor needs exist?',
      cyanText: 'Accessibility card · needs review'
    },
    {
      num: '5',
      title: 'Ready',
      desc: 'Who owns source/audio/graphics/connectivity, and what has been tested?',
      cyanText: 'Responsibility matrix · preflight'
    },
    {
      num: '6',
      title: 'Operate',
      desc: 'What happens if something changes or the event needs help?',
      cyanText: 'Escalation · active-event help'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24  text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/graduations-detailed/Section - SECTION 3 — SIX-STEP PLANNING FLOW (1).png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-7xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Why graduation streaming needs ceremony-aware planning
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed ">
            A graduation has a start time, doors, processional, speeches, name calls, stage moments, recessional, possibly multiple ceremonies, audience peaks, accessibility needs, and often a recording/replay decision. Six steps carry an organizer through each of them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 bg-slate-900/80 rounded-xl border border-white/10 flex flex-col gap-4 hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-8 h-8 bg-cyan-400/10 rounded-lg outline outline-1 outline-cyan-400/30 flex justify-center items-center">
                <span className="text-cyan-300 text-sm font-bold">{step.num}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-base sm:text-lg font-bold font-sans">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed min-h-[40px]">
                  {step.desc}
                </p>
                <div className="text-cyan-400 text-xs sm:text-sm mt-1">
                  {step.cyanText}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
