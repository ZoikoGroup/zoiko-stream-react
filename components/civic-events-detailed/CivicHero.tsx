'use client';

import React from 'react';

export default function CivicHero() {
  const scrollToBrief = () => {
    const element = document.getElementById('civic-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[640px] flex items-center text-white overflow-hidden py-16 sm:py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/civic-events-detailed/hero-bg (2).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-950/70 pointer-events-none" />

      {/* Radial Glow overlays */}
      <div className="pointer-events-none absolute -left-1/3 -top-1/2 h-full w-full rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-start items-start gap-8 text-left">
        
        <div className="px-3.5 py-1.5 bg-teal-400/10 rounded-full outline outline-1 outline-teal-400/30 inline-flex justify-start items-center gap-2 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping" />
          <div className="text-teal-400 text-xs font-bold tracking-wider uppercase font-sans">
            LIVE EVENTS / CIVIC EVENTS
          </div>
        </div>

        <h1 className="text-slate-100 text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight font-sans tracking-tight max-w-4xl">
          Bring public proceedings to remote audiences with clarity.
        </h1>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-5xl font-sans">
          Plan public access, accessibility, production responsibility, recording/replay, and event-day readiness from one governed Live Events workflow.
        </p>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2 font-sans">
          <button 
            onClick={scrollToBrief}
            className="px-7 py-3.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-600 rounded-lg text-white text-base font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[0px_4px_16px_rgba(99,102,241,0.25)] border-none w-full sm:w-auto text-center"
          >
            Start your civic event brief
          </button>
          <a 
            href="/talk-to-an-expert"
            className="px-7 py-3.5 rounded-lg border border-gray-500 bg-zinc-900/40 text-slate-100 text-base font-bold hover:bg-zinc-900/80 transition-colors cursor-pointer w-full sm:w-auto text-center"
          >
            Talk to an event expert
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-white/10 w-full text-xs sm:text-sm text-gray-400 font-sans">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-teal-400 rounded-full" />
            Public-access aware
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-teal-400 rounded-full" />
            Accessibility-visible
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-teal-400 rounded-full" />
            Privacy-respecting
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-teal-400 rounded-full" />
            Evidence-governed
          </span>
        </div>

      </div>
    </section>
  );
}
