import React from 'react';
import Image from 'next/image';

const contractRows = [
  { dimension: 'Audience', truth: 'Must map explicitly to a defined segment. Replays inherit the identical Live scope.' },
  { dimension: 'Identity', truth: 'Proven identity state (Verified/Not Required) must precede all access evaluation loops.' },
  { dimension: 'Entitlement', truth: 'Proven registry matching the verified identity in real-time before keys are signed.' },
  { dimension: 'Policy', truth: 'Must be currently valid. Evaluated contextually on every player loop iteration.' },
  { dimension: 'Playback', truth: 'Session tokens bound to client constraints, allowing instant server-side revocation.' },
  { dimension: 'Lifecycle', truth: 'Continuous key rotation and automatic session expiry after 900 seconds max.' },
  { dimension: 'Evidence & Support', truth: 'All failed access audits exported automatically to administrative compliance centers.' },
];

export function OperatingContractSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-private-audience-delivery/bg (2).png"
          alt="Operating Contract Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Private Audience Delivery Operating Contract
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Define the minimum truths required for controlled delivery.
          </p>
        </div>

        {/* Contract Table */}
        <div className="w-full rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-start items-start bg-zinc-900">
          <div className="w-full p-4 bg-slate-900 border-b-2 border-gray-800 flex justify-start items-center gap-3">
            <span className="w-56 text-white text-sm font-bold  uppercase">Dimension</span>
            <span className="flex-1 text-white text-sm font-bold  uppercase">Required Operating Truth</span>
          </div>

          <div className="w-full flex flex-col divide-y divide-gray-800">
            {contractRows.map((r, idx) => (
              <div key={idx} className="w-full p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-gray-900/60 transition-colors">
                <span className="w-56 text-teal-400 text-sm font-bold  flex-shrink-0">{r.dimension}</span>
                <span className="flex-1 text-slate-400 text-sm font-normal  leading-5">{r.truth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
