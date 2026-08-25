import React from 'react';
import Image from 'next/image';

const sources = [
  {
    label: 'SRT-Ingest-Main',
    purpose: 'Primary video contribution feed (1080p60)',
    owner: 'NYC Encoder A',
    expected: 'Receiving',
    current: 'Receiving',
    currentCls: 'bg-emerald-500',
    verified: 'Just Now',
  },
  {
    label: 'RTMP-Ingest-Standby',
    purpose: 'Fallback hot-standby stream feed',
    owner: 'Boston Encoder B',
    expected: 'Receiving',
    current: 'Connecting',
    currentCls: 'bg-amber-500',
    verified: 'Just Now',
  },
  {
    label: 'Slate-Fallback-Internal',
    purpose: 'Emergency graphic intermission loop',
    owner: 'System Engine',
    expected: 'Ready',
    current: 'Ready',
    currentCls: 'bg-emerald-500',
    verified: 'Just Now',
  },
  {
    label: 'Local-Audio-Only',
    purpose: 'Dedicated auxiliary translation channel',
    owner: 'Audio Desk 1',
    expected: 'Expected',
    current: 'Not Expected',
    currentCls: 'bg-slate-400',
    verified: 'Just Now',
  },
];

const pipelineStates = [
  { label: 'Not Expected', color: 'bg-slate-400', desc: 'Gateway is idle, no connection attempted or required.' },
  { label: 'Expected', color: 'bg-slate-400', desc: 'Pipeline is armed and awaiting handshake requests.' },
  { label: 'Connecting', color: 'bg-amber-500', desc: 'Handshake initialized, negotiating network parameters.' },
  { label: 'Receiving', color: 'bg-emerald-500', desc: 'Handshake completed, stream metrics nominal.' },
  { label: 'Degraded', color: 'bg-amber-500', desc: 'Incoming bandwidth dropping below minimal SLA constraints.' },
  { label: 'Lost', color: 'bg-red-500', desc: 'Connection broken, stream drop active.' },
  { label: 'Unknown', color: 'bg-slate-400', desc: 'Telemetry signal missing from contribution encoder.' },
  { label: 'Recovering', color: 'bg-blue-500', desc: 'Re-establishing handshake after connection interruption.' },
  { label: 'Ended', color: 'bg-slate-400', desc: 'Stream finished cleanly, teardown sequence complete.' },
];

export function SourceProofSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solutions-enterprise-broadcast/bg (1).png"
          alt="Source Proof Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Prove the source before program output
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Show source truth separately from broadcast truth.
          </p>
        </div>

        {/* Source Table */}
        <div className="w-full rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-start items-start">
          <div className="w-full p-4 bg-slate-900 hidden lg:flex justify-start items-center gap-4 text-teal-400 text-xs font-bold  uppercase">
            <span className="w-48">SOURCE LABEL</span>
            <span className="flex-1">PURPOSE</span>
            <span className="w-36">OWNER</span>
            <span className="w-36">EXPECTED</span>
            <span className="w-36">CURRENT</span>
            <span className="w-36 text-right">LAST VERIFIED</span>
          </div>

          <div className="w-full flex flex-col divide-y divide-gray-800">
            {sources.map((s, idx) => (
              <div key={idx} className="w-full p-4 bg-gray-950 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:bg-gray-900/60 transition-colors">
                <span className="w-48 text-white text-sm font-bold ">{s.label}</span>
                <span className="flex-1 text-slate-400 text-xs font-normal ">{s.purpose}</span>
                <span className="w-36 text-slate-400 text-xs font-normal ">{s.owner}</span>
                <span className="w-36 text-white text-xs font-normal ">{s.expected}</span>
                <div className="w-36 flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${s.currentCls}`} />
                  <span className="text-white text-xs font-normal ">{s.current}</span>
                </div>
                <span className="w-36 text-right text-slate-400 text-xs font-normal ">{s.verified}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ingest Pipeline Reference */}
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold ">
            Ingest Pipeline States Reference
          </h3>

          <div className="w-full flex flex-col gap-2">
            {pipelineStates.map((st, idx) => (
              <div key={idx} className="w-full p-5 bg-gray-950 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${st.color}`} />
                  <span className="text-white text-sm font-bold ">{st.label}</span>
                </div>
                <p className="text-slate-400 text-xs font-normal ">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
