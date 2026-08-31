import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg6 from '@/public/images/resource-videotutorial/bg (6).png';

import card11 from '@/public/images/resource-videotutorial/card-image (11).png';
import card12 from '@/public/images/resource-videotutorial/card-image (12).png';
import card13 from '@/public/images/resource-videotutorial/card-image (13).png';
import card14 from '@/public/images/resource-videotutorial/card-image (14).png';
import card15 from '@/public/images/resource-videotutorial/card-image (15).png';
import card16 from '@/public/images/resource-videotutorial/card-image (16).png';

const GOALS = [
  {
    title: 'Build a live streaming workflow',
    description:
      'Learn contribution, processing, distribution, and playback for live events.',
    image: card11,
  },
  {
    title: 'Set up video on demand',
    description:
      'Ingest, transcode, store, and deliver video assets at scale.',
    image: card12,
  },
  {
    title: 'Configure real-time contribution',
    description:
      'Low-latency contribution from remote sources into production.',
    image: card13,
  },
  {
    title: 'Implement secure playback',
    description:
      'Token validation, DRM integration, and protected content delivery.',
    image: card14,
  },
  {
    title: 'Operate and monitor media',
    description:
      'Health dashboards, alerts, recording management, and analytics.',
    image: card15,
  },
  {
    title: 'Manage enterprise deployment',
    description:
      'Identity, governance, multi-tenant configuration, and regional delivery.',
    image: card16,
  },
];

export default function VideoTutorialGoalsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image - bg (6).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg6}
          alt="Video Tutorial Goals Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Start by learning goal.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk']">
          Choose the tutorial path that matches what you need to accomplish.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GOALS.map((goal, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden group hover:outline-teal-400/50 transition-all"
          >
            <div className="relative w-full h-40 bg-gray-900 overflow-hidden">
              <Image
                src={goal.image}
                alt={goal.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                {goal.title}
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                {goal.description}
              </p>
              <div className="w-full pt-3 flex justify-start items-start">
                <Link
                  href="#tutorials"
                  className="text-teal-400 hover:text-teal-300 text-sm font-bold font-['Space_Grotesk'] transition-colors"
                >
                  View tutorials →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
