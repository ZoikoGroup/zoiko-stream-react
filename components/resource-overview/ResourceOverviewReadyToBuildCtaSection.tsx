import React from 'react';
import Link from 'next/link';

export default function ResourceOverviewReadyToBuildCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-28 bg-gray-900 border-t border-b border-gray-800 flex flex-col justify-start items-center gap-10 overflow-hidden text-center">
      <div className="size-96 -left-24 -top-24 absolute bg-teal-400/10 rounded-full blur-[50px] pointer-events-none" />
      <div className="size-96 left-[1140px] top-[219px] absolute bg-blue-500/10 rounded-full blur-[50px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-4">
        <h2 className="text-white text-4xl font-bold font-['Space_Grotesk'] leading-[48px]">
          Ready to build with ZoikoStream?
        </h2>
        <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-7">
          Use ZoikoStream resources to understand the platform, plan your implementation, and move from research to building with a clear technical path.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/signup"
          className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
        >
          Start building
        </Link>
        <Link
          href="/contact-us"
          className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
        >
          Talk to an expert
        </Link>
      </div>

      <p className="relative z-10 max-w-xl text-slate-500 text-xs font-normal font-['Inter']">
        Documentation, support, product updates, status, and trust resources remain available without a commercial conversation.
      </p>
    </section>
  );
}
