'use client';

import React from 'react';
import { Check } from 'lucide-react';

export default function PlatformManagedEvents() {
  const list = [
    'Event Fit Validation',
    'Access Control Management',
    'Live Captions & translation',
    'Failover Path Assurance',
    'VOD Package Compilation'
  ];

  const scrollToBrief = () => {
    const el = document.getElementById('platform-cta-band');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-955 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/platform-overview/bg (48).png')" }}
      />
      <div className="absolute inset-0 bg-black/70 pointer-events-none z-0" />
      <div className="absolute left-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-555/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-left">
        
        {/* Left Column: Text & Buttons */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6 max-w-xl">
          <h2 className="text-slate-101 text-4xl font-bold tracking-tight">
            Managed Live Events within ZoikoStream
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            Professionally operated event workflows use the same secure media foundation, with event-specific planning and operational support. Banish stream anxiety with our expert L1 support engineers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={scrollToBrief}
              className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold rounded-[10px] cursor-pointer border-none shadow-md"
            >
              Plan a live event
            </button>
            <a 
              href="mailto:support@zoikostream.com"
              className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-100 hover:outline-teal-405 transition-colors text-slate-100 text-base font-medium"
            >
              Talk to an expert
            </a>
          </div>
        </div>

        {/* Right Column: Event Capabilities */}
        <div className="w-full lg:w-[500px] p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-5 shadow-2xl">
          <h3 className="text-slate-100 text-lg font-bold">
            EVENT CAPABILITIES
          </h3>
          
          <div className="flex flex-col gap-3.5 w-full">
            {list.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-left">
                {/* Teal Icon Box */}
                <div className="size-6 bg-teal-500/10 rounded flex justify-center items-center shrink-0">
                  <Check className="size-4 text-teal-400 stroke-[2.2]" />
                </div>
                <span className="text-slate-400 text-sm sm:text-base font-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
