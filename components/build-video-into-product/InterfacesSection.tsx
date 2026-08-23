import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const interfaces = [
  {
    label: 'INTERFACE 1',
    badge: 'REST API',
    title: 'API / Control',
    description: 'Trigger streams, verify outcomes, and configure regional access rules directly via REST endpoint.',
    image: '/images/build-video-into-product/card-api-control.png',
  },
  {
    label: 'INTERFACE 2',
    badge: 'MOBILE/WEB',
    title: 'SDK / Client Integration',
    description: 'Embed responsive video features inside native mobile, desktop and web apps with production-ready SDKs.',
    image: '/images/build-video-into-product/card-sdk-integration.png',
  },
  {
    label: 'INTERFACE 3',
    badge: 'INGEST',
    title: 'Media Protocol / Source',
    description: 'Contribute live feeds via standard robust protocols including SRT, WHIP, RTMPS, and WebRTC.',
    image: '/images/build-video-into-product/card-media-protocol.png',
  },
  {
    label: 'INTERFACE 4',
    badge: 'HLS/DASH',
    title: 'Player / Playback',
    description: 'Deliver high-fidelity secure streams with low latency using compliant, accessible, cross-platform players.',
    image: '/images/build-video-into-product/card-player-playback.png',
  },
  {
    label: 'INTERFACE 5',
    badge: 'REAL-TIME',
    title: 'Webhook / Event',
    description: 'Receive instant callbacks for pipeline events, stream status, transcode completion, and edge alarms.',
    image: '/images/build-video-into-product/card-webhook-event.png',
  },
  {
    label: 'INTERFACE 6',
    badge: 'METRICS',
    title: 'Analytics / Read Path',
    description: 'Access pipeline metrics, viewer concurrency, packet-loss thresholds, and billing stats programmatically.',
    image: '/images/build-video-into-product/card-analytics.png',
  },
];

export default function InterfacesSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-[#0a0f1a]">
      <Image
        src="/images/build-video-into-product/programmable-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute inset-0 bg-[rgba(10,13,20,0.78)] -z-10 pointer-events-none" />

      <h2 className="relative font-spaceGrotesk font-bold text-white text-[28px] sm:text-[38px] leading-[1.2] sm:leading-[48px] w-full">
        Use the interface that fits the job — then verify it in maintained documentation.
      </h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
        {interfaces.map((item) => (
          <div
            key={item.label}
            className="bg-[#162235] border border-[#232b3a] border-solid flex flex-col items-start overflow-hidden rounded-[12px] w-full"
          >
            <div className="h-[150px] relative shrink-0 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover pointer-events-none"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-spaceGrotesk font-bold text-[#34d4ca] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                  {item.label}
                </p>
                <div className="bg-[rgba(52,212,202,0.13)] flex items-start px-[8px] py-[2px] rounded-[100px] shrink-0">
                  <p className="font-spaceGrotesk font-bold text-[#34d4ca] text-[10px] whitespace-nowrap">
                    {item.badge}
                  </p>
                </div>
              </div>
              <p className="font-spaceGrotesk font-bold text-white text-[18px] w-full">
                {item.title}
              </p>
              <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px] leading-[20px] w-full">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex items-center justify-center w-full">
        <Link
          href="#"
          className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] rounded-[8px] px-[32px] py-[14px] hover:opacity-90 transition-opacity"
        >
          <span className="font-spaceGrotesk font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">
            Read the documentation
          </span>
        </Link>
      </div>
    </section>
  );
}
