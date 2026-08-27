import React from 'react';

export default function FinalConversionSection() {
  return (
    <section className="relative w-full border-t border-[#232b3a] flex flex-col items-center bg-[#06080c] px-6 xl:px-[112px] pt-[140px] pb-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/live-streaming-api/conversion-bg.png"
          alt="" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute bg-[rgba(10,15,26,0.88)] inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center gap-[56px]">
        
        {/* CTA Content */}
        <div className="flex flex-col gap-[16px] items-center text-center w-full">
          <h2 className="font-sora font-bold text-white text-[44px] tracking-[-0.5px] leading-[56px]">
            Ready to build?
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[28px]">
            Start your live streaming integration today.
          </p>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center w-full">
          <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] hover:opacity-90 transition-opacity">
            <span className="font-sora font-bold text-[#0a0f1a] text-[15px]">Start building</span>
          </button>
          
          <button className="border-[1.5px] border-[#aab3c4] border-solid px-[28px] py-[14px] rounded-[8px] hover:bg-white/10 transition-colors">
            <span className="font-sora font-bold text-white text-[15px]">Read API reference</span>
          </button>
        </div>

      </div>
    </section>
  );
}
