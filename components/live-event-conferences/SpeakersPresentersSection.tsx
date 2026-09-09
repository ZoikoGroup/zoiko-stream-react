import React from 'react';
import Image from 'next/image';
import bgSection5 from '@/public/images/live-event-conferences/section-5bg (2).png';

export function SpeakersPresentersSection() {
  const cards = [
    {
      badge: 'SRT / RTMP INGEST',
      title: 'On-Site Contributors',
      description: 'Direct pipeline connection mapping high-definition physical venue cameras with immediate backup switch loops configured on-site.',
    },
    {
      badge: 'WEBRTC LOW LATENCY',
      title: 'Remote Contributors',
      description: 'Unified speaker studio portal enabling remote presenters to join with low latency from standard browser environments.',
    },
    {
      badge: 'PLAYBACK STORAGE',
      title: 'Pre-Recorded Media',
      description: 'Queue high-fidelity pre-recorded session files, intro sequences, sponsor clips, and slides safely on cloud file clusters.',
    },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgSection5}
          alt="Speakers, Contributors & Sources Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-100 leading-tight">
            Speakers, Contributors &amp; Sources
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Register high-fidelity camera feeds, auxiliary presentation streams, and remote browser-guest links safely inside a centralized, latency-monitored matrix.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-4 overflow-hidden backdrop-blur-sm"
            >
              <span className="text-teal-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                {card.badge}
              </span>
              <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>
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
