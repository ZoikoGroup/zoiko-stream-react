import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import cardImg14 from '@/public/images/resource-developer-documentation/image.png';
import cardImg15 from '@/public/images/resource-developer-documentation/CardImage (9).png';
import cardImg16 from '@/public/images/resource-developer-documentation/CardImage (10).png';
import cardImg9 from '@/public/images/resource-developer-documentation/CardImage (11).png';
import cardImg10 from '@/public/images/resource-developer-documentation/CardImage (12).png';
import cardImg11 from '@/public/images/resource-developer-documentation/CardImage (13).png';

const SURFACES = [
  {
    title: 'Live streaming API',
    desc: 'Create, manage, and control live streams with full lifecycle coverage.',
    cta: 'Explore API',
    href: '/live-streaming-api',
    image: cardImg14,
  },
  {
    title: 'Video-on-demand API',
    desc: 'Upload, transcode, manage, and deliver recorded video assets.',
    cta: 'Explore API',
    href: '/developer-video-demand-api',
    image: cardImg15,
  },
  {
    title: 'Media protocols',
    desc: 'RTMP, SRT, WebRTC, and HLS protocol specifications and requirements.',
    cta: 'View protocols',
    href: '/developer-media-protocol',
    image: cardImg16,
  },
  {
    title: 'Webhooks & events',
    desc: 'Subscribe to lifecycle, state, and operational events.',
    cta: 'View events',
    href: '/webhooks',
    image: cardImg9,
  },
  {
    title: 'Secure playback',
    desc: 'Token-based access, signed URLs, and domain restrictions.',
    cta: 'View guide',
    href: '/developer-secure-playback',
    image: cardImg10,
  },
  {
    title: 'Player integration',
    desc: 'Embed, configure, and customize the ZoikoStream player.',
    cta: 'View docs',
    href: '/developer-player-integration',
    image: cardImg11,
  },
];

export default function ResourceDeveloperDocumentationBuildSurfacesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 pt-24 pb-14 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Build surfaces
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Route to the right API, protocol, or integration point for your implementation.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SURFACES.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative w-full h-32 bg-gray-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk'] leading-7">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-6">
                {item.desc}
              </p>

              <Link
                href={item.href}
                className="text-blue-700 hover:text-blue-800 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 mt-auto pt-2 transition-colors"
              >
                {item.cta} <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
