'use client';

import React from 'react';

export default function CivicCtaBand() {
  const scrollToBrief = () => {
    const element = document.getElementById('civic-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/civic-events-detailed/bg (4).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-950/80 pointer-events-none" />

      {/* Note: max-w-7xl here because it is excluded from max-w-6xl constraint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center gap-10 overflow-hidden text-center">
        
        <div className="max-w-4xl flex flex-col justify-start items-center gap-6">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-3xl font-bold font-sans leading-tight tracking-tight">
            Plan the proceedings the public should be able to reach.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            Event model, public access, accessibility, production, recording, and readiness — planned once with clear ownership.
          </p>
          <div className="pt-4 font-sans">
            <button 
              onClick={scrollToBrief}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-600 rounded-lg text-white text-base font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[0px_4px_16px_rgba(99,102,241,0.25)] border-none"
            >
              Start your civic event brief
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
