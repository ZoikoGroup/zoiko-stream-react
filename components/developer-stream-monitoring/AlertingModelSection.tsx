import React from 'react';

const alertModelCards = [
  {
    title: 'Scope',
    desc: 'Single stream, group/fleet, or environment when supported.',
  },
  {
    title: 'Condition',
    desc: 'Signal or health condition, evaluated per registry semantics.',
  },
  {
    title: 'Destination',
    desc: 'Only approved, configured notification channels.',
  },
  {
    title: 'Owner & recovery',
    desc: 'Owner, acknowledgement and recovery behavior when configured.',
  },
];

export function AlertingModelSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              ALERTING MODEL
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Alert on conditions your team can understand and own.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alertModelCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl border border-zinc-200 flex flex-col gap-3"
            >
              <span className="text-indigo-500 text-xs font-bold font-mono uppercase tracking-wide">
                {card.title}
              </span>
              <p className="text-gray-500 text-xs leading-5">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Policy Preview Box */}
        <div className="w-full p-4 bg-slate-100 rounded-xl border border-zinc-200 font-mono text-xs text-neutral-700 leading-relaxed overflow-x-auto">
          When <span className="text-indigo-500">[condition]</span> for{' '}
          <span className="text-indigo-500">[scope]</span>, notify{' '}
          <span className="text-indigo-500">[destination/owner]</span> — human-readable policy preview, no invented timing.
        </div>
      </div>
    </section>
  );
}
