import React from 'react';
import {
  Shield,
  Server,
  Tv,
  Accessibility,
  Terminal,
  HelpCircle,
  CreditCard,
} from 'lucide-react';

interface FasterPathCard {
  id: string;
  title: string;
  description: string;
  linkText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FASTER_PATHS_ROW_1: FasterPathCard[] = [
  {
    id: 'security-vulnerability',
    title: 'Security Vulnerability',
    description:
      'Have you identified a potential threat or exposure? Skip this form and route instantly to our Responsible Disclosure program.',
    linkText: 'Responsible Disclosure →',
    icon: Shield,
  },
  {
    id: 'service-appears-down',
    title: 'Service Appears Down',
    description:
      'Are you experiencing an outage? Check our global network status dashboard first for real-time uptime parameters and regional blocks.',
    linkText: 'Check System Status →',
    icon: Server,
  },
  {
    id: 'live-event-issue',
    title: 'Live Event Issue',
    description:
      'Is your broadcast active right now? Reach our dedicated L1 event technicians immediately via priority operations chat channels.',
    linkText: 'Live Event Support →',
    icon: Tv,
  },
  {
    id: 'accessibility-barrier',
    title: 'Accessibility Barrier',
    description:
      'Encountering user interface or reader blocks? Access our prioritized accessibility assist streams to bypass standard triage.',
    linkText: 'Accessibility Help →',
    icon: Accessibility,
  },
];

const FASTER_PATHS_ROW_2: FasterPathCard[] = [
  {
    id: 'api-sdk-issue',
    title: 'API / SDK Issue',
    description:
      'Encountering software compilation errors? Check our API references, library samples, and developer discussion boards first.',
    linkText: 'Developer Support →',
    icon: Terminal,
  },
  {
    id: 'need-product-help',
    title: 'Need Product Help',
    description:
      'Looking for setup guides, tutorial parameters, or account feature instructions? Browse our comprehensive documentation library.',
    linkText: 'Visit Help Center →',
    icon: HelpCircle,
  },
  {
    id: 'account-billing',
    title: 'Account / Billing',
    description:
      'Have questions about enterprise tier rates, invoices, or overrun credentials? File a ticket directly to billing administrators.',
    linkText: 'Contact Billing →',
    icon: CreditCard,
  },
];

export default function FasterPathSection() {
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
            Before you begin, let us check if there is a faster path.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-inter">
            Some issues are better handled by a dedicated support channel. Select the one that matches your situation, or continue to report an issue.
          </p>
        </div>

        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {FASTER_PATHS_ROW_1.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-sans font-bold text-slate-900 text-base sm:text-[17px]">
                      {item.title}
                    </h3>
                    <IconComponent className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  </div>

                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-5 font-inter">
                    {item.description}
                  </p>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 text-teal-600 group-hover:text-teal-700 font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                    {item.linkText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FASTER_PATHS_ROW_2.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-sans font-bold text-slate-900 text-base sm:text-[17px]">
                      {item.title}
                    </h3>
                    <IconComponent className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  </div>

                  <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-5 font-inter">
                    {item.description}
                  </p>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 text-teal-600 group-hover:text-teal-700 font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                    {item.linkText}
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
