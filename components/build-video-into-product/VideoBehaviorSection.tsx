import React from 'react';
import Image from 'next/image';

const paths = [
  {
    pathLabel: 'PATH 01',
    badge: 'REAL-TIME',
    title: 'Live Video',
    description:
      'Users watch while media is contributed or produced. Evaluate source, stream creation, authorized playback, monitoring, resilience, recording and analytics.',
    image: '/images/build-video-into-product/card-live-video.png',
  },
  {
    pathLabel: 'PATH 02',
    badge: 'DURABLE',
    title: 'On-Demand Video',
    description:
      'Users request prepared media. Evaluate intake, readiness, access/playback, asset state, captions, analytics, lifecycle and support.',
    image: '/images/build-video-into-product/card-on-demand-video.png',
  },
  {
    pathLabel: 'PATH 03',
    badge: 'HYBRID',
    title: 'Mixed Video',
    description:
      'Live continues into replay or combines live and prepared media. Evaluate transition state, recording, publication, access, rights and correction.',
    image: '/images/build-video-into-product/card-mixed-video.png',
  },
];

export default function VideoBehaviorSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-[#0a0f1a]">
      <Image
        src="/images/build-video-into-product/behave-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute inset-0 bg-[rgba(15,27,45,0.85)] -z-10 pointer-events-none" />

      <h2 className="relative font-spaceGrotesk font-bold text-white text-[28px] sm:text-[38px] leading-[1.2] sm:leading-[48px] w-full">
        Start with the way video behaves in your product.
      </h2>

      <div className="relative flex flex-col lg:flex-row gap-[24px] items-start w-full">
        {paths.map((path) => (
          <div
            key={path.pathLabel}
            className="bg-[#162235] border border-[#232b3a] border-solid flex flex-1 flex-col items-start min-w-0 overflow-hidden rounded-[12px] w-full"
          >
            <div className="h-[150px] relative shrink-0 w-full">
              <Image
                src={path.image}
                alt={path.title}
                fill
                className="object-cover pointer-events-none"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-spaceGrotesk font-bold text-[#34d4ca] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                  {path.pathLabel}
                </p>
                <div className="bg-[rgba(52,212,202,0.13)] flex items-start px-[8px] py-[2px] rounded-[100px] shrink-0">
                  <p className="font-spaceGrotesk font-bold text-[#34d4ca] text-[10px] whitespace-nowrap">
                    {path.badge}
                  </p>
                </div>
              </div>
              <p className="font-spaceGrotesk font-bold text-white text-[18px] w-full">
                {path.title}
              </p>
              <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px] leading-[20px] w-full">
                {path.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
