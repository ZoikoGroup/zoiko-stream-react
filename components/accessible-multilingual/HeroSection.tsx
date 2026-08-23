import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg113 from '@/public/images/accessible-multilingual/bg (113).png';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg113}
          alt="Accessible & Multilingual Video Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="px-3.5 py-1.5 rounded-full border border-teal-400 bg-teal-400/10 inline-flex items-center">
              <span className="text-teal-400 text-xs font-bold   uppercase tracking-wide">
                ACCESSIBLE &amp; MULTILINGUAL VIDEO
              </span>
            </div>

            <h1 className="text-4xl md:text-3xl font-bold   text-white leading-tight">
              Make every important video easier to understand.
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-normal leading-relaxed">
              Plan captions, language access, inclusive playback, review, and replay continuity around the audience and workflow you actually need—with capability and quality states you can verify.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
              >
                Talk to an Expert
              </Link>
              <Link
                href="#capabilities"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors"
              >
                Inspect Accessibility Capabilities
              </Link>
            </div>
          </div>

          {/* Right Status Card */}
          <div className="lg:col-span-5">
            <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
              {/* Video Mockup Sub-box */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden flex items-end justify-center bg-zinc-800">
                
                <div className="relative z-10 p-3 mb-2 bg-black/90 rounded text-center">
                  <p className="text-white text-xs font-normal    ">
                    “Deploying accessibility workflows across all ingest points.”
                  </p>
                </div>
              </div>

              {/* Active Tracks Section */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-white text-sm font-bold   tracking-wide">
                    ACTIVE LANGUAGE TRACKS
                  </span>
                  <span className="text-teal-400 text-xs font-bold  ">
                    LIVE SYNCING
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-2 bg-emerald-500 rounded-full" />
                      <span className="text-white text-sm font-bold  ">
                        English (Source)
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-xs font-bold   rounded-full">
                      PUBLISHED
                    </span>
                  </div>

                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-2 bg-amber-500 rounded-full" />
                      <span className="text-white text-sm font-bold  ">
                        Spanish (Spain)
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 text-xs font-bold   rounded-full">
                      NEEDS REVIEW
                    </span>
                  </div>

                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-2 bg-blue-500 rounded-full" />
                      <span className="text-white text-sm font-bold  ">
                        French (Standard)
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-xs font-bold   rounded-full">
                      AVAILABLE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
