import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import videoImg0 from '@/public/images/resource-guides/video-image.png';
import videoImg1 from '@/public/images/resource-guides/video-image (1).png';

const VISUAL_CARDS = [
  {
    tag: 'TUTORIAL SERIES',
    count: '15+ Videos',
    title: 'Video Tutorials',
    desc: 'Step-by-step video walkthroughs of common workflows and features. Learn to optimize ingest setups and customize playouts.',
    cta: 'Browse tutorials',
    href: '/resource-video-tutorial',
    image: videoImg0,
  },
  {
    tag: 'LIVE & ON-DEMAND',
    count: 'Weekly Schedule',
    title: 'Webinars & Events',
    desc: 'Live sessions with ZoikoStream experts covering advanced architectures, delivery metrics, and live user Q&A sessions.',
    cta: 'View events',
    href: '/resource-webinar-and-events',
    image: videoImg1,
  },
];

export default function ResourceGuidesVisualLearningSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
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

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
          Visual & live learning.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Learn by watching or attending live sessions.
        </p>
      </div>

      {/* 2 Large Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {VISUAL_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-xl transition-shadow group"
          >
            <div className="relative w-full h-64 bg-gray-900 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-8 flex flex-col justify-start items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-center text-xs">
                <span className="text-blue-500 font-bold font-['Space_Grotesk'] tracking-wide">
                  {card.tag}
                </span>
                <span className="text-slate-600 font-normal font-['Inter']">
                  {card.count}
                </span>
              </div>

              <h3 className="text-slate-900 text-2xl font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>

              <p className="text-slate-600 text-base font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>

              <div className="w-full h-0 border-b border-gray-200 my-1 mt-auto" />

              <Link
                href={card.href}
                className="text-blue-500 hover:text-blue-600 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-2 transition-colors"
              >
                {card.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
