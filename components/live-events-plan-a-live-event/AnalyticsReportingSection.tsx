import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import analyticsImg from '@/public/images/live-events-plan-a-live-event/section-12 image.png';

export function AnalyticsReportingSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden">
      {/* Required White Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-slate-950 leading-tight">
            Analytics &amp; Reporting Intent
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Declare analytics and reporting needs at the category level. Aggregate and purpose-bound — no named metrics, dashboard deliverables, or identifiable viewer tracking.
          </p>
        </div>

        {/* Image & Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src={analyticsImg}
              alt="Telemetry & Analytics"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-slate-950 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-snug">
              Target operational telemetry early
            </h3>
            <p className="text-slate-600 text-base font-normal font-['Space_Grotesk'] leading-relaxed">
              Outline aggregate viewer statistics, post-event infrastructure reports, and custom corporate data exports up front. Keep metrics strictly functional to align resources correctly while protecting individual viewer privacy.
            </p>
            <div>
              <Link
                href="#reporting"
                className="inline-block px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                Configure reporting categories
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
