import React from 'react';
import Image from 'next/image';

const flows = [
  {
    title: '1. Live → Recording',
    description: 'May be requested, authorized, active, failed, or unknown. Do not assume every stream records.',
    image: '/images/build-video-into-product/flow-live-to-recording.png',
  },
  {
    title: '2. Recording → Replay',
    description: 'Replay requires readiness, publication, and access state; do not imply instant availability.',
    image: '/images/build-video-into-product/flow-recording-to-replay.png',
  },
  {
    title: '3. Replay → Media Management',
    description: 'Version, access, rights, retention, and correction may continue to change over the asset lifecycle.',
    image: '/images/build-video-into-product/flow-replay-to-management.png',
  },
];

export default function RecordingReplaySection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[120px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-[#0a0f1a]">
      <Image
        src="/images/build-video-into-product/recording-replay-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute inset-0 bg-[rgba(15,27,45,0.85)] -z-10 pointer-events-none" />

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-white text-[28px] sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px] w-full">
          Treat replay as a governed state transition — not an automatic promise.
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[28.8px] w-full">
          Durable recording is an asynchronous process. Track stream behavior programmatically to provide predictable player feedback.
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row gap-[24px] items-start w-full">
        {flows.map((flow) => (
          <div
            key={flow.title}
            className="bg-[#1b2b45] border-[1.5px] border-[#232b3a] border-solid flex flex-1 flex-col gap-[20px] items-start min-w-0 p-[24px] rounded-[12px] w-full"
          >
            <div className="h-[160px] relative rounded-[8px] shrink-0 w-full">
              <Image
                src={flow.image}
                alt={flow.title}
                fill
                className="object-cover rounded-[8px] pointer-events-none"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-[8px] items-start w-full">
              <p className="font-spaceGrotesk font-bold text-white text-[20px] whitespace-nowrap">
                {flow.title}
              </p>
              <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[14px] leading-[22px] w-full">
                {flow.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
