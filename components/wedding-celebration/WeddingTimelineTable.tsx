'use client';

import React from 'react';

export default function WeddingTimelineTable() {
  const rows = [
    {
      part: 'Main Ceremony',
      duration: '45 mins',
      location: 'Chapel / Main Altar',
      access: { text: 'Private', style: 'text-red-500 bg-red-100' },
      recording: 'Archive + Post-Event VOD download'
    },
    {
      part: 'Reception Welcome',
      duration: '30 mins',
      location: 'Garden Lounge',
      access: { text: 'Shareable Link', style: 'text-emerald-500 bg-emerald-100' },
      recording: 'Live view only (no permanent archive)'
    },
    {
      part: 'Speeches & Toasts',
      duration: '40 mins',
      location: 'Dining Hall Stage',
      access: { text: 'Controlled', style: 'text-emerald-500 bg-emerald-100' },
      recording: 'Archive + Instant clip sharing'
    },
    {
      part: 'First Dance & Cake Cut',
      duration: '25 mins',
      location: 'Main Pavilion Ballroom',
      access: { text: 'Shareable Link', style: 'text-emerald-500 bg-emerald-100' },
      recording: 'Archive only'
    },
    {
      part: 'Remote Messages Playback',
      duration: '20 mins',
      location: 'Digital Screens Ingest',
      access: { text: 'Dual-Path Interactive', style: 'text-emerald-500 bg-emerald-100' },
      recording: 'Captured to event closeout summary'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold tracking-tight">
            Plan every part of your celebration
          </h2>
          <p className="text-slate-655 text-base sm:text-lg font-normal leading-relaxed">
            Delineate distinct timeline events so your remote audience follows along with custom access and recording targets.
          </p>
        </div>

        {/* Table Dashboard Container */}
        <div className="w-full bg-slate-100 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col overflow-hidden shadow-sm">
          <div className="w-full overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-teal-400">
            <div className="min-w-[800px] flex flex-col w-full">
              
              {/* Header row */}
              <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-start text-left text-zinc-950 text-xs font-bold uppercase tracking-wider">
                <span className="w-60 shrink-0">Event Part Name</span>
                <span className="w-28 shrink-0">Duration</span>
                <span className="w-44 shrink-0">Location Setup</span>
                <span className="w-40 shrink-0">Access Choice</span>
                <span className="flex-1">Recording / Replay Status</span>
              </div>

              {/* Data rows */}
              <div className="flex flex-col bg-white">
                {rows.map((row, idx) => (
                  <div 
                    key={idx}
                    className="p-4 border-b border-slate-150 last:border-none flex items-center justify-start text-left text-zinc-900 text-sm hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="w-60 font-bold text-zinc-950 shrink-0">{row.part}</span>
                    <span className="w-28 text-slate-600 shrink-0">{row.duration}</span>
                    <span className="w-44 text-slate-600 shrink-0">{row.location}</span>
                    
                    <div className="w-40 flex justify-start shrink-0 select-none">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.access.style}`}>
                        {row.access.text}
                      </span>
                    </div>

                    <span className="flex-1 text-slate-600 text-xs sm:text-sm font-normal">{row.recording}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Footer toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full pt-2">
          <p className="text-slate-600 text-sm font-normal text-left">
            Timeline setup can be dynamically customized up to 48 hours before go-live.
          </p>
          <button className="px-6 py-3 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-600 bg-transparent hover:outline-teal-400 transition-colors text-zinc-950 text-sm font-medium cursor-pointer shrink-0">
            View timeline planner
          </button>
        </div>

      </div>
    </section>
  );
}
