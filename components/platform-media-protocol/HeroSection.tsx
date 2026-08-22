import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full  text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-protocol/bg (90).png"
          alt="Media Protocols Hero Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 0" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="px-3.5 py-1 rounded-full border border-teal-400 bg-teal-400/10 inline-flex items-center">
              <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                MEDIA PROTOCOLS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-white leading-tight md:leading-[60px]">
              Qualified media protocol paths for connecting approved sources
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-normal font-['Inter'] leading-relaxed">
              Identify verified connection paths for approved contribution or transport workflows. Understand endpoint, authorization, media, network, and operational conditions before integration.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/sdks"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                View protocol documentation
              </Link>
              <Link
                href="/real-time-media"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors"
              >
                Explore Real-time contribution
              </Link>
            </div>
          </div>

          {/* Right Schema Box */}
          <div className="lg:col-span-5">
            <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
              <h3 className="text-white text-base font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                Connection Flow Schema
              </h3>

              <div className="flex flex-col gap-3.5">
                <div className="p-3.5 bg-slate-900/60 rounded-lg border border-gray-800 flex justify-between items-start">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white text-sm font-semibold font-['Inter']">
                      1. Media Source
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Inter']">
                      On-premise Encoder, Camera, Browser
                    </span>
                  </div>
                  <span className="text-slate-400 text-[10px] font-bold font-['Space_Grotesk']">
                    CONTRIBUTOR
                  </span>
                </div>

                <div className="p-3.5 bg-slate-900/60 rounded-lg border border-teal-400 flex justify-between items-start">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white text-sm font-semibold font-['Inter']">
                      2. Qualified Protocol Boundary
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Inter']">
                      SRT, RTMPS, WHIP Handshake
                    </span>
                  </div>
                  <span className="text-teal-400 text-[10px] font-bold font-['Space_Grotesk']">
                    VERIFIED
                  </span>
                </div>

                <div className="p-3.5 bg-slate-900/60 rounded-lg border border-gray-800 flex justify-between items-start">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white text-sm font-semibold font-['Inter']">
                      3. Approved Platform Ingress
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Inter']">
                      ZoikoStream Regional Endpoint
                    </span>
                  </div>
                  <span className="text-slate-400 text-[10px] font-bold font-['Space_Grotesk']">
                    ROUTED
                  </span>
                </div>

                <div className="p-3.5 bg-slate-900/60 rounded-lg border border-gray-800 flex justify-between items-start">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white text-sm font-semibold font-['Inter']">
                      4. Observable Connection State
                    </span>
                    <span className="text-slate-400 text-xs font-normal font-['Inter']">
                      Real-time Telemetry Registry
                    </span>
                  </div>
                  <span className="text-slate-400 text-[10px] font-bold font-['Space_Grotesk']">
                    MONITORED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
