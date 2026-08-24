import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/participation-boundary-section-bg.png";
const imgBgBlob1 = "/images/public-civic-institutions/participation-boundary-bg-blob-1.svg";
const imgBgBlob2 = "/images/public-civic-institutions/participation-boundary-bg-blob-2.svg";
const imgDotDelivers = "/images/public-civic-institutions/participation-boundary-dot-delivers.svg";
const imgDotTools = "/images/public-civic-institutions/participation-boundary-dot-tools.svg";

const DELIVERS = [
  { title: "One-Way Secure Public Streaming", description: "Scale to millions without leakage risks." },
  { title: "Verifiable Access Gateways", description: "SAML SSO identity verification." },
  { title: "Regulatory Archiving Standards", description: "Meets public record preservation compliance." },
  { title: "Automated Closed Captions", description: "Live-generated Section 508 accessibility." },
  { title: "Multi-Language Secondary Audio", description: "In-player real-time audio channel selection." },
  { title: "Edge Performance Evidence", description: "Rollup statistics tied to verified CDNs." },
  { title: "Dynamic Route Policies", description: "Dynamic compliance-first route mapping." },
];

const SEPARATE_TOOLS = [
  "Citizen interactive comment systems",
  "Formal public testimony recording tools",
  "Voting / polling administration engines",
  "Town hall question moderation platforms",
  "Board agenda indexing & docket software",
  "Identity verification beyond gateway SSO",
  "Real-time feedback & sentiment monitors",
  "Internal operational work channels",
  "Public complaint filing systems",
];

export default function SectionParticipationBoundary() {
  return (
    <div className="relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[120px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-161px] size-[420px] top-[-25px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-202px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.6] tracking-[-0.38px] m-0 w-full">
            Video delivery is not civic engagement software
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[18px] m-0 w-full">
            Maintain institutional boundaries. Broadcast delivery is isolated from audience participation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] w-full">
          <div className="flex flex-col gap-[24px] items-start">
            <div className="flex gap-[12px] items-center">
              <img alt="" className="size-[12px]" src={imgDotDelivers} />
              <p className="font-sans font-bold text-[#0f1b2d] text-[22px] m-0 whitespace-nowrap">ZoikoStream Delivers</p>
            </div>
            <div className="flex flex-col gap-[16px] items-start w-full">
              {DELIVERS.map((item) => (
                <div key={item.title} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[20px] flex flex-col gap-[8px] items-start w-full">
                  <p className="font-sans font-bold text-[#0f1b2d] text-[15px] m-0 whitespace-nowrap">{item.title}</p>
                  <p className="font-inter font-normal text-[#4f5e74] text-[13px] m-0 w-full">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[24px] items-start">
            <div className="flex gap-[12px] items-center">
              <img alt="" className="size-[12px]" src={imgDotTools} />
              <p className="font-sans font-bold text-[#0f1b2d] text-[22px] m-0 w-full">Separate Institutional Tools Required</p>
            </div>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {SEPARATE_TOOLS.map((tool) => (
                <div key={tool} className="bg-white border border-[#e1e6eb] border-solid rounded-[8px] p-[16px] flex gap-[12px] items-center w-full">
                  <div className="border-2 border-[#4f5e74] border-solid rounded-[9px] flex items-center justify-center shrink-0 size-[18px]">
                    <p className="font-inter font-bold text-[#4f5e74] text-[10px] m-0">✕</p>
                  </div>
                  <p className="font-sans font-normal text-[#4f5e74] text-[14px] leading-[1.62] m-0 flex-1">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
