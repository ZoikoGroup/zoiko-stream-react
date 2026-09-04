import React from 'react';
import Image from 'next/image';
import { CheckCircle2, RefreshCw, AlertCircle, Check } from 'lucide-react';

interface TrackingStateCard {
  id: string;
  stepNumber: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  image: string;
}

const TRACKING_STATES: TrackingStateCard[] = [
  {
    id: 'submitted-queued',
    stepNumber: '01 / Submitted & Queued',
    description:
      'Case successfully registered. You receive an immediate dispatch email receipt containing your unique support transaction number.',
    icon: CheckCircle2,
    iconColor: 'text-teal-500',
    image: '/images/Live Events Support Page/les18.png',
  },
  {
    id: 'specialist-assignment',
    stepNumber: '02 / Specialist Assignment',
    description:
      'Our Tier-1 active network operations engineers assume custody of the ticket, correlating telemetry anomalies with user-submitted facts.',
    icon: RefreshCw,
    iconColor: 'text-teal-500',
    image: '/images/Live Events Support Page/les19.png',
  },
  {
    id: 'context-clarification',
    stepNumber: '03 / Context Clarification',
    description:
      'If diagnostic parameters require deeper verification, engineers may pause investigation state and request additional log outputs.',
    icon: AlertCircle,
    iconColor: 'text-amber-500',
    image: '/images/Live Events Support Page/les20.png',
  },
  {
    id: 'verified-resolution',
    stepNumber: '04 / Verified Resolution',
    description:
      'Resolution successfully confirmed. Feedback requested. The support session safely concludes and enters cold storage archives.',
    icon: Check,
    iconColor: 'text-teal-500',
    image: '/images/Live Events Support Page/les21.png',
  },
];

export default function TrackCaseSection() {
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
            Track and continue your case.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-inter">
            Every case transitions through defined states. You always know where your case stands.
          </p>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TRACKING_STATES.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Image Banner */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                  <Image
                    src={card.image}
                    alt={card.stepNumber}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 text-base sm:text-lg mb-3">
                      {card.stepNumber}
                    </h3>

                    <div className="flex items-start gap-2.5">
                      <IconComponent
                        className={`w-4 h-4 shrink-0 mt-0.5 ${card.iconColor}`}
                      />
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Session Persistence & Cold Recovery Banner */}
        <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white/85 backdrop-blur-sm p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <h4 className="font-sans font-bold text-slate-900 text-sm sm:text-base mb-1">
              Session Persistence &amp; Cold Recovery
            </h4>
            <p className="text-slate-500 text-xs sm:text-sm font-inter">
              If a resolved issue spikes again, you can safely reopen cases within 72 hours without losing past diagnostic logs.
            </p>
          </div>

          <button
            type="button"
            className="border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-xs hover:bg-slate-50 transition-all cursor-pointer shrink-0"
          >
            Reopen Case
          </button>
        </div>
      </div>
    </section>
  );
}
