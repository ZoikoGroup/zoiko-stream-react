import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import rect121 from '@/public/images/Organization-overview/card-image (61).png';
import rect122 from '@/public/images/Organization-overview/card-image (62).png';
import rect123 from '@/public/images/Organization-overview/card-image (63).png';

const communityCards = [
  {
    title: 'Event Setup',
    desc: 'Pre-configured stream keys that require zero technical expertise to launch.',
    image: rect121,
  },
  {
    title: 'Audience Intent',
    desc: 'Quietly respect local expectations by muting analytics and tracking scripts.',
    image: rect122,
  },
  {
    title: 'Archive Continuity',
    desc: 'Automated uploads and catalog packaging for permanent community access.',
    image: rect123,
  },
];

export default function CommunityBroadcastSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
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
<div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Respectful broadcasts and durable community access.
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityCards.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow group h-72 justify-between"
            >
              <div className="relative w-full h-40 bg-slate-100 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col gap-2 flex-1 justify-center">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {c.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
