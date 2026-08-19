'use client';

import React from 'react';
import Image from 'next/image';

export default function ConferenceScenarios() {
  const scenarios = [
    {
      num: 'SCENARIO 01',
      title: 'Session Isolated',
      desc: 'A Japanese transcription sync fails on Track F. The program remains completely healthy; only the affected caption pipeline is isolated with an operator alert.',
      img: '/images/conferences-and-multitrack/CardImg.png',
      status: 'Blocked',
      statusStyle: 'text-red-500 bg-red-500/10 outline-red-500/30'
    },
    {
      num: 'SCENARIO 02',
      title: 'Scoped Impact',
      desc: 'Track C experiences a regional ISP routing drop. The system downgrades resolution dynamically and flags other parallel tracks as safe.',
      img: '/images/conferences-and-multitrack/CardImg (6).png',
      status: 'Degraded',
      statusStyle: 'text-orange-400 bg-orange-500/10 outline-orange-300/30'
    },
    {
      num: 'SCENARIO 03',
      title: 'Automatic Failover',
      desc: 'Primary feed drops in Munich. ZoikoStream automatically reroutes active contributors through secondary SRT backup ingest centers within 800ms.',
      img: '/images/conferences-and-multitrack/CardImg (1).png',
      status: 'Recovering',
      statusStyle: 'text-emerald-500 bg-emerald-500/10 outline-emerald-500/30'
    },
    {
      num: 'SCENARIO 04',
      title: 'Access Safeguards',
      desc: 'SSO lookup experiences temporary provider latency. The platform falls back to offline validated tokens, preventing viewer lockout.',
      img: '/images/conferences-and-multitrack/CardImg (2).png',
      status: 'Changed Since Test',
      statusStyle: 'text-blue-500 bg-blue-500/10 outline-blue-500/30'
    },
    {
      num: 'SCENARIO 05',
      title: 'Secondary Captions',
      desc: 'Human stenography feed disconnects. Live AI-generated transcriptions activate instantly to ensure continued compliance while recovery is attempted.',
      img: '/images/conferences-and-multitrack/CardImg (3).png',
      status: 'Degraded',
      statusStyle: 'text-orange-400 bg-orange-500/10 outline-orange-300/30'
    },
    {
      num: 'SCENARIO 06',
      title: 'Stale Schedule Safeguard',
      desc: 'Network delay affects schedule updates. Real-time viewer clients maintain the last cached offline-first timeline safely without breaking navigation.',
      img: '/images/conferences-and-multitrack/CardImg (4).png',
      status: 'Sync Notice',
      statusStyle: 'text-blue-500 bg-blue-500/10 outline-blue-500/30'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-16 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-5 max-w-4xl">
          <h2 className="text-gray-900 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            When sessions break, the truth stays visible
          </h2>
          <p className="text-gray-650 dark:text-zinc-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Do not mark the whole program down because one session has an issue. Maintain granular, isolated track visibility. Our operational model sandboxes exceptions instantly so your program view stays active.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((s, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-zinc-900/40 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-zinc-800/80 flex flex-col justify-start items-start gap-5 p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-40 w-full rounded-lg overflow-hidden bg-slate-100 dark:bg-zinc-950/40">
                <Image 
                  src={s.img} 
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-start items-start gap-3 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-slate-500 dark:text-zinc-500 text-xs font-bold font-mono tracking-wider">{s.num}</span>
                  <span className={`px-2.5 py-0.5 rounded-sm outline outline-1 text-[10px] font-bold font-spaceGrotesk uppercase tracking-wide shrink-0 ${s.statusStyle}`}>
                    {s.status}
                  </span>
                </div>
                
                <h3 className="text-slate-900 dark:text-white text-xl font-bold font-spaceGrotesk leading-7">
                  {s.title}
                </h3>
                
                <p className="text-slate-550 dark:text-zinc-400 text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
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
