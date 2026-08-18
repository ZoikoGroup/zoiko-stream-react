'use client';

import React from 'react';

export default function A11yCta() {
  const scrollToBrief = () => {
    const el = document.getElementById('a11y-brief-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-slate-950 text-white overflow-hidden border-b border-zinc-900 flex flex-col justify-center items-center text-center">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/accessibility-inclusion/bg (31).png')" }}
      />
      {/* Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 to-slate-950/80 pointer-events-none z-0" />
      
      {/* Background Decorator */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-teal-500/10 to-blue-500/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center gap-8">
        
        {/* Texts */}
        <div className="flex flex-col gap-4 items-center max-w-4xl">
          <h2 className="text-white text-4xl sm:text-3xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Plan an event more people can access and understand.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Define requirements. Verify readiness. Keep limitations visible. Give viewers operable choices.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button 
            onClick={scrollToBrief}
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] shadow-[0px_4px_16px_0px_rgba(52,212,202,0.20)] cursor-pointer border-none"
          >
            Plan a live event
          </button>
          <a 
            href="mailto:support@zoikostream.com"
            className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-400 bg-transparent transition-colors text-slate-100 text-base font-medium font-spaceGrotesk"
          >
            Talk to an expert
          </a>
        </div>

      </div>
    </section>
  );
}
