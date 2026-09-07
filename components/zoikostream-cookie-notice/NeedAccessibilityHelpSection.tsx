import React from 'react';
import Link from 'next/link';

export default function NeedAccessibilityHelpSection() {
  return (
    <section className="relative w-full bg-[#f0f4f8] py-16 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-600 uppercase">
            IF SOMETHING DOESN&apos;T WORK
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
          Settings not saving, or need accessibility help?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-6">
          If your preferences fail to save, your previous safe setting remains in effect — nothing silently defaults to &quot;accept all.&quot;
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/support-help-center"
            className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold shadow-sm transition-all"
          >
            Get help with cookie settings
          </Link>
          <Link
            href="/accessibility"
            className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold shadow-sm transition-all"
          >
            Accessibility help
          </Link>
        </div>
      </div>
    </section>
  );
}
