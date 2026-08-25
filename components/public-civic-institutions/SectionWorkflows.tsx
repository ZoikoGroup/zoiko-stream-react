import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/workflows-section-bg.png";
const imgCheckCircle = "/images/public-civic-institutions/workflows-icon-check-circle.svg";
const imgCircle = "/images/public-civic-institutions/workflows-icon-circle.svg";
const imgFileText = "/images/public-civic-institutions/workflows-icon-file-text.svg";
const imgEllipse = "/images/public-civic-institutions/workflows-icon-ellipse.svg";
const imgLine = "/images/public-civic-institutions/workflows-divider-line.svg";

const WORKFLOWS = [
  {
    title: "Council / Board Proceeding",
    description: "Formal public session requiring record logs, dynamic indexing, and citizen access paths.",
    selected: true,
  },
  {
    title: "Hearing / Public Briefing",
    description: "Official announcements and formal testimonies demanding verified stream verification.",
    selected: false,
  },
  {
    title: "Public Program / Town Hall",
    description: "Interactive community video tools with integrated moderation and public security.",
    selected: false,
  },
  {
    title: "Ceremony / Civic Event",
    description: "High-visibility public event broadcasts utilizing high fidelity media templates.",
    selected: false,
  },
  {
    title: "Emergency Broadcast",
    description: "Instant alert routing paths designed for maximum audience access under pressure.",
    selected: false,
  },
  {
    title: "Controlled / Internal Session",
    description: "Identity-verified restricted feeds with enterprise security parameters.",
    selected: false,
  },
  {
    title: "On-Demand Archive / Replay",
    description: "Long-term compliant record hosting catalogs and dynamic transcription indexes.",
    selected: false,
  },
  {
    title: "Not sure what applies",
    description: "Consult our planning wizard to establish your verified operational blueprint.",
    selected: false,
  },
];

const REQUIREMENT_GROUPS = [
  {
    label: "REQUIRED",
    color: "text-[#ef4444]",
    items: ["Closed Captions (WCAG AA)", "Public SLA Uptime Guarantee", "State Archives Preservation Record"],
  },
  {
    label: "COMMON",
    color: "text-[#f59e0b]",
    items: ["Multi-Camera Input Support", "Dual-Language Audio Packaging", "Regional Playback Restrictions"],
  },
  {
    label: "CONDITIONAL",
    color: "text-[#10b981]",
    items: ["Authorized SSO Internal Feeds", "Dynamic Public Chat Moderation"],
  },
  {
    label: "VALIDATE",
    color: "text-[#4f5e74]",
    items: ["Local Public Records Act Compliance"],
  },
];

export default function SectionWorkflows() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(15,27,45,0.45)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] m-0 w-full">
            What are you trying to operate?
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] m-0 w-full">
            Select your broadcast workflow and receive a requirements summary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[8px] w-full">
          {WORKFLOWS.map((flow) => (
            <div
              key={flow.title}
              className={`bg-[rgba(16,21,30,0.8)] rounded-[8px] p-[20px] flex flex-col gap-[12px] items-start w-full cursor-pointer ${
                flow.selected
                  ? "border-l-4 border-t border-r border-b border-[#4ecdc4] border-solid"
                  : "border border-[#232b3a] border-solid"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <img alt="" className="size-[18px]" src={flow.selected ? imgCheckCircle : imgCircle} />
                {flow.selected && (
                  <div className="bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] border-solid rounded-[4px] px-[10px] py-[4px]">
                    <p className="font-mono font-bold text-[#10b981] text-[11px] m-0 whitespace-nowrap">SELECTED</p>
                  </div>
                )}
              </div>
              <h3 className="font-sans font-bold text-white text-[16px] m-0 w-full">{flow.title}</h3>
              <p className="font-inter font-normal text-[#aab3c4] text-[13px] leading-[1.54] m-0 w-full">{flow.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid rounded-[12px] p-[28px] flex flex-col gap-[24px] items-start w-full">
          <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center justify-between w-full">
            <div className="flex gap-[12px] items-center">
              <img alt="" className="size-[20px]" src={imgFileText} />
              <p className="font-sans font-bold text-white text-[18px] m-0">
                Active Requirements: Council / Board Proceeding Workflow
              </p>
            </div>
            <div className="bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] border-solid rounded-[4px] px-[10px] py-[4px] shrink-0">
              <p className="font-mono font-bold text-[#10b981] text-[11px] m-0 whitespace-nowrap">READY TO CONFIGURE</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
            {REQUIREMENT_GROUPS.map((group) => (
              <div key={group.label} className="flex flex-col gap-[12px] items-start">
                <p className={`font-mono font-bold text-[11px] tracking-[1px] m-0 whitespace-nowrap ${group.color}`}>{group.label}</p>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  {group.items.map((item) => (
                    <div key={item} className="flex gap-[8px] items-center w-full">
                      <img alt="" className="size-[4px] shrink-0" src={imgEllipse} />
                      <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0 flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="h-0 relative w-full">
            <img alt="" className="block max-w-none size-full" src={imgLine} />
          </div>

          <div className="flex flex-col sm:flex-row gap-[16px] items-start sm:items-center justify-between w-full">
            <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0">
              Need custom verification requirements mapping?
            </p>
            <button className="bg-gradient-to-r from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity">
              <span className="font-sans font-bold text-[#0a0d14] text-[14px] whitespace-nowrap">See requirements report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
