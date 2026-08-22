import React from 'react';

const imgBackground = "/images/live-event-inquiries/closing-section-bg.png";

export default function SectionDecisionClosure() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px] w-full overflow-hidden py-[100px] lg:py-[140px] px-6">
      
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          alt="Live events background" 
          className="absolute inset-0 size-full object-cover" 
          src={imgBackground} 
        />
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: "linear-gradient(120deg, rgba(59, 61, 66, 0.94) 0%, rgba(64, 68, 75, 0.9) 100%)" }} 
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[800px]">
        
        {/* Pre-title Label */}
        <div className="flex items-center gap-[8px] mb-[20px]">
          <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
            READY TO GO FURTHER?
          </p>
        </div>

        {/* Title */}
        <h2 className="font-sora font-bold text-white text-[32px] lg:text-[40px] tracking-[-0.4px] m-0 leading-[1.2] mb-[24px]">
          Ready to plan the live moment?
        </h2>

        {/* Description */}
        <p className="font-inter font-normal text-[#e4e6ea] text-[15px] lg:text-[16px] leading-[1.6] m-0 mb-[40px]">
          Start a planning inquiry, or explore what ZoikoStream Live Events can do first.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full sm:w-auto">
          <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:opacity-90 transition-opacity border-none cursor-pointer outline-none">
            <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">
              Plan a live event
            </span>
          </button>
          
          <button className="border border-[rgba(255,255,255,0.35)] bg-transparent flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer outline-none">
            <span className="font-inter font-semibold text-white text-[15px] whitespace-nowrap">
              Explore Live Events
            </span>
          </button>
        </div>
        
      </div>
    </div>
  );
}
