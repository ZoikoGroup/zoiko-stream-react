'use client';

import React from 'react';

export default function CorpHero() {
  const scrollToBrief = () => {
    const element = document.getElementById('corporate-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[743px] flex items-center text-white overflow-hidden py-16 sm:py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/corporate-broadcast-detailed/hero-bg (4).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-955/60 pointer-events-none" />

      {/* Radial Glow overlays */}
      <div className="pointer-events-none absolute -left-1/3 -top-1/2 h-full w-full rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row justify-start items-center gap-12 text-left">
        
        {/* Left Column */}
        <div className="w-full lg:w-[640px] flex flex-col justify-start items-start gap-8">
          
          <div className="px-3.5 py-1.5 rounded-full border border-blue-500 inline-flex justify-start items-center gap-2 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
            <div className="text-blue-500 text-xs font-bold tracking-wider uppercase font-sans">
              CORPORATE BROADCASTS
            </div>
          </div>

          <h1 className="text-slate-100 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-sans tracking-tight">
            Make every corporate broadcast clear, controlled, and ready.
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            Plan an enterprise event, town hall, or earnings webcast with guaranteed resilience, complete audience control, robust accessibility options, and professional operator assistance.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto font-sans">
            <button 
              onClick={scrollToBrief}
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-900 text-base font-bold hover:opacity-90 transition-opacity cursor-pointer border-none"
            >
              Start your corporate broadcast brief
            </button>
            <a 
              href="mailto:support@zoikostream.com"
              className="px-7 py-3.5 rounded-[10px] border border-gray-500 bg-zinc-900/40 text-slate-100 text-base font-bold hover:bg-zinc-900/80 transition-colors cursor-pointer text-center"
            >
              Talk to an event expert
            </a>
          </div>

          <div className="text-zinc-400 text-xs font-medium font-sans">
            Deploying on Zoiko Stream means 99.99% stream uptime SLA compliance.
          </div>
        </div>

        {/* Right Column (Compliance Controls Card) */}
        <div className="w-full lg:w-[460px] p-6 bg-gray-900/80 rounded-3xl border border-slate-800 backdrop-blur-[10px] inline-flex flex-col justify-start items-start gap-4 font-sans shadow-2xl">
          <div className="text-white text-xl font-bold leading-7">
            Corporate Compliance Controls
          </div>
          
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            
            <div className="w-full pb-2 border-b border-slate-800 flex justify-between items-center text-sm">
              <span className="text-slate-105 font-normal">Internal auth & SSO</span>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-450 text-xs font-normal rounded-sm">
                Verified
              </span>
            </div>

            <div className="w-full pb-2 border-b border-slate-800 flex justify-between items-center text-sm">
              <span className="text-slate-105 font-normal">Primary backup fiber tested</span>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-450 text-xs font-normal rounded-sm">
                Verified
              </span>
            </div>

            <div className="w-full pb-2 border-b border-slate-800 flex justify-between items-center text-sm">
              <span className="text-slate-105 font-normal">Active Q&A moderator assigned</span>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-450 text-xs font-normal rounded-sm">
                Verified
              </span>
            </div>

            <div className="w-full pb-2 border-b border-slate-800 flex justify-between items-center text-sm">
              <span className="text-slate-105 font-normal">Real-time captions path</span>
              <span className="px-3 py-1 bg-slate-500/10 text-slate-500 text-xs font-normal rounded-sm">
                Pending
              </span>
            </div>

            <div className="w-full flex justify-between items-center text-sm">
              <span className="text-slate-105 font-normal">SLA network monitoring</span>
              <span className="px-3 py-1 bg-slate-500/10 text-slate-550 text-xs font-normal rounded-sm">
                Draft
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
