import React from 'react';
import Link from 'next/link';

const SURFACES = [
  {
    num: '01',
    title: 'SDKs',
    description: 'Idiomatic language wrappers around the underlying APIs.',
    href: '/developer-sdk',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    num: '02',
    title: 'Live streaming API',
    description: 'Create and manage live streams.',
    href: '/live-streaming-api',
    span: 'col-span-1',
  },
  {
    num: '03',
    title: 'Video-on-demand API',
    description: 'Upload, process, and deliver on-demand assets — full lifecycle from source to playback.',
    href: '/developer-video-demand-api',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-2',
  },
  {
    num: '04',
    title: 'Media protocols',
    description: 'Transport-level contribution.',
    href: '/developer-media-protocol',
    span: 'col-span-1',
  },
  {
    num: '05',
    title: 'Webhooks and events',
    description: 'React to async state changes.',
    href: '/webhooks',
    span: 'col-span-1',
  },
  {
    num: '06',
    title: 'Secure playback',
    description: 'Access-policy mechanics.',
    href: '/developer-secure-playback',
    span: 'col-span-1',
  },
  {
    num: '07',
    title: 'Player integration',
    description: 'Embed and SDK player options.',
    href: '/developer-player-integrations',
    span: 'col-span-1',
  },
];

export default function DevelopersBuildSurfacesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            BUILD
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Choose the right developer surface.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Use the surface that matches the job — verify exact versions, protocols, and mechanics in the authoritative destination. Surfaces can be combined.
        </p>
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {SURFACES.map((item, index) => (
          <div
            key={index}
            className={`p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between gap-4 hover:border-blue-500/50 transition-all ${item.span}`}
          >
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono']">
                  {item.num}
                </span>
                <span className="px-2.5 py-1 bg-emerald-50 rounded-full text-teal-600 text-[9px] font-normal font-['IBM_Plex_Mono']">
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
                className="text-blue-500 hover:text-blue-600 text-xs font-semibold font-['Inter'] inline-flex items-center gap-1 transition-colors"
              >
                Open →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
