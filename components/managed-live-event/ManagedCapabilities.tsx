'use client';

import React from 'react';

export default function ManagedCapabilities() {
  const cards = [
    {
      title: 'Scope & ownership',
      desc: 'Explicit responsibility split negotiated beforehand.',
      img: '/images/managed-live-event/Rectangle (38).png'
    },
    {
      title: 'Technical prep',
      desc: 'Rigorous pre-event validation of encoders and bandwidth.',
      img: '/images/managed-live-event/Rectangle (39).png'
    },
    {
      title: 'Run of show',
      desc: 'Cue sheets synchronized across the entire tech staff.',
      img: '/images/managed-live-event/Rectangle (40).png'
    },
    {
      title: 'Readiness',
      desc: 'Derived preflight milestones with zero hidden states.',
      img: '/images/managed-live-event/Rectangle (41).png'
    },
    {
      title: 'Live operations',
      desc: 'Sub-second active monitoring and remote backup routing.',
      img: '/images/managed-live-event/Rectangle (42).png'
    },
    {
      title: 'Post-event handoff',
      desc: 'Clean transition of compliant recordings to storage.',
      img: '/images/managed-live-event/Rectangle (43).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white transition-colors duration-250 border-t border-slate-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-950 dark:text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Stream capabilities engineered for enterprise scale
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-zinc-900/60 rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.06)] dark:shadow-none border border-slate-200 dark:border-zinc-800 flex flex-col justify-start items-start overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="w-full h-44 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  src={c.img} 
                  alt={c.title} 
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-zinc-900 dark:text-white text-base font-bold font-sans">
                  {c.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
