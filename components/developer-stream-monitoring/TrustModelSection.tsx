import React from 'react';

const trustStates = [
  {
    state: 'Healthy',
    color: 'bg-green-400',
    meaning: 'Current evidence matches expected operation.',
    freshness: 'Requires fresh observation — never shown on stale data.',
  },
  {
    state: 'Degraded',
    color: 'bg-orange-400',
    meaning: 'Evidence indicates reduced or partial expected operation.',
    freshness: 'Requires fresh observation of the contributing signal.',
  },
  {
    state: 'Unhealthy',
    color: 'bg-red-400',
    meaning: 'Evidence indicates operation is not meeting expectation.',
    freshness: 'Requires fresh observation of the contributing signal.',
  },
  {
    state: 'Stale',
    color: 'bg-gray-400',
    meaning: 'Available observation is no longer current.',
    freshness: 'Supersedes any positive health treatment until refreshed.',
  },
  {
    state: 'Unknown',
    color: 'bg-gray-400',
    meaning: 'Evidence is insufficient or unavailable.',
    freshness: 'Not treated as failure.',
  },
];

export function TrustModelSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              TRUST MODEL
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            A health state is only as current as the evidence behind it.
          </h2>
        </div>

        {/* State Table */}
        <div className="w-full bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-sm">
          <div className="p-4 bg-slate-50 border-b border-zinc-200 grid grid-cols-12 text-xs font-bold font-mono text-gray-400">
            <div className="col-span-3">STATE</div>
            <div className="col-span-4">MEANING</div>
            <div className="col-span-5">FRESHNESS REQUIREMENT</div>
          </div>

          <div className="divide-y divide-zinc-200">
            {trustStates.map((st, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-xs ${st.color}`} />
                  <span className="font-semibold text-neutral-700">{st.state}</span>
                </div>
                <div className="col-span-4 text-gray-500">{st.meaning}</div>
                <div className="col-span-5 text-gray-500">{st.freshness}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
