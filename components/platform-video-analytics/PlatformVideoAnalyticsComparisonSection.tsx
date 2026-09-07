import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export default function PlatformVideoAnalyticsComparisonSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* White Background Snippet */}
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
      <div className="size-96 -left-36 -top-20 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Video analytics vs stream monitoring
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Historical decision analytics and current operational health serve different questions. Know which tool answers yours.
          </p>
        </div>

        {/* 2 Column Comparison Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Video Analytics */}
          <div className="p-8 bg-slate-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col justify-start items-start gap-6 shadow-xs">
            <h3 className="w-full text-zinc-950 text-2xl font-bold font-['Space_Grotesk']">
              Video Analytics
            </h3>
            <div className="w-full border-t border-slate-200" />
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                  Primary Question
                </span>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  What happened and how did approved metrics behave over a defined scope and time?
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                  Time Semantics
                </span>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  Historical / reporting / compiled intervals
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                  Data Quality &amp; Freshness
                </span>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  Defined registry metrics, fully aggregated &amp; audited
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                  Typical Action
                </span>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  Understand macro trends, generate reports, query historical API
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Stream Monitoring */}
          <div className="p-8 bg-slate-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col justify-start items-start gap-6 shadow-xs">
            <h3 className="w-full text-zinc-950 text-2xl font-bold font-['Space_Grotesk']">
              Stream Monitoring
            </h3>
            <div className="w-full border-t border-slate-200" />
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                  Primary Question
                </span>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  What is the current operational health of a running media workflow?
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                  Time Semantics
                </span>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  Real-time active signals / live telemetry
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                  Data Quality &amp; Freshness
                </span>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  Unfiltered raw streams, real-time diagnostic flags
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                  Typical Action
                </span>
                <span className="text-slate-600 text-base font-normal font-['Space_Grotesk']">
                  Troubleshoot immediate source loss, trigger L1 failover paths
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Note */}
        <div className="w-full p-4 border-t border-slate-200 flex items-center gap-3">
          <div className="size-2 bg-blue-500 rounded-full shrink-0" />
          <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk']">
            When the question is current operational health, route to{' '}
            <strong className="text-zinc-950 font-bold">Stream monitoring</strong>. When the question is long-term trends or billing compliance, stay in{' '}
            <strong className="text-zinc-950 font-bold">Video analytics</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
