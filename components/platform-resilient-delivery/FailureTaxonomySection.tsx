'use client';

import SectionShell from './SectionShell';

interface FailureFamily {
  icon: string;
  title: string;
  description: string;
}

const FAMILIES: FailureFamily[] = [
  {
    icon: '/images/platform-resilient-delivery/cloud-off.svg',
    title: 'Source / contribution',
    description:
      'A contribution source may be unavailable, degraded, delayed, or incomplete.',
  },
  {
    icon: '/images/platform-resilient-delivery/log-in.svg',
    title: 'Ingest',
    description: 'An approved source may fail to enter or remain in the workflow.',
  },
  {
    icon: '/images/platform-resilient-delivery/cpu-teal.svg',
    title: 'Processing / production',
    description: 'A workflow stage or dependency may be degraded or unavailable.',
  },
  {
    icon: '/images/platform-resilient-delivery/key-teal.svg',
    title: 'Authorization',
    description:
      'Playback or administrative decisions may fail, expire, conflict, or become unavailable.',
  },
  {
    icon: '/images/platform-resilient-delivery/git-branch.svg',
    title: 'Delivery path',
    description: 'A delivery path or dependency may be constrained or unavailable.',
  },
  {
    icon: '/images/platform-resilient-delivery/globe-teal.svg',
    title: 'Geography / region',
    description:
      'Availability or performance may differ or change by verified geography.',
  },
  {
    icon: '/images/platform-resilient-delivery/monitor.svg',
    title: 'Player / environment',
    description: 'Playback environment may be incompatible or degraded.',
  },
  {
    icon: '/images/platform-resilient-delivery/sliders.svg',
    title: 'Operational control',
    description:
      'Human, process, dependency, or change-control failure may affect continuity.',
  },
];

export default function FailureTaxonomySection() {
  return (
    <SectionShell
      tone="dark"
      background="/images/platform-resilient-delivery/failure-taxonomy-bg.png"
      title="Failure taxonomy"
      subtitle="A structured way to reason about failure without exposing sensitive internals."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FAMILIES.map((family) => (
          <article
            key={family.title}
            className="flex flex-col gap-5 rounded-xl bg-zinc-900/80 p-6 outline-1 -outline-offset-1 outline-gray-800"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-white">{family.title}</h3>

              <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-gray-800">
                <img
                  src={family.icon}
                  alt=""
                  aria-hidden="true"
                  className="size-4 shrink-0"
                />
              </span>
            </div>

            <p className="text-xs leading-5 text-slate-400">{family.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
