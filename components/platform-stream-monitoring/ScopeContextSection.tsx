import React from 'react';
import TopoBackground from './TopoBackground';

const scopes = [
  {
    icon: 'server.svg',
    title: 'Workflow & Session',
    metadata: 'Workflow UUID, session state, route target',
    rule: 'All sessions must match active ingest limits.',
  },
  {
    icon: 'play.svg',
    title: 'Media & Source',
    metadata: 'Codec profile, track array, aspect index',
    rule: 'Flag unsupported track formats instantly.',
  },
  {
    icon: 'users.svg',
    title: 'Delivery & Audience',
    metadata: 'Egress point, edge latency, protocol HLS',
    rule: 'Map viewer drops to specific edge CDNs.',
  },
  {
    icon: 'clock.svg',
    title: 'Time Window Context',
    metadata: 'Measurement frame, sample rate, drift rate',
    rule: 'Stale metric validation triggered after 30s delay.',
  },
  {
    icon: 'lock.svg',
    title: 'Access & Tenant',
    metadata: 'Tenant whitelist, corporate sign-off, HMAC key',
    rule: 'Restrict metadata visibility by tenant tier.',
  },
  {
    icon: 'folder.svg',
    title: 'Evidence Version',
    metadata: 'Proof hash, immutable manifest, audit block',
    rule: 'All state decisions require registered evidence.',
  },
];

export default function ScopeContextSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-[112px] md:py-24">
      <TopoBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-[#0d1117] md:text-[37.9px]">
            Scope before status — context drives every conclusion
          </h2>
          <p className="max-w-[1100px] text-base leading-6 text-[#475569]">
            A status flag means nothing in isolation. Real monitoring requires attaching metrics to a
            clean, scoped boundary so engineers know exactly what territory is impacted, when, and
            under whose responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {scopes.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-4 rounded-xl border border-[#e2e8f0] bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <img
                  src={`/images/platform-stream-monitoring/${card.icon}`}
                  alt=""
                  className="h-5 w-5"
                />
                <h3 className="text-base font-bold text-[#0d1117]">{card.title}</h3>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[12px] font-bold text-[#64748b]">CRITICAL METADATA</span>
                <p className="text-[12px] text-[#475569]">{card.metadata}</p>
              </div>

              <div className="h-px w-full bg-[#e2e8f0]" />

              <p className="text-[12px] font-bold text-[#ef4444]">{card.rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
