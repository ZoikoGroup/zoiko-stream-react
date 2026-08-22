'use client';

import Link from 'next/link';

interface Domain {
  number: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  ctaText: string;
  href?: string;
}

const DOMAINS: Domain[] = [
  {
    number: '01',
    image: '/images/operating-context/group-governance-meeting.png',
    alt: 'Colleagues reviewing documents in a meeting room',
    title: 'Group governance & portfolio',
    description:
      'Group-level corporate context, portfolio, and approved company information.',
    ctaText: 'Explore Zoiko Group →',
    href: '/zoiko-group',
  },
  {
    number: '02',
    image: '/images/operating-context/platform-product-engineering.png',
    alt: 'Product analytics dashboard on a laptop screen',
    title: 'Platform product & engineering',
    description: 'Platform design, APIs, video workflows, and product development.',
    ctaText: 'Explore Platform / Developers →',
    href: '/platform-overview',
  },
  {
    number: '03',
    image: '/images/operating-context/infrastructure-reliability.png',
    alt: 'Engineer working between data center server aisles',
    title: 'Infrastructure & reliability',
    description:
      'Platform health, shared infrastructure, and operational reliability evidence.',
    ctaText: 'System Status / Trust Center →',
  },
  {
    number: '04',
    image: '/images/operating-context/live-events-stage.png',
    alt: 'Audience hands raised under stage lighting',
    title: 'Live Events',
    description:
      'Live broadcast planning, event workflows, and event-specific operating support.',
    ctaText: 'Explore Live Events →',
    href: '/live-events-overview',
  },
  {
    number: '05',
    image: '/images/operating-context/security-privacy-compliance.png',
    alt: 'Data protection shield concept over a laptop keyboard',
    title: 'Security, privacy & compliance',
    description:
      'Published security, privacy, resilience, subprocessors, and compliance information.',
    ctaText: 'Trust Center / Privacy →',
  },
  {
    number: '06',
    image: '/images/operating-context/commercial-billing-contracting.png',
    alt: 'Person reviewing printed statements beside a tablet',
    title: 'Commercial, billing & contracting',
    description:
      'Enterprise evaluation, applicable terms, order forms, and billing questions.',
    ctaText: 'Talk to an expert / Legal →',
    href: '/talk-to-an-expert',
  },
];

export default function ResponsibilityRoutingSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Responsibility routing
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            Who is responsible for what.
          </h2>

          <p className="max-w-3xl text-base leading-6 text-gray-500">
            A public routing map, not a RACI matrix. Each domain links to the public
            owner surface and the right destination.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((domain) => (
            <article
              key={domain.number}
              className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-slate-100">
                <img
                  src={domain.image}
                  alt={domain.alt}
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold leading-5 tracking-wide text-teal-400">
                  {domain.number}
                </span>

                <h3 className="mt-3 text-lg font-bold leading-7 text-neutral-700">
                  {domain.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-500">
                  {domain.description}
                </p>

                {domain.href ? (
                  <Link
                    href={domain.href}
                    className="mt-6 text-sm font-semibold leading-5 text-blue-400 transition-colors hover:text-blue-500"
                  >
                    {domain.ctaText}
                  </Link>
                ) : (
                  <span className="mt-6 text-sm font-semibold leading-5 text-blue-400">
                    {domain.ctaText}
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
