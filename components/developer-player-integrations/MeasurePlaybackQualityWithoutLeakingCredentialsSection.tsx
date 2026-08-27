import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const qoeCards = [
  {
    title: 'Application Events',
    desc: 'Monitor raw client interaction timelines: initialization attempts, loading durations, state changes, quality swaps, and active error counts.',
    img: '/images/developer-player-integration/Rectangle (27).png',
  },
  {
    title: 'Quality of Experience (QoE)',
    desc: 'Observe exact time-to-render metrics, dynamic rebuffering frequency, Fatal Error Rates, and client-side bandwidth availability.',
    img: '/images/developer-player-integration/Rectangle (28).png',
  },
  {
    title: 'Strict Privacy Boundary',
    desc: 'Keep critical security boundaries secure. Never pipeline signed manifest headers, private authorization tokens, or explicit user PII.',
    img: '/images/developer-player-integration/Rectangle (29).png',
  },
];

const telemetryTable = [
  {
    dim: 'Client Handshake',
    safe: '✔ Time-to-Ready duration, network negotiation timing',
    forbidden: '✖ Raw authentication tokens, signed authorization headers',
  },
  {
    dim: 'Stream Metrics',
    safe: '✔ Segment loading lag, buffering frequency, active bitrate',
    forbidden: '✖ Full signed playlist URLs with token parameters',
  },
  {
    dim: 'Error Logging',
    safe: '✔ Opaque system error codes, browser layer trace paths',
    forbidden: '✖ Private administrative trace keys, tenant details',
  },
];

export function MeasurePlaybackQualityWithoutLeakingCredentialsSection() {
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
            Measure playback quality without leaking credentials.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Gather critical Quality of Experience (QoE) metrics directly from standard browser runtimes without exposing protected token authorization payloads.
          </p>
        </div>

        {/* 3 QoE Feature Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {qoeCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden flex flex-col shadow-xs"
            >
              <div className="w-full h-40 relative bg-slate-200">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-slate-950 text-xl font-bold">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Telemetry Observability Table Box */}
        <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col">
          <div className="p-4 bg-slate-50 border-b-2 border-gray-200 grid grid-cols-12 text-xs font-bold text-slate-950">
            <div className="col-span-3">Telemetry Dimension</div>
            <div className="col-span-4">Safe Observability Payload</div>
            <div className="col-span-5">Forbidden / Excluded Parameters</div>
          </div>

          <div className="divide-y divide-gray-200">
            {telemetryTable.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-bold text-slate-950">{row.dim}</div>
                <div className="col-span-4 text-emerald-600 font-semibold">{row.safe}</div>
                <div className="col-span-5 text-red-500 font-semibold">{row.forbidden}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
