import React from 'react';
import Image from 'next/image';

import bg7 from '@/public/images/resources-overview/section-7bg.png';

const TIMELINE_ITEMS = [
  {
    date: 'Aug 2026',
    tag: 'Feature',
    tagStyle: 'bg-teal-400/10 text-teal-400 outline-teal-400',
    title: 'Adaptive Bitrate 3.0',
    description: 'Next-generation ABR algorithm with 40% faster quality switching and predictive buffer management.',
  },
  {
    date: 'Aug 2026',
    tag: 'Improvement',
    tagStyle: 'bg-blue-500/10 text-blue-500 outline-blue-500',
    title: 'Dashboard Analytics Redesign',
    description: 'Rebuilt analytics dashboard with real-time viewer heatmaps and engagement scoring.',
  },
  {
    date: 'Jul 2026',
    tag: 'Feature',
    tagStyle: 'bg-teal-400/10 text-teal-400 outline-teal-400',
    title: 'Multi-Region Failover',
    description: 'Automated multi-region failover with sub-second switchover for enterprise broadcast streams.',
  },
  {
    date: 'Jul 2026',
    tag: 'Fix',
    tagStyle: 'bg-white/10 text-gray-200 outline-gray-200',
    title: 'WebRTC Latency Optimization',
    description: 'Reduced P95 glass-to-glass latency to under 300ms for interactive live sessions.',
  },
  {
    date: 'Jun 2026',
    tag: 'Feature',
    tagStyle: 'bg-teal-400/10 text-teal-400 outline-teal-400',
    title: 'AI-Powered Captions',
    description: 'Real-time multilingual caption generation with 98.5% accuracy across 40+ languages.',
  },
];

export default function ResourceOverviewTimelineSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-gray-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg7}
          alt="What's New Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-96 left-[1090px] -top-36 absolute bg-teal-400/5 rounded-full blur-[50px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-4xl font-bold font-['Space_Grotesk'] leading-[48px]">
          What&apos;s New
        </h2>
        <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-7">
          Stay current with platform changes, feature releases, and improvements
        </p>
      </div>

      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-4xl flex flex-col justify-start items-start">
          {TIMELINE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="w-full py-6 border-b border-gray-800 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 sm:gap-10 last:border-b-0"
            >
              <div className="w-40 flex flex-col justify-start items-start gap-3 shrink-0">
                <span className="text-gray-400 text-sm font-bold font-['Space_Grotesk']">
                  {item.date}
                </span>
                <div className={`px-2.5 py-1 rounded-full outline outline-1 outline-offset-[-1px] inline-flex ${item.tagStyle}`}>
                  <span className="text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-start items-start gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-base font-normal font-['Inter'] leading-5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
