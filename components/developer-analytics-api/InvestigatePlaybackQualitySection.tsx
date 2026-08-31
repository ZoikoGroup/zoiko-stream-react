import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Activity } from 'lucide-react';

const qualityMetrics = [
  {
    title: 'Startup Perf',
    desc: 'Time to first frame & player initialization metrics.',
    sample: 'startup_time_ms',
    badge: 'VERIFIED',
    badgeCls: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30',
  },
  {
    title: 'Success & Fail',
    desc: 'Granular hardware error rates & exit before play.',
    sample: 'playback_failures',
    badge: 'VERIFIED',
    badgeCls: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30',
  },
  {
    title: 'Rebuffering',
    desc: 'Stream stall ratios, frequency, and event duration.',
    sample: 'rebuffering_ratio',
    badge: 'VERIFIED',
    badgeCls: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30',
  },
  {
    title: 'Delivered Quality',
    desc: 'Resolution shifts, target bitrates, and adaptation.',
    sample: 'avg_bitrate_kbps',
    badge: 'PRO ONLY',
    badgeCls: 'bg-blue-500/10 text-blue-600 border border-blue-500/30',
  },
  {
    title: 'Session Health',
    desc: 'Aggregate system quality and health score calculations.',
    sample: 'playback_score_0_100',
    badge: 'EXPERIMENTAL',
    badgeCls: 'bg-blue-500/10 text-blue-600 border border-blue-500/30',
  },
];

export function InvestigatePlaybackQualitySection() {
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
            Investigate playback quality with metric definitions attached.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Playback-quality analysis includes verified measures across startup, playback success, rebuffering, delivered quality and session health.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {qualityMetrics.map((qm, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-between items-start gap-4 shadow-xs"
            >
              <div className="w-full flex justify-between items-center">
                  <Activity className="w-5 h-5 text-blue-500 " />
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono uppercase ${qm.badgeCls}`}>
                  {qm.badge}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-slate-950 text-base font-bold ">{qm.title}</h3>
                <p className="text-slate-600 text-xs leading-4">{qm.desc}</p>
              </div>

              <div className="w-full pt-3 border-t border-gray-200 flex flex-col gap-1">
                <span className="text-slate-600 text-[10px] font-bold  uppercase">
                  SAMPLE REGISTRY METRIC
                </span>
                <span className="text-blue-500 text-xs font-bold ">{qm.sample}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
