'use client';

import React from 'react';
import { ShieldCheck, UserCheck, HardDrive } from 'lucide-react';

export default function WeddingSupport() {
  const cards = [
    {
      title: 'Pre-event testing',
      desc: 'Complete 10-point signal check mapping local video ingest buffers and connection jitter limits at the ceremony site beforehand.',
      icon: ShieldCheck
    },
    {
      title: 'Live event support',
      desc: 'Senior L1 infrastructure engineers dedicated strictly to your allocated broadcast window. Direct operations chat active.',
      icon: UserCheck
    },
    {
      title: 'Post-event closeout',
      desc: 'Retrieve permanent downloadable VOD records and complete data usage diagnostics packaged within 24 hours.',
      icon: HardDrive
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/wedding-celebration/bg (34).png')" }}
      />
      <div className="absolute left-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Readiness, resilience &amp; event support
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Readiness checks, failure states, ownership clarity, and help when you need it.
          </p>
        </div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-4 hover:border-zinc-700/50 transition-all duration-300 shadow-md"
              >
                {/* Icon badge */}
                <div className="size-11 bg-teal-400/10 rounded-[10px] flex justify-center items-center shrink-0">
                  <Icon className="size-5 text-teal-400 stroke-[1.8]" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-slate-100 text-lg font-bold font-spaceGrotesk">
                    {c.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex justify-start pt-2">
          <button className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none shadow-md">
            Plan your support
          </button>
        </div>

      </div>
    </section>
  );
}
