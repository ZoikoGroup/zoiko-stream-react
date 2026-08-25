import React from 'react';

const imgSectionBg = "/images/workflow-finder/conversion-paths-section-bg.png";
const imgIcon = "/images/workflow-finder/conversion-paths-icon-circle-x.svg";

const PATHS = [
  {
    image: "/images/workflow-finder/conversion-paths-developer.png",
    title: "Developer path",
    description: "For builders needing API keys, SDK parameters, custom player UI controls, and code integration workflows.",
    cta: "Start building",
    style: "primary" as const,
  },
  {
    image: "/images/workflow-finder/conversion-paths-enterprise.png",
    title: "Enterprise path",
    description: "For organizations requiring custom SAML single sign-on, administrative audit pathways, and verified security.",
    cta: "Talk to an expert",
    style: "outline" as const,
  },
  {
    image: "/images/workflow-finder/conversion-paths-live-events.png",
    title: "Live Events path",
    description: "For broadcast planners desiring white-glove setup, signal redundancy monitoring, and hot failover protection.",
    cta: "Plan a live event",
    style: "outline" as const,
  },
];

export default function SectionConversionPaths() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(15,27,45,0.61)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.26] tracking-[-0.8px] m-0 w-full">
            Choose the path that matches where you are
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            Divergent entrance models optimized directly for your operational workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full">
          {PATHS.map((path) => (
            <div key={path.title} className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[12px] overflow-hidden flex flex-col items-start">
              <div className="h-[160px] w-full">
                <img alt={path.title} className="w-full h-full object-cover" src={path.image} />
              </div>
              <div className="flex flex-col gap-[16px] items-start p-[24px] w-full">
                <div className="flex gap-[8px] items-center w-full">
                  <div className="bg-[#232b3a] rounded-[6px] p-[6px] flex items-center justify-center">
                    <img alt="" className="size-[14px]" src={imgIcon} />
                  </div>
                  <p className="font-sans font-bold text-white text-[18px] m-0">{path.title}</p>
                </div>
                <p className="font-inter font-normal text-[#aab3c4] text-[14px] leading-[1.57] m-0 w-full">{path.description}</p>
                <div className="h-px w-full bg-[#232b3a]" />
                <button
                  className={`w-full py-[14px] rounded-[8px] cursor-pointer transition-opacity hover:opacity-90 ${
                    path.style === "primary"
                      ? "bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] border-none"
                      : "bg-transparent border-[1.5px] border-[#4ecdc4] border-solid"
                  }`}
                >
                  <span className={`font-sans font-bold text-[15px] whitespace-nowrap ${path.style === "primary" ? "text-[#0a0f1a]" : "text-[#4ecdc4]"}`}>
                    {path.cta}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
