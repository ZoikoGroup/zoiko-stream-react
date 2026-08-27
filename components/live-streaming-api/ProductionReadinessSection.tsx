import React from 'react';
import { Check } from 'lucide-react';

const Checkbox = () => (
  <div className="bg-[#f0fdf4] border-[1.5px] border-[#34d4ca] flex items-center justify-center rounded-[6px] w-[24px] h-[24px] shrink-0">
    <Check size={14} className="text-[#0f1b2d]" />
  </div>
);

export default function ProductionReadinessSection() {
  const leftItems = [
    "Authentication configured",
    "Stream create tested",
    "Secret handling verified",
    "Encoder test completed",
    "Playback test passed",
    "Webhook verification active",
  ];

  const rightItems = [
    "Monitoring connected",
    "Error paths tested",
    "Rate limits reviewed",
    "Recording policy set",
    "Changelog subscribed",
  ];

  return (
    <section className="relative w-full border-b border-[#e1e6eb] flex flex-col items-start bg-white px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/live-streaming-api/light-topo-bg.png"
          alt="" 
          className="absolute inset-0 max-w-none object-cover size-full" 
        />
        <div className="absolute bottom-[-118px] right-[-171px] w-[520px] h-[520px]">
          <img alt="" className="w-full h-full" src="/images/live-streaming-api/bg-blob-2.svg" />
        </div>
        <div className="absolute left-[-186px] top-[-85px] w-[420px] h-[420px]">
          <img alt="" className="w-full h-full" src="/images/live-streaming-api/bg-blob-1.svg" />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-start gap-[56px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-[#0f1b2d] text-[38px] tracking-[-0.8px] leading-[48px]">
            Production readiness
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[28px]">
            Complete this prelaunch checklist before going live.
          </p>
        </div>

        {/* Checklist Card */}
        <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid flex flex-col md:flex-row gap-[32px] md:gap-[64px] items-start p-[32px] md:p-[48px] rounded-[16px] w-full shadow-sm">
          
          {/* Left Column */}
          <div className="flex flex-[1_0_0] flex-col gap-[8px] w-full">
            {leftItems.map((item, index) => (
              <div key={index} className="flex gap-[16px] items-center py-[12px] w-full">
                <Checkbox />
                <span className="font-inter font-medium text-[#0f1b2d] text-[16px] leading-[24px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Vertical Divider (Hidden on small screens) */}
          <div className="hidden md:flex w-[1px] bg-[#e1e6eb] self-stretch my-2" />

          {/* Right Column */}
          <div className="flex flex-[1_0_0] flex-col gap-[8px] w-full">
            {rightItems.map((item, index) => (
              <div key={index} className="flex gap-[16px] items-center py-[12px] w-full">
                <Checkbox />
                <span className="font-inter font-medium text-[#0f1b2d] text-[16px] leading-[24px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
