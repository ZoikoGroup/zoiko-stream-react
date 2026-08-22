'use client';

import SectionShell from './SectionShell';

interface ResilienceState {
  number: string;
  pill: string;
  pillClass: string;
  dot: string;
  title: string;
  description: string;
  footer: string;
  footerClass: string;
}

const STATES: ResilienceState[] = [
  {
    number: '01',
    pill: 'Within conditions',
    pillClass: 'bg-emerald-500/10 text-emerald-500 outline-emerald-500/30',
    dot: 'bg-emerald-500',
    title: 'Normal',
    description:
      'No known failure affecting the defined scope. Do not present as a guarantee.',
    footer: '✓ Standard verified behavior',
    footerClass: 'text-emerald-500',
  },
  {
    number: '02',
    pill: 'Degraded',
    pillClass: 'bg-amber-500/10 text-amber-500 outline-amber-500/30',
    dot: 'bg-amber-500',
    title: 'Degraded',
    description:
      'Workflow continues but capability, quality, or coverage is impaired. Expose impact and limitations.',
    footer: '⚠ Limitations exposed',
    footerClass: 'text-amber-500',
  },
  {
    number: '03',
    pill: 'Partial',
    pillClass: 'bg-orange-500/10 text-orange-500 outline-orange-500/30',
    dot: 'bg-orange-500',
    title: 'Partially unavailable',
    description:
      'Some scope is unavailable while other scope remains usable. Preserve boundaries.',
    footer: '◧ Preserved boundaries',
    footerClass: 'text-orange-500',
  },
  {
    number: '04',
    pill: 'Unavailable',
    pillClass: 'bg-red-500/10 text-red-500 outline-red-500/30',
    dot: 'bg-red-500',
    title: 'Unavailable',
    description:
      'No approved continuity path currently produces the required outcome. Show next safe route.',
    footer: '🛟 Next safe route active',
    footerClass: 'text-red-500',
  },
  {
    number: '05',
    pill: 'Pending',
    pillClass: 'bg-blue-500/10 text-blue-500 outline-blue-500/30',
    dot: 'bg-blue-500',
    title: 'Recovery pending',
    description:
      'Action or path underway but outcome is not yet verified. Do not render as recovered.',
    footer: '◷ Verification underway',
    footerClass: 'text-blue-500',
  },
  {
    number: '06',
    pill: 'Recovered',
    pillClass: 'bg-emerald-500/10 text-emerald-500 outline-emerald-500/30',
    dot: 'bg-emerald-500',
    title: 'Recovered / verified',
    description:
      'Evidence shows defined scope returned to acceptable state. Keep verification visible.',
    footer: '✓ Verified status',
    footerClass: 'text-emerald-500',
  },
  {
    number: '07',
    pill: 'Stale / conflict',
    pillClass: 'bg-slate-500/10 text-slate-500 outline-slate-500/30',
    dot: 'bg-slate-500',
    title: 'Unknown',
    description:
      'Sources missing, stale, or disagree. Render uncertainty explicitly on relevant systems.',
    footer: '? Uncertainty rendered',
    footerClass: 'text-slate-500',
  },
  {
    number: '08',
    pill: 'Closed',
    pillClass: 'bg-slate-500/10 text-slate-500 outline-slate-500/30',
    dot: 'bg-slate-500',
    title: 'Superseded / closed',
    description:
      'Earlier condition or action no longer current. Preserve full incident history.',
    footer: '↺ Archived logs',
    footerClass: 'text-slate-500',
  },
];

export default function StateModelSection() {
  return (
    <SectionShell
      tone="light"
      background="/images/platform-resilient-delivery/state-model-bg.png"
      title="Resilience state model"
      subtitle="Use explicit current states instead of a single green/red availability indicator."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATES.map((state) => (
          <article
            key={state.number}
            className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-[0px_4px_12px_0px_rgba(15,23,42,0.02)] outline-1 -outline-offset-1 outline-slate-200"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-600 opacity-50">
                {state.number}
              </span>

              <span
                className={`flex shrink-0 items-center gap-1.5 rounded-[100px] px-2.5 py-1 text-xs font-semibold uppercase outline-1 -outline-offset-1 ${state.pillClass}`}
              >
                <span className={`size-1.5 shrink-0 rounded-full ${state.dot}`} />
                {state.pill}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-900">{state.title}</h3>
              <p className="text-xs leading-5 text-slate-600">{state.description}</p>
            </div>

            <p
              className={`border-t border-slate-200 pt-3 text-xs font-medium leading-4 ${state.footerClass}`}
            >
              {state.footer}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
