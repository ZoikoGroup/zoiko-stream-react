'use client';

import React from 'react';

export default function FinalCtaBand() {
  const scrollToForm = () => {
    const element = document.getElementById('graduation-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-24  text-white overflow-hidden text-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/graduations-detailed/Section - SECTION 16 — FINAL CTA BAND.png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />
 
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-8">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-slate-200 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Plan the ceremony guests should be able to reach.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Ceremony model, audience access, accessibility, production and readiness, recording and replay — planned once, with clear ownership and honest state.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 w-full sm:w-auto pt-2">
          <button 
            onClick={scrollToForm}
            className="px-7 py-3.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-600 rounded-lg text-white text-base font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[0px_4px_16px_rgba(99,102,241,0.25)] border-none w-full sm:w-auto text-center"
          >
            Start your graduation brief
          </button>
          <a 
            href="mailto:support@zoikostream.com"
            className="px-7 py-3.5 rounded-lg border border-white/25 bg-zinc-900/40 text-slate-100 text-base font-bold hover:bg-zinc-900/80 transition-colors cursor-pointer w-full sm:w-auto text-center"
          >
            Talk to an event expert
          </a>
        </div>

        <div className="text-xs sm:text-sm text-gray-500 mt-2">
          Event already in progress?{' '}
          <a href="mailto:support@zoikostream.com" className="text-cyan-400 hover:underline">
            Active-event help &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
