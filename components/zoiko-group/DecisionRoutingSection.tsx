'use client';

import Link from 'next/link';

interface Route {
  need: string;
  ctaText: string;
  href?: string;
}

const ROUTES: Route[] = [
  {
    need: 'Detailed explanation of how the organizations fit together',
    ctaText: 'View Operating Context →',
  },
  {
    need: 'ZoikoStream enterprise or commercial help',
    ctaText: 'Talk to an expert →',
    href: '/talk-to-an-expert',
  },
  { need: 'Group-level corporate information', ctaText: 'Visit Zoiko Group →' },
  { need: 'Press assets or media contact', ctaText: 'Press & media →' },
  { need: 'Careers', ctaText: 'Explore careers →' },
  { need: 'Security / compliance evidence', ctaText: 'Open Trust Center →' },
  { need: 'Terms, privacy, or provider information', ctaText: 'Legal & privacy →' },
  { need: 'General company question', ctaText: 'Contact us →' },
];

export default function DecisionRoutingSection() {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Decision routing
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Choose the right route.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-16 lg:grid-cols-2">
          {ROUTES.map((route) => (
            <div
              key={route.need}
              className="flex flex-col gap-2 border-b border-zinc-200 py-5 md:flex-row md:items-center md:justify-between md:gap-6"
            >
              <span className="text-base font-medium leading-6 text-neutral-700">
                {route.need}
              </span>

              {route.href ? (
                <Link
                  href={route.href}
                  className="shrink-0 text-sm font-semibold leading-6 text-blue-400 transition-colors hover:text-blue-500"
                >
                  {route.ctaText}
                </Link>
              ) : (
                <span className="shrink-0 text-sm font-semibold leading-6 text-blue-400">
                  {route.ctaText}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
