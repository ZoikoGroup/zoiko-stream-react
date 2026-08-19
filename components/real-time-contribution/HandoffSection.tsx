import React from 'react';

export default function HandoffSection() {
  const states = [
    { label: 'Authorized', isActive: true, icon: true },
    { label: 'Preparing', isActive: true, icon: true },
    { label: 'Connecting', isWarning: true, icon: true },
    { label: 'Connected', isSuccess: true, icon: true },
    { label: 'Verified', isActive: true, icon: true },
    { label: 'Accepted', isActive: true, icon: true },
    { label: 'Handed off', isActive: true, icon: true },
    { label: 'Ended', isActive: true, icon: false },
  ];

  return (
    <section className="bg-[#0a0f1a] border-b border-[#232b3a] flex flex-col gap-[48px] items-start px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col gap-[12px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[32px] md:text-[38px] leading-[1.2]">
          From session join to production acceptance
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[16px] md:text-[18px] max-w-[800px] leading-[1.5]">
          A contribution session moves through distinct, observable states — each with clear ownership, verification, and recovery.
        </p>
      </div>

      {/* State Flow Nodes */}
      <div className="flex flex-row items-center justify-start gap-[8px] py-[12px] relative w-full max-w-[1216px] mx-auto overflow-x-auto scrollbar-hide snap-x">
        {states.map((state, index) => {
          let bgClass = "bg-[#10151e]/80 border-[#232b3a] text-[#eef1f6]";
          if (state.isWarning) bgClass = "bg-[#ffc837]/10 border-[#ffc837] text-[#ffc837]";
          if (state.isSuccess) bgClass = "bg-[#00d4aa]/10 border-[#00d4aa] text-[#00d4aa]";
          
          return (
            <div key={index} className="flex items-center gap-[8px] min-w-max snap-start">
              <div className={`${bgClass} border flex items-center justify-center px-[12px] py-[8px] rounded-[6px]`}>
                <span className={`font-['Space_Grotesk'] font-medium text-[12px]`}>
                  {state.label}
                </span>
              </div>
              {state.icon && (
                <div className="flex items-center justify-center w-[12px] h-[12px] opacity-70">
                  <img alt="" src="/images/real-time-contribution/chevron-right.svg" className="w-full h-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Control Center Mockup */}
      <div className="bg-[#10151e]/80 border border-[#232b3a] flex flex-col gap-[20px] items-start p-[24px] rounded-[16px] w-full max-w-[1216px] mx-auto backdrop-blur-sm shadow-xl">
        
        {/* Mockup Header */}
        <div className="flex flex-col md:flex-row gap-[16px] items-start md:items-center justify-between w-full border-b border-[#232b3a] pb-[16px]">
          <div className="flex flex-col gap-[4px] items-start">
            <h3 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[18px]">
              Tokyo_Venue_Camera_Feeds
            </h3>
            <p className="font-['Space_Grotesk'] font-normal text-[#707a8c] text-[12px] uppercase tracking-wide">
              ENV: PRODUCTION | OWNER: TOKYO_BROADCAST_ENG | SOURCE: REMOTE_CAMERA_01
            </p>
          </div>
          <div className="bg-[#00d4aa]/10 border border-[#00d4aa] flex items-center px-[12px] py-[6px] rounded-[4px] shrink-0">
            <span className="font-['Space_Grotesk'] font-bold text-[#00d4aa] text-[11px] tracking-wider uppercase">
              ACTIVE STREAMING
            </span>
          </div>
        </div>

        {/* Mockup Columns */}
        <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
          
          {/* Diagnostic State */}
          <div className="bg-[#0a0f1a] border border-[#232b3a] flex flex-col gap-[12px] p-[16px] rounded-[8px] w-full md:flex-1">
            <h4 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[14px]">
              Operational Diagnostic State
            </h4>
            <div className="flex flex-col gap-[10px] w-full mt-2">
              <div className="flex items-center justify-between w-full border-b border-[#232b3a]/50 pb-2">
                <span className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[13px]">Connection Path</span>
                <span className="font-['Space_Grotesk'] font-bold text-[#00d4aa] text-[12px]">SRT Secure Handshake Verified</span>
              </div>
              <div className="flex items-center justify-between w-full border-b border-[#232b3a]/50 pb-2">
                <span className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[13px]">Verification Codecs</span>
                <span className="font-['Space_Grotesk'] font-bold text-[#00d4aa] text-[12px]">H.264 / AAC High Profile</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[13px]">Handoff Protocol</span>
                <span className="font-['Space_Grotesk'] font-bold text-[#00d4aa] text-[12px]">Tokyo Ingest Routing OK</span>
              </div>
            </div>
          </div>

          {/* System Event Timeline */}
          <div className="bg-[#0a0f1a] border border-[#232b3a] flex flex-col gap-[12px] p-[16px] rounded-[8px] w-full md:flex-1">
            <h4 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[14px]">
              System Event Timeline
            </h4>
            <div className="flex flex-col gap-[12px] w-full mt-2">
              <div className="flex items-start gap-[12px] w-full">
                <span className="font-['Space_Grotesk'] font-medium text-[#00d4aa] text-[11px] shrink-0 pt-[2px]">
                  13:00:04
                </span>
                <span className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[13px]">
                  Handed off session to Tokyo primary production core.
                </span>
              </div>
              <div className="flex items-start gap-[12px] w-full">
                <span className="font-['Space_Grotesk'] font-medium text-[#00d4aa] text-[11px] shrink-0 pt-[2px]">
                  12:59:52
                </span>
                <span className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[13px]">
                  SRT handshake completed and network qualification passed.
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full text-center mt-2">
          <span className="font-['Space_Grotesk'] font-normal text-[#707a8c] text-[11px]">
            Illustrative interface — example configuration
          </span>
        </div>
      </div>

    </section>
  );
}
