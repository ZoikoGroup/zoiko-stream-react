'use client';

import React from 'react';
import Image from 'next/image';

interface SafetyCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const CARDS: SafetyCard[] = [
  {
    id: 'secrets-credentials',
    title: 'Secrets & Credentials',
    description:
      'Never post passwords, API keys, tokens, stream keys, private keys, or connection strings publicly.',
    image: '/images/community-resources/cr2.png',
  },
  {
    id: 'private-media',
    title: 'Private Media & Customer Data',
    description:
      'Do not share customer-identifying content, private stream recordings, or confidential log payloads.',
    image: '/images/community-resources/cr3.png',
  },
  {
    id: 'security-vulnerability',
    title: 'Security Vulnerability',
    description:
      'Use responsible disclosure path. Do not post exploit steps or sensitive payloads directly in standard forum logs.',
    image: '/images/community-resources/cr4.png',
  },
  {
    id: 'service-outage',
    title: 'Service Outage',
    description:
      'Check System Status first. Community discussion represents peer telemetry, not official live service truth.',
    image: '/images/community-resources/cr5.png',
  },
  {
    id: 'account-problem',
    title: 'Account-Specific Problem',
    description:
      'Use Contact Support when billing, private pipeline variables, or personal context are required to help.',
    image: '/images/community-resources/cr6.png',
  },
  {
    id: 'accessibility-barrier',
    title: 'Accessibility Barrier',
    description:
      'Use accessibility reporting path. No disability disclosure required to log issues with standard playback controls.',
    image: '/images/community-resources/cr7.png',
  },
];

export default function BeforeYouPostSection() {
  return (
    <section id="before-you-post" className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
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
            Before you post — keep it safe
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-3xl leading-relaxed">
            Protect yourself and others when participating in community spaces.
          </p>
        </div>

        {/* 6 Safety Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4 bg-slate-900">
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
