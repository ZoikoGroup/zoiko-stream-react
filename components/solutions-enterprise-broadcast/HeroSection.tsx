import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/75 border-b border-gray-800 flex flex-col lg:flex-row justify-start items-center gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solutions-enterprise-broadcast/bg.png"
          alt="Enterprise Broadcast Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 inline-flex items-center">
          <span className="text-teal-400 text-xs font-bold  tracking-wide uppercase">
            ENTERPRISE BROADCAST
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold  leading-tight lg:leading-[60px]">
          Run enterprise broadcasts with control from readiness to replay.
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
          Coordinate contribution, live production, audience access, accessibility, recording, replay, analytics, and operational response through an explicit enterprise broadcast workflow — with current state, ownership, and evidence visible at every stage.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-slate-900 text-base font-bold ">
              Talk to an Enterprise Media Expert
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border-[1.5px] border-slate-400 flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold ">
              Explore Enterprise Broadcasting
            </span>
          </div>
        </div>
      </div>

      {/* Right Workflow Engine Box */}
      <div className="relative z-10 w-full lg:w-[500px] p-6 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col justify-start items-start gap-4 backdrop-blur-sm">
        <div className="w-full flex justify-between items-center">
          <span className="text-white text-xs font-bold  tracking-wide uppercase">
            BROADCAST WORKFLOW ENGINE
          </span>
          <div className="px-2 py-1 bg-red-500/10 rounded-sm flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-[10px] font-bold  uppercase">LIVE PROGRAM</span>
          </div>
        </div>

        <div className="w-full border-t border-gray-800" />

        <div className="w-full flex flex-col gap-3">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-2">
              <span className="text-slate-400 text-xs font-normal ">READINESS STATE</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-white text-sm font-bold ">Ready (Ver. 1.4)</span>
              </div>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-2">
              <span className="text-slate-400 text-xs font-normal ">ACTIVE SOURCE</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-white text-sm font-bold ">SRT-Ingest-Main</span>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-2">
              <span className="text-slate-400 text-xs font-normal ">AUDIENCE &amp; ACCESS</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-white text-sm font-bold ">SAML SSO Gated</span>
              </div>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-2">
              <span className="text-slate-400 text-xs font-normal ">ACCESSIBILITY AI</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-white text-sm font-bold ">Auto Captions Active</span>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-2">
              <span className="text-slate-400 text-xs font-normal ">ARCHIVAL RECORDING</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-white text-sm font-bold ">Active (Cold Sync)</span>
              </div>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-2">
              <span className="text-slate-400 text-xs font-normal ">OPERATIONAL STATE</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-white text-sm font-bold ">Nominal Pipeline</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-800" />

        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-teal-400 rounded-xs" />
          </div>
          <span className="text-teal-400 text-xs font-bold ">
            Global CDN Edge Delivery: 99.999% SLA Target
          </span>
        </div>
      </div>
    </section>
  );
}
