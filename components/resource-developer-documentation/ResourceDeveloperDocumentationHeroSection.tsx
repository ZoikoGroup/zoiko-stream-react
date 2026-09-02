import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import section1Bg from '@/public/images/resource-developer-documentation/section-1bg.png';

export default function ResourceDeveloperDocumentationHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-black border-b border-gray-800 flex justify-start items-center gap-12 overflow-hidden z-10">
      {/* Background Image */}
      {section1Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
          <Image
            src={section1Bg}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-6 flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col justify-start items-start gap-5">
            {/* Sub-Badge */}
            <div className="px-4 py-1.5 rounded-full border border-teal-400/80 bg-teal-400/10 flex items-center">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-widest uppercase">
                DEVELOPER DOCUMENTATION
              </span>
            </div>

            {/* Title */}
            <h1 className="w-full text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[74px]">
              Build with documentation that states exactly what is supported.
            </h1>

            {/* Subtitle */}
            <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-2xl">
              Search source-governed ZoikoStream technical guidance for approved APIs, protocols, events, playback, analytics, operations, errors, versioning, and implementation boundaries.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="w-full max-w-xl px-5 py-3.5 bg-[#0e1626]/90 rounded-full border border-slate-800 flex items-center gap-3 shadow-inner backdrop-blur-xs">
            <Search className="size-4 text-teal-400 shrink-0" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-base font-normal font-['Space_Grotesk'] focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="#tasks"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity text-center shadow-lg"
            >
              Browse documentation
            </Link>
            <Link
              href="/start-building"
              className="px-7 py-3.5 rounded-lg border border-white text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors text-center"
            >
              Start building
            </Link>
          </div>
        </div>

        {/* Right Floating Terminal Code Preview Card */}
        <div className="lg:col-span-6 w-full bg-[#0c1424]/90 rounded-2xl border border-slate-800/80 flex justify-start items-stretch overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Left Sidebar */}
          <div className="w-44 p-5 border-r border-slate-800/80 flex flex-col gap-3 text-xs font-['Space_Grotesk'] shrink-0">
            <span className="text-teal-400 font-bold uppercase text-[11px] tracking-wider">
              GETTING STARTED
            </span>
            <span className="text-white font-normal">Overview</span>
            <span className="text-slate-400 font-normal">Quickstart Guide</span>

            <span className="text-slate-400 font-bold uppercase text-[11px] tracking-wider pt-3">
              CORE RUNTIMES
            </span>
            <span className="text-slate-400 font-normal">Video Ingest API</span>
            <span className="text-slate-400 font-normal">WebRTC Playback</span>
            <span className="text-slate-400 font-normal">Secure Webhooks</span>
          </div>

          {/* Main Snippet Container */}
          <div className="flex-1 p-6 flex flex-col justify-between items-start gap-4">
            <div className="w-full flex flex-col gap-1.5">
              <span className="text-teal-400 text-xs font-bold tracking-wider font-['Space_Grotesk'] uppercase">
                DOCUMENTATION / API
              </span>
              <h3 className="text-white text-2xl font-bold font-['Space_Grotesk']">
                Video Ingest Lifecycle
              </h3>
            </div>

            <div className="w-full p-4 bg-[#050811] rounded-xl border border-slate-800/80 flex flex-col gap-1 text-xs font-['IBM_Plex_Mono']">
              <span className="text-teal-400 font-normal">POST /v1/ingest/streams</span>
              <pre className="text-slate-300 font-normal leading-relaxed pt-1">
{`{
  "stream_key": "live_zk_9821x",
  "failover_redundancy": "active-active",
  "recording": true
}`}
              </pre>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <div className="size-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-wider">
                SOURCE VERIFIED: V4.2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
