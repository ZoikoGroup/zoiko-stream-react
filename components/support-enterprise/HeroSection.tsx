'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070b14] text-white pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 border-b border-slate-800/60">
      {/* Background Circuit Grid */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/Enterprise Page/se-bg1.png"
          alt="Circuit Grid Background"
          fill
          priority
          className="object-cover object-bottom opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/60 via-transparent to-[#070b14]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-teal-500/40 bg-teal-950/50 backdrop-blur-sm mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-teal-300 uppercase">
                ENTERPRISE SUPPORT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] mb-6">
              Get the right support for your ZoikoStream organization
            </h1>

            {/* Subtext */}
            <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Start with your organization and support need. ZoikoStream routes you to the correct support authority and asks only for the context needed to continue.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#access-matrix"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#27c3a7] hover:bg-[#22b298] text-[#06181f] font-semibold text-sm transition-all duration-150 shadow-[0_4px_16px_rgba(39,195,167,0.25)] hover:shadow-[0_6px_22px_rgba(39,195,167,0.35)]"
              >
                Start Enterprise Support
              </Link>
              <Link
                href="/faqs-and-support"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0e1422] hover:bg-slate-800/80 text-white font-semibold text-sm border border-slate-300/80 transition-all duration-150 shadow-sm"
              >
                Visit Help Center
              </Link>
            </div>
          </div>

          {/* Right Column: Support Bridge Widget */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-2xl bg-[#0c1322]/90 backdrop-blur-xl border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-5 sm:p-6 overflow-hidden">
              {/* Header Row */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-slate-300 tracking-wider uppercase">
                    ZOIKOSTREAM SUPPORT BRIDGE
                  </span>
                </div>
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                  ROUTING ENGINE ACTIVE
                </span>
              </div>

              {/* Status Rows */}
              <div className="space-y-3 mb-4 text-xs">
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-300 font-medium">Organization Verified</span>
                  <span className="font-mono text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                    SUCCESS
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-300 font-medium">Active L1 Incident Path</span>
                  <span className="font-mono text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                    READY
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-300 font-medium">Secure Key Validation</span>
                  <span className="font-mono text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                    ENABLED
                  </span>
                </div>
              </div>

              {/* Tablet Graphic */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80">
                <Image
                  src="/images/Enterprise Page/se1.png"
                  alt="ZoikoStream Support Bridge Telemetry"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
