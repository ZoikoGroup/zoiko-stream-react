'use client';

import React from 'react';

export default function ApiLifecycleMapping() {
  const steps = [
    { num: '01', title: 'Contribute', desc: 'How to register secure SRT paths?' },
    { num: '02', title: 'Ingest', desc: 'Is ingestion path redundant?' },
    { num: '03', title: 'Produce', desc: 'How to trigger graphic overlays?' },
    { num: '04', title: 'Secure', desc: 'How to apply token gates?' },
    { num: '05', title: 'Deliver', desc: 'What is latency standard?' },
    { num: '06', title: 'Understand', desc: 'How to pull QoS telemetry?' },
    { num: '07', title: 'Preserve', desc: 'Are VOD records compiling?' }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl font-spaceGrotesk">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Seven-Stage Lifecycle Mapping
          </h2>
          <p className="text-slate-655 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            How Video APIs relate to the full platform lifecycle. Build integrated solutions from ingest to archive.
          </p>
        </div>

        {/* 7 Cards Row (uses standard grid) */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full font-spaceGrotesk">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="p-5 bg-white dark:bg-zinc-900 rounded-2xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] border border-gray-200 dark:border-zinc-800 flex flex-col justify-start items-start gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[180px]"
            >
              {/* Number circle badge */}
              <div className="size-9 bg-blue-600 dark:bg-blue-500 rounded-full flex justify-center items-center shrink-0">
                <span className="text-white text-xs font-bold font-spaceGrotesk">
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
