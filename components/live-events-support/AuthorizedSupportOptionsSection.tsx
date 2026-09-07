import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SupportOptionCard {
  id: string;
  title: string;
  badge: string;
  description: string;
  linkText: string;
  image: string;
}

const SUPPORT_OPTIONS: SupportOptionCard[] = [
  {
    id: 'self-service-resources',
    title: 'Self-Service Resources',
    badge: 'ALWAYS AVAILABLE',
    description:
      'Browse our comprehensive documentation, implementation guides, troubleshooting manuals, and real-time service health logs anytime.',
    linkText: 'Access Help Center →',
    image: '/images/Live Events Support Page/les8.png',
  },
  {
    id: 'community-forum',
    title: 'Community Forum',
    badge: 'PEER CHANNELS',
    description:
      'Join discussion threads with peer AV engineers and developers to share configuration templates, hardware tips, and stream routing strategies.',
    linkText: 'Join Discussions →',
    image: '/images/Live Events Support Page/les9.png',
  },
  {
    id: 'chat-support',
    title: 'Chat Support',
    badge: 'ELIGIBLE PLANS',
    description:
      'Initiate a live text session directly with our platform support specialists for immediate active assistance with routing and configurations.',
    linkText: 'Start Chat Session →',
    image: '/images/Live Events Support Page/les10.png',
  },
  {
    id: 'priority-escalation',
    title: 'Priority Escalation',
    badge: 'LIVE PRO ACTIVE',
    description:
      'Instantly page our Tier-1 active network operations engineers for critical, real-time failover support during scheduled broadcasting hours.',
    linkText: 'Request Urgent Assistance →',
    image: '/images/Live Events Support Page/les11.png',
  },
];

export default function AuthorizedSupportOptionsSection() {
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
            Your authorized support options.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-inter">
            Channel gating is based on the intersection of event plan, issue type, event phase, and account authorization.
          </p>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SUPPORT_OPTIONS.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Card Image Banner */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-sans font-bold text-slate-900 text-lg sm:text-xl">
                      {card.title}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-bold tracking-wider uppercase font-mono bg-teal-50 text-teal-700 border border-teal-200/80">
                      {card.badge}
                    </span>
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5 font-inter">
                    {card.description}
                  </p>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 text-teal-600 group-hover:text-teal-700 font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                    {card.linkText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
