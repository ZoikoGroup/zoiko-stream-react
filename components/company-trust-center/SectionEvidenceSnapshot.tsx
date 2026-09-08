import React from 'react';

const TONE_CLASSES = {
  green: "bg-[#e9f9f7] text-[#3fbf7f]",
  blue: "bg-[#eef3ff] text-[#5b8def]",
};

const EVIDENCE_ROWS = [
  { title: "ZoikoStream Security Overview", scope: "Platform — all regions", tag: "Public", tone: "green" as const, meta: "Reviewed Aug 2026", cta: "View →" },
  { title: "SOC 2 Type II Report", scope: "Core platform", tag: "Available on request", tone: "blue" as const, meta: "Period ending Jun 2026", cta: "Request →" },
  { title: "Data Processing Addendum", scope: "All customers", tag: "Public", tone: "green" as const, meta: "Reviewed Jul 2026", cta: "View →" },
  { title: "Penetration Test Summary", scope: "Core platform", tag: "Available on request", tone: "blue" as const, meta: "Reviewed May 2026", cta: "Request →" },
  { title: "Security Questionnaire (Standard)", scope: "Enterprise", tag: "Available on request", tone: "blue" as const, meta: "Reviewed Aug 2026", cta: "Request →" },
];

export default function SectionEvidenceSnapshot() {
  return (
    <div className="border-b border-[#dde2ea] border-solid w-full px-6 lg:px-0 py-[48px] lg:py-[64px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Assurance resources</p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] lg:text-[26px] leading-[1.6] tracking-[-0.26px] m-0 w-full">
          Evidence snapshot.
        </h2>
        <p className="font-inter font-normal text-[#6b7280] text-[15px] leading-[1.6] m-0 w-full">
          Current public and requestable evidence records, rendered from the Trust Evidence Registry.
        </p>

        <div className="border-t border-[#dde2ea] border-solid w-full">
          {EVIDENCE_ROWS.map((row, index) => (
            <div
              key={row.title}
              className={`flex flex-col lg:flex-row lg:items-center gap-[10px] lg:gap-[16px] py-[24px] w-full ${
                index < EVIDENCE_ROWS.length - 1 ? "border-b border-[#dde2ea] border-solid" : ""
              }`}
            >
              <p className="font-inter font-semibold text-[#32353c] text-[14.5px] leading-[1.6] m-0 lg:w-[220px] shrink-0">{row.title}</p>
              <p className="font-inter font-normal text-[#9aa1ae] text-[12.5px] m-0 lg:w-[130px] shrink-0">{row.scope}</p>
              <div className={`rounded-full py-[5px] shrink-0 w-full lg:w-[150px] flex items-center justify-center ${TONE_CLASSES[row.tone]}`}>
                <p className="font-inter font-bold text-[11.5px] m-0 whitespace-nowrap">{row.tag}</p>
              </div>
              <p className="font-inter font-normal text-[#9aa1ae] text-[12.5px] m-0 lg:w-[130px] shrink-0 flex-1 min-w-0">{row.meta}</p>
              <p className="font-inter font-bold text-[#5b8def] text-[13px] m-0 whitespace-nowrap cursor-pointer">{row.cta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
