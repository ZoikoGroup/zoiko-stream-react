import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/50 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Recording-assest/bg.png"
          alt="Recording and Assets Hero Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 w-fit">
          <span className="text-teal-400 text-xs font-bold uppercase tracking-wide">
            RECORDING AND ASSETS
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px]">
          Manage recorded media from stream to ready asset.
        </h1>

        <p className="text-stone-300 text-base lg:text-lg font-normal leading-7">
          Understand recording lineage, asset readiness, stored-media operations, automation, security handoffs, and recovery paths without guessing at hidden processing states.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-slate-950 text-base font-bold">Understand the asset lifecycle</span>
          </div>
          <div className="px-6 py-3 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-bold">Open API reference</span>
          </div>
        </div>
      </div>

      {/* Right Box: ASSET DETAIL CONSOLE */}
      <div className="relative z-10 w-full lg:w-[500px] p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-5 shadow-2xl backdrop-blur-md">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-300" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <span className="text-slate-500 text-xs font-bold tracking-wide uppercase">
            ASSET DETAIL CONSOLE
          </span>
        </div>

        <div className="w-full p-4 bg-gray-800 rounded-lg border border-gray-800 flex flex-col gap-3">
          <div className="w-full flex justify-between items-center">
            <span className="text-white text-base font-bold truncate">stream_session_rec_9104.mp4</span>
            <div className="px-2 py-0.5 bg-emerald-500/20 rounded-full border border-emerald-500 shrink-0">
              <span className="text-teal-400 text-xs font-bold">READY</span>
            </div>
          </div>
          <div className="w-full h-px bg-gray-800" />
          <div className="flex flex-col gap-1.5 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Origin Stream</span>
              <span className="text-slate-400">live-event-prod-02</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Recorded</span>
              <span className="text-slate-400">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Duration</span>
              <span className="text-slate-400">00:45:12</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2.5">
          <div className="p-2.5 bg-gray-800/30 rounded-md flex items-center gap-3">
              <span className="text-teal-400 text-[10px] font-bold">✓</span>
            <span className="text-slate-400 text-xs">Handoff payload validated</span>
          </div>

          <div className="p-2.5 bg-gray-800/30 rounded-md flex items-center gap-3">
              <span className="text-teal-400 text-[10px] font-bold">✓</span>
            <span className="text-slate-400 text-xs">Transcoding and multi-bitrate ready</span>
          </div>

          <div className="p-2.5 bg-gray-800/30 rounded-md flex items-center gap-3">
              <span className="text-teal-400 text-[10px] font-bold">✓</span>
            <span className="text-slate-400 text-xs">DRM and token boundaries initialized</span>
          </div>
        </div>
      </div>
    </section>
  );
}
