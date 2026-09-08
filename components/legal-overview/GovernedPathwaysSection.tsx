import React from 'react';
import Link from 'next/link';

export default function GovernedPathwaysSection() {
  return (
    <section className="w-full bg-[#FAFAFC] px-6 sm:px-12 lg:px-20 py-12 lg:py-16 border-b border-slate-200">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#0D6EFD] text-xs font-mono uppercase tracking-wide font-medium">
              THREE DISTINCT GOVERNED PATHWAYS
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Acceptable use, accessibility &amp; trademarks.
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
            <h3 className="text-slate-900 text-base font-semibold font-['Space_Grotesk'] leading-6">
              Acceptable use
            </h3>
            <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
              Approved rules for what is and isn&apos;t permitted when using ZoikoStream services.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
            <h3 className="text-slate-900 text-base font-semibold font-['Space_Grotesk'] leading-6">
              Accessibility statement
            </h3>
            <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
              Our public accessibility statement — a statement of commitment and current state, not a conformance guarantee for every surface.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
            <h3 className="text-slate-900 text-base font-semibold font-['Space_Grotesk'] leading-6">
              Trademark guidelines
            </h3>
            <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
              Approved guidance before using ZoikoStream names, marks, or logos — review before assuming permission.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <p className="text-slate-600 text-xs font-normal font-['Inter']">
            Need accessibility help rather than the statement itself?{' '}
            <Link href="#" className="font-semibold text-[#0D6EFD] hover:underline">
              Get accessibility help →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
