import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroBg from '@/public/images/platform-video-analytics/section-1bg.png';
import heroRightMockup from '@/public/images/platform-video-analytics/HeroRightMockup.png';

export default function PlatformVideoAnalyticsHeroSection() {
  return (
    <section className="relative w-full min-h-[800px] px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-950 flex flex-col justify-center items-center overflow-hidden z-10">
      {/* Background Image section-1bg.png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={heroBg}
          alt="Video Analytics Hero Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-start items-start gap-8">
          {/* Sub-badge */}
          <div className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-500 inline-flex items-center gap-2 bg-teal-500/10">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              VIDEO ANALYTICS
            </span>
          </div>

          {/* Title */}
          <h1 className="w-full text-slate-100 text-4xl sm:text-4xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[66px]">
            Understand video performance with metrics you can define and trust.
          </h1>

          {/* Subtitle */}
          <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            ZoikoStream Video analytics helps teams review source-approved video metrics with clear definitions, scope, freshness, quality and privacy context across supported live and on-demand workflows.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#capabilities"
              className="px-6 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-[10px] text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity text-center"
            >
              Explore Analytics Capabilities
            </Link>
            <Link
              href="#api-docs"
              className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 text-slate-100 text-base font-medium font-['Space_Grotesk'] hover:bg-slate-800/50 transition-colors text-center"
            >
              View Analytics API
            </Link>
          </div>

          {/* Footnote Disclaimer */}
          <div className="w-full p-4 border-t border-gray-800 flex items-start">
            <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-5">
              Metric availability and definitions vary by approved source, service context and access state.
            </p>
          </div>
        </div>

        {/* Right Column Visual Card */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="w-full max-w-[520px] p-6 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm flex flex-col justify-start items-start gap-5 shadow-2xl overflow-hidden">
            <div className="relative w-full h-[320px] sm:h-[380px] rounded-lg overflow-hidden">
              <Image
                src={heroRightMockup}
                alt="Active Ingest Latency Dashboard Mockup"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-full flex justify-between items-center pt-1">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-slate-100 text-xs font-bold font-['Space_Grotesk']">
                  ACTIVE INGEST LATENCY
                </span>
              </div>
              <span className="text-slate-500 text-[10px] font-normal font-['Space_Grotesk'] uppercase tracking-wider">
                STATUS: NOMINAL (22ms)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
