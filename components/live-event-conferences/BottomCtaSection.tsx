import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bgSection16 from '@/public/images/live-event-conferences/section-16bg (2).png';

export function BottomCtaSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-24 sm:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgSection16}
          alt="Bottom CTA Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[800px] mx-auto text-center flex flex-col items-center justify-start gap-6">
        
        {/* Title */}
        <h2 className="w-full text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60.8px]">
          Start with the sessions, speakers, and structure that matter.
        </h2>

        {/* Subtitle */}
        <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          No initial billing details. Run through our operational checklist with zero commitments.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/live-events-plan-a-live-event"
            className="px-6 py-3.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-[10px] text-slate-900 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
          >
            Plan a live event
          </Link>
          <Link
            href="/resource-live-events-planning-guide"
            className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 text-slate-100 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800/60 transition-colors"
          >
            Open planning guide
          </Link>
        </div>

      </div>
    </section>
  );
}
