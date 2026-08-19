'use client';

import React from 'react';

export default function ProceedingsLedgerSection() {
  const ledgerRows = [
    {
      layer: 'Event identity',
      metadata: 'City Council General Session',
      sync: "City Clerk's Office",
      state: 'Live',
      stateType: 'live' // amber
    },
    {
      layer: 'Schedule',
      metadata: 'Item 4: Smart Transit Plan Review',
      sync: 'Planned: 7:15 PM EST',
      state: 'Live',
      stateType: 'live' // amber
    },
    {
      layer: 'Agenda reference',
      metadata: 'Transit Plan Proposal v3.4',
      sync: 'gov.transit/proposal-3.4',
      state: 'Verified',
      stateType: 'verified' // emerald
    },
    {
      layer: 'Agenda item context',
      metadata: 'Resolution 1092-B: Funding Allocations',
      sync: 'Sub-clause C: Fleet purchases',
      state: 'Live',
      stateType: 'live' // amber
    },
    {
      layer: 'Minutes/official record',
      metadata: 'Legistar Official Record File',
      sync: 'legistar.council/file-485920',
      state: 'Configured',
      stateType: 'configured' // emerald
    },
    {
      layer: 'Corrections',
      metadata: 'No active corrections filed',
      sync: 'Superseded state: None',
      state: 'Verified',
      stateType: 'verified' // emerald
    }
  ];

  const statuses = [
    { name: 'Scheduled', active: false },
    { name: 'Starting soon', active: false },
    { name: 'Live', active: true },
    { name: 'Delayed', active: false },
    { name: 'Paused / Recess', active: false },
    { name: 'Ended', active: false },
    { name: 'Canceled', active: false },
    { name: 'Rescheduled', active: false }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Authoritative context without replacing government systems
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Civic viewers need context: what meeting this is, when it starts, what segment is happening, and where authoritative documents live.
          </p>
        </div>

        {/* Ledger Table (No borders) */}
        <div className="p-6 sm:p-8 bg-slate-50 dark:bg-zinc-900/40 rounded-2xl flex flex-col justify-start items-start gap-6 shadow-sm backdrop-blur-sm">
          <div className="w-full flex justify-between items-center pb-2">
            <h3 className="text-zinc-900 dark:text-white text-lg font-bold font-sans">
              Proceedings Meta-Ledger Verification
            </h3>
          </div>
          
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] flex flex-col gap-2">
              {/* Header row */}
              <div className="flex items-center gap-4 px-4 py-3 bg-slate-200/50 dark:bg-zinc-800/40 rounded-xl text-gray-505 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <div className="w-1/4">Context Layer</div>
                <div className="w-1/3">Primary Metadata</div>
                <div className="w-1/4">Source System Sync</div>
                <div className="w-1/6 text-right">State Verification</div>
              </div>

              {/* Rows */}
              {ledgerRows.map((row, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 px-4 py-4 bg-white dark:bg-zinc-950/60 rounded-xl transition-colors hover:bg-slate-100/50 dark:hover:bg-zinc-900/50"
                >
                  <div className="w-1/4 text-zinc-900 dark:text-white text-sm font-bold font-sans">{row.layer}</div>
                  <div className="w-1/3 text-gray-500 dark:text-slate-400 text-sm font-sans">{row.metadata}</div>
                  <div className="w-1/4 text-gray-505 dark:text-slate-500 text-sm font-sans">{row.sync}</div>
                  <div className="w-1/6 flex justify-end">
                    <span 
                      className={`px-3 py-1 text-xs font-semibold rounded-md ${
                        row.stateType === 'live' 
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400' 
                          : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-450'
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

        {/* Status Engine */}
        <div className="p-6 bg-slate-50 dark:bg-zinc-900/40 rounded-2xl flex flex-col justify-start items-start gap-4 shadow-sm border border-slate-100 dark:border-zinc-850">
          <h3 className="text-zinc-900 dark:text-white text-base font-bold font-sans">
            Live Proceedings Status Engine
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {statuses.map((status, idx) => (
              <span 
                key={idx}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-colors cursor-default ${
                  status.active 
                    ? 'bg-teal-400 text-zinc-950 shadow-sm' 
                    : 'bg-slate-200 text-gray-500 hover:bg-slate-300/50 dark:bg-zinc-800 dark:text-slate-400 dark:hover:bg-zinc-700/50'
                }`}
              >
                {status.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
