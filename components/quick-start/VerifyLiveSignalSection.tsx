import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Activity, RefreshCw, CheckCircle, Search, Globe, HelpCircle } from 'lucide-react';

const healthMetrics = [
  { label: 'Status Indicator', val: 'Receiving / Live', cls: 'text-emerald-500 font-bold' },
  { label: 'Observed-Through', val: 'March 20, 2026 13:04:12 UTC', cls: 'text-slate-900 font-bold' },
  { label: 'Telemetry Health', val: 'Telemetry verified successfully.', cls: 'text-emerald-500 font-bold' },
  { label: 'Critical Warn States', val: 'WARNING: No fallback configured.', cls: 'text-amber-500 font-bold' },
];

const safeActions = [
  { title: 'Refresh / Re-read State', icon: RefreshCw },
  { title: 'Verify Source Handshake', icon: CheckCircle },
  { title: 'Inspect Telemetry Console', icon: Search },
  { title: 'Check Global Edge Status', icon: Globe },
];

export function VerifyLiveSignalSection() {
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Verify Live Signal and Ingest Truth
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Always consult real telemetry records, not assuming connection quality based on status code outputs.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Card: Real-Time Ingest Health */}
          <div className="p-8 bg-slate-50/90 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-slate-600" />
              <span className="text-slate-600 text-sm font-bold tracking-wide uppercase">
                REAL-TIME INGEST HEALTH
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {healthMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white rounded-lg border border-gray-200 flex justify-between items-center shadow-2xs"
                >
                  <span className="text-slate-600 text-xs font-normal">{item.label}</span>
                  <span className={`text-sm ${item.cls}`}>{item.val}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="px-7 py-3.5 bg-slate-900 rounded-lg flex justify-center items-center cursor-pointer hover:bg-slate-800 transition-colors w-fit">
                <span className="text-white text-base font-bold">Prepare Playback</span>
              </div>
            </div>
          </div>

          {/* Right Card: Safe Console Actions */}
          <div className="p-8 bg-slate-50/90 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <span className="text-slate-600 text-sm font-bold tracking-wide uppercase">
              SAFE CONSOLE ACTIONS
            </span>

            <div className="flex flex-col gap-3">
              {safeActions.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-lg border border-gray-200 flex items-center gap-3 shadow-2xs cursor-pointer hover:border-gray-300 transition-colors"
                  >
                    <IconComponent className="w-4 h-4 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-900 text-sm font-bold">{item.title}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <span className="text-slate-600 text-xs font-normal">Still stuck with ingest failures?</span>
              <div className="flex items-center gap-1.5 text-blue-500 text-xs font-bold underline cursor-pointer hover:text-blue-600">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Contact Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
