import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Activity,  GitMergeIcon,  NotepadText, Settings } from 'lucide-react';

const steps = [
  { num: 'STEP 01', title: 'Create Resource',icon:NotepadText },
  { num: 'STEP 02', title: 'Select Protocol',icon:GitMergeIcon },
  { num: 'STEP 03', title: 'Ingest Details',icon:Settings },
  { num: 'STEP 04', title: 'Publish & Monitor',icon:Activity },
];

export function CreateStreamConfigurePublisherSection() {
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
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Create the stream, then configure the publisher with the verified ingest details
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Live Streaming API owns stream creation and lifecycle. Media Protocols owns protocol choice, configuration interpretation, and qualification. This section bridges the two.
          </p>
        </div>

        {/* Step Indicator Bar */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {steps.map((st, idx) => {
            const Icon=st.icon;
            return(
            <div key={idx} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center shrink-0">
                <Icon className="text-teal-400 w-5 h-5"/>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-600 text-[10px] font-bold font-mono">{st.num}</span>
                <span className="text-slate-900 text-xs font-bold font-mono">{st.title}</span>
              </div>
            </div>
            )})}
        </div>

        {/* 2 Info Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Stream Resource Info */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-900 text-lg font-bold font-mono">Stream Resource Info</h3>
            <div className="flex flex-col divide-y divide-gray-200 text-xs">
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">STREAM ID</span>
                <span className="text-blue-500 font-bold font-mono">str_abc123xyz</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">STATUS</span>
                <span className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 text-teal-400 font-bold font-mono uppercase">
                  Created
                </span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">PROTOCOL SELECTOR</span>
                <span className="text-slate-900 font-bold">RTMPS</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">REGION</span>
                <span className="text-slate-900">US-East (Virginia)</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">CREATED AT</span>
                <span className="text-slate-900 font-mono">2024-06-15T10:30:00Z</span>
              </div>
            </div>
          </div>

          {/* Card 2: Approved Ingest Config */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <h3 className="text-slate-900 text-lg font-bold font-mono">Approved Ingest Config</h3>
            <div className="flex flex-col divide-y divide-gray-200 text-xs">
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">RTMPS ENDPOINT</span>
                <span className="text-slate-900 font-mono">rtmps://ingest.zoiko.stream/live</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">STREAM KEY</span>
                <span className="text-slate-900 font-mono">••••••••••••••••</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">VIDEO PRESET</span>
                <span className="text-slate-900 font-bold">H.264 High, 1080p60, 6 Mbps</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">AUDIO PRESET</span>
                <span className="text-slate-900">AAC-LC, 48kHz, 128kbps</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-slate-600 font-mono font-bold">INGEST STATUS</span>
                <span className="px-2.5 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30 text-teal-400 font-bold font-mono uppercase">
                  Ready to publish
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note & CTAs */}
        <div className="w-full flex flex-col items-center gap-5">
          <p className="text-slate-600 text-xs text-center max-w-2xl">
            Live Streaming API owns stream creation and lifecycle. Media Protocols owns protocol choice, configuration, and qualification.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
              <span className="text-slate-950 text-base font-bold font-mono">Open Live Streaming API</span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-slate-900 transition-colors">
              <span className="text-slate-900 text-base font-bold font-mono">Start building</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
