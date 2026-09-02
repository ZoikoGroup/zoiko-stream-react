import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg3 from '@/public/images/resources-overview/section-3bg.png';
import thumb1 from '@/public/images/resources-overview/Rectangle.png';
import thumb2 from '@/public/images/resources-overview/Rectangle (1).png';
import thumb3 from '@/public/images/resources-overview/Rectangle (2).png';
import thumb4 from '@/public/images/resources-overview/Rectangle (3).png';
import thumb5 from '@/public/images/resources-overview/Rectangle (4).png';
import thumb6 from '@/public/images/resources-overview/Rectangle (5).png';

const LEARN_ITEMS = [
  {
    title: 'Guides',
    description: 'Step-by-step practical guidance for implementing and operating ZoikoStream.',
    actionText: 'Explore guides →',
    image: thumb1,
    href: '/resources',
  },
  {
    title: 'Architecture',
    description: 'Reference designs, platform/media patterns, deployment thinking, and architecture guidance.',
    actionText: 'Explore architecture →',
    image: thumb2,
    href: '/resource-architecture',
  },
  {
    title: 'Video tutorials',
    description: 'Visual workflow instruction and practical demonstrations.',
    actionText: 'Watch tutorials →',
    image: thumb3,
    href: '/resource-video-tutorial',
  },
  {
    title: 'Webinars and events',
    description: 'Scheduled learning, workshops, live sessions, and replays.',
    actionText: 'Explore events →',
    image: thumb4,
    href: '/resource-webinar-and-events',
  },
  {
    title: 'Glossary',
    description: 'Definitions for video, streaming, media, and platform terminology.',
    actionText: 'Explore glossary →',
    image: thumb5,
    href: '/resource-glossary',
  },
  {
    title: 'Blog and insights',
    description: 'Editorial and expert perspectives across product, engineering, media operations, and industry topics.',
    actionText: 'Read insights →',
    image: thumb6,
    href: '/resource-blogs-and-insights',
  },
];

export default function ResourceOverviewTopicSection() {
  return (
    <section id="learn" className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-gray-950 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg3}
          alt="Learn Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-4xl font-bold font-['Space_Grotesk'] leading-[48px]">
          Learn
        </h2>
        <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-7">
          Build knowledge and capability with ZoikoStream
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEARN_ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden group shadow-md"
          >
            <div className="relative w-full h-44 bg-gray-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={item.href}
                  className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  {item.actionText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
