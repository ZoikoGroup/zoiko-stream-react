import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const LATEST_CHANGES = [
  {
    date: 'Feb 24, 2026',
    version: 'v3.4.1',
    badge: 'RED',
    badgeStyle: 'bg-red-400/10 text-red-500 outline-red-400',
    title: 'Enforced TLS 1.3 for Private Audience Endpoints',
    description:
      'Support for TLS 1.0 and 1.1 has been completely discontinued. All ingress player streams now require TLS 1.3 handshake compatibility.',
    surface: 'SSO / Protocols',
  },
  {
    date: 'Feb 18, 2026',
    version: 'v2.8.0',
    badge: 'AMBER',
    badgeStyle: 'bg-amber-400/10 text-amber-600 outline-amber-400',
    title: 'Deprecated v2 Javascript Player Embed SDK',
    description:
      'The legacy JS player embed is now officially deprecated. New properties should migrate to the performant Web Components Player.',
    surface: 'Web Player SDK',
  },
  {
    date: 'Feb 10, 2026',
    version: 'v3.4.0',
    badge: 'GREEN',
    badgeStyle: 'bg-green-500/10 text-green-600 outline-green-500',
    title: 'Added Real-time French Translation Feed Engine',
    description:
      'Instantly process and translate live English audio into sub-latency French text tracks on delivery endpoints.',
    surface: 'Translation API',
  },
  {
    date: 'Feb 02, 2026',
    version: 'v3.3.9',
    badge: 'BLUE',
    badgeStyle: 'bg-blue-500/10 text-blue-600 outline-blue-500',
    title: 'Changed Webhook Retry Backoff to Exponential',
    description:
      'Failed webhook dispatches are now retried via custom exponential backoff logic (base multiplier 2s) to protect client server heaps.',
    surface: 'Webhooks Engine',
  },
  {
    date: 'Jan 28, 2026',
    version: 'v3.3.8',
    badge: 'GRAY',
    badgeStyle: 'bg-slate-500/10 text-slate-600 outline-slate-500',
    title: 'Fixed HLS Discontinuity Ingest Artifacts',
    description:
      'Resolved a critical frame clipping issue occurring during input signal transition events on private stream ingest.',
    surface: 'HLS Engine',
  },
];

export default function ChangelogLatestChangesSection() {
  return (
    <section id="latest-changes" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-10 bg-white overflow-hidden">
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
      <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Latest Changes
        </h2>
        <div className="flex items-center gap-2">
          <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-slate-600 text-xs font-normal font-['Inter']">
            Updated 2 hours ago
          </span>
        </div>
      </div>

      {/* Changes Rows */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-6">
        {LATEST_CHANGES.map((item, index) => (
          <div
            key={index}
            className="w-full p-6 bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-28 flex flex-col justify-start items-start gap-1 shrink-0">
              <span className="text-slate-600 text-sm font-semibold font-['Inter']">
                {item.date}
              </span>
              <span className="text-slate-500 text-xs font-normal font-['Inter']">
                {item.version}
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-start items-start gap-2">
              <div className="w-full flex items-center gap-3 flex-wrap">
                <div className={`px-2 py-0.5 rounded-sm outline outline-1 outline-offset-[-1px] ${item.badgeStyle}`}>
                  <span className="text-[10px] font-bold font-['Inter']">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>

              <div className="px-2.5 py-1 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-start">
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  {item.surface}
                </span>
              </div>
            </div>

            <div className="w-28 flex justify-end items-center gap-1 shrink-0">
              <Link
                href="#complete-record"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-bold font-['Space_Grotesk'] transition-colors"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
