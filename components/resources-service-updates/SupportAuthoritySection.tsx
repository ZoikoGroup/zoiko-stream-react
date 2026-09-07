'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SupportCard {
  id: string;
  title: string;
  description: string;
  image: string;
  actionText: string;
  href: string;
}

const CARDS: SupportCard[] = [
  {
    id: 'system-status',
    title: 'System Status',
    description:
      'Verify whether local latency is due to a scheduled US-East maintenance window or a broader regional platform network degradation.',
    image: '/images/service-updates/su2.png',
    actionText: 'Check Current Health',
    href: '/zoikostream-status',
  },
  {
    id: 'help-center',
    title: 'Help Center',
    description:
      'Get immediate configuration steps to redirect ingestion streams to US-West backup centers during the scheduled US-East maintenance window.',
    image: '/images/service-updates/su1.png',
    actionText: 'Search Docs & Guides',
    href: '/faqs-and-support',
  },
  {
    id: 'engineering-support',
    title: 'Engineering Support',
    description:
      'Bypass automated guidance for tier-3 escalation regarding custom failover configurations or multi-region ingest strategies.',
    image: '/images/service-updates/su7.png',
    actionText: 'Open Technical Ticket',
    href: '/contact-us',
  },
];

export default function SupportAuthoritySection() {
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
            Route to the right support authority
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Resolve connectivity questions, stream setup friction, or custom regional routing concerns through our dedicated support centers.
          </p>
        </div>

        {/* 3 Support Authority Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-slate-100/90 rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 transition-all duration-200"
            >
              <div>
                {/* Image Banner Header */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-slate-900">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <Link
                  href={card.href}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                >
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Blue Critical Path Alert Box */}
        <div className="bg-blue-50/90 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-3 text-xs sm:text-sm text-blue-950 font-medium shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
          <p>
            <span className="font-bold uppercase tracking-wider font-mono text-[11px] text-blue-700 mr-1.5">
              CRITICAL PATH ALERT:
            </span>
            During active operational incidents,{' '}
            <Link href="/zoikostream-status" className="font-bold text-blue-600 underline hover:text-blue-700">
              System Status
            </Link>{' '}
            and direct ticket support outrank all other general documentation pathways.
          </p>
        </div>
      </div>
    </section>
  );
}
