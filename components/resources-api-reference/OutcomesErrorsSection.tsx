'use client';

import React from 'react';
import Image from 'next/image';

interface OutcomeCard {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  imageClass?: string;
}

const CARDS: OutcomeCard[] = [
  {
    id: 'response-variants',
    title: 'Response Variants',
    badge: 'SCHEMAS',
    description:
      'Exact status/result variants and schemas from contract authority. Empty responses documented explicitly.',
    image: '/images/api reference/ar4.png',
    imageClass: 'object-cover object-center scale-105 group-hover:scale-110',
  },
  {
    id: 'error-identity',
    title: 'Error Identity & Recovery',
    badge: 'HANDOFFS',
    description:
      'Canonical error objects mapped to operations with approved recovery paths. Links to Error handling authority.',
    image: '/images/api reference/ar5.png',
    imageClass: 'object-cover object-[center_52%] scale-[1.65] group-hover:scale-[1.7]',
  },
  {
    id: 'unknown-outcomes',
    title: 'Unknown Outcomes',
    badge: 'RESILIENCE',
    description:
      'Mutating operations distinguish unknown/pending from confirmed failure. Reconciliation before retry.',
    image: '/images/api reference/ar6.png',
    imageClass: 'object-cover object-center scale-105 group-hover:scale-110',
  },
  {
    id: 'rate-limits',
    title: 'Rate Limits & Pagination',
    badge: 'LIMITS',
    description:
      'Source-defined limit values, windows, retry-after headers, cursor/offset semantics. No guessed behavior.',
    image: '/images/api reference/ar7.png',
    imageClass: 'object-cover object-center scale-105 group-hover:scale-110',
  },
];

export default function OutcomesErrorsSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/api%20reference/hero-bg.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Understand exact outcomes, errors, and recovery paths
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Every API response maps to approved status variants and schemas. Errors carry canonical identity, recoverability classification, and authoritative recovery handoffs — never inferred from HTTP status codes alone.
          </p>
        </div>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="group bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-slate-700/90 transition-all duration-300"
            >
              <div>
                {/* Image Illustration Header */}
                <div className="relative w-full h-44 sm:h-52 bg-black overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={`transition-transform duration-500 ${card.imageClass || 'object-cover object-center'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                      {card.title}
                    </h3>
                    <span className="font-mono text-[9px] font-bold text-teal-300 bg-teal-950/80 border border-teal-800/80 px-2.5 py-0.5 rounded tracking-wider uppercase shrink-0">
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
