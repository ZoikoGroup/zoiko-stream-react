import React from 'react';
import Image from 'next/image';

const sources = [
  {
    title: 'Local production source',
    badge: 'Active Ingestion',
    owner: 'Owner: HQ Studio Desk',
    route: 'Route: RTMP Primary'
  },
  {
    title: 'Remote person/speaker',
    badge: 'WebRTC Secured',
    owner: 'Owner: Guest Panelist (Maya)',
    route: 'Route: Edge Token'
  },
  {
    title: 'Remote location/venue',
    badge: 'SRT Connection',
    owner: 'Owner: London Hub',
    route: 'Route: Gateway 02'
  },
  {
    title: 'Pre-recorded asset',
    badge: 'Integrity Verified',
    owner: 'Owner: Video Library',
    route: 'Route: VOD Mount'
  }
];

export default function SourcesContributionSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-y border-[#232b3a] border-solid flex flex-col gap-[56px] items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/sources-bg.png" 
          alt="Sources Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.71)]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-white text-[38px] leading-[61px] tracking-[-0.38px]">
          Qualify every source before production
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[29px] w-full">
          Local production, remote contributors, venue sources, and pre-recorded assets each carry their own <br className="hidden md:block" />readiness, rights, and acceptance path.
        </p>
      </div>

      {/* Sources Grid */}
      <div className="relative z-10 flex flex-col gap-[16px] items-start w-full">
        {sources.map((source, index) => (
          <div 
            key={index} 
            className="bg-[rgba(16,21,30,0.8)] backdrop-blur-sm border-[1.5px] border-[#232b3a] border-solid rounded-[12px] flex flex-col gap-[16px] items-start p-[24px] w-full transition-colors hover:border-[#4ecdc4]"
          >
            <div className="flex items-center justify-between w-full">
              <h3 className="font-spaceGrotesk font-bold text-white text-[18px]">
                {source.title}
              </h3>
              <div className="bg-[rgba(52,212,202,0.13)] rounded-[4px] px-[8px] py-[2px] flex items-center justify-center shrink-0">
                <p className="font-spaceGrotesk font-bold text-[#4ecdc4] text-[11px]">
                  {source.badge}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-[4px] items-start w-full">
              <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[14px]">
                {source.owner}
              </p>
              <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[12px]">
                {source.route}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Row */}
      <div className="relative z-10 flex items-center justify-center w-full">
        <button className="bg-transparent border border-[#eef1f6] border-solid rounded-[10px] px-[28px] py-[14px] hover:bg-[#eef1f6]/10 transition-colors">
          <span className="font-spaceGrotesk font-bold text-[#eef1f6] text-[15px]">
            Explore contribution
          </span>
        </button>
      </div>
    </section>
  );
}
