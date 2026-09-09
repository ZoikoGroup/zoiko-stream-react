import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ManagedLiveEventsSection() {
  return (
    <section className="relative min-h-[820px] w-full overflow-hidden text-white font-sans flex items-center justify-center py-16 px-4 md:px-8 lg:px-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/1.png"
          alt="Event Background"
          fill
          className="object-cover object-center opacity-100 mix-blend-luminosity"
          priority
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Badge */}
          <div>
            <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-[#34D4CA]/40 bg-[#082f49]/40 backdrop-blur-md text-[11px] font-semibold tracking-widest text-[#34D4CA] uppercase">
              MANAGED LIVE EVENTS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[44px] leading-[1.15] font-bold tracking-tight text-white max-w-2xl">
            Plan live events with clear ownership from readiness through
            follow-through
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed max-w-xl font-normal">
            ZoikoStream Managed live events provides an event-specific path to
            source-approved planning, production, operational, accessibility,
            security, monitoring, recording/replay, analytics and support
            services.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-b from-[#34D4CA] to-[#4A8CFB] hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Check event readiness</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-transparent hover:bg-slate-800/80 border border-slate-700/80 transition-all"
            >
              Review planning guidance
            </a>
          </div>

          {/* Bottom Support Link */}
          <div className="pt-2 text-xs sm:text-sm text-gray-400">
            <span>Have immediate needs? </span>
            <a
              href="#"
              className="inline-flex items-center gap-1 font-semibold text-[#34D4CA] hover:underline"
            >
              <span>Contact Live Events support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column - Status Box Card */}
        <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none">
          <div className="rounded-xl border border-[#232B3A] bg-[#111622CC] backdrop-blur-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
            {/* Top Bar Status */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
                  ZOIKO LIVE ENGINE
                </span>
              </div>
              <div className="text-[11px] font-medium tracking-wide text-[#34D4CA]">
                STATUS: <span className="text-[#34D4CA]">PRE-FLIGHT</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Box 1 */}
              <div className="rounded-lg bg-[#182030] border border-slate-800/60 p-3.5 flex flex-col justify-between">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  ESTIMATED REACH
                </span>
                <span className="text-lg sm:text-xl font-bold text-white mt-1">
                  10k+ Attendees
                </span>
              </div>

              {/* Box 2 */}
              <div className="rounded-lg bg-[#182030] border border-slate-800/60 p-3.5 flex flex-col justify-between">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  INGEST QUALITY
                </span>
                <span className="text-lg sm:text-xl font-bold text-[#34D4CA] mt-1">
                  SRT / 4K Ready
                </span>
              </div>
            </div>

            {/* Active Security Gate Status */}
            <div className="rounded-lg bg-[#182030] border border-slate-800/60 p-4">
              <div className="text-[11px] font-bold tracking-wider text-[#4C86FF] uppercase mb-1.5">
                ACTIVE SECURITY GATE
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                SAML SSO whitelist compilation active. Secure routing verified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
