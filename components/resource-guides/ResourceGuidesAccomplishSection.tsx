import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import cardImg0 from '@/public/images/resource-guides/CardImage.png';
import cardImg1 from '@/public/images/resource-guides/CardImage (1).png';
import cardImg2 from '@/public/images/resource-guides/CardImage (2).png';
import cardImg3 from '@/public/images/resource-guides/CardImage (3).png';
import cardImg4 from '@/public/images/resource-guides/CardImage (4).png';
import cardImg5 from '@/public/images/resource-guides/CardImage (5).png';

const ACCOMPLISH_CARDS = [
  {
    title: 'Getting Started',
    badge: '3 Guides',
    desc: 'Your first live stream workflow built in under ten minutes.',
    image: cardImg0,
  },
  {
    title: 'Implementation',
    badge: '5 Guides',
    desc: 'Detailed code walk-throughs for API integration and player setup.',
    image: cardImg1,
  },
  {
    title: 'Live Operations',
    badge: '4 Guides',
    desc: 'How to manage high-stakes events, stream latency, and live fallbacks.',
    image: cardImg2,
  },
  {
    title: 'Security & Compliance',
    badge: '4 Guides',
    desc: 'Token authentication, watermarking, and secure corporate streaming.',
    image: cardImg3,
  },
  {
    title: 'Media Processing',
    badge: '5 Guides',
    desc: 'Transcoding, video preservation, and adaptive bitrate configs.',
    image: cardImg4,
  },
  {
    title: 'Troubleshooting',
    badge: '3 Guides',
    desc: 'Debugging guides, error dictionaries, and failover diagnostics.',
    image: cardImg5,
  },
];

export default function ResourceGuidesAccomplishSection() {
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
          Start with what you need to accomplish.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Choose the entry point that matches your current project objectives. Get focused instructions without browsing everything.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACCOMPLISH_CARDS.map((card, idx) => (
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
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <div className="px-2.5 py-1 bg-teal-400/10 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-400/30 flex justify-start items-start shrink-0">
                  <span className="text-teal-400 text-xs font-semibold font-['Inter']">
                    {card.badge}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
