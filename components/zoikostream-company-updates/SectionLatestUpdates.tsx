import React from 'react';

const TONE_CLASSES = {
  green: "bg-[#e9f9f7] text-[#3fbf7f]",
  red: "bg-[#fbe6e4] text-[#e2685f]",
};

const UPDATES = [
  {
    image: "/images/zoikostream-company-updates/latest-update-captioning.png",
    date: "Aug 20, 2026",
    category: "Platform & Experience",
    statusTag: "Changed",
    title: "Live captioning is now available across supported playback surfaces.",
    description: "Extends accessibility coverage for live and on-demand video across web, mobile and embedded players.",
    appliesTo: "Applies to: All ZoikoStream customers",
    actionLabel: "No action required",
    actionTone: "green" as const,
  },
  {
    image: "/images/zoikostream-company-updates/latest-update-starter-plan.png",
    date: "Effective Sep 1, 2026",
    category: "Commercial & Plans",
    statusTag: "Retired",
    title: "The legacy Starter plan retires; customers migrate to Core.",
    description: "Existing Starter customers are migrated to the Core plan with equivalent or greater included usage.",
    appliesTo: "Applies to: Starter plan customers",
    actionLabel: "Action required",
    actionTone: "red" as const,
  },
  {
    image: "/images/zoikostream-company-updates/latest-update-cto-appointment.png",
    date: "Aug 6, 2026",
    category: "Company & Operations",
    statusTag: "New",
    title: "ZoikoStream appoints a new Chief Trust & Security Officer.",
    description: "Strengthens security and governance leadership across the platform's trust posture.",
    appliesTo: "Applies to: Everyone",
    actionLabel: "No action required",
    actionTone: "green" as const,
  },
  {
    image: "/images/zoikostream-company-updates/latest-update-production-partners.png",
    date: "Jul 29, 2026",
    category: "Live Events",
    statusTag: "Changed",
    title: "Managed production partnerships expand for enterprise events.",
    description: "New production partners extend managed broadcast options for enterprise Live Events customers.",
    appliesTo: "Applies to: Live Events users",
    actionLabel: "No action required",
    actionTone: "green" as const,
  },
  {
    image: "/images/zoikostream-company-updates/latest-update-security-assessment.png",
    date: "Jul 8, 2026",
    category: "Trust & Compliance",
    statusTag: "Changed",
    title: "Annual third-party security assessment completed.",
    description: "Findings and current certifications are documented in the ZoikoStream Trust Center.",
    appliesTo: "Applies to: Everyone",
    actionLabel: "No action required",
    actionTone: "green" as const,
  },
];

export default function SectionLatestUpdates() {
  return (
    <div className="bg-[#f7f9fb] w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px]">
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="flex gap-[12px] items-center">
          <div className="bg-[#5b8def] rounded-full h-[6px] w-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase m-0 whitespace-nowrap">Latest updates</p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] lg:text-[28px] leading-[1.6] tracking-[-0.28px] m-0 w-full">
          Meaningful changes, shown with their timing, scope and action state.
        </h2>

        <div className="flex flex-col gap-[20px] items-start w-full">
          {UPDATES.map((update) => (
            <div key={update.title} className="bg-white border border-[#dde2ea] border-solid rounded-[14px] overflow-hidden flex flex-col lg:flex-row w-full">
              <div className="bg-[#f1f4f8] h-[180px] lg:h-auto w-full lg:w-[220px] shrink-0">
                <img alt={update.title} className="w-full h-full object-cover" src={update.image} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[24px] flex-1 min-w-0 w-full">
                <div className="flex flex-wrap gap-x-[16px] gap-y-[8px] items-center justify-between w-full">
                  <div className="flex flex-wrap gap-x-[16px] gap-y-[4px] items-center">
                    <p className="font-inter font-bold text-[#32353c] text-[12px] m-0 whitespace-nowrap">{update.date}</p>
                    <p className="font-inter font-bold text-[#6a6df0] text-[12px] tracking-[0.36px] uppercase m-0 whitespace-nowrap">{update.category}</p>
                  </div>
                  <div className="border border-[#dde2ea] border-solid rounded-full px-[8px] py-[4px] shrink-0">
                    <p className="font-inter font-normal text-[#9aa1ae] text-[12px] m-0 whitespace-nowrap">{update.statusTag}</p>
                  </div>
                </div>
                <p className="font-sora font-bold text-[#32353c] text-[17px] leading-[1.35] tracking-[-0.17px] m-0 w-full">{update.title}</p>
                <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[1.6] m-0 w-full">{update.description}</p>
                <p className="font-inter font-normal text-[#9aa1ae] text-[12.5px] m-0 w-full">{update.appliesTo}</p>
                <div className={`rounded-full px-[12px] py-[6px] ${TONE_CLASSES[update.actionTone]}`}>
                  <p className="font-inter font-bold text-[11.5px] m-0 whitespace-nowrap">{update.actionLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
