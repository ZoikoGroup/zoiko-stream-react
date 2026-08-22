'use client';

import SectionShell from './SectionShell';

interface AvailabilityState {
  title: string;
  tag: string;
  tagClass: string;
  description: string;
}

const STATES: AvailabilityState[] = [
  {
    title: 'Available',
    tag: 'AVAILABLE',
    tagClass: 'bg-emerald-500/10 text-emerald-500 outline-emerald-500/20',
    description: 'Approved capability is available for defined scope and context.',
  },
  {
    title: 'Limited',
    tag: 'LIMITED',
    tagClass: 'bg-amber-500/10 text-amber-500 outline-amber-500/20',
    description:
      'Available only under stated plan, environment, or operational condition.',
  },
  {
    title: 'Restricted',
    tag: 'RESTRICTED',
    tagClass: 'bg-red-500/10 text-red-500 outline-red-500/20',
    description: 'Known restriction applies. Route to authority or support.',
  },
  {
    title: 'Unavailable',
    tag: 'UNAVAILABLE',
    tagClass: 'bg-gray-400/10 text-gray-400 outline-gray-400/20',
    description: 'Capability is not available in the defined geography.',
  },
  {
    title: 'Not evaluated',
    tag: 'NOT EVALUATED',
    tagClass: 'bg-blue-500/10 text-blue-500 outline-blue-500/20',
    description: 'No current authoritative decision exists.',
  },
  {
    title: 'Planned',
    tag: 'PLANNED',
    tagClass: 'bg-teal-400/10 text-teal-400 outline-teal-400/20',
    description: 'Appears only when roadmap publication is explicitly approved.',
  },
  {
    title: 'Retiring',
    tag: 'RETIRING',
    tagClass: 'bg-amber-500/10 text-amber-500 outline-amber-500/20',
    description: 'Approved withdrawal or transition is underway.',
  },
  {
    title: 'Unknown / conflict',
    tag: 'CONFLICT',
    tagClass: 'bg-red-500/10 text-red-500 outline-red-500/20',
    description: 'Authorities disagree or source is stale.',
  },
];

export default function AvailabilityStatesSection() {
  return (
    <SectionShell
      id="distribution-scope"
      tone="dark"
      background="/images/platform-global-distribution/availability-states-bg.png"
      title="Geographic availability states"
      subtitle="Every geography record needs explicit state. Absence is not equivalent to unavailability."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATES.map((state) => (
          <article
            key={state.title}
            className="flex flex-col gap-5 rounded-xl bg-zinc-900/80 p-6 outline-1 -outline-offset-1 outline-gray-800"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-white">{state.title}</h3>

              <span
                className={`shrink-0 rounded-sm px-3 py-1 font-mono text-xs font-bold outline-1 -outline-offset-1 ${state.tagClass}`}
              >
                {state.tag}
              </span>
            </div>

            <p className="text-xs leading-5 text-slate-400">{state.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
