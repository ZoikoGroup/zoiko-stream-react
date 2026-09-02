import React from 'react';
import Image from 'next/image';

import driverImg1 from '@/public/images/pricing/section-2image (1).png';
import driverImg2 from '@/public/images/pricing/section-2image (2).png';
import driverImg3 from '@/public/images/pricing/section-2image (3).png';
import driverImg4 from '@/public/images/pricing/section-2image (4).png';
import driverImg5 from '@/public/images/pricing/section-2image (5).png';
import driverImg6 from '@/public/images/pricing/section-2image (6).png';

const DRIVERS = [
  {
    title: 'Event duration & schedule',
    desc: 'Duration band, number of sessions or windows, and schedule complexity.',
    image: driverImg1,
  },
  {
    title: 'Audience & distribution',
    desc: 'Audience model, approved scale band, and delivery scope where established.',
    image: driverImg2,
  },
  {
    title: 'Contribution & production',
    desc: 'Contribution sources, remote participation, and production workflow needs.',
    image: driverImg3,
  },
  {
    title: 'Access & privacy',
    desc: 'Public, private, or controlled audience access needs.',
    image: driverImg4,
  },
  {
    title: 'Resilience & assurance',
    desc: 'Source-backed resilience or assurance options where they exist.',
    image: driverImg5,
  },
  {
    title: 'Contract & procurement',
    desc: 'Commitment, billing arrangement, region, and tax dependencies.',
    image: driverImg6,
  },
];

export default function PricingDriverModelSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-white flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            Pricing driver model
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl sm:text-4xl font-bold font-['Sora'] leading-tight">
          What can shape Live Events commercial scope.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          These driver families explain how an event&apos;s characteristics may relate to commercial scoping — not a feature-inclusion list or price schedule.
        </p>
      </div>

      {/* 6 Cards Grid (3 Columns) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DRIVERS.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative w-full h-60 bg-slate-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3">
              <h3 className="text-gray-800 text-base font-bold font-['Sora']">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
