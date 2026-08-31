import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg12 from '@/public/images/resource-webinar-and-events/bg (12).png';
import speaker1 from '@/public/images/resource-webinar-and-events/Ellipse.png';
import speaker2 from '@/public/images/resource-webinar-and-events/Ellipse (1).png';

export default function WebinarFeaturedEventSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-12 overflow-hidden">
      {/* Background Image - bg (12).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg12}
          alt="Featured Webinar Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Left Column Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-start items-start gap-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-2.5 py-1 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
              FEATURED EVENT
            </span>
          </div>
          <div className="px-2.5 py-1 bg-red-500 rounded-full flex items-center gap-1.5">
            <div className="size-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-white text-xs font-bold font-['Space_Grotesk'] uppercase">
              LIVE WEBINAR
            </span>
          </div>
          <span className="text-white text-xs font-normal font-['Inter'] leading-5">
            September 15, 2026 · 10:00 AM PT
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-10">
            Architecting Zero-Latency Live Pipelines at Scale
          </h2>
          <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed sm:leading-6">
            Join principal engineers from ZoikoStream as they walk through the architecture behind sub-second live delivery, redundancy patterns, and real-world scaling decisions for Fortune-500 deployments.
          </p>
        </div>

        {/* Presenters */}
        <div className="flex flex-col gap-3">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
            PRESENTED BY
          </span>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative size-10 rounded-full overflow-hidden border border-gray-700">
                <Image
                  src={speaker1}
                  alt="Sarah Jenkins"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                  Sarah Jenkins
                </span>
                <span className="text-slate-400 text-xs font-normal font-['Inter']">
                  Principal Solutions Architect
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative size-10 rounded-full overflow-hidden border border-gray-700">
                <Image
                  src={speaker2}
                  alt="Marcus Thorne"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                  Marcus Thorne
                </span>
                <span className="text-slate-400 text-xs font-normal font-['Inter']">
                  Head of Video Infrastructure
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tags & Action Buttons */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-gray-800 rounded-sm text-teal-400 text-xs font-medium font-['Space_Grotesk']">
              Architecture
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded-sm text-teal-400 text-xs font-medium font-['Space_Grotesk']">
              Live Streaming
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded-sm text-teal-400 text-xs font-medium font-['Space_Grotesk']">
              Enterprise
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#register"
              className="px-6 py-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                Register Now
              </span>
            </Link>
            <button className="px-6 py-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors">
              Add to Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Right Column Diagram Box */}
      <div className="relative z-10 w-full lg:w-[480px] h-96 p-6 bg-slate-950/90 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-center items-center gap-4 overflow-hidden shrink-0">
        <div className="w-full flex flex-col justify-start items-center gap-4 text-center">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
            Ingest redundant paths
          </span>

          <div className="w-full flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
            <div className="px-3 py-2.5 bg-gray-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 text-white text-xs font-bold font-['Space_Grotesk']">
              RTMP Primary
            </div>
            <div className="w-6 sm:w-8 h-0 border-2 border-teal-400" />
            <div className="px-3.5 py-2.5 bg-slate-900 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-teal-400 flex flex-col items-center">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                Zoiko Engine
              </span>
              <span className="text-slate-400 text-[10px] font-normal font-['Inter']">
                Sub-Second Route
              </span>
            </div>
            <div className="w-6 sm:w-8 h-0 border-2 border-blue-500" />
            <div className="px-3 py-2.5 bg-gray-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 text-white text-xs font-bold font-['Space_Grotesk']">
              Global Edge
            </div>
          </div>

          <div className="w-full p-3 bg-red-500/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-red-500 flex justify-center items-center">
            <span className="text-red-500 text-xs font-bold font-['Space_Grotesk']">
              Hot-Standby RTMP Route (Active-Active)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
