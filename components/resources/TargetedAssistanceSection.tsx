'use client';

import Link from 'next/link';

interface SupportCard {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  icon: 'help' | 'docs' | 'support' | 'api';
}

const SUPPORT_CARDS: SupportCard[] = [
  {
    id: 'help-center',
    title: 'Help Center',
    description: 'General FAQs and account management.',
    ctaText: 'SEARCH ARTICLES',
    href: '/help',
    icon: 'help',
  },
  {
    id: 'developer-docs',
    title: 'Developer Docs',
    description: 'Comprehensive guides and implementation details.',
    ctaText: 'READ DOCS',
    href: '/docs',
    icon: 'docs',
  },
  {
    id: 'contact-support',
    title: 'Contact Support',
    description: 'Direct access to our engineering team for critical issues.',
    ctaText: 'OPEN A TICKET',
    href: '/support',
    icon: 'support',
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    description: 'Interactive endpoint documentation and schemas.',
    ctaText: 'EXPLORE APIS',
    href: '/api-reference',
    icon: 'api',
  },
];

export default function TargetedAssistanceSection() {
  return (
    <section className="w-full bg-slate-950 px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-start gap-12 text-center">
        
        {/* Section Header */}
        <div className="flex max-w-3xl flex-col items-center gap-4">
          <h2 className="  text-3xl font-normal leading-tight text-indigo-100 sm:text-4xl">
            Need targeted assistance?
          </h2>
          <p className="  text-base font-normal leading-relaxed text-neutral-300">
            Whether you&apos;re debugging an API integration or architecting a global
            broadcast, our support paths are designed to get you answers quickly.
          </p>
        </div>

        {/* 4 Support Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORT_CARDS.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col items-center justify-between rounded-xl border border-slate-700 bg-slate-900 p-8 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl"
            >
              {/* Card Main Info */}
              <div className="flex flex-col items-center gap-2">
                {/* Icon Container */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 transition-colors group-hover:bg-slate-700">
                  {card.icon === 'help' && (
                    <img className="h-6 w-6 " src="/images/resources/Icon.png" />
                  )}
                  {card.icon === 'docs' && (
                    <img className="h-6 w-6 " src="/images/resources/Icon (1).png" />
                  )}
                  {card.icon === 'support' && (
                     <img className="h-6 w-6 " src="/images/resources/Icon (2).png" />

                  )}
                  {card.icon === 'api' && (
                      <img className="h-6 w-6 " src="/images/resources/Icon (3).png" />

                  )}
                </div>

                {/* Card Title */}
                <h3 className="pt-4   text-base font-medium leading-6 text-indigo-100">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="pb-4   text-sm font-normal leading-6 text-neutral-300">
                  {card.description}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={card.href}
                className="  text-xs font-normal uppercase tracking-wide text-sky-300 transition-colors hover:text-sky-200 focus:outline-none"
              >
                {card.ctaText}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}