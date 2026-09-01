import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg1 from '@/public/images/developers/section-1bg.jpg';

export default function DevelopersHeroSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-zinc-950 border-b border-gray-800 overflow-hidden min-h-[630px] flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg1}
          alt="Developers Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-radial-[at_12%_15%] from-teal-400/30 to-teal-400/0 to-42%" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Hero Card */}
        <div className="w-full lg:w-[640px] p-6 sm:p-10 bg-zinc-950/40 backdrop-blur-sm rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-6 shadow-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3 py-1.5 bg-white/5 rounded-full outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-[5px] flex items-center gap-2">
              <div className="size-1.5 bg-teal-400 rounded-sm" />
              <span className="text-slate-400 text-xs font-normal font-['IBM_Plex_Mono']">
                API v1 · current as of Aug 2026
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-blue-500 rounded-[3px]" />
              <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
                DEVELOPERS
              </span>
            </div>
          </div>

          <h1 className="text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[50px]">
            Build video without <br className="hidden sm:inline" />
            <span className="text-teal-400">rebuilding</span> the media <br className="hidden sm:inline" />
            infrastructure.
          </h1>

          <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
            Use programmable APIs, SDKs, media protocols, webhooks, secure playback, and operational tools for live, real-time, and on-demand video.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#quickstart"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              <span className="text-slate-950 text-base font-semibold font-['Inter']">
                Start building
              </span>
            </Link>
            <Link
              href="/developer-documentation"
              className="px-7 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 hover:bg-white/5 transition-colors"
            >
              <span className="text-white text-base font-semibold font-['Inter']">
                Read documentation
              </span>
            </Link>
          </div>

          <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed pt-1">
            Start with current documentation. Escalate only when your architecture or requirements need review.
          </span>
        </div>

        {/* Right Floating Card */}
        <div className="w-full lg:w-[460px] p-6 bg-zinc-900/60 backdrop-blur-sm rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-4 shadow-xl">
          <div className="flex flex-wrap items-center gap-2">
            <div className="px-3 py-1.5 bg-white/5 rounded-full outline outline-1 outline-white/10">
              <span className="text-slate-400 text-xs font-normal font-['IBM_Plex_Mono']">
                Request/source
              </span>
            </div>
            <span className="text-slate-500 text-xs font-mono">→</span>
            <div className="px-3 py-1.5 bg-white/5 rounded-full outline outline-1 outline-white/10">
              <span className="text-slate-400 text-xs font-normal font-['IBM_Plex_Mono']">
                Stream created
              </span>
            </div>
            <span className="text-slate-500 text-xs font-mono">→</span>
            <div className="px-3 py-1.5 bg-white/5 rounded-full outline outline-1 outline-white/10">
              <span className="text-slate-400 text-xs font-normal font-['IBM_Plex_Mono']">
                Playback
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="px-3 py-1.5 bg-white/5 rounded-full outline outline-1 outline-white/10">
              <span className="text-slate-400 text-xs font-normal font-['IBM_Plex_Mono']">
                Current state
              </span>
            </div>
            <span className="text-slate-500 text-xs font-mono">→</span>
            <div className="px-3 py-1.5 bg-white/5 rounded-full outline outline-1 outline-white/10">
              <span className="text-slate-400 text-xs font-normal font-['IBM_Plex_Mono']">
                Monitoring event
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 w-full flex items-center justify-between">
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono']">
              Developer workflow, current as of Aug 2026
            </span>
            <Link
              href="/developer-api-reference"
              className="text-teal-400 hover:text-teal-300 text-xs font-normal font-['IBM_Plex_Mono'] transition-colors"
            >
              View API reference →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
