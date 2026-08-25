import React from 'react';

const imgSectionBg = "/images/workflow-finder/three-ways-section-bg.png";
const imgBgBlob1 = "/images/workflow-finder/three-ways-bg-blob-1.svg";
const imgBgBlob2 = "/images/workflow-finder/three-ways-bg-blob-2.svg";
const imgCheck = "/images/workflow-finder/three-ways-icon-check.svg";
const imgLock = "/images/workflow-finder/three-ways-icon-lock.svg";
const imgRefreshCw = "/images/workflow-finder/three-ways-icon-refresh.svg";

const STEPS = [
  { number: 1, title: "Desired Outcome", description: "Choose the objective you are trying to achieve, from embedding live stream features to secure internal broadcasts." },
  { number: 2, title: "Audience & Access", description: "Identify who needs to watch or access the video. Limits paths to public scale or highly-governed secure access." },
  { number: 3, title: "Operating Model", description: "Select your preferred management style, matching developer workflows, enterprise control layers, or fully managed events." },
];

const TRUST_ITEMS = [
  { icon: imgCheck, title: "Rule-based engine", description: "No dynamic behavioral profiling." },
  { icon: imgLock, title: "Session-only metrics", description: "No free-text data harvesting." },
  { icon: imgRefreshCw, title: "Fully transparent edits", description: "Restart or clear steps anytime." },
];

export default function SectionThreeWays() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-197px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0a0d14] text-[28px] lg:text-[38px] leading-[1.26] tracking-[-0.8px] m-0 w-full">
            Three questions. One explainable starting path.
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            A transparent navigation system, not a hidden recommendation engine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px] w-full">
          {STEPS.map((step) => (
            <div key={step.number} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start">
              <div className="bg-[#e6f4f1] rounded-[18px] flex items-center justify-center size-[36px]">
                <p className="font-sans font-bold text-[#4ecdc4] text-[16px] m-0">{step.number}</p>
              </div>
              <div className="flex flex-col gap-[12px] items-start w-full">
                <p className="font-sans font-bold text-[#0a0d14] text-[20px] m-0 w-full">{step.title}</p>
                <p className="font-inter font-normal text-[#4f5e74] text-[14px] leading-[1.57] m-0 w-full">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f9f9f9] rounded-[4px] p-[24px] flex flex-col sm:flex-row gap-[24px] items-start sm:items-center w-full">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-1 gap-[12px] items-center min-w-0 w-full sm:w-auto">
              <img alt="" className="size-[24px] shrink-0" src={item.icon} />
              <div className="flex flex-col gap-[2px] items-start flex-1 min-w-0">
                <p className="font-sans font-bold text-[#0a0d14] text-[15px] m-0">{item.title}</p>
                <p className="font-inter font-normal text-[#4f5e74] text-[12px] m-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
