import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const RELEASES = [
  {
    date: 'Feb 24, 2026',
    categoryPill: 'New Capability',
    categoryBg: 'bg-blue-500/10 text-blue-600',
    tags: ['Video Ingest', 'Developers'],
    title: 'Adaptive Bitrate Engine v4.0 — High Efficiency Transcoding',
    description:
      'Automated ML transcode scaling, dynamic resolution fallback, and native H.265 stream ingest optimizations.',
    actionBadge: 'Recommended',
    actionBg: 'bg-emerald-50 text-teal-600 outline-teal-400',
    status: 'Available',
  },
  {
    date: 'Feb 18, 2026',
    categoryPill: 'Improvement',
    categoryBg: 'bg-teal-400/10 text-teal-600',
    tags: ['Player & SDK'],
    title: 'Player SDK v3.2 — HLS Fallback Improvements',
    description:
      'Optimized buffer threshold configurations when transitioning active streams to failover HLS formats on mobile browsers.',
    actionBadge: '',
    actionBg: '',
    status: 'Available',
  },
  {
    date: 'Feb 10, 2026',
    categoryPill: 'Deprecation',
    categoryBg: 'bg-red-500/10 text-red-600',
    tags: ['API & Webhooks'],
    title: 'Webhook Schema v2 Migration Deadline (June 2026)',
    description:
      'Deprecation warning for Webhook Schema v1 payloads. Integrations must update model configurations before the June 1st deadline.',
    actionBadge: 'Action: Required',
    actionBg: 'bg-red-100 text-red-800 outline-red-500',
    status: 'Upcoming',
  },
  {
    date: 'Jan 29, 2026',
    categoryPill: 'Behavior Change',
    categoryBg: 'bg-amber-500/10 text-amber-600',
    tags: ['Live Events'],
    title: 'Live Events Low-Latency Protocol Update',
    description:
      'WebRTC stream fallback intervals adjusted to prevent early connection closures on highly restricted corporate firewalls.',
    actionBadge: 'Review Required',
    actionBg: 'bg-amber-100 text-amber-800 outline-amber-500',
    status: 'Rolling Out',
  },
  {
    date: 'Jan 15, 2026',
    categoryPill: 'Security Note',
    categoryBg: 'bg-emerald-500/10 text-emerald-600',
    tags: ['Security & Trust'],
    title: 'Content Security Policy (CSP) Headers Updated',
    description:
      'Additional origin domains appended to our standard player CDN policies to prevent frame injection risks.',
    actionBadge: '',
    actionBg: '',
    status: 'Available',
  },
];

export default function ReleaseNotesAllReleasesSection() {
  return (
    <section id="all-releases" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-10 bg-white overflow-hidden">
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
          All Release Notes
        </h2>
      </div>

      {/* Filter Active Bar */}
      <div className="relative z-10 w-full p-4 bg-slate-50/90 backdrop-blur-xs rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-600 text-xs font-semibold font-['Inter']">
            Showing all releases
          </span>
          <div className="px-2 py-1 bg-slate-200 rounded-sm flex items-center gap-1">
            <span className="text-slate-900 text-xs font-normal font-['Inter']">
              Year: 2026 ✕
            </span>
          </div>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-xs font-medium font-['Inter'] underline">
          Clear all filters
        </button>
      </div>

      {/* Release List Rows */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start">
        {RELEASES.map((item, index) => (
          <div
            key={index}
            className="w-full py-6 border-b border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 hover:bg-slate-50/50 transition-colors"
          >
            <div className="w-28 text-slate-500 text-xs font-normal font-['Inter'] shrink-0">
              {item.date}
            </div>

            <div className="flex-1 flex flex-col justify-start items-start gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <div className={`px-2 py-0.5 rounded-sm ${item.categoryBg}`}>
                  <span className="text-xs font-semibold font-['Inter']">
                    {item.categoryPill}
                  </span>
                </div>
                {item.tags.map((tag, tIdx) => (
                  <div key={tIdx} className="px-2 py-0.5 bg-slate-100 rounded-sm">
                    <span className="text-slate-600 text-xs font-normal font-['Inter']">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="text-slate-900 text-base sm:text-lg font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm font-normal font-['Inter'] line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="w-44 flex flex-col items-start lg:items-end gap-1.5 shrink-0">
              {item.actionBadge && (
                <div className={`px-2.5 py-1 rounded-sm outline outline-1 outline-offset-[-1px] ${item.actionBg}`}>
                  <span className="text-xs font-semibold font-['Inter']">
                    {item.actionBadge}
                  </span>
                </div>
              )}
              <span className="text-slate-500 text-xs font-normal font-['Inter']">
                {item.status}
              </span>
            </div>

            <div className="w-24 flex justify-start lg:justify-end items-center gap-1 shrink-0">
              <Link
                href="#complete-release-record"
                className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 text-xs font-bold font-['Space_Grotesk'] transition-colors"
              >
                <span>Read Note</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
