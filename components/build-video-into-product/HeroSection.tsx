import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GitMerge } from 'lucide-react';

const architectureNodes = [
  { label: 'Customer Application', tag: 'PRODUCT UX', accent: '#34d4ca' },
  { label: 'Control API & SDK', tag: 'INTEGRATION', accent: '#4a8cfb' },
  { label: 'Media Processing Engine', tag: 'LIFECYCLE', accent: '#34d4ca' },
  { label: 'Secure Playback CDN', tag: 'DELIVERY', accent: '#4a8cfb' },
  { label: 'Telemetry & Replay', tag: 'OPERATIONS', accent: '#34d4ca' },
];

export default function HeroSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] pt-[120px] pb-[120px] lg:pt-[180px] border-b border-[#232b3a] border-solid flex flex-col items-start bg-[#0a0f1a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/build-video-into-product/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.24)]" />
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row gap-[48px] items-center w-full">
        <div className="flex flex-col gap-[28px] items-start w-full xl:flex-1">
          <div className="border border-[#34d4ca] border-solid rounded-[100px] px-[12px] py-[6px]">
            <p className="font-spaceGrotesk font-bold text-[#34d4ca] text-[11px] tracking-[1px] uppercase">
              Build video
            </p>
          </div>

          <h1 className="font-spaceGrotesk font-bold text-white text-[52px] leading-[60px] tracking-[-1.5px] w-full">
            Build live and on-demand video into your product.
          </h1>

          <p className="font-spaceGrotesk font-normal text-[#c5cddc] text-[18px] leading-[28px] w-full max-w-2xl">
            ZoikoStream gives product teams programmable media infrastructure for live, real-time and on-demand video, with secure playback, operations, recording/replay and analytics paths.
          </p>

          <div className="flex flex-col sm:flex-row gap-[16px] items-center w-full mt-[4px]">
            <Link
              href="/start-building"
              className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] rounded-[8px] px-[28px] py-[14px] hover:opacity-90 transition-opacity"
            >
              <span className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[15px] whitespace-nowrap">
                Start building
              </span>
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="bg-transparent border border-[#aab3c4] border-[1.5px] border-solid rounded-[8px] px-[24px] py-[14px] hover:bg-[#aab3c4]/10 transition-colors"
            >
              <span className="font-spaceGrotesk font-bold text-white text-[15px] whitespace-nowrap">
                Talk to an expert
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] backdrop-blur-md border-[1.5px] border-[#232b3a] border-solid rounded-[16px] flex flex-col gap-[24px] items-center justify-center p-[40px] w-full xl:w-[480px] shrink-0">
          <p className="font-spaceGrotesk font-bold text-white text-[14px] tracking-[1px] uppercase whitespace-nowrap">
            Conceptual product architecture
          </p>

          <div className="flex flex-col gap-[12px] items-start w-full">
            {architectureNodes.map((node) => (
              <div
                key={node.label}
                className="bg-[#1b2330] border border-[#232b3a] border-solid rounded-[8px] flex items-center justify-between p-[16px] w-full"
              >
                <div className="flex gap-[12px] items-center">
                  <span
                    className="block rounded-full size-[8px] shrink-0"
                    style={{ backgroundColor: node.accent }}
                  />
                  <p className="font-spaceGrotesk font-bold text-white text-[15px] whitespace-nowrap">
                    {node.label}
                  </p>
                </div>
                <p
                  className="font-spaceGrotesk font-normal text-[11px] whitespace-nowrap"
                  style={{ color: node.accent }}
                >
                  {node.tag}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-[8px] items-center">
            <GitMerge className="size-[16px] text-[#34d4ca]" strokeWidth={2} />
            <p className="font-spaceGrotesk font-bold text-[#34d4ca] text-[13px] whitespace-nowrap">
              Unified Video Infrastructure Stack
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
