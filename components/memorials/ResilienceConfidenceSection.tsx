'use client';

import React from 'react';

export default function ResilienceConfidenceSection() {
  const scrollToForm = () => {
    const element = document.getElementById('intake-brief-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight">
            Confidence with boundaries
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
            Resilience means planning and controlled service options — not a promise that the event cannot fail.
          </p>
        </div>

        {/* Checklist */}
        <div className="w-full bg-slate-50 rounded-xl border border-slate-200 flex flex-col">
          
          <div className="px-6 py-4.5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="text-slate-900 text-sm font-medium">Source confirmed</div>
            <span className="px-3 py-1 bg-slate-200 rounded text-slate-600 text-xs font-semibold">
              Shown when verified
            </span>
          </div>

          <div className="px-6 py-4.5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="text-slate-900 text-sm font-medium">Audience access configured</div>
            <span className="px-3 py-1 bg-slate-200 rounded text-slate-600 text-xs font-semibold">
              Shown when verified
            </span>
          </div>

          <div className="px-6 py-4.5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="text-slate-900 text-sm font-medium">Captions setting reviewed</div>
            <span className="px-3 py-1 bg-slate-200 rounded text-slate-600 text-xs font-semibold">
              Shown when verified
            </span>
          </div>

          <div className="px-6 py-4.5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="text-slate-900 text-sm font-medium">Support contact known</div>
            <span className="px-3 py-1 bg-slate-200 rounded text-slate-600 text-xs font-semibold">
              Shown when verified
            </span>
          </div>

          <div className="px-6 py-4.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="text-slate-900 text-sm font-medium">Test result</div>
            <span className="px-3 py-1 bg-slate-200 rounded text-slate-600 text-xs font-semibold">
              Shown when verified
            </span>
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-8 sm:p-10 bg-slate-55 rounded-2xl shadow-sm border border-teal-400 flex flex-col gap-5">
            <h3 className="text-gray-900 text-xl font-bold">Event resilience</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Critical dependencies, fallback paths, monitoring, and recovery decisions reviewed for the event.
            </p>
          </div>

          <div className="p-8 sm:p-10 bg-slate-55 rounded-2xl shadow-sm border border-teal-400 flex flex-col gap-5">
            <h3 className="text-gray-900 text-xl font-bold">Assured Event</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              The highest-assurance planning tier. Scope confirmed for the specific event.
            </p>
          </div>

        </div>

        <button 
          onClick={scrollToForm}
          className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-zinc-950 text-base font-bold hover:opacity-95 transition-opacity w-fit cursor-pointer border-none"
        >
          Start briefing setup
        </button>

      </div>
    </section>
  );
}
