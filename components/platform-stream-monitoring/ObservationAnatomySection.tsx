import React from 'react';
import TopoBackground from './TopoBackground';

const observations = [
  {
    image: 'anatomy-state-observation.png',
    title: 'State Observation',
    description: 'Verified baseline structural property checks (Codec profiles, track arrays).',
  },
  {
    image: 'anatomy-condition-signal.png',
    title: 'Condition Signal',
    description: 'Boolean states evaluated against explicit operational targets (e.g. Sync-Match).',
  },
  {
    image: 'anatomy-numeric-measure.png',
    title: 'Numeric Measure',
    description: 'Raw counters and measurements ingested from upstream media pipelines directly.',
  },
  {
    image: 'anatomy-derived-metric.png',
    title: 'Derived Metric',
    description: 'Calculated aggregations, sliding-window averages, and drift estimations.',
  },
  {
    image: 'anatomy-event-evidence.png',
    title: 'Event Evidence',
    description: 'Timestamped structural lifecycle changes (Encoder drops, CDN failovers).',
  },
  {
    image: 'anatomy-log-diagnostics.png',
    title: 'Log Diagnostics',
    description: 'Immutable logs and system standard-out trace paths backing conditions.',
  },
];

const semantics = [
  { label: 'Current', color: '#22c55e', detail: 'Realtime data, fresh metadata signature.' },
  { label: 'Delayed', color: '#f59e0b', detail: 'Processing lag detected under 30s.' },
  { label: 'Stale', color: '#ef4444', detail: 'No pipeline update registered past 60s.' },
  { label: 'Partial', color: '#4c86ff', detail: 'Incomplete track telemetry ingested.' },
  { label: 'Conflicted', color: '#f59e0b', detail: 'Unmatched results across CDNs.' },
  { label: 'Missing', color: '#ef4444', detail: 'Required evidence stream absent.' },
];

export default function ObservationAnatomySection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-[112px] md:py-24">
      <TopoBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-14">
        <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-[#0d1117] md:text-[37.9px]">
          Governed observation anatomy — every result explains itself
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {observations.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#f8fafc]"
            >
              <img
                src={`/images/platform-stream-monitoring/${card.image}`}
                alt=""
                className="h-[100px] w-full object-cover"
              />
              <div className="flex flex-col gap-2 p-4">
                <h3 className="text-sm font-bold text-[#0d1117]">{card.title}</h3>
                <p className="text-[12px] leading-4 text-[#475569]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-5 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-7">
          <span className="text-[11px] font-bold tracking-[0.6px] text-[#4c86ff]">
            FRESHNESS &amp; QUALITY CONDITION SEMANTICS
          </span>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {semantics.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <span className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[13px] font-bold text-[#0d1117]">{item.label}</span>
                </span>
                <p className="text-[12px] leading-4 text-[#475569]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
