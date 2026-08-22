'use client';

import SectionShell from './SectionShell';

const STEPS = [
  { icon: '/images/platform-resilient-delivery/activity-dark.svg', label: 'Detect' },
  { icon: '/images/platform-resilient-delivery/eye.svg', label: 'Qualify' },
  { icon: '/images/platform-resilient-delivery/lock.svg', label: 'Contain' },
  { icon: '/images/platform-resilient-delivery/git-merge.svg', label: 'Select path' },
  { icon: '/images/platform-resilient-delivery/key-dark.svg', label: 'Authorize' },
  { icon: '/images/platform-resilient-delivery/check-circle.svg', label: 'Verify' },
  { icon: '/images/platform-resilient-delivery/mail.svg', label: 'Communicate' },
  { icon: '/images/platform-resilient-delivery/database.svg', label: 'Preserve' },
  { icon: '/images/platform-resilient-delivery/refresh-cw.svg', label: 'Review' },
];

interface StateRow {
  dot: string;
  state: string;
  meaning: string;
}

const ROWS: StateRow[] = [
  {
    dot: 'bg-emerald-500',
    state: 'Normal',
    meaning:
      'Standard operating path active with full capability SLA met. Continual telemetry collection active.',
  },
  {
    dot: 'bg-amber-500',
    state: 'Degraded',
    meaning:
      'Non-critical error or metric threshold breach observed. System remains functional under cautionary SLA.',
  },
  {
    dot: 'bg-amber-500',
    state: 'Partially unavailable',
    meaning:
      'Supported paths are failing for a sub-segment of region or capabilities. Alternate paths qualifying.',
  },
  {
    dot: 'bg-red-500',
    state: 'Unavailable',
    meaning:
      'No primary or fallback pathways are yielding successful data throughput. Failure log recorded.',
  },
  {
    dot: 'bg-amber-500',
    state: 'Recovery pending',
    meaning:
      'Alternate routing selected and awaiting manual operator approval or cryptographic key validation.',
  },
  {
    dot: 'bg-emerald-500',
    state: 'Recovered/verified',
    meaning:
      'Workflow returned to normal SLA levels via recovery path. State log updated with cryptographic proof.',
  },
  {
    dot: 'bg-amber-500',
    state: 'Unknown/stale/conflict',
    meaning:
      'Telemetry conflict or reporting bias detected. Operational human review triggered.',
  },
  {
    dot: 'bg-amber-500',
    state: 'Superseded/closed',
    meaning:
      'Incidents resolved or alternative topology committed. Historical record sealed and stored.',
  },
];

export default function RecoveryLifecycleSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-resilient-delivery/recovery-lifecycle-bg.png"
      title="Recovery lifecycle"
      subtitle="End-to-end operating model without assuming every recovery is automatic."
    >
      {/* Step rail */}
      <div className="rounded-2xl bg-slate-50 p-6 outline-[1.5px] -outline-offset-[1.5px] outline-gray-200">
        <ol className="flex flex-col gap-6 sm:grid sm:grid-cols-3 lg:flex lg:flex-row lg:items-start lg:gap-1">
          {STEPS.map((step, index) => (
            <li key={step.label} className="contents">
              <div className="flex flex-1 flex-col items-center gap-2 text-center">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-gradient-to-b from-teal-400 to-blue-500 outline-1 -outline-offset-1 outline-gray-200">
                  <img
                    src={step.icon}
                    alt=""
                    aria-hidden="true"
                    className="size-4 shrink-0"
                  />
                </span>

                <span className="text-xs font-bold text-slate-900">{step.label}</span>
              </div>

              {index < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden h-0.5 flex-1 bg-gray-200 lg:mt-5 lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* State table */}
      <div className="mt-8 rounded-2xl bg-white p-4 outline-[1.5px] -outline-offset-[1.5px] outline-gray-200 sm:p-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-50">
                <th scope="col" className="w-48 p-3 text-xs font-bold text-slate-900">
                  State
                </th>
                <th scope="col" className="p-3 text-xs font-bold text-slate-900">
                  Meaning &amp; Operating Behavior
                </th>
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row) => (
                <tr key={row.state} className="border-b border-gray-200">
                  <td className="p-3">
                    <span className="flex items-center gap-2">
                      <span className={`size-1.5 shrink-0 rounded-full ${row.dot}`} />
                      <span className="text-xs font-semibold text-slate-900">
                        {row.state}
                      </span>
                    </span>
                  </td>
                  <td className="p-3 text-xs text-slate-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionShell>
  );
}
