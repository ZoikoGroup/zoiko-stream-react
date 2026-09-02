import React from 'react';
import Link from 'next/link';

const STEPS = [
  {
    num: 1,
    title: 'Confirm developer access',
    description: 'Verify your account can create resources before writing anything.',
    linkText: 'Check access →',
    href: '/developer-access-page',
  },
  {
    num: 2,
    title: 'Obtain an approved credential',
    description: 'Get a credential and store it server-side, following Authentication guidance.',
    linkText: 'Read Authentication →',
    href: '/authentication',
  },
  {
    num: 3,
    title: 'Create or connect a media workflow',
    description: 'Use the authoritative surface — Live streaming API, VOD API, or a supported protocol.',
    linkText: 'Open VOD API →',
    href: '/developer-video-demand-api',
  },
  {
    num: 4,
    title: 'Obtain playback',
    description: 'Get the playback identifier or reference once the resource is ready.',
    linkText: 'Secure playback →',
    href: '/developer-secure-playback',
  },
  {
    num: 5,
    title: 'Observe current state',
    description: 'Confirm the media/stream state is fresh, not assumed.',
    linkText: 'View exact steps in Quickstart →',
    href: '/quick-start',
  },
];

export default function DevelopersSuccessPathSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            A CREDIBLE SUCCESS PATH
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Know the path before you copy the first command.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Exact commands, endpoint shapes, and credentials come from Quickstart, API Reference, and Authentication — not this overview.
        </p>
      </div>

      {/* Steps List */}
      <div className="w-full flex flex-col gap-6">
        {STEPS.map((s) => (
          <div
            key={s.num}
            className="w-full py-6 border-b border-gray-200 flex items-start gap-6"
          >
            <div className="size-11 bg-slate-100 rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex items-center justify-center shrink-0">
              <span className="text-zinc-900 text-base font-semibold font-['IBM_Plex_Mono']">
                {s.num}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              <h3 className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-relaxed">
                {s.description}
              </p>
              <div className="pt-1">
                <Link
                  href={s.href}
                  className="text-blue-500 hover:text-blue-600 text-sm font-normal font-['Inter'] transition-colors"
                >
                  {s.linkText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-4">
        <Link
          href="/quick-start"
          className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-slate-950 text-base font-semibold font-['Inter']">
            Open Quickstart
          </span>
        </Link>
        <Link
          href="/developers-overview"
          className="px-7 py-3.5 bg-zinc-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 hover:bg-zinc-200 transition-colors"
        >
          <span className="text-zinc-900 text-base font-semibold font-['Inter']">
            Error handling
          </span>
        </Link>
      </div>
    </section>
  );
}
