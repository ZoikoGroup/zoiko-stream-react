import React from 'react';
import Link from 'next/link';

const STATES = [
  { color: 'bg-slate-500', label: 'Pending — accepted, not yet confirmed' },
  { color: 'bg-teal-400', label: 'Ready — confirmed from an authoritative source' },
  { color: 'bg-orange-400', label: 'Partial — some but not all work complete' },
  { color: 'bg-red-400', label: 'Failed — a terminal negative outcome' },
  { color: 'bg-slate-500', label: 'Unknown — reconcile before retrying' },
  { color: 'bg-orange-400', label: 'Duplicate / Delayed — tolerate in event handling' },
];

const CHECKLIST = [
  'Key handlers on event ID, not delivery order',
  'Reconcile via authoritative read on unknown outcomes',
  'Never blind-retry a mutating request',
];

export default function DevelopersBuildForRealitySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-zinc-950 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-teal-400 rounded-[3px]" />
          <span className="text-teal-400 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            BUILD FOR REALITY
          </span>
        </div>
        <h2 className="text-slate-100 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
          Success is a state transition, not just a 2xx.
        </h2>
        <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed max-w-2xl">
          Authoritative resource state, event observation, reconciliation, and retry safety — at concept level.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left States List */}
        <div className="flex flex-col gap-3">
          {STATES.map((s, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-zinc-900 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-3"
            >
              <div className={`size-2 ${s.color} rounded-sm shrink-0`} />
              <span className="text-slate-400 text-xs font-normal font-['Inter']">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Event-Handling Box */}
        <div className="p-7 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-slate-100 text-sm font-bold font-['Space_Grotesk']">
              Event-handling checklist
            </h3>

            <div className="flex flex-col">
              {CHECKLIST.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 border-b border-white/10 flex items-center gap-3 last:border-b-0"
                >
                  <input
                    type="checkbox"
                    defaultChecked
                    className="size-4 bg-white rounded-xs border border-neutral-500 accent-teal-400"
                  />
                  <span className="text-slate-400 text-sm font-normal font-['Inter']">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/webhooks"
              className="px-5 py-3 bg-zinc-100 rounded-[10px] outline outline-1 outline-gray-700 text-slate-900 text-sm font-semibold font-['Inter'] hover:bg-zinc-200 transition-colors"
            >
              View Webhooks and events
            </Link>
            <Link
              href="/developers-overview"
              className="px-5 py-3 bg-zinc-100 rounded-[10px] outline outline-1 outline-gray-700 text-slate-900 text-sm font-semibold font-['Inter'] hover:bg-zinc-200 transition-colors"
            >
              Error handling
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
