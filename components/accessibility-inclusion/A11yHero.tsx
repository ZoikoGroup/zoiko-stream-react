'use client';

import React from 'react';

export default function A11yHero() {
  const monitors = [
    { label: 'Keyboard Navigation', status: 'VERIFIED', style: 'text-emerald-500 bg-emerald-500/10 outline-emerald-500/30' },
    { label: 'Sign Language Overlay', status: 'PLANNED', style: 'text-blue-500 bg-blue-500/10 outline-blue-500/30' },
    { label: 'Live Captions Stream', status: 'CHANGED', style: 'text-amber-500 bg-amber-500/10 outline-amber-500/30' },
    { label: 'Complex SVG Alternatives', status: 'LIMITATION', style: 'text-red-500 bg-red-500/10 outline-red-500/30' },
    { label: 'Real-Time Braille Stream', status: 'UNAVAILABLE', style: 'text-slate-400 bg-slate-400/10 outline-zinc-800' }
  ];

  const scrollToBrief = () => {
    const el = document.getElementById('a11y-brief-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-25"
        style={{ backgroundImage: "url('/images/accessibility-inclusion/bg (25).png')" }}
      />
      <div className="absolute right-[-100px] top-[-80px] w-[600px] h-[500px] bg-gradient-to-b from-blue-500/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Max-w-6xl constraint */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-left">
        
        {/* Left Column: Hero Text */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6 max-w-xl">
          <div className="px-3 py-1 bg-teal-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-500/30 inline-flex items-center">
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              Accessibility &amp; Inclusion
            </span>
          </div>
          
          <h1 className="text-slate-100 text-4xl sm:text-5xl lg:text-6xl font-bold font-spaceGrotesk leading-[1.1] tracking-tight">
            Plan an event more people can access and understand
          </h1>
          
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Define accessibility requirements early, make available viewer options easy to use, verify what matters before go-live, and keep limitations and recovery paths visible when conditions change.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToBrief}
              className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none"
            >
              Plan accessibility
            </button>
            <a 
              href="mailto:support@zoikostream.com"
              className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-400 transition-colors text-slate-100 text-base font-medium font-spaceGrotesk"
            >
              Talk to an expert
            </a>
          </div>
        </div>

        {/* Right Column: Readiness Monitor Panel */}
        <div className="w-full lg:w-[480px] p-6 sm:p-7 bg-zinc-900/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4 shadow-2xl">
          <div className="flex justify-between items-center w-full pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-slate-100 text-xs font-bold font-spaceGrotesk tracking-wide uppercase">
                Accessibility Readiness Monitor
              </span>
            </div>
            <span className="text-slate-500 text-[10px] font-mono tracking-wider">VERIFICATION: V2.4</span>
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            {monitors.map((m, idx) => (
              <div 
                key={idx}
                className="p-3 bg-zinc-950/60 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-800/80 flex justify-between items-center hover:bg-zinc-950 transition-colors"
              >
                <span className="text-slate-100 text-xs sm:text-sm font-normal font-spaceGrotesk">
                  {m.label}
                </span>
                <span className={`px-2 py-0.5 rounded-sm outline outline-1 text-[10px] font-bold font-mono tracking-wide shrink-0 ${m.style}`}>
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
