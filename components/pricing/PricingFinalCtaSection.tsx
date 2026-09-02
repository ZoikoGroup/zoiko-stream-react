import React from 'react';
import Link from 'next/link';

export default function PricingFinalCtaSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-zinc-950 flex flex-col justify-center items-center text-center gap-8 overflow-hidden z-10">
      {/* Radial Teal Overlay */}
      <div className="absolute inset-0 bg-radial-[at_15%_20%] from-teal-400/20 to-teal-400/0 to 55% pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center gap-4 max-w-2xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Sora'] leading-tight">
          Ready to scope your event?
        </h2>

        <p className="text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed">
          We&apos;ll review your event scope summary and follow up to discuss commercial fit — this does not create a contract or charge.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 pt-2">
        <Link
          href="#scope-builder"
          className="px-7 py-3.5 bg-gradient-to-r from-teal-300 to-blue-400 rounded-[10px] text-gray-800 text-base font-semibold font-['Inter'] hover:opacity-90 transition-opacity text-center"
        >
          Request event quote
        </Link>
        <Link
          href="/resource-guides"
          className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/40 text-white text-base font-semibold font-['Inter'] hover:bg-white/10 transition-colors text-center"
        >
          Live Events planning guide
        </Link>
      </div>
    </section>
  );
}
