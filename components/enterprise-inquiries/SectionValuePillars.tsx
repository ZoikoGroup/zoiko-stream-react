import React from 'react';

const PILLARS = [
  {
    label: "Scale",
    title: "Plan for demanding video workloads.",
    description: "Discuss workload shape, concurrency, geography, traffic patterns and resilience needs before solutioning.",
    note: "No numeric capacity claims without validated evidence.",
  },
  {
    label: "Integration",
    title: "Fit video into your architecture.",
    description: "Use APIs, developer workflows and integration patterns to align with your existing stack.",
    link: "Developer documentation →",
  },
  {
    label: "Control",
    title: "Govern access, workflows and operations.",
    description: "We frame control around permissions, policy, workflow and accountability rather than vague claims.",
    note: "Only publicly launched controls are named.",
  },
  {
    label: "Trust",
    title: "Give security and procurement teams evidence.",
    description: "Route to approved security, privacy, reliability and compliance information.",
    link: "Trust Center →",
  },
  {
    label: "Operations",
    title: "Design the operating model, not just the demo.",
    description: "Clarify implementation, ownership, support, incident communication and ongoing success expectations.",
    note: "Service levels shared only after commercial approval.",
  },
];

export default function SectionValuePillars() {
  return (
    <div className="bg-white w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Value architecture
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0 leading-[1.2] mb-[40px] lg:mb-[56px] max-w-[910px]">
        Design for enterprise requirements from the start.
      </h2>

      <div className="w-full border-t border-[#dde2ea]">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.label}
            className="w-full py-[24px] border-b border-[#dde2ea] flex flex-col lg:flex-row lg:items-center gap-[8px] lg:gap-[24px]"
          >
            <p className="font-sora font-bold text-[#6a6df0] text-[15px] m-0 w-full lg:w-[156px] lg:shrink-0">
              {pillar.label}
            </p>
            <div className="flex flex-col gap-[8px] flex-1 lg:max-w-[508px]">
              <h3 className="font-sora font-bold text-[#32353c] text-[17px] tracking-[-0.17px] leading-[1.4] m-0">
                {pillar.title}
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[1.6] m-0">
                {pillar.description}
              </p>
            </div>
            <div className="lg:w-[340px] lg:shrink-0">
              {pillar.link ? (
                <span className="font-inter font-semibold text-[#5b8def] text-[15px]">{pillar.link}</span>
              ) : (
                <p className="font-inter font-normal text-[#9aa1ae] text-[13px] leading-[1.6] m-0">
                  {pillar.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
