import React from 'react';

export default function MonitoringHealthSection() {
  return (
    <section className="relative w-full border-b border-[#232b3a] min-h-[965px] flex flex-col items-start bg-[#06080c] px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/live-streaming-api/monitoring-bg.png"
          alt="" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute bg-[rgba(10,15,26,0.66)] inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-start gap-[56px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-white text-[38px] tracking-[-0.8px] leading-[48px]">
            Monitoring & health
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[28px]">
            Operational health, request correlation, alerting, and stream monitoring.
          </p>
        </div>

        {/* Monitoring Dashboard Panel */}
        <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-col gap-[24px] items-start p-[32px] w-full rounded-[16px] shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
            <span className="font-sora font-bold text-white text-[16px] tracking-[1px] uppercase">
              STREAM SYSTEM TELEMETRY
            </span>
            <div className="bg-[#10b9811a] border border-[#10b9814d] border-solid px-[8px] py-[4px] rounded-[4px]">
              <span className="font-sora font-bold text-[#34d4ca] text-[11px]">
                PRODUCTION ENGINE
              </span>
            </div>
          </div>
          
          <div className="w-full h-[1px] bg-[#232b3a]" />

          {/* Metrics Row */}
          <div className="flex flex-col md:flex-row gap-[24px] w-full flex-wrap">
            
            <div className="flex flex-col gap-[8px] flex-[1_0_0] min-w-[150px]">
              <span className="font-inter text-[#aab3c4] text-[12px]">Stream State</span>
              <div className="flex items-center gap-[8px]">
                <div className="w-[8px] h-[8px] bg-[#34d4ca] rounded-full shrink-0" />
                <span className="font-sora font-bold text-white text-[24px]">LIVE</span>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] flex-[1_0_0] min-w-[150px]">
              <span className="font-inter text-[#aab3c4] text-[12px]">Last Transition</span>
              <span className="font-sora font-bold text-white text-[24px]">12s ago</span>
            </div>

            <div className="flex flex-col gap-[8px] flex-[1_0_0] min-w-[150px]">
              <span className="font-inter text-[#aab3c4] text-[12px]">Ingest Status</span>
              <span className="font-sora font-bold text-[#34d4ca] text-[24px]">ACTIVE</span>
            </div>

            <div className="flex flex-col gap-[8px] flex-[1_0_0] min-w-[150px]">
              <span className="font-inter text-[#aab3c4] text-[12px]">Viewer Readiness</span>
              <span className="font-sora font-bold text-[#4a8cfb] text-[24px]">100% OK</span>
            </div>

            <div className="flex flex-col gap-[8px] flex-[1_0_0] min-w-[150px]">
              <span className="font-inter text-[#aab3c4] text-[12px]">Recent Errors</span>
              <span className="font-sora font-bold text-white text-[24px]">None</span>
            </div>

          </div>
        </div>

        {/* Triage Matrix Card */}
        <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-col gap-[24px] items-start p-[32px] w-full rounded-[16px] shadow-sm">
          <span className="font-sora font-bold text-white text-[16px] tracking-[1px] uppercase">
            COMMON TRIAGE FRAMEWORK
          </span>
          
          <div className="bg-[#06080c] border border-[#232b3a] border-solid flex flex-col w-full rounded-[12px] overflow-x-auto">
            <div className="min-w-[700px] w-full flex flex-col">
              
              {/* Table Header */}
              <div className="bg-[#0c0e14] border-b-2 border-[#232b3a] border-solid flex gap-[12px] items-start p-[16px] w-full">
                <span className="font-sora font-bold text-white text-[13px] w-[250px] shrink-0">Symptom</span>
                <span className="font-sora font-bold text-white text-[13px] flex-[1_0_0]">Likely Cause</span>
                <span className="font-sora font-bold text-white text-[13px] flex-[1_0_0]">Developer Action</span>
              </div>

              {/* Table Row 1 */}
              <div className="border-b border-[#232b3a] border-solid flex gap-[12px] items-center p-[16px] w-full">
                <span className="font-sora font-bold text-white text-[14px] w-[250px] shrink-0">Encoder Handshake Failure</span>
                <span className="font-inter text-[#aab3c4] text-[13px] leading-[20px] flex-[1_0_0]">Incorrect stream key or unauthorized preflight header.</span>
                <span className="font-inter text-[#34d4ca] text-[13px] leading-[20px] flex-[1_0_0]">Verify API token scopes and re-fetch active stream credentials.</span>
              </div>

              {/* Table Row 2 */}
              <div className="border-b border-[#232b3a] border-solid flex gap-[12px] items-center p-[16px] w-full">
                <span className="font-sora font-bold text-white text-[14px] w-[250px] shrink-0">Repeated Reconnection Loop</span>
                <span className="font-inter text-[#aab3c4] text-[13px] leading-[20px] flex-[1_0_0]">Insufficent outbound bandwidth or high packet drop at source.</span>
                <span className="font-inter text-[#34d4ca] text-[13px] leading-[20px] flex-[1_0_0]">Check stream ingest analytics or switch encoder to SRT protocol.</span>
              </div>

              {/* Table Row 3 */}
              <div className="flex gap-[12px] items-center p-[16px] w-full">
                <span className="font-sora font-bold text-white text-[14px] w-[250px] shrink-0">Playback 404 Token Error</span>
                <span className="font-inter text-[#aab3c4] text-[13px] leading-[20px] flex-[1_0_0]">Playout JWT is expired, has an invalid signature, or wrong stream scope.</span>
                <span className="font-inter text-[#34d4ca] text-[13px] leading-[20px] flex-[1_0_0]">Regenerate verified playout token using current backend secret.</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
