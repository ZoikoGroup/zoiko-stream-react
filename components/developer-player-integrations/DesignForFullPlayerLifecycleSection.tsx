import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const stages = [
  { stage: 'STAGE 01', name: 'Uninitialized', active: false },
  { stage: 'STAGE 02', name: 'Initializing', active: false },
  { stage: 'STAGE 03', name: 'Loading', active: false },
  { stage: 'STAGE 04', name: 'Ready', active: true },
  { stage: 'STAGE 05', name: 'Active (Play/Pause)', active: false },
  { stage: 'STAGE 06', name: 'Destroyed', active: false },
];

const contractCards = [
  {
    title: 'Transition Guards',
    desc: 'Ensure that only valid player operations are permitted during highly transient setup and tear-down windows.',
    img: '/images/developer-player-integration/Rectangle (15).png',
  },
  {
    title: 'Teardown Contract',
    desc: 'Safely remove all global listeners, timers, observers, network hooks, and media layer bindings during destroy phases.',
    img: '/images/developer-player-integration/Rectangle (16).png',
  },
  {
    title: 'Source Change',
    desc: 'A new source attachment must completely supersede prior attempts. Securely garbage-collect old pipeline allocations.',
    img: '/images/developer-player-integration/Rectangle (17).png',
  },
];

export function DesignForFullPlayerLifecycleSection() {
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
            Design for the full player lifecycle.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            A web player is a highly stateful, hardware-accelerated operating system resource. Enforce rigorous state transition boundaries.
          </p>
        </div>

        {/* 6 Stages Row */}
        <div className="w-full p-6 bg-slate-50 rounded-xl border border-gray-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 items-center shadow-xs">
          {stages.map((st, idx) => (
            <div
              key={idx}
              className={`p-3 bg-white rounded-lg border flex flex-col gap-1 ${
                st.active ? 'border-teal-400 border-2' : 'border-gray-200'
              }`}
            >
              <span className="text-slate-600 text-xs">{st.stage}</span>
              <span className="text-slate-950 text-sm font-bold truncate">{st.name}</span>
            </div>
          ))}
        </div>

        {/* 3 Contract Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {contractCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden flex flex-col shadow-xs"
            >
              <div className="w-full h-36 relative bg-slate-200">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="text-slate-950 text-xl font-bold">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
