import React from 'react';
import Image from 'next/image';
const failureLayers = [
  {
    num: '01',
    title: 'Entitlement / Authorization',
    desc: 'Failed credential validation, expired authentication token parameters, or active security-policy violations at the CDN edge gate.',
  },
  {
    num: '02',
    title: 'Source Readiness',
    desc: 'Playback URL missing, malformed media playlist format, or the requested live ingest stream has not yet initialized on active nodes.',
  },
  {
    num: '03',
    title: 'Network & Environment',
    desc: 'Local DNS resolution failures, TLS handshaking timeouts, strict CORS/CSP blocks, or local proxy and browser ad-blocker filters.',
  },
  {
    num: '04',
    title: 'Browser Capability',
    desc: 'Incompatible codec format requests, hardware-acceleration limits, or missing native media engine extensions on legacy client devices.',
  },
  {
    num: '05',
    title: 'Player Lifecycle',
    desc: 'Application race conditions, unexpected component unmounting, or improper garbage collection during heavy transient stream updates.',
  },
  {
    num: '06',
    title: 'Platform Health',
    desc: 'Active global CDN path degradation, edge service incidents, or platform ingest failover state transitions.',
  },
];

const recoveryPills = [
  { name: 'USER ACTION RE-EVAL', cls: 'bg-teal-400/10 text-teal-400 border-teal-400' },
  { name: 'APP RETRY BACKOFF', cls: 'bg-blue-500/10 text-blue-500 border-blue-500' },
  { name: 'REFRESH TOKEN AUTHORITY', cls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500' },
  { name: 'HARD REBUILD PLAYER', cls: 'bg-red-400/10 text-red-400 border-red-400' },
  { name: 'CHANGE CONNECTION ENVIRONMENT', cls: 'bg-slate-400/10 text-slate-400 border-slate-400' },
  { name: 'ESCALATE SUPPORT SLA', cls: 'bg-amber-500/10 text-amber-500 border-amber-500' },
];

export function DiagnosePlaybackFailuresByLayerSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-t border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
              <Image
                src="/images/developer-player-integration/bg (13).png"
                alt="Design For Browser Policy Background"
                fill
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 " />
            </div>
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Diagnose playback failures by layer.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Convert silent, opaque web browser errors into structured, observable recovery sequences designed for enterprise support engineers.
          </p>
        </div>

        {/* 6 Layers List */}
        <div className="w-full flex flex-col gap-3">
          {failureLayers.map((layer, idx) => (
            <div
              key={idx}
              className="p-5 bg-gray-800 rounded-lg border border-gray-800 flex items-center gap-5 shadow-md"
            >
              <div className="w-8 h-8 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0">
                <span className="text-teal-400 text-xs font-bold">{layer.num}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-base font-bold">{layer.title}</h3>
                <p className="text-slate-400 text-xs leading-4">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recovery Pathways Box */}
        <div className="w-full p-7 bg-gray-800 rounded-xl border border-gray-800 flex flex-col gap-5 shadow-xl">
          <span className="text-teal-400 text-xs font-bold tracking-wide uppercase">
            DETERMINISTIC RECOVERY PATHWAYS
          </span>

          <div className="flex flex-wrap items-center gap-3">
            {recoveryPills.map((pill, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-full border text-xs font-bold ${pill.cls}`}
              >
                {pill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
