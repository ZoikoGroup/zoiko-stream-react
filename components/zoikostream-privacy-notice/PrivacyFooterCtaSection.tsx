import React from 'react';
import Link from 'next/link';

export default function PrivacyFooterCtaSection() {
  return (
    <section className="block md:hidden relative w-full bg-[#070b14] py-16 lg:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-teal-400 text-xs">▼</span>
          <span className="font-mono text-xs font-semibold tracking-wider text-teal-400 uppercase">
            DIRECT CONTACT
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug mb-3 max-w-3xl">
          Have a privacy question this notice didn&apos;t answer?
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
          Contact Privacy directly — no sales conversation required.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-sm sm:max-w-none">
          <a
            href="mailto:privacy@zoikostream.com"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] hover:opacity-95 text-[#06181f] font-semibold text-sm shadow-sm transition-all text-center cursor-pointer"
          >
            Contact Privacy
          </a>
          <Link
            href="/legal"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-800 shadow-sm transition-all text-center"
          >
            Back to Legal
          </Link>
        </div>
      </div>
    </section>
  );
}
