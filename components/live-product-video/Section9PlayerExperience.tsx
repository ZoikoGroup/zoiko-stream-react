import React from 'react';

const imgSectionBg = "/images/live-product-video/player-experience-section-bg.png";

const STATES = [
  { icon: "/images/live-product-video/player-experience-icon-alert-triangle.svg", title: "Error/Unknown", description: "Unified recovery action. Presents exact correlation logs and reliable support pathways." },
];

export default function Section9PlayerExperience() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.77)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[42px] leading-[1.19] tracking-[-1px] m-0 w-full">
            Design the viewer states, not just the happy path
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            The player is part of the product experience and must be implementation-aware.
          </p>
        </div>

        <div className="flex flex-col gap-[16px] w-full">
          {STATES.map((state) => (
            <div key={state.title} className="bg-[#10151e] border-[1.5px] border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col gap-[16px] items-start w-full">
              <div className="flex gap-[12px] items-center">
                <div className="bg-[rgba(52,212,202,0.1)] rounded-[8px] flex items-center justify-center shrink-0 size-[36px]">
                  <img alt="" className="size-[18px]" src={state.icon} />
                </div>
                <p className="font-sans font-bold text-white text-[16px] m-0">{state.title}</p>
              </div>
              <p className="font-inter font-normal text-[#aab3c4] text-[13px] leading-[1.54] m-0 w-full">{state.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
