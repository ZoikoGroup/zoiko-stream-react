'use client';

import React from 'react';
import Image from 'next/image';

interface DecisionCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const DECISIONS: DecisionCard[] = [
  {
    id: 'recording-intent',
    title: 'Recording Intent',
    description:
      'Is recording desired, required, prohibited, or optional/adhoc? Surface this decision early to prepare secure storage resources.',
    image: '/images/live-events-planning-guide/epg4.png',
  },
  {
    id: 'rights-consent',
    title: 'Rights & Consent',
    description:
      'Presenter consent, speaker rights, audience disclosure, content ownership, and preservation duration must be fully cleared.',
    image: '/images/live-events-planning-guide/epg5.png',
  },
  {
    id: 'replay-archive',
    title: 'Replay & Archive',
    description:
      'Post-event audience, paywall/gated access, accessibility, retention policy, and post-event distribution channels.',
    image: '/images/live-events-planning-guide/epg6.png',
  },
];

interface MatrixStage {
  stage: string;
  badge: string;
  badgeColor: string;
  description: string;
}

const STAGES: MatrixStage[] = [
  {
    stage: 'Pre-Event',
    badge: 'PREPARE / ALIGN',
    badgeColor: 'text-blue-600 bg-blue-50 border-blue-200/80',
    description:
      'Presenter briefing, schedule confirmation, tech check and walkthrough, accessibility, and fallback.',
  },
  {
    stage: 'During Event',
    badge: 'EXECUTE / MONITOR',
    badgeColor: 'text-teal-600 bg-teal-50 border-teal-200/80',
    description:
      'Production comms, technical monitoring, moderation coordination, escalation path.',
  },
  {
    stage: 'Post-Event',
    badge: 'SHARE / REVIEW',
    badgeColor: 'text-slate-600 bg-slate-100 border-slate-200',
    description:
      'Recording access, replay distribution, analytics report, and follow-up.',
  },
];

export default function RecordingCommsSection() {
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
            Decide recording, replay, and communication plans
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Determine whether the event should be recorded, under what rights and accessibility conditions, and how event communications flow between stakeholders.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Recording & Replay Decisions */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-bold text-slate-400 tracking-wider uppercase mb-4 block">
              RECORDING &amp; REPLAY DECISIONS
            </span>

            <div className="space-y-4">
              {DECISIONS.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-200"
                >
                  <div className="relative w-24 h-20 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Communications Matrix */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-bold text-slate-400 tracking-wider uppercase mb-4 block">
              COMMUNICATIONS MATRIX
            </span>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-6">
              {STAGES.map((stg) => (
                <div
                  key={stg.stage}
                  className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="font-bold text-slate-900 text-base">
                      {stg.stage}
                    </h3>
                    <span
                      className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider uppercase ${stg.badgeColor}`}
                    >
                      {stg.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stg.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
