'use client';

import React from 'react';
import { FileText, Shield, TrendingUp, RefreshCw } from 'lucide-react';

interface AuthorityCard {
  number: string;
  category: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const CARDS: AuthorityCard[] = [
  {
    number: '01',
    category: 'ORIGIN',
    title: 'Contract-source precedence',
    description:
      'Machine-readable contract fields define exact method, path, type, and constraints. Editorial annotations explain but never override.',
    icon: FileText,
  },
  {
    number: '02',
    category: 'GATE',
    title: 'Current publication gate',
    description:
      'Operations require validated contract source, owners, review freshness, and lifecycle before reaching Current state.',
    icon: Shield,
  },
  {
    number: '03',
    category: 'NODES',
    title: 'Stable object graph',
    description:
      'Every family, resource, operation, schema, and error shares one canonical identity and URL across runtime scopes.',
    icon: TrendingUp,
  },
  {
    number: '04',
    category: 'TELEMETRY',
    title: 'Dependency-triggered review',
    description:
      'Schema, auth, error, or version changes automatically flag dependent operations and execution templates.',
    icon: RefreshCw,
  },
];

export default function SourceAuthoritySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafbfc] py-20 lg:py-28">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-45 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.07" strokeWidth="1">
            {/* Topography wavy contours */}
            <path d="M-100 80 C 250 -20, 500 180, 850 60 S 1250 -40, 1550 100" />
            <path d="M-100 140 C 280 40, 540 240, 900 120 S 1300 20, 1550 160" />
            <path d="M-100 200 C 310 100, 580 300, 950 180 S 1350 80, 1550 220" />
            <path d="M-100 260 C 340 160, 620 360, 1000 240 S 1400 140, 1550 280" />
            
            <path d="M-100 450 C 200 520, 480 380, 800 480 S 1200 560, 1550 440" />
            <path d="M-100 510 C 240 580, 520 440, 850 540 S 1250 620, 1550 500" />
            <path d="M-100 570 C 280 640, 560 500, 900 600 S 1300 680, 1550 560" />
            <path d="M-100 630 C 320 700, 600 560, 950 660 S 1350 740, 1550 620" />
            <path d="M-100 690 C 360 760, 640 620, 1000 720 S 1400 800, 1550 680" />
            
            {/* Additional organic elevation loops */}
            <path d="M 200 250 C 150 180, 50 160, 20 220 S 60 380, 180 340 S 250 320, 200 250 Z" />
            <path d="M 220 250 C 170 160, 30 140, -10 220 S 40 410, 190 360 S 270 340, 220 250 Z" />
            <path d="M 1250 300 C 1200 220, 1080 200, 1040 280 S 1090 460, 1220 420 S 1300 380, 1250 300 Z" />
            <path d="M 1270 300 C 1220 190, 1060 170, 1010 270 S 1070 490, 1240 440 S 1320 410, 1270 300 Z" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Source-governed contract authority
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Every API operation, schema, and error carries its source, lifecycle state, version scope, and review date.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-blue-200/80 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-blue-500 transition-transform duration-200 group-hover:scale-105">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-blue-600 tracking-wider">
                      {card.number} / {card.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-950 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
