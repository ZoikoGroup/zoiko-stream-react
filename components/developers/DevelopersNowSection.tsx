import React from 'react';
import Image from 'next/image';

import hero1 from '@/public/images/developers/section2image (1).png';
import hero2 from '@/public/images/developers/section2image (2).png';
import hero3 from '@/public/images/developers/section2image (3).png';

const OPTIONS = [
  {
    title: 'I am evaluating',
    description: 'I want to understand what ZoikoStream offers before committing.',
    image: hero1,
    gradient: 'from-teal-600/50 to-blue-500/20',
  },
  {
    title: 'I want a working stream',
    description: "I'm ready to build something real and see it play back.",
    image: hero2,
    gradient: 'from-blue-500/50 to-violet-500/20',
  },
  {
    title: "I'm preparing or operating production",
    description: 'I need monitoring, errors, rate limits, status, and change history.',
    image: hero3,
    gradient: 'from-fuchsia-500/40 to-blue-500/25',
  },
];

export default function DevelopersNowSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            TRANSPARENT STARTING POINT
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
          Where are you now?
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Choose the option that matches where you are — no hidden scoring, no quiz. Reversible, and the full menu stays visible below regardless of your pick.
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {OPTIONS.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl outline outline-2 outline-offset-[-2px] outline-gray-200 overflow-hidden flex flex-col justify-between h-60 hover:shadow-lg transition-shadow group"
          >
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 mix-blend-multiply bg-gradient-to-r ${item.gradient}`} />
            </div>

            <div className="p-5 flex flex-col gap-1.5 justify-center flex-1">
              <h3 className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
