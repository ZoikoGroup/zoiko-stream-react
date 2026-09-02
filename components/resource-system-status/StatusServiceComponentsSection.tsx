import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const COMPONENTS = [
  {
    name: 'Video Ingest API',
    type: 'Core Delivery API',
    status: 'Operational',
  },
  {
    name: 'Live Playback CDN',
    type: 'Ultra-Low Latency Edge',
    status: 'Operational',
  },
  {
    name: 'On-Demand Transcoding',
    type: 'Media Processing Worker',
    status: 'Operational',
  },
  {
    name: 'Real-Time Analytics',
    type: 'Metrics & Pipeline Telemetry',
    status: 'Operational',
  },
  {
    name: 'Event Scheduling Engine',
    type: 'Automation Controller',
    status: 'Operational',
  },
  {
    name: 'Authentication & Access',
    type: 'Security & SAML Gateway',
    status: 'Operational',
  },
  {
    name: 'Dashboard & Control Plane',
    type: 'Admin Console Application',
    status: 'Operational',
  },
  {
    name: 'Webhook Delivery',
    type: 'Webhook Broadcast Pipeline',
    status: 'Operational',
  },
];

export default function StatusServiceComponentsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
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
          Service components
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Published operational state for each public ZoikoStream service.
        </p>
      </div>

      {/* Table Container */}
      <div className="relative z-10 w-full p-4 sm:p-6 bg-white/90 backdrop-blur-xs rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start shadow-sm overflow-x-auto">
        <div className="min-w-[600px] w-full flex flex-col">
          {/* Table Header */}
          <div className="w-full p-4 bg-slate-100 border-b-2 border-gray-200 flex justify-start items-center gap-3">
            <div className="flex-1 text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Component Name
            </div>
            <div className="w-48 sm:w-64 text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Type
            </div>
            <div className="w-40 text-right text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Current Status
            </div>
          </div>

          {/* Table Rows */}
          {COMPONENTS.map((item, index) => (
            <div
              key={index}
              className="w-full p-4 border-b border-gray-200 flex justify-start items-center gap-3 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex-1 flex justify-start items-center gap-3">
                <div className="size-2.5 bg-emerald-500 rounded-full shrink-0" />
                <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  {item.name}
                </span>
              </div>
              <div className="w-48 sm:w-64 text-slate-600 text-sm font-normal font-['Inter']">
                {item.type}
              </div>
              <div className="w-40 flex justify-end items-center">
                <div className="px-2.5 py-1 bg-emerald-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-emerald-500/30 flex justify-center items-center">
                  <span className="text-emerald-600 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
