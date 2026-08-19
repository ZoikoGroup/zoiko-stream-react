'use client';

import React from 'react';

export default function ManagedSupportSection() {
  const handleSupportClick = () => {
    alert('Simulating direct NOC support line connection...');
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-250 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-start items-center gap-12 sm:gap-16 text-left">
        
        {/* Left text column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-4">
          <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Dedicated operational support, separate from sales.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-light">
            When you are live, you have direct, SLA-governed channels to technical operators. Our monitoring team actively supervises transcoders and network indicators.
          </p>
        </div>

        {/* Right card column */}
        <div className="w-full lg:w-96 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-start items-start gap-4 font-sans shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-zinc-950 text-xs font-bold tracking-wider uppercase">
              REAL-TIME TECH CREW ACTIVE
            </span>
          </div>
          
          <p className="text-slate-600 text-sm leading-relaxed">
            Dedicated active-event phone link and emergency NOC chat assigned to your event brief.
          </p>

          <button 
            onClick={handleSupportClick}
            className="w-full px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-white text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer border-none text-center shadow-sm"
          >
            Active-event help
          </button>
        </div>

      </div>
    </section>
  );
}
