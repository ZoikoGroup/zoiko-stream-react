import React from 'react';
import Image from 'next/image';

import bg4 from '@/public/images/resources-architecture/Rectangle.png';
import bg5 from '@/public/images/resources-architecture/Rectangle (1).png';
import bg2 from '@/public/images/resources-architecture/Rectangle (2).png';

const BOUNDARIES = [
  {
    title: 'Customer-Controlled',
    description:
      'Your infrastructure, identity providers, CDN configuration, and production systems — fully under your operational authority.',
    image: bg4,
    border: 'outline-gray-800',
  },
  {
    title: 'ZoikoStream-Managed',
    description:
      'Platform services including ingest, processing, delivery, monitoring, and API infrastructure — governed by published documentation and SLAs.',
    image: bg5,
    border: 'outline-teal-400',
  },
  {
    title: 'Shared Responsibility',
    description:
      'Integration points where security depends on both parties — token validation, webhook verification, access control configuration.',
    image: bg2,
    border: 'outline-gray-800',
  },
];

export default function ArchitectureTrustBoundariesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-slate-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/resources-architecture/bg (4).png"
          alt="Trust Boundaries Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Make trust boundaries visible.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Understand which parts of a pattern are customer-controlled, ZoikoStream-managed, or shared responsibility.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {BOUNDARIES.map((item, index) => (
          <div
            key={index}
            className={`bg-zinc-900/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] ${item.border} flex flex-col justify-start items-start overflow-hidden group hover:scale-[1.01] transition-transform`}
          >
            <div className="relative w-full h-44 bg-gray-900 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
