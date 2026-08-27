import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const behaviorPatterns = [
  {
    pattern: 'Pagination',
    solution: 'Async generators (lazy load pages)',
    config: '{ limit: 100 }',
  },
  {
    pattern: 'Async Operations',
    solution: 'Promises / Native Async-Await',
    config: 'Non-blocking, concurrent',
  },
  {
    pattern: 'Retries',
    solution: 'Exponential backoff with jitter',
    config: '{ maxRetries: 3 }',
  },
  {
    pattern: 'Timeouts',
    solution: 'Configurable connection limit',
    config: '{ timeout: 10000 }',
  },
  {
    pattern: 'Idempotency',
    solution: 'Automated UUID key generation',
    config: 'Header injection auto',
  },
];

export function AsyncPaginationRetriesTimeoutsSection() {
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
            Async, pagination, retries, timeouts, and idempotency.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Convenience without hidden behavior. Every policy is explicitly configured.
          </p>
        </div>

        {/* Behavior Pattern Table */}
        <div className="w-full p-6 bg-slate-50 rounded-xl border border-gray-200 flex flex-col overflow-hidden shadow-xs">
          <div className="p-3 bg-gray-200 rounded-md grid grid-cols-12 text-xs font-bold font-mono text-slate-900">
            <div className="col-span-3">Behavior Pattern</div>
            <div className="col-span-4">SDK Helper Solution</div>
            <div className="col-span-3">Default Configuration</div>
            <div className="col-span-2 text-right">Documentation</div>
          </div>

          <div className="divide-y divide-gray-200">
            {behaviorPatterns.map((item, idx) => (
              <div key={idx} className="py-4 px-3 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-bold font-mono text-slate-900">{item.pattern}</div>
                <div className="col-span-4 text-slate-600 font-normal">{item.solution}</div>
                <div className="col-span-3 font-mono text-slate-600">{item.config}</div>
                <div className="col-span-2 text-right text-blue-500 font-bold font-mono cursor-pointer hover:underline">
                  Read Docs
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Idempotency Warning Banner */}
        <div className="w-full p-6 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-start gap-4">
          <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-500 font-bold text-xs flex-shrink-0 mt-0.5">
            !
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-slate-900 text-base font-bold font-mono">Idempotency Verification Warning</h3>
            <p className="text-slate-600 text-sm leading-6">
              Reconcile authoritative resource state before retry unless verified idempotency semantics make retry safe. Failure to map idempotency keys can result in duplicate active streams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
