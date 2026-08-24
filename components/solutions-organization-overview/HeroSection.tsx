import React from 'react';
import Image from 'next/image';

import bg146 from '@/public/images/Organization-overview/bg (146).png';
import { ShieldCheckIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg146}
          alt="Organization Overview Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8">
        <div className="flex flex-col gap-7 max-w-4xl">
          <div className="inline-flex">
            <span className="px-3.5 py-1.5 rounded-full border border-teal-400 text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              SOLUTIONS BY ORGANIZATION
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Find the ZoikoStream path that fits how your organization operates.
          </h1>

          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed">
            Choose by operating context and requirements, not by product taxonomy, company size, or a hidden recommendation score.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Explore organization paths
            </button>
            <button
              type="button"
              className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
            >
              I am not sure where to start
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-gray-800 my-2" />

        <div className="flex items-center gap-3 text-sm">
          <ShieldCheckIcon className="size-5"/>
           
          <div>
            <span className="text-white font-bold font-['Inter']">You choose the context.</span>{' '}
            <span className="text-slate-400 font-normal font-['Inter']">
              ZoikoStream does not infer it from your identity, domain, location, or browsing behavior.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
