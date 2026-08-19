'use client';

import React, { useState } from 'react';

export default function MediaLifecycleSection() {
  const [selections, setSelections] = useState({
    recording: 1, // Configured
    replay: 2,    // Published
    vault: 2,     // Municipal vault
    downloads: 2, // Public audit
    clips: 1,     // Clerk only
    retention: 0  // Policy default
  });

  const ledger = [
    {
      key: 'recording',
      label: 'Recording',
      options: ['Not requested', 'Configured', 'Active', 'Processing']
    },
    {
      key: 'replay',
      label: 'Replay',
      options: ['Not available', 'Processing', 'Published', 'Archived']
    },
    {
      key: 'vault',
      label: 'Archive vault',
      options: ['No archive', 'Draft lock', 'Municipal vault', 'State vault']
    },
    {
      key: 'downloads',
      label: 'Download rules',
      options: ['Restricted', 'Staff only', 'Public audit', 'Time-limited']
    },
    {
      key: 'clips',
      label: 'Clips creation',
      options: ['Disabled', 'Clerk only', 'Press access', 'Public']
    },
    {
      key: 'retention',
      label: 'Retention logic',
      options: ['Policy default', '7 years lock', 'Permanent record', 'Pruned']
    }
  ];

  const handleToggle = (key: string, optionIdx: number) => {
    setSelections(prev => ({
      ...prev,
      [key]: optionIdx
    }));
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-5"
        style={{ backgroundImage: "url('/images/civic-events-detailed/bg.png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
              Live, record, replay, and archive are separate decisions
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
              Live delivery and post-event media are separate decisions. Civic contexts may have public-record, legal, policy, rights, privacy, and accessibility implications.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img 
              className="w-full max-w-[480px] h-48 object-cover rounded-2xl border border-slate-800 shadow-lg" 
              src="/images/civic-events-detailed/lifecycle-right.png" 
              alt="Lifecycle Decisions illustration" 
            />
          </div>
        </div>

        {/* Ledger Block (No borders) */}
        <div className="p-6 sm:p-8 bg-gray-900/60 rounded-2xl flex flex-col gap-6 shadow-xl border border-slate-800/40 backdrop-blur-sm">
          <div className="flex flex-col gap-1">
            <h3 className="text-white text-base font-bold font-sans">
              Lifecycle Parameter Verification Ledger
            </h3>
            <p className="text-slate-500 text-xs font-sans">
              Click options in each row to toggle simulated governance parameters.
            </p>
          </div>
          
          <div className="w-full overflow-x-auto">
            <div className="min-w-[800px] flex flex-col gap-3">
              {ledger.map((row) => {
                const selectedIdx = selections[row.key as keyof typeof selections];
                return (
                  <div 
                    key={row.key}
                    className="flex items-center gap-6 px-4 py-4 bg-zinc-950/80 rounded-xl transition-colors hover:bg-zinc-950/90"
                  >
                    {/* Dimension Label */}
                    <div className="w-44 text-slate-100 text-sm font-bold font-sans">
                      {row.label}
                    </div>
                    
                    {/* Horizontal Options */}
                    <div className="flex-1 flex justify-between items-center gap-4">
                      {row.options.map((opt, oIdx) => {
                        const isActive = selectedIdx === oIdx;
                        return (
                          <button
                            key={opt}
                            onClick={() => handleToggle(row.key, oIdx)}
                            className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all border-none cursor-pointer flex-1 text-center font-sans ${
                              isActive
                                ? 'bg-teal-400 text-zinc-950 shadow-sm font-extrabold scale-[1.02]'
                                : 'bg-gray-900/80 text-slate-550 hover:bg-slate-800/60 hover:text-slate-350'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
