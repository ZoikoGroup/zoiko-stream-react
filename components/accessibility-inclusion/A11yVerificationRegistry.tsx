'use client';

import React from 'react';
import Image from 'next/image';

export default function A11yVerificationRegistry() {
  const tableRows = [
    {
      method: 'Keyboard Focus Ring Flow',
      config: 'Chrome 114+ / macOS',
      time: '10 min ago',
      verifier: 'Alex T.',
      ref: 'EV-KEY-842',
      scope: 'Global Layout',
      status: { text: 'CURRENT', style: 'text-teal-400 bg-emerald-950/80' }
    },
    {
      method: 'Live Captions Stream',
      config: 'EN-US Auto-caption',
      time: '2 hours ago',
      verifier: 'John D.',
      ref: 'EV-CAP-114',
      scope: 'Audio (Modified)',
      status: { text: 'CHANGED', style: 'text-amber-500 bg-amber-955' }
    },
    {
      method: 'Braille Display API',
      config: 'Tactile Output v2',
      time: '3 days ago',
      verifier: 'Sarah K.',
      ref: 'EV-BRL-092',
      scope: 'Alternative Access',
      status: { text: 'STALE', style: 'text-rose-500 bg-rose-950' }
    }
  ];

  const cards = [
    {
      title: 'Scoped Testing',
      desc: 'Verify keyboard accessibility, screen reader compatibility, custom focus flows, and programmatic captions on every primary live stream pathway.',
      img: '/images/accessibility-inclusion/Rectangle (69).png'
    },
    {
      title: 'Material Change Detection',
      desc: 'Detect modifications to stage layouts, ingestion pipelines, or translation engines and trigger targeted re-testing before going live.',
      img: '/images/accessibility-inclusion/Rectangle (70).png'
    },
    {
      title: 'Evidence Lifecycle',
      desc: 'Keep every audit record versioned. Stale logs are instantly flagged so teams cannot reuse outdated checks for fresh event contexts.',
      img: '/images/accessibility-inclusion/Rectangle (71).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-black/65 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/accessibility-inclusion/section-9.png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-100 text-3xl sm:text-3xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Verification is scoped, timestamped, and current.
          </h2>
          <p className="text-[#AAB3C4] text-base sm:text-xm font-normal font-spaceGrotesk leading-relaxed">
            Evidence is tied to the configuration that was tested. Material changes invalidate affected scope, not the whole plan.
          </p>
        </div>

        {/* Dashboard table */}
        <div className="w-full p-6 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2 ">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-slate-100 text-xs font-bold font-spaceGrotesk uppercase tracking-wider">
                ACTIVE CONFIGURATION REGISTRY &amp; PROOF
              </span>
            </div>
            <span className="text-slate-500 text-xs font-normal font-spaceGrotesk">
              REGISTRY CODE: AR-V4.9
            </span>
          </div>

          <div className="w-full overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-teal-400">
            <div className="min-w-[800px] flex flex-col rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800">
              
              {/* Table Head */}
              <div className="p-3 bg-zinc-950/80 flex items-center justify-start text-left text-slate-150 font-bold text-xs font-spaceGrotesk">
                <span className="w-44 shrink-0">Verification Method</span>
                <span className="w-36 shrink-0">Tested Configuration</span>
                <span className="w-24 shrink-0">Timestamp</span>
                <span className="w-24 shrink-0">Verifier</span>
                <span className="w-28 shrink-0">Evidence Ref</span>
                <span className="flex-1">Affected Scope</span>
                <span className="w-36 shrink-0 text-right">Status</span>
              </div>

              {/* Table Body */}
              <div className="flex flex-col bg-zinc-900/40">
                {tableRows.map((row, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5  last:border-none flex items-center justify-start text-left text-slate-400 text-xs font-spaceGrotesk hover:bg-zinc-950/20"
                  >
                    <span className="w-44 text-slate-100 font-bold shrink-0">{row.method}</span>
                    <span className="w-36 text-slate-450 shrink-0">{row.config}</span>
                    <span className="w-24 text-slate-455 shrink-0">{row.time}</span>
                    <span className="w-24 text-slate-455 shrink-0">{row.verifier}</span>
                    <span className="w-28 text-blue-500 hover:underline font-bold shrink-0 cursor-pointer">{row.ref}</span>
                    <span className="flex-1 truncate">{row.scope}</span>
                    
                    <div className="w-36 flex justify-end shrink-0 select-none">
                      <span className={`px-2.5 py-0.5 rounded-[100px] text-[10px] font-bold font-mono tracking-wider ${row.status.style}`}>
                        {row.status.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* 3 Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900 rounded-xl border border-zinc-800/80 overflow-hidden hover:border-zinc-700/50 flex flex-col transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-40 w-full bg-zinc-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Text */}
              <div className="p-5 flex flex-col gap-2 justify-start items-start">
                <h3 className="text-slate-100 text-base sm:text-lg font-bold font-spaceGrotesk">
                  {c.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
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
