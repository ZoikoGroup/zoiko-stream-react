import React from 'react';
import Image from 'next/image';

import bg110 from '@/public/images/Broadcast-globally/bg (110).png';
import card41 from '@/public/images/Broadcast-globally/card-image (41).png';
import card42 from '@/public/images/Broadcast-globally/card-image (42).png';
import card43 from '@/public/images/Broadcast-globally/card-image (43).png';
import card44 from '@/public/images/Broadcast-globally/card-image (44).png';

const capabilities = [
  {
    title: 'Real-Time Closed Captions',
    desc: 'AI-driven low-latency captions rendered inline at sub-second speeds with manual compliance override layers.',
    image: card41,
  },
  {
    title: 'Multilingual Audio Tracks',
    desc: 'Support multiple parallel language tracks mapped to standard MPEG-TS PIDs for seamless player-side selection.',
    image: card42,
  },
  {
    title: 'Keyboard & Screen Reader Nav',
    desc: 'Zero-dependency HTML5 player controls conforming fully to WCAG 2.2 AA accessibility standards out of the box.',
    image: card43,
  },
  {
    title: 'Human Review Boundaries',
    desc: 'Integrate a real-time stenographer or translator pipeline into the live gateway for high-stakes public addresses.',
    image: card44,
  },
];

export default function UsableAudienceExperiencesSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg110}
          alt="Audience Experiences Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            How distributed audiences receive usable, understandable viewing experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md overflow-hidden flex flex-col group hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-36 bg-zinc-800">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-white text-base font-bold  ">
                  {c.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Delays & Schedules Bar */}
        <div className="p-6 bg-gray-800/90 rounded-xl border border-gray-800 flex flex-col gap-4">
          <span className="text-teal-400 text-sm font-bold   uppercase tracking-wide">
            COORDINATED GLOBAL DELAYS &amp; SCHEDULES
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-zinc-900/80 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white text-xs font-bold  ">
                  NEW YORK (EST)
                </span>
                <span className="text-slate-400 text-xs font-normal  ">
                  0s (Live)
                </span>
              </div>
              <span className="text-teal-400 text-xs font-bold  ">
                DIRECT
              </span>
            </div>

            <div className="p-4 bg-zinc-900/80 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white text-xs font-bold  ">
                  LONDON (GMT)
                </span>
                <span className="text-slate-400 text-xs font-normal  ">
                  +0.5s (Buffer)
                </span>
              </div>
              <span className="text-teal-400 text-xs font-bold  ">
                EDGE PEERED
              </span>
            </div>

            <div className="p-4 bg-zinc-900/80 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white text-xs font-bold  ">
                  TOKYO (JST)
                </span>
                <span className="text-slate-400 text-xs font-normal  ">
                  8 Hours (Scheduled)
                </span>
              </div>
              <span className="text-teal-400 text-xs font-bold  ">
                DEFERRED ARCHIVE
              </span>
            </div>

            <div className="p-4 bg-zinc-900/80 rounded-lg flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <span className="text-white text-xs font-bold  ">
                  SYDNEY (AEST)
                </span>
                <span className="text-slate-400 text-xs font-normal  ">
                  8 Hours (Scheduled)
                </span>
              </div>
              <span className="text-teal-400 text-xs font-bold  ">
                DEFERRED ARCHIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
