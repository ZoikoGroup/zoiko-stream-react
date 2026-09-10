import React from 'react';
import Image from 'next/image';
import bgSection11 from '@/public/images/live-event-conferences/section-11bg (2).png';

export function RecordingReplaySection() {
  const cards = [
    {
      badge: 'PRESERVATION',
      title: 'Recording Intent',
      sub: 'Cloud Redundant Captures',
      description: 'Activate dual-region redundant master archives. Capture high-fidelity raw program files untouched by localized lower-third assets.',
    },
    {
      badge: 'PRESERVATION',
      title: 'Per-Session Recording',
      sub: 'Isolate Individual Keynotes',
      description: 'Isolate session chunks automatically. Compile separate video master files for breakout streams as they conclude.',
    },
    {
      badge: 'PRESERVATION',
      title: 'Replay Access',
      sub: 'Instant DVR Playback Options',
      description: 'Permit late-joining observers to skip back, pause, or rewind the live feed seamlessly inside the primary player widget.',
    },
    {
      badge: 'PRESERVATION',
      title: 'Archive & Preservation',
      sub: 'Sovereign Storage Lifetimes',
      description: 'Choose compliance-safe cloud data retention policies. Restrict or retain VOD masters based on internal legal cycles.',
    },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgSection11}
          alt="Recording, Replay & Preservation Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-100 leading-tight lg:leading-[60.8px]">
            Recording, Replay &amp; Preservation
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Define absolute parameters for video retention, instant highlights availability, download permissions, and transcript compliance before launching.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-600 flex flex-col justify-start items-start gap-3 backdrop-blur-sm"
            >
              <div className="w-full inline-flex justify-between items-center">
                <span className="text-teal-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                  {card.badge}
                </span>
                <div className="w-2 h-2 bg-teal-500 rounded-full" />
              </div>
              <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>
              <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">
                {card.sub}
              </span>
              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
