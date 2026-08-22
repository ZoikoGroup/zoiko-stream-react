'use client';

import React from 'react';

export default function WeddingTrustDoctrine() {
  const cards = [
    {
      title: 'No unsupported claims',
      desc: 'Our platform limits are backed strictly by active operational testing histories.'
    },
    {
      title: 'Evidence-backed capabilities',
      desc: 'Verify live bandwidth metrics and packet structures inside our dashboard.'
    },
    {
      title: 'Transparent limitations',
      desc: 'No magic infinite streams. We outline failover metrics clearly beforehand.'
    },
    {
      title: 'Privacy by design',
      desc: 'Zero invasive third-party ad tracking embedded in guest web players.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 bg-white text-zinc-905 border-b border-slate-200 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-10 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3">
          <h2 className="text-zinc-950 text-2xl font-bold font-spaceGrotesk tracking-tight">
            Built on trust, not promises
          </h2>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-start items-start gap-2 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <div className="flex items-center gap-2 w-full">
                <div className="size-2 bg-blue-500 rounded-full shrink-0" />
                <h3 className="text-zinc-955 text-base font-bold font-spaceGrotesk">
                  {c.title}
                </h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left pl-4">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
