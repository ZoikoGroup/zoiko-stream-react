import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import section6Bg from '@/public/images/resource-developer-documentation/section-6bg.png';

import cardImg12 from '@/public/images/resource-developer-documentation/CardImage (17).png';
import cardImg13 from '@/public/images/resource-developer-documentation/CardImage (18).png';
import cardImg20 from '@/public/images/resource-developer-documentation/CardImage (19).png';
import cardImg21 from '@/public/images/resource-developer-documentation/CardImage (20).png';
import cardImg22 from '@/public/images/resource-developer-documentation/CardImage (21).png';
import cardImg0 from '@/public/images/resource-developer-documentation/CardImage (22).png';

const OPERATIONS = [
  {
    title: 'Analytics API',
    desc: 'Query viewer engagement, playback quality, and usage metrics.',
    cta: 'Explore API',
    href: '/developer-analytics-api',
    image: cardImg12,
  },
  {
    title: 'Stream monitoring',
    desc: 'Real-time health, bitrate, latency, and connection monitoring.',
    cta: 'View docs',
    href: '/developer-stream-monitoring',
    image: cardImg13,
  },
  {
    title: 'Recording & assets',
    desc: 'Manage recorded stream outputs and media asset lifecycle.',
    cta: 'View docs',
    href: '/recording-replay',
    image: cardImg20,
  },
  {
    title: 'Error handling',
    desc: 'Error codes, messages, recovery patterns, and safe retry behavior.',
    cta: 'View reference',
    href: '#errors',
    image: cardImg21,
  },
  {
    title: 'Rate limits',
    desc: 'Published rate windows, scopes, and throttle recovery.',
    cta: 'View limits',
    href: '#rate-limits',
    image: cardImg22,
  },
  {
    title: 'Changelog',
    desc: 'Implementation-level change history, deprecations, and migrations.',
    cta: 'View changes',
    href: '/changelog',
    image: cardImg0,
  },
];

export default function ResourceDeveloperDocumentationOperateSurfacesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image */}
      {section6Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section6Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Operate surfaces
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Monitor, diagnose, and manage your running media workflows.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OPERATIONS.map((op, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-all group"
          >
            <div className="relative w-full h-32 bg-gray-950 overflow-hidden">
              <Image
                src={op.image}
                alt={op.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk'] leading-7">
                {op.title}
              </h3>

              <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-6">
                {op.desc}
              </p>

              <Link
                href={op.href}
                className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 mt-auto pt-2 transition-colors"
              >
                {op.cta} <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
