'use client';

import React from 'react';

export default function WorkflowBriefChecklist() {
  const checklist = [
    { label: 'Event Type', value: 'Boutique Product Launch & Keynote' },
    { label: 'Target Date', value: 'October 14, 2026 — 10:00 AM PST' },
    { label: 'Physical Venues', value: 'Main Stage San Francisco + Satellite Hub London' },
    { label: 'Audience Intent', value: '2,500 Registered Digital VIP Attendees' },
    { label: 'Accessibility Plans', value: 'Live English CC + French Audio Translation' },
    { label: 'Archive & Replay', value: 'VOD Package compiled within 4 hours of closeout' }
  ];

  const scrollToBrief = () => {
    const el = document.getElementById('workflow-cta-band');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/workflow-overview/bg (38).png')" }}
      />
      {/* bg-black/70 mask */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none z-0" />
      
      <div className="absolute right-[100px] top-[100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-105 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Start with the event, not the equipment
          </h2>
          <p className="text-[#AAB3C4] text-base sm:text-xm font-normal font-spaceGrotesk leading-relaxed">
            Lock in the operational objective first. Our structured brief intake collects basic intent so we can architect the perfect technical layout.
          </p>
        </div>

        {/* Info Grid Split */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 w-full">
          
          {/* Left card container: Checklist */}
          <div className="w-full lg:w-[600px] p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col gap-5 shadow-lg">
            <h3 className="text-slate-105 text-lg font-bold font-spaceGrotesk">
              Brief Intent Checklist
            </h3>
            
            <div className="flex flex-col gap-3 w-full">
              {checklist.map((c, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 bg-slate-950/50 rounded-lg flex justify-between items-start gap-4 border border-zinc-800/40 text-xs font-spaceGrotesk"
                >
                  <span className="text-slate-500 font-bold shrink-0 uppercase tracking-wider">{c.label}</span>
                  <span className="text-slate-105 text-right font-medium">{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Text Column */}
          <div className="flex-1 flex flex-col justify-start items-start gap-6 max-w-xl">
            <h3 className="text-slate-105 text-2xl sm:text-3xl font-bold font-spaceGrotesk leading-tight">
              No infinite hardware scoping calls. Just structure.
            </h3>
            <p className="text-[#AAB3C4] text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
              By standardizing the inputs up front, we bypass hours of painful logistical review. The system analyzes your brief and generates corresponding action targets for connectivity, production operators, and compliance streams.
            </p>
            
            <div className="pt-2">
              <button 
                onClick={scrollToBrief}
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none shadow-md"
              >
                Start your event brief
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
