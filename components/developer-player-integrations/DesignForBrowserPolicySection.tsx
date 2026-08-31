import React from 'react';
import Image from 'next/image';

const policyCards = [
  {
    title: 'Autoplay Behavior',
    desc: 'Handle promise rejections on blocked audible autoplay. Instantly fall back to muted initialization or trigger user-action overlays.',
    img: '/images/developer-player-integration/Rectangle (33).png',
  },
  {
    title: 'Inline Playback',
    desc: 'Enforce native play-inline bounds. Prevent automatic full-screen takeovers on constrained iOS mobile Safari environments.',
    img: '/images/developer-player-integration/Rectangle (34).png',
  },
  {
    title: 'Fullscreen API',
    desc: 'Coordinate capability detection across shadow DOM environments. Safely bind physical keyboard escapes and accessible controls.',
    img: '/images/developer-player-integration/Rectangle (35).png',
  },
  {
    title: 'Picture-in-Picture',
    desc: 'Leverage browser-native PiP sessions. Maintain persistent playback state overlays while navigating complex SPA routes.',
    img: '/images/developer-player-integration/Rectangle (36).png',
  },
];

export function DesignForBrowserPolicySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-t border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-player-integration/bg (12).png"
          alt="Design For Browser Policy Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Design for browser policy, not against it.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Deploy resilient playback state machines that elegantly adapt to varying safety controls, gestures, and native environment constraints.
          </p>
        </div>

        {/* 4 Feature Cards List */}
        <div className="w-full grid grid-cols-2 gap-3">
          {policyCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-xl border border-gray-800 flex items-center gap-5 shadow-md"
            >
              <div className="w-28 h-24 relative rounded-lg overflow-hidden shrink-0 bg-slate-900">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-white text-lg font-bold">{card.title}</h3>
                <p className="text-slate-400 text-xs leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vector Box */}
        <div className="w-full p-7 bg-gray-800 rounded-xl border border-gray-800 flex flex-col gap-6 shadow-xl">
          <span className="text-teal-400 text-xs font-bold tracking-wide uppercase">
            AUTOPLAY POLICY EXECUTION VECTOR
          </span>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex flex-col gap-1.5">
              <span className="text-teal-400 text-xs font-bold">INITIATING PROCESS</span>
              <span className="text-white text-sm font-medium">Autoplay Requested</span>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg border border-emerald-500 flex flex-col gap-1.5">
              <span className="text-emerald-500 text-xs font-bold">DECISION: ALLOWED</span>
              <span className="text-white text-sm font-medium">Audio Autoplay (Playing)</span>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg border border-red-400 flex flex-col gap-1.5">
              <span className="text-red-400 text-xs font-bold">DECISION: BLOCKED</span>
              <span className="text-white text-sm font-medium">Show Play Action HUD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
