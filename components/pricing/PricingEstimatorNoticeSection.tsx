import React from 'react';
import Link from 'next/link';

export default function PricingEstimatorNoticeSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 bg-slate-50 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-5xl bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 p-8 sm:p-12 flex flex-col justify-center items-center text-center gap-6 shadow-xs">
        <h2 className="text-gray-800 text-xl sm:text-2xl font-bold font-['Sora'] leading-snug max-w-2xl">
          No public Live Events estimator is currently published.
        </h2>

        <p className="text-gray-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed max-w-2xl">
          ZoikoStream does not currently publish a calculator for Live Events pricing. Event commercial scope — including any amount, package, or inclusion — is determined individually once your event scope has been reviewed by the Live Events team.
        </p>

        <div className="pt-2">
          <Link
            href="#scope-builder"
            className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 text-gray-800 text-base font-semibold font-['Inter'] hover:bg-slate-200 transition-colors inline-block text-center"
          >
            Request event quote
          </Link>
        </div>
      </div>
    </section>
  );
}
