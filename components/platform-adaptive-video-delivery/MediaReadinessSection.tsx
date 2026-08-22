'use client';

import SectionShell from './SectionShell';

interface ReadinessRow {
  title: string;
  description: string;
  tag: string;
}

const ROWS: ReadinessRow[] = [
  {
    title: 'Media identity',
    description: 'Public-safe identifier, source type and lifecycle state.',
    tag: 'IDENTIFIER',
  },
  {
    title: 'Preparation state',
    description: 'Ready, preparing, limited, failed, or unavailable.',
    tag: 'LIFECYCLE',
  },
  {
    title: 'Variant / representation set',
    description: 'Only approved structured fields from a governed registry.',
    tag: 'REGISTRY',
  },
  {
    title: 'Tracks',
    description: 'Audio, captions, subtitles, metadata where supported.',
    tag: 'METADATA',
  },
  {
    title: 'Rights / policy',
    description: 'Availability can depend on rights or policy state.',
    tag: 'COMPLIANCE',
  },
  {
    title: 'Evidence date',
    description: 'Tested/reviewed date and owner for public compatibility facts.',
    tag: 'FRESHNESS',
  },
];

export default function MediaReadinessSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-adaptive-video-delivery/media-readiness-bg.png"
      title="Media readiness and variant qualification"
      subtitle="Media eligibility is visible without promising that every source automatically becomes adaptation-ready."
    >
      <div className="overflow-hidden rounded-xl bg-slate-50 outline-1 -outline-offset-1 outline-slate-200">
        {ROWS.map((row, index) => (
          <div
            key={row.title}
            className={`flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
              index % 2 === 1 ? 'bg-slate-100' : 'bg-slate-50'
            } ${index < ROWS.length - 1 ? 'border-b border-slate-200' : ''}`}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-slate-900">{row.title}</h3>
              <p className="text-sm leading-5 text-slate-600">{row.description}</p>
            </div>

            <span className="self-start rounded-sm bg-white px-3 py-1 font-mono text-xs font-bold text-slate-600 outline-1 -outline-offset-1 outline-slate-200 sm:self-auto">
              {row.tag}
            </span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
