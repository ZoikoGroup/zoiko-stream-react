'use client';

import React from 'react';
import { Info } from 'lucide-react';

export default function CtaFooterPanel() {
  const scrollToForm = () => {
    const element = document.getElementById('intake-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="contact-expert"
      className="w-full py-20 bg-zinc-950 bg-[url('/images/memorials/bg-image (2).png')] bg-cover bg-center bg-no-repeat text-white relative overflow-hidden transition-colors duration-200 border-t border-slate-900"
    >
      {/* Glow overlay */}
      <div className="pointer-events-none absolute -left-1/3 -top-1/2 h-full w-full rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-1/3 -bottom-1/2 h-full w-full rounded-full bg-teal-500/10 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-start items-center gap-8 text-center">
        
        <h2 className="text-slate-100 text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
          Plan the memorial with the right viewing, access, and support choices
        </h2>
        
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Start with the event basics. ZoikoStream can use the brief to route you to the appropriate published setup or expert path.
        </p>

        <div className="flex justify-center items-center gap-4 mt-2">
          <button 
            onClick={scrollToForm}
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-zinc-900 text-base font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-lg border-none"
          >
            Start brief
          </button>
          <a 
            href="/talk-to-an-expert"
            className="px-7 py-3.5 rounded-lg border border-slate-700 bg-zinc-900/50 hover:bg-zinc-900 text-slate-100 text-base font-bold transition-colors cursor-pointer"
          >
            Email expert
          </a>
        </div>

        <div className="text-slate-505 text-xs sm:text-sm mt-2 flex items-center gap-1.5 justify-center">
          <Info className="w-4 h-4 text-slate-600 shrink-0" />
          <span>No sensitive memorial details are required to understand the next step.</span>
        </div>

      </div>
    </section>
  );
}
