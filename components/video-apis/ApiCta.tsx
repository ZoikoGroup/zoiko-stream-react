'use client';

import React from 'react';

interface ApiCtaProps {
  onStartBuild?: () => void;
}

export default function ApiCta({ onStartBuild }: ApiCtaProps) {
  return (
    <section 
      id="api-cta-band"
      className="relative w-full py-20 sm:py-28 bg-slate-950 text-white overflow-hidden border-t border-gray-800 flex flex-col justify-center items-center text-center font-spaceGrotesk"
    >
      {/* Background Decorator */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center gap-8">
        
        {/* Texts */}
        <div className="flex flex-col gap-4 items-center max-w-3xl">
          <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Ready to build?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            Start building programmable video workflows with ZoikoStream Video APIs today. Explore our sandboxes without commitment.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button 
            onClick={onStartBuild}
            className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold rounded-[10px] cursor-pointer border-none shadow-md"
          >
            Start Building
          </button>
          <a 
            href="mailto:support@zoikostream.com"
            className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 hover:outline-teal-400 bg-transparent transition-colors text-slate-105 text-base font-medium"
          >
            Talk to an expert
          </a>
        </div>

      </div>
    </section>
  );
}
