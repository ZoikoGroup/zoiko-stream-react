import React from 'react';
import Image from 'next/image';

interface PathCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const CARDS: PathCard[] = [
  {
    id: 'help-center',
    title: 'Help Center',
    description:
      'Explore broad self-service manuals, architectural playbooks, and developer references.',
    image: '/images/Enterprise Page/se22.png',
  },
  {
    id: 'contact-support',
    title: 'Contact Support',
    description:
      'Submit tickets regarding standard account setups, pricing packages, and legal agreements.',
    image: '/images/Enterprise Page/se23.png',
  },
  {
    id: 'developer-support',
    title: 'Developer Support',
    description:
      'Connect with integration engineers about SDK, API, webhook, or custom code blockages.',
    image: '/images/Enterprise Page/se24.png',
  },
  {
    id: 'live-events-support',
    title: 'Live Events Support',
    description:
      'Live event operations, encoder configuration failovers, and on-site AV health checks.',
    image: '/images/Enterprise Page/se25.png',
  },
  {
    id: 'report-issue',
    title: 'Report an Issue',
    description:
      'Submit structured platform issue briefs, security reports, or video playback anomalies.',
    image: '/images/Enterprise Page/se26.png',
  },
  {
    id: 'accessibility-help',
    title: 'Accessibility Help',
    description:
      'Dedicated resources protecting barrier-free screen-reader and caption configurations.',
    image: '/images/Enterprise Page/se27.png',
  },
  {
    id: 'system-status',
    title: 'System Status',
    description:
      'Monitor active infrastructure diagnostic logs, global CDN, and ingest regional latencies.',
    image: '/images/Enterprise Page/se28.png',
  },
  {
    id: 'usage-billing',
    title: 'Usage & Billing',
    description:
      'Review organizational contract thresholds, invoice listings, and bandwidth metrics.',
    image: '/images/Enterprise Page/se29.png',
  },
];

export default function EveryPathLeadsSection() {
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
            Every path leads to a real support authority
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            If enterprise-specific access cannot be verified, these alternative platform resources remain available.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-slate-900">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
