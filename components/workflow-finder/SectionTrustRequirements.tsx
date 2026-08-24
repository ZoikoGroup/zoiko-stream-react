import React from 'react';

const imgSectionBg = "/images/workflow-finder/trust-requirements-section-bg.png";

const REQUIREMENTS = [
  {
    image: "/images/workflow-finder/trust-requirements-card-security.png",
    title: "Security",
    description: "Cryptographic verification of workflow outcomes, full SSO audit pathways, and secure internal routing.",
    verify: "Inspect compliance specs, encryption qualification guides, and SSO configurations.",
  },
  {
    image: "/images/workflow-finder/trust-requirements-card-accessibility.png",
    title: "Accessibility",
    description: "Strict WCAG compliance, automated real-time captions, and multi-language alternative audio layouts.",
    verify: "Review auto-generated transcript accuracy metrics and player compliance scores.",
  },
  {
    image: "/images/workflow-finder/trust-requirements-card-resilience.png",
    title: "Resilience",
    description: "Deterministic failover options, active operational logic matrices, and multiple active ingestion streams.",
    verify: "Verify active fallback pathways and review historical failover telemetry.",
  },
  {
    image: "/images/workflow-finder/trust-requirements-card-governance.png",
    title: "Governance",
    description: "Detailed administrative audit logs, regional residency controls, and deterministic workflow governance.",
    verify: "Access current audit records and regional boundary mapping rules.",
  },
  {
    image: "/images/workflow-finder/trust-requirements-card-operating-model.png",
    title: "Operating model",
    description: "From raw API-first infrastructure to fully white-glove produced and managed live event broadcasts.",
    verify: "Select developer documentation or review concierge managed service SLAs.",
  },
];

export default function SectionTrustRequirements() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-60 size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(15,27,45,0.4)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.26] tracking-[-0.8px] m-0 w-full">
            Can this meet your requirements?
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            Five areas to evaluate before conversion — each routed to inspectable evidence, not marketing assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px] w-full">
          {REQUIREMENTS.map((item) => (
            <div key={item.title} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid rounded-[12px] overflow-hidden flex flex-col items-start">
              <div className="h-[140px] w-full">
                <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
                <p className="font-sans font-bold text-white text-[18px] m-0">{item.title}</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[13px] leading-[1.54] m-0 w-full">{item.description}</p>
                <div className="h-px w-full bg-[#232b3a]" />
                <div className="flex flex-col gap-[4px] items-start w-full">
                  <p className="font-sans font-bold text-[#4ecdc4] text-[11px] tracking-[0.5px] uppercase m-0 whitespace-nowrap">What to verify:</p>
                  <p className="font-inter font-normal text-[#aab3c4] text-[12px] leading-[1.5] m-0 w-full">{item.verify}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
