import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg32 from '@/public/images/resource-videotutorial/bg (32).png';

import path1 from '@/public/images/resource-videotutorial/pathway-image (1).png';
import path2 from '@/public/images/resource-videotutorial/pathway-image (2).png';
import path3 from '@/public/images/resource-videotutorial/pathway-image (3).png';
import path4 from '@/public/images/resource-videotutorial/pathway-image (4).png';
import path5 from '@/public/images/resource-videotutorial/pathway-image (5).png';
import path0 from '@/public/images/resource-videotutorial/pathway-image.png';

const PATHWAYS = [
  {
    title: 'Guides',
    description: 'Step-by-step implementation walkthroughs for every workflow.',
    cta: 'Browse guides →',
    href: '/live-event-guide',
    image: path0,
  },
  {
    title: 'Architecture',
    description: 'Source-governed reference designs and composition patterns.',
    cta: 'Explore architecture →',
    href: '/resource-architecture',
    image: path1,
  },
  {
    title: 'Developer Documentation',
    description: 'Authoritative technical reference for APIs, SDKs, and platform behavior.',
    cta: 'Read docs →',
    href: '/developer-documentation',
    image: path2,
  },
  {
    title: 'API Reference',
    description: 'Endpoint fields, parameters, request/response examples, and errors.',
    cta: 'API reference →',
    href: '/api-reference',
    image: path3,
  },
  {
    title: 'Live Events Planning',
    description: 'Dedicated planning guide for live streaming events and broadcasts.',
    cta: 'Plan your event →',
    href: '/live-event-guide',
    image: path4,
  },
  {
    title: 'Help Center',
    description: 'Troubleshooting, support procedures, and direct assistance.',
    cta: 'Get help →',
    href: '/contact-us',
    image: path5,
  },
];

export default function VideoTutorialBeyondVideoSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image - bg (32).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg32}
          alt="Continue Learning Beyond Video Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Continue learning beyond video.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Video tutorials connect to authoritative written resources across the ZoikoStream platform.
        </p>
      </div>

      {/* Pathways Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PATHWAYS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-700 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all"
          >
            <div className="relative w-full h-40 bg-gray-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between items-start gap-4 flex-1">
              <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                  {item.description}
                </p>
              </div>
              <Link
                href={item.href}
                className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] transition-colors"
              >
                {item.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
