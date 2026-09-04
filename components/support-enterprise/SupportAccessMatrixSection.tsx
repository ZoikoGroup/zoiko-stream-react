import React from 'react';
import Image from 'next/image';

interface AccessCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const CARDS: AccessCard[] = [
  {
    id: 'public-orientation',
    title: 'Public Orientation',
    description:
      'Explore support capabilities and understand scope boundaries without signing into your developer credentials.',
    image: '/images/Enterprise Page/se2.png',
  },
  {
    id: 'auth-required',
    title: 'Authentication Required',
    description:
      'Access account-specific logs, invoice panels, and streaming properties. Requires active session validation.',
    image: '/images/Enterprise Page/se3.png',
  },
  {
    id: 'eligible-authorized',
    title: 'Eligible / Authorized',
    description:
      'Full administrative clearance. Start support requests directly with assigned L1 system engineers.',
    image: '/images/Enterprise Page/se4.png',
  },
  {
    id: 'not-eligible',
    title: 'Not Eligible',
    description:
      'Standard accounts are smoothly redirected to correct public resources, keeping enterprise slots clear.',
    image: '/images/Enterprise Page/se5.png',
  },
  {
    id: 'permission-denied',
    title: 'Permission Denied',
    description:
      'Secure escalation paths. Safe administrative authorization guarantees client-side credential sovereignty.',
    image: '/images/Enterprise Page/se6.png',
  },
  {
    id: 'unknown-unavailable',
    title: 'Unknown / Unavailable',
    description:
      'Automatic failover strategies preserve offline operations blocks. Self-service help indices stay open.',
    image: '/images/Enterprise Page/se7.png',
  },
];

export default function SupportAccessMatrixSection() {
  return (
    <section id="access-matrix" className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
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
            Enterprise support access is verified, never assumed
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Every organization tier defines its own support permissions. Use the access matrices below to determine your current resolution authority.
          </p>
        </div>

        {/* 6 Access Permission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4 bg-slate-50 flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain p-2"
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
