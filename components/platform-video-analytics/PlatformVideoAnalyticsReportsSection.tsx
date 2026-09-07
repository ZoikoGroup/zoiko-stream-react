import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import terminalImg from '@/public/images/platform-video-analytics/TerminalImage.png';

const REPORTS_LIST = [
  {
    title: 'Saved Reports',
    desc: 'Build and save custom dashboards from verified metrics.',
    badge: 'CAPABILITY-GATED',
    badgeStyle: 'bg-blue-500/10 text-blue-400',
  },
  {
    title: 'Scheduled Reports',
    desc: 'Configure automated weekly/monthly exports to active channels.',
    badge: 'CAPABILITY-GATED',
    badgeStyle: 'bg-blue-500/10 text-blue-400',
  },
  {
    title: 'Export Formats',
    desc: 'Extract raw intervals via audited CSV/JSON packages.',
    badge: 'REGISTRY SIGNED',
    badgeStyle: 'bg-teal-500/10 text-teal-400',
  },
  {
    title: 'Share Links',
    desc: 'Generate secure view-only dashboard portals for external partners.',
    badge: 'AUTHORIZED ONLY',
    badgeStyle: 'bg-blue-500/10 text-blue-400',
  },
];

export default function PlatformVideoAnalyticsReportsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Reports, exports and developer handoff
          </h2>
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Capability-gated reporting and governed developer access to analytics data.
          </p>
        </div>

        {/* 2 Column Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Reports & Exports */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-slate-100 text-2xl font-bold font-['Space_Grotesk']">
              Reports &amp; Exports
            </h3>

            <div className="flex flex-col gap-3">
              {REPORTS_LIST.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full p-4 bg-zinc-900/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex justify-between items-center gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                      {item.title}
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                      {item.desc}
                    </span>
                  </div>
                  <div className={`px-2.5 py-1 rounded-xs shrink-0 ${item.badgeStyle}`}>
                    <span className="text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Analytics API Developer Handoff */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-slate-100 text-2xl font-bold font-['Space_Grotesk']">
              Analytics API — developer handoff
            </h3>

            <div className="w-full p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col gap-5 overflow-hidden">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={terminalImg}
                  alt="Analytics API Code Terminal"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-slate-400 text-base font-normal font-['Space_Grotesk'] leading-relaxed">
                  The exact developer query contracts and parameter endpoints live inside our dedicated API directory. Video analytics outlines what metrics represent; the API own how to technically fetch them.
                </p>

                <Link
                  href="/resource-developer-documentation"
                  className="inline-flex items-center gap-2 text-blue-400 text-sm font-bold font-['Space_Grotesk'] hover:underline"
                >
                  <span>Query Analytics API Documentation</span>
                  <ArrowRight className="size-4 text-blue-400" />
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/resource-developer-documentation"
                className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity text-center flex items-center gap-2"
              >
                <span>View Analytics API</span>
                <ArrowRight className="size-4 text-slate-950" />
              </Link>
              <Link
                href="/resource-developer-documentation"
                className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 text-slate-100 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800/50 transition-colors text-center"
              >
                Explore Developer Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
