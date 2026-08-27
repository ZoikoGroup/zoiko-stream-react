import React from 'react';
import Image from 'next/image';

const encoders = [
  {
    vendor: 'OBS Studio',
    version: '30.x',
    protocol: 'RTMPS',
    status: 'Qualified',
    statusCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
    date: '2024-06-15',
    caveats: 'None',
  },
  {
    vendor: 'OBS Studio',
    version: '30.x',
    protocol: 'SRT',
    status: 'Qualified',
    statusCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
    date: '2024-06-15',
    caveats: 'Caller mode only',
  },
  {
    vendor: 'FFmpeg',
    version: '6.x',
    protocol: 'RTMPS',
    status: 'Qualified',
    statusCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
    date: '2024-05-20',
    caveats: 'CLI workflow',
  },
  {
    vendor: 'FFmpeg',
    version: '6.x',
    protocol: 'SRT',
    status: 'Conditional',
    statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    date: '2024-05-20',
    caveats: 'Verify latency settings',
  },
  {
    vendor: 'vMix',
    version: '27',
    protocol: 'RTMPS',
    status: 'Qualified',
    statusCls: 'bg-emerald-500/10 text-teal-400 border-emerald-500/30',
    date: '2024-04-10',
    caveats: 'Windows only',
  },
  {
    vendor: 'Larix Broadcaster',
    version: '2.x',
    protocol: 'SRT',
    status: 'Conditional',
    statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    date: '2024-03-28',
    caveats: 'Mobile, verify mode',
  },
  {
    vendor: 'Browser (Chrome)',
    version: '120+',
    protocol: 'WHIP',
    status: 'Conditional',
    statusCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    date: '2024-06-01',
    caveats: 'Check ICE/TURN',
  },
];

export function VerifyPublishingSourceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-media-protocol/bg 12.png"
          alt="Verify Publishing Source Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Verify your publishing source before production
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Protocol supported does not mean every encoder works. Qualification records track vendor, version, protocol, and evidence so compatibility claims are durable and auditable.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 bg-gray-800 rounded-full border border-gray-800 text-white text-xs    cursor-pointer">
              Protocol: All ▾
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-full border border-gray-800 text-white text-xs    cursor-pointer">
              Source Type: All ▾
            </div>
            <div className="px-4 py-2 bg-gray-800 rounded-full border border-gray-800 text-white text-xs    cursor-pointer">
              Status: Qualified ▾
            </div>
          </div>

          <div className="w-full sm:w-80 px-4 py-2 bg-gray-800 rounded-full border border-gray-800 flex items-center gap-3">
            <span className="text-slate-400 text-xs">🔍</span>
            <input
              type="text"
              placeholder="Search encoders..."
              className="bg-transparent text-white text-xs placeholder-slate-400 focus:outline-none w-full"
            />
          </div>
        </div>

        {/* Table */}
        <div className="w-full bg-zinc-900/80 rounded-2xl border border-gray-800 p-6 flex flex-col overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="p-4 bg-slate-900 border-b-2 border-gray-800 grid grid-cols-12 text-xs font-bold    text-white">
            <div className="col-span-3">Vendor / Product</div>
            <div className="col-span-2">Version</div>
            <div className="col-span-2">Protocol</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Verified Date</div>
            <div className="col-span-1">Caveats</div>
          </div>

          <div className="divide-y divide-gray-800">
            {encoders.map((enc, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-bold text-white">{enc.vendor}</div>
                <div className="col-span-2 text-slate-400   ">{enc.version}</div>
                <div className="col-span-2 text-teal-400   ">{enc.protocol}</div>
                <div className="col-span-2">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold    uppercase ${enc.statusCls}`}>
                    {enc.status}
                  </span>
                </div>
                <div className="col-span-2 text-slate-400   ">{enc.date}</div>
                <div className="col-span-1 text-slate-400">{enc.caveats}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vocabulary Legend & Request Button */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400 text-xs font-bold    uppercase mr-2">
              Vocabulary Legend:
            </span>
            <span className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 text-teal-400 text-xs font-bold    uppercase">
              Qualified
            </span>
            <span className="px-2.5 py-1 bg-amber-500/10 rounded-full border border-amber-500/30 text-amber-500 text-xs font-bold    uppercase">
              Conditional
            </span>
            <span className="px-2.5 py-1 bg-red-500/10 rounded-full border border-red-500/30 text-red-500 text-xs font-bold    uppercase">
              Not Qualified
            </span>
            <span className="px-2.5 py-1 bg-gray-700/10 rounded-full border border-gray-700/30 text-slate-400 text-xs font-bold    uppercase">
              Unknown
            </span>
            <span className="px-2.5 py-1 bg-orange-500/10 rounded-full border border-orange-500/30 text-orange-500 text-xs font-bold    uppercase">
              Review Required
            </span>
          </div>

          <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-white font-bold    text-center cursor-pointer hover:border-white transition-colors">
            Request qualification
          </div>
        </div>
      </div>
    </section>
  );
}
