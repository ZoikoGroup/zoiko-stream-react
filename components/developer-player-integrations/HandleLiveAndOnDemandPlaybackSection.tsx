import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export function HandleLiveAndOnDemandPlaybackSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            Handle live and on-demand playback as different experiences.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            A standard HTTP streaming link isn&apos;t enough. Configure native buffering, back-boundary policies, and timeline constraints depending on the stream content type.
          </p>
        </div>

        {/* 2 Behavior Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Card 1: Live Stream Behavior */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <div className="w-full h-40 relative rounded-lg overflow-hidden bg-slate-200">
              <Image
                src="/images/developer-player-integration/Rectangle (23).png"
                alt="Live Stream Behavior"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
              <h3 className="text-slate-950 text-xl font-bold">Live Stream Behavior</h3>
            </div>
            <p className="text-slate-600 text-sm leading-5">
              Enforce strict live-edge syncing. Automatically monitor network drift and switch profiles to keep latencies under sub-second bounds.
            </p>
            <div className="flex flex-col gap-2.5 text-xs text-slate-950 font-semibold">
              <span>• Dynamic playlist window sliding</span>
              <span>• Behind-edge recovery loops</span>
              <span>• Temporary network disconnect handover</span>
            </div>
          </div>

          {/* Card 2: Video On Demand (VOD) */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-blue-500 flex flex-col gap-6 shadow-xs">
            <div className="w-full h-40 relative rounded-lg overflow-hidden bg-slate-200">
              <Image
                src="/images/developer-player-integration/Rectangle (24).png"
                alt="Video On Demand"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <h3 className="text-slate-950 text-xl font-bold">Video On Demand (VOD)</h3>
            </div>
            <p className="text-slate-600 text-sm leading-5">
              Deliver complete control across finite assets. Enable fast seeking buffers, persistence-caching strategies, and precise range availability limits.
            </p>
            <div className="flex flex-col gap-2.5 text-xs text-slate-950 font-semibold">
              <span>• Accurate multi-point seeking controls</span>
              <span>• Last playback position preservation</span>
              <span>• Dynamic pre-fetch and pipeline cleanup</span>
            </div>
          </div>
        </div>

        {/* Playback Profile Target Bar */}
        <div className="w-full p-5 bg-slate-50 rounded-xl border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-950 text-sm font-bold">PLAYBACK PROFILE TARGET</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-4 py-2 bg-teal-400 rounded-full text-slate-950 font-bold">
              Auto (Adaptive)
            </span>
            <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-slate-600 font-bold">
              1080p Source
            </span>
            <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-slate-600 font-bold">
              720p HD
            </span>
            <span className="px-4 py-2 bg-white rounded-full border border-gray-200 text-slate-600 font-bold">
              480p SD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
