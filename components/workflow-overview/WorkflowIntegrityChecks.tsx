'use client';

import React from 'react';

export default function WorkflowIntegrityChecks() {
  const blocks = [
    {
      num: '01',
      title: 'Event Identity & Schedule',
      desc: 'Date, location setup & global timezones verified.',
      badge: { text: 'Ready', style: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400' }
    },
    {
      num: '02',
      title: 'Operating Scope',
      desc: 'On-site technical roles & L1 leads assigned.',
      badge: { text: 'Ready', style: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400' }
    },
    {
      num: '03',
      title: 'Contribution/Production',
      desc: 'Camera video inputs awaiting final resolution handshake.',
      badge: { text: 'Needs Review', style: 'text-amber-500 bg-amber-100 dark:bg-amber-955/40 dark:text-amber-400' }
    },
    {
      num: '04',
      title: 'Audience Access',
      desc: 'SSO whitelist database validated and compiled.',
      badge: { text: 'Ready', style: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400' }
    },
    {
      num: '05',
      title: 'Accessibility/Language',
      desc: 'Live translation sub-channels routing checked.',
      badge: { text: 'Ready', style: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400' }
    },
    {
      num: '06',
      title: 'Resilience/Support',
      desc: 'Secondary cellular backup link signal sweep pending.',
      badge: { text: 'Needs Review', style: 'text-amber-500 bg-amber-100 dark:bg-amber-955/40 dark:text-amber-400' }
    },
    {
      num: '07',
      title: 'Recording/Replay',
      desc: 'Sovereign VOD storage allocation threshold exceeded.',
      badge: { text: 'Blocked', style: 'text-red-500 bg-red-100 dark:bg-red-955/40 dark:text-red-405' }
    },
    {
      num: '08',
      title: 'Authorization',
      desc: 'Awaiting primary event owner sign-off signature.',
      badge: { text: 'Pending Gate', style: 'text-slate-500 bg-slate-200 dark:bg-zinc-800 dark:text-slate-400' }
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Resolve blockers and make the authorized go-live decision
          </h2>
          <p className="text-slate-655 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            Every broadcast parameter must pass active preflight integrity checks. Review live status blocks below to ensure zero transmission interruptions.
          </p>
        </div>

        {/* 8 Status Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {blocks.map((b, idx) => (
            <div 
              key={idx}
              className="p-5 bg-slate-50 dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 flex flex-col justify-start items-start gap-3 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 min-h-[170px]"
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-blue-500 dark:text-blue-400 text-lg font-bold font-mono">
                  {b.num}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${b.badge.style}`}>
                  {b.badge.text}
                </span>
              </div>
              
              <div className="flex flex-col gap-1.5 w-full text-left">
                <h3 className="text-zinc-955 dark:text-white text-sm sm:text-base font-bold leading-snug">
                  {b.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-xs font-normal leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Alert bar */}
        <div className="p-6 bg-slate-100 dark:bg-zinc-900/60 rounded-xl border border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full mt-4">
          <div className="flex-1 flex flex-col gap-1 text-left">
            <h4 className="text-zinc-955 dark:text-white text-base font-bold">
              Ready means defined checks are current — not a guarantee
            </h4>
            <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-normal">
              Ensure all &apos;Needs Review&apos; and &apos;Blocked&apos; indicators are resolved at least 2 hours prior to transmission.
            </p>
          </div>
          
          <button className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-600 dark:outline-zinc-700 bg-transparent hover:outline-teal-400 transition-colors text-zinc-955 dark:text-slate-100 text-sm font-semibold shrink-0 cursor-pointer">
            Review readiness
          </button>
        </div>

      </div>
    </section>
  );
}
