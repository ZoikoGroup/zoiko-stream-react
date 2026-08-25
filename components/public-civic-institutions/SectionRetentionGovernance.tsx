import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/retention-governance-section-bg.png";
const imgBgBlob1 = "/images/public-civic-institutions/retention-governance-bg-blob-1.svg";
const imgBgBlob2 = "/images/public-civic-institutions/retention-governance-bg-blob-2.svg";

const INSTITUTION_STEPS = [
  { number: 1, title: "Define Class", description: "Identify record category (e.g., Legislative Board Proceedings)" },
  { number: 2, title: "Set Retention", description: "Stated holding duration (e.g., 7 years active public)" },
  { number: 3, title: "Establish Action", description: "Map disposition destination (e.g., State Archive transfer)" },
];

const ZOIKOSTREAM_STEPS = [
  { number: 1, title: "Inherit Metadata", description: "Match incoming session with organization rules" },
  { number: 2, title: "Lock Operations", description: "Disable manual record deletion during retention locks" },
  { number: 3, title: "Export & Purge", description: "Execute verified disposition with metadata manifest logs" },
];

const SCHEDULE_TEMPLATE = [
  { label: "Governing Law", value: "State Records Act § 12-B" },
  { label: "Active Live Period", value: "N/A - Realtime transit" },
  { label: "Replay Holding", value: "3 Years Public / 5 Years Internal" },
  { label: "Preservation Destination", value: "State Digital Archive Vault" },
];

const DISPOSITION_SIGNALS = [
  { label: "Hold / Lock", color: "#f59e0b" },
  { label: "Transfer", color: "#4a8cfb" },
  { label: "Delete Archive", color: "#ef4444" },
  { label: "Preserve Perm", color: "#10b981" },
];

const DISTINCTIONS = [
  { title: "Retention", description: "How long a record must exist before evaluation" },
  { title: "Archive", description: "A structured, indexed repository of metadata" },
  { title: "Backup", description: "A disaster-recovery snapshot of storage blocks" },
  { title: "Preservation", description: "Secure permanent handoff to authority" },
];

export default function SectionRetentionGovernance() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-100px] size-[420px] top-[-131px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-146px] right-[-192px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.6] tracking-[-0.38px] m-0 w-full">
            Your institution owns the records schedule, not the platform
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[18px] m-0 w-full">
            Maintain compliance with local laws and dynamic holding rules. Platform infrastructure respects your governance schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full">
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[28px] flex flex-col gap-[20px] items-start">
            <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0 w-full">Institution Records Schedule (Sovereign)</p>
            <div className="flex flex-col gap-[16px] items-start w-full">
              {INSTITUTION_STEPS.map((step) => (
                <div key={step.number} className="flex gap-[12px] items-start w-full">
                  <div className="bg-[rgba(78,205,196,0.08)] rounded-[8px] p-[8px] shrink-0">
                    <p className="font-sans font-bold text-[#4ecdc4] text-[12px] m-0">{step.number}</p>
                  </div>
                  <div className="flex flex-col gap-[4px] items-start flex-1 min-w-0">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[15px] m-0 whitespace-nowrap">{step.title}</p>
                    <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[28px] flex flex-col gap-[20px] items-start">
            <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0 w-full">ZoikoStream Enforcement (Automation)</p>
            <div className="flex flex-col gap-[16px] items-start w-full">
              {ZOIKOSTREAM_STEPS.map((step) => (
                <div key={step.number} className="flex gap-[12px] items-start w-full">
                  <div className="bg-[rgba(74,140,251,0.08)] rounded-[8px] p-[8px] shrink-0">
                    <p className="font-sans font-bold text-[#4a8cfb] text-[12px] m-0">{step.number}</p>
                  </div>
                  <div className="flex flex-col gap-[4px] items-start flex-1 min-w-0">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[15px] m-0 whitespace-nowrap">{step.title}</p>
                    <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[24px] flex flex-col gap-[16px] items-start">
            <p className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 whitespace-nowrap">Schedule Template Reference</p>
            <div className="flex flex-col gap-[8px] items-start w-full">
              {SCHEDULE_TEMPLATE.map((row) => (
                <div key={row.label} className="flex items-center justify-between w-full gap-[8px]">
                  <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0">{row.label}</p>
                  <p className="font-sans font-bold text-[#0f1b2d] text-[13px] m-0 text-right">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[24px] flex flex-col gap-[16px] items-start">
            <p className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 w-full">Authorized Disposition Signals</p>
            <div className="flex flex-wrap gap-[8px] items-start w-full">
              {DISPOSITION_SIGNALS.map((signal) => (
                <div key={signal.label} className="rounded-[6px] px-[16px] py-[8px]" style={{ backgroundColor: signal.color }}>
                  <p className="font-sans font-bold text-white text-[13px] m-0 whitespace-nowrap">{signal.label}</p>
                </div>
              ))}
            </div>
            <p className="font-inter font-normal text-[#4f5e74] text-[12px] m-0 w-full">
              All actions logged transparently in compliance registry with cryptographic checksums.
            </p>
          </div>
        </div>

        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[8px] p-[20px] flex flex-col gap-[16px] items-start w-full">
          <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 w-full">Governed Distinctions (Never Conflated):</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
            {DISTINCTIONS.map((item) => (
              <div key={item.title} className="flex flex-col gap-[4px] items-start">
                <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 whitespace-nowrap">{item.title}</p>
                <p className="font-inter font-normal text-[#4f5e74] text-[12px] m-0">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
