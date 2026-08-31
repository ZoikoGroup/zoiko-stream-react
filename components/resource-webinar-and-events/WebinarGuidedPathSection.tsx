import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  Clipboard, Headset, Tablet } from 'lucide-react';

import bg14 from '@/public/images/resource-webinar-and-events/bg (14).png';

const STEPS = [
  {
    step: 'STEP 01',
    title: 'Learn the Fundamentals',
    description:
      'Start with Video tutorials and technical Guides to understand ZoikoStream capabilities.',
    icon: Tablet,
  },
  {
    step: 'STEP 02',
    title: 'Plan Your Event',
    description:
      'Use the Live Events Planning Guide for workflow templates, checklists, and architecture patterns.',
    icon: Clipboard,
  },
  {
    step: 'STEP 03',
    title: 'Talk to a Specialist',
    description:
      'When ready, connect with a ZoikoStream events specialist for custom architecture and scaling guidance.',
    icon: Headset,
  },
];

export default function WebinarGuidedPathSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image - bg (14).png */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg14}
          alt="From Learning to Planning Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          From learning to planning to launching your live event.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Follow the guided path from foundational learning to hands-on event production.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-start items-center gap-5">
        {STEPS.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={index}>
              <div className="flex-1 w-full p-7 bg-gray-800/80 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-5">
                <div className="w-full flex justify-between items-center">
                  <div className="px-2.5 py-1 bg-teal-400 rounded-full">
                    <span className="text-slate-950 text-xs font-bold font-['Space_Grotesk']">
                      {item.step}
                    </span>
                  </div>
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                    {item.description}
                  </p>
                </div>
              </div>

              {index < STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center shrink-0">
                  <div className="w-10 h-0 border-2 border-teal-400" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="relative z-10 flex flex-wrap justify-start items-center gap-4">
        <Link
          href="/resource-video-tutorial"
          className="px-6 py-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            Start with Video Tutorials
          </span>
        </Link>
        <Link
          href="/live-event-guide"
          className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
        >
          <span className="text-white text-base font-bold font-['Space_Grotesk']">
            View Planning Guide
          </span>
        </Link>
      </div>
    </section>
  );
}
