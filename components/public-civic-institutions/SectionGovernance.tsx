import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/governance-section-bg.png";
const imgUser = "/images/public-civic-institutions/governance-icon-user.svg";

const ROLES = [
  { title: "Public Affairs Owner", tags: ["APPROVE", "VIEW"] },
  { title: "Clerk & Records Authority", tags: ["EVIDENCE", "DECIDE"] },
  { title: "Media & AV Operations", tags: ["OPERATE"] },
  { title: "IT & Platform Security", tags: ["APPROVE", "OPERATE"] },
  { title: "Accessibility Coordinator", tags: ["APPROVE", "EVIDENCE"] },
  { title: "Legal & Privacy Council", tags: ["DECIDE"] },
  { title: "Communications Web Team", tags: ["VIEW", "OPERATE"] },
  { title: "Support & Emergency Ops", tags: ["OPERATE"] },
];

const DIAGRAM_STEPS = [
  { num: "01", title: "Organization", role: "Governance Authority" },
  { num: "02", title: "Department", role: "Operations Head" },
  { num: "03", title: "Broadcast", role: "Uptime Supervisor" },
  { num: "04", title: "Segment", role: "Meeting Host" },
  { num: "05", title: "Audience", role: "Public Access" },
  { num: "06", title: "Recording", role: "Record Logs" },
  { num: "07", title: "Archive", role: "System Compliance" },
];

export default function SectionGovernance() {
  const left = ROLES.slice(0, 4);
  const right = ROLES.slice(4);

  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.66)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] m-0 w-full">
            Accountability starts with named decision rights
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] m-0 w-full">
            Define who owns media decisions across your institution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px] w-full">
          <div className="flex flex-col gap-[8px]">
            {left.map((role) => (
              <div key={role.title} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col gap-[16px] items-start w-full">
                <div className="flex gap-[12px] items-center w-full">
                  <img alt="" className="size-[18px]" src={imgUser} />
                  <p className="font-sans font-bold text-white text-[16px] m-0 flex-1">{role.title}</p>
                </div>
                <div className="flex flex-wrap gap-[6px] items-start w-full">
                  {role.tags.map((tag) => (
                    <div key={tag} className="bg-[#232b3a] rounded-[4px] px-[8px] py-[2px]">
                      <p className="font-mono font-bold text-[#4ecdc4] text-[10px] m-0 whitespace-nowrap">{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[8px]">
            {right.map((role) => (
              <div key={role.title} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col gap-[16px] items-start w-full">
                <div className="flex gap-[12px] items-center w-full">
                  <img alt="" className="size-[18px]" src={imgUser} />
                  <p className="font-sans font-bold text-white text-[16px] m-0 flex-1">{role.title}</p>
                </div>
                <div className="flex flex-wrap gap-[6px] items-start w-full">
                  {role.tags.map((tag) => (
                    <div key={tag} className="bg-[#232b3a] rounded-[4px] px-[8px] py-[2px]">
                      <p className="font-mono font-bold text-[#4ecdc4] text-[10px] m-0 whitespace-nowrap">{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[20px] lg:p-[32px] flex flex-col gap-[20px] items-start w-full">
          <p className="font-sans font-bold text-white text-[18px] m-0 w-full">Civic Scope & Authority Hierarchy Model</p>
          <div className="bg-[#0a0d14] border border-[#232b3a] border-solid rounded-[8px] p-[20px] flex flex-col lg:flex-row gap-[20px] lg:gap-[12px] items-center justify-center w-full overflow-x-auto">
            {DIAGRAM_STEPS.map((step, index) => (
              <div key={step.num} className="flex-1 flex items-center gap-[12px] min-w-[100px] w-full lg:w-auto">
                <div className="flex-1 flex flex-col gap-[6px] items-center min-w-px">
                  <div className="bg-[#1e293b] border border-[#232b3a] border-solid rounded-full flex items-center justify-center size-[40px]">
                    <p className="font-mono font-bold text-[#4ecdc4] text-[14px] m-0 whitespace-nowrap">{step.num}</p>
                  </div>
                  <p className="font-sans font-bold text-white text-[13px] m-0 whitespace-nowrap">{step.title}</p>
                  <p className="font-inter font-normal text-[#aab3c4] text-[10px] m-0 text-center whitespace-nowrap">{step.role}</p>
                </div>
                {index < DIAGRAM_STEPS.length - 1 && (
                  <div className="hidden lg:block bg-[#232b3a] flex-1 h-[2px] min-w-[24px]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
