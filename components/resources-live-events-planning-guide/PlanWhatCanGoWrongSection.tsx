'use client';

import React from 'react';
import {
  AlertTriangle,
  UserX,
  Radio,
  Users,
  FileText,
  Info,
  ArrowRight,
} from 'lucide-react';

interface FallbackItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const ITEMS: FallbackItem[] = [
  {
    id: 'source-failure',
    title: 'Source/Contribution Failure',
    description:
      'What source is primary and who owns the fallback decision? Pre-filtered backup path.',
    icon: AlertTriangle,
  },
  {
    id: 'presenter-unavailable',
    title: 'Presenter Unavailable',
    description:
      'Who covers speaker role? What is backup deck or standby routine?',
    icon: UserX,
  },
  {
    id: 'control-failure',
    title: 'Production/Control Failure',
    description:
      'What backup communication channel exists for production escalation?',
    icon: Radio,
  },
  {
    id: 'audience-access',
    title: 'Audience Access Issue',
    description:
      'Where does support route? System status page, Trust Center health.',
    icon: Users,
  },
  {
    id: 'replay-accessibility',
    title: 'Replay/Accessibility Issue',
    description: 'What fallback or escalation path for captions?',
    icon: FileText,
  },
];

export default function PlanWhatCanGoWrongSection() {
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
            Plan for what can go wrong
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Identify failure modes, fallback ownership, and escalation questions. The planning guide asks &quot;what is your fallback?&quot; — it never answers with invented redundancy or guaranteed outcomes.
          </p>
        </div>

        {/* 5 Fallback Cards List */}
        <div className="space-y-4 mb-8">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex items-center justify-between gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-teal-300 transition-all duration-200"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-[#2563eb] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 text-base sm:text-[17px] group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5 leading-relaxed truncate sm:whitespace-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="font-mono text-[10px] font-bold text-teal-600 bg-teal-50 border border-teal-200/80 px-3 py-1.5 rounded-lg tracking-wider uppercase flex items-center gap-1.5 shrink-0">
                  <span>DEFINE FALLBACK</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Notice Box */}
        <div className="bg-slate-50/90 rounded-2xl border border-slate-200/80 p-5 flex items-start gap-3.5 shadow-sm">
          <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-mono text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-1 block">
              PLANNING RESILIENCE BOUNDARY
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              Planning guidance identifies potential failure points and fallback choices; it does not substitute for dedicated redundancy architecture, operator staffing, SLA commitments, or contract support guarantees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
