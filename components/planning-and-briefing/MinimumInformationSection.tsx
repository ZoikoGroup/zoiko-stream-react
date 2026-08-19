import React from 'react';

const toStartItems = [
  'Event type',
  'Objective',
  'Date/timeframe',
  'Audience intent',
  'Primary contact'
];

const unknownItems = [
  'Technical specs',
  'Exact audience numbers',
  'Venue connectivity details',
  'Production equipment',
  'Captions method'
];

export default function MinimumInformationSection() {
  return (
    <section className="relative w-full py-[100px] px-6 md:px-[112px] bg-[#0a0d13] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/planning-and-briefing/minimum-info-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,19,0.67)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-space-grotesk font-bold text-[#f9fafb] text-3xl md:text-[40px]">
            You don't need all the answers yet
          </h2>
          <p className="font-space-grotesk font-normal text-[#cbd5e1] text-[16px] w-full leading-[normal]">
            Start with what you know. Unknown is always a valid answer — the brief captures what matters now and makes missing decisions visible for review.
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row gap-[24px] w-full">
          
          {/* Card 1: What you need to start */}
          <div className="flex flex-col gap-[16px] w-full p-[24px] bg-[rgba(11,18,32,0.8)] border border-[#1f2937] rounded-[16px] shadow-[0px_12px_28px_0px_rgba(0,0,0,0.4)]">
            <h3 className="font-space-grotesk font-bold text-[#f9fafb] text-[18px] whitespace-nowrap">
              What you need to start
            </h3>
            <div className="flex flex-col gap-[12px] mt-[8px]">
              {toStartItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[12px]">
                  <div className="w-[28px] h-[28px] rounded-[14px] bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                    <span className="font-space-grotesk font-bold text-white text-[12px]">
                      {idx + 1}
                    </span>
                  </div>
                  <span className="font-space-grotesk font-normal text-[#e5e7eb] text-[14px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: You can always say Unknown */}
          <div className="flex flex-col gap-[16px] w-full p-[24px] bg-[rgba(11,18,32,0.8)] border border-[#1f2937] rounded-[16px] shadow-[0px_12px_28px_0px_rgba(0,0,0,0.4)]">
            <h3 className="font-space-grotesk font-bold text-[#f9fafb] text-[18px] whitespace-nowrap">
              You can always say Unknown
            </h3>
            <div className="flex flex-col gap-[12px] mt-[8px]">
              {unknownItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[12px]">
                  <div className="w-[28px] h-[28px] rounded-[14px] bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                    <span className="font-space-grotesk font-bold text-white text-[12px]">
                      {idx + 1}
                    </span>
                  </div>
                  <span className="font-space-grotesk font-normal text-[#e5e7eb] text-[14px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
