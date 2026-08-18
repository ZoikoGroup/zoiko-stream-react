'use client';

import React from 'react';

export default function PlatformLifecycle() {
  const steps = [
    { num: '01', title: 'Contribute', desc: 'Register secure RTMP/SRT streams from venue encoders.' },
    { num: '02', title: 'Ingest', desc: 'Fail-safe cloud processing & multi-region intake routing.' },
    { num: '03', title: 'Produce', desc: 'Embed professional visual overlays & lower-third graphics.' },
    { num: '04', title: 'Secure', desc: 'Enforce corporate whitelists & encrypted token access.' },
    { num: '05', title: 'Deliver', desc: 'Low-latency global distribution with adaptive bitrates.' },
    { num: '06', title: 'Understand', desc: 'Query live telemetry, QoS mapping, & event analytics.' },
    { num: '07', title: 'Preserve', desc: 'Compile master records & VOD assets for lifetime storage.' }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
            One connected lifecycle
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            Standardize your end-to-end video pipeline across seven fully integrated functional stages.
          </p>
        </div>

        {/* 7 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="p-5 bg-slate-50 dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 flex flex-col justify-start items-start gap-4 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 min-h-[220px]"
            >
              {/* Number circle badge */}
              <div className="p-2 bg-blue-600/10 dark:bg-blue-500/20 rounded-lg inline-flex shrink-0">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">
                  {s.num}
                </span>
              </div>
              
              <div className="flex flex-col gap-1.5 text-left w-full">
                <h3 className="text-zinc-955 dark:text-white text-base font-bold leading-snug">
                  {s.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-xs font-normal leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
