import React from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";

export default function VideoAnalyticsReportingSection() {
  return (
    <section className="relative w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Topographic/Contour Wave Overlay */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-[38px] font-bold tracking-tight text-slate-950 mb-2">
            Video analytics & post-event reporting
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Current metrics and report capabilities — no invented KPIs
          </p>
        </div>

        {/* 3 Columns Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-base font-bold text-slate-950 mb-3">
              Event performance
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Track actual concurrent viewers, aggregate stream play duration,
              geographical distribution logs, and peak load bandwidth parameters
              precisely.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-base font-bold text-slate-950 mb-3">
              Viewer & QoS metrics
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Analyze player load delays, connection buffer ratios, frame drop
              metrics, and system level Quality of Service logs matching
              absolute privacy boundaries.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-base font-bold text-slate-950 mb-3">
              Executive reporting
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Receive a structured post-event PDF summary outlining physical
              hardware, connectivity, and transmission metrics vetted directly
              by engineering leads.
            </p>
          </div>
        </div>

        {/* Warning Alert Banner */}
        <div className="rounded-xl border border-red-200/80 bg-red-50/50 p-4 flex items-center gap-3 mb-10">
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Engagement, reach, and ROI claims require exact evidence — no
            fabricated post-event dashboards.
          </p>
        </div>

        {/* Action Links & Button Row */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-500 hover:underline"
          >
            <span>Video analytics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-500 hover:underline"
          >
            <span>Analytics API</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-colors"
          >
            Request custom report template
          </button>
        </div>
      </div>
    </section>
  );
}
