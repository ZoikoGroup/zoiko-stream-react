import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import img1 from '@/public/images/pricing-developer-access/section-3image (1).png';
import img2 from '@/public/images/pricing-developer-access/section-3image (2).png';
import img3 from '@/public/images/pricing-developer-access/section-3image (3).png';
import img4 from '@/public/images/pricing-developer-access/section-3image (4).png';
import img5 from '@/public/images/pricing-developer-access/section-3image (5).png';

const CAPABILITIES = [
  {
    title: 'Live streaming',
    badge: 'Self-service eligible',
    image: img1,
    gradient: 'from-fuchsia-500/50 to-blue-500/25',
    href: '/live-streaming-api',
  },
  {
    title: 'Video on demand',
    badge: 'Self-service eligible',
    image: img2,
    gradient: 'from-blue-500/50 to-violet-500/20',
    href: '/developer-video-demand-api',
  },
  {
    title: 'Secure playback',
    badge: 'Self-service eligible',
    image: img3,
    gradient: 'from-teal-600/50 to-blue-500/20',
    href: '/developer-secure-playback',
  },
  {
    title: 'Events / webhooks',
    badge: 'Self-service eligible',
    image: img4,
    gradient: 'from-violet-500/40 to-blue-500/25',
    href: '/webhooks',
  },
  {
    title: 'Analytics / operations',
    badge: 'Self-service eligible',
    image: img5,
    gradient: 'from-blue-500/50 to-teal-600/20',
    href: '/developer-analytics-api',
  },
];

export default function PricingDeveloperAccessRoutingSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-100 flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            ROUTING, NOT A PRICING GRID
          </span>
        </div>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
          Choose how you want to build.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Cards route to the authoritative technical destination for each capability family — a documentation page existing doesn&apos;t by itself imply public pricing or inclusion, and vice versa.
        </p>
      </div>

      {/* 5 Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {CAPABILITIES.map((cap, idx) => (
          <Link
            key={idx}
            href={cap.href}
            className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden flex flex-col justify-between h-56 hover:shadow-lg transition-all group"
          >
            {/* Image Box */}
            <div className="relative w-full h-28 bg-gray-900 overflow-hidden">
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 mix-blend-multiply bg-gradient-to-r ${cap.gradient}`} />
            </div>

            {/* Bottom Content */}
            <div className="p-4 flex flex-col justify-center gap-1.5 flex-1">
              <h3 className="text-zinc-900 text-xs font-bold font-['Inter']">
                {cap.title}
              </h3>
              <span className="text-teal-600 text-[10px] font-normal font-['IBM_Plex_Mono']">
                {cap.badge}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
