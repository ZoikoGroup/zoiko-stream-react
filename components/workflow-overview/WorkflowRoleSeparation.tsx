'use client';

import React from 'react';

export default function WorkflowRoleSeparation() {
  const cards = [
    {
      role: 'Event Owner',
      desc: 'Establishes initial event parameters, inputs base objectives, whitelists final audience access lists.',
      badge: 'ADMIN SIGN-OFF'
    },
    {
      role: 'Event Coordinator',
      desc: 'Bridges logistical steps, manages overall timeline deadlines, validates on-site testing schedules.',
      badge: 'REVIEWER'
    },
    {
      role: 'Production Lead',
      desc: 'Designs visual overlays, loads logo directories, schedules transition times, and switches lower-thirds.',
      badge: 'EDITOR'
    },
    {
      role: 'Venue / AV Owner',
      desc: 'Supplies high-definition local physical source feeds, establishes connection hardware pipelines, tests on-site latency.',
      badge: 'LOCAL BROADCASTER'
    },
    {
      role: 'Access & Security Admin',
      desc: 'Enforces custom passcode keys, configures corporate SAML whitelists, and reviews IP blocks.',
      badge: 'SECURITY SIGN-OFF'
    },
    {
      role: 'Accessibility Lead',
      desc: 'Reviews real-time captions accuracy thresholds, sets dual-channel audio pipelines, manages subtitles.',
      badge: 'EDITOR'
    },
    {
      role: 'Support Lead',
      desc: 'Monitors backup cellular connections failovers, maps ingest jitter metrics, acts as primary L1 troubleshooter.',
      badge: 'OPERATOR'
    },
    {
      role: 'Content Owner',
      desc: 'Authorizes lifetime storage retention tiers, downloads clean MP4 master archives, reviews analytics reports.',
      badge: 'ADMIN'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/workflow-overview/bg (43).png')" }}
      />
      <div className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-105 text-3xl sm:text-4xl font-bold tracking-tight">
            Clarify ownership and separation of duties
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            Establish who authorizes access, configures production assets, and signs off stream readiness. Structured segregation protects event security and timeline continuity.
          </p>
        </div>

        {/* 8 Cards Grid (2 rows of 4 cards on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-4 hover:border-zinc-700/50 transition-all duration-300 shadow-md min-h-[190px]"
            >
              <div className="flex justify-between items-center w-full pb-2 border-b border-zinc-800/80">
                <h3 className="text-slate-101 text-base font-bold">
                  {c.role}
                </h3>
                <span className="px-2 py-0.5 bg-teal-400/10 text-teal-400 text-[9px] font-bold rounded-sm tracking-wider uppercase shrink-0">
                  {c.badge}
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed text-left">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
