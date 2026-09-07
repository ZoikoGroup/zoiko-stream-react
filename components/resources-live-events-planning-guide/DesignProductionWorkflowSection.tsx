'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProductionCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const CARDS: ProductionCard[] = [
  {
    id: 'contribution',
    title: 'Contribution & Sources',
    description:
      'Camera sources, studio feeds, RTMP, WebRTC mesh, remote presenters, laptop screenshare. Clear source format, location, audio status, and backup allocation.',
    image: '/images/live-events-planning-guide/epg1.png',
  },
  {
    id: 'production',
    title: 'Production & Switching',
    description:
      'Who cuts the show? Local hardware vs cloud switcher? Lower thirds, slates, audio mixing, sponsor assets, video roll-out, output resolution.',
    image: '/images/live-events-planning-guide/epg2.png',
  },
  {
    id: 'presenters',
    title: 'Presenters & Moderation',
    description:
      'On-stage, remote, or hybrid? Speaker prep, Q&A moderation, chat policy, green room workflow, queue management.',
    image: '/images/live-events-planning-guide/epg3.png',
  },
];

const WORKFLOW_NODES = [
  'Sources & Encoders',
  'Ingest Gateway',
  'Cloud Switcher & Graphics',
  'Edge Distribution & Audience',
];

export default function DesignProductionWorkflowSection() {
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
            Design your production workflow and source plan
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Identify every camera, presenter, remote contributor, and media source. Plan who controls switching, graphics, playback, and moderation.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden p-6 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-teal-200 transition-all duration-300"
            >
              <div>
                {/* Photo Image Banner */}
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-5 bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
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
            </div>
          ))}
        </div>

        {/* Bottom Workflow Pipeline Strip */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm">
          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 block">
            Planning-level workflow map
          </span>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-2">
            {WORKFLOW_NODES.map((node, idx) => (
              <React.Fragment key={node}>
                <div className="w-full flex-1 bg-slate-50/90 border border-slate-200/80 rounded-xl px-4 py-3 font-mono text-xs font-semibold text-slate-800 text-center">
                  {node}
                </div>
                {idx < WORKFLOW_NODES.length - 1 && (
                  <div className="hidden md:flex items-center text-teal-500 font-mono text-sm px-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
