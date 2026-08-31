import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { CopyIcon, Eye } from 'lucide-react';

const whipScenarios = [
  'Browser-based or WebRTC-native contribution.',
  'Standards-based HTTP signaling preferred.',
  'Low-latency ingest where sub-second matters.',
  'Environments where SRT/RTMPS infrastructure is unavailable.',
];

const mentalFlow = [
  { step: 'Publisher', sub: 'Source' },
  { step: 'HTTP POST', sub: 'Signaling' },
  { step: 'WHIP Endpoint', sub: 'SDP Exch.' },
  { step: 'WebRTC Media', sub: 'Flowing' },
];

const stateWorkflow = [
  { label: 'IDLE', cls: 'bg-gray-200 text-slate-600' },
  { label: 'REQUESTING', cls: 'bg-gray-200 text-slate-600' },
  { label: 'AUTHORIZED', cls: 'bg-gray-200 text-slate-600' },
  { label: 'NEGOTIATED', cls: 'bg-orange-500/10 text-orange-600 border border-orange-500/30' },
  { label: 'MEDIA FLOWING Flowing', cls: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 font-bold' },
  { label: 'ENDED', cls: 'bg-gray-200 text-slate-600' },
];

export function WhipContributionSection() {
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
            WHIP contribution for standards-based WebRTC ingest workflows
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            WHIP is the WebRTC-HTTP Ingestion Protocol standardized in RFC 9725. It uses HTTP signaling to establish a WebRTC ingest session. The publisher creates a session through the WHIP endpoint; media then flows over the negotiated WebRTC transport.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <div className="p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-5 shadow-xs">
              <h3 className="text-slate-900 text-xl font-bold  ">When to consider WHIP</h3>
              <div className="flex flex-col gap-3.5">
                {whipScenarios.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-1.5 border-l-2 border-b-2 border-teal-400 -rotate-45" />
                    </div>
                    <span className="text-slate-600 text-sm leading-5">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mental Model Flow Box */}
            <div className="p-6 bg-slate-50 rounded-xl border border-gray-200 flex flex-col gap-4 shadow-xs">
              <span className="text-slate-900 text-xs font-bold   uppercase">
                RFC 9725 MENTAL MODEL FLOW
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {mentalFlow.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-md border border-gray-200 flex flex-col items-center justify-center text-center gap-1"
                  >
                    <span className="text-slate-900 text-xs font-bold  ">{item.step}</span>
                    <span className="text-slate-600 text-[10px]">{item.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Session Details Card */}
          <div className="lg:col-span-5 p-8 bg-white rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-sm">
            <div className="w-full flex justify-between items-center">
              <span className="text-slate-900 text-base font-bold  ">SESSION DETAILS</span>
              <span className="px-2.5 py-1 bg-orange-500/10 rounded-full border border-orange-500/30 text-orange-600 text-xs font-bold   uppercase">
                RFC 9725
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold  ">WHIP ENDPOINT</span>
                <div className="p-3 bg-slate-50 rounded-lg border border-gray-200 flex justify-between items-center   text-sm text-slate-900">
                  <span>https://whip.zoikostream.com/v1/session</span>
                  <span className="text-teal-400 cursor-pointer text-xs"><CopyIcon></CopyIcon></span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold  ">BEARER AUTHORIZATION</span>
                <div className="p-3 bg-slate-50 rounded-lg border border-gray-200 flex justify-between items-center   text-sm text-slate-600">
                  <span className="tracking-widest">••••••••••••••••••••••••••••</span>
                  <div className="flex gap-2 text-xs">
                    <span className="cursor-pointer"><Eye></Eye></span>
                    <span className="text-teal-400 cursor-pointer"><CopyIcon></CopyIcon></span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-1 text-xs  ">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-600 text-[10px] font-bold">ICE STRATEGY</span>
                  <span className="text-slate-900 font-bold">STUN/TURN</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-600 text-[10px] font-bold">MEDIA CODECS</span>
                  <span className="text-slate-900 font-bold">Opus/VP8/H.264</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-600 text-[10px] font-bold">TERMINATION</span>
                  <span className="text-slate-900 font-bold">HTTP DELETE</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <span className="text-slate-600 text-[10px] font-bold  ">STATE WORKFLOW</span>
                <div className="flex flex-wrap gap-1.5">
                  {stateWorkflow.map((item, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-full text-[10px]   ${item.cls}`}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <div className="flex-1 px-4 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
                <span className="text-slate-950 text-sm font-bold  ">Open WHIP setup</span>
              </div>
              <div className="flex-1 px-4 py-3.5 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-slate-900 transition-colors">
                <span className="text-slate-900 text-sm font-bold  ">Start building</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
