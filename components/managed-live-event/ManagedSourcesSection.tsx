'use client';

import React from 'react';

export default function ManagedSourcesSection() {
  const cards = [
    {
      title: 'Physical Sanctuary Cameras',
      desc: 'SDI feeds into hardware SRT encoders over local fiber networks.',
      status: 'VERIFIED'
    },
    {
      title: 'Video On-Demand Files',
      desc: 'Pre-recorded announcements cued inside the cloud switcher.',
      status: 'VERIFIED'
    },
    {
      title: 'Remote Presenter Feeds',
      desc: 'Low-latency WebRTC streams feeding direct into production.',
      status: 'VERIFIED'
    },
    {
      title: 'CCLI Metadata Source',
      desc: 'Direct link API feeding real-time lyric overlay system.',
      status: 'VERIFIED'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none  "
        style={{ backgroundImage: "url('/images/managed-live-event/bg (12).png')" }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Plan your input sources and contribution limits
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Identify the physical and digital interfaces feeding your stream.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="p-6 bg-gray-900/90 rounded-2xl border border-slate-800 flex flex-col justify-start items-start gap-4 hover:border-teal-500/30 transition-colors backdrop-blur-sm shadow-xl font-sans"
            >
              <div className="w-full flex justify-between items-center">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold rounded-sm border border-emerald-500/20">
                  {c.status}
                </span>
              </div>
              <h3 className="text-slate-100 text-base font-bold">
                {c.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
