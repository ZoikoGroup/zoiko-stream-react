'use client'

import Link from 'next/link';

interface PathCard {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  variant: 'primary' | 'secondary';
}

const PATH_CARDS: PathCard[] = [
  {
    title: 'Developer path',
    description:
      'For product teams evaluating APIs, SDKs, protocols, secure playback, webhooks, recording, and analytics.',
    buttonText: 'Start building',
    href: '/developers',
    variant: 'primary',
  },
  {
    title: 'Enterprise path',
    description:
      'For organizations evaluating architecture, governance, support, volume, operations, and resilience.',
    buttonText: 'Talk to an expert',
    href: '/contact-expert',
    variant: 'secondary',
  },
  {
    title: 'Live Events path',
    description: 'For scheduled one-to-many events requiring planning or managed operation.',
    buttonText: 'Plan a live event',
    href: '/live-events',
    variant: 'secondary',
  },
];

export default function NextStepsSection() {
  return (
    <section className="w-full bg-zinc-900 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span className="  text-xs font-normal uppercase tracking-wide text-teal-400">
              WHAT SHOULD YOU DO NEXT?
            </span>
          </div>

          <h2 className="  text-3xl font-bold leading-tight text-slate-100 sm:text-4xl md:text-5xl">
            Choose the path that matches where you are.
          </h2>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-gray-800 bg-zinc-900 shadow-sm md:grid-cols-3">
          {PATH_CARDS.map((card, index) => (
            <div
              key={card.title}
              className={`flex flex-col justify-between p-6 sm:p-8 ${
                index !== 0 ? 'border-t border-gray-800 md:border-t-0 md:border-l' : ''
              }`}
            >
              <div className="flex flex-col gap-2 pb-6">
                <h3 className="  text-base font-bold text-slate-100">
                  {card.title}
                </h3>
                <p className="  text-sm font-normal leading-relaxed text-slate-400">
                  {card.description}
                </p>
              </div>

              <Link
                href={card.href}
                className={`inline-flex min-h-[48px] w-full items-center justify-center rounded-[10px] px-6 py-3.5 text-center   text-base font-semibold transition-all ${
                  card.variant === 'primary'
                    ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 hover:opacity-95'
                    : 'border border-gray-700 text-slate-100 hover:border-gray-500 hover:bg-zinc-800'
                }`}
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
