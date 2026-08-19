'use client';

import React from 'react';

export default function PlatformEnterpriseMedia() {
  const feeds = [
    { name: 'Keynote Stream SF', status: 'Live', style: 'text-emerald-500 bg-emerald-500/10' },
    { name: 'London Satellite Feed', status: 'Ready', style: 'text-blue-500 bg-blue-500/10' },
    { name: 'Backup Program Loop', status: 'Processing', style: 'text-amber-500 bg-amber-500/10' },
    { name: 'Archived Master VOD', status: 'Recording', style: 'text-red-500 bg-red-500/10' }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Operate enterprise media
          </h2>
          <p className="text-slate-655 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            Govern active stream health, program transitions, and coordinate distributed AV crews through a centralized console.
          </p>
        </div>

        {/* Console Layout Split */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 w-full">
          
          {/* Left panel: Control Room Box */}
          <div className="w-full lg:w-[500px] p-6 bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 flex flex-col gap-4 shadow-sm shrink-0">
            <h3 className="text-zinc-955 dark:text-white text-base font-bold font-spaceGrotesk">
              ZOIKOSTREAM CONTROL ROOM
            </h3>
            
            <div className="flex flex-col gap-2.5 w-full">
              {feeds.map((feed, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 bg-white dark:bg-zinc-950 rounded-lg border border-gray-150 dark:border-zinc-850 flex justify-between items-center text-sm font-spaceGrotesk"
                >
                  <span className="text-zinc-955 dark:text-white font-medium">{feed.name}</span>
                  <span className={`px-2 py-0.5 rounded-sm text-xs font-bold ${feed.style}`}>
                    {feed.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column details */}
          <div className="flex-1 flex flex-col justify-start items-start gap-6 max-w-xl">
            <h3 className="text-zinc-955 dark:text-white text-2xl sm:text-3xl font-bold leading-tight">
              Unify teams, streams, and diagnostic logs in one workflow.
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
              Coordinate real-time cues, lower-third graphics overlays, alternate language sub-channels, and stream diagnostic reviews instantly. Eliminate on-site guesswork.
            </p>
            
            <div className="pt-2">
              <button className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-950 text-base font-bold rounded-[10px] cursor-pointer border-none shadow-md">
                Explore media operations
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
