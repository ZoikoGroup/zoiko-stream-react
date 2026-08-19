import React from 'react';

export default function FinalCtaSection() {
  return (
    <section className="relative w-full py-[100px] px-6 md:px-[112px] flex flex-col items-center justify-center overflow-hidden bg-[#0a0f1a]">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/planning-and-briefing/final-cta-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(90deg, rgba(10,15,26,0.77) 0%, rgba(6,12,22,0.77) 100%)' }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-[24px] w-full max-w-[800px] mx-auto text-center">
        <h2 className="font-space-grotesk font-bold text-[#eef1f6] text-3xl md:text-[40px] leading-[normal] w-full">
          Ready to start planning?
        </h2>
        <p className="font-space-grotesk font-normal text-[#aab3c4] text-[16px] leading-[normal] w-full">
          Turn your event idea into a structured, reviewable brief. Start with what you know — we will review the appropriate planning path.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-[16px] justify-center w-full">
          <button className="flex items-center justify-center px-[26px] py-[14px] bg-gradient-to-r from-[#33d9c7] to-[#4c86ff] rounded-[10px] drop-shadow-[0px_4px_8px_rgba(51,217,199,0.2)] hover:opacity-90 transition-opacity">
            <span className="font-space-grotesk font-bold text-[#04141a] text-[15px] whitespace-nowrap leading-[normal]">
              Start your event brief
            </span>
          </button>
          
          <button className="flex items-center justify-center px-[28px] py-[14px] border border-[#aab3c4] rounded-[10px] bg-transparent hover:bg-[rgba(255,255,255,0.05)] transition-colors">
            <span className="font-space-grotesk font-medium text-[#eef1f6] text-[15px] whitespace-nowrap leading-[normal]">
              Talk to an expert
            </span>
          </button>
        </div>

        <p className="font-space-grotesk font-normal text-[#707a8c] text-[13px] leading-[normal] w-full">
          No booking, staffing, pricing, or technical commitment is created by submitting a brief.
        </p>
      </div>

    </section>
  );
}
