import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 pt-16 pb-12 md:pt-20 md:pb-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="font-mono text-xs font-semibold tracking-wider text-blue-700 uppercase">
            LEGAL · ACCEPTABLE USE
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 tracking-tight leading-tight mb-4">
          Acceptable Use Policy
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mb-10">
          This policy explains how ZoikoStream may be used responsibly, the current scope of that expectation, and how to report suspected misuse or a security concern. It works alongside the Terms of Service and does not replace them.
        </p>

        {/* Metadata Bar */}
        <div className="py-4 border-t border-b border-slate-200/80 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-mono text-slate-600">
          <div>
            <span className="text-slate-400 font-normal">Status:</span>{' '}
            <span className="font-semibold text-slate-800">Current</span>
          </div>
          <div>
            <span className="text-slate-400 font-normal">Version:</span>{' '}
            <span className="font-semibold text-slate-800">3.2</span>
          </div>
          <div>
            <span className="text-slate-400 font-normal">Effective:</span>{' '}
            <span className="font-semibold text-slate-800">Aug 1, 2026</span>
          </div>
          <div>
            <span className="text-slate-400 font-normal">Last reviewed:</span>{' '}
            <span className="font-semibold text-slate-800">Aug 2026</span>
          </div>
          <div>
            <span className="text-slate-400 font-normal">Scope:</span>{' '}
            <span className="font-semibold text-slate-800">All ZoikoStream accounts and services</span>
          </div>
        </div>

        {/* Mobile-Only Action Buttons (strictly hidden on desktop with md:hidden) */}
        <div className="flex md:hidden flex-col items-start gap-3 mt-6">
          <a
            href="#rule-details"
            className="w-full sm:w-auto inline-flex items-center justify-start px-5 py-3 rounded-xl bg-gradient-to-r from-[#4de0d6] to-[#60a5fa] hover:opacity-95 text-[#06181f] font-semibold text-sm shadow-sm transition-all"
          >
            Review acceptable use rules
          </a>
          <a
            href="#report-misuse"
            className="w-full sm:w-auto inline-flex items-center justify-start px-5 py-3 rounded-xl bg-white border border-slate-700/80 hover:bg-slate-50 text-slate-900 font-semibold text-sm shadow-sm transition-all"
          >
            Report suspected misuse
          </a>
          <a
            href="/responsible-disclosure"
            className="w-full sm:w-auto inline-flex items-center justify-start px-5 py-3 rounded-xl bg-white border border-slate-700/80 hover:bg-slate-50 text-slate-900 font-semibold text-sm shadow-sm transition-all"
          >
            Responsible disclosure
          </a>
        </div>
      </div>
    </section>
  );
}
