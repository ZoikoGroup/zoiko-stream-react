import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import enterpriseImg from '@/public/images/pricing-developer-access/enterprise-section image.png';

export default function PricingDeveloperAccessQuoteScopedSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-100 flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      <div className="w-full bg-white rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs">
        {/* Left Side: Image Column */}
        <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[360px] lg:h-auto min-h-[300px] bg-gray-900 overflow-hidden">
          {enterpriseImg && (
            <Image
              src={enterpriseImg}
              alt="Quote-scoped Enterprise Work"
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-r from-blue-500/30 to-violet-500/25" />
        </div>

        {/* Right Side: Content Column */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center items-start gap-6">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-[3px]" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              QUOTE-SCOPED WORK
            </span>
          </div>

          <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
            Need volume, custom terms, or an architecture review?
          </h2>

          <p className="text-gray-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
            For requirements beyond the standard self-service path — high-volume commitments, custom contractual terms, or a bespoke architecture review — talk with our team. Documentation and this page&apos;s public estimate remain available either way.
          </p>

          <div className="pt-2">
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity inline-block text-center"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
