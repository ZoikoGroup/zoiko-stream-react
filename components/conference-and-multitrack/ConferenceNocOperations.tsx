'use client';

import React from 'react';
import Image from 'next/image';

export default function ConferenceNocOperations() {
  const avatars = [
    '/images/conferences-and-multitrack/Ellipse.png',
    '/images/conferences-and-multitrack/Ellipse (1).png',
    '/images/conferences-and-multitrack/Ellipse (2).png'
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-gray-900 dark:text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Live operations, session by session
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Empower your network operations center. Keep track of concurrent streams, detect frame drops instantly, manage live schedule deviations, and resolve contributor issues in real time.
          </p>
        </div>

        {/* NOC Panel */}
        <div className="w-full p-6 bg-white dark:bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 flex flex-col justify-start items-start gap-6 shadow-xl">
          
          {/* NOC Toolbar */}
          <div className="w-full border-b border-gray-100 dark:border-zinc-800/80 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap items-start gap-3 w-full md:w-auto">
              <div className="px-4 py-2 bg-gray-50 dark:bg-zinc-950/40 rounded-md border border-gray-250/30 text-gray-500 dark:text-zinc-400 text-sm font-normal font-spaceGrotesk leading-6 w-full sm:w-64 text-left">
                Search session ID or owner...
              </div>
              <div className="px-4 py-2 bg-gray-50 dark:bg-zinc-950/40 rounded-md border border-gray-250/30 text-slate-900 dark:text-white text-sm font-bold font-spaceGrotesk leading-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800">
                Filter: Active Issues (3)
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100 text-sm font-bold font-mono tracking-wide shrink-0">
              <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>NOC MAIN SYSTEM TIME: 14:42:09 UTC</span>
            </div>
          </div>

          {/* Three Column Lanes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            
            {/* Column 1: Live Lanes */}
            <div className="flex flex-col justify-start items-start gap-4">
              <h3 className="text-slate-900 dark:text-white text-sm font-bold font-spaceGrotesk leading-6 uppercase tracking-wider">
                TRACK LANES (LIVE NOW)
              </h3>
              
              {/* Lane 1: Track A */}
              <div className="w-full p-5 bg-slate-50 dark:bg-zinc-950/40 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800/60 flex flex-col justify-start items-start gap-3">
                <div className="w-full flex justify-between items-start">
                  <span className="text-blue-500 dark:text-blue-400 text-xs font-bold font-spaceGrotesk">TRACK A</span>
                  <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold font-mono rounded-sm uppercase tracking-wide">
                    Ready
                  </span>
                </div>
                <h4 className="text-slate-900 dark:text-white text-base font-bold font-spaceGrotesk leading-tight text-left">
                  Opening Ceremony - Main Stage
                </h4>
                <div className="relative h-10 w-full rounded-sm overflow-hidden bg-slate-100 dark:bg-zinc-900">
                  <Image 
                    src="/images/conferences-and-multitrack/WaveImg (1).png" 
                    alt="Track A Stream Telemetry" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <span className="text-slate-600 dark:text-zinc-400 text-xs font-normal font-spaceGrotesk">
                  Active Viewers: 14,230 · Resolution: 4K
                </span>
              </div>

              {/* Lane 2: Track B */}
              <div className="w-full p-5 bg-slate-50 dark:bg-zinc-950/40 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800/60 flex flex-col justify-start items-start gap-3">
                <div className="w-full flex justify-between items-start">
                  <span className="text-blue-500 dark:text-blue-400 text-xs font-bold font-spaceGrotesk">TRACK B</span>
                  <span className="px-2.5 py-0.5 bg-orange-300/10 text-orange-400 text-[10px] font-bold font-mono rounded-sm uppercase tracking-wide">
                    Needs Review
                  </span>
                </div>
                <h4 className="text-slate-900 dark:text-white text-base font-bold font-spaceGrotesk leading-tight text-left">
                  Scaling SRT Listener Pipelines
                </h4>
                <div className="relative h-10 w-full rounded-sm overflow-hidden bg-slate-100 dark:bg-zinc-900">
                  <Image 
                    src="/images/conferences-and-multitrack/WaveImg.png" 
                    alt="Track B Stream Telemetry" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <span className="text-slate-600 dark:text-zinc-400 text-xs font-normal font-spaceGrotesk">
                  Active Viewers: 2,840 · Warning: Jitter Spike
                </span>
              </div>
            </div>

            {/* Column 2: Upcoming shifts */}
            <div className="flex flex-col justify-start items-start gap-4">
              <h3 className="text-slate-900 dark:text-white text-sm font-bold font-spaceGrotesk leading-6 uppercase tracking-wider">
                UPCOMING TRACK SHIFTS
              </h3>

              {/* Shift 1 */}
              <div className="w-full p-5 bg-white dark:bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 flex flex-col justify-start items-start gap-3 shadow-sm">
                <span className="text-slate-650 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">
                  STARTS IN 12 MINS · TRACK A
                </span>
                <h4 className="text-slate-900 dark:text-white text-base font-bold font-spaceGrotesk leading-tight text-left">
                  Keynote Roundtable: The Next 12 Months
                </h4>
                <p className="text-slate-600 dark:text-zinc-400 text-xs font-normal font-spaceGrotesk leading-relaxed text-left">
                  Speakers: Maya Webb, James Holloway, Ethan Blackwell
                </p>
                <div className="flex items-center gap-1.5 pt-1">
                  {avatars.map((avatar, idx) => (
                    <div key={idx} className="relative size-7 rounded-full border border-white dark:border-zinc-900 overflow-hidden bg-zinc-800 shadow-sm">
                      <Image 
                        src={avatar} 
                        alt="Speaker Avatar" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Shift 2 */}
              <div className="w-full p-5 bg-white dark:bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 dark:outline-zinc-800 flex flex-col justify-start items-start gap-3 shadow-sm">
                <span className="text-slate-650 dark:text-zinc-400 text-xs font-bold font-spaceGrotesk">
                  STARTS IN 24 MINS · TRACK C
                </span>
                <h4 className="text-slate-900 dark:text-white text-base font-bold font-spaceGrotesk leading-tight text-left">
                  Incident Automation Deep-Dive
                </h4>
                <p className="text-slate-650 dark:text-zinc-400 text-xs font-normal font-spaceGrotesk text-left">
                  Lead Auditor: Kenji Sato
                </p>
              </div>
            </div>

            {/* Column 3: Critical incident queue */}
            <div className="flex flex-col justify-start items-start gap-4">
              <h3 className="text-red-500 text-sm font-bold font-spaceGrotesk leading-6 uppercase tracking-wider">
                CRITICAL INCIDENT QUEUE
              </h3>

              {/* Incident */}
              <div className="w-full p-5 bg-red-500/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-red-500/30 flex flex-col justify-start items-start gap-3">
                <div className="w-full flex justify-between items-start">
                  <span className="text-red-500 text-xs font-bold font-spaceGrotesk">SEVERITY 1 · TRACK C</span>
                  <span className="px-2 py-0.5 bg-red-500/10 text-red-550 text-[10px] font-bold font-mono rounded-sm uppercase tracking-wide animate-pulse">
                    Active
                  </span>
                </div>
                <h4 className="text-slate-900 dark:text-white text-base font-bold font-spaceGrotesk leading-tight text-left">
                  Tokyo Contributor Disconnected
                </h4>
                <p className="text-slate-600 dark:text-zinc-400 text-xs font-normal font-spaceGrotesk leading-relaxed text-left">
                  Recovery: Auto-routing Tokyo stream through secondary backup SRT listener point.
                </p>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-650 text-white text-xs font-bold font-spaceGrotesk rounded-md transition-colors border-none cursor-pointer">
                  Manual Overrule
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
