import React from 'react';

const sidebar = [
  'Workflow Summary',
  'Raw Source Ingest',
  'Track Analysis',
  'Audience SLA Policy',
  'Active Evidence',
];

const fields = [
  { group: 'Audience Policy Configuration', value: 'Corporate SLA Gate Verified' },
  { group: 'Track Evidence Mode', value: 'Raw Stream Lineage Log active' },
];

export default function StreamHealthReviewSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0f1a] px-6 py-20 md:px-[112px] md:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/platform-stream-monitoring/stream-health-review-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/50" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-white md:text-[37.9px]">
            Product proof — Stream Health Review
          </h2>
          <p className="text-base text-[#aab3c4] md:text-[18px] md:leading-7">
            Illustrative structured review with state, evidence, owner, and next action.
          </p>
        </div>

        {/* Console mock */}
        <div className="w-full overflow-hidden rounded-2xl border border-[#232b3a] bg-[#0d1219]">
          <div className="relative flex items-center gap-2 border-b border-[#232b3a] bg-[#131a26] px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="flex-1 text-center text-[12px] text-[#aab3c4]">
              ZoikoStream Studio — Stream Health Review Console [ILLUSTRATIVE ONLY]
            </span>
          </div>

          <div className="flex flex-col gap-6 p-6 lg:flex-row">
            {/* Sidebar */}
            <div className="flex w-full flex-col gap-3 lg:w-[220px]">
              <span className="text-[10px] font-bold tracking-[0.8px] text-[#6b7688]">
                CONSOLE METADATA
              </span>
              <nav className="flex flex-col gap-1">
                {sidebar.map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-md px-3 py-2.5 text-[13px] ${
                      index === 0
                        ? 'border border-[#232b3a] bg-[#131a26] font-medium text-[#4c86ff]'
                        : 'text-[#aab3c4]'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </nav>
            </div>

            {/* Main */}
            <div className="flex flex-1 flex-col gap-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Active Session: Live workflow A</h3>
                  <p className="text-[12px] text-[#6b7688]">
                    Scope Target: Source path 1 · Primary Region: us-east-1 · Owner: Platform-Group
                  </p>
                </div>
                <span className="w-fit rounded-sm bg-[#00d4aa]/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.5px] text-[#00d4aa]">
                  ACTIVE MONITORING
                </span>
              </div>

              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex flex-1 flex-col gap-3 rounded-xl border border-[#232b3a] bg-[#080d14] p-4">
                  <span className="text-[10px] font-bold tracking-[0.8px] text-[#00d4aa]">
                    LIVE STREAM FEED PREVIEW
                  </span>
                  <img
                    src="/images/platform-stream-monitoring/live-stream-feed-preview.png"
                    alt="Illustrative live stream waveform telemetry preview"
                    className="w-full rounded-lg object-cover"
                  />
                </div>

                <div className="flex w-full flex-col gap-5 lg:w-[360px]">
                  {fields.map((field) => (
                    <div key={field.group} className="flex flex-col gap-2">
                      <span className="text-[12px] text-[#aab3c4]">{field.group}</span>
                      <span className="text-base font-bold text-white">
                        What are you interested in? <span className="text-[#ef4444]">*</span>
                      </span>
                      <div className="rounded-md border border-[#232b3a] bg-[#131a26] px-4 py-3 text-[13px] text-[#6b7688]">
                        {field.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
