'use client';

import Link from 'next/link';

interface Route {
  image: string;
  alt: string;
  title: string;
  description: string;
  ctaText: string;
  href?: string;
}

const ROUTES: Route[] = [
  {
    image: '/images/operating-context/build-with-zoikostream.png',
    alt: 'Source code on a developer screen',
    title: 'Build with ZoikoStream',
    description:
      'Use platform documentation, APIs, SDKs, and developer support routes.',
    ctaText: 'Start building →',
    href: '/start-building',
  },
  {
    image: '/images/operating-context/plan-live-broadcast.png',
    alt: 'Crowd in front of a lit stage at a live event',
    title: 'Plan a live broadcast',
    description:
      'Use the Live Events experience for event planning, production workflows, and specialist inquiries.',
    ctaText: 'Explore Live Events →',
    href: '/live-events-overview',
  },
  {
    image: '/images/operating-context/evaluate-the-platform.png',
    alt: 'Presenter speaking to a seated team in an office',
    title: 'Evaluate the platform',
    description:
      'Use the enterprise route for architecture, procurement, commercial, and deployment conversations.',
    ctaText: 'Talk to an expert →',
    href: '/talk-to-an-expert',
  },
  {
    image: '/images/operating-context/legal-terms.png',
    alt: 'Person signing a printed agreement',
    title: 'Verify trust and terms',
    description:
      'Use governed public sources for security, privacy, service status, agreements, and legal notices.',
    ctaText: 'Visit Trust Center →',
  },
  {
    image: '/images/operating-context/corporate-team.png',
    alt: 'Corporate team gathered around a laptop',
    title: 'Reach the right corporate team',
    description:
      'Use Company routes for press, partnerships, careers, company updates, and general contact.',
    ctaText: 'Open Company →',
    href: '/company-overview',
  },
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

          <p className="max-w-3xl text-base leading-6 text-gray-500">
            Five primary user intents &mdash; pick the one that matches what you need
            next.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((route) => (
            <article
              key={route.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-slate-100">
                <img
                  src={route.image}
                  alt={route.alt}
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-7 text-neutral-700">
                  {route.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-500">
                  {route.description}
                </p>

                {route.href ? (
                  <Link
                    href={route.href}
                    className="mt-6 text-sm font-semibold leading-5 text-blue-400 transition-colors hover:text-blue-500"
                  >
                    {route.ctaText}
                  </Link>
                ) : (
                  <span className="mt-6 text-sm font-semibold leading-5 text-blue-400">
                    {route.ctaText}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
