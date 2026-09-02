import React from 'react';
import Link from 'next/link';

const OPERATE_DESTINATIONS = [
  {
    num: '01',
    title: 'Analytics API',
    description: 'Operational and audience metrics.',
    href: '/developer-analytics-api',
    action: 'Open →',
    span: 'col-span-1',
  },
  {
    num: '02',
    title: 'Stream monitoring',
    description: 'Observe stream health and performance in production, before viewers notice a problem.',
    href: '/developer-stream-monitoring',
    action: 'Open →',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    num: '03',
    title: 'Recording and assets',
    description: 'Manage stored media lifecycle — capture, readiness, replay, and retention.',
    href: '#recording-lifecycle',
    action: 'View below →',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-2',
  },
  {
    num: '04',
    title: 'Error handling',
    description: 'Codes, retries, guidance.',
    href: '/developers-overview',
    action: 'Open →',
    span: 'col-span-1',
  },
  {
    num: '05',
    title: 'Rate limits',
    description: 'Published ceilings and throttling.',
    href: '/developers-rate-limits',
    action: 'Open →',
    span: 'col-span-1',
  },
  {
    num: '06',
    title: 'Changelog',
    description: 'What changed, and when.',
    href: '/developers-changelog',
    action: 'Open →',
    span: 'col-span-1',
  },
  {
    num: '07',
    title: 'System status',
    description: 'Current operational status.',
    href: '/developers-system-status',
    action: 'Open →',
    span: 'col-span-1',
  },
];

export default function DevelopersOperateMapSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            OPERATE
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          A working stream is the beginning of production.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Teams need measurement, health, stored-media lifecycle, failure guidance, limits, change history, and authoritative status.
        </p>
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {OPERATE_DESTINATIONS.map((item, index) => (
          <div
            key={index}
            className={`p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between gap-4 hover:border-violet-500/50 transition-all ${item.span}`}
          >
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono']">
                  {item.num}
                </span>
                <span className="px-2.5 py-1 bg-violet-50 rounded-full text-violet-600 text-[9px] font-normal font-['IBM_Plex_Mono']">
                  Current
                </span>
              </div>

              <h3 className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div>
              <Link
                href={item.href}
                className="text-violet-500 hover:text-violet-600 text-xs font-semibold font-['Inter'] inline-flex items-center gap-1 transition-colors"
              >
                {item.action}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
