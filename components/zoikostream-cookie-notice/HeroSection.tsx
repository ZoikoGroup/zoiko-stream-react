import React from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      {/* Mobile-Only Design Demonstration Warning Banner (strictly md:hidden so desktop is 100% untouched) */}
      <div className="block md:hidden w-full bg-[#fef7e0] border-b border-amber-200/90 py-3.5 px-4 text-left">
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-950 leading-relaxed font-normal">
            Design demonstration: this page shows the required structure and interaction pattern for a cookie notice. The category definitions, technology inventory, and durations below are illustrative examples pending Legal, Privacy, and Engineering verification — not a live, approved disclosure.
          </p>
        </div>
      </div>

      <section className="relative w-full overflow-hidden bg-[#0c101a] md:bg-gradient-to-br md:from-[#1b1236] md:via-[#101935] md:to-[#0d3b40] text-white pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 border-b border-slate-800/80">
        {/* Subtle radial glow accents - desktop only */}
        <div 
          className="hidden md:block absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none -z-0" 
          aria-hidden="true" 
        />
        <div 
          className="hidden md:block absolute bottom-0 right-1/4 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl pointer-events-none -z-0" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="font-mono text-xs font-semibold tracking-wider text-indigo-300 uppercase">
            COOKIE NOTICE
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight mb-5 max-w-4xl">
          Understand cookies and manage available privacy choices.
        </h1>

        {/* Description */}
        <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
          Review the current source-approved disclosure of cookies and similar technologies for the published ZoikoStream website context. Technology records, purposes, providers, durations, and choice behavior are shown only when current and technically verified.
        </p>

        {/* Metadata Pills Bar */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 text-[11px] font-mono">
          <div className="bg-[#092224]/80 border border-teal-500/40 text-teal-300 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="text-teal-400">State:</span> Current (illustrative)
          </div>
          <div className="bg-slate-900/80 border border-slate-700/80 text-slate-300 px-3.5 py-1.5 rounded-full shadow-sm">
            Version 1.0
          </div>
          <div className="bg-slate-900/80 border border-slate-700/80 text-slate-300 px-3.5 py-1.5 rounded-full shadow-sm">
            Effective: Aug 1, 2026
          </div>
          <div className="bg-slate-900/80 border border-slate-700/80 text-slate-300 px-3.5 py-1.5 rounded-full shadow-sm">
            Last reviewed: Aug 28, 2026
          </div>
          <div className="bg-slate-900/80 border border-slate-700/80 text-slate-300 px-3.5 py-1.5 rounded-full shadow-sm">
            Context: Website (zoikostream.com)
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
          <a
            href="#manage-preferences"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#60a5fa] hover:opacity-95 text-[#06181f] font-semibold text-sm shadow-md transition-all duration-150 cursor-pointer"
          >
            Manage cookie preferences
          </a>
          <Link
            href="/privacy"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm shadow-sm transition-all duration-150"
          >
            Read Privacy notice
          </Link>
        </div>
      </div>
    </section>

    {/* Mobile-Only "ON THIS PAGE" quick jump menu (strictly md:hidden to preserve desktop 100%) */}
    <nav
      aria-label="On this page quick links"
      className="block md:hidden w-full bg-[#f4f7fb] py-6 px-4 sm:px-6 border-b border-slate-200/90 text-left"
    >
      <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
        ON THIS PAGE ·
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-600">
        <a href="#what-this-covers" className="hover:text-blue-600 transition-colors">
          What this covers
        </a>
        <a href="#categories-and-choices" className="hover:text-blue-600 transition-colors">
          Categories &amp; choices
        </a>
        <a href="#cookie-inventory" className="hover:text-blue-600 transition-colors">
          Technology inventory
        </a>
        <a href="#activation-works" className="hover:text-blue-600 transition-colors">
          How activation works
        </a>
        <a href="#manage-preferences" className="hover:text-blue-600 transition-colors">
          Manage preferences
        </a>
        <a href="#browser-signals" className="hover:text-blue-600 transition-colors">
          Browser signals
        </a>
        <a href="#changes-history" className="hover:text-blue-600 transition-colors">
          Changes &amp; history
        </a>
        <div className="flex items-center gap-3">
          <a href="#related-policies" className="hover:text-blue-600 transition-colors">
            Related policies
          </a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">
            FAQ
          </a>
        </div>
      </div>
    </nav>
  </>
  );
}
