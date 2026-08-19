import React from 'react';

const items = [
  {
    icon: '/images/planning-and-briefing/shield.svg',
    title: 'Data Minimization',
    description: "We collect only what's needed to review your brief."
  },
  {
    icon: '/images/planning-and-briefing/layers.svg',
    title: 'Purpose Separation',
    description: 'Operational event data stays separate from commercial records.'
  },
  {
    icon: '/images/planning-and-briefing/eye-off.svg',
    title: 'No Hidden Profiling',
    description: 'Accessibility requests are never used for lead scoring or sales notes.'
  },
  {
    icon: '/images/planning-and-briefing/trash-2.svg',
    title: 'Retention & Deletion',
    description: 'Abandoned and archived briefs follow clear retention and deletion rules.'
  }
];

export default function TrustPrivacySection() {
  return (
    <section className="relative w-full py-[100px] px-6 md:px-[112px] bg-[#0a0d13] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/planning-and-briefing/trust-privacy-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,19,0.28)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-space-grotesk font-bold text-white text-3xl md:text-[40px] leading-[normal]">
            Your data, your control
          </h2>
          <p className="font-space-grotesk font-normal text-[#9ca3af] text-[16px] w-full leading-[normal]">
            We ask only for information necessary to route and review your event. No hidden profiling, no unnecessary data collection.
          </p>
        </div>

        {/* Grid Container */}
        <div className="flex flex-col gap-[24px] w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {items.slice(0, 2).map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col gap-[12px] p-[20px] bg-[rgba(9,9,9,0.6)] border border-[rgba(255,255,255,0.08)] rounded-[16px] shadow-[0px_10px_24px_0px_rgba(0,0,0,0.4)]"
              >
                <div className="w-[40px] h-[40px] rounded-[12px] bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                  <img src={item.icon} alt="" className="w-[20px] h-[20px]" />
                </div>
                <h3 className="font-space-grotesk font-bold text-white text-[16px] leading-[normal] break-words">
                  {item.title}
                </h3>
                <p className="font-space-grotesk font-normal text-[#9ca3af] text-[14px] leading-[normal] break-words">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {items.slice(2, 4).map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col gap-[12px] p-[20px] bg-[rgba(9,9,9,0.6)] border border-[rgba(255,255,255,0.08)] rounded-[16px] shadow-[0px_10px_24px_0px_rgba(0,0,0,0.4)]"
              >
                <div className="w-[40px] h-[40px] rounded-[12px] bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                  <img src={item.icon} alt="" className="w-[20px] h-[20px]" />
                </div>
                <h3 className="font-space-grotesk font-bold text-white text-[16px] leading-[normal] break-words">
                  {item.title}
                </h3>
                <p className="font-space-grotesk font-normal text-[#9ca3af] text-[14px] leading-[normal] break-words">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <button className="flex items-center gap-[10px] px-[18px] py-[14px] bg-gradient-to-r from-[#33d9c7] to-[#4c86ff] rounded-[10px] w-fit hover:opacity-90 transition-opacity">
          <span className="font-space-grotesk font-bold text-[#04141a] text-[14px] whitespace-nowrap leading-[normal]">
            Review privacy details
          </span>
          <img src="/images/planning-and-briefing/arrow-right-black.svg" alt="" className="w-[18px] h-[18px]" />
        </button>

      </div>
    </section>
  );
}
