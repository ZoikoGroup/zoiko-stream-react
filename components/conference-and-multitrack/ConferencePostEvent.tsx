'use client';

import React from 'react';
import Image from 'next/image';

export default function ConferencePostEvent() {
  const modules = [
    {
      num: 'MODULE 01',
      title: 'Recording Intent',
      desc: 'Dictate capture rules prior to the session. Auto-initialize redundant cloud DVR instances globally on key schedules.',
      img: '/images/conferences-and-multitrack/CardImage.png',
      status: 'Ready',
      statusStyle: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      num: 'MODULE 02',
      title: 'Capture Truth',
      desc: 'Verified recording packet validation. Check and confirm zero missing packet gaps across backup ingest centers.',
      img: '/images/conferences-and-multitrack/CardImage (1).png',
      status: 'Ready',
      statusStyle: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      num: 'MODULE 03',
      title: 'Replay Readiness',
      desc: 'Replay access is separately authorized from live. Ensure clean transitions, trimmed dead air, and verified captions before publish.',
      img: '/images/conferences-and-multitrack/CardImage (2).png',
      status: 'Needs Review',
      statusStyle: 'text-orange-400 bg-orange-500/10'
    },
    {
      num: 'MODULE 04',
      title: 'Archive & Retention',
      desc: 'Enforce dynamic automated cold archival policies or clean GDPR deletion routines directly per session metadata.',
      img: '/images/conferences-and-multitrack/CardImage (3).png',
      status: 'Ready',
      statusStyle: 'text-emerald-500 bg-emerald-500/10'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/conferences-and-multitrack/bg (21).png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <h2 className="text-slate-100 text-3xl sm:text-3xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Every session&apos;s post-event story, decided individually
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Decouple live and replay architectures. Configure granular lifecycle policies to dictate instant replay publication, SAML authentication requirements, caption verification, and global cold-storage archival.
          </p>
        </div>

        {/* Modules Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, idx) => (
            <div 
              key={idx}
              className="p-5 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col justify-start items-start gap-5 hover:border-zinc-700/50 transition-colors"
            >
              <div className="relative h-40 w-full rounded-lg overflow-hidden bg-zinc-950">
                <Image 
                  src={m.img} 
                  alt={m.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-start items-start gap-3 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-teal-400 text-xs font-bold font-spaceGrotesk tracking-wider">{m.num}</span>
                  <span className={`px-2.5 py-0.5 rounded-sm text-[10px] font-bold font-spaceGrotesk uppercase tracking-wide shrink-0 ${m.statusStyle}`}>
                    {m.status}
                  </span>
                </div>
                
                <h3 className="text-slate-100 text-lg font-bold font-spaceGrotesk">
                  {m.title}
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
