import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PlaybackHandoffSection() {
  return (
    <section className="relative w-full border-b border-[#232b3a] min-h-[1266px] flex flex-col items-start bg-[#06080c] px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/live-streaming-api/playback-bg.png"
          alt="" 
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute bg-[rgba(10,15,26,0.9)] inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-start gap-[56px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-white text-[38px] tracking-[-0.8px] leading-[48px]">
            Playback handoff
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[28px]">
            When and how playback becomes available — separate from publisher credentials.
          </p>
        </div>

        {/* Split Architecture */}
        <div className="flex flex-col lg:flex-row gap-[40px] w-full items-stretch">
          
          {/* Publisher Side */}
          <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col gap-[20px] items-start p-[32px] rounded-[12px] shadow-sm">
            <span className="font-sora font-bold text-[#34d4ca] text-[14px] tracking-[1px] uppercase">
              PUBLISHER (SECRET BOUNDARY)
            </span>
            <h3 className="font-sora font-bold text-white text-[20px]">
              Ingest & Control
            </h3>
            <p className="font-inter text-[#aab3c4] text-[14px] leading-[22px]">
              Requires secure API Keys and RTMPS Ingest URLs. Access parameters must never leak to native apps or browsers.
            </p>
            <div className="flex flex-col gap-[8px] font-inter text-[#aab3c4] text-[13px] leading-normal w-full mt-auto">
              <span>• RTMP/SRT streams pushed to edge servers</span>
              <span>• Complete stream lifecycle control</span>
            </div>
          </div>

          {/* Connector Center */}
          <div className="hidden lg:flex flex-col items-center justify-center shrink-0 w-[48px]">
            <ArrowRight size={24} className="text-[#aab3c4]" />
          </div>

          {/* Viewer Side */}
          <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col gap-[20px] items-start p-[32px] rounded-[12px] shadow-sm">
            <span className="font-sora font-bold text-[#4a8cfb] text-[14px] tracking-[1px] uppercase">
              VIEWER (PUBLIC DISCOVERY)
            </span>
            <h3 className="font-sora font-bold text-white text-[20px]">
              Playback & Client SDK
            </h3>
            <p className="font-inter text-[#aab3c4] text-[14px] leading-[22px]">
              Safe for public exposure. Uses standard HLS/LL-HLS playout URLs and JWT tokens for signed access.
            </p>
            <div className="flex flex-col gap-[8px] font-inter text-[#aab3c4] text-[13px] leading-normal w-full mt-auto">
              <span>• Embedded player libraries / SDKs</span>
              <span>• Global CDN cache hit playout routes</span>
            </div>
          </div>
        </div>

        {/* Readiness Progression */}
        <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-col gap-[16px] p-[24px] rounded-[12px] w-full">
          <span className="font-sora font-bold text-[#aab3c4] text-[13px] tracking-wide">
            READINESS STATES
          </span>
          <div className="flex flex-col md:flex-row gap-[16px] w-full items-start">
            
            {/* Step 1 */}
            <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start w-full">
              <span className="font-sora font-bold text-[#aab3c4] text-[14px]">Not Ready</span>
              <div className="h-[4px] w-full bg-[#232b3a] rounded-[2px]" />
              <span className="font-inter text-[#aab3c4] text-[12px]">Idle stream state</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start w-full">
              <span className="font-sora font-bold text-[#4a8cfb] text-[14px]">Provisioning</span>
              <div className="h-[4px] w-full bg-[#4a8cfb] rounded-[2px]" />
              <span className="font-inter text-[#aab3c4] text-[12px]">Encoder handshake in progress</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start w-full">
              <span className="font-sora font-bold text-[#34d4ca] text-[14px]">Ready</span>
              <div className="h-[4px] w-full bg-[#34d4ca] rounded-[2px]" />
              <span className="font-inter text-[#aab3c4] text-[12px]">Low latency HLS feed active</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-[1_0_0] flex-col gap-[6px] items-start w-full">
              <span className="font-sora font-bold text-[#34d4ca] text-[14px]">Protected</span>
              <div className="h-[4px] w-full bg-[#34d4ca] rounded-[2px]" />
              <span className="font-inter text-[#aab3c4] text-[12px]">Token authenticated playback</span>
            </div>

          </div>
        </div>

        {/* Playback Cards Row */}
        <div className="flex flex-col md:flex-row gap-[24px] w-full">
          
          {/* Card 1 */}
          <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col items-start rounded-[16px] overflow-hidden">
            <div className="w-full h-[180px] relative shrink-0">
              <img 
                src="/images/live-streaming-api/playback-card-1.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col gap-[16px] items-start p-[24px] w-full h-full">
              <h4 className="font-sora font-bold text-white text-[20px]">
                Public playback
              </h4>
              <p className="font-inter text-[#aab3c4] text-[14px] leading-[22px] flex-grow">
                Unrestricted low-latency streaming. Best for global broadcasts, public esports events, and municipal live streams. Playout URLs can be cached indefinitely on global CDNs.
              </p>
              <div className="w-full h-[1px] bg-[#232b3a] my-1" />
              <div className="font-mono text-[#34d4ca] text-[12px] break-all">
                https://stream.zoiko.com/v1/play/stream_8817da3a4f.m3u8
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col items-start rounded-[16px] overflow-hidden">
            <div className="w-full h-[180px] relative shrink-0">
              <img 
                src="/images/live-streaming-api/playback-card-2.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col gap-[16px] items-start p-[24px] w-full h-full">
              <h4 className="font-sora font-bold text-white text-[20px]">
                Protected playback
              </h4>
              <p className="font-inter text-[#aab3c4] text-[14px] leading-[22px] flex-grow">
                Token-gated secure playout. Requires signature verification via HMAC or JSON Web Tokens (JWT). Protect your content, premium subscriptions, or enterprise internal broadcasts.
              </p>
              <div className="w-full h-[1px] bg-[#232b3a] my-1" />
              <div className="font-mono text-[#4a8cfb] text-[12px] break-all">
                play_url?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
