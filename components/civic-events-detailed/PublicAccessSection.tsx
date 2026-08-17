'use client';

import React from 'react';
import { Globe, UserCheck, KeyRound, GitMerge, ShieldAlert, NotepadTextDashed, Eye, MousePointer2Icon, MousePointer2, Volume2, FileInput, MousePointerIcon } from 'lucide-react';

export default function PublicAccessSection() {
  const pathways = [
    {
      title: 'Open public',
      desc: 'Direct watch or join with zero accounts required, ideal for broad open meetings.',
      state: 'Verified',
      stateType: 'verified', // green
      icon:FileInput
    },
    {
      title: 'Controlled public',
      desc: 'Organizer-defined tokens, custom registration, or localized community links.',
      state: 'Verified',
      stateType: 'verified',
      icon: FileInput
    },
    {
      title: 'Credentialed / invited',
      desc: 'Strictly authenticated access for verified community stakeholders or council boards.',
      state: 'Verified',
      stateType: 'verified',
      icon:Eye
    },
    {
      title: 'Mixed',
      desc: 'Combine multiple paths, with different access levels for specific agenda items.',
      state: 'Verified',
      stateType: 'verified',
      icon: MousePointerIcon
    },
    {
      title: 'Unavailable',
      desc: 'Requested stream mode is blocked or unsupported based on regional compliance rules.',
      state: 'Draft',
      stateType: 'draft', // grey
      icon: Volume2
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-10"
        style={{ backgroundImage: "url('/images/civic-events-detailed/bg (2).png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            How the public reaches the proceedings
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            Access intent is set by the organizer; capability is shown only where verified.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {pathways.map((path, idx) => {
            const Icon = path.icon;
            return (
              <div 
                key={idx}
                className="p-5 bg-gray-900/80 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-teal-500/30 transition-colors backdrop-blur-sm shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-950 rounded-lg flex justify-center items-center text-teal-400 shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-start items-start gap-1">
                    <h3 className="text-white text-lg font-bold font-sans">
                      {path.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">
                      {path.desc}
                    </p>
                  </div>
                </div>

                <div className="sm:self-center">
                  <span 
                    className={`px-3 py-1 text-xs font-semibold rounded-md ${
                      path.stateType === 'verified' 
                        ? 'bg-emerald-500/10 text-emerald-450 border border-emerald-500/20' 
                        : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                    }`}
                  >
                    {path.state}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
