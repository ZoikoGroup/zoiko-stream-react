import React from 'react';

const imgHero = "/images/public-civic-institutions/hero-section-bg.png";

const FIELDS = [
  {
    label: "Operational State",
    value: "Live Broadcast Running",
    tag: "ACTIVE",
    tone: "green" as const,
  },
  {
    label: "Audience Privacy Mode",
    value: "Controlled / Registered Viewers",
    tag: "GOVERNED",
    tone: "amber" as const,
  },
  {
    label: "WCAG Accessibility Readiness",
    value: "Closed Captions Generating (99.8%)",
    tag: "ACTIVE",
    tone: "green" as const,
  },
  {
    label: "Broadcast Archive Status",
    value: "Recording Authorized & Safe",
    tag: "ACTIVE",
    tone: "green" as const,
  },
  {
    label: "Civic Public Replay State",
    value: "Pending Post-Review Release",
    tag: "GOVERNED",
    tone: "amber" as const,
  },
];

const TONE_CLASSES = {
  green: "bg-[rgba(16,185,129,0.08)] border-[rgba(16,185,129,0.2)] text-[#10b981]",
  amber: "bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.2)] text-[#f59e0b]",
};

export default function SectionHero() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(15,27,45,0.82)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-[48px] items-center w-full">
        <div className="flex flex-col gap-[32px] items-start max-w-[720px] flex-1">
          <div className="border border-[#4ecdc4] border-solid rounded-full px-[12px] py-[6px]">
            <p className="font-sans font-bold text-[#4ecdc4] text-[11px] tracking-[1px] uppercase m-0 whitespace-nowrap">
              Public & Civic Institutions
            </p>
          </div>
          <h1 className="font-sans font-bold text-white text-[32px] lg:text-[48px] leading-[1.17] tracking-[-1px] m-0">
            Broadcast public information with accountability built into the workflow
          </h1>
          <p className="font-inter font-normal text-[#aab3c4] text-[16px] lg:text-[18px] leading-[1.56] m-0">
            Plan, operate, protect, make accessible, record, replay, and review public-facing or controlled video with explicit authority, current operational state, and evidence at each handoff.
          </p>
          <div className="flex flex-col sm:flex-row gap-[16px] items-center w-full sm:w-auto">
            <button className="bg-gradient-to-r from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto">
              <span className="font-sans font-bold text-[#0a0d14] text-[15px] whitespace-nowrap">Talk to an expert</span>
            </button>
            <button className="border border-[#aab3c4] border-solid px-[28px] py-[14px] rounded-[8px] bg-transparent cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors w-full sm:w-auto">
              <span className="font-sans font-bold text-white text-[15px] whitespace-nowrap">Explore Solutions</span>
            </button>
          </div>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[28px] flex flex-col gap-[24px] w-full lg:w-[560px] shrink-0">
          <div className="flex flex-wrap items-center justify-between gap-[8px] w-full">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#4ecdc4] rounded-full size-[8px] shrink-0" />
              <p className="font-sans font-bold text-white text-[15px] m-0">Civic Broadcast Operations</p>
            </div>
            <div className="bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] border-solid rounded-[4px] px-[10px] py-[4px] shrink-0">
              <p className="font-mono font-bold text-[#10b981] text-[11px] m-0 whitespace-nowrap">SECURE PIPELINE</p>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] w-full">
            {FIELDS.map((field) => (
              <div key={field.label} className="bg-[#182030] rounded-[8px] p-[16px] flex flex-col sm:flex-row sm:items-center justify-between gap-[8px] sm:gap-[12px] w-full">
                <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0">{field.label}</p>
                <div className="flex flex-wrap gap-[8px] items-center">
                  <p className="font-mono font-semibold text-white text-[13px] m-0">{field.value}</p>
                  <div className={`border border-solid rounded-[4px] px-[10px] py-[4px] shrink-0 ${TONE_CLASSES[field.tone]}`}>
                    <p className="font-mono font-bold text-[11px] m-0 whitespace-nowrap">{field.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between w-full flex-wrap gap-[8px]">
            <p className="font-mono text-[#4f5e74] text-[11px] m-0 whitespace-nowrap">HOST: US-GOV-EAST-1 // SYSTEM VERIFIED</p>
            <p className="font-mono text-[#4ecdc4] text-[11px] m-0 whitespace-nowrap">100% AUDITED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
