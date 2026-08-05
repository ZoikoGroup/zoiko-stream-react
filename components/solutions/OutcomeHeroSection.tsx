'use client';

import Link from 'next/link';

interface SelectionCard {
  title: string;
  subtitle: string;
  description: string;
}

const SELECTION_CARDS: SelectionCard[] = [
  {
    title: 'Choose by objective',
    subtitle: 'For visitors who can describe the result they need.',
    description:
      'Build product video, broadcast, secure delivery, accessibility, preservation, or managed events.',
  },
  {
    title: 'Choose by organization',
    subtitle: 'For visitors who recognize an operating context.',
    description:
      'Developers, enterprises, media teams, education, faith and community, or civic institutions.',
  },
  {
    title: 'Start with a workflow',
    subtitle: 'For visitors who already know the workflow.',
    description:
      'Live product video, enterprise broadcast, private delivery, global streaming, preservation, or analytics.',
  },
];

export default function OutcomeHeroSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-zinc-950 dark:bg-radial-[at_82%_8%] dark:from-violet-500/20 dark:via-transparent dark:to-transparent px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 text-center">
        <div className="flex max-w-3xl flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            <span className="text-xs font-normal uppercase tracking-wide text-blue-600 dark:text-blue-400">
              OUTCOME-LED SOLUTIONS
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-zinc-900 dark:text-slate-100 sm:text-4xl md:text-5xl lg:leading-[1.15]">
            Video infrastructure and operations built around your outcome.
          </h1>

          <p className="text-base font-normal leading-relaxed text-gray-600 dark:text-slate-400 sm:text-lg">
            ZoikoStream supports teams that need to build video into products, operate secure broadcasts, reach global audiences, improve accessibility, preserve recordings, or run professionally managed live events.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <Link
              href="/solutions"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3.5 text-base font-semibold text-slate-950 transition-opacity hover:opacity-95"
            >
              Find your solution
            </Link>

            <Link
              href="/contact-expert"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border border-gray-300 dark:border-neutral-600 px-6 py-3.5 text-base font-semibold text-zinc-900 dark:text-white transition-colors hover:border-gray-400 hover:bg-gray-200 dark:hover:border-neutral-400 dark:hover:bg-neutral-900"
            >
              Talk to an expert
            </Link>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {SELECTION_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors hover:border-gray-300 dark:hover:border-gray-700"
            >
              <h2 className="text-base font-bold text-zinc-900 dark:text-slate-100">
                {card.title}
              </h2>

              <p className="text-xs font-normal text-gray-500 dark:text-slate-400">
                {card.subtitle}
              </p>

              <p className="pt-1 text-xs font-normal leading-relaxed text-gray-400 dark:text-slate-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}