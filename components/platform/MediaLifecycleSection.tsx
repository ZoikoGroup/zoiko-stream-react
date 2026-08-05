'use client';

import { ArrowRight } from 'lucide-react';

const STAGES = [
  {
    step: '1. Contribute',
    description: 'How source media enters the workflow.',
  },
  {
    step: '2. Ingest',
    description: 'How incoming media is received.',
  },
  {
    step: '3. Produce',
    description: 'How the workflow is prepared and operated.',
  },
  {
    step: '4. Secure',
    description: 'How identity and policy protect access.',
  },
  {
    step: '5. Deliver',
    description: 'How authorized audiences receive media.',
  },
  {
    step: '6. Understand',
    description: 'How teams inspect outcomes and operations.',
  },
  {
    step: '7. Preserve',
    description: 'How recordings and evidence remain useful.',
  },
];

export default function MediaLifecycleSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-medium uppercase tracking-wide text-blue-500">
              THE COMPLETE MEDIA LIFECYCLE
            </span>
          </div>

          <h2 className="text-3xl font-light text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
            From first signal to lasting replay.
          </h2>

          <p className="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            Seven connected stages carry a stream from its first signal to a lasting, inspectable record. Each
            stage hands off to a narrower, authoritative destination.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 sm:grid sm:grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row lg:items-stretch lg:gap-2">
          {STAGES.map((stage, index) => (
            <div key={stage.step} className="flex w-full items-center lg:w-auto lg:flex-1">
              <div className="flex min-h-[140px] w-full flex-col justify-between rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-white">{stage.step}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">{stage.description}</p>
              </div>

              {index < STAGES.length - 1 && (
                <div className="hidden shrink-0 px-1 text-gray-400 dark:text-gray-600 lg:block">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}