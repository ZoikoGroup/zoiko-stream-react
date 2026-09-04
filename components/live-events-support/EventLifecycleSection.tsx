import React from 'react';
import Image from 'next/image';

interface LifecycleCard {
  id: string;
  title: string;
  description: string;
  image: string;
  isUrgent?: boolean;
}

const LIFECYCLE_PHASES: LifecycleCard[] = [
  {
    id: 'planning',
    title: 'Planning',
    description: 'Defining the event, preparation guidance needed.',
    image: '/images/Live Events Support Page/les2.png',
  },
  {
    id: 'rehearsal',
    title: 'Rehearsal',
    description: 'Testing workflows before the event.',
    image: '/images/Live Events Support Page/les3.png',
  },
  {
    id: 'pre-live',
    title: 'Pre-Live',
    description: 'Event approaching, setup or readiness blocked.',
    image: '/images/Live Events Support Page/les4.png',
  },
  {
    id: 'live-now',
    title: 'Live Now',
    description: 'Event is active, something is wrong.',
    image: '/images/Live Events Support Page/les5.png',
    isUrgent: true,
  },
  {
    id: 'post-event',
    title: 'Post-Event',
    description: 'Live portion ended, follow-up needed.',
    image: '/images/Live Events Support Page/les6.png',
  },
  {
    id: 'not-sure',
    title: 'Not Sure',
    description: 'Cannot classify current phase.',
    image: '/images/Live Events Support Page/les7.png',
  },
];

export default function EventLifecycleSection() {
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
            Where are you in the event lifecycle?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-inter">
            Select your current event phase to reach the right support path.
          </p>
        </div>

        {/* Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {LIFECYCLE_PHASES.map((phase) => {
            const isUrgent = phase.isUrgent;

            return (
              <div
                key={phase.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-200 flex flex-col shadow-xs hover:shadow-md cursor-pointer ${
                  isUrgent
                    ? 'border border-[#f87171] bg-[#fff8f8]'
                    : 'border border-slate-200/90 hover:border-slate-300 bg-white'
                }`}
              >
                {/* Card Banner Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-sans font-bold text-slate-900 text-base sm:text-lg">
                        {phase.title}
                      </h3>
                      {isUrgent && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-[#fee2e2] text-[#ef4444] border border-[#fca5a5]/70">
                          URGENT
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
