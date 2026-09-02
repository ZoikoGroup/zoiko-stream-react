import React from 'react';
import Image from 'next/image';

import img1 from '@/public/images/support-help-center/Img (1).png';
import img2 from '@/public/images/support-help-center/Img (2).png';
import img3 from '@/public/images/support-help-center/Img (3).png';
import img4 from '@/public/images/support-help-center/Img (4).png';
import img6 from '@/public/images/support-help-center/Img (6).png';
import img7 from '@/public/images/support-help-center/Img (7).png';

const TASK_TAGS = [
  'Reset your password',
  'Why is my live stream not showing as live?',
  'Understand your invoice',
  'Find your API credentials',
  'Access recordings after a live event',
];

const TASK_CARDS = [
  { title: 'Account & Access', articles: '4 articles', image: img1 },
  { title: 'Billing & Usage', articles: '3 articles', image: img2 },
  { title: 'Live Events', articles: '3 articles', image: img3 },
  { title: 'Playback & Delivery', articles: '3 articles', image: img4 },
  { title: 'Developer & API', articles: '3 articles', image: img6 },
  { title: 'Security & Privacy', articles: '3 articles', image: img7 },
];

export default function SupportHelpCenterTasksSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wider">
            START HERE
          </span>
        </div>
        <h2 className="text-zinc-900 text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] leading-tight">
          A few high-value tasks to begin with.
        </h2>
      </div>

      {/* Task Pill Tags */}
      <div className="w-full flex flex-wrap items-center gap-3">
        {TASK_TAGS.map((tag, idx) => (
          <div
            key={idx}
            className="px-5 py-2.5 bg-slate-100 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 text-zinc-900 text-xs sm:text-sm font-medium font-['Inter'] hover:bg-slate-200 transition-colors cursor-pointer"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* 6 Category Image Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 pt-2">
        {TASK_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="h-32 bg-zinc-900 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xs"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/25 to-zinc-950/90 pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-0.5 z-10">
              <h3 className="text-white text-xs font-semibold font-['Inter'] leading-snug">
                {card.title}
              </h3>
              <span className="text-white/60 text-[10px] font-normal font-['IBM_Plex_Mono']">
                {card.articles}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
