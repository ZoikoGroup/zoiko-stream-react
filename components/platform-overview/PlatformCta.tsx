'use client';

import React from 'react';

interface PlatformCtaProps {
  onStartBrief?: () => void;
}

export default function PlatformCta({ onStartBrief }: PlatformCtaProps) {
  return (
    <section 
      id="platform-cta-band"
      className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-slate-955 to-zinc-955 text-white overflow-hidden border-b border-zinc-900 flex flex-col justify-center items-center text-center"
                          style={{ backgroundImage: "url('/images/platform-overview/SectionBackground (5).png')" }}

    >
      {/* Background Decorator */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-teal-500/10 to-blue-500/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center gap-8 font-spaceGrotesk">
        
        {/* Texts */}
        <div className="flex flex-col gap-4 items-center max-w-3xl">
          <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Ready to plan your live event?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Start with a simple event brief — no commitment, no pressure. Every live event deserves clear decisions and visible ownership.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button 
            onClick={onStartBrief}
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold rounded-[10px] cursor-pointer border-none shadow-md"
          >
            Start your event brief
          </button>
          <a 
            href="#"
            className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-400 bg-transparent transition-colors text-slate-105 text-base font-medium"
          >
            Talk to an event expert
          </a>
        </div>

      </div>
    </section>
  );
}
