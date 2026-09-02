import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import cardImg18 from '@/public/images/resource-guides/CardImage (18).png';
import cardImg19 from '@/public/images/resource-guides/CardImage (19).png';
import cardImg20 from '@/public/images/resource-guides/CardImage (20).png';
import cardImg21 from '@/public/images/resource-guides/CardImage (21).png';
import cardImg22 from '@/public/images/resource-guides/CardImage (22).png';
import cardImg23 from '@/public/images/resource-guides/CardImage (23).png';

const TOPIC_CARDS = [
  {
    title: 'Video Ingest & Encoding',
    count: '8 Guides',
    desc: 'Redundant RTMP/SRT push stream setup, adaptive transcode configurations, and ingest latency controls.',
    image: cardImg18,
  },
  {
    title: 'Playback & Delivery',
    count: '6 Guides',
    desc: 'Setting up Zoiko CDN global geographical edge delivery rules, player optimizations, and fallback loops.',
    image: cardImg19,
  },
  {
    title: 'Live Streaming',
    count: '7 Guides',
    desc: 'Managing low-latency high-concurrency streams, active redundant loops, and stream diagnostics.',
    image: cardImg20,
  },
  {
    title: 'Security & Access',
    count: '5 Guides',
    desc: 'JSON Web Tokens player validation, DRM configurations, geoblocking setups, and secure enterprise networks.',
    image: cardImg21,
  },
  {
    title: 'API & Integrations',
    count: '9 Guides',
    desc: 'Integrating developer API calls, webhook callbacks, client-side SDK parameters, and live event monitoring.',
    image: cardImg22,
  },
  {
    title: 'Operations & Monitoring',
    count: '4 Guides',
    desc: 'Analyzing pipeline telemetry logs, stream health checks, and user performance data insights.',
    image: cardImg23,
  },
];

export default function ResourceGuidesTopicsSection() {
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
          Explore by topic.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Browse curated collections of guides organized by technical domain. Learn the ins and outs of our video pipeline.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOPIC_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative w-full h-40 bg-gray-900 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <div className="w-full flex justify-between items-center gap-2">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] truncate">
                  {card.title}
                </h3>
                <div className="px-2.5 py-1 bg-teal-400/10 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-400/30 flex items-center shrink-0">
                  <span className="text-teal-400 text-xs font-semibold font-['Inter']">
                    {card.count}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
