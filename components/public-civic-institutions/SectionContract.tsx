import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/contract-section-bg.png";
const imgBgBlob1 = "/images/public-civic-institutions/contract-bg-blob-1.svg";
const imgBgBlob2 = "/images/public-civic-institutions/contract-bg-blob-2.svg";
const imgArrowUpRight = "/images/public-civic-institutions/contract-icon-arrow-up-right.svg";
const imgDotInstitution = "/images/public-civic-institutions/contract-legend-dot-institution.svg";
const imgDotZoikoStream = "/images/public-civic-institutions/contract-legend-dot-zoikostream.svg";
const imgDotShared = "/images/public-civic-institutions/contract-legend-dot-shared.svg";
const imgDotThirdParty = "/images/public-civic-institutions/contract-legend-dot-thirdparty.svg";

const TAG_CLASSES = {
  green: "bg-[rgba(16,185,129,0.08)] border-[rgba(16,185,129,0.2)] text-[#10b981]",
  amber: "bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.2)] text-[#f59e0b]",
  red: "bg-[rgba(239,68,68,0.08)] border-[rgba(239,68,68,0.2)] text-[#ef4444]",
};

const STAGES = [
  { title: "Purpose", owner: "Institution", meta: "Mandated scope", tag: "CURRENT", tone: "green" as const, failure: "Unspecified goals" },
  { title: "Authority", owner: "Institution", meta: "Access credentials", tag: "CURRENT", tone: "green" as const, failure: "Leaked exploit risks" },
  { title: "Audience", owner: "Shared", meta: "Citizen pathways", tag: "CURRENT", tone: "green" as const, failure: "Broken stream gates" },
  { title: "Accessibility", owner: "Shared", meta: "WCAG AA readiness", tag: "CURRENT", tone: "green" as const, failure: "Uncaptioned streams" },
  { title: "Operational Truth", owner: "ZoikoStream", meta: "System telemetry", tag: "REVIEW DUE", tone: "amber" as const, failure: "Absent SLA metrics" },
  { title: "Replay & Records", owner: "ZoikoStream", meta: "Archiving rules", tag: "CURRENT", tone: "green" as const, failure: "Unarchived sessions" },
  { title: "Evidence & Support", owner: "Shared", meta: "Auditability record", tag: "EXPIRED", tone: "red" as const, failure: "Stale compliance logs" },
];

const LEGEND = [
  { icon: imgDotInstitution, label: "Institution Owns" },
  { icon: imgDotZoikoStream, label: "ZoikoStream Owns" },
  { icon: imgDotShared, label: "Shared Responsibility" },
  { icon: imgDotThirdParty, label: "Third-party Dependencies" },
];

export default function SectionContract() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-182px] size-[420px] top-[-97px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-224px] right-[-165px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] m-0 w-full">
            The civic media operating contract
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[18px] m-0 w-full">
            Seven inspectable dimensions of accountable media operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-[16px] w-full">
          {STAGES.map((stage) => (
            <div key={stage.title} className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid rounded-[12px] p-[20px] flex flex-col gap-[16px] items-start xl:h-[225px]">
              <div className="flex items-center justify-between w-full">
                <p className="font-sans font-bold text-[#0f1b2d] text-[15px] m-0 whitespace-nowrap">{stage.title}</p>
                <img alt="" className="size-[14px]" src={imgArrowUpRight} />
              </div>
              <div className="flex flex-col gap-[6px] items-start w-full">
                <p className="font-inter font-normal text-[#4f5e74] text-[11px] m-0">
                  OWNER: <span className="font-inter font-semibold text-[#0f1b2d]">{stage.owner}</span>
                </p>
                <p className="font-inter font-medium text-[#0f1b2d] text-[12px] m-0">{stage.meta}</p>
              </div>
              <div className={`border border-solid rounded-[4px] px-[10px] py-[4px] ${TAG_CLASSES[stage.tone]}`}>
                <p className="font-mono font-bold text-[11px] m-0 whitespace-nowrap">{stage.tag}</p>
              </div>
              <div className="flex flex-col gap-[4px] items-start w-full">
                <p className="font-inter font-semibold text-[#ef4444] text-[10px] uppercase m-0">Common Failure</p>
                <p className="font-inter font-normal text-[#4f5e74] text-[12px] m-0">{stage.failure}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[8px] p-[16px] flex flex-col sm:flex-row gap-[20px] items-start sm:items-center w-full">
          <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 whitespace-nowrap">Responsibility Mapping:</p>
          <div className="flex flex-wrap gap-[20px] items-center">
            {LEGEND.map((item) => (
              <div key={item.label} className="flex gap-[8px] items-center">
                <img alt="" className="size-[8px]" src={item.icon} />
                <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0 whitespace-nowrap">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
