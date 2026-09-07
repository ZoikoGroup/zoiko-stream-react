'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AuthorityCard {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  imageClass?: string;
}

const CARDS: AuthorityCard[] = [
  {
    id: 'overview',
    title: 'Live Events Overview',
    description:
      'Capability overview, event types, and approved Live Events value. Start here for orientation.',
    image: '/images/live-events-planning-guide/epg7.png',
    href: '/live-events',
    imageClass: 'object-cover object-center scale-105 group-hover:scale-110',
  },
  {
    id: 'managed-production',
    title: 'Managed Event Production',
    description:
      'Specific workflow and capability explanations for professionally managed events.',
    image: '/images/live-events-planning-guide/epg8.png',
    href: '/live-events',
    imageClass: 'object-cover object-center scale-[1.3] group-hover:scale-[1.35]',
  },
  {
    id: 'audience-access',
    title: 'Secure Audience Access',
    description:
      'Private, restricted, and authenticated audience models and access methods.',
    image: '/images/live-events-planning-guide/epg9.png',
    href: '/security',
    imageClass: 'object-cover object-center scale-105 group-hover:scale-110',
  },
  {
    id: 'captions-languages',
    title: 'Captions & Languages',
    description:
      'Caption availability, language support, and accessible content guidance.',
    image: '/images/live-events-planning-guide/epg10.png',
    href: '/developer-documentation',
    imageClass: 'object-cover object-center scale-105 group-hover:scale-110',
  },
  {
    id: 'resilience',
    title: 'Event Resilience',
    description:
      'Resilience models, fallback options, and service boundaries where approved.',
    image: '/images/live-events-planning-guide/epg11.png',
    href: '/developers-rate-limits',
    imageClass: 'object-cover object-center scale-105 group-hover:scale-110',
  },
  {
    id: 'recording-replay',
    title: 'Recording & Replay',
    description:
      'Post-event recording, replay, and archive capabilities and policies.',
    image: '/images/live-events-planning-guide/epg12.png',
    href: '/recording-and-replay',
    imageClass: 'object-cover object-center scale-105 group-hover:scale-110',
  },
];

export default function AuthorityRoutingGridSection() {
  return (
    <section className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Route to the right authority for every question
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            ZoikoStream routes every planning question to the team that owns the answer. Capability pages establish what&apos;s possible. Support pages resolve what&apos;s blocking.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden p-6 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-teal-300 transition-all duration-300"
            >
              <div>
                {/* Illustration Image Banner */}
                <div className="relative w-full h-44 bg-black rounded-xl overflow-hidden mb-5">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={`transition-transform duration-500 ${card.imageClass || 'object-cover object-center'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
