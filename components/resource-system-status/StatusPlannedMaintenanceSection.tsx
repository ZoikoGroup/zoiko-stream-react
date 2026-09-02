import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import cardImg2 from '@/public/images/resources-system-status/card-image-top (2).png';
import cardImg3 from '@/public/images/resources-system-status/card-image-top (3).png';

const MAINTENANCE = [
  {
    id: 'MNT-1044',
    status: 'Scheduled',
    title: 'CDN edge node certificate rotation',
    window: 'Sep 2, 2026 02:00–04:00 UTC',
    impact: 'None expected — rolling update',
    affected: 'Live Playback CDN',
    description:
      'Standard rolling cryptographic updates. Connections automatically transition to updated nodes with zero viewer disconnects.',
    image: cardImg2,
  },
  {
    id: 'MNT-1081',
    status: 'Scheduled',
    title: 'Database migration for Analytics pipeline',
    window: 'Sep 5, 2026 01:00–03:00 UTC',
    impact: 'Degraded — analytics delay up to 15 min',
    affected: 'Real-Time Analytics',
    description:
      'Performing scheduled scale migrations on the telemetry backing cluster. Storage pipelines will buffer during transition.',
    image: cardImg3,
  },
];

export default function StatusPlannedMaintenanceSection() {
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
          Planned maintenance
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Scheduled maintenance windows with expected impact and affected components.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {MAINTENANCE.map((item, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-xs rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-6 sm:p-8 flex flex-col justify-start items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-center">
                <div className="px-2.5 py-1 bg-blue-500/10 rounded-full outline outline-1 outline-offset-[-1px] outline-blue-500/30">
                  <span className="text-blue-600 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                    {item.status}
                  </span>
                </div>
                <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk']">
                  MAINT ID: {item.id}
                </span>
              </div>

              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>

              <div className="flex flex-col justify-start items-start gap-1">
                <div className="text-sm font-normal font-['Inter']">
                  <span className="text-slate-900 font-bold">Window: </span>
                  <span className="text-slate-600">{item.window}</span>
                </div>
                <div className="text-sm font-normal font-['Inter']">
                  <span className="text-slate-900 font-bold">Impact: </span>
                  <span className="text-slate-600">{item.impact}</span>
                </div>
                <div className="text-sm font-normal font-['Inter']">
                  <span className="text-slate-900 font-bold">Affected: </span>
                  <span className="text-slate-600">{item.affected}</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>

              <div className="w-full pt-4 border-t border-gray-200">
                <Link
                  href="#maintenance-details"
                  className="text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  View details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
