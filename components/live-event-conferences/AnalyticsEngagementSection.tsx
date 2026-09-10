import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import imgChart from '@/public/images/live-event-conferences/Rectangle (11).png';

export function AnalyticsEngagementSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden border-b border-gray-200">
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-96 -left-35 -top-22 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-zinc-950 leading-tight lg:leading-[60.8px]">
            Conference Analytics &amp; Reporting
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Establish session and track analytics at the category level. Measure engagement across global regions with zero compliance delays.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Chart Card */}
          <div className="lg:col-span-6 p-8 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-6 shadow-sm">
            <div className="w-full inline-flex justify-between items-center">
              <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
                Ingress Traffic &amp; Observers
              </h3>
              <div className="px-2 py-1 bg-teal-500/10 rounded-md">
                <span className="text-teal-500 text-xs font-bold font-['Space_Grotesk']">
                  LIVE REPORTING
                </span>
              </div>
            </div>

            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src={imgChart}
                alt="Ingress Traffic Chart"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full grid grid-cols-3 gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] uppercase">
                  Peak Concurrent Observers
                </span>
                <span className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
                  14,250
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] uppercase">
                  Avg. Session Watch Time
                </span>
                <span className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
                  38.5m
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] uppercase">
                  DVR Scrubs Per Minute
                </span>
                <span className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
                  840
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-zinc-950 text-2xl font-bold font-['Space_Grotesk']">
                Comprehensive Rollups, No Lag
              </h3>
              <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-7">
                Bypass hours of painful data processing. The system aggregates viewer engagement metrics, CDN bandwidth spikes, and audio/caption usage instantly at the close of every session.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-teal-500/10 rounded-[10px] flex justify-center items-center shrink-0">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                </div>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  Audit logs tracing regional access approvals.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-teal-500/10 rounded-[10px] flex justify-center items-center shrink-0">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                </div>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  Detailed stream quality reports mapping latency targets.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-teal-500/10 rounded-[10px] flex justify-center items-center shrink-0">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                </div>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  VOD package downloads mapped with text transcripts.
                </span>
              </div>
            </div>

            <Link
              href="/platform-video-analytics"
              className="px-6 py-3.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-[10px] text-slate-900 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              Explore analytics suites
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
