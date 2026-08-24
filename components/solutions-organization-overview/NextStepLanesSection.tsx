import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

import card59 from '@/public/images/Organization-overview/Rectangle (137).png';
import card61 from '@/public/images/Organization-overview/Rectangle (136).png';
import card62 from '@/public/images/Organization-overview/Rectangle (135).png';
import card63 from '@/public/images/Organization-overview/Rectangle (134).png';


const lanes = [
  {
    title: 'Developer Lane',
    desc: 'Explore SDK guides, retrieve sandbox keys, and embed streams immediately.',
    btn: 'Start building',
    image: card59,
  },
  {
    title: 'Enterprise Lane',
    desc: 'Discuss governance requirements, custom SLAs, and administrative pathways.',
    btn: 'Talk to an expert',
    image: card61,
  },
  {
    title: 'Live Events Lane',
    desc: 'Request managed standby engineering backups and ingestion readiness reviews.',
    btn: 'Plan a live event',
    image: card62,
  },
  {
    title: 'Existing User Lane',
    desc: 'Access continuous pipeline telemetries, verified ledgers, and support.',
    btn: 'Enter Dashboard',
    image: card63,
  },
];

export default function NextStepLanesSection() {
  return (
    <section className="relative w-full bg-white text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Choose the next step that matches where you are.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lanes.map((lane, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden flex flex-col justify-between group hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-44 bg-slate-950 overflow-hidden">
                <Image
                  src={lane.image}
                  alt={lane.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
              </div>

              <div className="p-6 flex flex-col justify-between gap-6 flex-1">
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                    {lane.title}
                  </h3>
                  <p className="text-slate-300 text-sm font-normal font-['Inter'] leading-relaxed">
                    {lane.desc}
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full px-5 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
                >
                  {lane.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
