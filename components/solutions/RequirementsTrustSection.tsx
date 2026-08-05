'use client';

interface EvaluationArea {
  title: string;
  description: string;
}

const EVALUATION_AREAS: EvaluationArea[] = [
  {
    title: 'Security',
    description:
      'Identity, authorization, secure playback, media protection, source-governed evidence.',
  },
  {
    title: 'Accessibility',
    description:
      'Captions, language, inclusive interaction, documented human-review boundaries.',
  },
  {
    title: 'Resilience',
    description:
      'Failure handling, operational continuity, status visibility, verified service design.',
  },
  {
    title: 'Governance',
    description: 'Roles, approval, auditability, data lifecycle, change control.',
  },
  {
    title: 'Operating model',
    description: 'Who builds, operates, supports, reviews, and escalates.',
  },
];

export default function RequirementsTrustSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-normal uppercase tracking-wide text-blue-500">
              REQUIREMENTS AND TRUST
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
            Can this meet your requirements?
          </h2>

          <p className="text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            Five areas to evaluate before conversion - each routed to inspectable evidence, not marketing assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm sm:grid-cols-2 lg:grid-cols-5">
          {EVALUATION_AREAS.map((area, index) => (
            <div
              key={area.title}
              className={`flex flex-col gap-2 p-6 ${
                index !== 0 ? 'border-t border-gray-200 dark:border-gray-800 sm:border-t-0 sm:border-l' : ''
              }`}
            >
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                {area.title}
              </h3>
              <p className="text-xs font-normal leading-relaxed text-gray-500 dark:text-gray-400">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}