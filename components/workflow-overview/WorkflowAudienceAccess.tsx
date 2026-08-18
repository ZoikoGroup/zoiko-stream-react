'use client';

import React from 'react';
import { Eye, KeyRound, UserCheck, ShieldClose } from 'lucide-react';

export default function WorkflowAudienceAccess() {
  const cards = [
    {
      title: 'Public Broadcast',
      desc: 'Open links optimized for viral social reach, community gatherings, and large-scale public announcements.',
      badge: 'Unrestricted',
      icon: Eye
    },
    {
      title: 'Invite-Only Code',
      desc: 'Every guest receives a personal passcode key. Shield family celebrations or closed townhalls from public eyes.',
      badge: 'Passcode Secured',
      icon: KeyRound
    },
    {
      title: 'Credentialed Gate',
      desc: 'Require pre-event registration, whitelist validation, or corporate SAML SSO authentication rules.',
      badge: 'SAML Approved',
      icon: UserCheck
    },
    {
      title: 'Strictly Closed',
      desc: 'Highly secure link parameters restricted entirely to whitelisted IP blocks or local network nodes.',
      badge: 'IP Whitelisted',
      icon: ShieldClose
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/workflow-overview/bg (40).png')" }}
      />
      <div className="absolute left-[100px] top-[200px] w-[500px] h-[400px] bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl font-spaceGrotesk">
          <h2 className="text-slate-105 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Define who may watch and how
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            Choose exactly how your virtual audience registers, gets approved, and views the live stream. Balance public visibility with absolute privacy.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col justify-between items-start gap-4 hover:border-zinc-700/50 transition-all duration-300 shadow-md min-h-[220px]"
              >
                {/* Header Row */}
                <div className="flex justify-between items-center w-full pb-2 border-b border-zinc-800/80">
                  <span className="text-teal-555 text-[10px] font-bold font-mono uppercase tracking-wider">
                    {c.badge}
                  </span>
                  
                  {/* Small Blue Icon Box */}
                  <div className="size-7 bg-blue-500/10 rounded-lg flex justify-center items-center shrink-0">
                    <Icon className="size-3.5 text-blue-500 stroke-[1.8]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 w-full text-left font-spaceGrotesk">
                  <h3 className="text-slate-101 text-base font-bold">
                    {c.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
