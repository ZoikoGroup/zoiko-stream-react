'use client';

import React from 'react';

export default function ManagedCtaBand() {
  const scrollToBrief = () => {
    const element = document.getElementById('managed-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/managed-live-event/bg (16).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-955/80 pointer-events-none" />

      {/* Note: max-w-7xl here because it is excluded from max-w-6xl constraint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center gap-10 overflow-hidden text-center">
        
        <div className="max-w-4xl flex flex-col justify-start items-center gap-6">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-sans leading-tight tracking-tight">
            Plan your next service with the right access, production, and support
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            Submit your basic service details, and our specialized event team will guide you through our clear operational paths.
          </p>
          <div className="pt-4 font-sans flex flex-wrap justify-center items-center gap-4">
            <button 
              onClick={scrollToBrief}
              className="px-8 py-4 bg-gradient-to-r from-teal-405 to-blue-500 rounded-lg text-slate-950 text-base font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[0px_4px_16px_rgba(51,217,199,0.20)] border-none"
            >
              Plan a Live Event
            </button>
            <a 
              href="mailto:support@zoikostream.com"
              className="px-8 py-4 rounded-lg border border-gray-500 bg-zinc-900/40 text-slate-105 text-sm font-medium hover:bg-zinc-900/80 transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Talk to an expert
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
