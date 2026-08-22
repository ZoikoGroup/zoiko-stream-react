import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full pt-[120px] pb-[100px] px-6 md:px-[112px] flex flex-col items-start overflow-hidden bg-[#0a0f1a]">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/event-resilience/hero-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.43)' }}
        />
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,15,26,0) 0%, rgba(10,15,26,0) 70%, #0a0f1a 100%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-[40px] w-full max-w-7xl mx-auto">
        
        {/* Content */}
        <div className="flex flex-col gap-[24px] w-full max-w-[800px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-[8px] px-[12px] py-[6px] border border-[#4c86ff] rounded-full w-fit">
            <div className="w-[6px] h-[6px] rounded-full bg-[#4c86ff]" />
            <span className="font-space-grotesk font-bold text-[#4c86ff] text-[11px] uppercase tracking-[1.13px] leading-[normal] whitespace-nowrap">
              RESILIENCE & ASSURANCE
            </span>
          </div>

          <h1 className="font-space-grotesk font-bold text-[#eef1f6] text-4xl md:text-[56px] leading-[1.15] md:leading-[66px] tracking-[-1px]">
            Built for the one shot that matters.
          </h1>

          <p className="font-space-grotesk font-normal text-[#aab3c4] text-[16px] md:text-[18px] leading-[1.6] md:leading-[28.8px]">
            Active network failovers, redundant cloud transcoders, and continuous signal health probing. We prevent stream drops from ruining your broadcast.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-[16px] w-fit">
          <a 
            href="/plan-a-live-event"
            className="flex items-center justify-center px-[26px] py-[14px] rounded-[10px] drop-shadow-[0px_4px_8px_rgba(0,212,170,0.2)] hover:opacity-90 transition-opacity w-full sm:w-auto"
            style={{ background: 'linear-gradient(90deg, #00d4aa 0%, #4c86ff 100%)' }}
          >
            <span className="font-space-grotesk font-bold text-[#04141a] text-[15px] whitespace-nowrap leading-[normal]">
              Plan a Live Event
            </span>
          </a>
          
          <a 
            href="/talk-to-an-expert" 
            className="flex items-center justify-center px-[28px] py-[14px] border border-[#aab3c4] rounded-[10px] bg-transparent hover:bg-[rgba(255,255,255,0.05)] transition-colors w-full sm:w-auto"
          >
            <span className="font-space-grotesk font-medium text-[#eef1f6] text-[15px] whitespace-nowrap leading-[normal]">
              Talk to an expert
            </span>
          </a>
        </div>

        {/* Trust Stats */}
        <div className="flex flex-wrap items-center gap-[16px] w-full pt-[8px]">
          <div className="flex items-center gap-[10px] px-[16px] py-[12px] bg-[#10151e] border border-[#232b3a] rounded-[12px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#00d4aa]" />
            <span className="font-space-grotesk font-bold text-[#eef1f6] text-[13px] whitespace-nowrap leading-[normal]">
              99.99% uptime SLA
            </span>
          </div>
          
          <div className="flex items-center gap-[10px] px-[16px] py-[12px] bg-[#10151e] border border-[#232b3a] rounded-[12px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#4c86ff]" />
            <span className="font-space-grotesk font-bold text-[#eef1f6] text-[13px] whitespace-nowrap leading-[normal]">
              Dual-WAN failover
            </span>
          </div>

          <div className="flex items-center gap-[10px] px-[16px] py-[12px] bg-[#10151e] border border-[#232b3a] rounded-[12px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#00d4aa]" />
            <span className="font-space-grotesk font-bold text-[#eef1f6] text-[13px] whitespace-nowrap leading-[normal]">
              Real-time health probing
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
