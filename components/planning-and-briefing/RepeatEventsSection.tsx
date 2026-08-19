import React from 'react';

const reusableItems = [
  'Event type & objective template',
  'Organizational contacts',
  'Run-of-show structure',
  'Accessibility requirement categories',
  'Standard graphics checklist',
  'Post-event intent template'
];

const revalidatedItems = [
  'Date/time and venue',
  'Audience/access model',
  'Source/contribution dependencies',
  'Current methods & availability',
  'Current assets and rights',
  'Staffing/coverage'
];

export default function RepeatEventsSection() {
  return (
    <section className="relative w-full py-[100px] px-6 md:px-[112px] bg-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <img 
          src="/images/planning-and-briefing/repeat-events-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-space-grotesk font-bold text-[#0a0d13] text-3xl md:text-[40px] leading-[normal]">
            Built for repeat events
          </h2>
          <p className="font-space-grotesk font-normal text-[#6b7484] text-[16px] w-full leading-[normal]">
            Reuse your event structure without carrying stale assumptions. Templates retain what's stable and flag what needs fresh review.
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row gap-[24px] w-full">
          
          {/* Card 1: Reusable from prior briefs */}
          <div className="flex flex-col gap-[16px] w-full p-[24px] bg-[#f8fafc] border border-[#e2e8f0] rounded-[16px]">
            <h3 className="font-space-grotesk font-bold text-[#0a0d13] text-[18px] whitespace-nowrap leading-[normal]">
              Reusable from prior briefs
            </h3>
            <div className="flex flex-col gap-[12px] w-full">
              {reusableItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[12px] w-full">
                  <div className="w-[28px] h-[28px] rounded-[14px] bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                    <span className="font-space-grotesk font-bold text-white text-[12px] leading-[normal]">
                      {idx + 1}
                    </span>
                  </div>
                  <span className="font-space-grotesk font-normal text-[#0a0d13] text-[14px] leading-[normal]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Always revalidated */}
          <div className="flex flex-col gap-[16px] w-full p-[24px] bg-[#f8fafc] border border-[#e2e8f0] rounded-[16px]">
            <h3 className="font-space-grotesk font-bold text-[#0a0d13] text-[18px] whitespace-nowrap leading-[normal]">
              Always revalidated
            </h3>
            <div className="flex flex-col gap-[12px] w-full">
              {revalidatedItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[12px] w-full">
                  <div className="w-[28px] h-[28px] rounded-[14px] bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                    <span className="font-space-grotesk font-bold text-white text-[12px] leading-[normal]">
                      {idx + 1}
                    </span>
                  </div>
                  <span className="font-space-grotesk font-normal text-[#0a0d13] text-[14px] leading-[normal]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <button className="flex items-center gap-[10px] px-[18px] py-[14px] bg-gradient-to-r from-[#33d9c7] to-[#4c86ff] rounded-[10px] w-fit hover:opacity-90 transition-opacity">
          <span className="font-space-grotesk font-bold text-[#04141a] text-[14px] whitespace-nowrap leading-[normal]">
            Reuse prior structure
          </span>
          <img src="/images/planning-and-briefing/arrow-right-black.svg" alt="" className="w-[18px] h-[18px]" />
        </button>

      </div>
    </section>
  );
}
