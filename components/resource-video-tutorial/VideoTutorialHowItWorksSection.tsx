import React from 'react';
import Image from 'next/image';

import bg7 from '@/public/images/resource-videotutorial/bg (10).png';

import card23 from '@/public/images/resource-videotutorial/card-image (23).png';
import card24 from '@/public/images/resource-videotutorial/card-image (24).png';
import card25 from '@/public/images/resource-videotutorial/card-image (25).png';
import card26 from '@/public/images/resource-videotutorial/card-image (26).png';
import card27 from '@/public/images/resource-videotutorial/card-image (27).png';
import { ListVideo, FileText, CheckSquare, BookOpen, RefreshCw } from 'lucide-react';

const FEATURES = [
  {
    title: 'Chapters',
    description:
      'Timestamped sections let you jump to the exact workflow step you need.',
    image: card23,
    icon: ListVideo,
  },
  {
    title: 'Transcripts',
    description:
      'Full searchable HTML transcripts for every tutorial, accessible without playback.',
    image: card24,
    icon: FileText,
  },
  {
    title: 'Prerequisites',
    description:
      'Clear requirements for permissions, setup, credentials, and prior configuration.',
    image: card25,
    icon: CheckSquare,
  },
  {
    title: 'Resources',
    description:
      'Direct links to authoritative guides, documentation, API reference, and sample assets.',
    image: card26,
    icon: BookOpen,
  },
  {
    title: 'Lifecycle',
    description:
      'Current, superseded, or archived status with successor mapping when workflows change.',
    image: card27,
    icon: RefreshCw,
  },
];

export default function VideoTutorialHowItWorksSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image - bg (7).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg7}
          alt="How It Works Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          How every tutorial page works.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Every tutorial follows the same structured format so you know exactly what to expect.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {FEATURES.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-gray-800 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all"
            >
              <div className="relative w-full h-28 bg-gray-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-teal-400 shrink-0" />
                  <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-4">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
