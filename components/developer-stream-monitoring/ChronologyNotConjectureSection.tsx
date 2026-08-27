import React from 'react';

const timelineEvents = [
  {
    time: '14:02 UTC',
    title: 'Lifecycle change observed',
    desc: 'Stream transitioned to Active.',
  },
  {
    time: '14:08 UTC',
    title: 'Health signal change',
    desc: 'Ingest evidence marked degraded — possible contributor: contribution connection.',
  },
  {
    time: '14:09 UTC',
    title: 'Alert fired',
    desc: 'Notification attempt sent to configured destination.',
  },
  {
    time: '14:12 UTC',
    title: 'Acknowledged',
    desc: 'Ownership recorded — issue may still be active.',
  },
  {
    time: '14:19 UTC',
    title: 'Recovery evidence observed',
    desc: 'Later healthy observation confirms recovery.',
  },
];

export function ChronologyNotConjectureSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              CHRONOLOGY, NOT CONJECTURE
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Reconstruct what changed, what fired, what was acknowledged, and what recovered.
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-zinc-300 ml-4 pl-8 flex flex-col gap-8">
          {timelineEvents.map((ev, idx) => (
            <div key={idx} className="relative flex flex-col gap-1">
              <div className="absolute -left-[41px] top-1 w-3.5 h-3.5 bg-blue-400 rounded-full border-2 border-white" />
              <span className="text-gray-400 text-xs font-mono">{ev.time}</span>
              <h3 className="text-neutral-700 text-sm font-semibold">{ev.title}</h3>
              <p className="text-gray-500 text-xs leading-5">{ev.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
