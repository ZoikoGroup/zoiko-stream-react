'use client';

import React from 'react';
import Image from 'next/image';

interface ExampleCard {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
}

const EXAMPLE_CARDS: ExampleCard[] = [
  {
    id: 'schema-generated',
    title: 'Schema-Generated',
    badge: 'AUTO',
    description:
      'Auto-generated from current contract schemas with synthetic values. Clearly labeled as structural examples.',
    image: '/images/api reference/ar8.png',
  },
  {
    id: 'verified-pair',
    title: 'Verified Request/Response',
    badge: 'VERIFIED',
    description:
      'Tested against approved environments, timestamped, dependency-aware. Shows exact request and response pairs.',
    image: '/images/api reference/ar9.png',
  },
  {
    id: 'illustrative',
    title: 'Illustrative',
    badge: 'CONCEPT',
    description:
      'Explains shape and intent for complex patterns. Cannot imply exact server behavior beyond source contract.',
    image: '/images/api reference/ar10.png',
  },
];

export default function VerifiedExamplesSection() {
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
            Copy safe, verified examples tied to live contracts
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Every example is synthetic, secret-safe, and tied to a specific operation, schema version, and dependency state. Stale verified examples fail closed.
          </p>
        </div>

        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {EXAMPLE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 overflow-hidden flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-blue-200/80 transition-all duration-300"
            >
              <div>
                {/* Illustration Image */}
                <div className="relative w-full h-40 bg-slate-50 rounded-xl overflow-hidden mb-5">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain object-center p-3"
                  />
                </div>

                {/* Title & Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <span className="font-mono text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded tracking-wider uppercase shrink-0">
                    {card.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Verified Code Sample Console Card */}
        <div className="bg-[#0a0f1d] rounded-2xl border border-slate-800 p-6 sm:p-8 text-white shadow-2xl overflow-hidden">
          {/* Console Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-[#eab308]" />
              <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            </div>
            <div className="font-mono text-xs text-slate-400 font-medium">
              POST /v1/streams (Verified Sample)
            </div>
          </div>

          {/* 2-Column Code Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Request Body */}
            <div>
              <div className="text-[11px] font-mono font-bold tracking-wider text-[#2dd4bf] uppercase mb-3">
                REQUEST BODY (StreamObject Schema)
              </div>
              <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto p-1 scrollbar-none">
                <code>
                  <span>{'{'}</span>
                  {'\n'}
                  <span className="text-slate-400">  &quot;title&quot;: </span>
                  <span className="text-[#38d9a9]">&quot;Live Production Stage&quot;</span>
                  <span>,</span>
                  {'\n'}
                  <span className="text-slate-400">  &quot;latency_mode&quot;: </span>
                  <span className="text-[#38d9a9]">&quot;low&quot;</span>
                  <span>,</span>
                  {'\n'}
                  <span className="text-slate-400">  &quot;reconnect_window&quot;: </span>
                  <span className="text-[#60a5fa]">120</span>
                  {'\n'}
                  <span>{'}'}</span>
                </code>
              </pre>
            </div>

            {/* Response Body */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#60a5fa] uppercase">
                  RESPONSE BODY (201 Created)
                </span>
                <span className="font-mono text-[9px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded uppercase">
                  SUCCESS
                </span>
              </div>
              <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto p-1 scrollbar-none">
                <code>
                  <span>{'{'}</span>
                  {'\n'}
                  <span className="text-slate-400">  &quot;id&quot;: </span>
                  <span className="text-[#38d9a9]">&quot;stream_cc6a_90&quot;</span>
                  <span>,</span>
                  {'\n'}
                  <span className="text-slate-400">  &quot;status&quot;: </span>
                  <span className="text-[#38d9a9]">&quot;idle&quot;</span>
                  <span>,</span>
                  {'\n'}
                  <span className="text-slate-400">  &quot;stream_key&quot;: </span>
                  <span className="text-[#38d9a9]">&quot;live_sk_............&quot;</span>
                  {'\n'}
                  <span>{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
