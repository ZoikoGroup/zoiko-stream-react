import React from 'react';
import Image from 'next/image';

import card45 from '@/public/images/Broadcast-globally/Rectangle (111).png';
import card46 from '@/public/images/Broadcast-globally/Rectangle (112).png';

export default function OperatorHealthTelemetrySection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            How operators know the broadcast is healthy and viewers can watch
          </h2>
        </div>

        {/* Telemetry Panel Container */}
        <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <span className="text-slate-900 text-base font-bold  ">
              LIVE TELEMETRY PANEL
            </span>
            <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold   rounded">
              REAL-TIME
            </span>
          </div>

          {/* 4 Metric Gauges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-50 rounded-lg border border-gray-200 flex flex-col gap-2">
              <span className="text-slate-500 text-xs font-bold   tracking-wider">
                SOURCE BITRATE
              </span>
              <span className="text-slate-900 text-2xl font-bold  ">
                8.4 Mbps
              </span>
              <span className="text-emerald-500 text-xs font-normal  ">
                ● Optimal
              </span>
            </div>

            <div className="p-5 bg-slate-50 rounded-lg border border-gray-200 flex flex-col gap-2">
              <span className="text-slate-500 text-xs font-bold   tracking-wider">
                BUFFERING RATE
              </span>
              <span className="text-slate-900 text-2xl font-bold  ">
                0.12%
              </span>
              <span className="text-emerald-500 text-xs font-normal  ">
                ● 0.08% target
              </span>
            </div>

            <div className="p-5 bg-slate-50 rounded-lg border border-gray-200 flex flex-col gap-2">
              <span className="text-slate-500 text-xs font-bold   tracking-wider">
                CONCURRENT VIEWERS
              </span>
              <span className="text-slate-900 text-2xl font-bold  ">
                1.42 Million
              </span>
              <span className="text-emerald-500 text-xs font-normal  ">
                ● Peak load
              </span>
            </div>

            <div className="p-5 bg-slate-50 rounded-lg border border-gray-200 flex flex-col gap-2">
              <span className="text-slate-500 text-xs font-bold   tracking-wider">
                TRANSCODE LAUNCH
              </span>
              <span className="text-slate-900 text-2xl font-bold  ">
                12ms
              </span>
              <span className="text-emerald-500 text-xs font-normal  ">
                ● Active
              </span>
            </div>
          </div>

          {/* 2 Detail Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-gray-200 flex items-center gap-5">
              <div className="relative size-24 bg-slate-200 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={card45}
                  alt="Real-Time Quality of Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-base font-bold  ">
                  Real-Time Quality of Experience
                </h3>
                <p className="text-slate-600 text-xs font-normal   leading-relaxed">
                  Direct client-side SDK pings measure actual startup delay, pixel quality degradation, and drop-packet rates.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-gray-200 flex items-center gap-5">
              <div className="relative size-24 bg-slate-200 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={card46}
                  alt="Aggregate Geodemographics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-base font-bold  ">
                  Aggregate Geodemographics
                </h3>
                <p className="text-slate-600 text-xs font-normal   leading-relaxed">
                  Pinpoint edge node stress zones through geo-located telemetry loops without sacrificing individual user privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
