'use client';

import React from 'react';

export default function ManagedRunOfShowSection() {
  const queue = [
    {
      time: '00:00',
      title: 'Opening Loop',
      desc: 'Fade in pre-recorded music loop & announcements slide.'
    },
    {
      time: '05:00',
      title: 'Live Call',
      desc: 'Cut to Sanctuary Camera 1 (Main Wide), activate pastor mic.'
    },
    {
      time: '25:00',
      title: 'Remote Missionary',
      desc: 'Switch layouts: Camera 1 PIP + Remote RTC feed, cue lower third.'
    },
    {
      time: '40:00',
      title: 'Closing Remarks',
      desc: 'Fade down pastor mic, trigger ending VOD scroll.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/managed-live-event/bg (13).png')" }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-start items-center gap-12 sm:gap-16 text-left">
        
        {/* Left text column */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans leading-tight tracking-tight animate-fade-in">
            Synchronized cue sheets and real-time graphics switching.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Coordinate lower thirds, presenter transitions, audio level cues, and backup stream arming parameters from one unified timeline workspace. Clear visual status indicators prevent live-operations confusion.
          </p>
        </div>

        {/* Right dashboard column */}
        <div className="w-full lg:w-[560px] p-6 sm:p-7 bg-gray-900/95 rounded-2xl border border-slate-800 flex flex-col justify-start items-start gap-4 backdrop-blur-sm shadow-xl font-sans">
          
          <div className="w-full flex justify-between items-center">
            <span className="text-slate-100 text-sm font-bold">
              Live Run-of-Show Queue
            </span>
            <span className="text-teal-400 text-[10px] font-bold tracking-widest uppercase">
              45 MIN TOTAL
            </span>
          </div>
          
          <div className="w-full h-px bg-slate-800" />
          
          <div className="w-full flex flex-col gap-4">
            {queue.map((item, idx) => (
              <div 
                key={idx}
                className="w-full pb-3 border-b border-slate-850/50 flex justify-start items-start gap-4 last:border-none last:pb-0"
              >
                <div className="w-12 text-teal-400 text-xs font-bold leading-tight pt-0.5">
                  {item.time}
                </div>
                <div className="flex-1 flex flex-col gap-1 text-left">
                  <span className="text-slate-105 text-xs font-bold">
                    {item.title}
                  </span>
                  <span className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
