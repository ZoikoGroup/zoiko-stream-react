import React from 'react';
import Image from 'next/image';

const apiOperations = [
  {
    grp: 'Video Assets',
    method: 'client.videos.create()',
    op: 'POST /v1/videos',
    status: '✓ Fully Typed',
    statusCls: 'text-emerald-500',
  },
  {
    grp: 'Live Streams',
    method: 'client.liveStreams.start()',
    op: 'POST /v1/live-streams',
    status: '✓ Fully Typed',
    statusCls: 'text-emerald-500',
  },
  {
    grp: 'Direct Uploads',
    method: 'client.uploads.getUrl()',
    op: 'POST /v1/uploads',
    status: '✓ Fully Typed',
    statusCls: 'text-emerald-500',
  },
  {
    grp: 'Playback Keys',
    method: 'client.playback.signToken()',
    op: 'Local cryptographic op',
    status: '✓ Local Helper',
    statusCls: 'text-emerald-500',
  },
  {
    grp: 'Telemetry Analytics',
    method: 'client.analytics.query()',
    op: 'GET /v1/analytics',
    status: '✓ Fully Typed',
    statusCls: 'text-emerald-500',
  },
];

export function TypedApiSurfaceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-sdk/bg (4).png"
          alt="Typed API Surface Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Typed API surface — map methods to canonical contracts.
          </h2>
        </div>

        {/* API Table */}
        <div className="w-full bg-zinc-900 rounded-2xl border border-gray-800 p-4 flex flex-col overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="p-4 bg-slate-900 rounded-lg grid grid-cols-12 text-xs font-bold font-mono text-white">
            <div className="col-span-3">Capability Group</div>
            <div className="col-span-3">SDK Method</div>
            <div className="col-span-3">Mapped API Operation</div>
            <div className="col-span-2">Coverage Status</div>
            <div className="col-span-1 text-right">Contract</div>
          </div>

          <div className="divide-y divide-gray-800">
            {apiOperations.map((item, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-bold text-white">{item.grp}</div>
                <div className="col-span-3 font-mono text-slate-400">{item.method}</div>
                <div className="col-span-3 font-mono text-slate-400">{item.op}</div>
                <div className={`col-span-2 font-semibold ${item.statusCls}`}>{item.status}</div>
                <div className="col-span-1 text-right text-teal-400 font-bold font-mono cursor-pointer hover:underline whitespace-nowrap">
                  View Contract
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
