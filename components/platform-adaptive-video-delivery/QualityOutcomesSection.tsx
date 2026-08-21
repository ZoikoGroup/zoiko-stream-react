'use client';

import SectionShell from './SectionShell';

interface OutcomeFact {
  title: string;
  method: string;
  scope: string;
  aggregation: string;
  evidence: string;
}

const OUTCOMES: OutcomeFact[] = [
  {
    title: 'Bitrate Cap Match',
    method: 'Dynamic Client-Side Heuristic',
    scope: 'Browser HTML5 Players / Global',
    aggregation: '95th Percentile Coverage · 1.2M sessions / Excl. cellular drops',
    evidence: '2026-03-15 by QA-Core',
  },
  {
    title: 'First-Frame Latency',
    method: 'TTFB Segment Buffering Calc',
    scope: 'Desktop Chrome & Safari / NA-West',
    aggregation: 'Median (p50) Startup Speed · 500K connections / All CDNs',
    evidence: '2026-03-18 by Dev-Ops',
  },
  {
    title: 'Buffering Ratio Floor',
    method: 'Rebuffer Rate per Playback Minute',
    scope: 'Smart TV Apps / EU-Central Network',
    aggregation: 'Mean Cumulative Duration · 850K endpoints / Excl. VPN transit',
    evidence: '2026-03-12 by Streaming-QA',
  },
  {
    title: 'Codec Variant Alignment',
    method: 'Capabilities Matrix Verification',
    scope: 'Native iOS & Android SDKs / APAC',
    aggregation: 'Distribution Percentage · 2.4M handshakes / All devices',
    evidence: '2026-03-20 by Mobile-Core',
  },
  {
    title: 'Dynamic Range Fallback',
    method: 'HDR10 to SDR Transcode Verification',
    scope: 'Embedded players / Legacy browsers',
    aggregation: 'Successful render ratio · 300K sessions / Chrome ver < 100',
    evidence: '2026-03-22 by Video-Processing',
  },
  {
    title: 'HEVC Hardware Match',
    method: 'Media Source Extensions Query',
    scope: 'Desktop Edge & Safari / Global',
    aggregation: 'Hardware acceleration hit rate · 1.8M queries / Excl. virtual machines',
    evidence: '2026-03-24 by Quality-Steward',
  },
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs font-bold uppercase text-gray-500">{label}</span>
      <span className="text-xs text-slate-600">{value}</span>
    </div>
  );
}

export default function QualityOutcomesSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-adaptive-video-delivery/outcomes-bg.png"
      title="Quality outcomes and measurement"
      subtitle="Turn quality from a vague promise into named, scoped, testable evidence."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {OUTCOMES.map((outcome) => (
          <article
            key={outcome.title}
            className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-6 outline-1 -outline-offset-1 outline-slate-200"
          >
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs font-bold text-blue-500">
                OUTCOME FACT
              </span>
              <h3 className="text-xl font-bold leading-7 text-slate-900">
                {outcome.title}
              </h3>
            </div>

            <div className="flex flex-col gap-2">
              <Field label="Method" value={outcome.method} />
              <Field label="Scope" value={outcome.scope} />
              <Field label="Aggregation & Sample" value={outcome.aggregation} />

              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Evidence Date
                </span>
                <span className="font-mono text-xs text-emerald-500">
                  {outcome.evidence}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
