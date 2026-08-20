import React from 'react';
import Image from 'next/image';

const trustItems = [
  {
    title: 'Source-explicit',
    desc: 'No default bypass',
    icon: '/images/platform-captions-and-translation/icon-shield.svg',
  },
  {
    title: 'Language-aware',
    desc: 'Native phoneme engines',
    icon: '/images/platform-captions-and-translation/icon-globe.svg',
  },
  {
    title: 'Method-transparent',
    desc: 'Explainable pathways',
    icon: '/images/platform-captions-and-translation/icon-cpu.svg',
  },
  {
    title: 'Human-reviewable',
    desc: 'Direct operator gates',
    icon: '/images/platform-captions-and-translation/icon-user-check.svg',
  },
  {
    title: 'Failure-transparent',
    desc: 'Explicit failover state',
    icon: '/images/platform-captions-and-translation/icon-alert-triangle.svg',
  },
  {
    title: 'Privacy-respecting',
    desc: 'No demographic logs',
    icon: '/images/platform-captions-and-translation/icon-lock.svg',
  },
];

export default function TrustStripSection() {
  return (
    <section className="relative flex flex-col xl:flex-row flex-wrap items-start xl:items-center justify-between gap-8 xl:gap-4 px-6 md:px-12 xl:px-[112px] py-12 xl:py-[40px] w-full bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/trust-strip-bg.png" 
          alt="Trust strip background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row flex-wrap xl:flex-nowrap w-full justify-between gap-8 xl:gap-4">
        {trustItems.map((item, index) => (
          <div key={index} className="flex gap-[12px] items-center shrink-0 w-full md:w-[calc(50%-16px)] xl:w-auto">
            <div className="bg-[#d8ebff] flex items-center justify-center rounded-[20px] shrink-0 size-[40px]">
              <div className="relative size-[20px]">
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-[2px] items-start">
              <p className="font-spaceGrotesk font-bold text-[#0a0d13] text-[14px] leading-tight">
                {item.title}
              </p>
              <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[12px] leading-tight">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
