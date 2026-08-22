'use client';

import React from 'react';

export default function CorpProceedingsLedgerSection() {
  const capabilities = [
    {
      title: 'Audience Access',
      desc: 'Make the viewing path clear for corporate broadcasts.',
      img: '/images/corporate-broadcast-detailed/Rectangle (24).png'
    },
    {
      title: 'Production Ownership',
      desc: 'Clarify venue, source, audio, graphics responsibility.',
      img: '/images/corporate-broadcast-detailed/Rectangle (25).png'
    },
    {
      title: 'Run-of-Show Context',
      desc: 'Keep time, schedule, and status understandable.',
      img: '/images/corporate-broadcast-detailed/Rectangle (26).png'
    },
    {
      title: 'Resilience',
      desc: 'Test critical paths and revalidate after changes.',
      img: '/images/corporate-broadcast-detailed/Rectangle (27).png'
    },
    {
      title: 'Accessibility',
      desc: 'Plan captions, language access, keyboard operation.',
      img: '/images/corporate-broadcast-detailed/Rectangle (28).png'
    },
    {
      title: 'Replay Governance',
      desc: 'Treat recording, replay, archive as separate decisions.',
      img: '/images/corporate-broadcast-detailed/Rectangle (29).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-900 text-4xl font-bold   leading-tight">
            Stream capabilities engineered for enterprise scale
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="w-full h-56 overflow-hidden relative bg-slate-900">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 select-none pointer-events-none" 
                  src={c.img} 
                  alt={c.title} 
                />
              </div>
              <div className="self-stretch p-6 flex flex-col justify-start items-start gap-3">
                <h3 className="text-slate-900 text-lg font-bold  ">
                  {c.title}
                </h3>
                <p className="self-stretch text-slate-600 text-sm font-normal   leading-5">
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
