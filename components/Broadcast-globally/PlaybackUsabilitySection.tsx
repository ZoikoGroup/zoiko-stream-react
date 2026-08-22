import React from 'react';
import Image from 'next/image';

import bg108 from '@/public/images/Broadcast-globally/bg (108).png';
import card33 from '@/public/images/Broadcast-globally/card-image (33).png';
import card34 from '@/public/images/Broadcast-globally/card-image (34).png';
import card35 from '@/public/images/Broadcast-globally/card-image (35).png';

const strategies = [
  {
    title: 'Adaptive Bitrate Strategy',
    desc: 'Dynamic HLS and DASH stream profiling adapts seamlessly to changing client-side network connections.',
    image: card33,
  },
  {
    title: 'Global Multi-CDN Mesh',
    desc: 'Redundant delivery paths utilize regional edge points to optimize data flows and mitigate outages.',
    image: card34,
  },
  {
    title: 'Device Compatibility',
    desc: 'Zero-dependency native player controls render robustly on modern web, mobile, and smart-TV screens.',
    image: card35,
  },
];

export default function PlaybackUsabilitySection() {
  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg108}
          alt="Playback Usability Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            How playback is kept usable across differing network and device conditions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategies.map((s, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm overflow-hidden flex flex-col group hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-44 bg-zinc-800">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-white text-lg font-bold  ">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal   leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
