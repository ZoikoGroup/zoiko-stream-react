import React from 'react';

const matrixRows = [
  { group: 'Starting', healthy: 'Possible', degraded: 'Possible', unknown: 'Possible' },
  { group: 'Active', healthy: 'Possible', degraded: 'Possible', unknown: 'Possible' },
  { group: 'Ended (expected)', healthy: 'Not applicable', degraded: 'Not applicable', unknown: 'Authority required' },
  { group: 'Failed', healthy: 'Not applicable', degraded: 'Possible', unknown: 'Possible' },
];

export function TwoDifferentQuestionsSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              TWO DIFFERENT QUESTIONS
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Lifecycle tells you what the stream is doing. Health tells you whether current evidence needs attention.
          </h2>
        </div>

        {/* 2 Definition Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col gap-3 shadow-xs">
            <h3 className="text-neutral-700 text-lg font-bold">Lifecycle</h3>
            <p className="text-gray-500 text-sm leading-6">
              Where the stream is in its process — states and transitions come from the approved Stream State Registry only.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col gap-3 shadow-xs">
            <h3 className="text-neutral-700 text-lg font-bold">Health</h3>
            <p className="text-gray-500 text-sm leading-6">
              What current evidence says about expected operation — derived from the Semantic Health State Registry when authority exists.
            </p>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="w-full bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-sm">
          <div className="p-4 bg-slate-50 border-b border-zinc-200 grid grid-cols-12 text-xs font-bold text-neutral-700">
            <div className="col-span-3">LIFECYCLE GROUP</div>
            <div className="col-span-3">HEALTHY</div>
            <div className="col-span-3">DEGRADED</div>
            <div className="col-span-3">UNKNOWN</div>
          </div>

          <div className="divide-y divide-zinc-200">
            {matrixRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center text-gray-500">
                <div className="col-span-3 font-semibold text-neutral-700">{row.group}</div>
                <div className="col-span-3">{row.healthy}</div>
                <div className="col-span-3">{row.degraded}</div>
                <div className="col-span-3">{row.unknown}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-400 text-xs font-normal">
          An active stream can be degraded; an ended stream can be expected; unknown evidence is not automatically a failure.
        </p>
      </div>
    </section>
  );
}
