import React from 'react';

const imgSectionBg = "/images/workflow-finder/operating-model-section-bg.png";

const MODELS = [
  { image: "/images/workflow-finder/operating-model-card-developer.png", title: "Developer / self-service", description: "Your engineering team builds and operates utilizing raw developer surfaces." },
  { image: "/images/workflow-finder/operating-model-card-internal-operator.png", title: "Internal operator / team", description: "Your organization operates with enterprise portal controls, governance logs, and active SLAs." },
  { image: "/images/workflow-finder/operating-model-card-managed-events.png", title: "Managed Live Events", description: "Zero-fail scheduled event with white-glove setup and active failover protection." },
  { image: "/images/workflow-finder/operating-model-card-unsure.png", title: "Unsure", description: "Compare multiple operational structures side by side before deciding." },
];

export default function SectionOperatingModel() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.78)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.26] m-0 w-full">
          How do you want to operate it?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full">
          {MODELS.map((model) => (
            <div key={model.title} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid rounded-[16px] overflow-hidden flex flex-col items-start">
              <div className="h-[140px] w-full">
                <img alt={model.title} className="w-full h-full object-cover" src={model.image} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[24px] w-full">
                <p className="font-sans font-bold text-white text-[18px] m-0 w-full">{model.title}</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[13px] leading-[1.54] m-0 w-full">{model.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center w-full">
          <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity">
            <span className="font-sans font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">Show my starting path</span>
          </button>
        </div>
      </div>
    </div>
  );
}
