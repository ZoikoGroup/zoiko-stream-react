import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import imgCard1 from '@/public/images/live-event-conferences/image (1).png';
import imgCard2 from '@/public/images/live-event-conferences/image (2).png';
import imgCard3 from '@/public/images/live-event-conferences/image 3.png';
import imgCard4 from '@/public/images/live-event-conferences/image 4.png';

export function EventPathsSection() {
  const cards = [
    {
      badge: 'COMPLEX EVENTS',
      title: 'Multi-Session Conference',
      description: 'Standardized support for dozens of speakers, multiple days, virtual breakout tracks, and attendee registration gating models.',
      image: imgCard1,
    },
    {
      badge: 'HIGH SECURITY',
      title: 'Corporate Broadcast',
      description: 'Flawless programmatic delivery for internal townhalls, public earnings, investor keynotes, and SAML SSO whitelists.',
      image: imgCard2,
    },
    {
      badge: 'CREATOR FLEXIBILITY',
      title: 'Self-Operated Streaming',
      description: 'Simple browser-based ingestion controls for independent virtual stages, remote guest links, and custom graphic overlays.',
      image: imgCard3,
    },
    {
      badge: 'FULL REDUNDANCY',
      title: 'Managed Event Service',
      description: 'Our L1 technical engineers manage the transmission from start to finish, supervising local network failovers actively on-site.',
      image: imgCard4,
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
            Find the Right Event Path
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Whether you are producing a global multi-day developer summit or an executive boardroom announcement, align operational duties instantly with our structured templates.
          </p>
        </div>

        {/* 4 Card Grid */}
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
                <div className="w-full inline-flex justify-between items-center">
                  <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                    {card.badge}
                  </span>
                </div>
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
