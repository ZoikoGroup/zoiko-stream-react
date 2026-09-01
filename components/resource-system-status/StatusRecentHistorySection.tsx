import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const AVAILABILITY_DATA = [
  {
    name: 'Video Ingest API',
    percentage: '99.98% availability',
    barsCount: 45,
    faultIndex: 32,
    faultColor: 'bg-red-500',
  },
  {
    name: 'Live Playback CDN',
    percentage: '100.00% availability',
    barsCount: 45,
    faultIndex: -1,
    faultColor: '',
  },
  {
    name: 'Real-Time Analytics',
    percentage: '99.95% availability',
    barsCount: 45,
    faultIndex: 18,
    faultColor: 'bg-amber-500',
  },
  {
    name: 'Authentication Gateway',
    percentage: '100.00% availability',
    barsCount: 45,
    faultIndex: -1,
    faultColor: '',
  },
];

const PREVIOUS_EVENTS = [
  {
    date: 'Aug 26, 2026',
    type: 'INCIDENT',
    typeBg: 'bg-amber-500/10 text-amber-600 outline-amber-500/30',
    title: 'Intermittent webhook delivery delays',
    status: 'Resolved',
  },
  {
    date: 'Aug 18, 2026',
    type: 'MAINTENANCE',
    typeBg: 'bg-blue-500/10 text-blue-600 outline-blue-500/30',
    title: 'API Gateway micro-patch deployment',
    status: 'Completed',
  },
  {
    date: 'Aug 12, 2026',
    type: 'INCIDENT',
    typeBg: 'bg-amber-500/10 text-amber-600 outline-amber-500/30',
    title: 'Brief ingestion latency spike in AP-East region',
    status: 'Resolved',
  },
  {
    date: 'Aug 02, 2026',
    type: 'MAINTENANCE',
    typeBg: 'bg-blue-500/10 text-blue-600 outline-blue-500/30',
    title: 'CDN SSL Certificate rollover window',
    status: 'Completed',
  },
  {
    date: 'Jul 28, 2026',
    type: 'INCIDENT',
    typeBg: 'bg-amber-500/10 text-amber-600 outline-amber-500/30',
    title: 'Real-time query timeout issues in console dashboard',
    status: 'Resolved',
  },
];

export default function StatusRecentHistorySection() {
  return (
    <section id="recent-history" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-10 sm:gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Recent history
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Operational reporting — not a contractual SLA. Measurement methodology disclosed.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="relative z-10 w-full flex flex-wrap items-center gap-3">
        <button className="px-4 py-2 bg-blue-600 rounded-full text-white text-xs font-bold font-['Space_Grotesk']">
          All Activities
        </button>
        <button className="px-4 py-2 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 text-xs font-bold font-['Space_Grotesk'] hover:bg-slate-50 transition-colors">
          Only Incidents
        </button>
        <button className="px-4 py-2 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 text-xs font-bold font-['Space_Grotesk'] hover:bg-slate-50 transition-colors">
          Only Maintenance
        </button>
        <span className="ml-auto text-slate-600 text-xs font-bold font-['Space_Grotesk'] cursor-pointer">
          Range: Past 90 days ▾
        </span>
      </div>

      {/* 90-Day System Availability Card */}
      <div className="relative z-10 w-full p-6 sm:p-8 bg-white/90 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
        <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
          90-Day System Availability
        </h3>

        <div className="w-full flex flex-col justify-start items-start gap-6">
          {AVAILABILITY_DATA.map((service, idx) => (
            <div key={idx} className="w-full flex flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                  {service.name}
                </span>
                <span className="text-emerald-600 text-sm font-normal font-['Inter']">
                  {service.percentage}
                </span>
              </div>

              {/* Ticks Container */}
              <div className="w-full h-5 flex justify-start items-center gap-0.5 sm:gap-1">
                {Array.from({ length: service.barsCount }).map((_, bIdx) => {
                  const isFault = bIdx === service.faultIndex;
                  return (
                    <div
                      key={bIdx}
                      className={`flex-1 h-full rounded-xs ${
                        isFault ? service.faultColor : 'bg-emerald-500'
                      }`}
                    />
                  );
                })}
              </div>

              <div className="w-full flex justify-between items-center text-slate-500 text-xs font-normal font-['Inter']">
                <span>90 days ago</span>
                <span>Today</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Events Table */}
      <div className="relative z-10 w-full p-4 sm:p-6 bg-white/90 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start shadow-sm overflow-x-auto">
        <div className="min-w-[600px] w-full flex flex-col">
          <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] mb-4 p-2">
            Previous Events
          </h3>

          {PREVIOUS_EVENTS.map((event, idx) => (
            <div
              key={idx}
              className="w-full py-4 border-b border-gray-200 flex justify-start items-center gap-5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="w-28 text-slate-600 text-sm font-normal font-['Inter'] shrink-0">
                {event.date}
              </div>
              <div className="w-28 flex justify-start items-center shrink-0">
                <div className={`px-2.5 py-1 rounded-full outline outline-1 outline-offset-[-1px] ${event.typeBg}`}>
                  <span className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="flex-1 text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {event.title}
              </div>
              <div className="w-24 text-right text-emerald-600 text-sm font-normal font-['Inter'] font-medium shrink-0">
                {event.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
