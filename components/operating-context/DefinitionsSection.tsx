'use client';

import Link from 'next/link';

interface Definition {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  href?: string;
}

const DEFINITIONS: Definition[] = [
  {
    image: '/images/operating-context/zoiko-group-signage.png',
    alt: 'Zoiko Group signage on a building exterior',
    eyebrow: 'Parent organization',
    title: 'Zoiko Group',
    description:
      'The parent organization that provides group-level governance, portfolio context, and the wider corporate frame for ZoikoStream.',
    ctaText: 'Explore Zoiko Group →',
    href: '/zoiko-group',
  },
  {
    image: '/images/operating-context/zoiko-tech-signage.png',
    alt: 'Zoiko Tech signage in an office corridor',
    eyebrow: 'Technology company',
    title: 'Zoiko Tech',
    description:
      'The technology company identified on this site as where ZoikoStream is built. Public copy about operation, ownership, or contracting must come from the approved corporate source.',
    ctaText: 'Explore Zoiko Tech →',
  },
  {
    image: '/images/operating-context/hero-zoikostream-building.png',
    alt: 'ZoikoStream signage on a modern glass office building',
    eyebrow: 'Streaming platform',
    title: 'ZoikoStream',
    description:
      'The video streaming platform customers, developers, and event teams use to build, operate, and deliver video experiences.',
    ctaText: 'Explore the platform →',
    href: '/platform-overview',
  },
  {
    image: '/images/operating-context/zoiko-cloud-office.png',
    alt: 'Zoiko Cloud signage on an office glass wall',
    eyebrow: 'Shared technology',
    title: 'Zoiko Cloud',
    description:
      'The shared cloud and infrastructure layer used to support eligible ZoikoStream services where applicable. A technology relationship, not a legal-entity label.',
    ctaText: 'Explore infrastructure →',
    href: '/platform-delivery-and-trust-overview',
  },
  {
    image: '/images/operating-context/live-events-crowd.png',
    alt: 'Audience filming a brightly lit live performance',
    eyebrow: 'Specialized capability',
    title: 'Live Events',
    description:
      'A specialized ZoikoStream capability for planning, producing, operating, and delivering live broadcasts and event-specific streaming experiences.',
    ctaText: 'Explore Live Events →',
    href: '/live-events-overview',
  },
];

export default function DefinitionsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Definitions
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            What each name means.
          </h2>

          <p className="max-w-3xl text-base leading-6 text-gray-500">
            Five canonical entities, each with a type, a concise role, and a
            destination &mdash; nothing more.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEFINITIONS.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 outline-zinc-200"
            >
              <div className="aspect-4/3 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase leading-5 tracking-wide text-indigo-500">
                  {item.eyebrow}
                </span>

                <h3 className="mt-3 text-xl font-bold leading-8 text-neutral-700">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-6 text-base font-semibold leading-6 text-blue-400 transition-colors hover:text-blue-500"
                  >
                    {item.ctaText}
                  </Link>
                ) : (
                  <span className="mt-6 text-base font-semibold leading-6 text-blue-400">
                    {item.ctaText}
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
