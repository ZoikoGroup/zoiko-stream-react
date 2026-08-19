import React from 'react';

const trustStats = [
  {
    title: 'Compliance Ready',
    value: 'GDPR + SAML 2.0',
    icon: '/images/planning-and-briefing/shield-check.svg',
    iconBg: 'bg-[#33d9c7]'
  },
  {
    title: 'Secure Delivery',
    value: 'AES-256 Encrypted',
    icon: '/images/planning-and-briefing/lock.svg',
    iconBg: 'bg-[#4c86ff]'
  },
  {
    title: 'Auditable',
    value: 'Signed Audit Trails',
    icon: '/images/planning-and-briefing/check-circle.svg',
    iconBg: 'bg-[#10b981]'
  }
];

export default function HeroSection() {
  return (
    <section className="relative w-full pt-[120px] pb-[100px] px-6 md:px-[112px] bg-[#0a0d13] overflow-hidden border-b border-[#232b3a] flex flex-col justify-center min-h-[600px]">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/planning-and-briefing/hero-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.39)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[40px]">
        
        {/* Main Content */}
        <div className="flex flex-col gap-[24px] max-w-[800px]">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-[8px] px-[12px] py-[6px] border border-[#4c86ff] rounded-full w-fit">
            <div className="w-[6px] h-[6px]">
              <img src="/images/planning-and-briefing/dot.svg" alt="" className="w-full h-full" />
            </div>
            <span className="font-space-grotesk font-bold text-[#4c86ff] text-[11px] tracking-[1.13px] uppercase whitespace-nowrap">
              PLANNING SERVICES
            </span>
          </div>

          <h1 className="font-space-grotesk font-bold text-[#eef1f6] text-4xl md:text-[56px] leading-tight md:leading-[66px] tracking-[-1px]">
            Turn your event idea into a reviewable brief.
          </h1>
          
          <p className="font-space-grotesk font-normal text-[#d2dae8] text-[16px] md:text-[18px] leading-[28.8px]">
            Don't leave live event execution to chance. Use our guided framework to define audience permissions, technical delivery profiles, and compliance structures beforehand.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-[16px] items-start">
          <button className="flex items-center justify-center px-[26px] py-[14px] bg-gradient-to-r from-[#33d9c7] to-[#4c86ff] rounded-[10px] shadow-[0px_4px_8px_rgba(51,217,199,0.2)] hover:opacity-90 transition-opacity w-full sm:w-auto">
            <span className="font-space-grotesk font-bold text-[#04141a] text-[15px] whitespace-nowrap">
              Start your event brief
            </span>
          </button>
          
          <button className="flex items-center justify-center px-[28px] py-[14px] border border-[#aab3c4] bg-transparent rounded-[10px] hover:bg-white/5 transition-colors w-full sm:w-auto">
            <span className="font-space-grotesk font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
              Talk to an expert
            </span>
          </button>
        </div>

        {/* Trust Stats */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-[24px] items-start mt-[16px]">
          {trustStats.map((stat, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-[12px] px-[16px] py-[12px] bg-[#10151e] border border-[#232b3a] rounded-[8px]"
            >
              <div className={`w-[32px] h-[32px] rounded-[16px] flex items-center justify-center ${stat.iconBg}`}>
                <img src={stat.icon} alt="" className="w-[16px] h-[16px]" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="font-space-grotesk font-bold text-[#707a8c] text-[12px]">
                  {stat.title}
                </span>
                <span className="font-space-grotesk font-bold text-[#eef1f6] text-[14px]">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
