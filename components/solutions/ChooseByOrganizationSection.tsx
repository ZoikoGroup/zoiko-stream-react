'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface OrganizationPath {
  code: string;
  title: string;
  description: string;
  href: string;
}

const ORGANIZATION_PATHS: OrganizationPath[] = [
  {
    code: 'DP',
    title: 'Developers and product teams',
    description:
      'Build and operate video inside a product with clear implementation and support paths.',
    href: '/solutions/developers',
  },
  {
    code: 'EN',
    title: 'Enterprises',
    description:
      'Run secure, governed, resilient video across organizational workflows.',
    href: '/solutions/enterprises',
  },
  {
    code: 'MC',
    title: 'Media and communications',
    description:
      'Contribute, produce, distribute, understand, and preserve professional media workflows.',
    href: '/solutions/media-communications',
  },
  {
    code: 'ED',
    title: 'Education',
    description:
      'Support accessible, controlled, and replayable learning or institutional broadcasts.',
    href: '/solutions/education',
  },
  {
    code: 'FC',
    title: 'Faith and community',
    description:
      'Deliver respectful, accessible, and manageable community broadcasts and archives.',
    href: '/solutions/faith-community',
  },
  {
    code: 'PC',
    title: 'Public and civic institutions',
    description:
      'Operate accountable public-facing or controlled broadcasts with accessibility and continuity requirements.',
    href: '/solutions/public-civic',
  },
];

export default function ChooseByOrganizationSection() {
  return (
    <section className="w-full bg-slate-100 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-8">
        <div className="flex max-w-2xl flex-col gap-4 pb-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="font-['IBM_Plex_Mono'] text-xs font-normal uppercase tracking-wide text-blue-500">
              CHOOSE BY ORGANIZATION
            </span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Which context resembles yours?
          </h2>

          <p className="font-['Space_Grotesk'] text-base font-normal leading-relaxed text-gray-500 sm:text-lg">
            Operating context and requirements - not industry stereotypes or assumed scale.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          {ORGANIZATION_PATHS.map((item) => (
            <div
              key={item.code}
              className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-1 items-start gap-4 sm:items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-gray-200 bg-slate-100 font-['Space_Grotesk'] text-base font-bold text-blue-500">
                  {item.code}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="font-['Space_Grotesk'] text-sm font-normal leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>

              <Link
                href={item.href}
                className="inline-flex shrink-0 items-center gap-1.5 font-['Inter'] text-sm font-semibold text-blue-500 transition-colors group-hover:text-blue-600 sm:self-center"
              >
                <span>Explore this path</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
