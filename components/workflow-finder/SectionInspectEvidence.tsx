import React from 'react';

const imgSectionBg = "/images/workflow-finder/inspect-evidence-section-bg.png";
const imgBgBlob1 = "/images/workflow-finder/inspect-evidence-bg-blob-1.svg";
const imgBgBlob2 = "/images/workflow-finder/inspect-evidence-bg-blob-2.svg";

const EVIDENCE_CARDS = [
  {
    image: "/images/workflow-finder/inspect-evidence-card-guides.png",
    title: "Guides & architecture",
    category: "Whitepapers & Integration Manuals",
    owner: "Principal Solutions Architect",
    reviewed: "February 2026",
    badge: "PUBLIC / INSPECTABLE",
  },
  {
    image: "/images/workflow-finder/inspect-evidence-card-demos.png",
    title: "Demos & product evidence",
    category: "Interactive Sandboxes & Prototypes",
    owner: "Developer Operations Team",
    reviewed: "January 2026",
    badge: "DEVELOPER ACCESS ONLY",
  },
  {
    image: "/images/workflow-finder/inspect-evidence-card-trust-ops.png",
    title: "Current trust & operations",
    category: "Audit Logs & SLA Reports",
    owner: "Trust and Compliance Office",
    reviewed: "Weekly Auto-Update",
    badge: "REAL-TIME TELEMETRY",
  },
];

export default function SectionInspectEvidence() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-70px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.26] tracking-[-0.8px] m-0 w-full">
            What proof can you inspect?
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            Convert trust from abstract reassurance into attributable, current proof.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full">
          {EVIDENCE_CARDS.map((card) => (
            <div key={card.title} className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] overflow-hidden flex flex-col items-start">
              <div className="h-[200px] w-full">
                <img alt={card.title} className="w-full h-full object-cover" src={card.image} />
              </div>
              <div className="bg-[#0f1b2d] flex flex-col gap-[16px] items-start p-[24px] w-full">
                <p className="font-sans font-bold text-white text-[20px] m-0 w-full">{card.title}</p>
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0 w-full">
                    <span className="font-inter font-bold text-white">Category: </span>{card.category}
                  </p>
                  <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0 w-full">
                    <span className="font-inter font-bold text-white">Owner: </span>{card.owner}
                  </p>
                  <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0 w-full">
                    <span className="font-inter font-bold text-white">Reviewed: </span>{card.reviewed}
                  </p>
                </div>
                <div className="bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] border-solid rounded-full px-[10px] py-[4px]">
                  <p className="font-sans font-bold text-[#4ecdc4] text-[11px] uppercase m-0 whitespace-nowrap">{card.badge}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full">
          <button className="border-[1.5px] border-[#0f1b2d] border-solid px-[28px] py-[14px] rounded-[8px] bg-transparent cursor-pointer hover:bg-[rgba(15,27,45,0.05)] transition-colors">
            <span className="font-sans font-bold text-[#0f1b2d] text-[15px] whitespace-nowrap">Download trust report</span>
          </button>
        </div>
      </div>
    </div>
  );
}
