'use client';

import React from 'react';

export default function WorkflowOperationsBoard() {
  const steps = [
    { num: '01', name: 'Brief', status: '✓ Complete', active: false },
    { num: '02', name: 'Operating Scope', status: '✓ Complete', active: false },
    { num: '03', name: 'Contribution', status: '✓ Complete', active: false },
    { num: '04', name: 'Production Plan', status: '✓ Complete', active: false },
    { num: '05', name: 'Audience Access', status: '✓ Complete', active: false },
    { num: '06', name: 'Accessibility', status: '✓ Complete', active: false },
    { num: '07', name: 'Resilience Test', status: '✓ Complete', active: false },
    { num: '08', name: 'Go Live Gate', status: '● Active Screen', active: true },
    { num: '09', name: 'Replay & Archive', status: 'Awaiting Gate', active: false }
  ];

  const tasks = [
    { label: 'COMPLETED GATES', value: '7 / 9', style: 'text-emerald-500' },
    { label: 'UNRESOLVED BLOCKERS', value: '1 BLOCK', style: 'text-red-500' },
    { label: 'PENDING TASKS', value: '2 REVIEWS', style: 'text-amber-500' }
  ];

  const decisions = [
    { category: 'RESILIENCE TEST', title: 'Approve manual failover override to 5G secondary line cellular node', role: 'Support Lead' },
    { category: 'RECORDING TIER', title: 'Set lifetime backup storage parameters in closeout archive panel', role: 'Content Owner' }
  ];

  const roles = [
    { name: 'Marcus Sterling', role: 'Event Owner', active: true },
    { name: 'Sarah Jenkins', role: 'Production Lead', active: true },
    { name: 'Leon Vance', role: 'Support Engineer', active: true },
    { name: 'Chloe Fraser', role: 'Venue AV Contact', active: false }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-5xl">
          <h2 className="text-black text-3xl sm:text-4xl font-bold tracking-tight">
            See the workflow in action
          </h2>
          <p className="text-[#4F5E74] text-base sm:text-xm font-normal leading-relaxed">
            A centralized, live-updating dashboard mapping every decision, gate, role, and output file under a single unified view.
          </p>
        </div>

        {/* Dashboard Operations Panel */}
        <div className="w-full p-6 sm:p-8 bg-[#0A0F1A] rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full pb-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <h3 className="text-slate-100 text-xl font-bold">
                ZoikoStream Operations Board
              </h3>
              <div className="px-2 py-1 bg-teal-500/10 rounded-md flex items-center gap-1.5 shrink-0">
                <div className="size-1.5 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                  ACTIVE BROADCAST BRIEF
                </span>
              </div>
            </div>
            <span className="text-slate-500 text-xs font-mono tracking-wider shrink-0">
              STREAM ID: ZS-901-44E
            </span>
          </div>

          {/* Core Content Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 w-full">
            
            {/* Column 1: Steps List (4 cols) */}
            <div className="md:col-span-2 lg:col-span-4 flex flex-col gap-3">
              <span className="text-slate-500 text-xs font-bold font-mono tracking-wider uppercase border-b border-zinc-800 pb-1.5 text-left w-full">
                LIFECYCLE STEPS
              </span>
              
              <div className="flex flex-col gap-2 w-full">
                {steps.map((s, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-lg flex justify-between items-center w-full text-xs transition-colors ${
                      s.active 
                        ? 'bg-teal-400/5 outline outline-1 outline-offset-[-1px] outline-teal-500 text-teal-400 font-bold' 
                        : 'bg-black/20 text-slate-400 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold">{s.num}</span>
                      <span>{s.name}</span>
                    </div>
                    <span className={s.active ? 'text-teal-400' : 'text-slate-500 font-normal'}>
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Completed count & decisions (5 cols) */}
            <div className="md:col-span-2 lg:col-span-5 flex flex-col gap-6">
              
              {/* Mini task cards grid */}
              <div className="grid grid-cols-3 gap-3 w-full">
                {tasks.map((t, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-zinc-950 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-1.5 text-left"
                  >
                    <span className="text-slate-500 text-[9px] font-bold tracking-wider leading-tight uppercase">
                      {t.label}
                    </span>
                    <span className={`text-xl sm:text-2xl font-bold font-mono leading-none ${t.style}`}>
                      {t.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decisions Board */}
              <div className="p-5 bg-zinc-950 rounded-[10px] border border-gray-800 flex flex-col justify-start items-start gap-4">
                <span className="text-slate-100 text-sm font-bold">
                  Open Critical Decisions Required
                </span>
                
                <div className="flex flex-col gap-3 w-full">
                  {decisions.map((d, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-slate-900 rounded-lg border border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs"
                    >
                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-teal-400 font-mono text-[9px] uppercase tracking-wider">{d.category}</span>
                        <p className="text-slate-400 font-normal leading-relaxed">{d.title}</p>
                      </div>
                      <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-550 rounded-sm font-semibold shrink-0">
                        {d.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Column 3: Roles on shift (3 cols) */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-3">
              <span className="text-slate-500 text-xs font-bold font-mono tracking-wider uppercase border-b border-zinc-800 pb-1.5 text-left w-full">
                ROLES ON SHIFT
              </span>
              
              <div className="p-4 bg-zinc-950 rounded-lg border border-gray-800 flex flex-col gap-4 w-full">
                {roles.map((r, idx) => (
                  <div key={idx} className="flex justify-between items-center w-full">
                    <div className="flex flex-col justify-start items-start text-left gap-0.5">
                      <span className="text-slate-100 text-xs font-bold">
                        {r.name}
                      </span>
                      <span className="text-slate-500 text-[10px] font-normal font-spaceGrotesk">
                        {r.role}
                      </span>
                    </div>
                    {/* Status Dot */}
                    <div className={`size-2 rounded-full ${r.active ? 'bg-emerald-505' : 'bg-slate-500'}`} />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Label */}
          <p className="text-slate-600 text-xs font-normal text-left pt-2 border-t border-gray-800">
            *Illustrative workflow UI representing native system actions for standard event configurations.
          </p>

        </div>

      </div>
    </section>
  );
}
