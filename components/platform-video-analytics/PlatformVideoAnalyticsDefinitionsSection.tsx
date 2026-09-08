import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import cardHeader0 from '@/public/images/platform-video-analytics/CardImageHeader.png';
import cardHeader1 from '@/public/images/platform-video-analytics/CardImageHeader (1).png';
import cardHeader2 from '@/public/images/platform-video-analytics/CardImageHeader (2).png';

const METRICS = [
  {
    image: cardHeader0,
    title: 'Concurrent Viewers (CCV)',
    badge: 'CURRENT',
    badgeStyle: 'bg-emerald-100 text-emerald-600',
    desc: 'The total number of active client play-head sessions polling chunk data within a 5-second window.',
    formula: 'Formula v2.4.1',
    unit: 'Active Sessions',
    scope: 'Direct program track only',
    freshness: '5-second update intervals',
  },
  {
    image: cardHeader1,
    title: 'Video Startup Time (VST)',
    badge: 'PARTIAL',
    badgeStyle: 'bg-amber-100 text-amber-600',
    desc: 'Duration in milliseconds from the initial guest play click to the render of the first keyframe.',
    formula: 'Formula v1.1.0',
    unit: 'Milliseconds (ms)',
    scope: 'Client player manifest only',
    freshness: 'Batch processed hourly',
  },
  {
    image: cardHeader2,
    title: 'Ingest Packet Loss Ratio',
    badge: 'REVIEW REQUIRED',
    badgeStyle: 'bg-red-100 text-red-600',
    desc: 'The percentage of stream packets dropped between the source encoder output and our cloud ingest node.',
    formula: 'Formula v3.0.2',
    unit: 'Percentage (%)',
    scope: 'Ingress SRT stream only',
    freshness: 'Real-time stream telemetry',
  },
];

export default function PlatformVideoAnalyticsDefinitionsSection() {
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
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
            Metric definitions you can trust
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk']">
            Every metric is definition-first: name, formula version, unit, scope, time semantics, freshness and privacy classification — before any value.
          </p>
        </div>

        {/* 3 Metric Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {METRICS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col justify-start items-start overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Header Image */}
              <div className="relative w-full h-36">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Body Content */}
              <div className="w-full p-6 flex flex-col justify-start items-start gap-4">
                <div className="w-full flex justify-between items-center gap-2">
                  <h3 className="flex-1 text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <div className={`px-2.5 py-1 rounded-full shrink-0 ${item.badgeStyle}`}>
                    <span className="text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <p className="w-full min-h-[56px] text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-5">
                  {item.desc}
                </p>

                <div className="w-full border-t border-slate-200 my-1" />

                {/* Parameters List */}
                <div className="w-full flex flex-col gap-2 text-xs font-['Space_Grotesk']">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-600">Formula</span>
                    <span className="text-zinc-950 font-bold">{item.formula}</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-600">Unit</span>
                    <span className="text-zinc-950 font-bold">{item.unit}</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-600">Scope</span>
                    <span className="text-zinc-950 font-bold">{item.scope}</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-600">Freshness</span>
                    <span className="text-zinc-950 font-bold">{item.freshness}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
