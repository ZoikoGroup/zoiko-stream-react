import React from 'react';
import Image from 'next/image';

const workflows = [
  {
    title: 'Live product video',
    desc: 'Embed live streams inside your own product experience.',
    prereq: 'Prereq: Developer access',
  },
  {
    title: 'Live broadcast',
    desc: 'Broadcast a scheduled or continuous live event.',
    prereq: 'Prereq: Contribution setup',
  },
  {
    title: 'On-demand media',
    desc: 'Upload, process, and deliver on-demand video assets.',
    prereq: 'Prereq: VOD API access',
  },
  {
    title: 'Secure / private playback',
    desc: 'Restrict who can view an asset or stream.',
    prereq: 'Prereq: Access policy configured',
  },
  {
    title: 'Player integration',
    desc: 'Embed or build a custom player against a ready asset.',
    prereq: 'Prereq: Playback ID available',
  },
  {
    title: 'Recording & replay',
    desc: 'Turn a live session into a durable, replayable asset.',
    prereq: 'Prereq: Recording enabled',
  },
];

export function GuidanceByBuildingSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-zinc-950 text-slate-100 border-b border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span className="text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider">
              FIND GUIDANCE BY WHAT YOU&apos;RE BUILDING
            </span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
            Find guidance by what you are building.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-[850px]">
            Each workflow crosses multiple stages and documentation surfaces — this page routes rather than pretending one guide owns the whole system.
          </p>
        </div>

        {/* 2 Columns: 6 Cards (3x2) + Right Image Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Grid 6 Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {workflows.map((wf) => (
              <div
                key={wf.title}
                className="p-5 bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col justify-between gap-4 shadow-xl hover:border-teal-500/50 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-100 text-base font-bold">{wf.title}</h3>
                  <p className="text-slate-400 text-xs leading-5">{wf.desc}</p>
                </div>
                <div className="flex flex-col gap-2 pt-2 border-t border-gray-800/60">
                  <span className="text-slate-500 text-[10px] font-mono leading-4">{wf.prereq}</span>
                  <span className="text-teal-400 text-xs font-semibold hover:underline cursor-pointer">
                    Start here →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-5 relative min-h-[360px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <Image
              src="/images/documentation/image (1).png"
              alt="Guidance Feature Image"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent p-6 flex flex-col justify-end">
              <span className="text-white/75 text-[10px] font-mono">Photo: ZoikoStream Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
