import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const pathCards = [
  {
    badge: 'DEFAULT SOLUTION',
    title: 'Player Package',
    desc: 'Use an approved player package with built-in controls, analytics hooks, and lifecycle management.',
    img: '/images/developer-player-integration/Rectangle (7).png',
  },
  {
    badge: 'MODERN WEB',
    title: 'Framework Wrapper',
    desc: 'Integrate through a framework-specific component with mount/unmount lifecycle and SSR boundaries.',
    img: '/images/developer-player-integration/Rectangle (8).png',
  },
  {
    badge: 'LOWEST ABSTRACT',
    title: 'Standards-Based / Native',
    desc: 'Use HTML media elements with platform-managed adaptive streaming and manual control wiring.',
    img: '/images/developer-player-integration/Rectangle (9).png',
  },
];

export function ChooseIntegrationPathSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Choose the integration path that matches your application.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Select your application and playback constraints. ZoikoStream recommends only paths confirmed by the Capability Registry.
          </p>
        </div>

        {/* 3 Solution Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pathCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-start items-start shadow-xs"
            >
              <div className="w-full h-40 relative bg-slate-200">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-7 flex flex-col justify-start items-start gap-5 flex-1">
                <div className="px-2 py-1 bg-white rounded border border-gray-200 w-fit">
                  <span className="text-blue-500 text-xs font-bold">{card.badge}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-slate-950 text-xl font-bold">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-5">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
