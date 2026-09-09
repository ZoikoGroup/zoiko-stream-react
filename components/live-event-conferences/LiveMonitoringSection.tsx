import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import imgMon1 from '@/public/images/live-event-conferences/Rectangle (7).png';
import imgMon2 from '@/public/images/live-event-conferences/Rectangle (8).png';
import imgMon3 from '@/public/images/live-event-conferences/Rectangle (9).png';
import imgMon4 from '@/public/images/live-event-conferences/Rectangle (10).png';

export function LiveMonitoringSection() {
  const cards = [
    {
      badge: 'OPERATIONS',
      title: 'Stream Health',
      description: 'Real-time metrics charting incoming packet integrity, resolution benchmarks, and bitrate stability.',
      image: imgMon1,
    },
    {
      badge: 'OPERATIONS',
      title: 'Platform Status',
      description: 'Instant cloud network health reporting across 14 global ingress and media delivery nodes.',
      image: imgMon2,
    },
    {
      badge: 'OPERATIONS',
      title: 'Live Support',
      description: 'Direct operational L1 engineering chat active throughout your transmission hours.',
      image: imgMon3,
    },
    {
      badge: 'OPERATIONS',
      title: 'Developer Support',
      description: 'Comprehensive API references, webhook triggers, and web playback configuration code libraries.',
      image: imgMon4,
    },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden border-b border-gray-200">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-96 -left-35 -top-22 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-zinc-950 leading-tight">
            Live Monitoring, Status &amp; Support
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Monitor ongoing signal health active. Coordinate with local venues, review ingress metrics, and communicate directly with active Zoiko stream engineers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-40 bg-slate-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-3">
                <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                  {card.badge}
                </span>
                <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
