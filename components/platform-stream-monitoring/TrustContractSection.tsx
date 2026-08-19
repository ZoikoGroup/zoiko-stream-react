import React from 'react';
import TopoBackground from './TopoBackground';

const guarantees = [
  {
    icon: 'crosshair.svg',
    title: 'Scope',
    description: 'Every metric attaches to a distinct, isolated tenant context boundary.',
  },
  {
    icon: 'file-text.svg',
    title: 'Source',
    description: 'Verifiable telemetry lineage tracing exactly where data was ingested.',
  },
  {
    icon: 'clock.svg',
    title: 'Freshness',
    description: 'Immediate visual latency status showing metric decay or calculation lag.',
  },
  {
    icon: 'activity.svg',
    title: 'Quality',
    description: 'Rigorous automated track, codec, and format integrity assertion rules.',
  },
  {
    icon: 'users.svg',
    title: 'Impact',
    description: 'Quantified viewer and stream-SLA degradation mapping metrics.',
  },
  {
    icon: 'shield.svg',
    title: 'Evidence/Owner',
    description: 'Assigned technical owners backed by actionable log receipts.',
  },
];

export default function TrustContractSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-[112px] md:py-24">
      <TopoBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-[#0d1117] md:text-[37.9px]">
            The Monitoring Trust Contract
          </h2>
          <p className="text-base text-[#475569] md:text-[18px] md:leading-7">
            Six guarantees made visible behind every live analytics response.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5"
            >
              <span className="rounded-lg bg-[#e2e8f0] p-2">
                <img
                  src={`/images/platform-stream-monitoring/${item.icon}`}
                  alt=""
                  className="h-5 w-5"
                />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-[#0d1117]">{item.title}</h3>
                <p className="text-[12px] leading-4 text-[#475569]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
