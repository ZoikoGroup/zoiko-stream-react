'use client';

import React from 'react';

export default function CorpMediaLifecycleSection() {
  const items = [
    {
      title: 'Ephemeral Live Only',
      desc: 'Zero recording blocks committed to disk. Complete session purge on close.',
      status: 'VERIFIED',
      statusClass: 'bg-emerald-500/10 text-emerald-500',
      dotColor: 'bg-emerald-500'
    },
    {
      title: 'Automated HD Cloud Capture',
      desc: 'Dual transcoders write streams directly to secure S3 vaults.',
      status: 'VERIFIED',
      statusClass: 'bg-emerald-500/10 text-emerald-500',
      dotColor: 'bg-emerald-500'
    },
    {
      title: 'Trimming & Editorial Approval',
      desc: 'Post-event review stage with clip/cut tools before publishing.',
      status: 'PENDING',
      statusClass: 'bg-slate-500/10 text-slate-500',
      dotColor: 'bg-amber-500'
    },
    {
      title: 'Granular Retention Schedules',
      desc: 'Set automatic lifecycle rules to prune assets after audit window.',
      status: 'VERIFIED',
      statusClass: 'bg-emerald-500/10 text-emerald-500',
      dotColor: 'bg-emerald-500'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-white text-zinc-900 overflow-hidden border-t border-slate-105">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-900 text-4xl font-bold   leading-[60.80px]">
            Recording, replay, archive, and retention
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-7">
            Control what gets recorded, how long it's retained, and who can access it. Choose between ephemeral live-only sessions, automated HD cloud capture, editorial review workflows, and granular lifecycle retention policies.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-12">
          {/* Left Column (List) */}
          <div className="flex-1 w-full flex flex-col gap-4 font-sans">
            {items.map((item, idx) => (
              <div 
                key={idx}
                className="w-full p-5 bg-slate-50 rounded-xl border border-gray-200 inline-flex justify-start items-center gap-4 hover:shadow-sm transition-all"
              >
                <div className={`w-3 h-3 ${item.dotColor} rounded-full shrink-0`} />
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                  <h3 className="text-slate-900 text-base font-bold  ">
                    {item.title}
                  </h3>
                  <p className="self-stretch text-slate-600 text-xs font-normal   leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className={`px-3 py-1 ${item.statusClass} rounded-sm flex justify-center items-center shrink-0`}>
                  <span className="text-xs font-bold  ">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-[562px] h-96 overflow-hidden rounded-3xl bg-slate-100 shadow-md">
            <img 
              className="w-full h-full object-cover select-none pointer-events-none" 
              src="/images/corporate-broadcast-detailed/Rectangle (36).png" 
              alt="Recording and Archive Management Setup" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
