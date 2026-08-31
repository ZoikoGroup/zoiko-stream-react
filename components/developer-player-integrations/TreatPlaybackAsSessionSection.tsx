import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const ownershipCards = [
  {
    title: 'Application Ownership',
    items: [
      'Entitlement evaluation',
      'Source resolution & refresh',
      'Secure content identity',
      'Mount/unmount lifecycles',
    ],
    img: '/images/developer-player-integration/Rectangle (31).png',
  },
  {
    title: 'Player Ownership',
    items: [
      'Media attach & detach loops',
      'Buffered state caching',
      'Error state presentation',
      'DOM canvas cleanup tasks',
    ],
    img: '/images/developer-player-integration/Rectangle (11).png',
  },
  {
    title: 'Platform Ownership',
    items: [
      'Continuous source contracts',
      'Adaptive multi-CDN routing',
      'Geo-targeted delivery limits',
      'Infrastructure level support',
    ],
    img: '/images/developer-player-integration/Rectangle (12).png',
  },
];

export function TreatPlaybackAsSessionSection() {
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
            Treat playback as a session, not just a URL.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            A reliable video integration enforces strict ownership boundaries. Map each operational phase to its correct structural home.
          </p>
        </div>

        {/* 3 Ownership Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ownershipCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-start items-start shadow-xs"
            >
              <div className="w-full h-36 relative bg-slate-200">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col justify-start items-start gap-5 flex-1 w-full">
                <h3 className="text-slate-950 text-xl font-bold">{card.title}</h3>
                <div className="flex flex-col gap-2.5 w-full">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Flow Box */}
        <div className="w-full p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-xs">
          <span className="text-slate-950 text-sm font-bold tracking-wide uppercase">
            BROADCAST DATA TO VIEWPORT FLOW
          </span>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            {/* Step 1 */}
            <div className="p-4 bg-white rounded-lg border border-gray-200 flex flex-col gap-2">
              <span className="text-slate-600 text-xs">STEP 1: SECURE BACKEND</span>
              <h4 className="text-slate-950 text-base font-bold">Source Token Registry</h4>
              <div className="px-1.5 py-0.5 bg-red-400/10 rounded border border-red-400/30 w-fit">
                <span className="text-red-400 text-[10px] font-bold">SECRET / SERVER-ONLY</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-white rounded-lg border border-gray-200 flex flex-col gap-2">
              <span className="text-slate-600 text-xs">STEP 2: BROWSER GATEWAY</span>
              <h4 className="text-slate-950 text-base font-bold">Client Handshake</h4>
              <div className="px-1.5 py-0.5 bg-blue-500/10 rounded border border-blue-500/30 w-fit">
                <span className="text-blue-500 text-[10px] font-bold">BROWSER-SAFE</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 bg-white rounded-lg border border-gray-200 flex flex-col gap-2">
              <span className="text-slate-600 text-xs">STEP 3: RUNTIME VIEWPORT</span>
              <h4 className="text-slate-950 text-base font-bold">Adaptive Playback</h4>
              <div className="px-1.5 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/30 w-fit">
                <span className="text-emerald-500 text-[10px] font-bold">PUBLIC EDGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
