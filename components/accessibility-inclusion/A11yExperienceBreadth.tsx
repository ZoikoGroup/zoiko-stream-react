'use client';

import React from 'react';
import Image from 'next/image';

export default function A11yExperienceBreadth() {
  const requirementStates = [
    { label: 'Captioning needed', badge: 'Targeted', style: 'text-blue-500 bg-blue-500/10 outline-blue-500/30' },
    { label: 'Planned Streams', badge: 'Pending', style: 'text-amber-500 bg-amber-500/10 outline-amber-500/30' },
    { label: 'Verified Feeds', badge: 'Pass', style: 'text-emerald-500 bg-emerald-500/10 outline-emerald-500/30' },
    { label: 'Known Limitations', badge: 'Flagged', style: 'text-red-500 bg-red-500/10 outline-red-500/30' }
  ];

  const features = [
    {
      title: 'Audio Description',
      desc: 'Parallel audio tracks explaining key visual actions.',
      img: '/images/accessibility-inclusion/Rectangle (62).png'
    },
    {
      title: 'Sign Language Overlay',
      desc: 'Dedicated picture-in-picture signer streams.',
      img: '/images/accessibility-inclusion/Rectangle (83).png'
    },
    {
      title: 'Live Transcripts',
      desc: 'Real-time scrollable and searchable event scripts.',
      img: '/images/accessibility-inclusion/Rectangle (63).png'
    },
    {
      title: 'Terminology Support',
      desc: 'Contextual jargon and acronym definitions sidebar.',
      img: '/images/accessibility-inclusion/Rectangle (64).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/accessibility-inclusion/SectionBG (1).png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Captions are one part of a broader accessible experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Caption and language planning connects directly to the core of your event&apos;s architectural roadmap.
          </p>
        </div>

        {/* Content Columns */}
        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-10">
          
          {/* Left Column: Requirements panel */}
          <div className="w-full lg:w-[420px] p-6 sm:p-8 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-4 shrink-0 shadow-lg">
            <h3 className="text-slate-105 text-base font-bold font-spaceGrotesk leading-6 border-b border-zinc-800 pb-3 w-full">
              Language Requirement States
            </h3>
            
            <div className="flex flex-col gap-3 w-full">
              {requirementStates.map((state, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-zinc-950/60 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-850 flex justify-between items-center hover:bg-zinc-950 transition-colors"
                >
                  <span className="text-slate-100 text-xs sm:text-sm font-normal font-spaceGrotesk">
                    {state.label}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full outline outline-1 text-[10px] font-bold font-mono tracking-wider uppercase shrink-0 ${state.style}`}>
                    {state.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Features cards list */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {features.map((f, idx) => (
              <div 
                key={idx}
                className="bg-gray-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col sm:flex-row justify-start items-start overflow-hidden hover:border-zinc-700/50 transition-all duration-300"
              >
                {/* Horizontal image cover */}
                <div className="relative h-24 w-full sm:w-36 shrink-0 bg-zinc-950">
                  <Image 
                    src={f.img} 
                    alt={f.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Text pad */}
                <div className="p-4 flex flex-col justify-start items-start gap-1 text-left flex-1">
                  <h4 className="text-slate-105 text-sm font-bold font-spaceGrotesk">
                    {f.title}
                  </h4>
                  <p className="text-slate-400 text-[11px] sm:text-xs font-normal font-spaceGrotesk leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Disclaimer footer */}
        <div className="pt-4 border-t border-zinc-800 w-full">
          <p className="text-slate-500 text-xs font-normal font-spaceGrotesk leading-relaxed">
            * Captions and language options are available only when configured and verified for the specific event context.
          </p>
        </div>

      </div>
    </section>
  );
}
