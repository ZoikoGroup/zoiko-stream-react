import React from 'react';
import Image from 'next/image';

import dimImg1 from '@/public/images/enterprise-plans/section-4image (1).png';
import dimImg2 from '@/public/images/enterprise-plans/section-4image (2).png';
import dimImg3 from '@/public/images/enterprise-plans/section-4image (3).png';
import dimImg4 from '@/public/images/enterprise-plans/section-4image (4).png';
import dimImg5 from '@/public/images/enterprise-plans/section-4image (5).png';
import dimImg6 from '@/public/images/enterprise-plans/section-4image (6).png';

const DIMENSIONS = [
  {
    title: 'Deployment scale & usage volume',
    desc: 'Streaming hours, storage, and delivery volume can influence commercial scoping.',
    badge: 'Not publicly established',
    image: dimImg1,
  },
  {
    title: 'Live Events & broadcast requirements',
    desc: 'Frequency, scale, and resilience requirements for live broadcasts.',
    badge: 'Discussed during scoping',
    image: dimImg2,
  },
  {
    title: 'Security, compliance & data residency',
    desc: 'Review requirements, regional data handling, and compliance evidence needs.',
    badge: 'Discussed during scoping',
    image: dimImg3,
  },
  {
    title: 'Integration & API complexity',
    desc: 'Depth of integration with existing identity, content, and commerce systems.',
    badge: 'Not publicly established',
    image: dimImg4,
  },
  {
    title: 'Support & operational requirements',
    desc: 'Response expectations and operational coordination needs.',
    badge: 'Discussed during scoping',
    image: dimImg5,
  },
  {
    title: 'Contract & procurement terms',
    desc: 'Commitment length, payment terms, and procurement requirements.',
    badge: 'Not publicly established',
    image: dimImg6,
  },
];

export default function PricingEnterprisePlansDimensionsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-white flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            Scoping dimensions
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold font-['Sora'] leading-tight">
          What can shape an enterprise commercial scope.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          These are the dimensions ZoikoStream considers during scoping — not a feature-inclusion checklist. Nothing here implies a specific discount or entitlement.
        </p>
      </div>

      {/* 6 Cards Grid (3 Columns) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DIMENSIONS.map((item, idx) => (
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

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-gray-800 text-base font-bold font-['Sora']">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-auto pt-2">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-gray-500 text-xs font-bold font-['Inter'] inline-block">
                  {item.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
