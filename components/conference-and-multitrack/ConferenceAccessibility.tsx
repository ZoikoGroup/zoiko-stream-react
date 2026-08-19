'use client';

import React from 'react';
import Image from 'next/image';

export default function ConferenceAccessibility() {
  const auditTracks = [
    {
      code: 'TRACK A · TECHNICAL',
      title: 'Scale with SRT Listener Pipelines',
      captions: { text: 'Ready', style: 'text-emerald-500 bg-emerald-500/10' },
      signLang: { text: 'Ready', style: 'text-emerald-500 bg-emerald-500/10' },
      audioDesc: { text: 'Needs Review', style: 'text-orange-400 bg-orange-500/10' },
      auditor: 'Kenji Sato'
    },
    {
      code: 'TRACK B · DEV OPS',
      title: 'Dynamic Failover Switch Drill',
      captions: { text: 'Ready', style: 'text-emerald-500 bg-emerald-500/10' },
      signLang: { text: 'Unavailable', style: 'text-slate-400 bg-slate-400/10 dark:bg-zinc-800' },
      audioDesc: { text: 'Ready', style: 'text-emerald-500 bg-emerald-500/10' },
      auditor: 'Sarah Jenkins'
    },
    {
      code: 'TRACK C · AUDIENCE',
      title: 'Designing High-Integrity Event Briefs',
      captions: { text: 'Needs Review', style: 'text-orange-400 bg-orange-500/10' },
      signLang: { text: 'Partial', style: 'text-blue-500 bg-blue-500/10' },
      audioDesc: { text: 'Unavailable', style: 'text-slate-400 bg-slate-400/10 dark:bg-zinc-800' },
      auditor: 'Dave Holloway'
    },
    {
      code: 'TRACK D · WORKSHOP',
      title: 'Operator Readiness Workshop',
      captions: { text: 'Ready', style: 'text-emerald-500 bg-emerald-500/10' },
      signLang: { text: 'Ready', style: 'text-emerald-500 bg-emerald-500/10' },
      audioDesc: { text: 'Ready', style: 'text-emerald-500 bg-emerald-500/10' },
      auditor: 'Compliance Team'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/conferences-and-multitrack/bg (20).png')" }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Accessibility that works session by session
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-10">
          
          {/* Left Column - Doctrine card */}
          <div className="w-full lg:w-96 shrink-0 p-8 sm:p-10 bg-teal-500/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col justify-between items-start gap-7">
            <div className="flex flex-col gap-4 w-full">
              <h3 className="text-teal-400 text-xl font-bold font-spaceGrotesk leading-tight">
                The Accessibility Doctrine
              </h3>
              <blockquote className="text-slate-100 text-2xl font-medium font-spaceGrotesk leading-relaxed">
                &quot;A conference is not accessible because most sessions are. Gaps must remain visible.&quot;
              </blockquote>
              <p className="text-slate-400 text-sm font-normal font-spaceGrotesk leading-relaxed">
                Maintain continuous auditing. Every single session carries its own verified WCAG compliance score, tracking live transcriptions, sign language relays, and audio descriptions dynamically.
              </p>
            </div>
            
            <div className="relative h-40 w-full rounded-lg overflow-hidden bg-zinc-900">
              <Image 
                src="/images/conferences-and-multitrack/DocImage.png" 
                alt="Accessibility Doctrine Documentation" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Audit Grid */}
          <div className="flex-1 flex flex-col justify-start items-start gap-4 w-full">
            <h3 className="text-slate-100 text-base font-bold font-spaceGrotesk leading-6">
              Active Track Accessibility Audit
            </h3>
            
            <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-teal-400">
              <div className="min-w-[800px] flex flex-col gap-3 w-full">
                {auditTracks.map((row, idx) => (
                  <div 
                    key={idx}
                    className="w-full p-5 bg-zinc-900/80 hover:bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-800 flex items-center gap-4 transition-all"
                  >
                    {/* Track details */}
                    <div className="w-72 shrink-0 flex flex-col justify-start items-start gap-1">
                      <span className="text-slate-400 text-[10px] font-bold font-mono tracking-wider">{row.code}</span>
                      <h4 className="text-slate-100 text-base font-bold font-spaceGrotesk leading-snug line-clamp-1">{row.title}</h4>
                    </div>

                    {/* Captions Status */}
                    <div className="flex-1 flex flex-col justify-start items-center gap-1">
                      <span className="text-slate-500 text-[9px] font-bold font-mono tracking-wider">CAPTIONS</span>
                      <span className={`px-2.5 py-1 text-[10px] font-bold font-spaceGrotesk rounded-sm uppercase tracking-wide shrink-0 ${row.captions.style}`}>
                        {row.captions.text}
                      </span>
                    </div>

                    {/* Sign Language Status */}
                    <div className="flex-1 flex flex-col justify-start items-center gap-1">
                      <span className="text-slate-500 text-[9px] font-bold font-mono tracking-wider">SIGN LANG</span>
                      <span className={`px-2.5 py-1 text-[10px] font-bold font-spaceGrotesk rounded-sm uppercase tracking-wide shrink-0 ${row.signLang.style}`}>
                        {row.signLang.text}
                      </span>
                    </div>

                    {/* Audio Description Status */}
                    <div className="flex-1 flex flex-col justify-start items-center gap-1">
                      <span className="text-slate-500 text-[9px] font-bold font-mono tracking-wider">AUDIO DESC</span>
                      <span className={`px-2.5 py-1 text-[10px] font-bold font-spaceGrotesk rounded-sm uppercase tracking-wide shrink-0 ${row.audioDesc.style}`}>
                        {row.audioDesc.text}
                      </span>
                    </div>

                    {/* Auditor */}
                    <div className="w-28 shrink-0 flex flex-col justify-start items-end gap-1 text-right">
                      <span className="text-slate-500 text-[9px] font-bold font-mono tracking-wider">AUDITOR</span>
                      <span className="text-slate-100 text-xs font-normal font-spaceGrotesk leading-6 line-clamp-1">{row.auditor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
