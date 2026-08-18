'use client';

import React from 'react';
import { Shield, Lock, Users, Database, FileCheck } from 'lucide-react';

export default function ConferenceTrust() {
  const cards = [
    {
      title: 'Scale & Concurrency',
      desc: 'Our 48 concurrent track limit is not theoretical. Gated by load-testing evidence on active AWS/Zoiko Cloud points, auditable by enterprise teams.',
      icon: Shield
    },
    {
      title: 'Authoritative Control',
      desc: 'SAML, OIDC, and multi-tenant isolation controls are verified by independent external security auditors. Full penetration summaries available on request.',
      icon: Lock
    },
    {
      title: 'Verified Accessibility',
      desc: 'Compliance targets are established dynamically per active track. We track transcription delay and audio description coverage transparently.',
      icon: Users
    },
    {
      title: 'Recording Lifecycle',
      desc: 'No automatic promises of storage. Deletion guarantees and deep-glacier archival policies are written, signed off, and executed programmatically.',
      icon: Database
    },
    {
      title: 'Approved Proof Only',
      desc: 'Case studies and metrics published only after rigorous legal sign-off from corporate partners. We never showcase blind telemetry as reference.',
      icon: FileCheck
    }
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
      />
      <div className="absolute left-[320px] top-[150px] w-[800px] h-[600px] bg-gradient-to-b from-teal-500/10 to-blue-500/10 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-105 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Enterprise trust without vague promises
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed max-w-2xl">
            Every high-risk claim has an owner, evidence source, and withdrawal behavior. We believe live event infrastructure should be open to scrutiny.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col gap-6 w-full">
          
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {cards.slice(0, 3).map((c, idx) => {
              const Icon = c.icon;
              return (
                <div 
                  key={idx}
                  className="bg-zinc-900/80 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-cyan-950 p-8 flex flex-col justify-between items-start min-h-[288px] overflow-hidden hover:outline-cyan-900 transition-colors"
                >
                  {/* Glowing Icon Container */}
                  <div className="self-stretch flex justify-end w-full">
                    <div className="size-16 bg-gradient-to-b from-blue-400 via-blue-700 to-blue-950 rounded-[40px] shadow-[0px_0px_24px_4px_rgba(74,122,255,0.33),0px_4px_16px_0px_rgba(34,68,187,0.20)] flex justify-center items-center">
                      <Icon className="size-7 text-white stroke-[1.5]" />
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <div className="flex flex-col gap-3 w-full pt-6">
                    <h3 className="text-slate-100 text-xl font-bold font-spaceGrotesk leading-tight">{c.title}</h3>
                    <p className="text-slate-400 text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 w-full">
            {cards.slice(3, 5).map((c, idx) => {
              const Icon = c.icon;
              return (
                <div 
                  key={idx}
                  className="w-full lg:w-[384px] bg-zinc-900/80 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-cyan-950 p-8 flex flex-col justify-between items-start min-h-[288px] overflow-hidden hover:outline-cyan-900 transition-colors"
                >
                  {/* Glowing Icon Container */}
                  <div className="self-stretch flex justify-end w-full">
                    <div className="size-16 bg-gradient-to-b from-blue-400 via-blue-700 to-blue-950 rounded-[40px] shadow-[0px_0px_24px_4px_rgba(74,122,255,0.33),0px_4px_16px_0px_rgba(34,68,187,0.20)] flex justify-center items-center">
                      <Icon className="size-7 text-white stroke-[1.5]" />
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <div className="flex flex-col gap-3 w-full pt-6">
                    <h3 className="text-slate-100 text-xl font-bold font-spaceGrotesk leading-tight">{c.title}</h3>
                    <p className="text-slate-400 text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
