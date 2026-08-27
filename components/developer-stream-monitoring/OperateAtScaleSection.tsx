import React from 'react';

const fleetRows = [
  {
    stream: 'stream-a1',
    lifecycle: 'Active',
    health: 'Healthy',
    healthColor: 'bg-green-400',
    freshness: '12s ago',
    alert: 'None',
  },
  {
    stream: 'stream-b2',
    lifecycle: 'Active',
    health: 'Stale',
    healthColor: 'bg-gray-400',
    freshness: '6m ago',
    alert: '1 open',
  },
  {
    stream: 'stream-c3',
    lifecycle: 'Ended',
    health: 'Not applicable',
    healthColor: 'bg-gray-400',
    freshness: '—',
    alert: 'None',
  },
  {
    stream: 'stream-d4',
    lifecycle: 'Active',
    health: 'Degraded',
    healthColor: 'bg-orange-400',
    freshness: '34s ago',
    alert: '1 open',
  },
];

export function OperateAtScaleSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              OPERATE AT SCALE
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Prioritize the streams that need attention now.
          </h2>
        </div>

        {/* Fleet Table */}
        <div className="w-full bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-sm">
          <div className="p-4 bg-slate-50 border-b border-zinc-200 grid grid-cols-12 text-xs font-bold font-mono text-gray-400">
            <div className="col-span-3">STREAM</div>
            <div className="col-span-2">LIFECYCLE</div>
            <div className="col-span-3">HEALTH</div>
            <div className="col-span-2">FRESHNESS</div>
            <div className="col-span-2">ACTIVE ALERT</div>
          </div>

          <div className="divide-y divide-zinc-200">
            {fleetRows.map((r, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center text-gray-500">
                <div className="col-span-3 font-mono font-medium text-gray-700">{r.stream}</div>
                <div className="col-span-2">{r.lifecycle}</div>
                <div className="col-span-3 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-xs ${r.healthColor}`} />
                  <span className="font-semibold text-neutral-700">{r.health}</span>
                </div>
                <div className="col-span-2">{r.freshness}</div>
                <div className="col-span-2">{r.alert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
