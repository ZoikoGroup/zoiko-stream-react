import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import card28 from '@/public/images/resource-videotutorial/card-image (31).png';
import card29 from '@/public/images/resource-videotutorial/card-image (28).png';
import relatedSection from '@/public/images/resource-videotutorial/card-image (29).png';

const UPDATED_ITEMS = [
  {
    updated: 'UPDATED AUG 2026',
    duration: '10 min',
    title: 'Secure Token Playback v2',
    description:
      'Revised for the new token validation API with simplified DRM integration and quick configuration blueprints.',
    image: card28,
  },
  {
    updated: 'UPDATED JUL 2026',
    duration: '16 min',
    title: 'Enterprise Governance Controls',
    description:
      'Updated to reflect new multi-tenant isolation and regional delivery options compliant with internal operational standards.',
    image: card29,
  },
  {
    updated: 'UPDATED JUL 2026',
    duration: '14 min',
    title: 'Stream Health Dashboard Refresh',
    description:
      'New alert configuration workflow and expanded analytics API coverage for real-time performance tracking.',
    image: relatedSection,
  },
];

export default function VideoTutorialRecentlyUpdatedSection() {
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
      <div className="size-[520px] left-[1068px] top-[483px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Recently updated tutorials.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk']">
          Meaningful content updates only — not cosmetic edits or metadata refreshes.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {UPDATED_ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-40 bg-slate-200 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-center">
                <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full">
                  <span className="text-emerald-600 text-xs font-bold font-['Space_Grotesk']">
                    {item.updated}
                  </span>
                </div>
                <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk']">
                  {item.duration}
                </span>
              </div>

              <h3 className="text-slate-950 text-lg font-bold font-['Space_Grotesk'] line-clamp-1">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5 line-clamp-3">
                {item.description}
              </p>

              <div className="w-full pt-3 border-t border-gray-200 flex justify-start items-start">
                <Link
                  href="#watch"
                  className="text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  Watch tutorial →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
