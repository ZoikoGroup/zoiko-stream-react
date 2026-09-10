import React from 'react';
import Image from 'next/image';
import bgSection7 from '@/public/images/live-event-conferences/section-7bg (2).png';

export function AudienceAccessSection() {
  const cards = [
    {
      badge: 'UNRESTRICTED',
      title: 'Public Viewing',
      description: 'Uncapped, instant-load global pipelines optimized for viral marketing reach, product announcements, and open developer hubs.',
    },
    {
      badge: 'WHITE-GLOVE GATE',
      title: 'Private/Restricted',
      description: 'Enforce strict email invitation parameters, unique passcode authorization links, or manual preflight approval queues.',
    },
    {
      badge: 'SAML SSO INTEGRATED',
      title: 'Internal Audience',
      description: 'Natively authenticate team members utilizing company SSO configurations. Restrict access entirely to IP blocks or intranet nodes.',
    },
    {
      badge: 'SEGREGATED TICKETS',
      title: 'Per-Session Access',
      description: 'Isolate specific panels, VIP keynotes, and breakout Q&As based on ticket tiers or custom registration groupings.',
    },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgSection7}
          alt="Audience Access & Privacy Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-100 leading-tight">
            Audience Access &amp; Privacy
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Establish exact security gates for digital observers. Balance broad public accessibility with strict internal security parameters effortlessly.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-4 overflow-hidden backdrop-blur-sm"
            >
              <span className="text-teal-500 text-[10px] font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
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
