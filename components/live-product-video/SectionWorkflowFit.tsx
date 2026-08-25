import React from 'react';

const imgSectionBg = "/images/live-product-video/workflow-fit-section-bg.png";
const imgBgBlob1 = "/images/live-product-video/workflow-fit-bg-blob-1.svg";
const imgBgBlob2 = "/images/live-product-video/workflow-fit-bg-blob-2.svg";
const imgCheck = "/images/live-product-video/workflow-fit-icon-check.svg";

const QUESTION_CARDS = [
  {
    question: "What starts the live session?",
    options: ["User action", "Scheduled product event", "External media source", "Not sure"],
    selectedIndex: 0,
  },
  {
    question: "Who should be able to watch?",
    options: ["Public", "Authenticated users", "Entitled users", "Mixed / Not sure"],
    selectedIndex: 1,
  },
  {
    question: "Should the live session become replay?",
    options: ["No", "Yes", "Sometimes", "Not decided"],
    selectedIndex: 1,
  },
];

export default function SectionWorkflowFit() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-243px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[42px] leading-[1.14] tracking-[-0.8px] m-0 w-full">
            Confirm the live-product use case
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            Help visitors self-identify without scoring or profiling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full">
          {QUESTION_CARDS.map((card) => (
            <div key={card.question} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[12px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start">
              <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0 w-full">{card.question}</p>
              <div className="flex flex-col gap-[10px] items-start w-full">
                {card.options.map((option, index) => {
                  const isSelected = index === card.selectedIndex;
                  return (
                    <div
                      key={option}
                      className={`flex items-center justify-between p-[14px] rounded-[8px] w-full ${
                        isSelected ? "bg-white border-[1.5px] border-[#34d4ca] border-solid" : "bg-transparent border-[1.5px] border-[#e1e6eb] border-solid"
                      }`}
                    >
                      <p className={`text-[14px] m-0 ${isSelected ? "font-inter font-semibold text-[#0f1b2d]" : "font-inter font-normal text-[#0f1b2d]"}`}>
                        {option}
                      </p>
                      {isSelected && (
                        <div className="bg-[#34d4ca] rounded-[9px] flex items-center justify-center shrink-0 size-[18px]">
                          <img alt="" className="size-[10px]" src={imgCheck} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
