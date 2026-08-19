import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[#0a0f1a] border-b border-[#232b3a] flex flex-col items-center justify-center px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-cover w-full h-full" 
          src="/images/real-time-contribution/hero-bg.png" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/68 via-[#0a0f1a]/74 via-[70%] to-[#0a0f1a]/75" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-[48px] items-center relative z-10 w-full max-w-[1216px] mx-auto">
        
        {/* Left Column */}
        <div className="flex flex-col gap-[24px] items-start relative w-full lg:flex-1">
          {/* Eyebrow */}
          <div className="border border-[#00d4aa] flex gap-[8px] items-center px-[12px] py-[6px] rounded-full">
            <div className="w-[6px] h-[6px] bg-[#00d4aa] rounded-full shadow-[0_0_8px_rgba(0,212,170,0.8)]" />
            <p className="font-['Space_Grotesk'] font-bold text-[#00d4aa] text-[11px] tracking-[1px] uppercase">
              PLATFORM / BUILD / REAL-TIME CONTRIBUTION
            </p>
          </div>
          
          {/* Headline */}
          <h1 className="font-['Space_Grotesk'] font-bold leading-[1.2] lg:leading-[56px] text-[#eef1f6] text-[36px] lg:text-[46px] tracking-[-1.5px]">
            Controlled real-time contribution from approved sources into production
          </h1>
          
          {/* Subheading */}
          <p className="font-['Space_Grotesk'] font-normal leading-[26px] text-[#aab3c4] text-[16px] max-w-[560px]">
            Authorize a contributor or source, confirm readiness, establish an approved connection, verify the incoming media state, and hand it into a production workflow with clear ownership and recovery paths.
          </p>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-[16px] items-center mt-4">
            <button className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] px-[26px] py-[14px] rounded-[10px] hover:opacity-90 transition-opacity">
              <span className="font-['Space_Grotesk'] font-bold text-[#04141a] text-[15px]">
                Start building
              </span>
            </button>
            <button className="border border-[#aab3c4] px-[28px] py-[14px] rounded-[10px] hover:bg-[#aab3c4]/10 transition-colors">
              <span className="font-['Space_Grotesk'] font-medium text-[#eef1f6] text-[15px]">
                View contribution docs
              </span>
            </button>
          </div>
        </div>

        {/* Right Column - Flow Diagram */}
        <div className="bg-[#10151e]/80 border border-[#232b3a] flex flex-col gap-[20px] p-[24px] rounded-[16px] backdrop-blur-md w-full max-w-[540px]">
          
          {/* Diagram Header */}
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-[8px] items-center">
              <div className="w-[8px] h-[8px] bg-[#eef1f6] rounded-full" />
              <p className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[11px]">
                CONTRIBUTION FLOW PIPELINE
              </p>
            </div>
            <p className="font-['Space_Grotesk'] font-normal text-[#707a8c] text-[10px]">
              ACTIVE PROTOCOL: SRT
            </p>
          </div>

          {/* Diagram Flow */}
          <div className="bg-[#060911] border border-[#232b3a] flex flex-col gap-[12px] p-[16px] rounded-[8px] w-full">
            
            {/* Row 1 */}
            <div className="flex gap-[12px] items-center w-full">
              <div className="border border-[#00d4aa] bg-[#00d4aa]/5 flex-1 flex items-center justify-center p-[10px] rounded-[8px]">
                <p className="font-['Space_Grotesk'] font-bold text-[#00d4aa] text-[11px]">CONTRIBUTOR</p>
              </div>
              <div className="flex items-center justify-center w-[16px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#707A8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="border border-[#232b3a] bg-[#232b3a]/30 flex-1 flex items-center justify-center p-[10px] rounded-[8px]">
                <p className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[11px]">IDENTITY & AUTH</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-[12px] items-center w-full">
              <div className="border border-[#232b3a] bg-[#232b3a]/30 flex-1 flex items-center justify-center p-[10px] rounded-[8px]">
                <p className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[11px]">READINESS</p>
              </div>
              <div className="flex items-center justify-center w-[16px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#707A8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="border border-[#4c86ff] bg-[#4c86ff]/10 flex-1 flex items-center justify-center p-[10px] rounded-[8px]">
                <p className="font-['Space_Grotesk'] font-bold text-[#4c86ff] text-[11px]">APPROVED SESS</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-[12px] items-center w-full">
              <div className="border border-[#232b3a] bg-[#232b3a]/30 flex-1 flex items-center justify-center p-[10px] rounded-[8px]">
                <p className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[11px]">VERIFICATION</p>
              </div>
              <div className="flex items-center justify-center w-[16px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#707A8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="border border-[#00d4aa] bg-[#00d4aa]/10 flex-1 flex items-center justify-center p-[10px] rounded-[8px]">
                <p className="font-['Space_Grotesk'] font-bold text-[#00d4aa] text-[11px]">PRODUCTION</p>
              </div>
            </div>

          </div>

          {/* Telemetry Summary */}
          <div className="bg-[#ffffff0a] flex items-center justify-between p-[8px] rounded-[4px] w-full">
            <p className="font-['Space_Grotesk'] font-normal text-[#00d4aa] text-[11px]">
              VERIFICATION: COMPLETE
            </p>
            <p className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[11px]">
              JITTER: 0.01s
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
