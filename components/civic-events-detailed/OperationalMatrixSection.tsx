'use client';

import React from 'react';

export default function OperationalMatrixSection() {
  const rows = [
    {
      resp: 'Venue and room access',
      organizer: 'Physical locks & cameras on-site',
      provider: 'N/A — Ingestion endpoint only',
      state: 'Assigned',
      stateType: 'verified' // emerald
    },
    {
      resp: 'Video sources',
      organizer: 'Sanctuary / chamber cameras & switchers',
      provider: 'Cloud transcode & backup feed hosting',
      state: 'Configured',
      stateType: 'verified' // emerald
    },
    {
      resp: 'Audio',
      organizer: 'Clerk / podium direct desk output feed',
      provider: 'Auto-normalization of speech feeds',
      state: 'Verified',
      stateType: 'verified' // emerald
    },
    {
      resp: 'Graphics',
      organizer: 'Local slides and names lower thirds overlays',
      provider: 'System overlay tool integration',
      state: 'Assigned',
      stateType: 'verified' // emerald
    },
    {
      resp: 'Network',
      organizer: 'Primary room broadband upload connectivity',
      provider: 'CDN distribution target monitoring',
      state: 'TestRequired',
      stateType: 'warning' // amber
    },
    {
      resp: 'Operator',
      organizer: 'On-site volunteer / local staff control',
      provider: 'Platform health automation engine',
      state: 'Verified',
      stateType: 'verified' // emerald
    },
    {
      resp: 'Support',
      organizer: 'Secondary on-call technician assigned',
      provider: 'Real-time chat & backend operations help',
      state: 'Configured',
      stateType: 'verified' // emerald
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/civic-events-detailed/operation-matrix-bg.png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Who does what — mapped, not assumed
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Production responsibilities are explicit. Nothing implies that ZoikoStream automatically manages everything.
          </p>
        </div>

        {/* Matrix Block (No borders) */}
        <div className="p-6 sm:p-8 bg-gray-900/60 rounded-2xl flex flex-col gap-6 shadow-xl border border-slate-800/40 backdrop-blur-sm">
          <h3 className="text-white text-base font-bold font-sans">
            Operational Responsibility Matrix
          </h3>
          
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] flex flex-col gap-2">
              
              {/* Header row */}
              <div className="flex items-center gap-4 px-4 py-3 bg-slate-800 rounded-xl text-slate-500 text-xs font-bold uppercase tracking-wider">
                <div className="w-1/4">Responsibility</div>
                <div className="w-1/3">Organizer / Venue May Own</div>
                <div className="w-1/4">ZoikoStream / Service May Own</div>
                <div className="w-1/6 text-right">Visible State</div>
              </div>

              {/* Rows */}
              {rows.map((row, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 px-4 py-4 bg-gray-900/30 rounded-xl transition-colors hover:bg-gray-900/80"
                >
                  <div className="w-1/4 text-slate-100 text-sm font-bold font-sans">{row.resp}</div>
                  <div className="w-1/3 text-slate-400 text-sm font-sans">{row.organizer}</div>
                  <div className="w-1/4 text-slate-400 text-sm font-sans">{row.provider}</div>
                  <div className="w-1/6 flex justify-end">
                    <span 
                      className={`px-3 py-1 text-xs font-semibold rounded-md ${
                        row.stateType === 'verified'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/10'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/10'
                      }`}
                    >
                      {row.state}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
