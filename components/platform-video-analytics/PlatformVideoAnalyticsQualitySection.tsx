import React from 'react';
import Image from 'next/image';
import { Clock, Video, Users, Sliders } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import scopeColImg from '@/public/images/platform-video-analytics/ScopeColumnImage.png';
import statesGraphImg from '@/public/images/platform-video-analytics/StatesGraphImage.png';

const FILTERS = [
  {
    icon: Clock,
    title: 'Time Range',
    desc: 'Select source-supported periods such as real-time active or custom billing durations.',
  },
  {
    icon: Video,
    title: 'Media Context',
    desc: 'Isolate metric values according to live SRT feeds or static asset transcoder inputs.',
  },
  {
    icon: Users,
    title: 'Audience Segment',
    desc: 'Track views strictly within privacy-approved, enterprise whitelist aggregate definitions.',
  },
  {
    icon: Sliders,
    title: 'Applied Scope Summary',
    desc: 'Review persistent and visible parameters at the header level of every metric chart.',
  },
];

const QUALITY_STATES = [
  {
    badge: 'CURRENT',
    badgeStyle: 'bg-emerald-100 text-emerald-600',
    desc: 'Data processing up to date within target limits.',
  },
  {
    badge: 'PROCESSING',
    badgeStyle: 'bg-blue-500/10 text-blue-500',
    desc: 'Real-time events currently routing through index layers.',
  },
  {
    badge: 'PARTIAL',
    badgeStyle: 'bg-amber-100 text-amber-600',
    desc: 'Awaiting final batch correction for secondary metrics.',
  },
  {
    badge: 'DELAYED',
    badgeStyle: 'bg-amber-100/50 text-amber-700',
    desc: 'Source latency exceeding expected 5-second interval.',
  },
  {
    badge: 'CORRECTED',
    badgeStyle: 'bg-purple-100 text-violet-600',
    desc: 'Value revised post-stream to account for local dropouts.',
  },
  {
    badge: 'UNAVAILABLE',
    badgeStyle: 'bg-gray-100 text-gray-500',
    desc: 'Source stream does not support formula parameters.',
  },
  {
    badge: 'RESTRICTED',
    badgeStyle: 'bg-red-100 text-red-600',
    desc: 'Privacy settings prevent viewing selected dimensions.',
  },
  {
    badge: 'REVIEW REQUIRED',
    badgeStyle: 'bg-gray-200 text-gray-900',
    desc: 'Formula conflict detected on custom telemetry keys.',
  },
];

export default function PlatformVideoAnalyticsQualitySection() {
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
            Scope, freshness and data quality
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk']">
            Persistent applied-scope summary ensures every metric retains its denominator, time semantics, and quality state.
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Applied Scope & Filters */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
              Applied Scope &amp; Filters
            </h3>
            <div className="w-full p-6 bg-slate-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col gap-5">
              <div className="relative w-full h-44 rounded-xl overflow-hidden">
                <Image
                  src={scopeColImg}
                  alt="Applied Scope Visual"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                {FILTERS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="w-full p-4 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center gap-4"
                    >
                      <div className="size-9 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
                        <Icon className="size-4" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                          {item.title}
                        </span>
                        <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Data Quality States */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
              Data Quality States
            </h3>
            <div className="w-full p-6 bg-slate-50/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col gap-5">
              <div className="relative w-full h-36 rounded-lg overflow-hidden">
                <Image
                  src={statesGraphImg}
                  alt="Data Quality States Visual"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3">
                {QUALITY_STATES.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center gap-3"
                  >
                    <div className={`px-2.5 py-1 rounded-full shrink-0 ${item.badgeStyle}`}>
                      <span className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                    <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
