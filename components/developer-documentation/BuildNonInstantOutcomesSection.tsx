import React from 'react';

const statePills = [
  { label: 'Pending', cls: 'border-gray-800 text-slate-400' },
  { label: 'Ready', cls: 'border-teal-800 text-teal-400' },
  { label: 'Partial', cls: 'border-yellow-900 text-orange-400' },
  { label: 'Failed', cls: 'border-pink-950 text-red-400' },
  { label: 'Unknown', cls: 'border-gray-800 text-slate-400' },
  { label: 'Duplicate', cls: 'border-gray-800 text-slate-400' },
  { label: 'Delayed', cls: 'border-yellow-900 text-orange-400' },
  { label: 'Recovering', cls: 'border-gray-800 text-slate-400' },
  { label: 'Stale', cls: 'border-yellow-900 text-orange-400' },
];

const sequenceSteps = [
  { step: '1. Request accepted', desc: 'Work is queued — not yet complete.' },
  { step: '2. Event delivered', desc: 'Delivery is at-least-once — key on event ID.' },
  { step: '3. Reconcile', desc: 'Retrieve the resource if the outcome is unclear.' },
  { step: '4. Idempotent retry', desc: 'Safe to retry without creating duplicates.' },
];

export function BuildNonInstantOutcomesSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-zinc-950 text-slate-100 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span className="text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider">
              BUILD FOR NON-INSTANT OUTCOMES
            </span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
            Treat acceptance as the start of a workflow, not proof of completion.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-[850px]">
            A request being accepted does not mean the work is done. Design for every state below — not just success.
          </p>
        </div>

        {/* State Pills List */}
        <div className="flex flex-wrap items-center gap-3">
          {statePills.map((pill) => (
            <span
              key={pill.label}
              className={`px-4 py-1.5 bg-zinc-900 rounded-full border text-xs font-mono font-semibold ${pill.cls}`}
            >
              {pill.label}
            </span>
          ))}
        </div>

        {/* 4 Sequence Cards Row */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sequenceSteps.map((st, idx) => (
            <div
              key={st.step}
              className="p-6 bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col justify-between gap-4 shadow-xl relative"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-100 text-sm font-bold">{st.step}</h3>
                <p className="text-slate-400 text-xs leading-5">{st.desc}</p>
              </div>
              {idx !== sequenceSteps.length - 1 && (
                <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-600 text-lg z-10">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button className="px-6 py-3 bg-zinc-100 rounded-xl text-slate-900 font-semibold text-base hover:bg-white transition-colors">
            Read Webhooks &amp; events
          </button>
          <button className="px-6 py-3 bg-zinc-100 rounded-xl text-slate-900 font-semibold text-base hover:bg-white transition-colors">
            Read Error handling
          </button>
        </div>
      </div>
    </section>
  );
}
