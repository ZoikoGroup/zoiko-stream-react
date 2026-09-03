'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ComparisonCard {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const CARDS: ComparisonCard[] = [
  {
    id: 'service-updates',
    title: 'Service Updates',
    description:
      'Planned maintenance windows and scheduled operational changes designed to limit service drift.',
    image: '/images/service-updates/su1.png',
    href: '/resources-service-updates',
  },
  {
    id: 'system-status',
    title: 'System Status',
    description:
      'Current platform service health, active performance degradations, and real-time live diagnostics.',
    image: '/images/service-updates/su2.png',
    href: '/zoikostream-status',
  },
  {
    id: 'changelog',
    title: 'Changelog',
    description:
      'Developer API, native SDK, and protocol update histories. Highly technical, structured records.',
    image: '/images/service-updates/su3.png',
    href: '/zoikostream-status',
  },
  {
    id: 'release-notes',
    title: 'Release Notes',
    description:
      'Customer-facing feature announcements, capability tutorials, and general product upgrades.',
    image: '/images/service-updates/su7.png',
    href: '/developer-documentation',
  },
];

export default function UpdatesComparisonSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/service-updates/su-bg3.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Service updates vs Status vs Changelog vs Release notes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            ZoikoStream cleanly separates planned infrastructure work from live production incidents, technical API additions, and new consumer features.
          </p>
        </div>

        {/* 4 Navigation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 overflow-hidden p-5 shadow-lg flex flex-col justify-between hover:border-slate-700/90 transition-all duration-300"
            >
              <div>
                {/* Photo Image Banner */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-slate-900">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-base sm:text-lg mb-2 group-hover:text-teal-300 transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
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
