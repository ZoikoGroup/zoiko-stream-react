'use client';

import React from 'react';
import { Clock, Sliders, Shield, Users, Check } from 'lucide-react';

interface PhaseCard {
  phase: string;
  title: string;
  description: string;
  status: string;
  icon: React.ElementType;
}

const PHASES: PhaseCard[] = [
  {
    phase: 'Phase 1',
    title: 'DEFINE',
    description:
      'Event objective, audience, format, date/time, and run-of-show framework. Outcome: A clear event brief.',
    status: 'Not started',
    icon: Clock,
  },
  {
    phase: 'Phase 2',
    title: 'DESIGN',
    description:
      'Contribution sources, production workflow, switching, graphics, and audience experience. Outcome: A planning-level workflow map.',
    status: 'Not started',
    icon: Sliders,
  },
  {
    phase: 'Phase 3',
    title: 'PROTECT',
    description:
      'Audience access, privacy, security, accessibility, captions, languages, and resilience questions. Outcome: Risk and governance decisions visible.',
    status: 'Not started',
    icon: Shield,
  },
  {
    phase: 'Phase 4',
    title: 'REHEARSE',
    description:
      'Roles, communications, rehearsal plan, readiness gates, and support paths. Outcome: Ready for specialist review.',
    status: 'Not started',
    icon: Users,
  },
  {
    phase: 'Phase 5',
    title: 'HANDOFF',
    description:
      'Planning summary, authoritative next steps, and Plan a live event preview. Outcome: Specialist engagement or self-service.',
    status: 'Not started',
    icon: Check,
  },
];

export default function FivePhasesSection() {
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
            Five phases from idea to live event
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Every successful live event follows a structured planning path. Navigate through each phase to build a complete event brief — from defining your objective to specialist handoff.
          </p>
        </div>

        {/* 5 Phase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {PHASES.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.phase}
                className="group bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-teal-300 transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Phase Label + Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs text-slate-400 font-medium">
                      {p.phase}
                    </span>
                    <Icon className="w-4 h-4 text-teal-500 shrink-0" />
                  </div>

                  {/* Title */}
                  <h3 className="font-mono font-bold text-slate-900 text-base mb-3 group-hover:text-teal-600 transition-colors">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                {/* Status Badge */}
                <div className="pt-2">
                  <span className="inline-block font-mono text-[10px] text-slate-400 bg-slate-100/80 border border-slate-200/80 px-2 py-0.5 rounded font-medium">
                    {p.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
