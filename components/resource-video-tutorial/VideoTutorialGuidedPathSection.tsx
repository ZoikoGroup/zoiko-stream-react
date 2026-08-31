import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import thumb0 from '@/public/images/resource-videotutorial/Step-Thumb.png';
import thumb1 from '@/public/images/resource-videotutorial/Step-Thumb (1).png';
import thumb2 from '@/public/images/resource-videotutorial/Step-Thumb (2).png';
import thumb3 from '@/public/images/resource-videotutorial/Step-Thumb (3).png';
import thumb4 from '@/public/images/resource-videotutorial/Step-Thumb (4).png';

const STEPS = [
  { step: '1', title: 'Account & API Setup', duration: '8 min', image: thumb0, active: true },
  { step: '2', title: 'Your First Live Stream', duration: '12 min', image: thumb1, active: false },
  { step: '3', title: 'Adding Secure Playback', duration: '10 min', image: thumb2, active: false },
  { step: '4', title: 'Monitoring & Recording', duration: '14 min', image: thumb3, active: false },
  { step: '5', title: 'Production Operations', duration: '18 min', image: thumb4, active: false },
];

export default function VideoTutorialGuidedPathSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 border-b border-gray-800 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
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
      <div className="size-[520px] left-[1068px] top-[490px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Guided learning path.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Follow an intentionally ordered sequence to build complete workflow knowledge step by step.
        </p>
      </div>

      <div className="relative z-10 w-full p-6 sm:p-10 bg-slate-900 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-8">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              From First Stream to Production Operations
            </h3>
            <span className="text-slate-400 text-sm font-normal font-['Space_Grotesk']">
              5 steps • 62 min total
            </span>
          </div>
          <Link
            href="#start-path"
            className="px-6 py-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
          >
            <span className="text-slate-950 text-sm font-bold font-['Space_Grotesk']">
              Start learning path →
            </span>
          </Link>
        </div>

        <div className="w-full h-0 border-b border-gray-800" />

        {/* Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((item, index) => (
            <div key={index} className="flex flex-col justify-start items-start gap-4">
              <div className="w-full flex items-center">
                <div
                  className={`size-8 rounded-full flex justify-center items-center font-bold text-xs font-['Space_Grotesk'] ${
                    item.active
                      ? 'bg-teal-400 text-slate-950'
                      : 'bg-gray-800 text-slate-400 outline outline-2 outline-offset-[-2px] outline-gray-700'
                  }`}
                >
                  {item.step}
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 ${
                      item.active ? 'bg-teal-400' : 'bg-gray-800'
                    }`}
                  />
                )}
              </div>

              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="relative w-full h-20 rounded-lg overflow-hidden bg-gray-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-white text-base font-bold font-['Space_Grotesk'] line-clamp-1">
                  {item.title}
                </span>
                <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
