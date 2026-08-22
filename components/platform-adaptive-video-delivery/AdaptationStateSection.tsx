'use client';

import SectionShell from './SectionShell';

interface AdaptationState {
  dot: string;
  title: string;
  description: string;
}

const STATES: AdaptationState[] = [
  {
    dot: 'bg-gray-500',
    title: 'Not evaluated',
    description: 'No current qualification for this context.',
  },
  {
    dot: 'bg-blue-500',
    title: 'Qualifying',
    description: 'Required facts are being evaluated.',
  },
  {
    dot: 'bg-emerald-500',
    title: 'Eligible',
    description: 'At least one approved delivery path is valid.',
  },
  {
    dot: 'bg-amber-500',
    title: 'Limited',
    description: 'Only a constrained set of delivery options is currently eligible.',
  },
  {
    dot: 'bg-teal-400',
    title: 'Adapting',
    description: 'A documented change is in progress where supported.',
  },
  {
    dot: 'bg-emerald-500',
    title: 'Stable',
    description: 'Current eligible delivery state is holding.',
  },
  {
    dot: 'bg-red-500',
    title: 'Degraded',
    description: 'Observed condition has materially reduced capability.',
  },
  {
    dot: 'bg-gray-500',
    title: 'Unavailable',
    description: 'No supported path is available.',
  },
];

export default function AdaptationStateSection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-adaptive-video-delivery/adaptation-state-bg.png"
      title="Adaptation state model"
      subtitle="A stable state vocabulary without claiming the mechanics behind it."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATES.map((state) => (
          <article
            key={state.title}
            className="flex flex-col gap-3 rounded-lg bg-zinc-900/90 p-5 outline-1 -outline-offset-1 outline-gray-800"
          >
            <div className="flex items-center gap-2.5">
              <span className={`size-2.5 shrink-0 rounded-full ${state.dot}`} />
              <h3 className="text-base font-bold text-white">{state.title}</h3>
            </div>

            <p className="text-xs leading-5 text-slate-400">{state.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
