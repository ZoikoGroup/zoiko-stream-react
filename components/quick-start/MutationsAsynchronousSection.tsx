import React from 'react';
import Image from 'next/image';
import { ArrowRight, Webhook} from 'lucide-react';

const asyncRules = [
  {
    title: 'Acceptance is not completion',
    desc: 'An HTTP 201 status code confirms stream registration, not ingest connectivity. UI elements must maintain loading state until webhooks deliver absolute confirmation.',
  },
  {
    title: 'Events are signals, not absolute truth',
    desc: 'Due to local client failures, network latency, or browser focus states, local telemetry might differ. Always build defensive UI boundaries.',
  },
  {
    title: 'Tolerate duplicates and delays',
    desc: 'Network routing protocols guarantee at-least-once webhook transmission. Your server-side event handlers must remain strictly idempotent.',
  },
];

export function MutationsAsynchronousSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-t border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quickstart/bg (22).png"
          alt="Mutations Asynchronous Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Mutations Are Asynchronous — UI Must Reflect That
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Every state change across the ZoikoStream video network is distributed. Status changes do not complete instantly. Designing for asynchronous mutation events guarantees robust, fail-safe user interfaces.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Card: State Machine Flow */}
          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <h3 className="text-white text-base font-bold">STATE MACHINE FLOW &amp; EVENT PIPELINE</h3>

            <div className="p-6 bg-gray-950 rounded-xl border border-gray-800 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="p-3 rounded-lg border border-amber-500 text-amber-500 font-bold text-sm">
                  PENDING
                </div>
                <div className="flex-1 max-w-[160px] mx-4 flex items-center gap-1">
                  <div className="flex-1 h-0.5 bg-gray-800" />
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
                <div className="p-3 rounded-lg border border-teal-400 text-teal-400 font-bold text-sm">
                  READY
                </div>
              </div>

              <div className="p-4 bg-gray-800/25 rounded-lg flex flex-col gap-1.5 border border-gray-800">
                <div className="flex items-center gap-2 text-blue-500 text-xs font-bold">
                  <Webhook className="w-3.5 h-3.5" />
                  <span>WEBHOOK payload received: stream.live_ingest_started</span>
                </div>
                <span className="text-slate-400 text-xs font-normal">
                  Latency: 242ms • Target endpoint: https://api.client.com/webhooks
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-2.5 rounded-md border border-gray-800 text-slate-400 text-xs font-bold text-center">
                  PARTIAL
                </div>
                <div className="p-2.5 rounded-md border border-red-500 text-red-500 text-xs font-bold text-center">
                  FAILED
                </div>
                <div className="p-2.5 rounded-md border border-gray-800 text-slate-400 text-xs font-bold text-center">
                  UNKNOWN
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Async Rules & Guidance */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {asyncRules.map((rule, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-5 bg-zinc-900/90 rounded-lg border border-gray-800 flex flex-col gap-2 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <h4 className="text-teal-400 text-base font-bold">{rule.title}</h4>
                    </div>
                    <p className="text-slate-400 text-xs font-normal leading-5">{rule.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md">
                <span className="text-gray-800 text-base font-bold">Read Webhooks &amp; Events</span>
              </div>
              <span className="text-teal-400 text-sm font-bold underline cursor-pointer hover:text-teal-300">
                Error Handling Guide →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
