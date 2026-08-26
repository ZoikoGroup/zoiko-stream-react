import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const milestonesRow1 = [
  {
    num: '1',
    title: 'Confirm Access',
    desc: 'Developer environment & scopes confirmed active.',
    why: 'Prevents auth failures during payload transmission.',
  },
  {
    num: '2',
    title: 'Credentials Secure',
    desc: 'Server-side variables validated without leak.',
    why: 'Secures API pipeline against reverse-engineering.',
  },
  {
    num: '3',
    title: 'Stream Resource',
    desc: 'UUID-mapped ingest endpoint instantiated.',
    why: 'Provides the landing target for the live feed.',
  },
  {
    num: '4',
    title: 'Source Connected',
    desc: 'RTMP/SRT contribution handshake completed.',
    why: 'Validates ingest pathway outside of local simulator.',
  },
];

const milestonesRow2 = [
  {
    num: '5',
    title: 'Signal Verified',
    desc: 'Telemetry confirms receipt of frame telemetry.',
    why: 'Guarantees data integrity prior to player orchestration.',
  },
  {
    num: '6',
    title: 'Playback Prepared',
    desc: 'HLS manifests generated & signed successfully.',
    why: 'Prepares distribution network edges for egress.',
  },
  {
    num: '7',
    title: 'Viewer Verified',
    desc: 'End-to-end telemetry confirms final frame egress.',
    why: 'Absolute proof of stream delivery to final viewer.',
  },
];

export function EveryMilestoneVerifiedSection() {
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-12">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Every Milestone Must Be Verified, Not Assumed
          </h2>
        </div>

        {/* Row 1: 4 Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestonesRow1.map((item, idx) => {
            return (
              <div
                key={idx}
                className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-between gap-5 shadow-xs hover:shadow-md transition-shadow backdrop-blur-sm min-h-[260px]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="w-8 h-8 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-xs">
                      <span className="text-slate-900 text-sm font-bold">{item.num}</span>
                    </div>
                    <div className="px-2 py-1 bg-gray-200 rounded-full">
                      <span className="text-slate-600 text-[9px] font-bold">INCOMPLETE</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-slate-900 text-base font-bold">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-xs font-normal leading-5">{item.desc}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200/80 flex flex-col gap-1">
                  <span className="text-blue-500 text-xs font-bold">WHY THIS MATTERS:</span>
                  <p className="text-slate-600 text-xs font-normal leading-4">{item.why}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: 3 Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[912px]">
          {milestonesRow2.map((item, idx) => {
            return (
              <div
                key={idx}
                className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col justify-between gap-5 shadow-xs hover:shadow-md transition-shadow backdrop-blur-sm min-h-[260px]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="w-8 h-8 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-xs">
                      <span className="text-slate-900 text-sm font-bold">{item.num}</span>
                    </div>
                    <div className="px-2 py-1 bg-gray-200 rounded-full">
                      <span className="text-slate-600 text-[9px] font-bold">INCOMPLETE</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-slate-900 text-base font-bold">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 text-xs font-normal leading-5">{item.desc}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200/80 flex flex-col gap-1">
                  <span className="text-blue-500 text-xs font-bold">WHY THIS MATTERS:</span>
                  <p className="text-slate-600 text-xs font-normal leading-4">{item.why}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
