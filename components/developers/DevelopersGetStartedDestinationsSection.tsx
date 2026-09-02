import React from 'react';
import Link from 'next/link';

const DESTINATIONS = [
  {
    num: '01',
    title: 'Developers overview',
    description: 'You are here — the orientation hub for everything below.',
    isHere: true,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    num: '02',
    title: 'Documentation',
    description: 'Concepts, guides, and troubleshooting.',
    href: '/developer-documentation',
    span: 'col-span-1',
  },
  {
    num: '03',
    title: 'Quickstart',
    description: 'The shortest path to a working stream.',
    href: '/quick-start',
    span: 'col-span-1',
  },
  {
    num: '04',
    title: 'API Reference',
    description: 'Exact endpoints, fields, and contracts — the authoritative schema source for everything you build.',
    href: '/developer-api-reference',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-2',
  },
  {
    num: '05',
    title: 'Authentication',
    description: 'Credential and token mechanics.',
    href: '/authentication',
    span: 'col-span-1',
  },
  {
    num: '06',
    title: 'Developer access',
    description: 'Check your current access state.',
    href: '/developer-access-page',
    span: 'col-span-1',
  },
  {
    num: '07',
    title: 'Sample applications',
    description: 'Full working examples across common integration paths.',
    href: '/sample-application',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
];

export default function DevelopersGetStartedDestinationsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            GET STARTED
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
          Know the model before you write code.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Seven destinations, in order — orientation-level only. Technical detail lives on the destination itself.
        </p>
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {DESTINATIONS.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between gap-4 transition-all ${
              item.isHere ? 'bg-slate-200/60' : 'bg-white hover:border-blue-500/50'
            } ${item.span}`}
          >
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono']">
                  {item.num}
                </span>
                {item.isHere ? (
                  <span className="px-2.5 py-1 bg-gray-200 rounded-full text-gray-600 text-[9px] font-normal font-['IBM_Plex_Mono']">
                    Current page
                  </span>
                ) : (
                  <span className="px-2.5 py-1 bg-emerald-50 rounded-full text-teal-600 text-[9px] font-normal font-['IBM_Plex_Mono']">
                    Current
                  </span>
                )}
              </div>

              <h3 className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>

            {!item.isHere && item.href && (
              <div>
                <Link
                  href={item.href}
                  className="text-blue-500 hover:text-blue-600 text-xs font-semibold font-['Inter'] inline-flex items-center gap-1 transition-colors"
                >
                  Open →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
