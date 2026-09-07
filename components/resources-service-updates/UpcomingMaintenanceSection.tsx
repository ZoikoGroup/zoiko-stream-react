'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface MaintenanceItem {
  id: string;
  title: string;
  details: string;
  badge: 'SCHEDULED' | 'RESCHEDULED';
  image: string;
}

const STACKED_ITEMS: MaintenanceItem[] = [
  {
    id: 'cdn-cache-refresh',
    title: 'CDN Edge Cache Refresh — Global',
    details: 'Sep 21, 2026 04:00-06:00 UTC • No customer impact expected',
    badge: 'SCHEDULED',
    image: '/images/service-updates/su3.png',
  },
  {
    id: 'analytics-pipeline',
    title: 'Analytics Pipeline Upgrade — All Regions',
    details: 'Sep 28, 2026 01:00-03:00 UTC • Potential delay in analytics data',
    badge: 'SCHEDULED',
    image: '/images/service-updates/su4.png',
  },
  {
    id: 'database-migration',
    title: 'Database Migration — EU-West',
    details: 'Oct 5, 2026 (was Sep 28) 03:00-07:00 UTC • Expected interruption to VOD metadata',
    badge: 'RESCHEDULED',
    image: '/images/service-updates/su5.png',
  },
  {
    id: 'certificate-rotation',
    title: 'Certificate Rotation — Global',
    details: 'Oct 12, 2026 00:00-01:00 UTC • No customer impact expected',
    badge: 'SCHEDULED',
    image: '/images/service-updates/su6.png',
  },
];

export default function UpcomingMaintenanceSection() {
  const getBadgeStyle = (badge: MaintenanceItem['badge']) => {
    switch (badge) {
      case 'SCHEDULED':
        return 'text-teal-600 bg-teal-50 border-teal-200/80';
      case 'RESCHEDULED':
        return 'text-amber-600 bg-amber-50 border-amber-200/80';
    }
  };

  return (
    <section id="upcoming-maintenance" className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight">
            Upcoming planned maintenance and operational changes
          </h2>
        </div>

        {/* Featured Large Maintenance Card */}
        <div className="bg-slate-100/90 border border-slate-200/90 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm mb-6 flex flex-col md:flex-row items-stretch gap-6">
          {/* Left Photo Banner */}
          <div className="relative w-full md:w-80 h-52 md:h-auto rounded-xl overflow-hidden shrink-0 bg-slate-200">
            <Image
              src="/images/service-updates/su2.png"
              alt="Streaming Infrastructure Maintenance"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right Details Content */}
          <div className="flex flex-col justify-between flex-1">
            <div>
              {/* Header & Badge */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  Streaming Infrastructure Maintenance — US-East Region
                </h3>
                <span className="font-mono text-[9px] font-bold text-teal-600 bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 rounded tracking-wider uppercase shrink-0">
                  SCHEDULED
                </span>
              </div>

              {/* 3 Metadata Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                    WINDOW (UTC)
                  </span>
                  <p className="text-xs sm:text-[13px] font-medium text-slate-700">
                    Sep 14, 2026 02:00-06:00 UTC
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                    AFFECTED SCOPE
                  </span>
                  <p className="text-xs sm:text-[13px] font-medium text-slate-700">
                    Live Streaming API, Ingest Gateway, US-East
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                    EXPECTED IMPACT
                  </span>
                  <p className="text-xs sm:text-[13px] font-medium text-slate-700">
                    Potential brief interruption to ingest connections
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Link */}
            <div>
              <Link
                href="/zoikostream-status"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
              >
                <span>View full details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Stacked List Cards */}
        <div className="space-y-4">
          {STACKED_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-100/90 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-sm hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 truncate sm:whitespace-normal">
                    {item.details}
                  </p>
                </div>
              </div>

              <span
                className={`font-mono text-[9px] font-bold px-2.5 py-0.5 rounded border tracking-wider uppercase shrink-0 ${getBadgeStyle(
                  item.badge
                )}`}
              >
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
