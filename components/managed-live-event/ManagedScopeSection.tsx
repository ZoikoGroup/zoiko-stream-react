'use client';

import React from 'react';

export default function ManagedScopeSection() {
  const scrollToBrief = () => {
    const element = document.getElementById('managed-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/managed-live-event/bg (10).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-950/80 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-start items-center gap-12 sm:gap-16 text-left">
        
        {/* Left text column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          <h2 className="text-slate-105 text-3xl sm:text-3xl font-bold font-sans leading-[50px] tracking-tight">
            Managed means the operating scope is agreed — not assumed.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Unlike generic platforms that promise &quot;automated flawless delivery,&quot; we treat live events with structural rigor. We map exactly where our networks begin and where your venue AV interfaces. Every role, transcoder target, and emergency failover has a named, certified owner.
          </p>
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto font-sans">
            <button 
              onClick={scrollToBrief}
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer border-none text-center w-full sm:w-auto"
            >
              Start event brief
            </button>
            <a 
              href="/talk-to-an-expert"
              className="px-7 py-3.5 rounded-lg border border-gray-500 bg-zinc-900/40 text-slate-100 text-sm font-medium hover:bg-zinc-900/80 transition-colors cursor-pointer text-center w-full sm:w-auto"
            >
              Talk to an expert
            </a>
          </div>
        </div>

        {/* Right dashboard matrix column */}
        <div className="w-full lg:w-[500px] p-6 bg-gray-900/90 rounded-2xl border border-slate-800 flex flex-col justify-start items-start gap-4 backdrop-blur-sm shadow-xl font-sans">
          <span className="text-slate-100 text-sm font-bold">
            Operational Matrix (Simplified)
          </span>
          <div className="w-full h-px bg-slate-800" />
          
          <div className="w-full flex flex-col gap-3">
            <div className="w-full pb-2.5  flex justify-between items-center text-xs">
              <span className="text-slate-200">Live Transcoding</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">ZoikoStream</span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              </div>
            </div>
            
            <div className="w-full pb-2.5  flex justify-between items-center text-xs">
              <span className="text-slate-200">Sanctuary AV Mixer</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Customer / Venue</span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              </div>
            </div>

            <div className="w-full flex justify-between items-center text-xs">
              <span className="text-slate-200">Interpreters Routing</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Shared Partner</span>
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
