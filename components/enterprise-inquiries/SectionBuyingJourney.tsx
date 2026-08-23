import React from 'react';

const STEPS = [
  {
    number: "1",
    title: "Discover",
    description: "Review enterprise fit, pricing context, Developers and Trust Center.",
    exit: "Exit: you choose self-service, Live Events, or an enterprise conversation.",
  },
  {
    number: "2",
    title: "Understand",
    description: "Share your need, use case and organizational context.",
    exit: "Exit: a named opportunity owner or safe disposition.",
  },
  {
    number: "3",
    title: "Validate",
    description: "Discuss architecture, integrations, security, scale and operating model.",
    exit: "Exit: solution assumptions and open risks understood.",
  },
  {
    number: "4",
    title: "Commercial & procurement",
    description: "Align pricing, legal, security review and procurement process.",
    exit: "Exit: commercial and procurement gates resolved.",
  },
  {
    number: "5",
    title: "Launch planning",
    description: "Define implementation, migration, support and success plan.",
    exit: "Exit: handoff into customer onboarding.",
  },
  {
    number: "6",
    title: "Operate & expand",
    description: "Ongoing service, support, success and expansion.",
    exit: "Exit: renewal, expansion or steady-state service.",
  },
];

export default function SectionBuyingJourney() {
  return (
    <div className="bg-white w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] flex flex-col items-center">
      <div className="w-full max-w-[800px] flex flex-col items-start">
        <div className="flex items-center gap-[8px] mb-[16px]">
          <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
            Buying journey
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0 leading-[1.2] mb-[40px] lg:mb-[56px]">
          A clear path from evaluation to launch.
        </h2>

        <div className="w-full flex flex-col">
          {STEPS.map((step, index) => (
            <div key={step.number} className="flex gap-[20px]">
              <div className="flex flex-col items-center shrink-0">
                <div className="size-[56px] rounded-full border-2 border-[#5b8def] bg-white flex items-center justify-center">
                  <span className="font-sora font-bold text-[#5b8def] text-[18px]">{step.number}</span>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="w-[2px] flex-1 min-h-[56px] bg-[#dde2ea]" />
                )}
              </div>
              <div className="flex flex-col gap-[8px] pb-[56px] pt-[10px]">
                <h3 className="font-sora font-bold text-[#32353c] text-[17px] tracking-[-0.17px] m-0">
                  {step.title}
                </h3>
                <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[1.6] m-0">
                  {step.description}
                </p>
                <p className="font-inter font-normal text-[#9aa1ae] text-[13px] leading-[1.6] m-0">
                  {step.exit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
