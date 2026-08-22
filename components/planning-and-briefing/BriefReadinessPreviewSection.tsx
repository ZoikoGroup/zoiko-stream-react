import React from 'react';

export default function BriefReadinessPreviewSection() {
  return (
    <section className="relative w-full py-[100px] px-6 md:px-[112px] bg-[#0a0d13] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/planning-and-briefing/brief-readiness-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,19,0.52)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-space-grotesk font-bold text-[#f9fafb] text-3xl md:text-[40px]">
            See what a completed brief looks like
          </h2>
          <p className="font-space-grotesk font-normal text-[#cbd5e1] text-[16px]">
            Before you start, preview how your planning information comes together into a structured, reviewable summary.
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-[24px] w-full">
          
          {/* Mockup Card */}
          <div className="flex flex-col w-full lg:w-[720px] bg-[#0f172a] border border-[#1f2937] rounded-[16px] shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.4)] overflow-hidden flex-shrink-0">
            
            {/* Card Header */}
            <div className="flex items-center justify-between p-[20px] bg-[#111827] border-b border-[#1f2937] w-full flex-wrap gap-4">
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-space-grotesk font-bold text-[#f9fafb] text-[18px]">
                  Summer Music Festival 2025
                </h3>
                <p className="font-space-grotesk font-normal text-[#cbd5e1] text-[13px]">
                  Event brief • Draft summary
                </p>
              </div>
              
              <div className="flex items-center gap-[8px] flex-wrap">
                <span className="bg-[#7f1d1d] text-white font-space-grotesk font-bold text-[12px] px-[10px] py-[6px] rounded-full whitespace-nowrap">
                  Requested
                </span>
                <span className="bg-[#92400e] text-white font-space-grotesk font-bold text-[12px] px-[10px] py-[6px] rounded-full whitespace-nowrap">
                  Needs confirmation
                </span>
                <span className="bg-[#065f46] text-white font-space-grotesk font-bold text-[12px] px-[10px] py-[6px] rounded-full whitespace-nowrap">
                  Reviewed
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="flex flex-col gap-[16px] p-[20px] w-full">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-[6px]">
                  <span className="font-space-grotesk font-bold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">
                    Event Type
                  </span>
                  <span className="font-space-grotesk font-bold text-[#f9fafb] text-[14px]">
                    Live Concert / Performance
                  </span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <span className="font-space-grotesk font-bold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">
                    Objective
                  </span>
                  <span className="font-space-grotesk font-bold text-[#f9fafb] text-[14px]">
                    Public broadcast + VOD archive
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-[6px]">
                  <span className="font-space-grotesk font-bold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">
                    Date
                  </span>
                  <span className="font-space-grotesk font-bold text-[#f9fafb] text-[14px]">
                    2025-08-15 • 7:00 PM EST
                  </span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <span className="font-space-grotesk font-bold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">
                    Audience
                  </span>
                  <span className="font-space-grotesk font-bold text-[#f9fafb] text-[14px]">
                    Public + internal staff
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-[6px]">
                  <span className="font-space-grotesk font-bold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">
                    Access
                  </span>
                  <span className="font-space-grotesk font-bold text-[#f9fafb] text-[14px]">
                    Public + SSO for staff
                  </span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <span className="font-space-grotesk font-bold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">
                    Production
                  </span>
                  <span className="font-space-grotesk font-bold text-[#f9fafb] text-[14px]">
                    Multi-camera + live mix
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <span className="font-space-grotesk font-bold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">
                  Owners
                </span>
                <div className="flex flex-wrap gap-[12px] items-center">
                  <div className="flex items-center gap-[8px] bg-[#111827] border border-[#1f2937] rounded-full px-[10px] py-[8px]">
                    <div className="w-[24px] h-[24px] bg-[#33d9c7] text-[#04141a] font-space-grotesk font-bold text-[12px] flex items-center justify-center rounded-full">
                      A
                    </div>
                    <span className="font-space-grotesk font-bold text-[#f9fafb] text-[13px] pr-[4px]">
                      Ava Chen
                    </span>
                  </div>
                  <div className="flex items-center gap-[8px] bg-[#111827] border border-[#1f2937] rounded-full px-[10px] py-[8px]">
                    <div className="w-[24px] h-[24px] bg-[#4c86ff] text-[#04141a] font-space-grotesk font-bold text-[12px] flex items-center justify-center rounded-full">
                      J
                    </div>
                    <span className="font-space-grotesk font-bold text-[#f9fafb] text-[13px] pr-[4px]">
                      Jordan Lee
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-[10px] p-[12px] bg-[#111827] border border-[#1f2937] rounded-[12px] mt-2">
                <div className="w-[28px] h-[28px] bg-[#fee2e2] flex items-center justify-center rounded-[14px] flex-shrink-0">
                  <span className="font-space-grotesk font-bold text-[#991b1b] text-[12px]">!</span>
                </div>
                <span className="font-space-grotesk font-normal text-[#cbd5e1] text-[13px] leading-tight pt-[6px] sm:pt-0">
                  3 unresolved items need confirmation before review
                </span>
              </div>

            </div>
          </div>

          {/* Sidebar CTA Area */}
          <div className="flex flex-col gap-[16px] w-full pt-[12px]">
            <p className="font-space-grotesk font-normal text-[#cbd5e1] text-[14px]">
              This preview shows how the brief organizes key planning details into a single, reviewable summary.
            </p>
            <a href="/plan-a-live-event" className="w-fit">
              <button className="flex items-center gap-[10px] px-[18px] py-[14px] bg-gradient-to-r from-[#33d9c7] to-[#4c86ff] rounded-[10px] w-fit hover:opacity-90 transition-opacity">
                <span className="font-space-grotesk font-bold text-white text-[14px] whitespace-nowrap">
                  Open example summary
                </span>
                <img src="/images/planning-and-briefing/arrow-right.svg" alt="" className="w-[18px] h-[18px]" />
              </button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
