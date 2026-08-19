'use client';

import React from 'react';

interface ConferenceCtaBandProps {
  onStartBrief?: () => void;
}

export default function ConferenceCtaBand({ onStartBrief }: ConferenceCtaBandProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="conference-brief-section"
      className="relative w-full py-20 sm:py-28 bg-zinc-950 text-white overflow-hidden  text-center flex flex-col justify-center items-center"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/conferences-and-multitrack/bg (24).png')" }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-b from-teal-500/10 to-blue-500/10 rounded-full blur-[80px] pointer-events-none z-0 animate-pulse duration-[10000ms]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center gap-10">
        
        {/* Texts */}
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-slate-100 text-4xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Start planning your multi-session program
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed max-w-3xl">
            One program. Many sessions. Every session keeps its own truth. Build an operational roadmap that matches your strict security, accessibility, and failover requirements.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 w-full sm:w-auto">
          <button 
            onClick={onStartBrief}
            className="px-8 py-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] shadow-[0px_4px_16px_0px_rgba(51,217,199,0.20)] cursor-pointer border-none"
          >
            Start your event brief
          </button>
          <a 
            href="mailto:support@zoikostream.com"
            className="px-8 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-450 hover:outline-teal-400 bg-transparent transition-colors text-slate-100 text-base font-medium font-spaceGrotesk"
          >
            Talk to an expert
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-zinc-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed max-w-2xl">
          Your event brief is a technical planning inquiry, not a confirmed booking. Our engineering team will review and audit your track and safety redundancy requirements prior to final scheduling.
        </p>

      </div>
    </section>
  );
}
