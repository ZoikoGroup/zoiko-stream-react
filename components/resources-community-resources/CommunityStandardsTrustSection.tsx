'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface TrustCard {
  id: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  href: string;
}

const CARDS: TrustCard[] = [
  {
    id: 'code-of-conduct',
    title: 'Code of Conduct',
    description:
      'Our community guidelines establish clear expectations for respectful participation, content quality standards, and welcoming behavior across all ZoikoStream-operated spaces.',
    image: '/images/community-resources/cr22.png',
    linkText: 'View Code of Conduct',
    href: '/community-code',
  },
  {
    id: 'moderation-reporting',
    title: 'Moderation & Reporting',
    description:
      'Trained moderators review ZoikoStream-operated spaces daily. Report safety concerns or accessibility barriers through our streamlined dashboard.',
    image: '/images/community-resources/cr23.png',
    linkText: 'Report an Issue',
    href: '/contact-us',
  },
  {
    id: 'official-vs-community',
    title: 'Official vs Community',
    description:
      'While peer-to-peer discussions are incredibly helpful, remember that authoritative configuration rules, schema updates, and SLAs are exclusively declared in official Documentation.',
    image: '/images/community-resources/cr24.png',
    linkText: 'View Documentation',
    href: '/developer-documentation',
  },
];

export default function CommunityStandardsTrustSection() {
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
            Community standards and trust
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-3xl leading-relaxed">
            How we maintain quality, safety, and transparency across all community resources.
          </p>
        </div>

        {/* 3 Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Photo Banner */}
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
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
