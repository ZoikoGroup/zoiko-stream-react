import React from 'react';
import { CheckCircle2, AlertCircle, Info, Slash } from 'lucide-react';

interface StatusItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

const STATUS_ITEMS: StatusItem[] = [
  {
    id: 'no-relevant-incident',
    title: 'No Relevant Incident',
    description:
      'No globally identified anomalies matched your region. Continue troubleshooting, status is clear.',
    icon: CheckCircle2,
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-500',
  },
  {
    id: 'potential-relevant-incident',
    title: 'Potential Relevant Incident',
    description:
      'An active database degradation incident was flagged at 12:04 UTC. May affect active setups.',
    icon: AlertCircle,
    iconBg: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-500',
  },
  {
    id: 'maintenance-advisory',
    title: 'Maintenance Advisory',
    description:
      'Scheduled API gateway tuning is active. No stream disruption expected but non-critical functions degraded.',
    icon: Info,
    iconBg: 'bg-sky-50 border-sky-100',
    iconColor: 'text-sky-500',
  },
  {
    id: 'status-unavailable',
    title: 'Status Unavailable',
    description:
      'Unable to reach regional status nodes. Local support pipelines remain open.',
    icon: Slash,
    iconBg: 'bg-slate-100 border-slate-200',
    iconColor: 'text-slate-500',
  },
];

export default function CheckServiceStatusSection() {
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
            Check current service status before troubleshooting.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-inter">
            System Status is the authoritative source for platform-wide health. No matching incident does not prove your event is unaffected.
          </p>
        </div>

        {/* 4 Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {STATUS_ITEMS.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${item.iconBg} ${item.iconColor}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-sans font-bold text-slate-900 text-base mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-inter">
                    {item.description}
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
