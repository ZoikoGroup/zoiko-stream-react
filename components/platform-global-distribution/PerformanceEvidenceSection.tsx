'use client';

import SectionShell from './SectionShell';

interface EvidenceRow {
  label: string;
  description: string;
}

const ROWS: EvidenceRow[] = [
  {
    label: 'Metric',
    description:
      'Exact latency and reliability parameters, measured in milliseconds, calculated as a rolling 30-day average.',
  },
  {
    label: 'Object',
    description:
      'The measured pipeline layer: requests, playback sessions, RTMP streams, or cached archive segments.',
  },
  {
    label: 'Geography',
    description:
      'Explicit region scope (e.g., EU-West, US-East), detailing any active or planned exclusions.',
  },
  {
    label: 'Period',
    description:
      'Temporal freshness of data, complete with exact measurement windows and last-validated date.',
  },
  {
    label: 'Sample',
    description:
      'Comprehensive client population size, randomized sampling rate, and audit methodology.',
  },
  {
    label: 'Conditions',
    description:
      'Network constraints, player configurations, target devices, and media bitrate limits.',
  },
  {
    label: 'Statistic',
    description:
      'Reported percentiles (p50, p95, p99) and averages, accompanied by mathematical justifications.',
  },
  {
    label: 'Source',
    description:
      'Telemetry source details (CDN access logs, Real User Monitoring) and the responsible team.',
  },
  {
    label: 'Limitations',
    description:
      'Identified data gaps, potential reporting bias, and conditions of non-comparability.',
  },
  {
    label: 'Review / Expiry',
    description:
      'SLA expiration parameters, governing terms of review, and automated withdrawal dates.',
  },
];

export default function PerformanceEvidenceSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-global-distribution/performance-evidence-bg.png"
      title="Performance evidence and methodology"
      subtitle="Any performance number must be inseparable from method and scope."
    >
      <div className="flex flex-col gap-px overflow-hidden rounded-xl bg-slate-200">
        {ROWS.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-2 bg-white p-5 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="text-base font-bold text-slate-900 sm:w-60 sm:shrink-0">
              {row.label}
            </span>

            <p className="flex-1 text-sm leading-6 text-slate-600">
              {row.description}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
