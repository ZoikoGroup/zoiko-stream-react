import React from 'react';

const events = [
  {
    name: 'asset.created',
    purpose: 'Resource created, awaiting transfer',
    object: 'Asset',
    delivery: 'At-least-once',
  },
  {
    name: 'asset.processing',
    purpose: 'Validation/encoding in progress',
    object: 'Asset',
    delivery: 'At-least-once',
  },
  {
    name: 'asset.ready',
    purpose: 'Official readiness signal is true',
    object: 'Asset',
    delivery: 'At-least-once',
  },
  {
    name: 'asset.errored',
    purpose: 'Processing failed; see error detail',
    object: 'Asset',
    delivery: 'At-least-once',
  },
  {
    name: 'asset.deleted',
    purpose: 'Asset removed from the catalog',
    object: 'Asset',
    delivery: 'At-least-once',
  },
];

export function ReactDontPollAggressivelySection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              REACT, DON&apos;T POLL AGGRESSIVELY
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            React to asset changes instead of guessing when work is complete.
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-normal leading-7 max-w-[760px]">
            Exact event names and payload fields come from the Webhooks and events reference. If polling is supported as a fallback, follow the documented backoff interval.
          </p>
        </div>

        {/* Webhook Event Table */}
        <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col shadow-sm">
          <div className="p-4 bg-slate-50 border-b border-gray-200 grid grid-cols-12 text-xs font-bold font-mono text-zinc-900">
            <div className="col-span-3">EVENT</div>
            <div className="col-span-5">PURPOSE</div>
            <div className="col-span-2">OBJECT</div>
            <div className="col-span-2">DELIVERY</div>
          </div>

          <div className="divide-y divide-slate-100">
            {events.map((ev, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-mono font-bold text-blue-500">{ev.name}</div>
                <div className="col-span-5 text-gray-500">{ev.purpose}</div>
                <div className="col-span-2 text-gray-500">{ev.object}</div>
                <div className="col-span-2 text-gray-500">{ev.delivery}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-gray-500 text-xs font-mono">
            Ordering and deduplication are not guaranteed unless stated in the Webhooks and events reference — always key handlers on the event ID.
          </p>

          <div className="px-6 py-3 bg-zinc-100 rounded-lg border border-gray-800 w-fit cursor-pointer hover:bg-zinc-200 transition-colors">
            <span className="text-zinc-900 text-sm font-semibold">Open Webhooks and events →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
