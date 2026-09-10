import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import section16Bg from '@/public/images/live-events-plan-a-live-event/section-16bg.png';

export function BottomCtaSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-24 sm:py-28 bg-slate-950 text-white overflow-hidden text-center border-t border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section16Bg}
          alt="Bottom CTA Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[800px] mx-auto space-y-6 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-100 leading-tight">
          Start with the decisions that matter.
        </h2>

        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
          Begin the structured planning process now. No payment details or technical specifications required to initialize your brief.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#start-plan"
            className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
          >
            Start event plan
          </Link>

          <Link
            href="/talk-to-an-expert"
            className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 text-slate-100 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800/50 transition-colors"
          >
            Talk to an expert
          </Link>
        </div>

        <p className="text-zinc-400 text-xs sm:text-sm font-normal font-['Space_Grotesk'] leading-relaxed pt-2">
          Free collaborative reviews align scope transparently beforehand. No commitment necessary.
        </p>
      </div>
    </section>
  );
}
