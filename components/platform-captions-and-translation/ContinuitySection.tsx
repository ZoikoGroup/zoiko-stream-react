import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const points = [
  {
    title: 'Live is not final',
    description: <>Real-time speech-to-text serves instant needs. Post-live processing allows editors to<br className="hidden xl:block" /> refine, correct typos, and replace temporary tracks before permanent archiving.</>
  },
  {
    title: 'Corrections are versioned',
    description: <>Every edit made to a replay caption track is recorded on an audit ledger. The master<br className="hidden xl:block" /> file remains untouched, with revisions explicitly tracked.</>
  },
  {
    title: 'Independent replay publication',
    description: <>Publish the on-demand recording only after the required language and accessibility<br className="hidden xl:block" /> gates are fully validated and signed off by the owner.</>
  }
];

export default function ContinuitySection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#e2e8f0] border-solid flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/continuity-bg.png" 
          alt="Continuity Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[38px] leading-[61px] tracking-[-0.38px]">
          Live-to-replay continuity
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px]">
          Live output is not automatically final replay output.
        </p>
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row gap-[48px] items-center w-full">
        {/* Left Side: Points */}
        <div className="flex flex-col gap-[24px] items-start w-full xl:flex-1">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col gap-[8px] items-start w-full">
              <h3 className="font-spaceGrotesk font-bold text-[#0a0d13] text-[16px] leading-tight">
                {point.title}
              </h3>
              <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[14px] leading-[22px] w-full">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Mockup Form */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid rounded-[16px] flex flex-col overflow-hidden w-full lg:w-[580px] shrink-0 shadow-xl">
          {/* Mockup Header */}
          <div className="bg-[#0a0f1a] w-full px-[20px] py-[12px]">
            <p className="font-spaceGrotesk font-bold text-[#34d4ca] text-[13px] uppercase tracking-wide">
              ZOIKOMED CONSOLE — POST-LIVE REPLAY STAGE
            </p>
          </div>
          
          {/* Mockup Body */}
          <div className="flex flex-col gap-[16px] items-start p-[24px] w-full">
            <p className="font-spaceGrotesk font-bold text-[#0a0d13] text-[14px]">
              Pending Review: Townhall_Replay_Asset.mp4
            </p>
            
            {/* Flow Cards */}
            <div className="flex flex-row items-center gap-[12px] w-full">
              {/* Left Card */}
              <div className="bg-white border border-[#e2e8f0] border-solid rounded-[6px] p-[12px] flex flex-[1_0_0] gap-[4px] min-h-[64px]">
                <p className="font-spaceGrotesk font-bold text-[#707a8c] text-[12px]">
                  LIVE TRANSLATION
                </p>
                <p className="font-spaceGrotesk font-normal text-[#ef4444] text-[13px] w-[120px] leading-tight mt-[1px]">
                  92.4% Accuracy <br />
                  (Raw ASR)
                </p>
              </div>

              {/* Arrow */}
              <div className="shrink-0 flex items-center justify-center w-[24px] h-[24px] text-[#4a8cfb]">
                <ArrowRight size={20} strokeWidth={2.5} />
              </div>

              {/* Right Card */}
              <div className="bg-white border border-[#e2e8f0] border-solid rounded-[6px] p-[12px] flex flex-[1_0_0] gap-[4px] min-h-[64px]">
                <p className="font-spaceGrotesk font-bold text-[#707a8c] text-[12px]">
                  POST-LIVE REWRITE
                </p>
                <p className="font-spaceGrotesk font-normal text-[#00d4aa] text-[13px] w-[110px] leading-tight mt-[1px]">
                  99.8% Accuracy <br />
                  (Operator Verified)
                </p>
              </div>
            </div>

            {/* Dashed Line */}
            <div className="w-full h-px border-t border-dashed border-[#cbd5e1] my-[2px]"></div>

            {/* Footer */}
            <div className="flex flex-row items-center justify-between w-full">
              <p className="font-spaceGrotesk font-normal text-[#707a8c] text-[12px]">
                Ready to commit replay asset to global CDN.
              </p>
              <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] rounded-[10px] px-[28px] py-[14px] hover:opacity-90 transition-opacity">
                <span className="font-spaceGrotesk font-bold text-[#232b3a] text-[13px]">
                  Commit & Publish
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
