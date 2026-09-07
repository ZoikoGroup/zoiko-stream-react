import React from 'react';
import {
  UserPlus,
  CloudUpload,
  Play,
  Shield,
  Subtitles,
  Video,
  Code2,
  Activity,
  User,
  CreditCard,
  Lock,
  HelpCircle,
} from 'lucide-react';

interface SupportNeedItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SUPPORT_NEEDS: SupportNeedItem[] = [
  {
    id: 'event-access-setup',
    title: 'Event Access / Setup',
    icon: UserPlus,
  },
  {
    id: 'contribution-ingest',
    title: 'Contribution / Ingest',
    icon: CloudUpload,
  },
  {
    id: 'playback-audience-experience',
    title: 'Playback / Audience Experience',
    icon: Play,
  },
  {
    id: 'event-control-moderation',
    title: 'Event Control / Moderation',
    icon: Shield,
  },
  {
    id: 'captions-accessibility',
    title: 'Captions / Accessibility',
    icon: Subtitles,
  },
  {
    id: 'recording-replay',
    title: 'Recording / Replay',
    icon: Video,
  },
  {
    id: 'api-sdk-webhook',
    title: 'API / SDK / Webhook',
    icon: Code2,
  },
  {
    id: 'service-availability',
    title: 'Service Availability',
    icon: Activity,
  },
  {
    id: 'account-entitlement',
    title: 'Account / Entitlement',
    icon: User,
  },
  {
    id: 'billing-pricing',
    title: 'Billing / Pricing',
    icon: CreditCard,
  },
  {
    id: 'security-concern',
    title: 'Security Concern',
    icon: Lock,
  },
  {
    id: 'other-event-issue',
    title: 'Other Event Issue',
    icon: HelpCircle,
  },
];

export default function SelectSupportNeedSection() {
  return (
    <section className="relative w-full bg-[#fafbfc] py-16 lg:py-24 overflow-hidden">
      {/* Topographic Contour Background SVG Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden"
        aria-hidden="true"
      >
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
            <path d="M-80 320 C 320 240, 640 400, 1000 300 S 1400 200, 1520 310" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
            <path d="M-80 720 C 310 800, 620 630, 950 750 S 1350 810, 1520 710" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight mb-2.5">
            Select your support need to reach the right authority.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-inter">
            Controlled intent routing ensures every issue reaches the correct specialist team.
          </p>
        </div>

        {/* 12 Support Need Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SUPPORT_NEEDS.map((item) => {
            const IconComponent = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 flex items-center gap-3.5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-pointer text-left group"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 shrink-0 group-hover:bg-sky-100/80 group-hover:scale-105 transition-all">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-sans font-bold text-slate-800 text-xs sm:text-[13px] leading-snug group-hover:text-slate-950 transition-colors">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
