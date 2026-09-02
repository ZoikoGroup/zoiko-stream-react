import React from 'react';
import Link from 'next/link';
import { MessageSquare, Calendar, ArrowRight } from 'lucide-react';

export default function RequestEnterpriseQuoteHeroSection() {
  return (
    <section className="relative w-full bg-zinc-950 text-white py-20 lg:py-24 border-b border-gray-800 flex justify-start items-center overflow-hidden z-10">
      {/* Right Wavy Gradient Vector Lines Background */}
      <div className="absolute right-0 top-0 w-full sm:w-2/3 lg:w-1/2 h-full pointer-events-none overflow-hidden z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M 50,-20 C 200,40 380,120 620,160"
            stroke="url(#teal-wave)"
            strokeWidth="2.5"
            opacity="0.85"
          />
          <path
            d="M 80,30 C 230,100 410,200 620,240"
            stroke="url(#blue-wave)"
            strokeWidth="2.5"
            opacity="0.75"
          />
          <path
            d="M 120,90 C 270,170 440,280 620,330"
            stroke="url(#purple-wave)"
            strokeWidth="2.5"
            opacity="0.65"
          />
          <defs>
            <linearGradient id="teal-wave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="blue-wave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#d946ef" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="purple-wave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-28 max-w-6xl mx-auto flex flex-col justify-start items-start gap-6">
        {/* Top Message Icon Box */}
        <div className="size-12 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 bg-zinc-900/80 flex justify-center items-center backdrop-blur-xs">
          <MessageSquare className="size-5 text-teal-400" />
        </div>

        {/* Sub-badge */}
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-full" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wider">
            CONTACT ZOIKOSTREAM
          </span>
        </div>

        {/* Title */}
        <h1 className="text-slate-100 text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[60px]">
          Talk to the right expert, faster.
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed max-w-xl">
          Tell us what you&apos;re trying to accomplish. We&apos;ll route your inquiry to the ZoikoStream team best equipped to help.
        </p>

        {/* Live Event Brief Pill Box */}
        <div className="p-4 bg-white/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-wrap items-center gap-3 mt-2 backdrop-blur-xs">
          <Calendar className="size-5 text-teal-400 shrink-0" />
          <span className="text-slate-100 text-sm font-semibold font-['Inter']">
            Planning a Live Event?
          </span>
          <Link
            href="/live-events"
            className="text-teal-400 text-sm font-semibold font-['Inter'] hover:underline flex items-center gap-1 transition-colors"
          >
            <span>Start your event brief</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
