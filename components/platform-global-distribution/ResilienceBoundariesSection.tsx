'use client';

import SectionShell from './SectionShell';

interface BoundaryColumn {
  title: string;
  dotClass: string;
  items: string[];
}

const COLUMNS: BoundaryColumn[] = [
  {
    title: 'Global Distribution may explain:',
    dotClass: 'bg-teal-400',
    items: [
      'Regional stream server unavailability mapping',
      'Stale CDN edge routing parameters',
      'Dynamic traffic-window exceptions',
      'Local internet path degradation metrics',
    ],
  },
  {
    title: 'Resilient Delivery must own:',
    dotClass: 'bg-blue-500',
    items: [
      'Real-time fallback path transitions',
      'Continuous origin replication rules',
      'Multi-CDN traffic re-shaping',
      'Automated network outage detection',
      'Instant status and support channel triggers',
    ],
  },
];

export default function ResilienceBoundariesSection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-global-distribution/resilience-bg.png"
      title="Resilience, failure, and status boundaries"
      subtitle="Global Distribution explains scope. Resilient Delivery owns continuity and failure handling."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {COLUMNS.map((column) => (
          <article
            key={column.title}
            className="flex flex-col gap-5 rounded-2xl bg-zinc-900/70 p-7 outline-1 -outline-offset-1 outline-gray-800"
          >
            <h3 className="text-lg font-bold text-white">{column.title}</h3>

            <ul className="flex flex-col gap-3">
              {column.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-2 size-1.5 shrink-0 rounded-full ${column.dotClass}`}
                  />
                  <span className="text-sm leading-6 text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
