import React from 'react';

const supportCards = [
  {
    title: 'Developer support',
    desc: 'Get direct technical help — no sales gate.',
    btn: 'Get Developer support',
  },
  {
    title: 'System status',
    desc: 'Check current incidents and history.',
    btn: 'View System status',
  },
  {
    title: 'Accessibility help',
    desc: 'Request documentation or product accessibility support.',
    btn: 'Accessibility help',
  },
];

export function KeepTechnicalRelationshipOpenSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              KEEP THE TECHNICAL RELATIONSHIP OPEN
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Verify current information or get technical help.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            Developer support is a direct technical route, separate from sales, and accessibility help is never gated by account value.
          </p>
        </div>

        {/* 3 Support Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportCards.map((card) => (
            <div
              key={card.title}
              className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col justify-between gap-6 shadow-xs"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-900 text-base font-bold">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-5">{card.desc}</p>
              </div>

              <div>
                <button className="w-full py-3 bg-zinc-100 rounded-xl border border-gray-800 text-zinc-900 font-semibold text-sm hover:bg-zinc-200 transition-colors">
                  {card.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
