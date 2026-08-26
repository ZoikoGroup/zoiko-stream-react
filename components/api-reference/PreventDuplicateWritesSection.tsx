import React from 'react';
import Image from 'next/image';

const reliabilityFeatures = [
  {
    title: 'Retry Classification',
    desc: 'Instant evaluation of failures as safe or unsafe to retry automatically, minimizing write replication risks.',
    img: '/images/developer-api-reference/card-image (23).png',
  },
  {
    title: 'Idempotency Keys',
    desc: 'Send unique keys with write operations. Subsequent requests with the same key return cached success responses safely.',
    img: '/images/developer-api-reference/card-image (24).png',
  },
  {
    title: 'Unknown Outcomes',
    desc: 'Deterministic workflows to check state and reconcile transaction status before triggering duplicate executions.',
    img: '/images/developer-api-reference/card-image (25).png',
  },
];

export function PreventDuplicateWritesSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-api-reference/bg (5).png"
          alt="Prevent Duplicate Writes Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
                Prevent duplicate writes and unsafe recovery
              </h2>
              <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
                Retry classification, idempotency, deduplication, timeouts, and reconciliation — visible next to every mutation operation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md">
                <span className="text-slate-950 text-base font-bold">Explore Idempotency Spec</span>
              </div>
              <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex justify-center items-center cursor-pointer hover:border-white transition-colors">
                <span className="text-white text-base font-bold">View Failure Scenarios</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Mutation Reliability */}
          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-5 shadow-2xl backdrop-blur-md">
            <div className="flex justify-between items-center">
              <span className="text-white text-xs font-bold tracking-wide">
                MUTATION RELIABILITY PANEL
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div className="flex flex-col gap-3 font-mono">
              <div className="p-3 bg-slate-800 rounded-md flex items-center gap-3 border border-gray-700">
                <span className="text-teal-400 text-xs font-bold">IDEMPOTENCY-KEY:</span>
                <span className="text-white text-xs font-normal">ide_key_88fa12c9b20b</span>
              </div>

              <div className="p-4 bg-slate-900 rounded-md border border-gray-800 text-xs text-slate-400 leading-relaxed">
                {"{ \"status\": \"reconciled\", \"attempt_count\": 1, \"original_request_id\": \"req_01HJ5Z...\" }"}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {reliabilityFeatures.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-lg hover:border-gray-700 transition-colors"
              >
                <div className="w-full h-40 relative bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
