import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const questionCards = [
  {
    title: 'Understand Viewership',
    desc: 'Aggregate audience metrics, concurrent peaks, and total viewing duration securely.',
    img: '/images/developer-analytics-api/card-image (4).png',
  },
  {
    title: 'Investigate Playback Quality',
    desc: 'Inspect granular QoS behaviors including startup delay, failures, and rebuffering ratios.',
    img: '/images/developer-analytics-api/card-image (5).png',
  },
  {
    title: 'Compare Segments',
    desc: 'Dynamically breakdown viewership by device type, geography, and network pathways.',
    img: '/images/developer-analytics-api/card-image (6).png',
  },
  {
    title: 'Monitor Recent Operations',
    desc: 'Query near-real-time telemetry to protect active live stream stability.',
    img: '/images/developer-analytics-api/card-image (7).png',
  },
  {
    title: 'Export & Integrate',
    desc: 'Ship validated reports directly into data warehouses via scheduled delivery paths.',
    img: '/images/developer-analytics-api/card-image (8).png',
  },
];

export function StartWithTheQuestionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Start with the question, then choose the data.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Analytics is easier to implement when the use case is explicit. Choose the outcome you need.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {questionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-start items-start shadow-xs h-80"
            >
              <div className="w-full h-36 relative bg-slate-200">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-slate-950 text-lg font-bold ">{card.title}</h3>
                <p className="text-slate-600 text-xs leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
