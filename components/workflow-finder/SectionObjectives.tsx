import React from 'react';

const OBJECTIVES = [
  { image: "/images/workflow-finder/objectives-card-build-video-product.png", title: "Build video into a product", description: "Embed streaming as a feature directly into applications." },
  { image: "/images/workflow-finder/objectives-card-broadcast-globally.png", title: "Broadcast globally", description: "One-to-many at scale to millions of concurrent viewers." },
  { image: "/images/workflow-finder/objectives-card-secure-enterprise.png", title: "Secure enterprise video", description: "Governed internal and external video with strict access control." },
  { image: "/images/workflow-finder/objectives-card-accessible-multilingual.png", title: "Accessible & multilingual video", description: "Captioned, translated, inclusive delivery systems." },
  { image: "/images/workflow-finder/objectives-card-record-replay.png", title: "Record, replay and preserve", description: "Durable long-term archives and validation records." },
  { image: "/images/workflow-finder/objectives-card-managed-live-events.png", title: "Run managed Live Events", description: "Produced, one-time broadcasts with professional standby support." },
];

export default function SectionObjectives() {
  return (
    <div className="bg-black border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px]">
      <div className="flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.26] m-0 w-full">
            What are you trying to do?
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            Choose the closest outcome. You can compare alternatives later.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {OBJECTIVES.map((item) => (
            <div key={item.title} className="bg-[#0b0d12] border border-[#232b3a] border-solid rounded-[12px] overflow-hidden flex flex-col items-start">
              <div className="h-[160px] w-full">
                <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[24px] w-full">
                <p className="font-sans font-bold text-white text-[18px] m-0 w-full">{item.title}</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[14px] leading-[1.57] m-0 w-full">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
