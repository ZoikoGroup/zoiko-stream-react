'use client';

import React from 'react';
import { Info } from 'lucide-react';

interface SummaryPhase {
  number: string;
  title: string;
  subtitle: string;
  status: 'READY FOR REVIEW' | 'DECISION REQUIRED' | 'NOT STARTED';
}

const PHASES: SummaryPhase[] = [
  {
    number: '01',
    title: 'DEFINE',
    subtitle: 'Event type, audience, format, timing',
    status: 'READY FOR REVIEW',
  },
  {
    number: '02',
    title: 'DESIGN',
    subtitle: 'Sources, production, graphics, audience experience',
    status: 'DECISION REQUIRED',
  },
  {
    number: '03',
    title: 'PROTECT',
    subtitle: 'Access, privacy, security, accessibility, resilience',
    status: 'READY FOR REVIEW',
  },
  {
    number: '04',
    title: 'REHEARSE',
    subtitle: 'Roles, rehearsal, recording, communications',
    status: 'NOT STARTED',
  },
  {
    number: '05',
    title: 'HANDOFF',
    subtitle: 'Summary review, authoritative next steps',
    status: 'NOT STARTED',
  },
];

export default function ReviewPlanningSummarySection() {
  const getBadgeStyle = (status: SummaryPhase['status']) => {
    switch (status) {
      case 'READY FOR REVIEW':
        return 'text-emerald-400 bg-emerald-950/80 border-emerald-800/80';
      case 'DECISION REQUIRED':
        return 'text-amber-400 bg-amber-950/80 border-amber-800/80';
      case 'NOT STARTED':
        return 'text-slate-400 bg-slate-800/80 border-slate-700/80';
    }
  };

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/live-events-planning-guide/bg1.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Review your planning summary before specialist engagement
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Your planning decisions across all five phases are summarized here. Review what&apos;s complete, what needs decisions, and what requires source confirmation — then choose to continue self-service or engage a specialist.
          </p>
        </div>

        {/* 5 Phase Summary Cards List */}
        <div className="space-y-3.5 mb-8">
          {PHASES.map((phase) => (
            <div
              key={phase.number}
              className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-4 sm:p-5 flex items-center justify-between gap-4 shadow-lg hover:border-slate-700/90 transition-all duration-200"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="font-mono text-xs font-bold text-slate-400 bg-slate-800/80 w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                  {phase.number}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-base">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed truncate sm:whitespace-normal">
                    {phase.subtitle}
                  </p>
                </div>
              </div>

              <span
                className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded border tracking-wider uppercase shrink-0 ${getBadgeStyle(
                  phase.status
                )}`}
              >
                {phase.status}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Notice Box */}
        <div className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-5 flex items-start gap-3.5 shadow-lg">
          <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-mono text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1 block">
              PLANNING VALIDATION BOUNDARIES
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              The public guide can say &quot;Ready for specialist review.&quot; It cannot say &quot;Event ready&quot; or &quot;Production ready.&quot; Final operational readiness belongs to the actual event workflow verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
