'use client';

import React from 'react';

export default function PlatformHero() {
  const scrollToBrief = () => {
    const el = document.getElementById('platform-cta-band');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-slate-950 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/platform-overview/bg (45).png')" }}
      />
      {/* slate-950/70 mask */}
      <div className="absolute inset-0 bg-slate-955/70 pointer-events-none z-0" />
      <div className="absolute right-[-100px] top-[-100px] w-[600px] h-[500px] bg-gradient-to-b from-teal-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-left">
        
        {/* Left Column: Text */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6 max-w-xl">
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 inline-flex items-center gap-2 bg-teal-500/10">
            <div className="size-1.5 bg-teal-450 rounded-full animate-ping" />
            <span className="text-teal-450 text-xs font-bold uppercase tracking-wide">
              ONE PLATFORM
            </span>
          </div>

          <h1 className="text-slate-101 text-5xl sm:text-5xl font-bold leading-[1.1] tracking-tight">
            Secure media infrastructure for the complete video lifecycle.
          </h1>

          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            ZoikoStream combines programmable APIs, enterprise media operations, secure delivery, recording, replay, captions, translation, analytics, and resilient workflows in one platform.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToBrief}
              className="px-6 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold rounded-[10px] cursor-pointer border-none shadow-md"
            >
              Start building
            </button>
            <a 
              href="mailto:support@zoikostream.com"
              className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-405 transition-colors text-slate-100 text-base font-medium"
            >
              Talk to an expert
            </a>
          </div>
        </div>

        {/* Right Column: Telemetry Box */}
        <div className="w-full lg:w-[500px] p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col gap-6 shadow-2xl">
          <h3 className="text-slate-101 text-lg font-bold">
            ACTIVE WORKFLOW TELEMETRY
          </h3>
          
          <div className="flex flex-col gap-4 w-full text-xs">
            <div className="flex justify-between items-center w-full">
              <span className="text-slate-400">Source Signal</span>
              <span className="text-teal-450 font-bold">SRT Ingest (Stable)</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-slate-400">Processing Nodes</span>
              <span className="text-teal-455 font-bold">Transcoding Active</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-slate-400">Delivery Network</span>
              <span className="text-teal-455 font-bold">99.99% Node Integrity</span>
            </div>
          </div>
          
          <div className="h-px bg-gray-800 w-full" />
          
          <div className="flex justify-between items-center w-full">
            <span className="text-slate-500 text-xs">System Status</span>
            <span className="px-2 py-1 bg-teal-500/10 text-teal-400 text-xs font-bold rounded-sm tracking-wider">
              ONLINE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
