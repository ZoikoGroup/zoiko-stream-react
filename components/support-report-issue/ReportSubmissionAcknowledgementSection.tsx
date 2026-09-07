import React from 'react';
import {
  Check,
  RotateCw,
  CheckCircle2,
  Copy,
  AlertTriangle,
  AlertCircle,
} from 'lucide-react';

interface OutcomeCard {
  tag: string;
  tagColor: string;
  icon: React.ElementType;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
}

const outcomeCards: OutcomeCard[] = [
  {
    tag: 'Ready',
    tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    icon: Check,
    iconColor: 'text-emerald-500',
    title: 'Ready',
    subtitle: 'Pre-flight Valid',
    description:
      'Submit remains disabled until required validation parameters pass frontend logic.',
  },
  {
    tag: 'Active',
    tagColor: 'bg-cyan-50 text-cyan-600 border-cyan-200/80',
    icon: RotateCw,
    iconColor: 'text-cyan-500',
    title: 'Submitting',
    subtitle: 'In Progress',
    description:
      'Duplicate-dispatch safeguard active with explicit loading spinner indicators.',
  },
  {
    tag: 'Success',
    tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    icon: CheckCircle2,
    iconColor: 'text-emerald-500',
    title: 'Accepted',
    subtitle: '201 Returned',
    description:
      'Truthful acknowledgment displaying your primary support reference database index.',
  },
  {
    tag: 'Duplicate',
    tagColor: 'bg-amber-50 text-amber-600 border-amber-200/80',
    icon: Copy,
    iconColor: 'text-amber-500',
    title: 'Duplicate Detected',
    subtitle: 'Relative Match',
    description:
      'Alert if similar events exist. Always preserve user control to submit regardless.',
  },
  {
    tag: 'Client',
    tagColor: 'bg-rose-50 text-rose-600 border-rose-200/80',
    icon: AlertTriangle,
    iconColor: 'text-rose-500',
    title: 'Validation Failure',
    subtitle: 'Client Rejection',
    description:
      'Keep user inputs intact. Focus transition to first failed logical rule.',
  },
  {
    tag: 'Network / 5XX',
    tagColor: 'bg-red-50 text-red-600 border-red-200/80',
    icon: AlertCircle,
    iconColor: 'text-red-500',
    title: 'Technical Failure',
    subtitle: '5xx / Retry Logic',
    description:
      'Keep local storage backup safe. Next offline-retry enabled instantly.',
  },
];

export default function ReportSubmissionAcknowledgementSection() {
  return (
    <section className="relative w-full bg-[#fbfcfe] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-100">
      {/* Topographic background SVG pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.3] overflow-hidden">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,100 C200,50 400,220 720,160 C1040,100 1200,260 1540,180"
            stroke="#cbd5e1"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <path
            d="M-100,220 C180,160 460,320 760,250 C1060,180 1240,340 1540,290"
            stroke="#cbd5e1"
            strokeWidth="0.8"
          />
          <path
            d="M-100,340 C240,300 480,460 820,380 C1160,300 1320,470 1540,410"
            stroke="#cbd5e1"
            strokeWidth="0.8"
            strokeDasharray="3 5"
          />
          <path
            d="M-100,460 C260,400 540,540 880,490 C1220,440 1380,560 1540,520"
            stroke="#e2e8f0"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Report submission and acknowledgement.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal max-w-3xl leading-relaxed">
            Every submission outcome is handled with clear, truthful feedback.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {outcomeCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200/80 p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Pill and Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${card.tagColor}`}
                    >
                      {card.tag}
                    </span>
                    <Icon className={`w-4 h-4 ${card.iconColor}`} strokeWidth={2} />
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-0.5">
                    {card.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 font-medium block mb-2.5">
                    {card.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
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
