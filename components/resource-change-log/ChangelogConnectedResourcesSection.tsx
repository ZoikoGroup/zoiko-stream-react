import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img14 from '@/public/images/resources-changelog/Card-Image (5).png';
import img1 from '@/public/images/resources-changelog/Card-Image (6).png';
import img2 from '@/public/images/resources-changelog/Card-Image (7).png';
import img3 from '@/public/images/resources-changelog/Card-Image (8).png';
import img4 from '@/public/images/resources-changelog/Card-Image (9).png';
import img5 from '@/public/images/resources-changelog/Card-Image (10).png';

const RESOURCES = [
  {
    title: 'Developer Documentation',
    description: 'Integrate continuous interactive streaming directly into web apps.',
    href: '/developer-documentation',
    image: img14,
  },
  {
    title: 'API Reference',
    description: 'Full schema spec references with complete query templates.',
    href: '/api-reference',
    image: img1,
  },
  {
    title: 'SDK Downloads',
    description: 'Acquire latest packages for iOS, Android, and Web Player structures.',
    href: '/sdks',
    image: img2,
  },
  {
    title: 'System Status',
    description: 'Real-time pipeline latency metrics and API service availability.',
    href: '/resource-system-status',
    image: img3,
  },
  {
    title: 'Security & Trust Center',
    description: 'Verify compliance reports, cryptographic configurations, and SSO logs.',
    href: '/resources',
    image: img4,
  },
  {
    title: 'Release Notes',
    description: 'High-level feature reviews and outcome roadmap plans.',
    href: '/resources',
    image: img5,
  },
];

export default function ChangelogConnectedResourcesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Connected Resources
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Access contextual documentation pipelines and developer platforms directly linked to this change ledger.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {RESOURCES.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-5 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-gray-200">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-bold font-['Space_Grotesk'] transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
