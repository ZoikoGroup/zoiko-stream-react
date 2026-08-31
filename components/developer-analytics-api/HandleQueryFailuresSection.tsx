import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const errorRows = [
  {
    cls: 'Validation Error',
    meaning: 'Invalid metric combination, bad parameters, or unresolvable dimensions.',
    retry: 'No',
    retryCls: 'text-red-500',
    action: 'Fix request parameters',
  },
  {
    cls: 'Auth Failure',
    meaning: 'Expired symmetric bearer tokens or missing credential scopes.',
    retry: 'No',
    retryCls: 'text-red-500',
    action: 'Refresh access tokens',
  },
  {
    cls: 'Unsupported Combination',
    meaning: 'Query mixes incompatible dimensions (e.g. raw telemetry on warm storage).',
    retry: 'No',
    retryCls: 'text-red-500',
    action: 'Check compatibility specs',
  },
  {
    cls: 'Rate Limited',
    meaning: 'API request rate exceeds hourly tenant limits.',
    retry: 'Yes',
    retryCls: 'text-emerald-600',
    action: 'Apply exponential backoff',
  },
  {
    cls: 'Temporary Unavailable',
    meaning: 'Internal pipeline lag or partition load spikes.',
    retry: 'Yes',
    retryCls: 'text-emerald-600',
    action: 'Retry with jitter',
  },
  {
    cls: 'Partial / Incomplete Data',
    meaning: 'Raw stream logs still sync to warehouse storage targets.',
    retry: 'Yes',
    retryCls: 'text-emerald-600',
    action: 'Wait for log window to close',
  },
];

export function HandleQueryFailuresSection() {
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
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Handle query failures and changing data without guesswork
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Treat validation errors, authorization failures, rate limits, and incomplete data differently. Follow response metadata and canonical error contracts.
          </p>
        </div>

        {/* Error Class Table Box */}
        <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 flex flex-col shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b-2 border-gray-200 grid grid-cols-12 text-xs font-bold font-mono text-slate-900">
            <div className="col-span-3">Error Class</div>
            <div className="col-span-5">Meaning</div>
            <div className="col-span-2">Retryable</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          <div className="divide-y divide-gray-200">
            {errorRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-bold font-mono text-slate-900">{row.cls}</div>
                <div className="col-span-5 text-slate-600">{row.meaning}</div>
                <div className={`col-span-2 font-bold font-mono ${row.retryCls}`}>{row.retry}</div>
                <div className="col-span-2 text-right font-bold font-mono text-blue-500">
                  {row.action}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Guidance Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-4 shadow-xs">
            <h3 className="text-slate-900 text-lg font-bold font-mono">Retry Guidance</h3>
            <p className="text-slate-600 text-sm leading-5">
              When encountering 429 Rate Limited or 503 Temporary Unavailable responses, implement an exponential backoff strategy paired with random jitter to prevent cascading retry storms.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-4 shadow-xs">
            <h3 className="text-slate-900 text-lg font-bold font-mono">Caching Guidance</h3>
            <p className="text-slate-600 text-sm leading-5">
              Store historical query results locally inside your application database wrapper. Avoid querying unchanged static dimensions repeatedly to maximize API quota limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
