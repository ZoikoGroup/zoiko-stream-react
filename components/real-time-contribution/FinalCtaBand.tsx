import React from 'react';

export default function FinalCtaBand() {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-[112px] py-[120px] relative w-full overflow-hidden min-h-[400px]">
      
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="/images/real-time-contribution/cta-bg.png" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/80 to-[#060c16]/80" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[24px] items-center relative z-10 w-full max-w-[800px] mx-auto text-center">
        
        <h2 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[32px] md:text-[38px] leading-[1.2] md:leading-[60.8px] tracking-tight">
          Start building with real-time contribution
        </h2>
        
        <p className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[16px] md:text-[18px] leading-[1.6] md:leading-[28.8px]">
          Authorize, prepare, connect, verify, and hand off — with clear ownership at every step.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center mt-[12px] w-full sm:w-auto">
          
          <button className="bg-gradient-to-r from-[#00d4aa] to-[#4c86ff] px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:opacity-90 transition-opacity">
            <span className="font-['Space_Grotesk'] font-bold text-[#04141a] text-[15px]">
              Start building
            </span>
          </button>
          
          <button className="border border-[#aab3c4] px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:bg-white/5 transition-colors">
            <span className="font-['Space_Grotesk'] font-medium text-[#eef1f6] text-[15px]">
              Talk to an expert
            </span>
          </button>
          
        </div>
      </div>

    </section>
  );
}
