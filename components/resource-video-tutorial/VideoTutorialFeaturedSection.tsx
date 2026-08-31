import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import videoPoster from '@/public/images/resource-videotutorial/Video-Poster.png';
import { Play } from 'lucide-react';

export default function VideoTutorialFeaturedSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-10 bg-white overflow-hidden">
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
      <div className="size-[520px] left-[1064px] top-[457px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        <h2 className="text-slate-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Featured tutorial.
        </h2>
      </div>

      <div className="relative z-10 w-full p-6 sm:p-8 bg-slate-50 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-200 flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-10">
        {/* Left Side Video Preview Thumbnail */}
        <div className="relative w-full lg:w-1/2 h-72 sm:h-96 rounded-xl overflow-hidden bg-slate-950 flex justify-center items-center group shrink-0">
          <Image
            src={videoPoster}
            alt="End-to-End Live Streaming Architecture Featured Tutorial"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-slate-950/25" />

          {/* Play Icon Button */}
          <div className="w-16 h-16 bg-white rounded-full shadow-[0px_4px_12px_rgba(0,0,0,0.15)] flex justify-center items-center z-10 group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-slate-950 fill-slate-950 ml-1" />
          </div>

          {/* Duration Badge */}
          <div className="absolute right-3 bottom-3 px-2 py-1 bg-black/70 rounded-sm">
            <span className="text-white text-xs font-bold font-['Space_Grotesk']">
              24 min
            </span>
          </div>
        </div>

        {/* Right Side Info */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 bg-white rounded-sm outline outline-1 outline-offset-[-1px] outline-gray-200">
              <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                Featured
              </span>
            </div>
            <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
              RECOMMENDED
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-slate-950 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-snug">
              End-to-End Live Streaming Architecture
            </h3>
            <p className="text-slate-600 text-base font-normal font-['Space_Grotesk'] leading-relaxed">
              A complete walkthrough of building a production-ready live streaming workflow — from contribution and ingest through processing, secure delivery, monitoring, and operational recording.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1.5 bg-slate-200/80 rounded-full text-slate-700 text-xs font-bold font-['Space_Grotesk']">
              Live Streaming
            </span>
            <span className="px-3 py-1.5 bg-slate-200/80 rounded-full text-slate-700 text-xs font-bold font-['Space_Grotesk']">
              Architecture
            </span>
            <span className="px-3 py-1.5 bg-slate-200/80 rounded-full text-slate-700 text-xs font-bold font-['Space_Grotesk']">
              Updated Aug 2026
            </span>
          </div>

          {/* Prerequisites */}
          <div className="w-full py-3 border-t border-b border-gray-200">
            <p className="text-xs font-['Space_Grotesk']">
              <span className="text-slate-950 font-bold">Prerequisites: </span>
              <span className="text-slate-600 font-normal">
                Active ZoikoStream account, API credentials, stream key configuration.
              </span>
            </p>
          </div>

          {/* CTA & Subtext */}
          <div className="flex flex-col gap-3">
            <Link
              href="#watch"
              className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg inline-flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                Watch tutorial →
              </span>
            </Link>
            <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
              Transcript, captions, chapters, and linked documentation included.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
