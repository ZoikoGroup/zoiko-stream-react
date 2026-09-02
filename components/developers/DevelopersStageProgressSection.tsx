import React from 'react';
import Image from 'next/image';

import img1 from '@/public/images/developers/heroimage (1).png';
import img2 from '@/public/images/developers/heroimage (2).png';
import img3 from '@/public/images/developers/heroimage (3).png';

const STAGES = [
  {
    stage: 'STAGE 1',
    title: 'GET STARTED',
    description: 'Understand access, credentials, documentation, and first success.',
    image: img1,
  },
  {
    stage: 'STAGE 2',
    title: 'BUILD',
    description: 'Choose APIs, SDKs, protocols, webhooks, playback, and player surfaces.',
    image: img2,
  },
  {
    stage: 'STAGE 3',
    title: 'OPERATE',
    description: 'Monitor, analyze, manage recordings/assets, and track current status.',
    image: img3,
  },
];

export default function DevelopersStageProgressSection() {
  return (
    <section className="relative w-full grid grid-cols-1 md:grid-cols-3 border-b border-gray-800">
      {STAGES.map((s, idx) => (
        <div
          key={idx}
          className="relative h-64 bg-zinc-900 overflow-hidden group border-b md:border-b-0 md:border-r border-gray-800 last:border-r-0"
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 to-zinc-950/90" />

          <div className="relative z-10 p-7 flex flex-col justify-end h-full gap-1.5">
            <span className="text-teal-400 text-xs font-normal font-['IBM_Plex_Mono'] tracking-wide">
              {s.stage}
            </span>
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              {s.title}
            </h3>
            <p className="text-white/75 text-xs font-normal font-['Inter'] leading-relaxed">
              {s.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
