'use client';

import React from 'react';
import Link from 'next/link';

export default function NoticeDetailViewSection() {
  return (
    <section className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Full service update detail view
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-4xl leading-relaxed">
            Every notice carries canonical identity, lifecycle state, source-governed timing, expected impact, and append-only change history.
          </p>
        </div>

        {/* Detailed Service Notice Card */}
        <div className="bg-[#f8fafc] rounded-2xl border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-sm max-w-5xl mx-auto text-slate-900">
          {/* Top Breadcrumb & Badge Row */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="font-mono text-xs text-slate-500">
              Service Updates &gt; SU-2026-0914-001
            </span>
            <span className="font-mono text-[9px] font-bold text-teal-600 bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 rounded tracking-wider uppercase shrink-0">
              SCHEDULED
            </span>
          </div>

          {/* Main Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">
            Streaming Infrastructure Maintenance — US-East Region
          </h3>

          {/* Blue Info Banner Box */}
          <div className="bg-blue-50/90 border border-blue-200/80 rounded-xl p-4 mb-6 flex items-center gap-2.5 text-xs text-blue-900 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
            <p>
              No active incidents related to this update. Check the{' '}
              <Link href="/zoikostream-status" className="font-bold underline hover:text-blue-700">
                System status
              </Link>{' '}
              for live health.
            </p>
          </div>

          {/* 2 Column Timing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Scheduled Window */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-sm">
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                SCHEDULED WINDOW (UTC)
              </span>
              <p className="text-xs text-slate-700 font-medium font-mono">
                Start: Sep 14, 2026 02:00 UTC
              </p>
              <p className="text-xs text-slate-700 font-medium font-mono mt-1">
                End: Sep 14, 2026 06:00 UTC
              </p>
            </div>

            {/* Local Time Conversion */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-sm">
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                YOUR LOCAL TIME (EDT CONVERSION)
              </span>
              <p className="text-xs font-bold text-slate-900 font-mono">
                Sep 13, 10:00 PM – Sep 14, 2:00 AM EDT
              </p>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Derived automatically based on browser locale
              </span>
            </div>
          </div>

          {/* 2 Column Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                  AFFECTED SCOPE
                </span>
                <p className="text-xs font-medium text-slate-800">
                  Live Streaming API &bull; Ingest Gateway &bull; US-East Region
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                  CHANGE HISTORY
                </span>
                <ul className="space-y-1 text-xs text-slate-600 font-mono">
                  <li>&bull; Published: Aug 29, 2026</li>
                  <li>&bull; Window Confirmed: Sep 1, 2026</li>
                  <li>&bull; Scope Narrowed: Sep 5, 2026</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                  SUMMARY
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Planned maintenance on US-East streaming infrastructure including ingest gateway and origin servers.
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                  EXPECTED IMPACT &amp; ACTIONS
                </span>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  Potential brief interruption to ingest connections. Viewer playback unaffected via CDN.
                </p>
                <p className="text-xs font-medium text-slate-800 leading-relaxed">
                  <span className="font-bold">Customer Action:</span> Schedule ingest failover to US-West during maintenance window if continuous streaming is required.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Authority Links Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-blue-600 pt-6 border-t border-slate-200">
            <span className="font-mono text-xs text-slate-500 mr-2 shrink-0">
              Authority Links:
            </span>
            <Link href="/zoikostream-status" className="hover:underline">
              System Status
            </Link>
            <Link href="/zoikostream-status" className="hover:underline">
              Changelog
            </Link>
            <Link href="/developer-documentation" className="hover:underline">
              Developer Documentation
            </Link>
            <Link href="/faqs-and-support" className="hover:underline">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
