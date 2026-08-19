import React from 'react';
import Image from 'next/image';

const points = [
  {
    number: '1',
    title: 'Artifact identity',
    description: 'Each WebVTT, SRT, or audio file maps to an explicit, immutable UUID.'
  },
  {
    number: '2',
    title: 'State events & webhooks',
    description: 'Listen to instant events for ready, processing, and failed compliance states.'
  },
  {
    number: '3',
    title: 'Secure authentication',
    description: 'Signed requests use corporate tenant credentials without exposing keys.'
  }
];

export default function DeveloperSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-b border-[#e2e8f0] border-solid flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/developer-bg.png" 
          alt="Developer Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full">
        <h2 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[38px] leading-[61px] tracking-[-0.38px]">
          Developer & integration pathway
        </h2>
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row gap-[48px] items-center w-full">
        {/* Left Side: Code Mockup */}
        <div className="bg-[#0f172a] border border-[#1e293b] border-solid rounded-[12px] flex flex-col gap-[16px] p-[24px] w-full lg:w-[600px] shrink-0 shadow-2xl">
          {/* Header */}
          <div className="flex items-start justify-between w-full">
            <p className="font-spaceGrotesk font-bold text-[#64748b] text-[12px]">
              POST /v1/assets/caption-tracks
            </p>
            <p className="font-spaceGrotesk font-normal text-[#34d4ca] text-[12px]">
              cURL
            </p>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px border-t border-[#1e293b]"></div>

          {/* Code */}
          <div className="font-sans font-normal text-[#94a3b8] text-[13px] leading-[20px] whitespace-pre-wrap">
            {`{
  "asset_id": "ast_8492021",
  "language": "fr-FR",
  "modality": "captions",
  "method": "human_reviewed",
  "source_vtt_url": "https://secure.storage/ast_84.vtt",
  "hmac_signature": "7d9b4c8a2e1f4007b..."
}`}
          </div>
        </div>

        {/* Right Side: Points & CTA */}
        <div className="flex flex-col gap-[24px] items-start w-full xl:flex-1">
          {/* Points */}
          <div className="flex flex-col gap-[16px] items-start w-full">
            {points.map((point, index) => (
              <div key={index} className="flex gap-[16px] items-center w-full group">
                <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid rounded-[8px] w-[40px] h-[40px] shrink-0 flex items-center justify-center transition-colors group-hover:border-[#4a8cfb]">
                  <p className="font-spaceGrotesk font-bold text-[#4a8cfb] text-[14px]">
                    {point.number}
                  </p>
                </div>
                <div className="flex flex-col gap-[2px] items-start flex-1">
                  <p className="font-spaceGrotesk font-bold text-[#0a0d13] text-[15px]">
                    {point.title}
                  </p>
                  <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[13px] w-full">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-transparent border-[1.5px] border-solid border-[#aab3c4] rounded-[8px] px-[24px] py-[12px] hover:border-[#0a0d13] hover:text-[#0a0d13] transition-colors mt-[8px]">
            <p className="font-spaceGrotesk font-bold text-[#232b3a] text-[14px]">
              View developer documentation
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
