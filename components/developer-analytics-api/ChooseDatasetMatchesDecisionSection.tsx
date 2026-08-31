import React from 'react';
import Image from 'next/image';

const historicalDetails = [
  { label: 'Intended Use:', val: 'Executive reporting, billing audits, long-term trends' },
  { label: 'Freshness:', val: 'Hours/Days delay (completed deduplication pipelines)' },
  { label: 'Population:', val: '100% of validated telemetry beacons' },
  { label: 'Retention:', val: '365 Days standard (extended options available)' },
  { label: 'Completeness:', val: 'Immutable contract state once finalized' },
];

const operationalDetails = [
  { label: 'Intended Use:', val: 'Live incident monitoring, active stream troubleshooting' },
  { label: 'Freshness:', val: '< 10s latency (in-memory buffering edge paths)' },
  { label: 'Population:', val: 'Statistically valid real-time sample paths' },
  { label: 'Retention:', val: '24 Hours rolling buffer' },
  { label: 'Completeness:', val: 'Potentially incomplete trailing time segments' },
];

export function ChooseDatasetMatchesDecisionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-analytics-api/bg (18).png"
          alt="Choose Dataset Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Choose the dataset that matches the decision.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Recent operational analytics and historical reporting differ in freshness, population, aggregation, retention and completeness. Treat them as separate contracts.
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Historical Analytics */}
          <div className="p-8 bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-xl font-bold font-mono">Historical Analytics</h3>
              <span className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 text-emerald-500 text-[10px] font-bold font-mono uppercase">
                VERIFIED DATA
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-5">
              High data quality, complete deduplicated viewer logs, and full dimensional alignment. Optimized for regulatory business review and platform usage metrics.
            </p>

            <div className="w-full h-px bg-gray-800" />

            <div className="flex flex-col gap-3 text-xs">
              {historicalDetails.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <strong className="text-white font-bold">{item.label}</strong>
                  <span className="text-slate-400">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Operational / Recent */}
          <div className="p-8 bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-xl font-bold font-mono">Operational / Recent</h3>
              <span className="px-2.5 py-1 bg-teal-400/10 rounded-full border border-teal-400/30 text-teal-400 text-[10px] font-bold font-mono uppercase">
                REAL-TIME STREAM
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-5">
              Sub-minute query latency designed to trace active live streams, identify immediate playback spikes, and isolate sudden regional system routing failure zones.
            </p>

            <div className="w-full h-px bg-gray-800" />

            <div className="flex flex-col gap-3 text-xs">
              {operationalDetails.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <strong className="text-white font-bold">{item.label}</strong>
                  <span className="text-slate-400">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
