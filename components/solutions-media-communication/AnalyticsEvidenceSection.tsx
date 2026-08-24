import React from 'react';
import Image from 'next/image';

const items = [
  {
    title: 'Operational Health',
    desc: 'Real-time telemetry measuring stream state, active incidents, infrastructure dependency latency, unexpected errors, and recovery cycle timestamps.',
    img: '/images/Media-communications-page/Rectangle  (52).png',
  },
  {
    title: 'Playback Experience',
    desc: 'True audience-side performance tracking monitoring successful playback starts, unexpected buffering, device errors, and connection stability metrics.',
    img: '/images/Media-communications-page/Rectangle  (53).png',
  },
  {
    title: 'Content & Replay Performance',
    desc: 'Comprehensive viewership maps capturing live audience peaks vs replay engagement, asset lifecycle performance, and average continuation rate metrics.',
    img: '/images/Media-communications-page/Rectangle  (54).png',
  },
  {
    title: 'Workflow History',
    desc: 'Immutable logs tracking publisher permission adjustments, status changes, administrative actions, and audio track modifications.',
    img: '/images/Media-communications-page/Rectangle  (55).png',
  },
];

export function AnalyticsEvidenceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="w-[520px] h-[520px] absolute right-[-100px] bottom-[-100px] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 absolute left-[-180px] top-[-90px] bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Connect decisions to evidence — not vanity metrics
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Operational health, playback experience, content performance, and workflow history — with clear boundaries on what is measured.
          </p>
        </div>

        {/* Active Filters Bar */}
        <div className="w-full p-4 bg-slate-50 rounded-lg border border-gray-200 flex flex-wrap items-center gap-6 text-xs">
          <span className="text-slate-900 font-bold font-['Space_Grotesk']">Active Filters:</span>
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-normal font-['Inter']">Date:</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-gray-200 text-slate-900 font-semibold font-['Inter']">Last 7 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-normal font-['Inter']">Workflow:</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-gray-200 text-slate-900 font-semibold font-['Inter']">Live Broadcast</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-normal font-['Inter']">Destination:</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-gray-200 text-slate-900 font-semibold font-['Inter']">All Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-normal font-['Inter']">Asset:</span>
            <span className="px-2.5 py-1 bg-white rounded-md border border-gray-200 text-slate-900 font-semibold font-['Inter']">Primary Stream</span>
          </div>
        </div>

        {/* 4 Feature List Items */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="w-full bg-slate-50 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-start items-center overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative w-full md:w-56 h-44 bg-slate-200 flex-shrink-0">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-6 flex flex-col justify-start items-start gap-3">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {it.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
