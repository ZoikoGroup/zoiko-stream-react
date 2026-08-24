
import React from 'react';
import Image from 'next/image';

const patterns = [
  {
    title: 'Live Broadcast',
    desc: 'Operate a live one-to-many media workflow with current operational state.',
    img: '/images/Media-communications-page/bg (177).png',
  },
  {
    title: 'Scheduled Programming',
    desc: 'Coordinate a scheduled live window where readiness and ownership matter.',
    img: '/images/Media-communications-page/bg (178).png',
  },
  {
    title: 'Live-to-Replay',
    desc: 'Carry a live program into controlled replay with audience continuity.',
    img: '/images/Media-communications-page/bg (179).png',
  },
  {
    title: 'On-Demand / Premiere',
    desc: 'Prepare, publish and operate an on-demand or timed-release media asset.',
    img: '/images/Media-communications-page/bg (180).png',
  },
  {
    title: 'Multi-Destination',
    desc: 'Evaluate more than one approved distribution destination.',
    img: '/images/Media-communications-page/bg (181).png',
  },
  {
    title: 'Archive / Preservation',
    desc: 'Preserve approved assets, metadata and provenance for durable access.',
    img: '/images/Media-communications-page/bg (182).png',
  },
];

export function WorkflowPatternsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Media-communications-page/bg (176).png"
          alt="Workflow Patterns Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Select the workflow pattern that matches your operation
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Professional media workflows can combine live, replay, distribution and archive needs. Choose one or more patterns.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patterns.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden backdrop-blur-sm hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-40 bg-zinc-950">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-6 flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
