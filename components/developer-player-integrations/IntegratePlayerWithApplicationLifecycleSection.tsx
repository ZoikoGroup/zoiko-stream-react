import React from 'react';
import Image from 'next/image';

const pipelineSteps = [
  { step: 'STEP 01', name: 'App Mount' },
  { step: 'STEP 02', name: 'Resolve Source' },
  { step: 'STEP 03', name: 'Initialize' },
  { step: 'STEP 04', name: 'Attach Node' },
  { step: 'STEP 05', name: 'Interact' },
  { step: 'STEP 06', name: 'Source Update' },
  { step: 'STEP 07', name: 'Teardown Destroy' },
];

const integrationCards = [
  {
    title: 'Mount & Unmount',
    desc: 'Manage instance allocation cleanly. Always trigger complete garbage disposal routines on SPA route unmount states.',
    img: '/images/developer-player-integration/Rectangle (27).png',
  },
  {
    title: 'SSR / Hydration',
    desc: 'Safely isolate browser-only HTML5 player operations. Serve clean fallback shells during initial server-side hydration.',
    img: '/images/developer-player-integration/Rectangle (28).png',
  },
  {
    title: 'Routing Handover',
    desc: 'Establish robust session continuity state layers. Preserve active buffers as layouts update or views slide.',
    img: '/images/developer-player-integration/Rectangle (29).png',
  },
  {
    title: 'Approved Wrappers',
    desc: 'Leverage components verified by our architects to avoid memory leaks, thread starvation, and timing locks.',
    img: '/images/developer-player-integration/Rectangle (30).png',
  },
];

export function IntegratePlayerWithApplicationLifecycleSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-t border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Integrate the player with your application lifecycle.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Do not treat media elements as plain static elements. Control mounting states, server rendering constraints, and SPA route changes safely.
          </p>
        </div>

        {/* Vector Pipeline Box */}
        <div className="w-full p-7 bg-gray-800 rounded-xl border border-gray-800 flex flex-col gap-5 shadow-xl">
          <span className="text-teal-400 text-xs font-bold tracking-wide uppercase">
            CLIENT APP STATE PIPELINE VECTOR
          </span>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {pipelineSteps.map((st, idx) => (
              <div
                key={idx}
                className="p-3 bg-gray-800 rounded-lg border border-gray-700 flex flex-col gap-1"
              >
                <span className="text-slate-400 text-[10px]">{st.step}</span>
                <span className="text-white text-xs font-bold truncate">{st.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div className="w-full h-28 relative bg-slate-900">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-white text-lg font-bold">{card.title}</h3>
                <p className="text-slate-400 text-xs leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
