import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export function KnowHowResultsAreShapedSection() {
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

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Know how results are shaped before you build around them.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Analytics responses may return summaries, time series, breakdown rows, cursors and export jobs. Parse with strict schema expectations.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Response Payload Anatomy */}
          <div className="lg:col-span-7 p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-5 shadow-xs">
            <h3 className="text-slate-950 text-lg font-bold font- ">Response Payload Anatomy</h3>
            <div className="flex flex-col gap-3">
              <div className="p-4 bg-white rounded-lg border border-gray-200 flex justify-between items-start">
                <span className="text-slate-950 text-xs font-bold font- ">1. Metadata &amp; Headers</span>
                <span className="text-slate-600 text-xs">API Version, rate limits, timezone mapping context</span>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-200 flex justify-between items-start">
                <span className="text-slate-950 text-xs font-bold font- ">2. Query Echo</span>
                <span className="text-slate-600 text-xs">Paraphrased request limits, checked filters, metrics</span>
              </div>

              <div className="p-4 bg-white rounded-lg border border-teal-400 flex justify-between items-start">
                <span className="text-teal-500 text-xs font-bold font- ">3. Data Rows &amp; Series</span>
                <span className="text-slate-600 text-xs">Array of timezone-safe metric data segments</span>
              </div>
            </div>
          </div>

          {/* Right Column: Legend & Async Export */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-4 shadow-xs">
              <h3 className="text-slate-950 text-sm font-bold font- ">Standard Data State Legend</h3>
              <div className="flex flex-col gap-2 font-  text-xs">
                <div className="flex items-center gap-2">
                  <strong className="text-rose-600 font-bold">Zero</strong>
                  <span className="text-slate-600">— Metric evaluated to exactly 0 (Valid capture)</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-amber-600 font-bold">Null</strong>
                  <span className="text-slate-600">— Telemetry buffer has no record (No edge connection)</span>
                </div>
                <div className="flex items-center gap-2">
                  <strong className="text-blue-600 font-bold">Suppressed</strong>
                  <span className="text-slate-600">— Segment drops below anonymization privacy thresholds</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-4 shadow-xs">
              <h3 className="text-slate-950 text-sm font-bold font- ">Asynchronous Data Exports</h3>
              <p className="text-slate-600 text-xs leading-4">
                Query scopes exceeding 10M rows trigger async workers. Standard output targets CSV or Parquet stored within secure governance tunnels.
              </p>
              <div className="px-4 py-2 rounded-md border border-gray-300 text-slate-950 font-bold font-  text-xs text-center cursor-pointer hover:border-slate-900 w-fit">
                Trigger Bulk Export
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
