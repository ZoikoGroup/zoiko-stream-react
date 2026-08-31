import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const stateRows = [
  {
    state: 'recording',
    logic: 'Chunks are actively capturing from incoming live pipeline.',
    behavior: 'Active red recording dot, time counter updating.',
  },
  {
    state: 'finalizing',
    logic: 'Live input closed; reconciling block indexes and integrity.',
    behavior: 'Pulsing progress circle, actions disabled.',
  },
  {
    state: 'processing',
    logic: 'Transcoding profiles, multi-bitrate chunks generated.',
    behavior: 'Percentage bar showing overall profiles progress.',
  },
  {
    state: 'ready',
    logic: 'Asset is fully transcoded, verified, and safe to play.',
    behavior: 'Green pill badge, details active.',
  },
  {
    state: 'partially_ready',
    logic: 'At least one target profile is safe for client playbacks.',
    behavior: 'Teal warning badge, notification details active.',
  },
  {
    state: 'failed',
    logic: 'Recording block reconciliation or profile generation failed.',
    behavior: 'Red error pill, alert modal on display.',
  },
  {
    state: 'deleting',
    logic: 'Destruction request queued, blocks being cleared.',
    behavior: 'Opacity dropped, status updating.',
  },
  {
    state: 'deleted',
    logic: 'Durable records cleared; metadata persistent.',
    behavior: 'Greyed out index state, actions blocked.',
  },
  {
    state: 'retention_locked',
    logic: 'Regulatory preservation policy blocks all deletion requests.',
    behavior: 'Gold padlock icon active, delete action removed.',
  },
  {
    state: 'unknown',
    logic: 'Inconsistent telemetry response from database engine.',
    behavior: 'Grey status dot, checking server for heartbeat.',
  },
  {
    state: 'stale',
    logic: 'Metadata present but files missing or unreachable.',
    behavior: 'Warning flag, repair pipeline action visible.',
  },
];

export function UnderstandEveryAssetStateSection() {
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
            Understand every state your asset can be in.
          </h2>
        </div>

        {/* State Table */}
        <div className="w-full p-3 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col shadow-xs overflow-hidden">
          <div className="p-4 bg-slate-100 border-b-2 border-gray-200 grid grid-cols-12 text-xs font-bold text-slate-900">
            <div className="col-span-3">Semantic State</div>
            <div className="col-span-5">Meaning &amp; Logic</div>
            <div className="col-span-4">Standard UI Behavior</div>
          </div>

          <div className="divide-y divide-gray-200">
            {stateRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center gap-2">
                <div className="col-span-3 flex items-center">
                  <span className="px-2.5 py-1 bg-blue-500/10 rounded-md text-blue-500 font-bold">
                    {row.state}
                  </span>
                </div>
                <div className="col-span-5 text-slate-600 text-sm leading-5">{row.logic}</div>
                <div className="col-span-4 text-slate-500 leading-4">{row.behavior}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
