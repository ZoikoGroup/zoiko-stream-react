import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Search } from 'lucide-react';

const metrics = [
  {
    name: 'play_beacons',
    cat: 'Viewership',
    unit: 'Count',
    agg: 'Sum',
    dataset: 'viewership_raw',
    status: 'VERIFIED',
  },
  {
    name: 'startup_time_ms',
    cat: 'Startup',
    unit: 'Milliseconds',
    agg: 'P95 Average',
    dataset: 'qos_telemetry_raw',
    status: 'VERIFIED',
  },
  {
    name: 'rebuffering_ratio',
    cat: 'Rebuffering',
    unit: 'Percentage',
    agg: 'Weighted Average',
    dataset: 'qos_telemetry_raw',
    status: 'VERIFIED',
  },
  {
    name: 'playback_failures',
    cat: 'Failure',
    unit: 'Count',
    agg: 'Sum',
    dataset: 'qos_telemetry_raw',
    status: 'VERIFIED',
  },
  {
    name: 'max_concurrent_users',
    cat: 'Viewership',
    unit: 'Count',
    agg: 'Maximum',
    dataset: 'viewership_raw',
    status: 'VERIFIED',
  },
  {
    name: 'watch_duration_sec',
    cat: 'Engagement',
    unit: 'Seconds',
    agg: 'Sum',
    dataset: 'viewership_raw',
    status: 'VERIFIED',
  },
];

export function KnowWhatEachMetricMeansSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Know what each metric means before you query it.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Published analytics metrics are registry-backed. Display names, units, populations, aggregation behavior, and definition history protect implementation correctness.
          </p>
        </div>

        {/* Metrics Catalog Table Box */}
        <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 shadow-sm">
          <div className="w-full pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="w-full sm:w-96 p-3 bg-slate-50 rounded-lg border border-gray-200 flex items-center gap-3">
              <Search className="text-slate-600 text-sm"/>
              <input
                type="text"
                placeholder="Search standard metrics catalog..."
                className="bg-transparent text-slate-600 text-sm placeholder-slate-400 focus:outline-none w-full"
              />
            </div>
            <span className="text-blue-500 text-xs font-bold font-mono">
              6 STANDARD METRICS LISTED
            </span>
          </div>

          <div className="p-4 bg-slate-50 border-b-2 border-gray-200 grid grid-cols-12 text-xs font-bold font-mono text-slate-900">
            <div className="col-span-3">Metric Name</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Unit</div>
            <div className="col-span-2">Aggregation</div>
            <div className="col-span-2">Dataset</div>
            <div className="col-span-1 text-right">Status</div>
          </div>

          <div className="divide-y divide-gray-200">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-bold font-mono text-blue-500">{m.name}</div>
                <div className="col-span-2 text-slate-600">{m.cat}</div>
                <div className="col-span-2 text-slate-600">{m.unit}</div>
                <div className="col-span-2 text-slate-600">{m.agg}</div>
                <div className="col-span-2 text-slate-600 font-mono">{m.dataset}</div>
                <div className="col-span-1 text-right">
                  <span className="px-2 py-1 bg-emerald-500/10 rounded text-[10px] font-bold font-mono text-emerald-600">
                    {m.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center pt-2">
          <div className="px-7 py-3.5 rounded-lg border border-gray-200 text-slate-900 font-bold font-mono cursor-pointer hover:border-slate-900 transition-colors">
            Browse full metric registry →
          </div>
        </div>
      </div>
    </section>
  );
}
