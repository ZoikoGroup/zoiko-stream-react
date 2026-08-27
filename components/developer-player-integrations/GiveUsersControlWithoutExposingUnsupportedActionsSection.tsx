import React from 'react';
import Image from 'next/image';
import { Captions } from 'lucide-react';

const uxItems = [
  {
    title: 'Keyboard Navigation',
    desc: 'All controls must be focusable with highly visible native focus indicators. Ensure tab orders flow logically.',
    img: '/images/developer-player-integration/Rectangle (32).png',
  },
  {
    title: 'Touch Targets',
    desc: 'Enforce a minimum target size of 44x44px. Do not hide primary functions behind hover states on touch interfaces.',
    img: '/images/developer-player-integration/Rectangle (19).png',
  },
  {
    title: 'Status Display',
    desc: 'Active loading, buffering, error, and live states must utilize clean, direct text messaging — never colors alone.',
    img: '/images/developer-player-integration/Rectangle (20).png',
  },
  {
    title: 'Mobile Priority',
    desc: 'Anchor primary controls within safe tap regions. Condense secondary options into easily accessible settings menus.',
    img: '/images/developer-player-integration/Rectangle (21).png',
  },
];

export function GiveUsersControlWithoutExposingUnsupportedActionsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-player-integration/bg (12).png"
          alt="Give Users Control Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Give users control without exposing unsupported actions.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Build honest player viewports. Avoid misleading indicators, broken seek-bars, and inaccessible keyboard states.
          </p>
        </div>

        {/* Big Player Preview Box */}
        <div className="w-full p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-5 shadow-2xl backdrop-blur-md overflow-hidden">
          <div className="w-full h-60 relative rounded-lg overflow-hidden bg-slate-900">
            <Image
              src="/images/developer-player-integration/Rectangle (18).png"
              alt="Player Viewport"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full p-3 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-xs">
            <div className="flex items-center gap-4">
              <span className="text-teal-400 font-bold">▶</span>
              <span className="text-white">02:15 / 12:40</span>
            </div>
            <div className="w-96 h-1.5 bg-gray-800 rounded overflow-hidden flex">
              <div className="w-1/3 h-full bg-teal-400" />
            </div>
            <div className="flex items-center gap-4 text-white">
              <span><Captions></Captions></span>
              <span>🔊</span>
              <span>⚙</span>
              <span>⛶</span>
            </div>
          </div>
        </div>

        {/* 4 Feature List Cards */}
        
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
          {uxItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex items-center gap-5 shadow-md"
            >
              <div className="w-24 h-24 relative rounded-lg overflow-hidden shrink-0 bg-slate-900">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-white text-base font-bold">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
