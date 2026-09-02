import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import img1 from '@/public/images/developers/section7image (1).png';
import img2 from '@/public/images/developers/section7image (2).png';
import img3 from '@/public/images/developers/section7image (3).png';

const CATEGORIES = [
  {
    title: 'Live streaming',
    description: 'One-to-many live media workflows.',
    image: img1,
    href: '/live-streaming-api',
  },
  {
    title: 'Real-time contribution',
    description: 'Contribution and interactivity, where supported and verified.',
    image: img2,
    href: '/developer-media-protocol',
  },
  {
    title: 'Video on demand',
    description: 'Stored and uploaded media lifecycle.',
    image: img3,
    href: '/developer-video-demand-api',
  },
];

const PIPELINE = [
  { step: 'Contribute', desc: 'Source enters' },
  { step: 'Ingest', desc: 'Received' },
  { step: 'Produce', desc: 'Prepared' },
  { step: 'Secure', desc: 'Protected' },
  { step: 'Deliver', desc: 'Distributed' },
  { step: 'Understand', desc: 'Observed' },
  { step: 'Preserve', desc: 'Retained' },
];

export default function DevelopersTaxonomySection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            NO TAXONOMY CONFUSION
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Live, real-time, and on-demand — the product job, not the mechanics.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          A mixed workflow can use more than one category. Choose by what you&apos;re building, not by API name.
        </p>
      </div>

      {/* 3 Category Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, index) => (
          <div
            key={index}
            className="relative h-80 rounded-2xl overflow-hidden group shadow-md"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 to-zinc-950/90" />

            <div className="relative z-10 p-6 flex flex-col justify-end h-full gap-2">
              <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                {cat.title}
              </h3>
              <p className="text-white/80 text-xs font-normal font-['Inter'] leading-relaxed">
                {cat.description}
              </p>
              <div className="pt-1">
                <Link
                  href={cat.href}
                  className="text-teal-400 hover:text-teal-300 text-xs font-semibold font-['Inter'] transition-colors"
                >
                  Explore →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline Stepper Banner */}
      <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 overflow-x-auto py-4">
        {PIPELINE.map((p, idx) => (
          <React.Fragment key={idx}>
            <div className="min-w-[130px] p-4 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-1 shrink-0">
              <span className="text-zinc-900 text-xs font-bold font-['Space_Grotesk']">
                {p.step}
              </span>
              <span className="text-gray-500 text-xs font-normal font-['Inter']">
                {p.desc}
              </span>
            </div>
            {idx < PIPELINE.length - 1 && (
              <span className="text-neutral-300 text-xs font-normal font-['Inter'] shrink-0">
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
