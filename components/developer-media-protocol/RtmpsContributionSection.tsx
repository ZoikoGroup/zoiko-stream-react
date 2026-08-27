import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { BookCopy, Copy, CopyIcon, Copyleft, CopyPlus, Eye } from 'lucide-react';

const rtmpsScenarios = [
  'Using standard legacy hardware or OBS Studio software out-of-the-box.',
  'Operating in restricted corporate firewalls that only allow standard TLS ports (443).',
  'Stability and broad support are favored over ultra-low sub-second latency requirements.',
];

export function RtmpsContributionSection() {
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
            RTMPS
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            RTMPS contribution — the compatibility-oriented secure RTMP path.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h3 className="text-slate-900 text-xl font-bold font-mono">Protocol Description</h3>
              <p className="text-slate-600 text-base leading-6">
                Real-Time Messaging Protocol Secure (RTMPS) wraps standard RTMP inside a secure TLS/SSL tunnel. It remains the industry baseline for contribution because of its vast ecosystem compatibility, ensuring almost any encoder can connect without special configurations.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-slate-900 text-lg font-bold font-mono">When to consider RTMPS</h4>
              {rtmpsScenarios.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-1 border-l-2 border-b-2 border-emerald-500 -rotate-45" />
                  </div>
                  <span className="text-slate-600 text-sm leading-5">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Endpoint Card */}
          <div className="lg:col-span-5 p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-xs">
            <div className="w-full flex justify-between items-center">
              <span className="text-slate-900 text-base font-bold font-mono">VERIFIED ENDPOINT</span>
              <span className="px-2.5 py-1 bg-emerald-500/10 rounded border border-emerald-500/30 text-emerald-600 text-xs font-semibold uppercase">
                READY TO INGEST
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-600 text-xs font-bold font-mono">INGEST SERVER URL</span>
              <div className="p-3 bg-white rounded-lg border border-gray-200 flex justify-between items-center font-mono text-sm text-slate-900">
                <span>rtmps://live.zoikostream.com:443/live/</span>
                <span className="text-slate-400 cursor-pointer text-xs"><CopyIcon></CopyIcon></span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-slate-600 text-xs font-bold font-mono">STREAM SECRET / KEY</span>
              <div className="p-3 bg-white rounded-lg border border-gray-200 flex justify-between items-center font-mono text-sm text-slate-600">
                <span className="tracking-widest">••••••••••••••••••••••••••••</span>
                <div className="flex gap-2 text-xs">
                  <span className="cursor-pointer"><Eye></Eye></span>
                  <span className="cursor-pointer"><CopyIcon></CopyIcon></span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200" />

            <div className="flex flex-col gap-2">
              <span className="text-slate-900 text-sm font-bold font-mono">OBS preset recommendations:</span>
              <p className="text-slate-600 text-xs leading-5">
                • Rate Control: CBR • Keyframe Interval: 2 seconds • Profile: main or high
              </p>
            </div>

            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
              <span className="text-slate-950 text-base font-bold font-mono">Open RTMPS setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
