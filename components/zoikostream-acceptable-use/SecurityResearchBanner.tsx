import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SecurityResearchBanner() {
  return (
    <section className="relative w-full bg-white py-10 lg:py-14 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="bg-[#f0fdfa] border border-teal-300/80 rounded-2xl p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            Security research is not treated as abuse
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-5xl mb-4">
            Good-faith security research performed consistent with ZoikoStream&apos;s Vulnerability Disclosure Policy is not a violation of this Acceptable Use Policy, even where it would otherwise resemble prohibited access-testing conduct. If you&apos;re researching ZoikoStream&apos;s security, use the responsible-disclosure route rather than this misuse report form.
          </p>
          <Link
            href="/responsible-disclosure"
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Read the Vulnerability Disclosure Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
