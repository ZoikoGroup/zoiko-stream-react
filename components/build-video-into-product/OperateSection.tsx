import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const opsCards = [
  {
    title: 'Stream/Media State',
    description: 'Track ingestion bitrates, codec profiles, drop-frame metrics, and active transcode status in real-time.',
    image: '/images/build-video-into-product/ops-stream-media-state.png',
  },
  {
    title: 'Playback/Access Issues',
    description: 'Monitor buffer ratios, license request delay, CDN edge latency, and playback error exceptions.',
    image: '/images/build-video-into-product/ops-playback-access.png',
  },
  {
    title: 'Recording/Replay State',
    description: 'Audit the lifecycle of video recordings from ingress capture and verification to cold-archive storage.',
    image: '/images/build-video-into-product/ops-recording-replay.png',
  },
  {
    title: 'Analytics/Adoption',
    description: 'Examine viewer geolocation patterns, stream durations, device taxonomy, and total transfer quotas.',
    image: '/images/build-video-into-product/ops-analytics-adoption.png',
  },
  {
    title: 'Integration Health',
    description: 'Track API error rates, webhook response latencies, and authentication credential handshakes.',
    image: '/images/build-video-into-product/ops-integration-health.png',
  },
  {
    title: 'Status/Support',
    description: 'Instant alerts on global edge degradation, scheduled platform maintenance, and concierge escalations.',
    image: '/images/build-video-into-product/ops-status-support.png',
    zoomed: true,
  },
];

export default function OperateSection() {
  return (
    <section className="relative isolate w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[120px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-[#0a0f1a]">
      <Image
        src="/images/build-video-into-product/operate-section-bg.png"
        alt=""
        fill
        className="object-cover pointer-events-none -z-20"
        unoptimized
      />
      <div className="absolute inset-0 bg-[rgba(15,27,45,0.88)] -z-10 pointer-events-none" />

      <div className="relative flex flex-col gap-[16px] items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-white text-[28px] sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px] w-full">
          Shipping video is the start. Keep the experience observable and supportable.
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[28.8px] w-full">
          Access granular pipeline telemetry and client playback state to diagnose viewer issues before they reach your support queue.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
        {opsCards.map((card) => (
          <div
            key={card.title}
            className="bg-[#162235] border-[1.5px] border-[#232b3a] border-solid flex flex-col gap-[16px] items-start p-[20px] rounded-[12px] w-full"
          >
            <div className="h-[130px] relative rounded-[6px] shrink-0 w-full overflow-hidden">
              {card.zoomed ? (
                <img
                  alt={card.title}
                  className="absolute h-[201.06%] left-[-35.54%] max-w-none top-[-69.64%] w-[171.02%] pointer-events-none"
                  src={card.image}
                />
              ) : (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover pointer-events-none"
                  unoptimized
                />
              )}
            </div>
            <p className="font-spaceGrotesk font-bold text-white text-[18px] whitespace-nowrap">
              {card.title}
            </p>
            <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px] leading-[20px] w-full">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px] w-full">
        <p className="font-spaceGrotesk font-normal italic text-[#aab3c4] text-[13px]">
          Retention: Granular telemetry is retained for 90 days. Aggregated performance metrics are archived for 365 days.
        </p>
        <div className="flex gap-[16px] items-start shrink-0">
          <Link
            href="/platform-analytics"
            className="border-[#aab3c4] border-[1.5px] border-solid flex items-center justify-center px-[24px] py-[14px] rounded-[8px] hover:bg-[#aab3c4]/10 transition-colors"
          >
            <span className="font-spaceGrotesk font-bold text-white text-[15px] whitespace-nowrap">
              Explore analytics
            </span>
          </Link>
          <Link
            href="#status"
            className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] rounded-[8px] hover:opacity-90 transition-opacity"
          >
            <span className="font-spaceGrotesk font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">
              View system status
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
