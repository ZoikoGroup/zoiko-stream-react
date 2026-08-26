import React from 'react';
import Image from 'next/image';
import {  Copy, EyeOff,    CircleAlert } from 'lucide-react';

const livenessRail = [
  { state: 'Not Connected', active: true, cls: 'bg-teal-400 text-gray-950 font-bold' },
  { state: 'Connecting', active: false, cls: 'bg-gray-950 text-slate-400' },
  { state: 'Receiving', active: false, cls: 'bg-gray-950 text-slate-400' },
  { state: 'Degraded', active: false, cls: 'bg-gray-950 text-slate-400' },
  { state: 'Lost', active: false, cls: 'bg-gray-950 text-slate-400' },
];

export function ConnectContributionSourceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quickstart/bg (20).png"
          alt="Connect Contribution Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Connect a Contribution Source
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Broadcast streams rely on standard ingestion media protocols. Connect any hardware or software contribution source to negotiate live pipelines.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Card: RTMP Contribution */}
          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-white text-base font-bold">RTMP Contribution</h3>
              </div>
              <div className="px-2.5 py-1 bg-gray-800 rounded-sm">
                <span className="text-teal-400 text-[10px] font-bold tracking-wider">RECOMMENDED</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-normal">RTMP Ingest Server URL</span>
                <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center">
                  <span className="text-white text-xs font-mono">rtmp://ingest.zoiko.com/live</span>
                  <Copy className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-normal">Ingest Stream Key</span>
                <div className="p-3 bg-gray-950 rounded-lg border border-gray-800 flex justify-between items-center">
                  <span className="text-slate-400 text-sm font-mono tracking-widest">
                    ••••••••••••••••••••••••••••••••
                  </span>
                  <div className="flex items-center gap-3">
                    <EyeOff className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white transition-colors" />
                    <Copy className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Liveness State Rail */}
            <div className="flex flex-col gap-2.5 pt-2">
              <span className="text-slate-400 text-xs font-bold tracking-wide">LIVENESS STATE RAIL</span>
              <div className="flex items-center gap-1.5 overflow-x-auto">
                {livenessRail.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 min-w-[80px] px-2.5 py-2 rounded-sm flex justify-center items-center text-[10px] uppercase transition-colors ${item.cls}`}
                  >
                    {item.state}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Security & Specs */}
          <div className="flex flex-col gap-8">
            <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-500/20 flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <CircleAlert className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <h3 className="text-amber-200 text-base font-bold">KEEP STREAM KEYS SECURE</h3>
              </div>
              <p className="text-amber-200 text-sm font-normal leading-5">
                Ingest stream keys allow anyone to transmit video streams to your allocated billable target. Regenerate keys inside the platform if they are committed or screen-shared in public spaces.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm font-bold tracking-wide uppercase">
                  CONFIGURATION SPECS
                </span>
              </div>
              <div className="text-slate-400 text-sm font-normal leading-6 space-y-2">
                <div className="flex items-start gap-2">
                  <p>-**Video Codec: H.264 (AVC) Baseline or Main Profile.-**Keyframe Interval: 2.0 seconds mandatory.-**Rate Control:CBR recommended for optimal stability.</p>
                </div>
                
              </div>
            </div>

            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md w-fit">
              <span className="text-gray-950 text-base font-bold">Verify Signal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
