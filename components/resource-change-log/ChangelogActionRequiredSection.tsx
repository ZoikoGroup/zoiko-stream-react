import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import cardImg0 from '@/public/images/resources-changelog/Card-Image.png';
import cardImg1 from '@/public/images/resources-changelog/Card-Image (1).png';

const ACTIONS = [
  {
    badge: 'ACTION REQUIRED',
    category: 'Webhooks / Platform',
    title: 'Legacy Webhook HMAC-SHA1 Deprecation',
    description:
      'Complete transition of all verification endpoints to HMAC-SHA256 signatures to preserve continuous security compliance.',
    href: '#migration-guide',
    image: cardImg0,
  },
  {
    badge: 'ACTION REQUIRED',
    category: 'RTMP & SRT Ingest API',
    title: 'v2.1 Ingestion Endpoints Sunset',
    description:
      'V2 ingest schemas are being decomissioned. Route production feeds to the newer v3 schemas supporting zero-fallback protocols.',
    href: '#migration-guide',
    image: cardImg1,
  },
];

export default function ChangelogActionRequiredSection() {
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
          Action Required
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          The following deprecations require manual code changes or SDK updates before the upcoming deprecation deadlines to avoid transaction failures.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACTIONS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-center">
                <span className="text-red-500 text-xs font-bold font-['Inter'] uppercase tracking-wide">
                  {item.badge}
                </span>
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  {item.category}
                </span>
              </div>

              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>

              <div className="w-full pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  <span>View Migration Guide</span>
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
