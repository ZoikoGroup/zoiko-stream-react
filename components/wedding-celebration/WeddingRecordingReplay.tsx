'use client';

import React from 'react';
import { Eye, HardDrive, RefreshCw, Download, Share2 } from 'lucide-react';

export default function WeddingRecordingReplay() {
  const cards = [
    {
      title: 'Live viewing',
      desc: 'Stable low-latency viewing with instant access gates.',
      icon: Eye
    },
    {
      title: 'Recording',
      desc: 'Dual redundancy cloud capture recording the master feeds.',
      icon: HardDrive
    },
    {
      title: 'Replay',
      desc: 'Immediate DVR rollback to re-watch ceremony segments.',
      icon: RefreshCw
    },
    {
      title: 'Download & export',
      desc: 'Permanent clean MP4 archives packaged within 4 hours.',
      icon: Download
    },
    {
      title: 'Sharing controls',
      desc: 'Respectful distribution settings and passcode overrides.',
      icon: Share2
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900"
                    style={{ backgroundImage: "url('/images/wedding-celebration/SectionBackground (2).png')" }}
>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Recording, replay &amp; sharing
          </h2>
          <p className="text-slate-400 text-base sm:text-xm font-normal font-spaceGrotesk leading-relaxed">
            Separate live viewing, recording, replay, retention, and sharing — each with its own controls.
          </p>
        </div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="p-5 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-4 hover:border-zinc-700/50 transition-colors shadow-sm"
              >
                {/* Custom Icon wrapper */}
                <div className="size-9 bg-gray-800/50 rounded-lg flex justify-center items-center shrink-0">
                  <Icon className="size-4 text-teal-400 stroke-[1.8]" />
                </div>
                
                <div className="flex flex-col gap-1.5 w-full">
                  <h3 className="text-slate-100 text-base font-bold font-spaceGrotesk leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-spaceGrotesk leading-relaxed text-left">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
