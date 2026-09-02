import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import cardImg9 from '@/public/images/resource-guides/CardImage (9).png';
import cardImg10 from '@/public/images/resource-guides/CardImage (10).png';
import cardImg11 from '@/public/images/resource-guides/CardImage (11).png';

const FEATURED_CARDS = [
  {
    badge: 'FEATURED',
    title: 'Getting Started with ZoikoStream',
    desc: 'Assemble and launch your first live broadcast pipeline. Learn how to config inputs, transcode on-the-fly, and deliver to a custom-branded web player.',
    level: 'Introductory',
    time: '12 min',
    image: cardImg9,
    href: '#',
  },
  {
    badge: 'FEATURED',
    title: 'Live Event Streaming Setup',
    desc: 'Redundant stream routing configurations designed for zero-fail public event broadcasts. Setup fallback RTMP pulls and stream telemetry outputs.',
    level: 'Intermediate',
    time: '18 min',
    image: cardImg10,
    href: '#',
  },
  {
    badge: 'FEATURED',
    title: 'Video API Integration Guide',
    desc: 'Deep-dive implementation code for embedding video streams natively into iOS and Android apps. Authenticate clients securely and control players.',
    level: 'Advanced',
    time: '15 min',
    image: cardImg11,
    href: '#',
  },
];

export default function ResourceGuidesFeaturedSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden z-10">
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
          Featured guides.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Handpicked by our solutions engineering team to get you from code to stream delivery fast.
        </p>
      </div>

      {/* 3 Featured Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURED_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-xl transition-shadow group"
          >
            <div className="relative w-full h-48 bg-gray-900 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-7 flex flex-col justify-start items-start gap-4 flex-1">
              <div className="px-2.5 py-1 bg-teal-400/10 rounded-sm outline outline-1 outline-offset-[-1px] outline-teal-400/30 inline-flex items-center justify-center">
                <span className="text-teal-400 text-xs font-bold font-['Inter'] uppercase">
                  {card.badge}
                </span>
              </div>

              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                {card.title}
              </h3>

              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>

              <div className="w-full h-0 border-b border-gray-200 my-1" />

              <div className="w-full flex justify-between items-center mt-auto">
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 text-xs font-normal font-['Inter']">
                    {card.level}
                  </span>
                  <span className="text-slate-600 text-xs font-normal font-['Inter']">
                    •
                  </span>
                  <span className="text-slate-600 text-xs font-normal font-['Inter']">
                    {card.time}
                  </span>
                </div>

                <Link
                  href={card.href}
                  className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-1 transition-colors"
                >
                  Start reading <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
