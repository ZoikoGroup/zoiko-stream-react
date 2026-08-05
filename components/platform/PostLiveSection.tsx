'use client';

import { ArrowRight } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    title: 'Live workflow',
    description: 'Authorized event or stream.',
  },
  {
    title: 'Record',
    description: 'Create approved asset.',
  },
  {
    title: 'Organize',
    description: 'Manage metadata and access.',
  },
  {
    title: 'Replay',
    description: 'Deliver authorized replay.',
  },
  {
    title: 'Understand',
    description: 'Inspect verified analytics.',
  },
  {
    title: 'Preserve',
    description: 'Retain per approved rules.',
  },
];

const FEATURE_CARDS = [
  {
    title: 'Recording and replay',
    description: 'Capture, asset creation, playback, and operational handoff.',
  },
  {
    title: 'Media management',
    description: 'Organization, access, and lifecycle context for every asset.',
  },
  {
    title: 'Analytics',
    description: 'Operational and audience understanding, not fabricated dashboards.',
  },
  {
    title: 'Preservation',
    description: 'Continuity and evidence without a legal or retention overclaim.',
  },
];

export default function PostLiveSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-9">
        {/* Header Section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-medium uppercase tracking-wide text-blue-500">
              RECORD, REPLAY, AND UNDERSTAND
            </span>
          </div>

          <h2 className="text-3xl font-light leading-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
            What happens after the live session ends.
          </h2>

          <p className="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            Post-live continuity turns live media into an authorized, reusable, inspectable asset - not every live
            workflow is recorded automatically.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="flex flex-col items-stretch justify-between gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:gap-2">
          {WORKFLOW_STEPS.map((step, index) => (
            <div key={step.title} className="flex w-full items-center lg:w-auto lg:flex-1">
              <div className="flex min-h-[110px] w-full flex-col justify-between rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-shadow hover:shadow-sm">
                <h3 className="text-sm font-light text-zinc-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">{step.description}</p>
              </div>

              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden shrink-0 px-1 text-gray-400 dark:text-gray-600 lg:block">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-start rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm"
            >
              <h3 className="text-sm font-light text-zinc-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}