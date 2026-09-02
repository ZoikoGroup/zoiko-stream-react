import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bgLast from '@/public/images/developers/lastsection-bg.jpg';

export default function DevelopersNextStepCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-zinc-950 border-b border-gray-800 flex flex-col items-center gap-14 overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgLast}
          alt="Choose Next Step Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/75 to-zinc-950/95" />
      </div>

      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 justify-center">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            CHOOSE YOUR NEXT STEP
          </span>
        </div>

        <h2 className="text-slate-100 text-3xl sm:text-4xl lg:text4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[54px]">
          Choose the next step that matches <br className="hidden sm:inline" />
          where you are.
        </h2>

        <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
          Documentation and operational evidence remain available without submitting a sales form.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {/* Card 1 */}
        <div className="p-6 bg-linear-51 from-teal-400/10 to-teal-400/0 rounded-2xl outline outline-1 outline-offset-[-1px] outline-teal-400 flex flex-col justify-between items-center gap-6 shadow-lg">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-slate-100 text-sm font-bold font-['Space_Grotesk']">
              Start building
            </h3>
            <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
              Go straight to the <br /> Quickstart.
            </p>
          </div>
          <Link
            href="/quick-start"
            className="w-full py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity"
          >
            Start building
          </Link>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between items-center gap-6 shadow-md">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-slate-100 text-sm font-bold font-['Space_Grotesk']">
              Read documentation
            </h3>
            <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
              Explore concepts and <br /> guides first.
            </p>
          </div>
          <Link
            href="/developer-documentation"
            className="w-full py-3.5 rounded-[10px] outline outline-1 outline-gray-800 text-zinc-900 bg-white hover:bg-gray-100 text-base font-semibold font-['Inter'] transition-colors"
          >
            Read docs
          </Link>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between items-center gap-6 shadow-md">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-slate-100 text-sm font-bold font-['Space_Grotesk']">
              Operate an integration
            </h3>
            <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
              Support and status for <br /> existing builds.
            </p>
          </div>
          <Link
            href="/faqs-and-support"
            className="w-full py-3.5 bg-zinc-100 rounded-[10px] text-zinc-900 text-base font-semibold font-['Inter'] hover:bg-zinc-200 transition-colors"
          >
            Get support
          </Link>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-between items-center gap-6 shadow-md">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-slate-100 text-sm font-bold font-['Space_Grotesk']">
              Discuss a bespoke need
            </h3>
            <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
              For enterprise or <br /> architecture review.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="w-full py-3.5 rounded-[10px] outline outline-1 outline-gray-800 text-white hover:bg-white/5 text-base font-semibold font-['Inter'] transition-colors"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
