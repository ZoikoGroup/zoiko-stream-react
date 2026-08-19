import React from 'react';

const axes = [
  { label: 'Capability availability', values: 'Online / Degraded / Offline' },
  { label: 'Runtime & lifecycle', values: 'Initializing / Active / Teardown / Inactive' },
  { label: 'Health assessment', values: 'Healthy / Flagged / Critical / Unqualified' },
  { label: 'Dependency alignment', values: 'Nominal / Blocked / Unknown Bypass' },
  { label: 'Observation quality', values: 'High-Confidence / Intermittent / Corrupted' },
  { label: 'Evidence freshness', values: 'Current / Delayed / Stale / Missing' },
  { label: 'Alert state', values: 'Clear / Active / Snoozed' },
  { label: 'Incident severity', values: 'P1 Critical / P2 High / P3 Minor / None' },
  { label: 'Access restriction', values: 'Open-SLA / Private / Restricted' },
];

const assessmentModel = [
  { label: 'Assessment Label', detail: 'Explicit health classification (e.g. Codec Fault)' },
  { label: 'Basis Details', detail: 'Specific logic, criteria, or threshold rule triggered' },
  { label: 'Incurred Scope', detail: 'Tenant context, system workflow UUID boundary' },
  { label: 'Time & Freshness', detail: 'Precision epoch timestamp + telemetry latency' },
  { label: 'Audience Impact', detail: 'Estimated stream drops, user index impairment' },
  { label: 'Confidence Value', detail: 'Statistical reliability level (High / Low)' },
  { label: 'Technical Owner', detail: 'Assigned engineering group or resolver routing' },
  { label: 'Evidence Manifest', detail: 'Reference hashes to raw JSON payload telemetry' },
];

export default function StateModelSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0f1a] px-6 py-20 md:px-[112px] md:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/platform-stream-monitoring/state-model-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full max-w-none object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/35" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-14">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-white md:text-[37.9px]">
            Orthogonal state model — independent dimensions, visible conflicts
          </h2>
          <p className="text-base text-[#aab3c4] md:text-[18px] md:leading-7">
            Never compress unrelated operational concepts into a single status.
          </p>
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-stretch">
          <div className="flex w-full flex-1 flex-col gap-3">
            <span className="text-[11px] font-bold tracking-[0.6px] text-[#00d4aa]">
              THE NINE INDEPENDENT MONITORING AXES
            </span>
            <div className="flex flex-1 flex-col gap-3 lg:justify-between">
              {axes.map((axis) => (
                <div
                  key={axis.label}
                  className="flex flex-col gap-1 rounded-lg border border-[#232b3a] bg-[#131a26] p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="text-[12px] font-bold text-white">{axis.label}</span>
                  <span className="text-[12px] text-[#00d4aa]">{axis.values}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-5 rounded-2xl border border-[#232b3a] bg-[#131a26] p-7 lg:w-[500px]">
            <span className="text-[11px] font-bold tracking-[0.6px] text-[#4c86ff]">
              GOVERNED HEALTH ASSESSMENT MODEL
            </span>
            <div className="flex flex-col gap-3">
              {assessmentModel.map((row, index) => (
                <div key={row.label} className="flex flex-col gap-1">
                  <span className="text-[12px] font-bold text-[#eef1f6]">{row.label}</span>
                  <span className="text-[12px] text-[#aab3c4]">{row.detail}</span>
                  {index < assessmentModel.length - 1 && (
                    <div className="mt-2 h-px w-full bg-[#232b3a]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
