import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import section3Bg from '@/public/images/platform-video-analytics/section-3bg.png';

const DIMENSIONS = [
  {
    title: 'Media Type',
    desc: 'Live ingestion streams vs structured VOD assets.',
    badge: 'SUPPORTED',
    badgeStyle: 'bg-teal-500/10 text-teal-400',
  },
  {
    title: 'Playback Surface',
    desc: 'Native HTML5, WebVTT layers, iOS and Android platforms.',
    badge: 'SUPPORTED',
    badgeStyle: 'bg-teal-500/10 text-teal-400',
  },
  {
    title: 'Content / Stream',
    desc: 'Active ingest tracks, alternate audio & fallbacks.',
    badge: 'ACTIVE',
    badgeStyle: 'bg-teal-500/10 text-teal-400',
  },
  {
    title: 'Audience / Viewer',
    desc: 'Privacy-compliant aggregate viewership tracking.',
    badge: 'GDPR GATED',
    badgeStyle: 'bg-amber-500/10 text-amber-400',
  },
  {
    title: 'Time Dimensions',
    desc: 'Real-time stream telemetries alongside historic cycles.',
    badge: 'SUPPORTED',
    badgeStyle: 'bg-teal-500/10 text-teal-400',
  },
  {
    title: 'Region / Network',
    desc: 'Autonomous system diagnostics and CDN caching tiers.',
    badge: 'SUPPORTED',
    badgeStyle: 'bg-teal-500/10 text-teal-400',
  },
];

export default function PlatformVideoAnalyticsCoverageSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background Image section-3bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section3Bg}
          alt="Coverage Background"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Section Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="w-full text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
            What video analytics covers
          </h2>
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk']">
            Source-backed analytics surfaces and their relationship to the video lifecycle.
          </p>
        </div>

        {/* Content Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col justify-start items-start gap-6">
            <h3 className="w-full text-slate-100 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
              End-to-End ingestion and playback metrics mapped to specific service configurations.
            </h3>
            <p className="w-full text-slate-400 text-base font-normal font-['Space_Grotesk'] leading-relaxed">
              ZoikoStream monitors active data parameters at the source encoder, the secure ingest CDN, and the participant player. This layered oversight guarantees total performance clarity while respecting organizational and legal privacy parameters automatically.
            </p>
            <div className="pt-2">
              <Link
                href="#ingestion"
                className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity inline-block text-center"
              >
                Explore Ingestion Analytics
              </Link>
            </div>
          </div>

          {/* Right Column Matrix Box */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[600px] p-6 sm:p-7 bg-zinc-900/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-xs flex flex-col justify-start items-start gap-5 shadow-2xl">
              <h4 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                Coverage Dimension Matrix
              </h4>

              <div className="w-full flex flex-col gap-3">
                {DIMENSIONS.map((dim, idx) => (
                  <div
                    key={idx}
                    className="w-full p-3.5 bg-slate-950/60 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-between items-center gap-4"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-slate-100 text-sm font-bold font-['Space_Grotesk']">
                        {dim.title}
                      </span>
                      <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                        {dim.desc}
                      </span>
                    </div>
                    <div className={`px-2.5 py-1 rounded-full shrink-0 flex items-center justify-center ${dim.badgeStyle}`}>
                      <span className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                        {dim.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
