import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export function MakeTimeExplicitSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Make time explicit.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Every analytics result is bounded by a strict time model. The API contract determines accepted ranges, timezone behavior, bucket granularity, and data inclusion rules.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Card 1: Query Time Window Configuration */}
          <div className="lg:col-span-7 p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-950 text-lg font-bold font-mono">
              Query Time Window Configuration
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-slate-600 text-xs font-bold font-mono uppercase">
                  Date Range &amp; Target Timezone
                </span>
                <div className="p-3.5 bg-white rounded-lg border border-gray-200 flex justify-between items-center font-mono text-sm text-slate-950">
                  <span>March 01, 2026 00:00:00 — March 15, 2026 23:59:59 (UTC-05:00)</span>
                  <span className="text-slate-600">📅</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-slate-600 text-xs font-bold font-mono uppercase">
                  Bucket Granularity
                </span>
                <div className="p-3.5 bg-white rounded-lg border border-gray-200 flex justify-between items-center font-mono text-sm text-slate-950">
                  <span>1h (Hourly Buckets — Timezone Aligned)</span>
                  <span className="text-slate-600">▾</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="flex flex-col">
                  <span className="text-slate-950 text-sm font-bold font-mono">
                    Compare to Historical Period
                  </span>
                  <span className="text-slate-600 text-xs">
                    Superimposes matching weekday shift offset
                  </span>
                </div>
                <div className="w-12 h-7 p-0.5 bg-teal-400 rounded-full flex justify-end items-center cursor-pointer">
                  <div className="w-6 h-6 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Trailing Bucket Completeness */}
          <div className="lg:col-span-5 p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-950 text-lg font-bold font-mono">
              Trailing Bucket Completeness
            </h3>
            <p className="text-slate-600 text-sm leading-5">
              The newest time bucket in a query response is marked{' '}
              <strong className="text-slate-950 font-bold font-mono">incomplete: true</strong> until all edge servers have dispatched their telemetry buffers.
            </p>

            <div className="p-4 bg-white rounded-lg border border-gray-200 flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-600">10:00 AM</span>
                <span className="text-slate-600">11:00 AM</span>
                <span className="text-teal-400">12:00 PM (NOW)</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded overflow-hidden flex">
                <div className="w-4/5 h-2 bg-blue-500" />
                <div className="w-1/5 h-2 bg-teal-400/40" />
              </div>
              <p className="text-slate-600 text-xs leading-4">
                ✓ Previous hourly buckets verified immutable. Trailing bucket resolves dynamically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
