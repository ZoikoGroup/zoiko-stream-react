'use client';

import React from 'react';
import Image from 'next/image';

interface PathCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const CARDS: PathCard[] = [
  {
    id: 'system-status',
    title: 'System Status',
    description: 'Live platform diagnostic logs and uptime feeds.',
    image: '/images/Enterprise Page/se8.png',
  },
  {
    id: 'help-center',
    title: 'Help Center',
    description: 'Instantly search our comprehensive developer manuals.',
    image: '/images/Enterprise Page/se9.png',
  },
  {
    id: 'developer-support',
    title: 'Developer Support',
    description: 'Technical implementation advice for SDK & API integrations.',
    image: '/images/Enterprise Page/se10.png',
  },
  {
    id: 'live-events-support',
    title: 'Live Events Support',
    description: 'Managed technical operations during active broadcasts.',
    image: '/images/Enterprise Page/se11.png',
  },
  {
    id: 'usage-billing',
    title: 'Usage & Billing',
    description: 'Review organizational bandwidth tiers and active invoices.',
    image: '/images/Enterprise Page/se12.png',
  },
  {
    id: 'accessibility-help',
    title: 'Accessibility Help',
    description: 'Barrier-free access support for client player screens.',
    image: '/images/Enterprise Page/se13.png',
  },
];

export default function FastestPathSection() {
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
            The fastest path to the right authority
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            By resolving target contexts dynamically, our support engine connects you to the optimal technical division.
          </p>
        </div>

        {/* 6 Authority Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4 bg-slate-50 flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
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
