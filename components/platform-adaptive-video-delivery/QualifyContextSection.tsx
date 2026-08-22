'use client';

import SectionShell from './SectionShell';

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Establish context',
    description: 'Media, playback environment, policy, geography and service state.',
  },
  {
    number: '02',
    title: 'Qualify',
    description: 'Check supported conditions and limitations.',
  },
  {
    number: '03',
    title: 'Select eligible behavior',
    description: 'Describe result class only, not hidden implementation.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Current playback and delivery state.',
  },
  {
    number: '05',
    title: 'Observe',
    description: 'Capture approved operational and experience evidence.',
  },
  {
    number: '06',
    title: 'Respond to change',
    description: 'Requalify or change behavior where documented.',
  },
];

export default function QualifyContextSection() {
  return (
    <SectionShell
      id="delivery-requirements"
      tone="dark"
      background="/images/platform-adaptive-video-delivery/qualify-context-bg.png"
      title="Qualify the delivery context"
      subtitle="Before delivery behavior can adapt, the system must evaluate whether current conditions are supported."
    >
      <ol className="flex flex-col gap-4">
        {STEPS.map((step) => (
          <li
            key={step.number}
            className="flex items-center gap-5 rounded-[10px] bg-zinc-900 p-5 outline-1 -outline-offset-1 outline-gray-800 sm:gap-6"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-[100px] font-mono text-sm font-bold text-gray-950">
              {step.number}
            </span>

            <div className="flex flex-1 flex-col gap-1">
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-5 text-slate-400">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
