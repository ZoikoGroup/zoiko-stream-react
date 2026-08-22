import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const outcomes = [
  {
    num: '01',
    title: 'Video platform foundation',
    desc: 'Core capabilities for ingest, management, processing, delivery, and playback.',
    linkText: 'Platform overview →',
    href: '/platform-overview',
    badgeBg: 'bg-blue-500',
    image: '/images/zoiko-tech/Broadcast.png',
  },
  {
    num: '02',
    title: 'Live streaming & Live Events',
    desc: 'Technology and workflows for real-time and event-scale experiences.',
    linkText: 'Live Events overview →',
    href: '/live-events',
    badgeBg: 'bg-teal-400',
    image: '/images/zoiko-tech/Camera.png',
  },
  {
    num: '03',
    title: 'Developer platform',
    desc: 'APIs, documentation, integrations, and developer-facing workflows.',
    linkText: 'Developers →',
    href: '/sdks',
    badgeBg: 'bg-indigo-500',
    image: '/images/zoiko-tech/Code editor.png',
  },
  {
    num: '04',
    title: 'Reliability & operations',
    desc: 'Production stewardship, controlled change, service health, and resilience practices.',
    linkText: 'System Status / Trust Center →',
    href: '/faqs-and-support',
    badgeBg: 'bg-violet-500',
    image: '/images/zoiko-tech/Monitoring.png',
  },
  {
    num: '05',
    title: 'Security & privacy by design',
    desc: 'Governed controls and data-handling practices integrated into the platform lifecycle.',
    linkText: 'Trust Center / Privacy →',
    href: '/platform-media-security',
    badgeBg: 'bg-slate-600',
    image: '/images/zoiko-tech/Digital.png',
  },
];

export default function PlatformOutcomesSection() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold     uppercase tracking-wider">
              Platform outcomes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold     text-slate-900">
            What Zoiko Tech stewards.
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal     leading-relaxed max-w-3xl">
            Platform outcomes, not a feature checklist or architecture spec.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((out, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow group"
            >
              <div className="flex flex-col gap-5">
                <div className="relative w-full h-56 bg-slate-100">
                  <Image
                    src={out.image}
                    alt={out.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute bottom-3 left-4 size-8 ${out.badgeBg} rounded-lg flex items-center justify-center text-white text-xs font-bold     shadow-sm`}
                  >
                    {out.num}
                  </div>
                </div>

                <div className="px-6 flex flex-col gap-2">
                  <h3 className="text-slate-900 text-lg font-bold    ">
                    {out.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal     leading-relaxed">
                    {out.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-4">
                <Link
                  href={out.href}
                  className="text-blue-600 text-sm font-semibold     group-hover:underline"
                >
                  {out.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
