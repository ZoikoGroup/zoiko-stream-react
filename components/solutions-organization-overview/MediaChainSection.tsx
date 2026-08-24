import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import rect117 from '@/public/images/Organization-overview/card-image (58).png';
import rect118 from '@/public/images/Organization-overview/card-image (57).png';
import rect119 from '@/public/images/Organization-overview/card-image (59).png';
import rect120 from '@/public/images/Organization-overview/card-image (60).png';

const mediaCards = [
  {
    title: 'Source Readiness',
    desc: 'Rigorous diagnostic signal analysis and encoder handshakes prior to ingest.',
    image: rect117,
  },
  {
    title: 'Production State',
    desc: 'Active signal routing, secondary failover hot standbys, and transcoder metrics.',
    image: rect118,
  },
  {
    title: 'Delivery Status',
    desc: 'Global multi-CDN telemetry measuring concurrent loads and regional latencies.',
    image: rect119,
  },
  {
    title: 'Analytics & Archive',
    desc: 'Continuous performance tracking matched to automated raw-file preservation.',
    image: rect120,
  },
];

export default function MediaChainSection() {
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
            Operate the full professional media chain.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mediaCards.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-36 bg-slate-100 overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  {m.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
