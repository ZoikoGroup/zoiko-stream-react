'use client';

import React from 'react';

export default function CtaWorshipFooter() {
  const scrollToForm = () => {
    const element = document.getElementById('worship-intake-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="worship-contact-panel"
      className="relative w-full py-20 bg-zinc-950 dark:bg-black text-white overflow-hidden transition-colors duration-200 border-t border-slate-900"
    >
      {/* Background Image with opacity and blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 blur-[2px] pointer-events-none"
        style={{ backgroundImage: "url('/images/workship-detailed/image (34).png')" }}
      />

      {/* Figma color #0B0A13 tint overlay */}
      <div className="absolute inset-0 bg-[#0B0A13]/60 pointer-events-none" />

      {/* Background radial overlays */}
      <div className="pointer-events-none absolute -left-1/3 -top-1/2 h-full w-full rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/3 -bottom-1/2 h-full w-full rounded-full bg-violet-500/10 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-start items-center gap-8 text-center">
        
        <h2 className="text-slate-100 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-sans tracking-tight">
          Plan your next service with the right access, production, and support
        </h2>
        
        <p className="text-slate-400 dark:text-slate-350 text-base sm:text-lg max-w-2xl leading-relaxed">
          Submit your basic service details, and our specialized event team will guide you through our clear operational paths.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2 w-full sm:w-auto">
          <button 
            onClick={scrollToForm}
            className="px-8 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-900 text-base font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-lg border-none w-full sm:w-auto text-center"
          >
            Start your event brief
          </button>
          <a 
            href="mailto:support@zoikostream.com"
            className="px-8 py-3.5 rounded-lg border border-slate-700 bg-zinc-900/50 hover:bg-zinc-900 text-slate-100 dark:text-white text-base font-bold transition-colors cursor-pointer w-full sm:w-auto text-center"
          >
            Email event advisor
          </a>
        </div>

        <div className="text-slate-500 text-xs sm:text-sm mt-2">
          No sensitive worship details are required to complete this step.
        </div>

      </div>
    </section>
  );
}
