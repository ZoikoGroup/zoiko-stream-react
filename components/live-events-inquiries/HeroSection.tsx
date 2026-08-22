import React from 'react';

const imgBackground = "/images/live-event-inquiries/hero-section-bg.png";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-start min-h-[600px] w-full overflow-hidden px-6 lg:px-[112px] py-[120px]">
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          alt="" 
          className="absolute inset-0 size-full object-cover" 
          src={imgBackground} 
        />
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: "linear-gradient(47.26deg, rgba(28, 31, 38, 0.78) 35.818%, rgba(28, 31, 38, 0.35) 73.792%, rgba(28, 31, 38, 0.1) 120.2%)" }} 
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-start gap-[40px] w-full max-w-[800px]">
        {/* Label */}
        <div className="flex items-center gap-[8px]">
          <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
          <p className="font-inter font-bold text-[#7ee3d8] text-[12.5px] uppercase tracking-[1.25px] m-0">
            ZoikoStream Live Events
          </p>
        </div>

        {/* Title */}
        <h1 className="font-sans font-bold text-white text-[38px] lg:text-[44px] leading-[1.14] tracking-[-0.44px] m-0">
          Plan live event streaming with<br />ZoikoStream.
        </h1>

        {/* Description */}
        <p className="font-inter font-normal text-[#e4e6ea] text-[16px] lg:text-[16.5px] leading-[26.4px] m-0">
          Tell us what you are planning, who needs to watch and what matters most.<br />
          We will use that context to route your live-event inquiry across technical,<br />
          operational and commercial planning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full sm:w-auto">
          <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:opacity-90 transition-opacity border-none cursor-pointer">
            <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">
              Plan a live event ↓
            </span>
          </button>
          <button className="border border-[rgba(255,255,255,0.35)] border-solid bg-transparent flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer">
            <span className="font-inter font-semibold text-white text-[15px] whitespace-nowrap">
              Explore Live Events →
            </span>
          </button>
        </div>

        {/* Navigation Overlay Cards */}
        <div className="flex flex-col sm:flex-row items-stretch backdrop-blur-[2px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.25)] border-solid rounded-[12px] overflow-hidden mt-[16px] w-full sm:w-[600px]">
          <a href="#" className="flex flex-col justify-center px-[24px] py-[16px] border-b sm:border-b-0 sm:border-r border-[rgba(255,255,255,0.2)] border-solid hover:bg-[rgba(255,255,255,0.1)] transition-colors no-underline flex-1 sm:w-[300px]">
            <p className="font-inter font-bold text-[13.5px] text-white m-0 leading-[21.6px]">Event already live?</p>
            <p className="font-inter font-normal text-[13px] text-[#dfe2e8] m-0 leading-[20.8px] mt-[4px]">Get support</p>
          </a>
          <a href="#" className="flex flex-col justify-center px-[24px] py-[16px] hover:bg-[rgba(255,255,255,0.1)] transition-colors no-underline flex-1 sm:w-[300px]">
            <p className="font-inter font-bold text-[13.5px] text-white m-0 leading-[21.6px]">Planning an enterprise program?</p>
            <p className="font-inter font-normal text-[13px] text-[#dfe2e8] m-0 leading-[20.8px] mt-[4px]">Enterprise inquiries</p>
          </a>
        </div>
      </div>
    </div>
  );
}
